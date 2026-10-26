import json
import math
import os
import socket
from contextlib import contextmanager
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from playwright.sync_api import sync_playwright, Page

ROOT = Path(__file__).resolve().parents[1]
EVIDENCE = ROOT / 'evidence'


@contextmanager
def server_url():
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


def check_buttons(page: Page) -> None:
    for btn in page.get_by_role('button').all():
        if btn.is_visible():
            box = btn.bounding_box()
            assert box and box['height'] >= 44, f'Button {btn.inner_text()!r} height < 44px: {box}'
            assert box['x'] >= 0 and box['y'] >= 0, f'Button {btn.inner_text()!r} out of bounds: {box}'


def skip_briefing_if_active(page: Page, touch: bool = True) -> None:
    try:
        skip = page.locator('#heraldSkip')
        if skip.is_visible(timeout=3000):
            skip.tap() if touch else skip.click()
            page.locator('#herald').wait_for(state='hidden', timeout=10000)
    except Exception:
        pass


def test_portrait_prompt(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#orientation-prompt').wait_for(state='visible', timeout=20000)
    text = page.locator('#orientation-prompt').inner_text()
    assert 'Пожалуйста, переверните устройство в горизонтальный режим' in text, text

    bypass_btn = page.locator('#portrait-bypass')
    assert bypass_btn.is_visible()
    box = bypass_btn.bounding_box()
    assert box and box['height'] >= 44, f'Bypass button height: {box}'
    assert 'Продолжить' in bypass_btn.inner_text()

    page.screenshot(path=str(EVIDENCE / 'sa027-portrait-prompt.png'))

    bypass_btn.tap()
    page.locator('#orientation-prompt').wait_for(state='hidden', timeout=5000)
    assert page.locator('#start').is_visible()
    ctx.close()


def test_landscape_667x375(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 667, 'height': 375}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#start').wait_for(timeout=20000)
    check_buttons(page)
    page.locator('#start').tap()
    page.locator('#level1').tap()
    skip_briefing_if_active(page, touch=True)

    assert page.locator('#punch').count() == 0 or not page.locator('#punch').is_visible(), 'Punch button must be removed on mobile'
    assert page.locator('#grab').count() == 0 or not page.locator('#grab').is_visible(), 'Grab button must be removed on mobile'
    check_buttons(page)

    assert page.locator('#hearts').is_visible()
    assert page.locator('#pause').is_visible()
    assert page.locator('#stamina').is_visible()
    assert page.locator('#progress').is_visible()

    page.wait_for_timeout(300)
    pt = page.evaluate('''() => {
        for (const t of (window.__game?.actors || [])) {
            if (t.kind === 'enemy') {
                const p = window.__test?.project?.(t.id);
                if (p) return p;
            }
        }
        return { x: 330, y: 180 };
    }''')
    x = pt['x']
    y = pt['y']
    page.evaluate(f'''() => {{
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointerdown", {{ pointerId: 2, pointerType: "touch", clientX: {x - 30}, clientY: {y}, bubbles: true }}));
        canvas.dispatchEvent(new PointerEvent("pointermove", {{ pointerId: 2, pointerType: "touch", clientX: {x + 30}, clientY: {y}, bubbles: true }}));
        canvas.dispatchEvent(new PointerEvent("pointerup", {{ pointerId: 2, pointerType: "touch", clientX: {x + 30}, clientY: {y}, bubbles: true }}));
    }}''')
    page.wait_for_timeout(300)

    page.screenshot(path=str(EVIDENCE / 'sa027-mobile-667x375.png'))
    ctx.close()


def test_landscape_844x390(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 844, 'height': 390}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#start').wait_for(timeout=20000)
    page.locator('#start').tap()
    page.locator('#level1').tap()

    page.wait_for_timeout(400)
    page.screenshot(path=str(EVIDENCE / 'sa027-tutorial-844x390.png'))
    skip_briefing_if_active(page, touch=True)

    assert page.locator('#punch').count() == 0 or not page.locator('#punch').is_visible(), 'Punch button must be removed on mobile'
    assert page.locator('#grab').count() == 0 or not page.locator('#grab').is_visible(), 'Grab button must be removed on mobile'
    check_buttons(page)

    page.wait_for_timeout(300)
    pt = page.evaluate('''() => {
        for (const t of (window.__game?.actors || [])) {
            if (t.kind === 'enemy') {
                const p = window.__test?.project?.(t.id);
                if (p) return p;
            }
        }
        return { x: 420, y: 190 };
    }''')
    x = pt['x']
    y = pt['y']
    page.evaluate(f'''() => {{
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointerdown", {{ pointerId: 3, pointerType: "touch", clientX: {x - 35}, clientY: {y}, bubbles: true }}));
        canvas.dispatchEvent(new PointerEvent("pointermove", {{ pointerId: 3, pointerType: "touch", clientX: {x + 35}, clientY: {y}, bubbles: true }}));
        canvas.dispatchEvent(new PointerEvent("pointerup", {{ pointerId: 3, pointerType: "touch", clientX: {x + 35}, clientY: {y}, bubbles: true }}));
    }}''')
    page.wait_for_timeout(200)

    page.screenshot(path=str(EVIDENCE / 'sa027-mobile-844x390.png'))
    ctx.close()


def test_landscape_915x412(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 915, 'height': 412}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#start').wait_for(timeout=20000)
    page.locator('#start').tap()
    page.locator('#level2').tap()
    skip_briefing_if_active(page, touch=True)

    page.locator('#pause').wait_for(timeout=10000)
    page.locator('#pause').tap()
    page.locator('#resume').wait_for(timeout=5000)
    check_buttons(page)

    page.screenshot(path=str(EVIDENCE / 'sa027-mobile-915x412.png'))
    page.locator('#resume').tap()
    ctx.close()


def test_desktop_regression(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 1280, 'height': 720})
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#start').wait_for(timeout=20000)
    page.locator('#start').click()
    page.locator('#level1').click()
    skip_briefing_if_active(page, touch=False)

    assert page.locator('#punch').is_visible(), 'Punch button must remain on desktop'
    assert page.locator('#grab').is_visible(), 'Grab button must remain on desktop'

    page.set_viewport_size({'width': 1024, 'height': 600})
    page.wait_for_timeout(300)

    page.keyboard.press('KeyW')
    page.locator('#app[data-mode=result]').wait_for(timeout=10000)
    assert 'КРАСИВО' in page.locator('h2').inner_text()
    page.screenshot(path=str(EVIDENCE / 'sa027-desktop.png'))
    ctx.close()


def test_touch_prop_grab_and_throw(browser, url: str, errors: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 844, 'height': 390}, is_mobile=True, has_touch=True)
    page = ctx.new_page()
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

    page.goto(url)
    page.locator('#start').wait_for(timeout=20000)
    page.locator('#start').tap()
    page.locator('#level1').tap()
    skip_briefing_if_active(page, touch=True)

    page.wait_for_function('document.querySelector("#app").dataset.mode === "play"', timeout=10000)
    assert page.locator('#punch').count() == 0 or not page.locator('#punch').is_visible(), 'Punch button must be removed on mobile'
    assert page.locator('#grab').count() == 0 or not page.locator('#grab').is_visible(), 'Grab button must be removed on mobile'

    initial_held = page.evaluate('document.querySelector("#scene").dataset.held || ""')
    assert initial_held == '', f'Initially held should be empty, got {initial_held}'

    prop = page.wait_for_function('''() => {
        const p = window.__interaction.actors().find(t =>
            ['whiskey', 'mug', 'eggs', 'bottle', 'keg', 'stool', 'spittoon', 'shaker'].includes(t.kind)
            && t.at && t.at.x > 32 && t.at.x < innerWidth - 32 && t.at.y > 0 && t.at.y < innerHeight
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!p) return false;
        const canvas = document.querySelector("#scene");
        for (const [type, x] of [['pointerdown', p.at.x], ['pointermove', p.at.x], ['pointerup', p.at.x]])
            canvas.dispatchEvent(new PointerEvent(type, { pointerId: 10, pointerType: 'touch', clientX: x, clientY: p.at.y, bubbles: true }));
        return { ...p, held: canvas.dataset.held, mode: document.querySelector('#app').dataset.mode, strike: canvas.dataset.strike };
    }''', timeout=10000).json_value()

    assert prop['held'], f'Fresh pickup dispatch failed: {prop}'
    page.wait_for_function('document.querySelector("#scene").dataset.held !== ""', timeout=5000)
    held_prop = page.evaluate('document.querySelector("#scene").dataset.held')
    assert held_prop == prop['kind'], f'Expected held {prop["kind"]}, got {held_prop}'

    page.wait_for_timeout(80)
    page.evaluate('''p => {
        const canvas = document.querySelector('#scene');
        for (const type of ['pointerdown', 'pointerup']) canvas.dispatchEvent(new PointerEvent(type, {
            pointerId: 10, pointerType: 'touch', clientX: p.x, clientY: p.y, bubbles: true, cancelable: true
        }));
    }''', prop['at'])
    assert page.evaluate('document.querySelector("#scene").dataset.held') == held_prop, 'Pickup must not count as first throw tap'

    page.wait_for_function('window.__interaction.arms().right.item !== ""')
    arms = page.evaluate('window.__interaction.arms()')
    assert arms['right']['item'] == held_prop and arms['right']['open'], f'Right arm must draw held item, got {arms}'

    enemy = page.wait_for_function('''() => {
        const e = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.at.x > 32 && t.at.x < innerWidth - 32 && t.at.y > 0 && t.at.y < innerHeight
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!e) return false;
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 11, pointerType: 'touch', clientX: e.at.x - 32, clientY: e.at.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointermove', { pointerId: 11, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        return { ...e, strike: JSON.parse(canvas.dataset.strike || '{}') };
    }''', timeout=10000).json_value()
    last_strike = enemy['strike']
    assert last_strike.get('action') == 'punch' and last_strike.get('outcome') == 'hit' and last_strike.get('id') == enemy['id'], f'Drag across enemy must hit with punch, got {last_strike}'
    page.wait_for_function('window.__interaction.arms().left.mode === "touch"')
    arms = page.evaluate('window.__interaction.arms()')
    assert arms['left']['item'] == '' and not arms['left']['open'], arms
    assert math.hypot(arms['left']['x'] - enemy['at']['x'], arms['left']['y'] - enemy['at']['y']) < 1, arms
    assert arms['right']['mode'] == 'rest' and arms['right']['item'] == held_prop and arms['right']['open'], arms
    page.screenshot(path=str(EVIDENCE / 'sa027-held-dual-arm.png'))
    page.evaluate('''p => document.querySelector('#scene').dispatchEvent(new PointerEvent('pointerup', {
        pointerId: 11, pointerType: 'touch', clientX: p.x, clientY: p.y, bubbles: true
    }))''', enemy['at'])

    still_held = page.evaluate('document.querySelector("#scene").dataset.held')
    assert still_held == held_prop, f'Ordinary horizontal drag must not throw! Expected {held_prop}, got {still_held}'
    flights_before_throw = int(page.evaluate('document.querySelector("#scene").dataset.flights || "0"'))
    assert flights_before_throw == 0, f'Expected 0 active flights before throw, got {flights_before_throw}'

    page.evaluate('''() => {
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointerdown", { pointerId: 12, pointerType: "touch", clientX: 200, clientY: 200, bubbles: true }));
    }''')
    assert page.evaluate('document.querySelector("#scene").dataset.touching') == 'true'
    page.evaluate('''() => {
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointercancel", { pointerId: 12, pointerType: "touch", clientX: 200, clientY: 200, bubbles: true }));
    }''')
    assert page.evaluate('document.querySelector("#scene").dataset.touching') == 'false'
    assert page.evaluate('document.querySelector("#scene").dataset.held') == held_prop
    assert int(page.evaluate('document.querySelector("#scene").dataset.flights')) == 0
    page.wait_for_function('window.__interaction.arms().left.mode === "rest"')

    preserved = page.evaluate('''async () => {
        const canvas = document.querySelector('#scene');
        const send = (type, x, y) => canvas.dispatchEvent(new PointerEvent(type, {
            pointerId: 14, pointerType: 'touch', clientX: x, clientY: y, bubbles: true, cancelable: true
        }));
        send('pointerdown', 350, 260);
        send('pointerup', 350, 260);
        const single = canvas.dataset.held;
        send('pointerdown', 350, 260);
        send('pointermove', 350, 180);
        send('pointerup', 350, 180);
        const upward = canvas.dataset.held;
        send('pointerdown', 400, 380);
        send('pointerup', 400, 380);
        await new Promise(resolve => setTimeout(resolve, 80));
        send('pointerdown', 400, 380);
        send('pointercancel', 400, 380);
        send('pointerup', 400, 380);
        send('pointerdown', 400, 380);
        send('pointerup', 400, 380);
        const cancelled = canvas.dataset.held;
        await new Promise(resolve => setTimeout(resolve, 80));
        send('pointerdown', 460, 380);
        send('pointerup', 460, 380);
        const distant = canvas.dataset.held;
        await new Promise(resolve => setTimeout(resolve, 400));
        send('pointerdown', 460, 380);
        send('pointerup', 460, 380);
        const late = canvas.dataset.held;
        send('pointerdown', 460, 380);
        send('pointercancel', 460, 380);
        return { single, upward, cancelled, distant, late, flights: window.__interaction.flights() };
    }''')
    assert all(preserved[key] == held_prop for key in ['single', 'upward', 'cancelled', 'distant', 'late']) and not preserved['flights'], preserved

    thrown = page.wait_for_function('''async () => {
        const e = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.center.x > 0 && t.center.x < innerWidth && t.center.y > 0 && t.center.y < innerHeight - 90
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!e) return false;
        const x = e.center.x, y = e.center.y + 10;
        const canvas = document.querySelector("#scene");
        const send = type => canvas.dispatchEvent(new PointerEvent(type, { pointerId: 13, pointerType: 'touch', clientX: x, clientY: y, bubbles: true, cancelable: true }));
        send('pointerdown');
        send('pointerup');
        const afterSingle = canvas.dataset.held;
        await new Promise(resolve => setTimeout(resolve, 80));
        const fresh = window.__interaction.actors().find(t => t.id === e.id && t.at
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!fresh || Math.hypot(fresh.center.x - x, fresh.center.y - y) > 140) return false;
        send('pointerdown');
        send('pointerup');
        const flights = window.__interaction.flights();
        canvas.dispatchEvent(new MouseEvent('click', { clientX: x, clientY: y, bubbles: true }));
        canvas.dispatchEvent(new MouseEvent('dblclick', { clientX: x, clientY: y, bubbles: true }));
        send('pointerup');
        return { target: fresh, end: { x, y }, afterSingle, flights, afterDuplicate: window.__interaction.flights(), strike: JSON.parse(canvas.dataset.strike || '{}') };
    }''', timeout=10000).json_value()

    page.wait_for_function('document.querySelector("#scene").dataset.held === ""', timeout=5000)
    after_throw_held = page.evaluate('document.querySelector("#scene").dataset.held')
    assert after_throw_held == '', f'Held item must be cleared after throw, got {after_throw_held}'

    throw_strike = thrown['strike']
    assert throw_strike.get('action') == 'grab' and throw_strike.get('outcome') == 'throw' and throw_strike.get('kind') == 'flight', f'Expected flight throw strike, got {throw_strike}'
    assert len(thrown['flights']) == 1, thrown
    assert thrown['afterSingle'] == held_prop and len(thrown['afterDuplicate']) == 1, thrown
    flight = thrown['flights'][0]
    assert flight['id'] == throw_strike['id'] and flight['kind'] == held_prop and flight['age'] == 0, thrown
    target = thrown['target']['world']
    duration = (target['z'] - flight['pos']['z']) / flight['vel']['z']
    assert duration > 0 and math.hypot(thrown['target']['center']['x'] - thrown['end']['x'], thrown['target']['center']['y'] - thrown['end']['y']) < 150, thrown
    assert abs(flight['pos']['x'] + flight['vel']['x'] * duration - target['x']) < 1e-6, thrown
    assert abs(flight['pos']['y'] + flight['vel']['y'] * duration - 4.75 * duration ** 2 - target['y']) < 1e-6, thrown
    page.wait_for_function('id => window.__interaction.flights().some(f => f.id === id && f.age > 0 && f.vel.y !== 0)', arg=flight['id'])
    page.wait_for_function('id => !window.__interaction.flights().some(f => f.id === id)', arg=flight['id'], timeout=10000)
    assert page.evaluate('document.querySelector("#scene").dataset.touching') == 'false'
    page.screenshot(path=str(EVIDENCE / 'sa027-after-double-tap.png'))
    print('SA027 confirmed grab, active drawn arms, punch, single/drag/upward/cancel retention, one local double-tap ballistic throw:', json.dumps({'prop': prop['kind'], 'punch': last_strike, 'arms': arms, 'throw': thrown}), flush=True)
    ctx.close()


def main() -> None:
    errors: list[str] = []
    with server_url() as url, sync_playwright() as p:
        browser = p.chromium.launch()
        print('Testing 390x844 portrait orientation prompt...')
        test_portrait_prompt(browser, url, errors)
        print('Testing 667x375 landscape (iPhone SE)...')
        test_landscape_667x375(browser, url, errors)
        print('Testing 844x390 landscape (iPhone 12/13/14)...')
        test_landscape_844x390(browser, url, errors)
        print('Testing 915x412 landscape (Android Pixel/Galaxy)...')
        test_landscape_915x412(browser, url, errors)
        print('Testing desktop regression (mouse, F8/W autowin, resize)...')
        test_desktop_regression(browser, url, errors)
        print('Testing touch prop grab, active drawn arms, cancel reset, and local double-tap throw (SA-027)...')
        test_touch_prop_grab_and_throw(browser, url, errors)
        browser.close()

    assert not errors, f'Console/page errors encountered: {errors}'
    print('All mobile tests passed with zero console errors.')


if __name__ == '__main__':
    main()
