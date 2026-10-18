"""SA-V4-18 evidence: the herald's level-start briefing in the production build (dist/).

Desktop full motion on a fake clock (game time only moves with run_for; CSS animations run in real time):
level-1 flyer, a torn flyer, the offended herald, skip, no repeat on an immediate retry, level-2 flyers;
then a 390x844 touch portrait. Screenshots go to evidence/sa-v4-18/. Zero console errors required.
  PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tests/browser_herald.py
"""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright, Page
from browser_production import production_url, assert_production

OUT = Path(__file__).resolve().parents[1] / 'evidence' / 'sa-v4-18'
ARGS = ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']
UNLOCK = 'localStorage.setItem("long-arms.progress.v2", JSON.stringify({version:2,unlocked:2,best:0}))'


def shot(page: Page, name: str) -> None:
    page.screenshot(path=str(OUT / f'{name}.png'))


def flyer_count(page: Page) -> str:
    return page.locator('#herald .hd-stage .hd-text small').inner_text().split('·')[0].strip()


def center(page: Page, sel: str, fx: float = .5, fy: float = .5) -> tuple[float, float]:
    b = page.locator(sel).bounding_box()
    assert b, sel
    return b['x'] + b['width'] * fx, b['y'] + b['height'] * fy


def enemies(page: Page) -> int:
    return page.evaluate('JSON.parse(document.querySelector("#scene").dataset.aim||"[]").filter(t=>t.kind==="enemy"||t.kind==="thug").length')


def hook(page: Page, errors: list[str]) -> None:
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)


def desktop(browser, url: str, errors: list[str], log: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 1440, 'height': 900}, reduced_motion='no-preference')
    ctx.add_init_script(UNLOCK)
    page = ctx.new_page(); hook(page, errors)
    page.clock.install(time=0)
    page.goto(url); page.locator('#start').wait_for(); page.clock.pause_at(5000)
    assert_production(page)
    page.locator('#start').click(); page.locator('#level1').click()
    page.clock.run_for(1200); page.wait_for_timeout(700)
    assert page.locator('#herald').is_visible() and 'БЕЙ' in page.locator('#herald .hd-stage h3').inner_text()
    assert flyer_count(page) == '1 / 5' and enemies(page) == 0
    shot(page, 'herald-level1'); log.append('level 1 briefing: flyer 1/5 "БЕЙ!", no enemies')
    # Punch the flyer: it tears and the next one comes up; stamina untouched.
    x, y = center(page, '#herald .hd-flyer', .5, .45)
    page.mouse.move(x, y); page.mouse.down(); page.mouse.up()
    page.clock.run_for(170); page.wait_for_timeout(230)
    shot(page, 'flyer-torn')
    page.clock.run_for(700); page.wait_for_timeout(500)
    assert flyer_count(page) == '2 / 5', flyer_count(page)
    assert page.locator('#stamina').inner_text() == '100'
    log.append('punched flyer tore -> 2/5, stamina 100')
    # Punch the herald (his face): a heart and points gone, rude card, flyer does not advance.
    hx, hy = center(page, '#herald .hd-guy', .42, .5)
    page.mouse.move(hx, hy); page.mouse.down(); page.mouse.up()
    page.clock.run_for(250); page.wait_for_timeout(450)
    shot(page, 'herald-offended')
    assert page.locator('#hearts').inner_text() == '♥♥♥♥♡', page.locator('#hearts').inner_text()
    assert page.locator('#herald .hd-card').is_visible() and flyer_count(page) == '2 / 5'
    log.append('punched herald: hearts ♥♥♥♥♡, card "' + page.locator('#herald .hd-card').inner_text() + '", still 2/5')
    page.clock.run_for(1800); page.wait_for_timeout(200)
    # Skip: ПОНЯЛ -> hat tip -> fight.
    page.locator('#heraldSkip').click()
    page.clock.run_for(1300); page.wait_for_timeout(300)
    assert page.locator('#herald').is_hidden()
    page.clock.run_for(1500)
    assert enemies(page) >= 1
    log.append('skip: herald gone, enemies spawn')
    # Immediate retry of the same level: no briefing.
    page.locator('#pause').click(); page.locator('#select').click(); page.locator('#level1').click()
    page.clock.run_for(800)
    assert page.locator('#herald').is_hidden()
    log.append('immediate retry of level 1: no briefing')
    page.locator('#pause').click(); page.locator('#select').click(); page.locator('#level2').click()
    page.clock.run_for(1200); page.wait_for_timeout(700)
    assert 'УЛИЦА' in page.locator('#herald .hd-stage h3').inner_text() and flyer_count(page) == '1 / 4'
    shot(page, 'herald-level2'); log.append('level 2 briefing: "УЛИЦА ШИРОКАЯ" 1/4')
    page.keyboard.press('Escape'); page.clock.run_for(1300); page.wait_for_timeout(300)
    assert page.locator('#herald').is_hidden() and page.locator('#app').get_attribute('data-mode') == 'play'
    log.append('Esc skips the street briefing (no pause)')
    ctx.close()


def portrait(browser, url: str, errors: list[str], log: list[str]) -> None:
    ctx = browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True, reduced_motion='no-preference')
    page = ctx.new_page(); hook(page, errors)
    page.goto(url); page.locator('#start').wait_for(timeout=90000)
    page.locator('#start').tap(); page.locator('#level1').tap()
    page.wait_for_timeout(1500)
    text = page.locator('#herald .hd-stage .hd-text').inner_text()
    assert 'Тапни' in text, text
    fs = page.evaluate('parseFloat(getComputedStyle(document.querySelector("#herald .hd-stage .hd-text p")).fontSize)')
    assert fs >= 14, fs
    skip = page.locator('#heraldSkip').bounding_box(); assert skip and skip['height'] >= 44
    shot(page, 'herald-portrait'); log.append(f'portrait 390x844: touch wording, flyer text {fs:.1f}px')
    x, y = center(page, '#herald .hd-flyer', .5, .45)
    page.touchscreen.tap(x, y)
    page.wait_for_function('()=>{const s=document.querySelector("#herald .hd-stage .hd-text small");return s&&s.textContent.startsWith("2 / 5")&&!document.querySelector("#herald .hd-flyer").hidden}', timeout=20000)
    page.wait_for_timeout(600)
    shot(page, 'herald-portrait-flyer2')
    assert flyer_count(page) == '2 / 5', (flyer_count(page), page.locator('#herald').get_attribute('data-hit'), page.locator('#herald').get_attribute('data-phase'), page.locator('#message').inner_text())
    log.append('portrait: a tap on the flyer punches it -> 2/5')
    ctx.close()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    errors: list[str] = []; log: list[str] = []
    with production_url() as url, sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=ARGS)
        try:
            if 'portrait' not in sys.argv:
                desktop(browser, url, errors, log)
            portrait(browser, url, errors, log)
        finally:
            browser.close()
    assert not errors, errors
    print(json.dumps({'consoleErrors': errors, 'checks': log, 'screenshots': sorted(f.name for f in OUT.glob('*.png'))}, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
