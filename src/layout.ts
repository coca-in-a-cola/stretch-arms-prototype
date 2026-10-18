// Depth-layered level layouts. Pure data + pose math shared by rendering, hit-testing and unit tests,
// so what you see is exactly what the fist can hit.
import type { Hittable, Vec3 } from './aim';
import { PROPS, type PropKind } from './props';
import { FRIEND_BODY, THUG_BODY, MOLE, friendPose, thugPose, type FriendKind, type FriendPlan, type ThugKind } from './friends';
export type { PropKind } from './props';

export type Layer = 'foreground' | 'midground' | 'background';
export type CoverLook = 'barrel' | 'crate' | 'plank' | 'rail' | 'post' | 'wall' | 'interior' | 'dumpster' | 'pallet' | 'van' | 'barrier' | 'piano' | 'table' | 'counter' | 'shelves';
/** Who peeks from a slot: the street cat, or one of the bar patrons. */
export type Skin = 'cat' | 'walrus' | 'bulldog' | 'weasel';
export interface Cover { id: string; look: CoverLook; layer: Layer; min: Vec3; max: Vec3; color: string; }
/** Enemy spawn point behind a cover. `hide` is where the sprite waits fully occluded; it slides/rises to `x,y`. */
export interface Slot { x: number; y: number; z: number; layer: Layer; hideX: number; hideY: number; skin?: Skin; }
export interface PlacedProp { kind: PropKind; x: number; y: number; z: number; }
/** Environment jokes: hit them with a fist or a thrown prop. A gag without a box reuses the cover with its id. */
export type GagKind = 'piano' | 'cuckoo' | 'lamp' | 'bell' | 'laundry';
export interface Gag { id: string; kind: GagKind; min?: Vec3; max?: Vec3; }
const gagBox = (id: string, kind: GagKind, cx: number, cy: number, cz: number, w: number, h: number, d: number): Gag =>
  ({ id, kind, min: { x: cx - w / 2, y: cy - h / 2, z: cz - d / 2 }, max: { x: cx + w / 2, y: cy + h / 2, z: cz + d / 2 } });
export interface LevelLayout {
  name: string; look: 'bar' | 'street';
  /** Half-width of the camera pan range (0 = a single screen). */
  pan: number;
  covers: Cover[]; slots: Slot[]; order: number[]; dogs: Vec3[]; deadline: number; goal: number;
  gags: Gag[];
  /** Cap on enemies out at once (wide levels). */
  maxAlive?: number;
  /** Throwables scattered over the map from the start (floor, counter, cover tops). They never respawn. */
  props: PlacedProp[];
  /** Secret hat spot (on a stool) and the landing zone it must be thrown onto: the top band of a cover. */
  hat?: Vec3; landing?: { cover: string; band: number };
  /** Must-not-hit friends living on the level (the mole, strollers, sleepers). */
  friends: FriendPlan[];
  /** Close-range thugs pop in the foreground (the wide street only). */
  thugs?: boolean;
}

export interface Body { w: number; h: number; inset: readonly [number, number, number, number]; }
/** World size of every drawn frame and its visible box (the hitbox): characters here, props from the prop table. */
export const BODY: Record<'enemy' | 'dog' | PropKind, Body> = {
  enemy: { w: 1.52, h: 1.9, inset: [.2, .82, .03, .95] },
  dog: { w: 1.1, h: 1.375, inset: [.14, .9, .03, .95] },
  ...PROPS,
};
/** Bar patrons fill their frames differently (cut boxes from tools/cut_sprites.py). */
export const SKIN_INSET: Record<Skin, readonly [number, number, number, number]> = {
  cat: BODY.enemy.inset, walrus: [.08, .92, .03, .93], bulldog: [.14, .86, .03, .75], weasel: [.22, .78, .03, .78],
};
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

const shiftCover = (c: Cover, dx: number): Cover => ({ ...c, min: { ...c.min, x: c.min.x + dx }, max: { ...c.max, x: c.max.x + dx } });
const shiftSlot = (s: Slot, dx: number): Slot => ({ ...s, x: s.x + dx, hideX: s.hideX + dx });

/** The wide street is two halves on one panorama: the quiet yard on the left, the dusk alley on the right. */
export const YARD_X = -8, ALLEY_X = 8;
const yard = {
  covers: [
    box('barrel-a', 'barrel', 'foreground', -2.75, 0, 3.0, .92, 1.15, .92, '#c83c32'),
    box('barrel-b', 'barrel', 'foreground', -1.92, 0, 3.35, .8, .98, .8, '#2f6f73'),
    box('crate-a', 'crate', 'foreground', 2.9, 0, 3.05, 1.15, 1.15, 1.1, '#c9944f'),
    box('crate-b', 'crate', 'foreground', 3.05, 1.15, 3.05, .72, .72, .72, '#d9a862'),
    // Mid-ground fence with gaps
    ...fence('fence', -1.6, -4.6, 4.6, 1.3, '#a8754c'),
    // Background: courtyard block with windows (stops where the alley's shopfront begins)
    ...facade('block', -9, -13, 8, 9, [{ sill: 1.7, h: 1.65, w: 1.7, xs: [-4.2, 0, 4.2] }, { sill: 4.6, h: 1.5, w: 1.5, xs: [-6.5, -2.1, 2.1, 6.5] }], '#c9c3ae'),
  ],
  slots: [
    { x: -2.45, y: 0, z: 2.25, layer: 'foreground', hideX: -2.45, hideY: -1.2 },
    { x: -2.0, y: 0, z: -2.35, layer: 'midground', hideX: -2.0, hideY: -1.05 },
    { x: 4.2, y: .72, z: -9.5, layer: 'background', hideX: 4.2, hideY: -.35 },
    { x: 1.95, y: 0, z: 2.35, layer: 'foreground', hideX: 2.9, hideY: -.85 },
    { x: .95, y: 0, z: -2.35, layer: 'midground', hideX: .95, hideY: -1.05 },
    { x: -4.2, y: .72, z: -9.5, layer: 'background', hideX: -4.2, hideY: -.35 },
  ] as Slot[],
};
const alley = {
  covers: [
    box('dumpster', 'dumpster', 'foreground', -2.6, 0, 3.0, 2.0, 1.22, 1.1, '#3f7b55'),
    box('pallets', 'pallet', 'foreground', 2.95, 0, 3.15, 1.3, 1.3, 1.1, '#b98a52'),
    box('van', 'van', 'midground', -2.1, .25, -2.6, 3.4, 1.85, 1.7, '#e9e2cd'),
    box('barrier', 'barrier', 'midground', 2.55, 0, -1.9, 2.5, 1.02, .55, '#b8b7ac'),
    ...facade('shop', -11, -7, 7, 9, [{ sill: 1.3, h: 1.6, w: 2.0, xs: [-2.8, 2.8] }, { sill: 4.3, h: 1.6, w: 1.6, xs: [0] }], '#d58f86'),
  ],
  slots: [
    { x: 2.45, y: 0, z: 2.45, layer: 'foreground', hideX: 3.15, hideY: -1.1 },
    { x: -2.6, y: 0, z: 2.15, layer: 'foreground', hideX: -2.6, hideY: -1.15 },
    { x: 0, y: 3.45, z: -11.5, layer: 'background', hideX: 0, hideY: 2.25 },
    { x: .25, y: 0, z: -3.3, layer: 'midground', hideX: -1.05, hideY: 0 },
    { x: 2.8, y: .45, z: -11.5, layer: 'background', hideX: 2.8, hideY: -.75 },
    { x: 2.9, y: 0, z: -2.55, layer: 'midground', hideX: 2.9, hideY: -1.0 },
    { x: -2.8, y: .45, z: -11.5, layer: 'background', hideX: -2.8, hideY: -.75 },
  ] as Slot[],
};

/** Level 1, the bar: piano and a draped table in front, the long counter mid-ground, a swinging door at the back. */
const bar: LevelLayout = {
  name: 'БАР «ДЛИННЫЕ РУКИ»', look: 'bar', pan: 0, goal: 12, deadline: 5.2,
  covers: [
    box('piano', 'piano', 'foreground', -2.75, 0, 3.0, 1.9, 1.3, .75, '#3b2c24'),
    box('table', 'table', 'foreground', 2.95, 0, 3.1, 1.3, 1.05, 1.1, '#ece6d2'),
    box('counter', 'counter', 'midground', .3, 0, -2.4, 6.4, 1.15, .8, '#6b4a32'),
    box('shelves', 'shelves', 'background', -.4, 0, -6.4, 5.2, 2.9, .5, '#2e241c'),
    box('doorwall', 'wall', 'background', 6.7, 0, -7.4, 2.6, 3.4, .3, '#4a3f36'),
  ],
  slots: [
    { x: -2.55, y: 0, z: 2.2, layer: 'foreground', hideX: -2.55, hideY: -1.25, skin: 'walrus' },
    { x: -1.1, y: .3, z: -3.15, layer: 'midground', hideX: -1.1, hideY: -.9, skin: 'weasel' },
    { x: 2.55, y: 0, z: 2.3, layer: 'foreground', hideX: 3.0, hideY: -1.15, skin: 'walrus' },
    { x: 4.6, y: 0, z: -7.85, layer: 'background', hideX: 6.7, hideY: 0, skin: 'bulldog' },
    { x: 1.9, y: .3, z: -3.15, layer: 'midground', hideX: 1.9, hideY: -.9, skin: 'weasel' },
  ],
  order: [0, 1, 2, 3, 4],
  dogs: [{ x: .2, y: 0, z: -.7 }],
  props: [
    { kind: 'mug', x: -3.25, y: 1.3, z: 3.0 }, { kind: 'whiskey', x: 2.6, y: 1.05, z: 3.05 }, { kind: 'eggs', x: 3.3, y: 1.05, z: 3.25 }, // piano lid, table
    { kind: 'mug', x: -2.3, y: 1.15, z: -2.12 }, { kind: 'shaker', x: -1.5, y: 1.15, z: -2.12 }, { kind: 'whiskey', x: 3.05, y: 1.15, z: -2.12 }, // counter
    { kind: 'stool', x: -.95, y: 0, z: 3.9 }, { kind: 'spittoon', x: 1.95, y: 0, z: 4.0 }, { kind: 'plunger', x: -1.6, y: 0, z: 1.1 },
    { kind: 'mug', x: .5, y: 0, z: 1.05 }, { kind: 'whiskey', x: -4.4, y: 0, z: 1.5 }, { kind: 'stool', x: 3.55, y: 0, z: .35 }, { kind: 'eggs', x: -3.3, y: 0, z: -.3 },
  ],
  // The piano plays ragtime, the cuckoo clock on the back-room wall insults you, the hanging lamps swing and flicker.
  gags: [{ id: 'piano', kind: 'piano' }, gagBox('gag-cuckoo', 'cuckoo', 6.1, 2.6, -7.12, .66, .82, .12), gagBox('gag-lamp-0', 'lamp', -3, 5.7, -3.2, 1.1, .6, 1.1), gagBox('gag-lamp-1', 'lamp', 2.5, 5.7, -3.2, 1.1, .6, 1.1)],
  hat: { x: .95, y: .78, z: 3.45 },
  landing: { cover: 'counter', band: .4 },
  // The mole tunnels under the floorboards and pops up right in front of patrons; a kitten strolls along the counter
  // (in front of the bartender!); a drunk sleeps it off by the wall and must not be woken.
  friends: [
    { who: 'mole', x0: 0, x1: 0, y: 0, z: 0, period: 0, spots: [{ x: 2.3, z: -1.3 }, { x: .1, z: 1.7 }, { x: -1.25, z: -1.3 }, { x: -.75, z: 2.6 }, { x: 3.7, z: -.9 }] },
    { who: 'kitten', x0: -2.5, x1: 2.75, y: 1.15, z: -2.25, period: 17 },
    { who: 'drunk', x0: 4.75, x1: 4.75, y: 0, z: 1.75, period: 0 },
  ],
};

/** Level 2, the street: a panorama about three screens wide — the yard (left) runs into the dusk alley (right). */
const street: LevelLayout = {
  name: 'УЛИЦА: ДВОР И ПЕРЕУЛОК', look: 'street', pan: 8, goal: 22, deadline: 5.4, maxAlive: 5,
  covers: [...yard.covers.map(c => shiftCover(c, YARD_X)), ...alley.covers.map(c => shiftCover(c, ALLEY_X))],
  slots: [...yard.slots.map(s => shiftSlot(s, YARD_X)), ...alley.slots.map(s => shiftSlot(s, ALLEY_X))],
  // Yard slots are 0..5, alley slots 6..12: alternate so both ends of the street stay busy.
  order: [0, 6, 4, 9, 2, 7, 3, 11, 1, 8, 5, 12, 10],
  dogs: [{ x: .45 + YARD_X, y: 0, z: -.85 }, { x: 2.3 + ALLEY_X, y: 0, z: -1.25 }],
  // The alley's street lamps ring like bells; the yard's washing line drops underwear on a bully below.
  gags: [gagBox('gag-bell-0', 'bell', ALLEY_X - 3.5, 5.75, -5, 1, .7, .8), gagBox('gag-bell-1', 'bell', ALLEY_X + 3.5, 5.75, -5, 1, .7, .8), gagBox('gag-laundry', 'laundry', YARD_X, 3.85, -4.5, 12, 1.2, .2)],
  props: [
    // Yard (left half)
    { kind: 'bottle', x: -8.6, y: 0, z: 3.8 }, { kind: 'barrel', x: -12.7, y: 0, z: 3.6 }, { kind: 'melon', x: -7.2, y: 0, z: 1.2 },
    { kind: 'fish', x: -4.95, y: 1.87, z: 3.05 }, { kind: 'flowerpot', x: -10.75, y: 1.15, z: 3.0 }, { kind: 'pie', x: -9.92, y: .98, z: 3.35 },
    { kind: 'chicken', x: -6.1, y: 0, z: .4 }, { kind: 'tire', x: -13.6, y: 0, z: 1.0 }, { kind: 'bowling', x: -3.1, y: 0, z: 3.9 }, { kind: 'bottle', x: -11.6, y: 0, z: .3 },
    // Where the yard meets the alley
    { kind: 'hydrant', x: .6, y: 0, z: 2.7 }, { kind: 'bottle', x: -1.1, y: 0, z: 1.0 }, { kind: 'anvil', x: 2.3, y: 0, z: 3.9 },
    // Alley (right half)
    { kind: 'barrel', x: 3.4, y: 0, z: 3.6 }, { kind: 'bottle', x: 4.9, y: 1.22, z: 3.0 }, { kind: 'melon', x: 7.7, y: 0, z: 1.0 },
    { kind: 'fish', x: 10.8, y: 1.3, z: 3.15 }, { kind: 'pie', x: 9.0, y: 0, z: 3.9 }, { kind: 'tire', x: 12.7, y: 0, z: 3.5 },
    { kind: 'flowerpot', x: 10.0, y: 1.02, z: -1.9 }, { kind: 'chicken', x: 8.1, y: 0, z: -.2 }, { kind: 'bowling', x: 13.7, y: 0, z: 1.4 }, { kind: 'bottle', x: 14.3, y: 0, z: 3.7 },
  ],
  // The mole pops up in front of yard and alley bullies; granny crosses the whole street; the postman pigeon walks the alley.
  friends: [
    { who: 'mole', x0: 0, x1: 0, y: 0, z: 0, period: 0, spots: [{ x: YARD_X - 1.6, z: -.95 }, { x: ALLEY_X + .4, z: -1.0 }, { x: YARD_X + 2.0, z: 4.4 }, { x: ALLEY_X - 2.4, z: 4.3 }, { x: YARD_X + .95, z: -.95 }, { x: ALLEY_X + 2.9, z: -1.2 }] },
    { who: 'granny', x0: -14, x1: 14, y: 0, z: .55, period: 56 },
    { who: 'pigeon', x0: 3.6, x1: 13.2, y: 0, z: 1.75, period: 19 },
  ],
  thugs: true,
};

export const LEVELS: Record<number, LevelLayout> = { 1: bar, 2: street };
export const LAST_LEVEL = 2;
/** Camera pan offset clamped to the level's panorama. */
export const clampPan = (level: number, x: number) => { const p = LEVELS[level]?.pan ?? 0; return Math.max(-p, Math.min(p, x)); };

/** True when a throw that struck `coverId` at `point` landed in the level's hat zone (top band of the counter). */
export function onLanding(level: number, coverId: string | number | undefined, point: Vec3 | undefined): boolean {
  const L = LEVELS[level], z = L?.landing; if (!z || coverId !== z.cover || !point) return false;
  const c = L.covers.find(v => v.id === z.cover); if (!c) return false;
  return point.y >= c.max.y - z.band && point.x >= c.min.x && point.x <= c.max.x;
}

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

/** Now and then the halo dog ascends to heaven on a harp glissando, hangs there blissfully, and floats back down. */
export const ASCENT = { period: 23, start: 15, up: 1.4, hold: 2.2, down: 1.4, height: 1.6 } as const;
export function dogAscent(age: number, motion = true): number {
  if (!motion) return 0;
  const ph = (age % ASCENT.period) - ASCENT.start; if (ph < 0) return 0;
  const sm = (v: number) => v * v * (3 - 2 * v);
  if (ph < ASCENT.up) return ASCENT.height * sm(ph / ASCENT.up);
  if (ph < ASCENT.up + ASCENT.hold) return ASCENT.height;
  const d = ph - ASCENT.up - ASCENT.hold; return d < ASCENT.down ? ASCENT.height * (1 - sm(d / ASCENT.down)) : 0;
}

/** Sprite feet position for an actor at a given age. Enemies rise/slide out of hiding; this is the hit pose too. */
export interface Placed { kind: string; slot?: number; x: number; y: number; z?: number; age: number; deadline?: number; plan?: number; side?: -1 | 1; from?: 'edge' | 'manhole'; antic?: unknown; blind?: number; }
export function pose(level: number, t: Placed, motion = true): Vec3 {
  if (t.kind === 'dog') return { x: t.x + dogWalk(t.age, motion).dx, y: t.y + dogAscent(t.age, motion), z: t.z ?? 0 };
  if (t.kind === 'friend') { const plan = LEVELS[level].friends[t.plan ?? 0]; if (plan) return friendPose(plan, t.age, motion); }
  if (t.kind === 'thug') return thugPose({ x: t.x, z: t.z ?? 0, side: t.side ?? 1, from: t.from ?? 'edge' }, t.age, motion);
  const slot = t.slot === undefined ? undefined : LEVELS[level].slots[t.slot];
  if (!slot) return { x: t.x, y: t.y, z: t.z ?? 0 };
  const k = t.antic || t.blind ? (motion ? ease(Math.min(1, t.age / RISE_TIME)) : 1) : exposure(t.age, t.deadline, motion); // busy clowning: no ducking
  return { x: slot.hideX + (slot.x - slot.hideX) * k, y: slot.hideY + (slot.y - slot.hideY) * k, z: slot.z };
}

/** The drawn frame size of any actor: props / enemies / the dog from BODY, friends and thugs by who they are. */
export function bodyOf(kind: string, who?: string): Body {
  if (kind === 'friend' && who && who in FRIEND_BODY) return FRIEND_BODY[who as FriendKind];
  if (kind === 'thug' && who && who in THUG_BODY) return THUG_BODY[who as ThugKind];
  return BODY[kind as BodyKind] ?? BODY.enemy;
}
export function bodyBox(kind: BodyKind | 'friend' | 'thug', at: Vec3, skin?: Skin, who?: string): { min: Vec3; max: Vec3 } {
  const c = bodyOf(kind, who); const [l, r, b, tp] = skin ? SKIN_INSET[skin] : c.inset;
  return { min: { x: at.x - c.w / 2 + c.w * l, y: at.y + c.h * b, z: at.z - .04 }, max: { x: at.x - c.w / 2 + c.w * r, y: at.y + c.h * tp, z: at.z + .04 } };
}

/** Everything the fist can collide with at this moment: live actors + static covers. */
export function hittables(level: number, actors: readonly (Placed & { id: number; kind: BodyKind | 'friend' | 'thug'; skin?: Skin; who?: string })[], motion = true, scenery: Hittable[] = []): Hittable[] {
  const out: Hittable[] = LEVELS[level].covers.map(c => ({ id: c.id, kind: 'cover', min: c.min, max: c.max }));
  for (const g of LEVELS[level].gags) if (g.min && g.max) out.push({ id: g.id, kind: 'cover', min: g.min, max: g.max });
  for (const t of actors) {
    // A mole still (mostly) underground is out of reach: the fist sails over the mound.
    if (t.kind === 'friend' && t.who === 'mole') { const plan = LEVELS[level].friends[t.plan ?? 0]; if (plan && friendPose(plan, t.age, motion).rise < MOLE.hittable) continue; }
    const b = bodyBox(t.kind, pose(level, t, motion), t.kind === 'enemy' ? t.skin : undefined, t.who);
    // The walking dog frame is a low side view: its hitbox drops to the drawn back/ears.
    if (t.kind === 'dog' && dogWalk(t.age, motion).walking) b.max.y = b.min.y + BODY.dog.h * (DOG_WALK_TOP - BODY.dog.inset[2]);
    out.push({ id: t.id, kind: t.kind === 'enemy' || t.kind === 'dog' || t.kind === 'friend' || t.kind === 'thug' ? t.kind : 'prop', ...b });
  }
  return out.concat(scenery);
}

export interface CameraRig { fov: number; position: Vec3; look: Vec3; }
export function cameraFor(width: number, height: number, pan = 0): CameraRig {
  const fov = width < 650 ? 60 : 50; const aspect = width / Math.max(1, height);
  const halfH = Math.atan(Math.tan(fov * Math.PI / 360) * aspect);
  const z = Math.max(9.5, 3 + 3.1 / Math.tan(halfH));
  return { fov, position: { x: pan, y: 2.3 + (z - 9.5) * .12, z }, look: { x: pan, y: 1.35 + (z - 9.5) * .1, z: -3 } };
}
