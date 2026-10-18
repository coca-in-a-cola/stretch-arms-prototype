import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { resolveShot, type Vec3 } from '../src/aim';
import { LEVELS, BODY, DUCKS, WINDUP, RISE_TIME, bodyBox, cameraFor, clampPan, dogWalk, DOG_WALK_TOP, exposure, hittables, pose } from '../src/layout';
import { Game } from '../src/game';

const cam = cameraFor(1440, 960).position;
const dir = (p: Vec3): Vec3 => ({ x: p.x - cam.x, y: p.y - cam.y, z: p.z - cam.z });
const overlaps = (a: { min: Vec3; max: Vec3 }, b: { min: Vec3; max: Vec3 }) =>
  a.min.x < b.max.x && a.max.x > b.min.x && a.min.y < b.max.y && a.max.y > b.min.y && a.min.z < b.max.z && a.max.z > b.min.z;

describe('honest free aim: the hit is resolved where the fist lands', () => {
  test('a click on an exposed enemy lands on its face; a click just past its edge is a whiff that still costs stamina', () => {
    const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.start(2); g.spawn(); g.spawn();
    const enemy = g.actors.find(a => a.kind === 'enemy' && a.layer === 'midground')!; enemy.age = 2.5; // out of the duck, before wind-up
    for (const a of g.actors) if (a.kind === 'enemy' && a !== enemy) a.age = 0; // others hidden
    // The street is a panorama: the camera pans over to the enemy first, then the ray leaves the real camera.
    const eye = cameraFor(1440, 960, clampPan(2, enemy.x)).position, aimAt = (p: Vec3): Vec3 => ({ x: p.x - eye.x, y: p.y - eye.y, z: p.z - eye.z });
    const box = bodyBox('enemy', pose(2, enemy));
    const head = { x: (box.min.x + box.max.x) / 2, y: box.max.y - .25, z: box.max.z };
    const hit = resolveShot(eye, aimAt(head), hittables(2, g.actors));
    expect(hit.kind).toBe('enemy'); expect(hit.id).toBe(enemy.id);
    // Impact point is on the enemy's front face, right where the ray was aimed — no snapping to its centre.
    expect(hit.point.z).toBeCloseTo(box.max.z, 3);
    expect(Math.abs(hit.point.x - head.x)).toBeLessThan(.01); expect(Math.abs(hit.point.y - head.y)).toBeLessThan(.01);
    expect(g.spend('punch')).toBe(true); expect(g.resolve('punch', hit)).toBe('hit'); expect(g.actors).not.toContain(enemy);

    // Same enemy, aim 8 cm above the top of its hitbox: nothing magnetises the fist onto it.
    const g2 = new Game({ version: 2, unlocked: 2, best: 0 }); g2.start(2); g2.spawn(); g2.spawn();
    const e2 = g2.actors.find(a => a.kind === 'enemy' && a.layer === 'midground')!; e2.age = 2.5;
    for (const a of g2.actors) if (a.kind === 'enemy' && a !== e2) a.age = 0;
    const b2 = bodyBox('enemy', pose(2, e2));
    expect(e2.x).toBe(enemy.x);
    const above = resolveShot(eye, aimAt({ x: (b2.min.x + b2.max.x) / 2, y: b2.max.y + .08, z: b2.max.z }), hittables(2, g2.actors));
    expect(above.kind === 'enemy' || above.kind === 'dog').toBe(false);
    const before = g2.stamina; expect(g2.spend('punch')).toBe(true);
    expect(['miss', 'cover']).toContain(g2.resolve('punch', above)); expect(g2.stamina).toBe(before - 24); expect(g2.actors).toContain(e2);
  });
  test('punching the wandering halo dog at its current spot is a penalty; its old spot is just air', () => {
    const g = new Game(); g.start(1); const dog = g.actors.find(a => a.kind === 'dog')!;
    dog.age = 1; const here = bodyBox('dog', pose(1, dog));
    const mid = (b: { min: Vec3; max: Vec3 }) => ({ x: (b.min.x + b.max.x) / 2, y: (b.min.y + b.max.y) / 2, z: b.max.z });
    const shot = resolveShot(cam, dir(mid(here)), hittables(1, [dog]));
    expect(shot.kind).toBe('dog');
    dog.age = 6; // strolled to the other sitting spot
    expect(resolveShot(cam, dir(mid(here)), hittables(1, [dog])).kind).not.toBe('dog');
    g.spend('punch'); expect(g.resolve('punch', shot)).toBe('protected'); expect(g.events.some(e => e.type === 'dog')).toBe(true);
  });
});

describe('depth layers: occlusion ordering and no z-fighting', () => {
  for (const level of [1, 2]) {
    const L = LEVELS[level];
    test(`level ${level}: no actor sprite plane is coplanar with or inside any cover`, () => {
      for (const s of L.slots) for (const c of L.covers) {
        const x0 = Math.min(s.x, s.hideX) - BODY.enemy.w / 2, x1 = Math.max(s.x, s.hideX) + BODY.enemy.w / 2;
        if (c.max.x < x0 || c.min.x > x1) continue; // only covers that share screen space with this sprite
        for (const face of [c.min.z, c.max.z]) expect({ cover: c.id, gap: Math.abs(s.z - face) > .04 }).toEqual({ cover: c.id, gap: true });
      }
      for (const d of L.dogs) for (let age = 0; age < 9; age += .25) {
        const dog = { id: 1, kind: 'dog' as const, x: d.x, y: d.y, z: d.z, age: 0 };
        const b = bodyBox('dog', pose(level, { ...dog, age }));
        for (const c of L.covers) expect(overlaps(b, c)).toBe(false);
      }
    });
    test(`level ${level}: layers are ordered front-to-back and covers in front win the ray`, () => {
      const zOf = (layer: string) => L.slots.filter(s => s.layer === layer).map(s => s.z);
      expect(Math.min(...zOf('foreground'))).toBeGreaterThan(Math.max(...zOf('midground')));
      expect(Math.min(...zOf('midground'))).toBeGreaterThan(Math.max(...zOf('background')));
      // A hidden enemy's head point is behind its own cover: the ray stops on the cover first.
      for (let slot = 0; slot < L.slots.length; slot++) {
        if (L.covers.some(c => c.look === 'plank') && L.slots[slot].layer === 'midground') continue; // fence gaps are real
        const t = { id: 7, kind: 'enemy' as const, slot, x: 0, y: 0, age: 0 };
        const b = bodyBox('enemy', pose(level, t));
        const p = { x: (b.min.x + b.max.x) / 2, y: b.max.y - .1, z: b.max.z };
        if (p.y < .05) continue;
        const eye = cameraFor(1440, 960, clampPan(level, L.slots[slot].x)).position;
        const shot = resolveShot(eye, { x: p.x - eye.x, y: p.y - eye.y, z: p.z - eye.z }, hittables(level, [t]));
        expect(shot.kind).not.toBe('enemy');
      }
    });
  }
  test('peek cycle: pops up, ducks back behind cover, then stays fully out for the wind-up', () => {
    expect(exposure(0, 6.2)).toBe(0);
    expect(exposure(RISE_TIME + .01, 6.2)).toBeCloseTo(1, 1);
    const midDuck = DUCKS[0].at + DUCKS[0].len / 2;
    expect(exposure(midDuck, 6.2)).toBeLessThan(.45);
    expect(exposure(6.2 - WINDUP / 2, 6.2)).toBe(1);
    // A late duck never overlaps the wind-up on the fast level.
    expect(exposure(DUCKS[1].at + DUCKS[1].len / 2, 4.6)).toBe(1);
    // Reduced motion: no hiding games at all.
    expect(exposure(midDuck, 6.2, false)).toBe(1);
  });
  test('the dog sits, strolls and turns around', () => {
    expect(dogWalk(1).walking).toBe(false); expect(dogWalk(4).walking).toBe(true);
    expect(dogWalk(1).dx).not.toBe(dogWalk(6).dx); expect(dogWalk(4).facing).not.toBe(dogWalk(8.5).facing);
    expect(BODY.dog.h).toBeLessThan(BODY.enemy.h);
  });
});

describe('copy: a living street brawler, not a shooting gallery', () => {
  const root = join(import.meta.dir, '..');
  const files = ['README.md', 'ASSETS.md', 'index.html', ...readdirSync(join(root, 'src')).map(f => 'src/' + f)];
  const banned = [/(^|[^а-яё])тир(а|у|ом|е|ы|ов)?([^а-яё]|$)/i, /мишен/i, /картон/i, /стенд/i, /\btargets?\b/i, /standee/i, /bullseye/i, /shooting gallery/i, /\bcardboard\b/i, /яблочк/i];
  for (const f of files) test(`${f} has no shooting-gallery / cardboard wording`, () => {
    const text = readFileSync(join(root, f), 'utf8').replace(/(e|sun)\.target/g, ''); // DOM / Three.js API names, not copy
    for (const re of banned) expect({ f, match: text.match(re)?.[0] ?? null }).toEqual({ f, match: null });
  });
});

describe('hitboxes follow the drawn frame', () => {
  test('the walking dog (low side-view frame) is only hittable up to its drawn back, the sitting dog to its ears', () => {
    const dog = { id: 1, kind: 'dog' as const, x: LEVELS[1].dogs[0].x, y: 0, z: LEVELS[1].dogs[0].z, age: 0 };
    const top = (age: number) => hittables(1, [{ ...dog, age }]).find(h => h.kind === 'dog')!.max.y;
    expect(top(1)).toBeCloseTo(BODY.dog.h * BODY.dog.inset[3], 6); // sitting
    expect(top(4)).toBeCloseTo(BODY.dog.h * DOG_WALK_TOP, 6); // strolling between spots
  });
});
