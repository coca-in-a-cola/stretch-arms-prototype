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
        const c=document.querySelector("#scene");
        const e=aim.find(t=>t.kind==="enemy"&&t.at&&document.elementFromPoint(t.at.x,t.at.y)===c);return e?e.at:null}''', timeout=20000)
    at = handle.json_value()
    return at['x'], at['y']


def assert_production(page: Page) -> None:
    assert page.evaluate('!("__game" in window) && !("__test" in window)')


def snapshot(page: Page) -> str:
    return page.locator('#hearts').inner_text() + '|' + page.locator('#stamina').inner_text() + '|' + page.locator('#progress').inner_text() + '|' + page.locator('#scene').get_attribute('aria-label')


def capture(page: Page, name: str) -> None:
    page.screenshot(path=str(OUT / f'{name}.png'))


def strike_until_progress(page: Page, index: int, touch: bool, hit_shot: str | None = None) -> None:
    """Natural play: aim at a published exposed-enemy point and swing. Enemies really duck behind cover,
    so a swing can honestly land on the barrel instead — then we simply swing again, like a player would."""
    for attempt in range(40):  # bullies take several punches (health bars); ducks / friends in the way cost retries
        try:
            page.wait_for_function('document.querySelector("#app").dataset.mode==="result"||Number(document.querySelector("#stamina").textContent)>=30', timeout=60000)
        except Exception:
            raise AssertionError('stalled: ' + page.evaluate('document.querySelector("#app").dataset.mode + " | " + document.querySelector("#ui").innerText.slice(0,300)'))
        if page.locator('#app').get_attribute('data-mode') == 'result':
            return  # the level ended meanwhile (the last bully fell to a piano, a geyser or a missed swing count)
        x, y = clickable_enemy(page)
        if touch:
            page.touchscreen.tap(x, y)
            page.locator('#punch').tap()
        else:
            page.mouse.move(x, y)
            page.mouse.click(x, y)
        if hit_shot and attempt == 0:
            page.wait_for_timeout(150)
            capture(page, hit_shot)
        try:
            page.wait_for_function('(n)=>{const p=document.querySelector("#progress");return !p||!p.textContent.includes(`/ ${n} ИЗ`)}', arg=index, timeout=900)
            return
        except Exception:
            continue
    raise AssertionError(f'could not land strike {index + 1}')


def win_level1(page: Page, width: int, height: int, touch: bool = False) -> None:
    """Natural play until the bar is won; a lost attempt is retried from the result screen, like a player would."""
    for attempt in range(3):
        play_level1(page, touch, attempt == 0)
        if 'КРАСИВО' in page.locator('h2').inner_text():
            break
        print('bar attempt', attempt + 1, 'lost:', page.locator('#hearts').inner_text(), '— retrying')
        (page.locator('#retry').tap() if touch else page.locator('#retry').click())
    assert 'КРАСИВО' in page.locator('h2').inner_text()
    hearts = page.locator('#hearts').inner_text()
    assert hearts.count('♥') >= 1, hearts


def play_level1(page: Page, touch: bool, first: bool) -> None:
    for index in range(12):  # the bar's goal: 12 patrons
        if page.locator('#app').get_attribute('data-mode') == 'result':
            break  # a falling piano / geyser knocked some out for us: KOs that count too
        if index == 0 and first:
            page.wait_for_timeout(700)
            capture(page, 'portrait' if touch else 'level1')
        strike_until_progress(page, index, touch, None if touch or index != 1 or not first else 'hit-moment')
    page.locator('#app[data-mode=result]').wait_for(timeout=120000)


def check_buttons(page: Page) -> None:
    for button in page.get_by_role('button').all():
        if button.is_visible():
            bounds = button.bounding_box()
            assert bounds and bounds['height'] >= 44, (button.inner_text(), bounds)
            assert bounds['x'] >= 0 and bounds['y'] >= 0, (button.inner_text(), bounds)


def aim_entry(page: Page, kind: str, frame: str | None = None):
    return page.evaluate('([kind, frame]) => JSON.parse(document.querySelector("#scene").dataset.aim || "[]").find(t => t.kind === kind && t.at && (!frame || t.frame === frame)) || null', [kind, frame])


def advance_until(page: Page, kind: str, frame: str | None, limit_ms: int = 20000):
    """Fake clock: step the game in 100 ms slices until an actor shows the wanted drawn frame."""
    for _ in range(limit_ms // 100):
        hit = aim_entry(page, kind, frame)
        if hit:
            return hit
        page.clock.run_for(100)
    raise AssertionError(f'no {kind} reached frame {frame}')


def acting_evidence(browser, url: str, errors: list[str]) -> None:
    """Full motion, deterministic fake clock: first-person arms at rest and mid-punch, the drawn
    wind-up / hurt frames of a bully and the sad dog frame, on both levels."""
    ctx = browser.new_context(viewport={'width': 1440, 'height': 960}, reduced_motion='no-preference')
    ctx.add_init_script('localStorage.setItem("long-arms.progress.v1", JSON.stringify({version:1,unlocked:2,best:0}))')
    page = ctx.new_page()
    page.on('pageerror', lambda error: errors.append(str(error)))
    page.on('console', lambda message: errors.append(message.text) if message.type == 'error' else None)
    page.clock.install(time=0)
    page.goto(url)
    page.locator('#start').wait_for()
    page.clock.pause_at(5000)  # game time now only moves with run_for(), never while screenshotting
    assert_production(page)
    page.locator('#start').click()
    page.locator('#level1').click()
    page.mouse.move(720, 300)
    page.clock.run_for(900)
    capture(page, 'arm-idle-level1')
    advance_until(page, 'enemy', 'windup')
    page.clock.run_for(200)
    capture(page, 'enemy-windup')
    enemy = advance_until(page, 'enemy', None)
    # Prefer a near bully clear of the front barrels (not a tiny one in a window) so the hurt frame reads.
    for _ in range(120):
        open_enemy = page.evaluate('() => JSON.parse(document.querySelector("#scene").dataset.aim || "[]").find(t => t.kind === "enemy" && t.layer !== "background" && t.at && t.at.x > innerWidth / 2) || null')
        if open_enemy:
            enemy = open_enemy
            break
        page.clock.run_for(100)
    page.mouse.move(enemy['at']['x'], enemy['at']['y'])
    page.mouse.down()
    page.mouse.up()
    page.clock.run_for(130)
    capture(page, 'arm-punch')
    page.clock.run_for(200)  # fist retracting, bully still in the hurt frame
    capture(page, 'enemy-hit')
    page.clock.run_for(1200)
    dog = advance_until(page, 'dog', 'sit')
    page.mouse.move(dog['at']['x'], dog['at']['y'])
    page.mouse.down()
    page.mouse.up()
    page.clock.run_for(700)
    capture(page, 'dog-sad')
    assert aim_entry(page, 'dog', 'sad'), 'dog did not switch to its sad frame'
    page.locator('#pause').click()
    page.locator('#select').click()
    page.locator('#level2').click()
    page.mouse.move(720, 300)
    page.clock.run_for(900)
    capture(page, 'arm-idle-level2')
    ctx.close()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for old in OUT.glob('*.png'):
        old.unlink()
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
            capture(page, 'menu')
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
            capture(page, 'pause')
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
            capture(page, 'win')
            page.locator('#select').click()
            assert page.locator('#level2').is_enabled()
            page.locator('#level2').click()
            page.wait_for_function('document.querySelector("#app").dataset.level==="2"')
            page.wait_for_timeout(2600)
            capture(page, 'level2')
            page.locator('#app[data-mode=result]').wait_for(timeout=180000)
            assert 'НЕ ТОТ' in page.locator('h2').inner_text()
            assert page.locator('#hearts').inner_text() == '♡♡♡♡♡'
            capture(page, 'loss')
            page.locator('#retry').click()
            assert page.locator('#hearts').inner_text() == '♥♥♥♥♥'
            assert '/ 0 ИЗ 22' in page.locator('#progress').inner_text()
            page.reload()
            page.locator('#start').click()
            assert page.locator('#level2').is_enabled()
            page.close()  # software GL: don't let the idle desktop scene compete with the phone run
            mobile = browser.new_context(viewport={'width':390,'height':844}, is_mobile=True, has_touch=True)
            mp = mobile.new_page()
            mp.on('pageerror',lambda error:errors.append(str(error)))
            mp.on('console',lambda message:errors.append(message.text) if message.type=='error' else None)
            mp.goto(url)
            mp.locator('#start').wait_for(timeout=90000)
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
            strike_until_progress(mp, 0, True)
            mp.set_viewport_size({'width':844,'height':390})
            capture(mp, 'landscape')
            check_buttons(mp)
            mp.locator('#pause').tap()
            capture(mp, 'landscape-pause')
            check_buttons(mp)
            acting_evidence(browser, url, errors)
            fallback = browser.new_context()
            fp = fallback.new_page()
            fp.add_init_script('HTMLCanvasElement.prototype.getContext = function(){ return null; }')
            fp.goto(url)
            fp.get_by_role('alert').wait_for()
            assert fp.get_by_role('button',name='ОБНОВИТЬ').is_visible()
            capture(fp, 'webgl-fallback')
            assert not errors, errors
            report={'url':url,'mutableHooks':False,'consoleErrors':errors,'flows':['desktop natural 12-KO bar win (retry when an enemy ducks), hit-moment capture, unlock and persistence','touch natural 12-KO bar win and level2 hit','level2 natural five-deadline loss and full-HP retry','pause freezes public state','real CDP background freeze auto-pauses; public state stays frozen on return','system reduced motion + persisted override and mute','WebGL unavailable fallback','390x844 portrait and 844x390 landscape controls >=44px','full-motion fake-clock acting: arms idle both levels, mid-punch, bully wind-up and hurt frames, sad dog frame'], 'screenshots':sorted(path.name for path in OUT.glob('*.png'))}
            (OUT/'report.json').write_text(json.dumps(report,indent=2))
            print(json.dumps(report,indent=2))
        finally:
            browser.close()


if __name__ == '__main__':
    main()
