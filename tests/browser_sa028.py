import json
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_mobile import server_url

OUT = Path(__file__).resolve().parents[1] / 'evidence' / 'sa028'
SIZES = [(740, 300), (844, 320), (667, 375), (915, 412), (390, 844), (1280, 720)]

GEOMETRY = '''() => {
    const r = document.querySelector('#scene').getBoundingClientRect();
    const bounds = el => { const b = el.getBoundingClientRect(); return {x:b.x,y:b.y,width:b.width,height:b.height}; };
    return {stage:bounds(document.querySelector('#scene')), arm:bounds(document.querySelector('#arm')),
        buffer:{width:document.querySelector('#scene').width,height:document.querySelector('#scene').height},
        dpr:devicePixelRatio, visual:{width:visualViewport.width,height:visualViewport.height,left:visualViewport.offsetLeft,top:visualViewport.offsetTop},
        hud:[...document.querySelectorAll('.game-rail .hudbox,.game-rail button,.game-rail .progress,.game-rail .message')].filter(e=>e.getClientRects().length).map(e=>({name:e.id||e.className,...bounds(e)})),
        actors:window.__interaction.actors().filter(t=>t.at),
        gutters:[window.__interaction.shot(r.left-1,r.top+r.height/2),window.__interaction.shot(r.right+1,r.top+r.height/2)]};
}'''


def capture(page, name):
    page.screenshot(path=str(OUT / f'{name}.png'))
    page.evaluate('''() => {
        const host=document.createElement('div');host.id='qa-bounds';host.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:1000';
        const mark=(r,color,text)=>{const e=document.createElement('div');e.style.cssText=`position:absolute;left:${r.x}px;top:${r.y}px;width:${r.width}px;height:${r.height}px;border:1px solid ${color};color:${color};font:10px monospace`;e.textContent=text;host.append(e)};
        for(const e of document.querySelectorAll('#scene,.game-rail .hudbox,.game-rail button,.game-rail .progress,.game-rail .message')) if(e.getClientRects().length)mark(e.getBoundingClientRect(),'#f00',e.id||e.className);
        for(const t of window.__interaction.actors())if(t.bounds)mark(t.bounds,'#00f',String(t.id));
        document.body.append(host);
    }''')
    page.screenshot(path=str(OUT / f'{name}-bounds.png'))
    page.evaluate("document.querySelector('#qa-bounds').remove()")


def assert_geometry(g, width, height):
    r = g['stage']
    assert abs(r['width'] / r['height'] - 16 / 9) < .001, g
    assert r['x'] >= 0 and r['y'] >= 0 and r['x'] + r['width'] <= width + .1 and r['y'] + r['height'] <= height + .1, g
    assert g['arm'] == r, g
    assert abs(g['buffer']['width'] - r['width'] * min(g['dpr'], 2)) <= 1, g
    assert abs(g['buffer']['height'] - r['height'] * min(g['dpr'], 2)) <= 1, g
    assert all(s['kind'] == 'outside' and s['id'] is None for s in g['gutters']), g
    for b in g['hud']:
        overlap = min(r['x']+r['width'],b['x']+b['width'])-max(r['x'],b['x']) > .5 and min(r['y']+r['height'],b['y']+b['height'])-max(r['y'],b['y']) > .5
        assert not overlap, (b, r)
        assert b['x'] >= 0 and b['y'] >= 0 and b['x'] + b['width'] <= width + 1 and b['y'] + b['height'] <= height + 1, b


def main():
    OUT.mkdir(exist_ok=True)
    errors, report = [], []
    with server_url() as url, sync_playwright() as p:
        browser = p.chromium.launch()
        for width, height in SIZES:
            desktop = width >= 1000
            ctx = browser.new_context(viewport={'width':width,'height':height}, device_scale_factor=1 if desktop else 3, is_mobile=not desktop, has_touch=not desktop)
            page = ctx.new_page()
            page.on('pageerror', lambda e: errors.append(str(e)))
            page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
            page.goto(url)
            page.locator('#start').wait_for()
            if width < height:
                page.locator('#portrait-bypass').click()
            (page.locator('#start').click() if desktop else page.locator('#start').tap())
            (page.locator('#level1').click() if desktop else page.locator('#level1').tap())
            page.locator('#heraldSkip').wait_for()
            page.wait_for_timeout(750)
            capture(page, f'{width}x{height}-briefing')
            page.locator('#heraldSkip').click()
            page.locator('#herald').wait_for(state='hidden')
            assert page.evaluate('!("__game" in window) && !("__test" in window)')
            if desktop:
                assert page.locator('#punch').is_visible() and page.locator('#grab').is_visible()
                assert_geometry(page.evaluate(GEOMETRY), width, height)
                capture(page, f'{width}x{height}-desktop-controls')
            hit = page.wait_for_function('''() => {
                const c=document.querySelector('#scene'), r=c.getBoundingClientRect();
                const actors=window.__interaction.actors();
                const center=actors.find(t=>!['enemy','friend','dog','thug'].includes(t.kind)&&t.targetCenter&&window.__interaction.shot(t.targetCenter.x,t.targetCenter.y).id===t.id);
                const t=actors.find(t=>t.kind==='enemy'&&t.at&&t.at.x>r.left+20&&t.at.x<r.right-20&&t.at.y>r.top&&t.at.y<r.bottom&&window.__interaction.shot(t.at.x,t.at.y).id===t.id);
                if(!t||!center)return false;
                const send=(type,x,y)=>c.dispatchEvent(new PointerEvent(type,{pointerId:28,pointerType:'touch',clientX:x,clientY:y,bubbles:true,cancelable:true}));
                send('pointerdown',t.at.x-18,t.at.y);send('pointermove',t.at.x,t.at.y);
                const strike=JSON.parse(c.dataset.strike||'{}');
                if(strike.id!==t.id||strike.outcome!=='hit')return false;
                return {target:t,visiblePropCenter:center,strike};
            }''', timeout=15000).json_value()
            page.wait_for_function("Object.values(window.__interaction.arms()).some(a=>a.mode==='touch')")
            g = page.evaluate(GEOMETRY)
            assert_geometry(g, width, height)
            capture(page, f'{width}x{height}-play')
            cancel = page.evaluate('''() => {
                const c=document.querySelector('#scene'),r=c.getBoundingClientRect();
                c.dispatchEvent(new PointerEvent('pointermove',{pointerId:28,pointerType:'touch',clientX:r.left-5,clientY:r.top+r.height/2,bubbles:true}));
                const left=c.dataset.touching;
                const before=c.dataset.strike;
                for(const type of ['pointerdown','pointermove','pointerup'])c.dispatchEvent(new PointerEvent(type,{pointerId:29,pointerType:'touch',clientX:r.left-2,clientY:r.top+r.height/2,bubbles:true}));
                return {left,gutterTouch:c.dataset.touching,unchanged:before===c.dataset.strike};
            }''')
            assert cancel == {'left':'false','gutterTouch':'false','unchanged':True}, cancel
            page.evaluate('''() => {
                const c=document.querySelector('#scene'),r=c.getBoundingClientRect();
                c.dispatchEvent(new PointerEvent('pointerdown',{pointerId:30,pointerType:'touch',clientX:r.left+r.width/2,clientY:r.bottom-5,bubbles:true}));
            }''')
            page.set_viewport_size({'width':height if width>height else 844,'height':width if width>height else 320})
            page.wait_for_function("document.querySelector('#scene').dataset.touching==='false'")
            page.set_viewport_size({'width':width,'height':height})
            page.wait_for_timeout(100)
            assert_geometry(page.evaluate(GEOMETRY), width, height)
            page.locator('#pause').click()
            page.locator('#resume').wait_for()
            capture(page, f'{width}x{height}-pause')
            page.locator('#resume').click()
            report.append({'viewport':[width,height],'geometry':g,'centerSweep':hit,'cancel':cancel})
            print(f'SA028 {width}x{height}: stage/rails/DPR/visible-center sweep/gutters/rotate/pause verified', flush=True)
            ctx.close()
        browser.close()
    (OUT / 'geometry.json').write_text(json.dumps({'cases':report,'errors':errors},ensure_ascii=False,indent=2))
    assert not errors, errors
    print('SA028 browser matrix passed; zero console/page errors', flush=True)


if __name__ == '__main__':
    main()
