import { describe, expect, test } from 'bun:test';
import { Game, ANTIC, GAGS, HAZARD, MILESTONES, type Actor } from '../src/game';
import { bodyBox, pose, exposure, DUCKS } from '../src/layout';
import { ANVIL, BOWL } from '../src/throw';
import { PROPS, type PropKind } from '../src/props';
import type { Hittable } from '../src/aim';

/** A bar game with hand-placed bullies standing in the open (no cover, no slot), fully out and far from their swing. */
function arena(at: { x: number; z: number }[], hp = 30) {
  const g = new Game(); g.start(1);
  g.actors = g.actors.filter(t => t.kind !== 'enemy' && t.kind !== 'friend' && t.kind !== 'dog');
  g.actors = g.actors.filter(t => !(t.kind in PROPS)); // an empty floor: only what we throw lands on it
  const foes: Actor[] = at.map((p, i) => ({ id: 900 + i, kind: 'enemy', x: p.x, y: 0, z: p.z, age: 5, deadline: 99, hp, maxHp: hp }));
  g.actors.push(...foes); g.events.length = 0;
  return { g, foes };
}
const bodies = (g: Game): Hittable[] => g.actors.filter(t => t.kind === 'enemy').map(t => ({ id: t.id, kind: 'enemy', ...bodyBox('enemy', pose(1, t)) }));
function throwAt(g: Game, kind: PropKind, from: { x: number; y: number; z: number }, to: { x: number; y: number; z: number }, frames = 600) {
  g.held = kind; const f = g.launch(from, to)!; const trail: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < frames && g.flights.includes(f); i++) { g.fly(1 / 60, bodies(g)); trail.push({ ...f.pos }); }
  return { f, trail };
}
const chest = (t: Actor) => { const b = bodyBox('enemy', pose(1, t)); return { x: (b.min.x + b.max.x) / 2, y: b.min.y + (b.max.y - b.min.y) * .6, z: b.max.z }; };
const eye = { x: 0, y: 2.1, z: 8 };

describe('prop gags', () => {
  test('anvil: flies above the bully, stops dead, drops straight down and flattens it into a pancake', () => {
    const { g, foes: [foe] } = arena([{ x: .5, z: 0 }]);
    const { f, trail } = throwAt(g, 'anvil', eye, chest(foe));
    expect(f.dropped).toBe(true);
    const after = trail.filter((_, i) => (i + 1) / 60 > f.drop! + ANVIL.hang + .02);
    expect(after.length).toBeGreaterThan(2);
    for (const p of after.slice(0, 5)) expect(Math.abs(p.x - after[0].x)).toBeLessThan(1e-6); // straight down, no drift
    const ko = g.events.find(e => e.type === 'ko' && e.id === foe.id)!;
    expect(ko).toBeTruthy(); expect(ko.how).toBe('pancake'); expect(g.actors.includes(foe)).toBe(false);
  });
  test('cream pie: splats (breakable), blinds the bully on hit, one-shots to zero HP and KO; blinded bully stumbles and recovers', () => {
    const { g, foes: [foe] } = arena([{ x: 0, z: 0 }], 40); foe.deadline = foe.age + 1;
    throwAt(g, 'pie', eye, chest(foe));
    expect(g.events.some(e => e.type === 'shatter' && e.prop === 'pie')).toBe(true);
    expect(g.events.some(e => e.type === 'blind' && e.id === foe.id)).toBe(true);
    expect(foe.blind).toBeGreaterThan(GAGS.pie.blind - .5);
    expect(foe.hp).toBe(0);
    expect(g.events.some(e => e.type === 'ko' && e.id === foe.id)).toBe(true);
    expect(g.actors.includes(foe)).toBe(false);

    const { g: g2, foes: [f2] } = arena([{ x: 0, z: 0 }], 40); f2.deadline = f2.age + 1; f2.blind = GAGS.pie.blind; const hp = g2.hp;
    for (let i = 0; i < 60 * 2.4; i++) g2.tick(1 / 60);
    expect(g2.hp).toBe(hp); expect(g2.actors.includes(f2)).toBe(true); expect(f2.blind).toBeGreaterThan(0);
    for (let i = 0; i < 60; i++) g2.tick(1 / 60); expect(f2.blind).toBe(0);
  });
  test('rubber chicken: squeak, one-shot KO to zero HP, a big combo bonus', () => {
    const { g, foes: [foe] } = arena([{ x: 0, z: 0 }]); g.combo = 1; const score = g.score;
    throwAt(g, 'chicken', eye, chest(foe));
    expect(foe.hp).toBe(0);
    expect(g.events.some(e => e.type === 'ko' && e.id === foe.id)).toBe(true);
    expect(g.actors.includes(foe)).toBe(false);
    expect(PROPS.chicken.damage).toBeLessThan(PROPS.bottle.damage / 3);
    expect(g.combo).toBe(1 + GAGS.chicken.combo + 1); expect(g.score).toBeGreaterThanOrEqual(score + GAGS.chicken.bonus);
    expect(g.events.some(e => e.type === 'squeak')).toBe(true);
  });
  test('watermelon: bursts and its seeds ricochet into the bullies nearby', () => {
    const { g, foes: [a, b, c] } = arena([{ x: 0, z: 0 }, { x: 1.4, z: -.4 }, { x: 9, z: 0 }]);
    throwAt(g, 'melon', eye, chest(a));
    expect(g.events.some(e => e.type === 'shatter' && e.prop === 'melon')).toBe(true);
    expect(g.events.find(e => e.type === 'seeds')!.ids).toEqual([b.id]);
    expect(b.hp).toBe(30 - GAGS.seeds.damage); expect(c.hp).toBe(30);
  });
  test('fire hydrant: where it lands a water geyser knocks back the bullies near it (once each)', () => {
    const { g, foes: [near, far] } = arena([{ x: 1, z: -.5 }, { x: 8, z: 0 }], 40);
    throwAt(g, 'hydrant', eye, { x: 0, y: 0, z: 1 }); // short of them, on the floor
    expect(g.events.some(e => e.type === 'geyser')).toBe(true); expect(g.geysers.length).toBe(1);
    expect(g.actors.some(t => t.kind === 'hydrant')).toBe(true); // the hydrant itself stays
    const dl = near.deadline; g.tick(.05); g.tick(.05);
    expect(near.hp).toBe(40 - GAGS.geyser.damage); expect(near.deadline).toBeGreaterThan(dl); expect(far.hp).toBe(40);
    expect(g.events.filter(e => e.type === 'knock').length).toBe(1);
    for (let i = 0; i < 60 * GAGS.geyser.life; i++) g.tick(1 / 60); expect(g.geysers.length).toBe(0);
  });
  test('bowling ball: lands, rolls down its lane and bowls over several bullies — a strike', () => {
    const { g, foes: [a, b] } = arena([{ x: 0, z: 1 }, { x: 0, z: -1.5 }], 30);
    const { f } = throwAt(g, 'bowling', eye, { x: 0, y: 0, z: 3.2 });
    expect(f.rolling).toBe(true); expect(f.hits).toEqual([a.id, b.id]);
    expect(g.actors.includes(a) || g.actors.includes(b)).toBe(false); // 30 damage each: both down
    expect(g.events.some(e => e.type === 'strike')).toBe(true);
    expect(g.actors.some(t => t.kind === 'bowling')).toBe(true); // and it stays where it stops
    expect(BOWL.minSpeed).toBeGreaterThan(3);
  });
  test('plunger: sticks to the bully\'s face (no bounce, no landing), one-shots to zero HP and stuns it', () => {
    const { g, foes: [foe] } = arena([{ x: 0, z: 0 }]); const dl = foe.deadline;
    throwAt(g, 'plunger', eye, chest(foe));
    expect(foe.hp).toBe(0);
    expect(g.events.some(e => e.type === 'ko' && e.id === foe.id)).toBe(true);
    expect(g.actors.includes(foe)).toBe(false);
    expect(foe.plunger).toBe(true); expect(foe.deadline).toBe(dl + GAGS.plunger.stun); expect(g.flights.length).toBe(0);
    expect(g.events.some(e => e.type === 'stick')).toBe(true); expect(g.actors.some(t => t.kind === 'plunger')).toBe(false);
  });
  test('breakables shatter on impact and leave nothing; sturdy props land and stay', () => {
    for (const kind of ['bottle', 'mug', 'whiskey', 'eggs', 'flowerpot', 'melon', 'pie'] as PropKind[]) {
      const { g, foes: [foe] } = arena([{ x: 0, z: 0 }], 200);
      throwAt(g, kind, eye, chest(foe));
      expect({ kind, shatter: g.events.some(e => e.type === 'shatter' && e.prop === kind), left: g.actors.some(t => t.kind === kind) }).toEqual({ kind, shatter: true, left: false });
    }
    const { g, foes: [foe] } = arena([{ x: 0, z: 0 }], 200);
    throwAt(g, 'barrel', eye, chest(foe));
    expect(g.events.some(e => e.type === 'shatter')).toBe(false); expect(g.actors.some(t => t.kind === 'barrel')).toBe(true);
  });
  test('every throwable prop in flight one-shots an enemy to zero HP and triggers KO', () => {
    const throwable = (Object.keys(PROPS) as PropKind[]).filter(k => k !== 'hat');
    expect(throwable.length).toBe(18);
    for (const kind of throwable) {
      const { g, foes: [foe] } = arena([{ x: 0, z: 0 }], 50);
      throwAt(g, kind, eye, chest(foe));
      expect(foe.hp).toBe(0);
      expect(g.actors.includes(foe)).toBe(false);
      expect(g.events.some(e => e.type === 'ko' && e.id === foe.id)).toBe(true);
      if (kind === 'chicken') {
        expect(g.events.some(e => e.type === 'squeak' && e.id === foe.id)).toBe(true);
      } else if (kind === 'pie') {
        expect(g.events.some(e => e.type === 'blind' && e.id === foe.id)).toBe(true);
      } else if (kind === 'plunger') {
        expect(g.events.some(e => e.type === 'stick' && e.id === foe.id)).toBe(true);
      }
    }
  });
});

describe('absurdity', () => {
  test('every third bully clowns around (dance / sandwich / selfie): fully out, no ducking, swings later, takes double damage', () => {
    const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.start(2);
    for (let i = 0; i < 6; i++) { g.spawn(); g.actors = g.actors.filter(t => !(t.kind === 'enemy' && g.actors.filter(e => e.kind === 'enemy').length > 4 && t !== g.actors.filter(e => e.kind === 'enemy').at(-1))); }
    const clowns = g.actors.filter(t => t.kind === 'enemy' && t.antic);
    expect(clowns.length).toBeGreaterThan(0); expect(ANTIC.kinds).toContain(clowns[0].antic!);
    const c = clowns[0], d = DUCKS[0], during = { ...c, age: d.at + d.len / 2 };
    expect(exposure(during.age, during.deadline)).toBeLessThan(.9); // a normal bully would be ducking here…
    const slot = g.layout.slots[c.slot!]; expect(pose(2, during).y).toBeCloseTo(slot.y); // …the clown stays out
    c.age = 1; c.hp = 30; g.spend('punch'); g.resolve('punch', { kind: 'enemy', id: c.id }); expect(c.hp).toBe(10);
  });
  test('knocked-out bullies leave in style: spinning, flying off as stars, turning into birds; the anvil makes a pancake', () => {
    const { g, foes } = arena([{ x: -2, z: 0 }, { x: 0, z: 0 }, { x: 2, z: 0 }], 10);
    for (const f of foes) { g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'enemy', id: f.id }); }
    expect(new Set(g.events.filter(e => e.type === 'ko').map(e => e.how))).toEqual(new Set(['spin', 'stars', 'birds']));
  });
  test('a piano or a safe whistles down with a shadow first, then flattens whoever is under it', () => {
    const { g, foes: [under, away] } = arena([{ x: 0, z: 0 }, { x: 5, z: 0 }]);
    const h = g.dropFromSky(0, 0); expect(g.events.find(e => e.type === 'hazard')).toMatchObject({ hazard: h.kind });
    g.tick(HAZARD.warn - .1); expect(g.actors.includes(under)).toBe(true); // time to read the shadow
    g.tick(.2);
    const crash = g.events.find(e => e.type === 'crash')!; expect(crash.ids).toEqual([under.id]);
    expect(g.events.find(e => e.type === 'ko' && e.id === under.id)!.how).toBe('pancake'); expect(g.actors.includes(away)).toBe(true);
    expect(g.dropFromSky(5, 0).kind).not.toBe(h.kind); // piano, then safe
  });
  test('the sky drops something on its own every so often', () => {
    const g = new Game(); g.start(1);
    for (let i = 0; i < 60 * (HAZARD.first + 1); i++) { g.tick(1 / 60); for (const t of g.actors) if (t.kind === 'enemy') t.deadline = t.age + 5; }
    expect(g.events.some(e => e.type === 'hazard') || g.hazards.length > 0).toBe(true);
  });
  test('combo milestones raise old-cartoon intertitles', () => {
    const { g, foes } = arena([{ x: -3, z: 0 }, { x: -1, z: 0 }, { x: 1, z: 0 }, { x: 3, z: 0 }, { x: 5, z: 0 }], 10);
    for (const f of foes) { g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'enemy', id: f.id }); }
    expect(g.events.filter(e => e.type === 'milestone').map(e => e.text)).toEqual([MILESTONES[3], MILESTONES[5]]);
  });
});
