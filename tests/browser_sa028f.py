"""SA-028f bounded screenshot handoff, not human visual approval.
Run with .venv-browser/bin/python tests/browser_sa028f.py after bun run build.
"""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_production import production_url
from browser_herald import ARGS, check_layout, point, count

OUT = Path(__file__).resolve().parents[1] / 'evidence' / 'sa028f-scene'


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    report, errors = [], []
    with production_url() as url, sync_playwright() as pw:
        browser = pw.chromium.launch(headless=True, args=ARGS)
        try:
            for width, height in [(740, 300), (844, 320), (667, 375), (915, 412), (1280, 720)]:
                ctx = browser.new_context(viewport={'width': width, 'height': height}, is_mobile=width < 1000, has_touch=True, reduced_motion='reduce')
                page = ctx.new_page()
                page.on('pageerror', lambda e: errors.append(str(e)))
                page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
                page.clock.install(time=0)
                page.goto(url)
                page.locator('#start').wait_for()
                page.clock.pause_at(5000)
                # Decode the exact shipping pixels; count transparency, do not infer it from file metadata.
                alpha = page.evaluate('''async () => {
                    const out={};
                    for(const pose of ['lean','point','mad']) {
                        const image=new Image(); image.src=`assets/gen_herald_nopaper_${pose}.png`; await image.decode();
                        const c=document.createElement('canvas'); c.width=image.width;c.height=image.height;
                        const g=c.getContext('2d');g.drawImage(image,0,0);
                        const d=g.getImageData(0,0,c.width,c.height).data;
                        let transparent=0,opaqueWhite=0;
                        for(let i=0;i<d.length;i+=4){if(d[i+3]===0)transparent++;if(d[i+3]>250&&d[i]>245&&d[i+1]>245&&d[i+2]>245)opaqueWhite++;}
                        out[pose]={width:c.width,height:c.height,transparent,opaqueWhite};
                    } return out;
                }''')
                assert all(p['transparent'] > 100000 for p in alpha.values()), alpha
                page.locator('#start').click()
                page.locator('#level1').click()
                page.clock.run_for(100)
                layouts = []
                for i in range(5):
                    d = check_layout(page)
                    assert d['pose'] == 'lean', d
                    assert abs(d['guy']['w'] - d['guy']['h']) < .01, d
                    assert d['guy']['y'] + d['guy']['h'] <= d['height'], d
                    assert page.locator('#herald').get_attribute('data-art-gate') == 'source-reviewed-runtime-pending-point-rejected'
                    layouts.append(d)
                    if i in (0, 4):
                        page.screenshot(path=str(OUT / f'{width}x{height}-sheet-{i+1}.png'))
                    if i < 4:
                        x, y = point(page, 'paper')
                        page.evaluate('''([x,y])=>{const c=document.querySelector('#scene');for(const [type,dx] of [['pointerdown',-18],['pointermove',0],['pointerup',0]])c.dispatchEvent(new PointerEvent(type,{pointerId:28,pointerType:'touch',clientX:x+dx,clientY:y,bubbles:true}));}''', [x, y])
                        page.clock.run_for(650)
                        assert count(page) == f'{i+2} / 5'
                report.append({'viewport':[width,height], 'layouts':layouts, 'alpha':alpha, 'lastSheetText':page.locator('.hd-semantic').inner_text()})
                print(f'{width}x{height}: five sheet layouts pass; first/last PNG captured', flush=True)
                ctx.close()
        finally:
            browser.close()
    assert not errors, errors
    (OUT / 'report.json').write_text(json.dumps({'cases':report,'errors':errors,'runtimeVisualReview':'PENDING image-bearing reviewer'},ensure_ascii=False,indent=2))


if __name__ == '__main__':
    main()
