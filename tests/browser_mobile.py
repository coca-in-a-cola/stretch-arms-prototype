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
EVIDENCE = ROOT / 'evidence' / 'sa028e-mobile'


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
    skip = page.locator('#heraldSkip')
    skip.wait_for(state='visible', timeout=20000)
    skip.tap() if touch else skip.click()
    page.locator('#herald').wait_for(state='hidden', timeout=20000)


def sweep_visible_enemy(page: Page, pointer_id: int) -> None:
    page.wait_for_function('''id => {
        const canvas = document.querySelector('#scene'), r = canvas.getBoundingClientRect();
        const t = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.at.x > r.left + 32 && t.at.x < r.right - 32
            && window.__interaction.shot(t.at.x,t.at.y).id === t.id);
        if (!t) return false;
        for (const [type,x] of [['pointerdown',t.at.x-30],['pointermove',t.at.x],['pointerup',t.at.x]])
            canvas.dispatchEvent(new PointerEvent(type,{pointerId:id,pointerType:'touch',clientX:x,clientY:t.at.y,bubbles:true}));
        const strike=JSON.parse(canvas.dataset.strike||'{}');
        return strike.id===t.id && strike.action==='punch' && strike.outcome==='hit';
    }''', arg=pointer_id, timeout=10000)


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
    sweep_visible_enemy(page, 2)
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

    page.wait_for_function('document.querySelector("#herald").dataset.phase === "show" && !!JSON.parse(document.querySelector("#herald").dataset.geometry || "{}").paper', timeout=20000)
    assert page.locator('#herald .hd-canvas').is_visible()
    assert page.locator('#herald .hd-flyer').count() == 0, 'No visible DOM flyer'
    page.screenshot(path=str(EVIDENCE / 'sa027-tutorial-844x390.png'))
    skip_briefing_if_active(page, touch=True)

    assert page.locator('#punch').count() == 0 or not page.locator('#punch').is_visible(), 'Punch button must be removed on mobile'
    assert page.locator('#grab').count() == 0 or not page.locator('#grab').is_visible(), 'Grab button must be removed on mobile'
    check_buttons(page)

    page.wait_for_timeout(300)
    sweep_visible_enemy(page, 3)
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


def assert_held_retention(page: Page, held: str, picked_id: int) -> None:
    retained = page.evaluate('''() => {
        const c = document.querySelector('#scene'), r = c.getBoundingClientRect();
        const enemies = window.__interaction.actors().filter(t => ['enemy','thug'].includes(t.kind));
        let empty;
        for (let y = r.top + 20; y < r.bottom - 20 && !empty; y += 20)
            for (let x = r.left + 40; x < r.right - 40; x += 20)
                if (window.__interaction.shot(x,y).kind === 'whiff'
                    && enemies.every(t => !t.center || Math.hypot(t.center.x-x,t.center.y-y) > 180)) {
                    empty = {x,y}; break;
                }
        if (!empty) throw new Error('No live empty-space retention target');
        const send = (type,id) => c.dispatchEvent(new PointerEvent(type, {
            pointerId:id,pointerType:'touch',clientX:empty.x,clientY:empty.y,bubbles:true,cancelable:true
        }));
        const before = {held:c.dataset.held, strike:c.dataset.strike, flights:window.__interaction.flights().map(f=>f.id)};
        send('pointerdown',40); send('pointerup',40); send('pointerup',40);
        const release = c.dataset.held;
        send('pointerdown',41); send('pointercancel',41); send('pointerup',41);
        return {before, release, cancelled:c.dataset.held, touching:c.dataset.touching,
            strike:c.dataset.strike, flights:window.__interaction.flights().map(f=>f.id),
            actorIds:window.__interaction.actors().map(t=>t.id)};
    }''')
    assert retained['before']['held'] == retained['release'] == retained['cancelled'] == held, retained
    assert retained['touching'] == 'false' and retained['strike'] == retained['before']['strike'], retained
    assert retained['flights'] == retained['before']['flights'], retained
    assert picked_id not in retained['actorIds'], f'Held actor must not remain pickable: {retained}'
    print('SA028 held empty-release/cancel retention:', json.dumps(retained), flush=True)


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

    enemy = page.wait_for_function('''() => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const e = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!e) return false;
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 10, pointerType: 'touch', clientX: e.at.x - 30, clientY: e.at.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointermove', { pointerId: 10, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        const strike = JSON.parse(canvas.dataset.strike || '{}');
        canvas.dispatchEvent(new PointerEvent('pointerup', { pointerId: 10, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        return { ...e, strike };
    }''', timeout=10000).json_value()
    punch_strike = enemy['strike']
    assert punch_strike.get('action') == 'punch' and punch_strike.get('outcome') == 'hit' and punch_strike.get('id') == enemy['id'], f'Empty hand drag across enemy must hit with punch, got {punch_strike}'
    assert page.evaluate('document.querySelector("#scene").dataset.held || ""') == ''

    prop = page.wait_for_function('''() => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const p = window.__interaction.actors().find(t =>
            ['whiskey', 'mug', 'eggs', 'bottle', 'keg', 'stool', 'spittoon', 'shaker'].includes(t.kind)
            && t.at && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!p) return false;
        const canvas = document.querySelector("#scene");
        for (const [type, x] of [['pointerdown', p.at.x - 24], ['pointermove', p.at.x], ['pointermove', p.at.x], ['pointerup', p.at.x], ['pointerup', p.at.x]])
            canvas.dispatchEvent(new PointerEvent(type, { pointerId: 11, pointerType: 'touch', clientX: x, clientY: p.at.y, bubbles: true }));
        return { ...p, held: canvas.dataset.held, mode: document.querySelector('#app').dataset.mode, strike: canvas.dataset.strike };
    }''', timeout=10000).json_value()

    assert prop['held'], f'Fresh pickup dispatch failed: {prop}'
    page.wait_for_function('document.querySelector("#scene").dataset.held !== ""', timeout=5000)
    held_prop = page.evaluate('document.querySelector("#scene").dataset.held')
    assert held_prop == prop['kind'], f'Expected held {prop["kind"]}, got {held_prop}'

    page.wait_for_function('window.__interaction.arms().right.item !== ""')
    arms = page.evaluate('window.__interaction.arms()')
    assert arms['right']['item'] == held_prop and arms['right']['open'], f'Right arm must draw held item, got {arms}'
    assert_held_retention(page, held_prop, prop['id'])

    prop2 = page.wait_for_function('''firstId => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const p = window.__interaction.actors().find(t =>
            ['whiskey', 'mug', 'eggs', 'bottle', 'keg', 'stool', 'spittoon', 'shaker'].includes(t.kind)
            && t.id !== firstId && t.at && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!p) return false;
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 12, pointerType: 'touch', clientX: p.at.x - 24, clientY: p.at.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointermove', { pointerId: 12, pointerType: 'touch', clientX: p.at.x, clientY: p.at.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointerup', { pointerId: 12, pointerType: 'touch', clientX: p.at.x, clientY: p.at.y, bubbles: true }));
        return { ...p, held: canvas.dataset.held, flights: window.__interaction.flights(), strike: JSON.parse(canvas.dataset.strike || '{}') };
    }''', arg=prop['id'], timeout=10000).json_value()

    assert prop2['held'] == prop2['kind'], f'Expected held new prop {prop2["kind"]}, got {prop2["held"]}'
    assert any(f['kind'] == held_prop for f in prop2['flights']), f'Old prop {held_prop} must be thrown in flight: {prop2}'
    assert len(prop2['flights']) == 1, f'Swap must launch exactly one old item: {prop2}'
    assert prop2['strike']['id'] == prop2['id'] and prop2['strike']['outcome'] == 'grab', prop2
    assert_held_retention(page, prop2['kind'], prop2['id'])
    page.wait_for_function('id => !window.__interaction.flights().some(f => f.id === id)', arg=prop2['flights'][0]['id'], timeout=10000)

    thrown = page.wait_for_function('''() => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const e = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!e) return false;
        const canvas = document.querySelector("#scene");
        // A nearby prop is a legitimate swap contact, not a duplicate throw.
        // Find a clean live sweep so this case isolates carrying -> enemy.
        const start = [{x:e.at.x-40,y:e.at.y},{x:e.at.x+40,y:e.at.y},{x:e.at.x,y:e.at.y-40}].find(p => {
            if (!['whiff','cover'].includes(window.__interaction.shot(p.x,p.y).kind)) return false;
            return [1/3,2/3,1].every(t => {
                const hit = window.__interaction.shot(p.x+(e.at.x-p.x)*t,p.y+(e.at.y-p.y)*t);
                return ['whiff','cover'].includes(hit.kind) || hit.id === e.id;
            });
        });
        if (!start) return false;
        canvas.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 13, pointerType: 'touch', clientX: start.x, clientY: start.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointermove', { pointerId: 13, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        const flights = window.__interaction.flights();
        const strike = JSON.parse(canvas.dataset.strike || '{}');
        canvas.dispatchEvent(new PointerEvent('pointerup', { pointerId: 13, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        canvas.dispatchEvent(new PointerEvent('pointerup', { pointerId: 13, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        return { target: e, flights, strike, held: canvas.dataset.held, afterDuplicate:window.__interaction.flights() };
    }''', timeout=10000).json_value()

    throw_strike = thrown['strike']
    assert throw_strike.get('action') == 'grab' and throw_strike.get('outcome') == 'throw' and throw_strike.get('kind') == 'flight', f'Sweep across enemy with prop held must throw, got {throw_strike}'
    page.wait_for_function('document.querySelector("#scene").dataset.held === ""', timeout=5000)
    after_throw_held = page.evaluate('document.querySelector("#scene").dataset.held')
    assert after_throw_held == '', f'Held item must be cleared after throw, got {after_throw_held}'
    assert len(thrown['flights']) == len(thrown['afterDuplicate']) == 1, thrown
    flight = thrown['flights'][0]
    assert flight['id'] == throw_strike['id'] == thrown['afterDuplicate'][0]['id'] and flight['kind'] == prop2['kind'], thrown
    page.wait_for_function('id => !window.__interaction.flights().some(f => f.id === id)', arg=flight['id'], timeout=10000)

    prop3 = page.wait_for_function('''() => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const p = window.__interaction.actors().find(t =>
            ['whiskey', 'mug', 'eggs', 'bottle', 'keg', 'stool', 'spittoon', 'shaker'].includes(t.kind)
            && t.at && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!p) return false;
        const canvas = document.querySelector("#scene");
        for (const [type, x] of [['pointerdown', p.at.x], ['pointermove', p.at.x], ['pointerup', p.at.x]])
            canvas.dispatchEvent(new PointerEvent(type, { pointerId: 14, pointerType: 'touch', clientX: x, clientY: p.at.y, bubbles: true }));
        return { ...p, held: canvas.dataset.held };
    }''', timeout=10000).json_value()
    assert prop3['held'] != ''
    assert_held_retention(page, prop3['kind'], prop3['id'])

    release_throw = page.wait_for_function('''() => {
        const r = document.querySelector('#scene').getBoundingClientRect();
        const e = window.__interaction.actors().find(t => t.kind === 'enemy' && t.at
            && t.at.x > r.left + 32 && t.at.x < r.right - 32 && t.at.y > r.top && t.at.y < r.bottom
            && window.__interaction.shot(t.at.x, t.at.y).id === t.id);
        if (!e) return false;
        const canvas = document.querySelector("#scene");
        let start;
        for (let y=r.top+20; y<r.bottom-20 && !start; y+=20)
            for (let x=r.left+40; x<r.right-40; x+=20)
                if (window.__interaction.shot(x,y).kind === 'whiff') {start={x,y}; break;}
        if (!start) return false;
        canvas.dispatchEvent(new PointerEvent('pointerdown', { pointerId: 15, pointerType: 'touch', clientX: start.x, clientY: start.y, bubbles: true }));
        const beforeRelease = {held:canvas.dataset.held,flights:window.__interaction.flights()};
        canvas.dispatchEvent(new PointerEvent('pointerup', { pointerId: 15, pointerType: 'touch', clientX: e.at.x, clientY: e.at.y, bubbles: true }));
        const flights = window.__interaction.flights(), strike = JSON.parse(canvas.dataset.strike || '{}');
        for (const type of ['pointerup','click','dblclick']) canvas.dispatchEvent(new PointerEvent(type, {
            pointerId:15,pointerType:'touch',clientX:e.at.x,clientY:e.at.y,bubbles:true}));
        return { target: e, beforeRelease, flights, strike, afterDuplicate:window.__interaction.flights() };
    }''', timeout=10000).json_value()
    rel_strike = release_throw['strike']
    assert rel_strike.get('action') == 'grab' and rel_strike.get('outcome') == 'throw' and rel_strike.get('kind') == 'flight', f'Release over enemy must throw, got {rel_strike}'
    assert release_throw['beforeRelease']['held'] == prop3['kind'] and not release_throw['beforeRelease']['flights'], release_throw
    assert len(release_throw['flights']) == len(release_throw['afterDuplicate']) == 1, release_throw
    assert release_throw['flights'][0]['id'] == rel_strike['id'] == release_throw['afterDuplicate'][0]['id'], release_throw
    page.wait_for_function('document.querySelector("#scene").dataset.held === ""', timeout=5000)

    page.evaluate('''() => {
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointerdown", { pointerId: 16, pointerType: "touch", clientX: 200, clientY: 200, bubbles: true }));
    }''')
    assert page.evaluate('document.querySelector("#scene").dataset.touching') == 'true'
    page.evaluate('''() => {
        const canvas = document.querySelector("#scene");
        canvas.dispatchEvent(new PointerEvent("pointercancel", { pointerId: 16, pointerType: "touch", clientX: 200, clientY: 200, bubbles: true }));
    }''')
    assert page.evaluate('document.querySelector("#scene").dataset.touching') == 'false'
    page.wait_for_function('window.__interaction.arms().left.mode === "rest"')

    page.screenshot(path=str(EVIDENCE / 'sa028-touch-lifecycle.png'))
    print('SA028 touch lifecycle verified (punch on empty hand sweep, grab on prop sweep, prop swap throw+grab, throw on enemy sweep or release):', json.dumps({'punch': punch_strike, 'firstGrab': prop['kind'], 'swap': prop2['kind'], 'throw': throw_strike, 'releaseThrow': rel_strike}), flush=True)
    ctx.close()


def main() -> None:
    EVIDENCE.mkdir(exist_ok=True)
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
        print('Testing touch prop grab, active drawn arms, cancel reset, and SA-028 touch lifecycle...')
        test_touch_prop_grab_and_throw(browser, url, errors)
        browser.close()

    assert not errors, f'Console/page errors encountered: {errors}'
    print('All mobile tests passed with zero console errors.')


if __name__ == '__main__':
    main()
