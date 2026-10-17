import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'evidence'
URL = os.environ.get('GAME_DEV_URL', 'http://127.0.0.1:5173')

async def main():
    OUT.mkdir(exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True, args=['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
        errors = []
        page = await browser.new_page(viewport={'width':1440,'height':960}, device_scale_factor=1)
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        await page.goto(URL)
        await page.wait_for_function('window.__test && window.__test.webgl().triangles > 1000')
        webgl = await page.evaluate('window.__test.webgl()')
        assert 'WebGL' in webgl['context'] and webgl['calls'] > 10
        await page.screenshot(path=str(OUT/'desktop-menu.png'))
        await page.get_by_role('button',name='ВО ДВОР').click()
        assert await page.locator('#level2').is_disabled()
        await page.locator('#level1').click()
        await page.evaluate('window.__game.pause()')
        before = await page.evaluate('JSON.stringify({hp:__game.hp,stamina:__game.stamina,time:__game.elapsed})')
        await page.wait_for_timeout(400)
        assert before == await page.evaluate('JSON.stringify({hp:__game.hp,stamina:__game.stamina,time:__game.elapsed})')
        await page.evaluate('window.__game.pause()')
        async def hit(kind, button='left', pg=None):
            pg = pg or page
            handle = await pg.wait_for_function('(kind)=>{const t=__game.targets.find(t=>t.kind===kind&&t.age>.5);return t?__test.project(t.id):null}',arg=kind)
            target = await handle.json_value()
            before = await pg.evaluate('__test.strikes().length')
            await pg.mouse.click(target['x'],target['y'],button=button)
            await pg.wait_for_function('(n)=>__test.strikes().length>n',arg=before)
        await hit('bottle','right')
        assert await page.evaluate('__game.held') == 'bottle'
        await hit('enemy','right')
        assert await page.evaluate('__game.defeated') == 1
        await page.evaluate('__game.stamina=100')
        await hit('dog')
        assert await page.evaluate('__game.hp') == 4
        await page.evaluate('__game.stamina=100;__game.spawn()')
        await page.evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
        await hit('enemy')
        assert await page.evaluate('__game.defeated') == 2, await page.evaluate('({message:__game.message,stamina:__game.stamina,hp:__game.hp,targets:__game.targets})')
        await page.wait_for_timeout(90)
        await page.screenshot(path=str(OUT/'desktop-impact.png'))
        await page.locator('#pause').click()
        await page.screenshot(path=str(OUT/'desktop-pause.png'))
        await page.locator('#resume').click()
        await page.evaluate('''() => { while(__game.mode==='play'){__game.stamina=100;if(!__game.targets.some(t=>t.kind==='enemy'))__game.spawn();__game.act('punch',__game.targets.find(t=>t.kind==='enemy').id);} }''')
        await page.wait_for_timeout(100)
        assert await page.evaluate('__game.won')
        assert json.loads(await page.evaluate('localStorage.getItem("long-arms.progress.v1")'))['unlocked'] == 2
        await page.screenshot(path=str(OUT/'desktop-result.png'))
        await page.locator('#resume').click()
        assert await page.evaluate('__game.hp') == 5
        await page.reload()
        await page.wait_for_function('window.__game')
        assert await page.evaluate('__game.progress.unlocked') == 2
        await page.get_by_role('button',name='ВО ДВОР').click()
        await page.locator('#level2').click()
        assert await page.evaluate('__game.level') == 2
        await page.screenshot(path=str(OUT/'desktop-level2.png'))
        mobile = await browser.new_context(viewport={'width':390,'height':844},device_scale_factor=1,is_mobile=True,has_touch=True)
        mp = await mobile.new_page()
        mp.on('pageerror',lambda e:errors.append(str(e)))
        mp.on('console',lambda m:errors.append(m.text) if m.type=='error' else None)
        await mp.goto(URL)
        await mp.wait_for_function('window.__test && window.__test.webgl().triangles>500')
        await mp.screenshot(path=str(OUT/'mobile-menu.png'))
        await mp.get_by_role('button',name='ВО ДВОР').tap()
        await mp.locator('#level1').tap()
        t=await (await mp.wait_for_function('(()=>{const t=__game.targets.find(t=>t.kind==="enemy"&&t.age>.5);return t?__test.project(t.id):null})()')).json_value()
        await mp.touchscreen.tap(t['x'],t['y'])
        await mp.locator('#punch').tap()
        await mp.wait_for_function('__test.strikes().length>0')
        assert await mp.evaluate('__game.defeated') == 1
        await mp.evaluate('__game.stamina=100;__game.spawn()')
        await mp.evaluate('new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))')
        await mp.screenshot(path=str(OUT/'mobile-play.png'))
        for kind in ['bottle','enemy']:
            t=await (await mp.wait_for_function('(kind)=>{const t=__game.targets.find(t=>t.kind===kind&&t.age>.5);return t?__test.project(t.id):null}',arg=kind)).json_value()
            n=await mp.evaluate('__test.strikes().length')
            await mp.touchscreen.tap(t['x'],t['y'])
            await mp.locator('#grab').tap()
            await mp.wait_for_function('(n)=>__test.strikes().length>n',arg=n)
        assert await mp.evaluate('__game.defeated') == 2
        assert await mp.evaluate('__game.held') is None
        await mp.set_viewport_size({'width':844,'height':390})
        await mp.evaluate('__game.spawn()')
        await mp.wait_for_timeout(100)
        await mp.screenshot(path=str(OUT/'mobile-landscape.png'))
        assert not errors, errors
        report={'scope':'Supplemental DEV hooks; win is accelerated, NOT a natural playthrough','webgl':webgl,'consoleErrors':errors,'checks':['desktop render','locked level','pause freeze','raycast prop grab/throw','protected dog penalty','real mouse punch','impact capture','accelerated win/save','retry full HP','reload persistence','level 2','touch aim + punch + grab/throw','portrait/landscape render']}
        (OUT/'browser-report.json').write_text(json.dumps(report,indent=2))
        print(json.dumps(report,indent=2))
        await browser.close()

asyncio.run(main())
