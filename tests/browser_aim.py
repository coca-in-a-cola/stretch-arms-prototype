"""Free-aim + depth browser checks against the Vite dev server (uses the DEV-only window.__test hooks).

Every click below is a real mouse click at explicit screen coordinates; the hooks are only used to *find*
coordinates and to read back what happened. Run: GAME_DEV_URL=http://127.0.0.1:5173 python tests/browser_aim.py
"""
import json
import os
from pathlib import Path
from playwright.sync_api import sync_playwright, Page

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'evidence' / 'production'
URL = os.environ.get('GAME_DEV_URL', 'http://127.0.0.1:5173')
ARGS = ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']


def strike_at(page: Page, x: float, y: float, button: str = 'left') -> dict:
    before = page.evaluate('__test.strikes().length')
    page.mouse.move(x, y)
    page.mouse.click(x, y, button=button)
    page.wait_for_function('(n)=>__test.strikes().length>n', arg=before, timeout=15000)
    return page.evaluate('__test.strikes().at(-1)')


def settle(page: Page) -> None:
    """Wait until every enemy has finished rising out of cover and the previous swing is over."""
    page.wait_for_function('__game.actors.filter(t=>t.kind==="enemy").every(t=>t.age>.5) && !__test.swing()', timeout=15000)


def fresh_level(page: Page, level: int, enemies: int = 3) -> None:
    page.evaluate('(l)=>{__game.progress.unlocked=2;__game.start(l)}', level)
    page.evaluate('(n)=>{for(let i=1;i<n;i++)__game.spawn();for(const t of __game.actors)t.deadline=t.kind==="enemy"?999:t.deadline}', enemies)
    page.evaluate('__game.stamina=100')
    settle(page)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    errors: list[str] = []
    checks: list[str] = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=ARGS)
        page = browser.new_page(viewport={'width': 1440, 'height': 960})
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        page.goto(URL)
        page.wait_for_function('window.__test && __test.webgl().triangles > 1000')
        page.locator('#start').click()
        page.locator('#level1').click()
        fresh_level(page, 1)

        # 1. Click exactly on an exposed enemy → that enemy is hit.
        enemy = page.evaluate('__game.actors.find(t=>t.kind==="enemy"&&t.layer==="midground")')
        point = page.evaluate('(id)=>__test.project(id)', enemy['id'])
        assert point, 'mid-ground enemy not clickable'
        assert page.evaluate('([x,y])=>__test.shotAt(x,y)', [point['x'], point['y']])['id'] == enemy['id']
        result = strike_at(page, point['x'], point['y'])
        assert result['outcome'] == 'hit' and result['id'] == enemy['id'], result
        assert result['staminaBefore'] - result['staminaAfter'] == 24, result
        assert not page.evaluate('(id)=>__game.actors.some(t=>t.id===id)', enemy['id'])
        checks.append(f"click ({point['x']},{point['y']}) hit mid-ground enemy #{enemy['id']}")

        # 2. Click on cover in front of an enemy → the cover takes it, the enemy survives.
        settle(page); page.evaluate('__game.stamina=100')
        fg = page.evaluate('__game.actors.find(t=>t.kind==="enemy"&&t.layer==="foreground")')
        samples = page.evaluate('(id)=>__test.samples(id)', fg['id'])
        on_cover = [s for s in samples if s['kind'] == 'cover']
        assert on_cover, ('no part of the foreground enemy is behind cover', samples)
        spot = on_cover[len(on_cover) // 2]
        result = strike_at(page, spot['x'], spot['y'])
        assert result['outcome'] == 'cover' and result['kind'] == 'cover', result
        assert result['staminaBefore'] - result['staminaAfter'] == 24, result
        assert page.evaluate('(id)=>__game.actors.some(t=>t.id===id)', fg['id']), 'enemy behind cover was hit through it'
        checks.append(f"click ({spot['x']},{spot['y']}) on cover {result['id']} in front of enemy #{fg['id']} → cover, enemy alive")

        # 3. Empty space → whiff, full stamina spent, full extension + recoil plays.
        settle(page); page.evaluate('__game.stamina=100')
        whiff = page.evaluate('''()=>{for(let y=780;y>560;y-=20)for(let x=380;x<1100;x+=24){
            const el=document.elementFromPoint(x,y); if(el&&el.id==='scene'&&__test.shotAt(x,y).kind==='whiff')return {x,y};}return null}''')
        assert whiff, 'no empty ground found'
        page.evaluate('__test.setTimeScale(.35)')
        result = strike_at(page, whiff['x'], whiff['y'])
        assert result['outcome'] == 'miss' and result['kind'] == 'whiff', result
        assert result['staminaBefore'] - result['staminaAfter'] == 24, result
        phases = page.evaluate('''()=>new Promise(r=>{const seen=[];const t=setInterval(()=>{const s=__test.swing();if(s)seen.push(s.phase);else{clearInterval(t);r(seen)}},16)})''')
        assert phases and max(phases) > .9, ('whiff did not play full extension + recoil', phases)
        page.evaluate('__test.setTimeScale(1)')
        checks.append(f"click ({whiff['x']},{whiff['y']}) on empty ground → whiff, 24 stamina spent, recoil to phase {max(phases):.2f}")

        # 4. Protected dog → penalty.
        settle(page); page.evaluate('__game.stamina=100')
        dog = page.evaluate('__game.actors.find(t=>t.kind==="dog")')
        hp = page.evaluate('__game.hp')
        dp = page.evaluate('(id)=>__test.project(id)', dog['id'])
        result = strike_at(page, dp['x'], dp['y'])
        assert result['outcome'] == 'protected' and page.evaluate('__game.hp') == hp - 1, result
        checks.append(f"click ({dp['x']},{dp['y']}) on halo dog → protected penalty")

        # 5. Evidence: first-person arm mid-punch over layered depth, both levels.
        for level in (1, 2):
            fresh_level(page, level)
            actor = page.evaluate('__game.actors.filter(t=>t.kind==="enemy").find(t=>__test.project(t.id))')
            tp = page.evaluate('(id)=>__test.project(id)', actor['id'])
            page.evaluate('__test.setTimeScale(.12)')
            page.mouse.move(tp['x'], tp['y']); page.mouse.click(tp['x'], tp['y'])
            page.wait_for_function('__test.swing() && __test.swing().phase > .26')
            page.screenshot(path=str(OUT / f'level{level}-depth-punch.png'))
            page.wait_for_function('__test.swing() && __test.swing().resolved && __test.swing().phase > .4')
            page.screenshot(path=str(OUT / f'level{level}-depth-impact.png'))
            page.evaluate('__test.setTimeScale(1)')
            assert page.evaluate('__test.strikes().at(-1).outcome') == 'hit'
            checks.append(f'level {level}: mid-punch + impact screenshots')

        # 6. Mobile portrait: tap aims, button punches toward the tapped point.
        mobile = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
        mp = mobile.new_page()
        mp.on('pageerror', lambda e: errors.append(str(e)))
        mp.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)
        mp.goto(URL)
        mp.wait_for_function('window.__test')
        fresh_level(mp, 1)
        t = mp.evaluate('__game.actors.filter(t=>t.kind==="enemy").find(t=>__test.project(t.id))')
        tp = mp.evaluate('(id)=>__test.project(id)', t['id'])
        mp.touchscreen.tap(tp['x'], tp['y'])
        mp.locator('#punch').tap()
        mp.wait_for_function('__test.strikes().length>0')
        assert mp.evaluate('__test.strikes().at(-1)')['outcome'] == 'hit'
        mp.wait_for_timeout(500)
        mp.screenshot(path=str(OUT / 'portrait-depth.png'))
        checks.append('portrait tap-aim + punch hits')

        assert not errors, errors
        report = {'url': URL, 'consoleErrors': errors, 'checks': checks}
        (OUT / 'aim-report.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
        print(json.dumps(report, indent=2, ensure_ascii=False))
        browser.close()


if __name__ == '__main__':
    main()
