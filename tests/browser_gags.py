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
    page.evaluate('(l)=>{__game.progress.unlocked=2;__game.briefings=false;__game.mode="select"}', level)
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


def stage_enemies(page: Page, spots: list[tuple[float, float]], hp: int = 30) -> list[int]:
    """Clear the bullies and friends and stand cat bullies in the open floor (no slot: always fully out, no ducking)."""
    return page.evaluate('''([spots,hp])=>{__game.actors=__game.actors.filter(t=>t.kind!=="enemy"&&t.kind!=="friend"&&t.kind!=="dog");__game.spawned=__game.goal;
      return spots.map(([x,z],i)=>{const id=500+i;__game.actors.push({id,kind:"enemy",x,y:0,z,age:4.2,deadline:60,hp,maxHp:hp});return id})}''', [spots, hp])


def throw_at(page: Page, kind: str, x: float, y: float) -> None:
    page.evaluate('(k)=>{__game.stamina=100;__game.held=k}', kind)
    n = page.evaluate('__test.strikes().length')
    page.mouse.move(x, y)
    page.mouse.click(x, y, button='right')
    page.wait_for_function('(n)=>__test.strikes().length>n', arg=n, timeout=15000)


def throw_at_actor(page: Page, kind: str, actor_id: int) -> None:
    at = page.wait_for_function('(id)=>__test.project(id)', arg=actor_id, timeout=8000).json_value()
    throw_at(page, kind, at['x'], at['y'] - 10)


def ground_point(page: Page, x: float, z: float) -> tuple[float, float]:
    at = page.evaluate('([x,z])=>__test.toScreen({x,y:0,z})', [x, z])
    return at['x'], at['y']


@scene
def anvil_pancake(page: Page):
    start(page, 1)
    [foe] = stage_enemies(page, [(-.3, .8)])
    settle(page, 200)
    throw_at_actor(page, 'anvil', foe)
    page.wait_for_function('(id)=>!__game.actors.some(t=>t.id===id)', arg=foe, timeout=20000)
    page.wait_for_timeout(250); freeze(page); shot(page, 'anvil-pancake'); thaw(page)
    page.wait_for_timeout(1400); freeze(page); shot(page, 'anvil-pancake-peel'); thaw(page)


@scene
def pie_blind(page: Page):
    start(page, 1)
    [foe] = stage_enemies(page, [(-.3, .8)], 60)
    settle(page, 200)
    throw_at_actor(page, 'pie', foe)
    page.wait_for_function('(id)=>__game.actors.find(t=>t.id===id)?.blind>0', arg=foe, timeout=20000)
    page.wait_for_timeout(3000); freeze(page); shot(page, 'pie-blind'); thaw(page)


@scene
def gag_props(page: Page):
    start(page, 1)
    [a, b] = stage_enemies(page, [(-.75, .9), (.35, .4)], 80)
    settle(page, 200)
    throw_at_actor(page, 'plunger', b)
    page.wait_for_function('(id)=>__game.actors.find(t=>t.id===id)?.plunger', arg=b, timeout=20000)
    page.wait_for_timeout(300); freeze(page); shot(page, 'gag-plunger'); thaw(page)
    throw_at_actor(page, 'chicken', a)
    page.wait_for_function('__test.flights().length===0', timeout=20000)
    page.wait_for_timeout(60); freeze(page); shot(page, 'gag-chicken'); thaw(page)
    throw_at_actor(page, 'melon', a)
    page.wait_for_function('__test.flights().length===0', timeout=20000)
    page.wait_for_timeout(120); freeze(page); shot(page, 'gag-melon-seeds'); thaw(page)
    x, y = ground_point(page, -.2, 1.9)
    throw_at(page, 'hydrant', x, y)
    page.wait_for_function('__game.geysers.length>0', timeout=20000)
    page.wait_for_timeout(1600); freeze(page); shot(page, 'gag-hydrant-geyser'); thaw(page)


@scene
def gag_bowling(page: Page):
    start(page, 1)
    stage_enemies(page, [(-.2, 1.2), (-.2, -.6)], 30)
    settle(page, 200)
    x, y = ground_point(page, -.2, 3.3)
    throw_at(page, 'bowling', x, y)
    page.wait_for_function('!__game.actors.some(t=>t.id===500)', timeout=20000)
    page.wait_for_timeout(250); freeze(page); shot(page, 'gag-bowling-strike'); thaw(page)


@scene
def gag_antics(page: Page):
    start(page, 1)
    # spawn index n: n % 3 == 2 clowns, kind = floor(n / 3) % 3, slot = order[n % 5] (0 = the walrus by the piano, big on screen)
    for n, name in [(20, 'dance'), (5, 'sandwich'), (35, 'selfie')]:
        page.evaluate('(n)=>{__game.layout.goal=99;__game.actors=__game.actors.filter(t=>t.kind!=="enemy");__game.spawned=n;__game.spawn();const e=__game.actors.find(t=>t.kind==="enemy");e.age=1.2}', n)
        settle(page, 600); freeze(page); shot(page, f'gag-antic-{name}'); thaw(page)


@scene
def gag_ko_styles(page: Page):
    start(page, 1)
    for defeated, name in [(0, 'stars'), (1, 'birds')]:
        [foe] = stage_enemies(page, [(-.3, .8)], 10)
        page.evaluate('(d)=>{__game.defeated=d;__game.stamina=100}', defeated)
        settle(page, 150)
        punch_actor(page, f't=>t.id==={foe}')
        page.wait_for_function('(id)=>!__test.views().some(v=>v.id===id)', arg=foe, timeout=20000)
        page.wait_for_timeout(2200 if name == 'birds' else 1600); freeze(page); shot(page, f'gag-ko-{name}'); thaw(page)


@scene
def gag_piano(page: Page):
    start(page, 1)
    stage_enemies(page, [(-.3, .6)])
    settle(page, 150)
    page.evaluate('__game.dropFromSky(-.3,.6)')
    page.wait_for_function('__game.hazards[0]?.age>1.35', timeout=20000)
    freeze(page); shot(page, 'gag-piano-shadow'); thaw(page)
    page.wait_for_function('__game.hazards.length===0', timeout=20000)
    page.wait_for_timeout(200); freeze(page); shot(page, 'gag-piano-crash'); thaw(page)


@scene
def gag_dog_ascends(page: Page):
    start(page, 1)
    page.evaluate('()=>{const d=__game.actors.find(t=>t.kind==="dog");d.age=15+2}')
    settle(page, 400); freeze(page); shot(page, 'gag-dog-ascends'); thaw(page)


@scene
def gag_milestone(page: Page):
    start(page, 1)
    [foe] = stage_enemies(page, [(-.3, .8)], 10)
    page.evaluate('__game.combo=2;__game.stamina=100')
    settle(page, 150)
    punch_actor(page, f't=>t.id==={foe}')
    page.wait_for_function('document.querySelector("#scene").dataset.milestone', timeout=15000)
    page.wait_for_timeout(250); freeze(page); shot(page, 'gag-milestone-iris'); thaw(page)


@scene
def regression(page: Page):
    start(page, 1)
    settle(page, 1200); shot(page, 'bar')
    start(page, 2)
    settle(page, 1200); shot(page, 'street')
    page.evaluate('__test.setPan(8)'); settle(page, 600); shot(page, 'street-alley')


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
