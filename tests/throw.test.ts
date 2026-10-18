import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { LEVELS, bodyBox, cameraFor, hittables, pose } from '../src/layout';
import { PROPS, PROP_KINDS } from '../src/props';
import { flightTime, launch, step } from '../src/throw';
import type { Vec3 } from '../src/aim';

const hand = (): Vec3 => { const c = cameraFor(1440, 960).position; return { x: c.x + .6, y: c.y - .7, z: c.z - 1.4 }; };
/** Run the game's flights to completion against the live world, collecting impacts. */
function settle(g: Game) {
  const all = [];
  for (let i = 0; i < 600 && g.flights.length; i++) all.push(...g.fly(1 / 60, hittables(g.level, g.actors)));
  return all;
}
const grab = (g: Game, kind: string) => { const p = g.actors.find(t => t.kind === kind)!; g.stamina = 100; expect(g.act('grab', p.id)).toBe('grab'); return p; };

describe('throws: the prop is an independent projectile', () => {
  test('ballistic arc with spin: it rises above the straight line, passes through the aim point, heavier props fly slower', () => {
    const from = hand(), to = { x: -2, y: 1, z: -3 };
    const f = launch(1, 'mug', from, to), T = flightTime('mug', Math.hypot(to.x - from.x, to.y - from.y, to.z - from.z));
    let lift = -Infinity, closest = Infinity;
    for (let t = 0; t < T + .05; t += 1 / 120) {
      step(f, 1 / 120, []);
      const s = Math.min(1, f.age / T); lift = Math.max(lift, f.pos.y - (from.y + (to.y - from.y) * s)); // height above the straight line
      closest = Math.min(closest, Math.hypot(f.pos.x - to.x, f.pos.y - to.y, f.pos.z - to.z));
    }
    expect(lift).toBeGreaterThan(.15); // a lob, not a laser
    expect(closest).toBeLessThan(.15); // honest: it passes through where you aimed
    expect(Math.abs(f.angle)).toBeGreaterThan(2); // it tumbles
    expect(flightTime('anvil', 10)).toBeGreaterThan(flightTime('bottle', 10));
  });
  test('in the game: grabbing takes the prop off the map; throwing launches a flight and the hand is empty at once', () => {
    const g = new Game(); g.start(1); const mug = grab(g, 'mug');
    expect(g.actors).not.toContain(mug); expect(g.held).toBe('mug');
    g.spend('grab'); const f = g.launch(hand(), { x: 0, y: 0, z: 0 })!;
    expect(f.kind).toBe('mug'); expect(g.held).toBeNull(); expect(g.flights).toHaveLength(1);
    g.fly(.05, hittables(1, g.actors)); expect(Math.hypot(f.pos.x - hand().x, f.pos.z - hand().z)).toBeGreaterThan(.2); // it left the hand on its own
  });
  test('a direct hit is resolved where the prop arrives: it damages the enemy that is really there', () => {
    const g = new Game(); g.start(1);
    const enemy = g.actors.find(t => t.kind === 'enemy')!; enemy.age = 2.5;
    const b = bodyBox('enemy', pose(1, enemy), enemy.skin), aim = { x: (b.min.x + b.max.x) / 2, y: b.max.y - .35, z: b.max.z }; // the head, above the piano lid
    grab(g, 'whiskey'); g.spend('grab'); g.launch(hand(), aim);
    const impacts = settle(g);
    expect(impacts.some(i => i.impact.type === 'hit' && i.impact.id === enemy.id)).toBe(true);
    expect(enemy.hp).toBe(enemy.maxHp! - PROPS.whiskey.damage);
    expect(g.events.some(e => e.type === 'shatter')).toBe(true); // glass breaks on impact
  });
  test('an enemy that ducks while the prop is in the air is missed; the (unbreakable) prop lands and stays — no respawn', () => {
    const g = new Game(); g.start(1);
    const enemy = g.actors.find(t => t.kind === 'enemy')!; enemy.age = 2.5;
    const b = bodyBox('enemy', pose(1, enemy), enemy.skin), aim = { x: (b.min.x + b.max.x) / 2, y: b.max.y - .3, z: b.max.z };
    const stoolsBefore = g.actors.filter(t => t.kind === 'stool').length;
    grab(g, 'stool'); g.spend('grab'); g.launch(hand(), aim);
    enemy.age = 0; // ducked behind the piano
    const impacts = settle(g);
    expect(impacts.some(i => i.impact.type === 'hit' && i.impact.id === enemy.id)).toBe(false); expect(enemy.hp).toBe(enemy.maxHp);
    const rest = impacts.find(i => i.impact.type === 'rest')!.impact as { point: Vec3; on: string | number };
    const landed = g.actors.filter(t => t.kind === 'stool');
    expect(landed).toHaveLength(stoolsBefore); // the thrown one is back on the map…
    const it = landed.find(t => Math.abs(t.x - rest.point.x) < 1e-6)!;
    expect(it.y).toBeGreaterThanOrEqual(0); expect(it.z).toBeCloseTo(rest.point.z, 6); // …exactly where it came to rest
    // Resting on the floor or on top of something, never inside a cover.
    for (const c of LEVELS[1].covers) expect(it.x > c.min.x && it.x < c.max.x && it.y > c.min.y + 1e-6 && it.y < c.max.y - 1e-6 && it.z > c.min.z && it.z < c.max.z).toBe(false);
    // Nothing respawns: the map only ever has what was there plus what you threw.
    for (let i = 0; i < 40; i++) g.tick(.25);
    expect(g.actors.filter(t => t.kind === 'stool')).toHaveLength(stoolsBefore);
    // And it can be grabbed again.
    g.stamina = 100; expect(g.act('grab', it.id)).toBe('grab'); expect(g.held).toBe('stool');
  });
  test('a prop thrown onto a cover top comes to rest on it, at that cover\'s depth', () => {
    const g = new Game(); g.start(1); const counter = LEVELS[1].covers.find(c => c.id === 'counter')!;
    grab(g, 'shaker'); g.spend('grab'); g.launch(hand(), { x: -.4, y: counter.max.y, z: (counter.min.z + counter.max.z) / 2 });
    const rest = settle(g).find(i => i.impact.type === 'rest')!.impact as { point: Vec3; on: string | number };
    expect(rest.on).toBe('counter'); expect(rest.point.y).toBeCloseTo(counter.max.y, 6);
    expect(rest.point.z).toBeGreaterThan(counter.min.z); expect(rest.point.z).toBeLessThan(counter.max.z);
  });
  test('props are scattered on both maps from the start, densely, with nothing respawning over time', () => {
    for (const level of [1, 2]) {
      const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.start(level);
      const props = g.actors.filter(t => t.kind !== 'enemy' && t.kind !== 'dog' && t.kind !== 'hat');
      expect(props.length).toBeGreaterThanOrEqual(level === 1 ? 12 : 20);
      expect(new Set(props.map(t => t.kind)).size).toBeGreaterThanOrEqual(level === 1 ? 7 : 10);
      // Always something within reach: no screen-wide stretch of the street without a prop.
      const xs = props.map(t => t.x).sort((a, b) => a - b);
      for (let i = 1; i < xs.length; i++) expect(xs[i] - xs[i - 1]).toBeLessThan(4);
      const before = props.length; for (let i = 0; i < 40; i++) g.tick(.25);
      expect(g.actors.filter(t => t.kind !== 'enemy' && t.kind !== 'dog' && t.kind !== 'hat').length).toBe(before);
    }
    for (const k of PROP_KINDS) { const p = PROPS[k]; expect(p.mass).toBeGreaterThan(0); expect(p.throw).toBeGreaterThan(0); expect(p.sprite).toMatch(/^gen_.*\.png$/); }
  });
});

describe('the bar ult: the hat lands upside down and the bet is read out first', () => {
  const counter = LEVELS[1].covers.find(c => c.id === 'counter')!;
  test('a hat thrown onto the counter top flies, lands on the slab UPSIDE DOWN (a receptacle) and starts the ult', async () => {
    const g = new Game(); g.start(1); grab(g, 'hat'); g.spend('grab');
    g.launch(hand(), { x: .9, y: counter.max.y, z: (counter.min.z + counter.max.z) / 2 });
    expect(g.ult.phase).toBe('none'); // nothing yet: it is still in the air
    settle(g);
    expect(g.ult.phase).toBe('intro'); expect(g.hatRest).not.toBeNull();
    expect(g.hatRest!.flipped).toBe(true); expect(g.hatRest!.y).toBeCloseTo(counter.max.y, 6);
    expect(g.actors.some(t => t.kind === 'hat')).toBe(false);
  });
  test('a hat that falls short stays on the floor where it landed and can be picked up again', () => {
    const g = new Game(); g.start(1); grab(g, 'hat'); g.spend('grab');
    g.launch(hand(), { x: -.5, y: 0, z: 1.2 }); settle(g);
    expect(g.ult.phase).toBe('none'); const hat = g.actors.find(t => t.kind === 'hat')!; expect(hat.y).toBe(0);
    g.stamina = 100; expect(g.act('grab', hat.id)).toBe('grab');
  });
  test('intro: the bet cards (player, then the weasel bartender) play before the stream; the old card text is gone', async () => {
    const { BET_CARDS, cardAt } = await import('../src/ult');
    const { ULT } = await import('../src/game');
    const { readFileSync } = await import('node:fs');
    expect(BET_CARDS[0].text).toContain('Спорим, бармен, на триста баксов, что я нассу вон в ту шляпу и не пролью ни капли?');
    expect(BET_CARDS[1].who).toContain('БАРМЕН'); expect(BET_CARDS[1].text).toMatch(/Идёт|Ставлю триста/);
    expect(cardAt(ULT.freeze + .1)).toBe(BET_CARDS[0]); expect(cardAt(BET_CARDS[1].at + .1)).toBe(BET_CARDS[1]); expect(cardAt(ULT.intro + .01)).toBeNull();
    expect(ULT.intro).toBeCloseTo(BET_CARDS[1].at + BET_CARDS[1].len, 6);
    for (const f of ['src/main.ts', 'src/ult.ts', 'src/game.ts']) expect(readFileSync(new URL('../' + f, import.meta.url), 'utf8')).not.toMatch(/дамы,? отвернитесь/i);
  });
  test('keeping the stream in the hat wins the bet (+300); spilling loses it; enemies still soak either way', async () => {
    const { ULT } = await import('../src/game'); const { BET } = await import('../src/ult');
    const pour = (inHatShare: number) => {
      const g = new Game(); g.start(1); grab(g, 'hat'); g.spend('grab'); g.resolve('grab', { kind: 'cover', id: 'counter', point: { x: .9, y: counter.max.y, z: -2.4 } });
      g.tick(ULT.intro + .01); expect(g.ult.phase).toBe('pour');
      const enemy = g.actors.find(t => t.kind === 'enemy')!; expect(g.soak({ kind: 'enemy', id: enemy.id }, .1)).toBe('soak');
      let t = 0; const score0 = g.score;
      while (g.ult.phase === 'pour') { if (t < ULT.length * inHatShare) g.pourInHat(.1); g.tick(.1); t += .1; }
      return { g, gained: g.score - score0 };
    };
    const won = pour(.9); expect(won.g.events.find(e => e.type === 'ultEnd')?.amount).toBe(BET.prize); expect(won.gained).toBeGreaterThan(BET.prize);
    const lost = pour(.3); expect(lost.g.events.find(e => e.type === 'ultEnd')?.amount).toBe(0); expect(lost.gained).toBeLessThan(BET.prize);
  });
});
