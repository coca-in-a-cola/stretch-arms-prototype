"""SA-V4-17 evidence: staged scenes of the friends, thugs, prop gags and absurd gags, from the dev build (it needs the
window.__game / __test hooks to stage a moment; the shipped build has none — tests/browser_production.py covers that).
Starts and stops its own Vite dev server.
  PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tests/browser_gags.py [scene ...]
Screenshots: evidence/sa-v4-17/<scene>.png
"""
import socket
import subprocess
import sys
import time
from pathlib import Path
from playwright.sync_api import sync_playwright, Page

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'evidence' / 'sa-v4-17'
FRAME = 'new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))'


def free_port() -> int:
    with socket.socket() as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]


def start(page: Page, level: int) -> None:
    page.evaluate('(l)=>{__game.progress.unlocked=2;__game.mode="select"}', level)
    page.wait_for_timeout(100)
    page.locator(f'#level{level}').click()
    page.wait_for_function('document.querySelector("#app").dataset.mode==="play"')


def settle(page: Page, ms: int = 250) -> None:
    page.evaluate(FRAME)
    page.wait_for_timeout(ms)


def shot(page: Page, name: str) -> None:
    page.screenshot(path=str(OUT / f'{name}.png'))
    print('saved', name)


def punch_actor(page: Page, sel: str) -> None:
    """Aim at the published clickable point of the first actor matching the JS predicate and punch it."""
    at = page.wait_for_function(f'()=>{{const t=__game.actors.find({sel});return t?__test.project(t.id):null}}', timeout=8000).json_value()
    n = page.evaluate('__test.strikes().length')
    page.mouse.move(at['x'], at['y'])
    page.mouse.click(at['x'], at['y'])
    page.wait_for_function('(n)=>__test.strikes().length>n', arg=n, timeout=15000)  # swiftshader frames are slow: wait for the fist to land


def freeze(page: Page) -> None:
    page.evaluate('__test.setTimeScale(0.02)')


def thaw(page: Page) -> None:
    page.evaluate('__test.setTimeScale(1)')


SCENES = {}


def scene(fn):
    SCENES[fn.__name__.replace('_', '-')] = fn
    return fn


@scene
def mole(page: Page):
    start(page, 1)
    page.evaluate('()=>{const m=__game.actors.find(t=>t.who==="mole");m.age=4;__game.actors.filter(t=>t.kind==="enemy").forEach(t=>t.age=1);__game.spawn()}')
    settle(page, 400); freeze(page); shot(page, 'mole')
    thaw(page)
    page.evaluate('()=>{const m=__game.actors.find(t=>t.who==="mole");m.age=MOLE_AGE}'.replace('MOLE_AGE', str(6.5 + 3.6)))
    settle(page, 150); freeze(page); shot(page, 'mole-lantern'); thaw(page)
    page.evaluate('__game.stamina=100')
    punch_actor(page, 't=>t.who==="mole"')
    page.wait_for_timeout(250); freeze(page); shot(page, 'mole-offended'); thaw(page)


@scene
def friends(page: Page):
    start(page, 1)
    page.evaluate('()=>{const k=__game.actors.find(t=>t.who==="kitten");k.age=1}')
    settle(page, 400); freeze(page); shot(page, 'friends-bar'); thaw(page)
    page.evaluate('__game.stamina=100')
    punch_actor(page, 't=>t.who==="drunk"')
    page.wait_for_timeout(300); freeze(page); shot(page, 'friends-drunk-woken'); thaw(page)
    start(page, 2)
    page.evaluate('()=>{const g=__game.actors.find(t=>t.who==="granny");g.age=13;const p=__game.actors.find(t=>t.who==="pigeon");p.age=4.2}')
    page.evaluate('__test.setPan(3)')
    settle(page, 400); freeze(page); shot(page, 'friends-street'); thaw(page)
    page.evaluate('__game.stamina=100')
    punch_actor(page, 't=>t.who==="granny"')
    page.wait_for_timeout(300); freeze(page); shot(page, 'friends-granny-offended'); thaw(page)


@scene
def thugs(page: Page):
    start(page, 2)
    page.evaluate('__test.setPan(-8)')
    settle(page, 200)
    page.evaluate('()=>{__game.spawnThug();__game.spawnThug()}')
    page.evaluate('()=>{__game.elapsed=40;const t=__game.spawnThug();__game.actors.filter(a=>a.kind==="thug").forEach((a,i)=>a.age=1+i*.9)}')
    settle(page, 300); freeze(page); shot(page, 'thugs'); thaw(page)
    page.evaluate('__game.stamina=100')
    punch_actor(page, 't=>t.kind==="thug"')
    page.wait_for_timeout(120); freeze(page); shot(page, 'thug-ko'); thaw(page)
    page.evaluate('()=>{const t=__game.actors.find(a=>a.kind==="thug"&&a.who==="gang")||__game.spawnThug();t.who="gang";t.age=2.8}')
    page.wait_for_function('!__game.actors.some(a=>a.kind==="thug"&&a.who==="gang")', timeout=15000)
    page.wait_for_timeout(400); freeze(page); shot(page, 'thug-splat'); thaw(page)


def main(names: list[str]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    port = free_port()
    server = subprocess.Popen(['bun', 'x', 'vite', '--port', str(port), '--strictPort', '--host', '127.0.0.1'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    errors: list[str] = []
    try:
        for _ in range(100):
            try:
                socket.create_connection(('127.0.0.1', port), timeout=.2).close(); break
            except OSError:
                time.sleep(.2)
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True, args=['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
            for name in names or list(SCENES):
                page = browser.new_page(viewport={'width': 1440, 'height': 900}, device_scale_factor=1)
                page.on('pageerror', lambda e: errors.append(f'{name}: {e}'))
                page.on('console', lambda m: errors.append(f'{name}: {m.text}') if m.type == 'error' else None)
                page.goto(f'http://127.0.0.1:{port}/')
                page.wait_for_function('window.__test && window.__test.webgl().triangles > 1000', timeout=30000)
                SCENES[name](page)
                page.close()
            browser.close()
    finally:
        server.terminate(); server.wait(timeout=10)
    print('console errors:', len(errors))
    for e in errors[:20]:
        print('  ', e)
    assert not errors


if __name__ == '__main__':
    main(sys.argv[1:])
