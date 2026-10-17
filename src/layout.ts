// Depth-layered level layouts. Pure data + pose math shared by rendering, hit-testing and unit tests,
// so what you see is exactly what the fist can hit.
import type { Hittable, Vec3 } from './aim';

export type Layer = 'foreground' | 'midground' | 'background';
export type CoverLook = 'barrel' | 'crate' | 'plank' | 'rail' | 'post' | 'wall' | 'interior' | 'dumpster' | 'pallet' | 'van' | 'barrier';
export interface Cover { id: string; look: CoverLook; layer: Layer; min: Vec3; max: Vec3; color: string; }
/** Enemy spawn point behind a cover. `hide` is where the sprite waits fully occluded; it slides/rises to `x,y`. */
export interface Slot { x: number; y: number; z: number; layer: Layer; hideX: number; hideY: number; }
export interface LevelLayout { covers: Cover[]; slots: Slot[]; order: number[]; dog: Vec3; prop: Vec3; deadline: number; goal: number; }

export const BODY = {
  enemy: { w: 1.52, h: 1.9, inset: [.2, .82, .03, .95] },
  dog: { w: 1.1, h: 1.375, inset: [.14, .9, .03, .95] },
  bottle: { w: .62, h: .82, inset: [.26, .74, 0, .96] },
  barrel: { w: .7, h: .82, inset: [.1, .9, 0, .96] },
} as const;
export type BodyKind = keyof typeof BODY;
/** Top of the visible gen_dog_walk.png frame, as a fraction of the sprite height. */
export const DOG_WALK_TOP = .82;

const box = (id: string, look: CoverLook, layer: Layer, cx: number, y0: number, cz: number, w: number, h: number, d: number, color: string): Cover =>
  ({ id, look, layer, color, min: { x: cx - w / 2, y: y0, z: cz - d / 2 }, max: { x: cx + w / 2, y: y0 + h, z: cz + d / 2 } });

/** Facade wall with real window openings (built from solid pieces around each hole) and a dark room behind. */
function facade(id: string, z: number, x0: number, x1: number, top: number, rows: { sill: number; h: number; w: number; xs: number[] }[], color: string): Cover[] {
  const out: Cover[] = []; const d = .3; let y = 0; let n = 0;
  const piece = (a: number, b: number, ya: number, yb: number) => { if (b - a > .01 && yb - ya > .01) out.push({ id: `${id}-${n++}`, look: 'wall', layer: 'background', color, min: { x: a, y: ya, z: z - d / 2 }, max: { x: b, y: yb, z: z + d / 2 } }); };
  for (const r of rows) {
    piece(x0, x1, y, r.sill);
    let cursor = x0;
    for (const x of r.xs) {
      piece(cursor, x - r.w / 2, r.sill, r.sill + r.h); cursor = x + r.w / 2;
      out.push({ id: `${id}-room-${n++}`, look: 'interior', layer: 'background', color: '#33403f', min: { x: x - r.w / 2 - .5, y: r.sill - 1.2, z: z - 1.35 }, max: { x: x + r.w / 2 + .5, y: r.sill + r.h + .6, z: z - 1.2 } });
    }
    piece(cursor, x1, r.sill, r.sill + r.h); y = r.sill + r.h;
  }
  piece(x0, x1, y, top);
  return out;
}

/** Fence of planks with real gaps — shots through a gap reach whatever stands behind. */
function fence(id: string, z: number, x0: number, x1: number, h: number, color: string): Cover[] {
  const out: Cover[] = [];
  for (let x = x0, i = 0; x + .26 <= x1 + 1e-6; x += .36, i++) out.push(box(`${id}-p${i}`, 'plank', 'midground', x + .13, 0, z, .26, h - (i % 2) * .08, .07, color));
  out.push(box(`${id}-rail`, 'rail', 'midground', (x0 + x1) / 2, h * .62, z - .07, x1 - x0, .12, .07, '#6e4d36'));
  return out;
}

const level1: LevelLayout = {
  goal: 9, deadline: 6.2,
  covers: [
    // Foreground / cover layer
    box('barrel-a', 'barrel', 'foreground', -2.75, 0, 3.0, .92, 1.15, .92, '#c83c32'),
    box('barrel-b', 'barrel', 'foreground', -1.92, 0, 3.35, .8, .98, .8, '#2f6f73'),
    box('crate-a', 'crate', 'foreground', 2.9, 0, 3.05, 1.15, 1.15, 1.1, '#c9944f'),
    box('crate-b', 'crate', 'foreground', 3.05, 1.15, 3.05, .72, .72, .72, '#d9a862'),
    // Mid-ground fence with gaps
    ...fence('fence', -1.6, -4.6, 4.6, 1.3, '#a8754c'),
    // Background: courtyard block with windows
    ...facade('block', -9, -13, 13, 9, [{ sill: 1.7, h: 1.65, w: 1.7, xs: [-4.2, 0, 4.2] }, { sill: 4.6, h: 1.5, w: 1.5, xs: [-6.5, -2.1, 2.1, 6.5] }], '#c9c3ae'),
  ],
  slots: [
    { x: -2.45, y: 0, z: 2.25, layer: 'foreground', hideX: -2.45, hideY: -1.2 },
    { x: -2.0, y: 0, z: -2.35, layer: 'midground', hideX: -2.0, hideY: -1.05 },
    { x: 4.2, y: .72, z: -9.5, layer: 'background', hideX: 4.2, hideY: -.35 },
    { x: 1.95, y: 0, z: 2.35, layer: 'foreground', hideX: 2.9, hideY: -.85 },
    { x: .95, y: 0, z: -2.35, layer: 'midground', hideX: .95, hideY: -1.05 },
    { x: -4.2, y: .72, z: -9.5, layer: 'background', hideX: -4.2, hideY: -.35 },
  ],
  order: [0, 1, 2, 3, 4, 5],
  dog: { x: .45, y: 0, z: -.85 },
  prop: { x: -.7, y: 0, z: 3.75 },
};

const level2: LevelLayout = {
  goal: 14, deadline: 4.6,
  covers: [
    box('dumpster', 'dumpster', 'foreground', -2.6, 0, 3.0, 2.0, 1.22, 1.1, '#3f7b55'),
    box('pallets', 'pallet', 'foreground', 2.95, 0, 3.15, 1.3, 1.3, 1.1, '#b98a52'),
    box('van', 'van', 'midground', -2.1, .25, -2.6, 3.4, 1.85, 1.7, '#e9e2cd'),
    box('barrier', 'barrier', 'midground', 2.55, 0, -1.9, 2.5, 1.02, .55, '#b8b7ac'),
    ...facade('shop', -11, -6, 6, 9, [{ sill: 1.3, h: 1.6, w: 2.0, xs: [-2.8, 2.8] }, { sill: 4.3, h: 1.6, w: 1.6, xs: [0] }], '#d58f86'),
  ],
  slots: [
    { x: 2.45, y: 0, z: 2.45, layer: 'foreground', hideX: 3.15, hideY: -1.1 },
    { x: -2.6, y: 0, z: 2.15, layer: 'foreground', hideX: -2.6, hideY: -1.15 },
    { x: 0, y: 3.45, z: -11.5, layer: 'background', hideX: 0, hideY: 2.25 },
    { x: .25, y: 0, z: -3.3, layer: 'midground', hideX: -1.05, hideY: 0 },
    { x: 2.8, y: .45, z: -11.5, layer: 'background', hideX: 2.8, hideY: -.75 },
    { x: 2.9, y: 0, z: -2.55, layer: 'midground', hideX: 2.9, hideY: -1.0 },
    { x: -2.8, y: .45, z: -11.5, layer: 'background', hideX: -2.8, hideY: -.75 },
  ],
  order: [0, 2, 1, 3, 4, 5, 6],
  dog: { x: 2.3, y: 0, z: -1.25 },
  prop: { x: .6, y: 0, z: 3.8 },
};

export const LEVELS: Record<number, LevelLayout> = { 1: level1, 2: level2 };

export const RISE_TIME = .32;
/** Peek cycle: after popping up, an enemy ducks back behind cover once or twice, then stays up to wind up. */
export const DUCKS = [{ at: 1.35, len: .8 }, { at: 3.3, len: .75 }];
export const WINDUP = .9;
const ease = (v: number) => 1 - (1 - v) ** 3;

/** 0 = fully hidden behind cover, 1 = fully out. Shared by rendering and hit-testing. */
export function exposure(age: number, deadline = Infinity, motion = true): number {
  if (!motion) return 1;
  let k = ease(Math.min(1, age / RISE_TIME));
  for (const d of DUCKS) if (age > d.at && age < d.at + d.len && d.at + d.len < deadline - WINDUP) k *= 1 - .62 * Math.sin(Math.PI * (age - d.at) / d.len);
  return k;
}

/** Halo dog strolls between two sitting spots. Returns the x offset and whether/which way it is walking. */
export function dogWalk(age: number, motion = true): { dx: number; walking: boolean; facing: 1 | -1 } {
  if (!motion) return { dx: 0, walking: false, facing: 1 };
  const T = 9, ph = age % T, A = -.7, B = .7, smooth = (v: number) => v * v * (3 - 2 * v);
  if (ph < 3.5) return { dx: A, walking: false, facing: 1 };
  if (ph < 4.5) return { dx: A + (B - A) * smooth(ph - 3.5), walking: true, facing: 1 };
  if (ph < 8) return { dx: B, walking: false, facing: -1 };
  return { dx: B + (A - B) * smooth(ph - 8), walking: true, facing: -1 };
}

/** Sprite feet position for an actor at a given age. Enemies rise/slide out of hiding; this is the hit pose too. */
export function pose(level: number, t: { kind: string; slot?: number; x: number; y: number; z?: number; age: number; deadline?: number }, motion = true): Vec3 {
  if (t.kind === 'dog') return { x: t.x + dogWalk(t.age, motion).dx, y: t.y, z: t.z ?? 0 };
  const slot = t.slot === undefined ? undefined : LEVELS[level].slots[t.slot];
  if (!slot) return { x: t.x, y: t.y, z: t.z ?? 0 };
  const k = exposure(t.age, t.deadline, motion);
  return { x: slot.hideX + (slot.x - slot.hideX) * k, y: slot.hideY + (slot.y - slot.hideY) * k, z: slot.z };
}

export function bodyBox(kind: BodyKind, at: Vec3): { min: Vec3; max: Vec3 } {
  const c = BODY[kind]; const [l, r, b, tp] = c.inset;
  return { min: { x: at.x - c.w / 2 + c.w * l, y: at.y + c.h * b, z: at.z - .04 }, max: { x: at.x - c.w / 2 + c.w * r, y: at.y + c.h * tp, z: at.z + .04 } };
}

/** Everything the fist can collide with at this moment: live actors + static covers. */
export function hittables(level: number, actors: readonly { id: number; kind: BodyKind | 'enemy' | 'dog'; slot?: number; x: number; y: number; z?: number; age: number; deadline?: number }[], motion = true, scenery: Hittable[] = []): Hittable[] {
  const out: Hittable[] = LEVELS[level].covers.map(c => ({ id: c.id, kind: 'cover', min: c.min, max: c.max }));
  for (const t of actors) {
    const b = bodyBox(t.kind, pose(level, t, motion));
    // The walking dog frame is a low side view: its hitbox drops to the drawn back/ears.
    if (t.kind === 'dog' && dogWalk(t.age, motion).walking) b.max.y = b.min.y + BODY.dog.h * (DOG_WALK_TOP - BODY.dog.inset[2]);
    out.push({ id: t.id, kind: t.kind === 'enemy' ? 'enemy' : t.kind === 'dog' ? 'dog' : 'prop', ...b });
  }
  return out.concat(scenery);
}

export interface CameraRig { fov: number; position: Vec3; look: Vec3; }
export function cameraFor(width: number, height: number): CameraRig {
  const fov = width < 650 ? 60 : 50; const aspect = width / Math.max(1, height);
  const halfH = Math.atan(Math.tan(fov * Math.PI / 360) * aspect);
  const z = Math.max(9.5, 3 + 3.1 / Math.tan(halfH));
  return { fov, position: { x: 0, y: 2.3 + (z - 9.5) * .12, z }, look: { x: 0, y: 1.35 + (z - 9.5) * .1, z: -3 } };
}
