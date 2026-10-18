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
  /** Anvil: seconds until it is right above the aim point; then it hangs a beat and drops straight down like a cartoon. */ drop?: number; dropped?: boolean;
  /** Bowling ball: rolling along the ground, and every character it has already bowled over (multi-hit). */ rolling?: boolean; hits?: (number | string)[];
}
/** The anvil flies to a point this high above the aim, stops dead in the air for HANG seconds, then plummets. */
export const ANVIL = { above: 2.4, hang: .16 } as const;
/** The bowling ball rolls on after landing: at least this fast along the ground, losing speed to friction. */
export const BOWL = { radius: .2, minSpeed: 6.5, friction: .3, stop: .9 } as const;
export type Impact =
  | { type: 'hit'; kind: HitKind; id: number | string; point: Vec3 }
  | { type: 'rest'; point: Vec3; on: number | string | 'ground' };

/** Launch velocity for an arc that passes through `to` after flightTime(). */
export function launch(id: number, kind: PropKind, from: Vec3, aim: Vec3): Flight {
  // The anvil's drop point sits a hair behind the struck face (aim points lie on a body's front plane), so it lands on the body.
  const to = kind === 'anvil' ? { ...aim, y: aim.y + ANVIL.above, z: aim.z - .04 } : aim;
  const d = { x: to.x - from.x, y: to.y - from.y, z: to.z - from.z }, T = flightTime(kind, Math.hypot(d.x, d.y, d.z));
  const vel = { x: d.x / T, y: d.y / T - .5 * GRAVITY * T, z: d.z / T };
  const f: Flight = { id, kind, pos: { ...from }, vel, age: 0, angle: 0, spin: (to.x >= from.x ? -1 : 1) * 11 / Math.sqrt(PROPS[kind].mass), struck: false };
  if (kind === 'anvil') f.drop = T;
  if (kind === 'bowling') f.hits = [];
  return f;
}

/** Characters: a flying prop strikes one once, then pops off it. */
const LIVING = new Set<HitKind>(['enemy', 'dog', 'friend', 'thug']);
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
    if (f.drop !== undefined && !f.dropped && f.age >= f.drop) {
      // Right above the aim point: stop dead (no fall during the hang), then straight down.
      f.vel = { x: 0, y: 0, z: 0 }; f.spin = 0; f.angle = 0;
      if (f.age < f.drop + ANVIL.hang) continue;
      f.dropped = true; f.vel.y = -3;
    }
    if (f.rolling) { // friction; a slow ball stops where it is
      const sp = Math.hypot(f.vel.x, f.vel.z), k = Math.max(0, 1 - BOWL.friction * h);
      f.vel.x *= k; f.vel.z *= k; f.spin = -sp * 2.5;
      if (sp < BOWL.stop) { out.push({ type: 'rest', point: { x: f.pos.x, y: 0, z: f.pos.z }, on: 'ground' }); return out; }
    }
    const next = { x: f.pos.x + f.vel.x * h, y: f.pos.y + f.vel.y * h, z: f.pos.z + f.vel.z * h };
    if (!f.rolling) f.vel.y += GRAVITY * h;
    const seg = { x: next.x - f.pos.x, y: next.y - f.pos.y, z: next.z - f.pos.z }, len = Math.hypot(seg.x, seg.y, seg.z), dir = normalize(seg);
    let best: { t: number; hit: Hittable } | null = null;
    for (const w of world) {
      if (w.kind === 'prop' || inside(f.pos, w)) continue;
      if (LIVING.has(w.kind) && (f.hits ? f.hits.includes(w.id) : f.struck)) continue;
      let min = w.min, max = w.max;
      if (w.kind === 'enemy') {
        const cx = (min.x + max.x) / 2, cy = (min.y + max.y) / 2;
        const hw = ((max.x - min.x) / 2) * 1.3, hh = ((max.y - min.y) / 2) * 1.3;
        min = { x: cx - hw, y: cy - hh, z: min.z - .1 };
        max = { x: cx + hw, y: cy + hh, z: max.z + .1 };
      }
      const t = rayBox(f.pos, dir, min, max);
      if (t !== null && t <= len && (!best || t < best.t)) best = { t, hit: w };
    }
    // The ground (y = 0) is the floor of every level.
    const tGround = next.y <= 0 && f.pos.y > 0 ? len * f.pos.y / (f.pos.y - next.y) : Infinity;
    if (best && best.t <= tGround) {
      const w = best.hit, p = { x: f.pos.x + dir.x * best.t, y: f.pos.y + dir.y * best.t, z: f.pos.z + dir.z * best.t };
      if (LIVING.has(w.kind) && f.hits) {
        // The bowling ball bowls right through: every character once, losing a little speed each time.
        f.struck = true; f.hits.push(w.id); out.push({ type: 'hit', kind: w.kind, id: w.id, point: p });
        f.vel.x *= .85; f.vel.z *= .85; continue;
      }
      if (LIVING.has(w.kind)) {
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
    if (tGround !== Infinity && f.hits && !f.rolling) {
      // The bowling ball lands and rolls on down its lane (keeps its heading, at least BOWL.minSpeed).
      const k = tGround / Math.max(len, 1e-9), sp = Math.hypot(f.vel.x, f.vel.z) || 1, v = Math.max(BOWL.minSpeed, sp);
      f.pos = { x: f.pos.x + seg.x * k, y: BOWL.radius, z: f.pos.z + seg.z * k }; f.vel = { x: f.vel.x / sp * v, y: 0, z: f.vel.z / sp * v }; f.rolling = true;
      continue;
    }
    if (tGround !== Infinity) { const k = tGround / Math.max(len, 1e-9); out.push({ type: 'rest', point: { x: f.pos.x + seg.x * k, y: 0, z: f.pos.z + seg.z * k }, on: 'ground' }); return out; }
    f.pos = next;
    if (f.age > 5) { out.push({ type: 'rest', point: { x: f.pos.x, y: 0, z: f.pos.z }, on: 'ground' }); return out; }
  }
  return out;
}
