// Thrown props are independent projectiles: a ballistic arc with spin from the hand toward the aim point.
// Pure math (no Three.js) so rules and tests share it. The hit is whatever the prop actually runs into on the
// way — an enemy that ducked in the meantime is missed honestly — and a prop that misses falls and stays put.
import { normalize, rayBox, type Hittable, type HitKind, type Vec3 } from './aim';
import { PROPS, type PropKind } from './props';

/** Cartoon gravity: lighter than real so even a slow anvil lob stays a readable arc, not a mortar shell. */
export const GRAVITY = -9.5;
/** Seconds in the air to reach the aim point: heavier props fly slower (and hang longer). */
export function flightTime(kind: PropKind, distance: number) {
  const speed = 22 / Math.sqrt(Math.max(.5, PROPS[kind].mass));
  return Math.max(.3, Math.min(1, distance / speed));
}

export interface Flight {
  id: number; kind: PropKind; pos: Vec3; vel: Vec3; age: number;
  /** Visual spin (radians) — heavier props tumble slower. */ angle: number; spin: number;
  /** Already struck something (it only damages once; afterwards it is just falling). */ struck: boolean;
}
export type Impact =
  | { type: 'hit'; kind: HitKind; id: number | string; point: Vec3 }
  | { type: 'rest'; point: Vec3; on: number | string | 'ground' };

/** Launch velocity for an arc that passes through `to` after flightTime(). */
export function launch(id: number, kind: PropKind, from: Vec3, to: Vec3): Flight {
  const d = { x: to.x - from.x, y: to.y - from.y, z: to.z - from.z }, T = flightTime(kind, Math.hypot(d.x, d.y, d.z));
  const vel = { x: d.x / T, y: d.y / T - .5 * GRAVITY * T, z: d.z / T };
  return { id, kind, pos: { ...from }, vel, age: 0, angle: 0, spin: (to.x >= from.x ? -1 : 1) * 11 / Math.sqrt(PROPS[kind].mass), struck: false };
}

const inside = (p: Vec3, h: Hittable) => p.x > h.min.x && p.x < h.max.x && p.y > h.min.y && p.y < h.max.y && p.z > h.min.z && p.z < h.max.z;
const EPS = 1e-3;

/**
 * Advance one flight by dt against the world. Returns impacts in order; a 'rest' impact means the flight is over.
 * Breakables are not handled here — the caller shatters them on their first 'hit'.
 * Enemies / the dog are only struck once; props on the ground never block a flying one.
 */
export function step(f: Flight, dt: number, world: readonly Hittable[]): Impact[] {
  const out: Impact[] = [];
  let left = dt;
  while (left > 1e-9) {
    const h = Math.min(left, 1 / 120); left -= h; f.age += h; f.angle += f.spin * h;
    const next = { x: f.pos.x + f.vel.x * h, y: f.pos.y + f.vel.y * h, z: f.pos.z + f.vel.z * h };
    f.vel.y += GRAVITY * h;
    const seg = { x: next.x - f.pos.x, y: next.y - f.pos.y, z: next.z - f.pos.z }, len = Math.hypot(seg.x, seg.y, seg.z), dir = normalize(seg);
    let best: { t: number; hit: Hittable } | null = null;
    for (const w of world) {
      if (w.kind === 'prop' || (f.struck && (w.kind === 'enemy' || w.kind === 'dog')) || inside(f.pos, w)) continue;
      const t = rayBox(f.pos, dir, w.min, w.max);
      if (t !== null && t <= len && (!best || t < best.t)) best = { t, hit: w };
    }
    // The ground (y = 0) is the floor of every level.
    const tGround = next.y <= 0 && f.pos.y > 0 ? len * f.pos.y / (f.pos.y - next.y) : Infinity;
    if (best && best.t <= tGround) {
      const w = best.hit, p = { x: f.pos.x + dir.x * best.t, y: f.pos.y + dir.y * best.t, z: f.pos.z + dir.z * best.t };
      if (w.kind === 'enemy' || w.kind === 'dog') {
        f.struck = true; out.push({ type: 'hit', kind: w.kind, id: w.id, point: p });
        // Knocked off the victim: a little pop back toward the player, then it falls.
        f.pos = { x: p.x, y: p.y, z: w.max.z + .08 }; f.vel = { x: f.vel.x * .12, y: 1.6, z: 1.4 }; f.spin *= -.6;
        continue;
      }
      if (dir.y < 0 && p.y >= w.max.y - EPS) { // came down on top of it: rests there
        out.push({ type: 'rest', point: { x: p.x, y: w.max.y, z: Math.min(w.max.z - .06, Math.max(w.min.z + .06, p.z)) }, on: w.id }); return out;
      }
      if (!f.struck) { f.struck = true; out.push({ type: 'hit', kind: w.kind, id: w.id, point: p }); }
      // Side hit: bounce off the face it struck, losing most of its speed.
      const n = Math.abs(p.z - w.max.z) < EPS ? { z: 1 } : Math.abs(p.z - w.min.z) < EPS ? { z: -1 } : Math.abs(p.x - w.max.x) < EPS ? { x: 1 } : Math.abs(p.x - w.min.x) < EPS ? { x: -1 } : { y: -1 };
      f.vel = { x: f.vel.x * .25, y: Math.min(f.vel.y, 0) * .3, z: f.vel.z * .25 };
      if ('z' in n) f.vel.z = n.z! * Math.max(.6, Math.abs(f.vel.z)); else if ('x' in n) f.vel.x = n.x! * Math.max(.6, Math.abs(f.vel.x)); else f.vel.y = -Math.abs(f.vel.y);
      f.pos = { x: p.x + ('x' in n ? n.x! * .05 : 0), y: p.y + ('y' in n ? n.y! * .05 : 0), z: p.z + ('z' in n ? n.z! * .05 : 0) };
      f.spin *= -.5;
      continue;
    }
    if (tGround !== Infinity) { const k = tGround / Math.max(len, 1e-9); out.push({ type: 'rest', point: { x: f.pos.x + seg.x * k, y: 0, z: f.pos.z + seg.z * k }, on: 'ground' }); return out; }
    f.pos = next;
    if (f.age > 5) { out.push({ type: 'rest', point: { x: f.pos.x, y: 0, z: f.pos.z }, on: 'ground' }); return out; }
  }
  return out;
}
