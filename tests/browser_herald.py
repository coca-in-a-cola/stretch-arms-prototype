"""Production scene-canvas herald acceptance; no visual approval is implied by geometry checks."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_production import production_url, assert_production

OUT = Path(__file__).resolve().parents[1] / 'evidence' / 'sa028e-scene'
ARGS = ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']
UNLOCK = 'localStorage.setItem("long-arms.progress.v2", JSON.stringify({version:2,unlocked:2,best:0}))'


def geometry(page):
    return page.evaluate('JSON.parse(document.querySelector("#herald").dataset.geometry)')


def count(page):
    return page.locator('.hd-semantic small').inner_text().split('·')[0].strip()


def point(page, name, fx=.5, fy=.45):
    b = geometry(page)[name]
    r = page.locator('#scene').bounding_box()
    return r['x'] + b['x'] + b['w'] * fx, r['y'] + b['y'] + b['h'] * fy


def check_layout(page):
    d = geometry(page); p = d['paper']; assert p, d
    assert 0 <= p['x'] < p['x'] + p['w'] <= d['width'] + .1, d
    assert 0 <= p['y'] < p['y'] + p['h'] <= d['height'] + .1, d
    measured = page.evaluate('''() => {
        const d=JSON.parse(document.querySelector('#herald').dataset.geometry), c=document.createElement('canvas').getContext('2d');
        return d.rows.map(r=>{c.font=`900 ${r.size}px Georgia, serif`;return c.measureText(r.text).width});
    }''')
    margin = max(8, p['w'] * .045)
    assert all(w <= p['w'] - margin * 2 + .1 for w in measured), (d, measured)
    assert all(row['y'] <= p['h'] - margin for row in d['rows']), d
    assert d['font'] >= 10, d
    assert page.locator('#herald img, #herald .hd-flyer').count() == 0
    assert page.locator('.hd-semantic').bounding_box()['width'] == 1
    s = page.locator('#heraldSkip').bounding_box(); r = page.locator('#scene').bounding_box()
    assert s['height'] >= 44
    assert s['x'] + s['width'] <= r['x'] + .1 or s['x'] >= r['x'] + r['width'] - .1 or s['y'] >= r['y'] + r['height'] - .1, (s, r)
    assert page.evaluate('''() => {const a=document.querySelector('#arm'),h=document.querySelector('#herald');return !!(h.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_FOLLOWING)}''')
    return d


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    errors = []; report = []
    with production_url() as url, sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=ARGS)
        try:
            # Full-motion desktop: punch, tear, penalty, skip, no-repeat and level-two text.
            ctx = browser.new_context(viewport={'width': 1440, 'height': 900}, reduced_motion='no-preference')
            ctx.add_init_script(UNLOCK)
            page = ctx.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            page.clock.install(time=0); page.goto(url); page.locator('#start').wait_for(); page.clock.pause_at(5000)
            assert_production(page)
            page.locator('#start').click(); page.locator('#level1').click(); page.clock.run_for(1200)
            check_layout(page); assert count(page) == '1 / 5'
            assert page.evaluate('JSON.parse(document.querySelector("#scene").dataset.aim||"[]").filter(t=>t.kind==="enemy").length') == 0
            page.screenshot(path=str(OUT / 'desktop-sheet.png'))
            x,y = point(page, 'paper'); page.mouse.move(x,y); page.mouse.down(); page.mouse.up(); page.clock.run_for(300)
            assert page.locator('#herald').get_attribute('data-phase') == 'torn', page.evaluate('({phase:document.querySelector("#herald").dataset.phase,hit:document.querySelector("#herald").dataset.hit,strike:document.querySelector("#scene").dataset.strike})')
            page.screenshot(path=str(OUT / 'desktop-torn.png')); page.clock.run_for(700)
            assert count(page) == '2 / 5' and page.locator('#stamina').inner_text() == '100'
            x,y = point(page, 'guy', .42,.5); page.mouse.click(x,y); page.clock.run_for(250)
            assert page.locator('#hearts').inner_text() == '♥♥♥♥♡'
            assert page.locator('#herald').get_attribute('data-phase') == 'mad' and count(page) == '2 / 5'
            page.screenshot(path=str(OUT / 'desktop-offended.png'))
            page.clock.run_for(1800); page.locator('#heraldSkip').click(); page.clock.run_for(1300)
            assert page.locator('#herald').is_hidden()
            page.locator('#pause').click(); page.locator('#select').click(); page.locator('#level1').click(); page.clock.run_for(800)
            assert page.locator('#herald').is_hidden()
            page.locator('#pause').click(); page.locator('#select').click(); page.locator('#level2').click(); page.clock.run_for(1200)
            assert count(page) == '1 / 4' and 'УЛИЦА' in page.locator('.hd-semantic h3').inner_text()
            page.keyboard.press('Escape'); page.clock.run_for(1300); assert page.locator('#herald').is_hidden()
            report.append({'desktop': 'tear/advance, stamina, herald penalty, skip, retry, street, Esc verified'})
            ctx.close()
            for width,height in [(740,300),(844,320),(667,375),(915,412),(390,844),(1280,720)]:
                ctx = browser.new_context(viewport={'width':width,'height':height}, is_mobile=True, has_touch=True, reduced_motion='reduce')
                page = ctx.new_page()
                page.on('pageerror', lambda e: errors.append(str(e)))
                page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
                page.clock.install(time=0); page.goto(url); page.locator('#start').wait_for(); page.clock.pause_at(5000)
                if page.locator('#portrait-bypass').is_visible(): page.locator('#portrait-bypass').tap()
                page.locator('#start').tap(); page.locator('#level1').tap(); page.clock.run_for(100)
                assert 'Веди рукой' in page.locator('.hd-semantic').inner_text()
                layouts = []
                # Check every paper, not just the shortest first instruction.
                for i in range(5):
                    layouts.append(check_layout(page))
                    page.screenshot(path=str(OUT / f'{width}x{height}-sheet-{i+1}.png'))
                    if i < 4:
                        x,y = point(page,'paper')
                        page.evaluate('''([x,y])=>{const c=document.querySelector('#scene');for(const [type,dx] of [['pointerdown',-18],['pointermove',0],['pointerup',0]]) c.dispatchEvent(new PointerEvent(type,{pointerId:11,pointerType:'touch',clientX:x+dx,clientY:y,bubbles:true}));}''',[x,y])
                        page.clock.run_for(650); assert count(page) == f'{i+2} / 5', (width, height, i, count(page), page.locator('#herald').get_attribute('data-hit'), page.locator('#herald').get_attribute('data-phase'))
                page.clock.run_for(14200); assert page.locator('#herald').is_hidden()
                report.append({'viewport':[width,height], 'layouts':layouts, 'reducedMotion':'immediate touch advance, auto-advance verified'})
                ctx.close()
        finally: browser.close()
    assert not errors, errors
    result = {'consoleErrors':errors,'checks':report,'visualInspection':'UNKNOWN: no native vision; ART gate remains open'}
    (OUT/'report.json').write_text(json.dumps(result,indent=2,ensure_ascii=False))
    print(json.dumps({'consoleErrors':errors,'matrix':len(report)-1,'desktop':'passed','visualInspection':result['visualInspection']},ensure_ascii=False))

if __name__ == '__main__': main()
