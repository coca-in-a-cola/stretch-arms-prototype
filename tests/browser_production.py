import json
import os
import socket
from contextlib import contextmanager
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright, Page

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'evidence' / 'production'


@contextmanager
def production_url():
    external = os.environ.get('GAME_URL')
    if external:
        yield external
        return
    server = ThreadingHTTPServer(('127.0.0.1', 0), partial(SimpleHTTPRequestHandler, directory=str(ROOT / 'dist')))
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f'http://127.0.0.1:{server.server_port}/'
    finally:
        server.shutdown()
        server.server_close()
        thread.join()


def clickable_enemy(page: Page) -> tuple[float, float]:
    """Screen point the game publishes (data-aim) where free-aim would currently strike an exposed enemy."""
    handle = page.wait_for_function('''()=>{const aim=JSON.parse(document.querySelector("#scene").dataset.aim||"[]");
        const e=aim.find(t=>t.kind==="enemy"&&t.at);return e?e.at:null}''', timeout=20000)
    at = handle.json_value()
    return at['x'], at['y']


def assert_production(page: Page) -> None:
    assert page.evaluate('!("__game" in window) && !("__test" in window)')


def snapshot(page: Page) -> str:
    return page.locator('#hearts').inner_text() + '|' + page.locator('#stamina').inner_text() + '|' + page.locator('#progress').inner_text() + '|' + page.locator('#scene').get_attribute('aria-label')


def capture(page: Page, name: str) -> None:
    page.screenshot(path=str(OUT / f'{name}.png'))


def win_level1(page: Page, width: int, height: int, touch: bool = False) -> None:
    for index in range(9):
        page.wait_for_function('Number(document.querySelector("#stamina").textContent)>=30')
        x, y = clickable_enemy(page)
        if index == 0:
            capture(page, 'portrait-level1' if touch else 'desktop-level1')
        if touch:
            page.touchscreen.tap(x, y)
            page.locator('#punch').tap()
        else:
            page.mouse.click(x, y)
        if index < 8:
            page.wait_for_function('(n)=>document.querySelector("#progress").textContent.includes(`/ ${n} ИЗ`)', arg=index + 1)
    page.locator('#app[data-mode=result]').wait_for()
    assert 'КРАСИВО' in page.locator('h2').inner_text()
    assert page.locator('#hearts').inner_text() == '♥♥♥♥♥'


def check_buttons(page: Page) -> None:
    for button in page.get_by_role('button').all():
        if button.is_visible():
            bounds = button.bounding_box()
            assert bounds and bounds['height'] >= 44, (button.inner_text(), bounds)
            assert bounds['x'] >= 0 and bounds['y'] >= 0, (button.inner_text(), bounds)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    errors: list[str] = []
    with production_url() as url, sync_playwright() as p:
        with socket.socket() as reservation:
            reservation.bind(('127.0.0.1',0))
            debug_port=reservation.getsockname()[1]
        browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', f'--remote-debugging-port={debug_port}'])
        try:
            attached=p.chromium.connect_over_cdp(f'http://127.0.0.1:{debug_port}',no_defaults=True)
            context = attached.contexts[0]
            page = context.new_page()
            page.set_viewport_size({'width':1440,'height':960})
            page.emulate_media(reduced_motion='reduce')
            page.on('pageerror', lambda error: errors.append(str(error)))
            page.on('console', lambda message: errors.append(message.text) if message.type == 'error' else None)
            page.goto(url)
            page.locator('#start').wait_for()
            assert_production(page)
            assert page.locator('#motion').get_attribute('aria-pressed') == 'true'
            capture(page, 'desktop-menu')
            page.locator('#mute').click()
            assert page.locator('#mute').get_attribute('aria-pressed') == 'true'
            page.locator('#motion').click()
            assert page.locator('#motion').get_attribute('aria-pressed') == 'false'
            page.reload()
            assert page.locator('#mute').get_attribute('aria-pressed') == 'true'
            assert page.locator('#motion').get_attribute('aria-pressed') == 'false'
            page.locator('#start').click()
            assert page.locator('#level2').is_disabled()
            page.locator('#level1').click()
            page.locator('#pause').click()
            frozen = snapshot(page)
            page.wait_for_timeout(1200)
            assert snapshot(page) == frozen
            capture(page, 'desktop-pause')
            page.locator('#resume').click()
            cdp = context.new_cdp_session(page)
            before_background=snapshot(page)
            cdp.send('Page.setWebLifecycleState', {'state':'frozen'})
            page.wait_for_timeout(1400)
            cdp.send('Page.setWebLifecycleState', {'state':'active'})
            page.bring_to_front()
            page.wait_for_function('document.querySelector("#app").dataset.mode === "pause"')
            frozen = snapshot(page)
            assert frozen == before_background
            page.wait_for_timeout(1400)
            assert snapshot(page) == frozen
            cdp.send('Emulation.setFocusEmulationEnabled', {'enabled':True})
            page.wait_for_function('document.visibilityState === "visible"')
            page.locator('#resume').click()
            win_level1(page, 1440, 960)
            capture(page, 'desktop-win')
            page.locator('#select').click()
            assert page.locator('#level2').is_enabled()
            page.locator('#level2').click()
            page.wait_for_function('document.querySelector("#app").dataset.level==="2"')
            capture(page, 'desktop-level2')
            page.locator('#app[data-mode=result]').wait_for(timeout=60000)
            assert 'НЕ ТОТ' in page.locator('h2').inner_text()
            assert page.locator('#hearts').inner_text() == '♡♡♡♡♡'
            capture(page, 'desktop-loss')
            page.locator('#resume').click()
            assert page.locator('#hearts').inner_text() == '♥♥♥♥♥'
            assert '/ 0 ИЗ 14' in page.locator('#progress').inner_text()
            page.reload()
            page.locator('#start').click()
            assert page.locator('#level2').is_enabled()
            mobile = browser.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True)
            mp = mobile.new_page()
            mp.on('pageerror',lambda error:errors.append(str(error)))
            mp.on('console',lambda message:errors.append(message.text) if message.type=='error' else None)
            mp.goto(url)
            mp.locator('#start').wait_for()
            assert_production(mp)
            capture(mp, 'portrait-menu')
            check_buttons(mp)
            mp.locator('#start').tap()
            mp.locator('#level1').tap()
            win_level1(mp, 390, 844, touch=True)
            capture(mp, 'portrait-win')
            mp.locator('#select').tap()
            mp.locator('#level2').tap()
            capture(mp, 'portrait-level2')
            x,y=clickable_enemy(mp)
            mp.touchscreen.tap(x,y)
            mp.locator('#punch').tap()
            mp.wait_for_function('document.querySelector("#progress").textContent.includes("/ 1 ИЗ")')
            mp.set_viewport_size({'width':844,'height':390})
            capture(mp, 'landscape-level2')
            check_buttons(mp)
            mp.locator('#pause').tap()
            capture(mp, 'landscape-pause')
            check_buttons(mp)
            fallback = browser.new_context()
            fp = fallback.new_page()
            fp.add_init_script('HTMLCanvasElement.prototype.getContext = function(){ return null; }')
            fp.goto(url)
            fp.get_by_role('alert').wait_for()
            assert fp.get_by_role('button',name='ОБНОВИТЬ').is_visible()
            capture(fp, 'webgl-fallback')
            assert not errors, errors
            report={'url':url,'mutableHooks':False,'consoleErrors':errors,'flows':['desktop natural 9-hit win, full HP, unlock and persistence','touch natural 9-hit win, full HP and level2 hit','level2 natural five-deadline loss and full-HP retry','pause freezes public state','real CDP background freeze auto-pauses; public state stays frozen on return','system reduced motion + persisted override and mute','WebGL unavailable fallback','390x844 portrait and 844x390 landscape controls >=44px'], 'screenshots':sorted(path.name for path in OUT.glob('*.png'))}
            (OUT/'report.json').write_text(json.dumps(report,indent=2))
            print(json.dumps(report,indent=2))
        finally:
            browser.close()


if __name__ == '__main__':
    main()
