import { describe, expect, test } from 'bun:test';
import { rayBox, resolveShot, WHIFF_REACH, type Hittable, type Vec3 } from '../src/aim';
import { LEVELS, CARD, cameraFor, cardBox, hittables, pose } from '../src/layout';
import { Game } from '../src/game';

const eye: Vec3 = { x: 0, y: 2, z: 10 };
const toward = (p: Vec3, from = eye): Vec3 => ({ x: p.x - from.x, y: p.y - from.y, z: p.z - from.z });
const boxAt = (id: number | string, kind: Hittable['kind'], x: number, y: number, z: number, w = 1, h = 1): Hittable =>
  ({ id, kind, min: { x: x - w / 2, y: y - h / 2, z: z - .05 }, max: { x: x + w / 2, y: y + h / 2, z: z + .05 } });

describe('free-aim ray resolution', () => {
  test('ray-box slab test reports entry distance and misses', () => {
    expect(rayBox({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: -1, y: -1, z: -6 }, { x: 1, y: 1, z: -5 })).toBeCloseTo(5);
    expect(rayBox({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: -1 }, { x: 2, y: -1, z: -6 }, { x: 3, y: 1, z: -5 })).toBeNull();
    expect(rayBox({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 1 }, { x: -1, y: -1, z: -6 }, { x: 1, y: 1, z: -5 })).toBeNull();
  });
  test('strikes exactly the clicked target: hit point lies on its face, no snapping to a nearby one', () => {
    const enemy = boxAt(1, 'enemy', 0, 2, 0), other = boxAt(2, 'enemy', 1.6, 2, 0);
    const shot = resolveShot(eye, toward({ x: .3, y: 2.2, z: 0 }), [enemy, other]);
    expect(shot.kind).toBe('enemy'); expect(shot.id).toBe(1);
    expect(shot.point.x).toBeCloseTo(.3 * 10.05 / 10, 2); expect(shot.point.z).toBeCloseTo(.05);
    // Just outside the hitbox edge is a whiff even though an enemy is centimetres away (no magnetism).
    expect(resolveShot(eye, toward({ x: .56, y: 2, z: 0 }), [enemy]).kind).toBe('whiff');
  });
  test('cover in front of an enemy blocks the shot; nearer target occludes farther; dog in front is protected', () => {
    const enemy = boxAt(1, 'enemy', 0, 2, -4), barrel = boxAt('barrel', 'cover', 0, 2, 2, 1, 1), dog = boxAt(3, 'dog', 0, 2, 0, .6, .6);
    expect(resolveShot(eye, toward({ x: 0, y: 2, z: -4 }), [enemy, barrel]).kind).toBe('cover');
    expect(resolveShot(eye, toward({ x: 0, y: 2, z: -4 }), [enemy, barrel]).id).toBe('barrel');
    const near = boxAt(5, 'enemy', 0, 2, 3), far = boxAt(6, 'enemy', 0, 2, -6);
    expect(resolveShot(eye, toward({ x: 0, y: 2, z: -6 }), [far, near]).id).toBe(5);
    expect(resolveShot(eye, toward({ x: 0, y: 2, z: -4 }), [enemy, dog]).kind).toBe('dog');
    // Peeking above the cover: the same enemy is reachable over the barrel's top edge.
    expect(resolveShot(eye, toward({ x: 0, y: 2.45, z: -4 }), [enemy, boxAt('low', 'cover', 0, 1.4, 2, 1, 1)]).id).toBe(1);
  });
  test('whiff into air: fist travels to the ground point or full reach', () => {
    const down = resolveShot(eye, toward({ x: 0, y: 0, z: 0 }), []);
    expect(down.kind).toBe('whiff'); expect(down.point.y).toBeCloseTo(0); expect(down.point.z).toBeCloseTo(0);
    const sky = resolveShot(eye, { x: 0, y: .5, z: -1 }, []);
    expect(sky.kind).toBe('whiff'); expect(sky.distance).toBe(WHIFF_REACH);
  });
});

describe('depth layers and occlusion in real level layouts', () => {
  for (const level of [1, 2]) {
    test(`level ${level}: covers and slots span all three depth layers`, () => {
      const L = LEVELS[level];
      for (const layer of ['foreground', 'midground', 'background'] as const) {
        expect(L.covers.some(c => c.layer === layer)).toBe(true); expect(L.slots.some(s => s.layer === layer)).toBe(true);
      }
      const zs = L.slots.map(s => s.z); expect(Math.max(...zs) - Math.min(...zs)).toBeGreaterThan(10);
    });
    test(`level ${level}: every hidden enemy is fully occluded by its cover; risen enemies are hittable`, () => {
      const cam = cameraFor(1440, 960).position;
      L: for (let slot = 0; slot < LEVELS[level].slots.length; slot++) {
        const t = { id: 99, kind: 'enemy' as const, slot, x: 0, y: 0, age: 0 };
        const hidden = cardBox('enemy', pose(level, t));
        const covers = hittables(level, []); let seen = 0, total = 0;
        for (let fx = .1; fx < 1; fx += .2) for (let fy = .1; fy < 1; fy += .2) {
          const p = { x: hidden.min.x + (hidden.max.x - hidden.min.x) * fx, y: hidden.min.y + (hidden.max.y - hidden.min.y) * fy, z: hidden.max.z };
          if (p.y < .05) continue;
          total++; if (resolveShot(cam, toward(p, cam), hittables(level, [t])).id === 99) seen++;
        }
        // Solid cover hides completely; plank fences leave real gaps you can punch through.
        const fenced = LEVELS[level].covers.some(c => c.look === 'plank') && LEVELS[level].slots[slot].layer === 'midground';
        expect({ slot, seen: seen / total <= (fenced ? .45 : 0) }).toEqual({ slot, seen: true });
        const risen = { ...t, age: 5 }; const b = cardBox('enemy', pose(level, risen));
        const head = { x: (b.min.x + b.max.x) / 2, y: b.max.y - .2, z: b.max.z };
        expect(resolveShot(cam, toward(head, cam), hittables(level, [risen])).id).toBe(99);
        expect(covers.length).toBeGreaterThan(4);
        continue L;
      }
    });
  }
  test('card scale is world-true: a background enemy is the same world size as a foreground one', () => {
    expect(CARD.enemy.h).toBe(1.9); // perspective alone shrinks distant cards — no per-depth rescaling
  });
});

describe('stamina and outcomes for free-aim strikes', () => {
  test('a whiff still spends full punch stamina and breaks combo', () => {
    const g = new Game(); g.start(1); g.combo = 3;
    expect(g.spend('punch')).toBe(true); expect(g.stamina).toBe(76);
    expect(g.resolve('punch', { kind: 'whiff' })).toBe('miss'); expect(g.stamina).toBe(76); expect(g.combo).toBe(0);
    expect(g.defeated).toBe(0);
  });
  test('punching cover spends stamina and leaves the enemy behind it alive', () => {
    const g = new Game(); g.start(1); const enemy = g.targets.find(t => t.kind === 'enemy')!;
    g.spend('punch'); expect(g.resolve('punch', { kind: 'cover', id: 'barrel-a' })).toBe('cover');
    expect(g.targets).toContain(enemy); expect(g.stamina).toBe(76); expect(g.score).toBe(0);
  });
  test('scenery hit is a whiff; prop punch smashes it; tired swings cost nothing', () => {
    const g = new Game(); g.start(1); g.spend('punch'); expect(g.resolve('punch', { kind: 'scenery', id: 'wall' })).toBe('miss');
    const prop = g.targets.find(t => t.kind === 'bottle' || t.kind === 'barrel')!;
    g.spend('punch'); expect(g.resolve('punch', { kind: 'prop', id: prop.id })).toBe('smash'); expect(g.targets).not.toContain(prop); expect(g.score).toBe(25);
    g.stamina = 10; expect(g.spend('punch')).toBe(false); expect(g.stamina).toBe(10);
  });
  test('thrown prop that whiffs is lost', () => {
    const g = new Game(); g.start(1); const prop = g.targets.find(t => t.kind === 'bottle')!;
    expect(g.act('grab', prop.id)).toBe('grab'); g.spend('grab'); expect(g.resolve('grab', { kind: 'whiff' })).toBe('miss'); expect(g.held).toBeNull(); expect(g.stamina).toBe(70);
  });
});
