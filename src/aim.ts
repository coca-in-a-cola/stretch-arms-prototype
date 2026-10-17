// Free-aim shot resolution. Pure math (no Three.js) so the exact rules the game uses are unit-testable.
export interface Vec3 { x: number; y: number; z: number; }
export type HitKind = 'enemy' | 'dog' | 'prop' | 'cover' | 'scenery';
export interface Hittable { id: number | string; kind: HitKind; min: Vec3; max: Vec3; }
export interface Shot { kind: HitKind | 'whiff'; id?: number | string; point: Vec3; distance: number; }

export const WHIFF_REACH = 26;

/** Slab test. Returns entry distance along the (normalised) ray, or null when the box is missed. */
export function rayBox(o: Vec3, d: Vec3, min: Vec3, max: Vec3): number | null {
  let near = 0, far = Infinity;
  for (const a of ['x', 'y', 'z'] as const) {
    if (Math.abs(d[a]) < 1e-9) { if (o[a] < min[a] || o[a] > max[a]) return null; continue; }
    let t1 = (min[a] - o[a]) / d[a], t2 = (max[a] - o[a]) / d[a];
    if (t1 > t2) [t1, t2] = [t2, t1];
    near = Math.max(near, t1); far = Math.min(far, t2);
    if (near > far) return null;
  }
  return near;
}

export const normalize = (v: Vec3): Vec3 => { const l = Math.hypot(v.x, v.y, v.z) || 1; return { x: v.x / l, y: v.y / l, z: v.z / l }; };
const at = (o: Vec3, d: Vec3, t: number): Vec3 => ({ x: o.x + d.x * t, y: o.y + d.y * t, z: o.z + d.z * t });

/**
 * The front-most hittable along the ray wins: cover in front of an enemy blocks the punch, a nearer actor
 * occludes a farther one. Nothing hit → whiff; the fist still travels to the ground point or full reach.
 */
export function resolveShot(origin: Vec3, direction: Vec3, hittables: readonly Hittable[]): Shot {
  const d = normalize(direction);
  let best: Shot | null = null;
  for (const h of hittables) {
    const t = rayBox(origin, d, h.min, h.max);
    if (t !== null && t <= WHIFF_REACH * 2 && (!best || t < best.distance)) best = { kind: h.kind, id: h.id, point: at(origin, d, t), distance: t };
  }
  if (best) return best;
  const ground = d.y < -1e-6 ? -origin.y / d.y : Infinity;
  const reach = Math.min(ground, WHIFF_REACH);
  return { kind: 'whiff', point: at(origin, d, reach), distance: reach };
}
