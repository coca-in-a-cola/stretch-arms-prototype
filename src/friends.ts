// Must-not-hit friends and the street's close-range thugs. Pure data + pose math (no Three.js), shared by the
// rules, hit-testing, rendering and unit tests — like the halo dog, what you see is exactly what the fist can hit.
import type { Vec3 } from './aim';

export type FriendKind = 'mole' | 'granny' | 'kitten' | 'pigeon' | 'drunk' | 'bartender';
export type ThugKind = 'rat' | 'gang' | 'kid';
export interface CharBody { w: number; h: number; inset: readonly [number, number, number, number]; }

/** World size of each drawn 512x640 frame and its visible box (cut boxes from tools/cut_sprites.py). */
export const FRIEND_BODY: Record<FriendKind, CharBody> = {
  mole: { w: 1.3, h: 1.625, inset: [.1, .9, .006, .66] },
  granny: { w: 1.3, h: 1.625, inset: [.165, .835, .006, .81] },
  kitten: { w: .9, h: 1.125, inset: [.113, .887, .006, .7] },
  pigeon: { w: .9, h: 1.125, inset: [.151, .849, .006, .69] },
  drunk: { w: 1.4, h: 1.75, inset: [.2, .8, .006, .85] },
  bartender: { w: 1.52, h: 1.9, inset: [.22, .78, .03, .78] },
};
export const THUG_BODY: Record<ThugKind, CharBody> = {
  rat: { w: 1.8, h: 2.25, inset: [.17, .83, .006, .63] },
  gang: { w: 1.8, h: 2.25, inset: [.134, .866, .006, .69] },
  kid: { w: 1.8, h: 2.25, inset: [.25, .75, .006, .73] },
};

/** Where a friend lives on a level: a fixed spot, a stroll between x0 and x1, or (the mole) a list of holes. */
export interface FriendPlan { who: FriendKind; x0: number; x1: number; y: number; z: number; period: number; spots?: readonly { x: number; z: number }[]; }

/** Hitting a friend: like the halo dog, a heart and points; they stay offended (frozen in place) for `mad` seconds. */
export const FRIEND_PENALTY = 120, FRIEND_MAD = 2.4;
/** What each one shouts when hit. */
export const FRIEND_LINES: Record<FriendKind, readonly string[]> = {
  mole: ['ОЙ! МОЯ КАСКА!', 'ХУЛИГАН!', 'Я ЖЕ ПОД ЗЕМЛЁЙ ЖИВУ!'],
  granny: ['ХАМ! ПОЛИЦИЯ!', 'ВОТ Я ТЕБЕ ЗОНТИКОМ!', 'В МОЁ ВРЕМЯ ТАК НЕ БИЛИ!'],
  kitten: ['ПФФФ! МЯУ!!', 'ШШШ! НАХАЛ!', 'МЯ-А-АУ?!'],
  pigeon: ['ПИСЬМА ПОМЯЛ!', 'ЖАЛОБА ПОЧТОЙ!', 'КУРЛЫ-ХАМ!'],
  drunk: ['ЧЕГО-О?! ИК!', 'КТО ТУТ ДЕРЁТСЯ?! ИК!', 'Я НЕ СПЛЮ! ИК!'],
  bartender: ['ПОСУДУ НЕ БЕЙ!', 'В МОЁМ БАРЕ НЕ ДРАТЬСЯ!', 'ЗА СТОЙКУ НЕ ЗАХОДИ!'],
};

/** Mole holes: hidden underground, rises out of its mound, peeks around, digs back down, pops up at the next hole. */
export const MOLE = { period: 6.5, rise: [2.2, 2.5], dig: [5.6, 5.9], depth: 1.15, hittable: .35 } as const;
export function molePhase(age: number, holes: number) {
  const cycle = Math.floor(age / MOLE.period), ph = age - cycle * MOLE.period;
  const rise = ph < MOLE.rise[0] || ph > MOLE.dig[1] ? 0 : ph < MOLE.rise[1] ? (ph - MOLE.rise[0]) / (MOLE.rise[1] - MOLE.rise[0]) : ph < MOLE.dig[0] ? 1 : 1 - (ph - MOLE.dig[0]) / (MOLE.dig[1] - MOLE.dig[0]);
  // Every other pop he brings his lantern; he looks left and right while up.
  return { hole: ((cycle % holes) + holes) % holes, rise, lantern: cycle % 2 === 1, look: Math.sin(ph * 2.4) > 0 ? 1 : -1 };
}

const smooth = (v: number) => v * v * (3 - 2 * v);
/** A stroll x0 → x1 → x0 over `period` seconds, pausing a fifth of the time at each end. */
export function stroll(age: number, x0: number, x1: number, period: number) {
  const ph = (((age / period) % 1) + 1) % 1, pause = .2;
  if (ph < pause / 2) return { x: x0, walking: false, facing: 1 as const };
  if (ph < .5 - pause / 2) return { x: x0 + (x1 - x0) * smooth((ph - pause / 2) / (.5 - pause)), walking: true, facing: (x1 >= x0 ? 1 : -1) as 1 | -1 };
  if (ph < .5 + pause / 2) return { x: x1, walking: false, facing: -1 as const };
  return { x: x1 + (x0 - x1) * smooth((ph - .5 - pause / 2) / (.5 - pause)), walking: true, facing: (x1 >= x0 ? -1 : 1) as 1 | -1 };
}

/** Feet position of a friend at a given age (age stops while it is offended, so it holds still). */
export function friendPose(p: FriendPlan, age: number, motion = true): Vec3 & { rise: number; walking: boolean; facing: 1 | -1; lantern: boolean } {
  if (p.who === 'mole' && p.spots?.length) {
    const m = molePhase(motion ? age : MOLE.rise[1] + .5, p.spots.length), s = p.spots[m.hole];
    return { x: s.x, y: p.y - MOLE.depth * (1 - m.rise), z: s.z, rise: m.rise, walking: false, facing: m.look as 1 | -1, lantern: m.lantern };
  }
  if (p.x0 === p.x1 || !motion) return { x: p.x0, y: p.y, z: p.z, rise: 1, walking: false, facing: 1, lantern: false };
  const s = stroll(age, p.x0, p.x1, p.period);
  return { x: s.x, y: p.y, z: p.z, rise: 1, walking: s.walking, facing: s.facing, lantern: false };
}

/**
 * Thugs pop close to the camera (foreground, big on screen) from a screen edge or a manhole, telegraph, then do a
 * quick nuisance unless punched first (1 HP). Times in seconds of the thug's age.
 */
export const THUG = { appear: .45, attack: 2.5, strike: 2.85, every: 6.5, first: 4, depth: 5.6 } as const;
export const THUG_NUISANCE: Record<ThugKind, { what: 'stamina' | 'splat' | 'heart'; line: string }> = {
  rat: { what: 'stamina', line: 'КРЫСА СПЁРЛА СИЛЫ! −35' },
  gang: { what: 'splat', line: 'ПЛЮХ! ГОЛУБЬ ЗАЛЯПАЛ ЭКРАН!' },
  kid: { what: 'heart', line: 'ЩЁЛК! ИЗ РОГАТКИ В ЛОБ! −♥' },
};
export const THUG_STEAL = 35;
export interface ThugSpot { x: number; z: number; side: -1 | 1; from: 'edge' | 'manhole'; }
/** Thug feet position: slides in from the edge (or rises out of the manhole), shakes during the telegraph. */
export function thugPose(s: ThugSpot, age: number, motion = true): Vec3 {
  const k = motion ? smooth(Math.min(1, age / THUG.appear)) : 1;
  if (s.from === 'manhole') return { x: s.x, y: -1.3 * (1 - k), z: s.z };
  return { x: s.x + s.side * 1.8 * (1 - k), y: 0, z: s.z };
}
