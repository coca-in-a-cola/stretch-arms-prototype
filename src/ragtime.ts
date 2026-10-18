// The bar piano's saloon riff: a few bars of stride ragtime as pure note data (played by preferences.ts with a
// detuned honky-tonk voice). Each repeat varies: another key, a slightly different tempo, the melody an octave up.

export interface Note { t: number; midi: number; dur: number; vel: number; }

/** Melody on a 16th-note grid: [step, midi, length in steps]. Three bars: C, A7, G7 — then the final C chord. */
const MELODY: readonly (readonly [number, number, number])[] = [
  [0, 76, 1], [1, 79, 2], [3, 76, 1], [4, 72, 2], [6, 76, 1], [7, 79, 1], [8, 81, 2], [10, 79, 1], [11, 76, 2], [13, 72, 1], [14, 74, 2],
  [16, 73, 1], [17, 76, 2], [19, 79, 1], [20, 81, 2], [22, 79, 1], [23, 76, 1], [24, 73, 2], [26, 76, 1], [27, 69, 3], [30, 71, 2],
  [32, 79, 1], [33, 77, 1], [34, 76, 1], [35, 74, 1], [36, 72, 1], [37, 71, 1], [38, 74, 2], [40, 79, 2], [42, 77, 2], [44, 76, 2], [46, 74, 2],
];
/** Stride left hand per bar: bass on 1 and 3, an off-beat chord on 2 and 4. */
const BARS: readonly { bass: readonly [number, number]; chord: readonly number[] }[] = [
  { bass: [48, 43], chord: [64, 67, 72] }, // C
  { bass: [45, 40], chord: [61, 64, 67] }, // A7
  { bass: [43, 38], chord: [59, 65, 67] }, // G7
];
const ENDING = { step: 48, notes: [36, 48, 60, 64, 67, 72] };

export const RIFF_VARIANTS = [{ key: 0, step: .095, lift: 0 }, { key: 5, step: .09, lift: 12 }, { key: -3, step: .1, lift: 0 }, { key: 2, step: .088, lift: 12 }] as const;

/** Notes for repeat number `n` (0, 1, 2…): start times in seconds from the downbeat. */
export function ragtimeScore(n = 0): Note[] {
  const v = RIFF_VARIANTS[((n % RIFF_VARIANTS.length) + RIFF_VARIANTS.length) % RIFF_VARIANTS.length], out: Note[] = [];
  // A touch of swing: off-beat 16ths land a little late.
  const at = (step: number) => step * v.step + (step % 2 ? v.step * .18 : 0);
  for (const [step, midi, len] of MELODY) out.push({ t: at(step), midi: midi + v.key + (step >= 32 ? 0 : v.lift), dur: len * v.step * 1.1, vel: step % 4 === 0 ? 1 : .8 });
  BARS.forEach((b, i) => {
    const s0 = i * 16;
    out.push({ t: at(s0), midi: b.bass[0] + v.key, dur: v.step * 3.5, vel: .95 }, { t: at(s0 + 8), midi: b.bass[1] + v.key, dur: v.step * 3.5, vel: .9 });
    for (const s of [s0 + 4, s0 + 12]) for (const m of b.chord) out.push({ t: at(s), midi: m + v.key - 12, dur: v.step * 2, vel: .6 });
  });
  for (const m of ENDING.notes) out.push({ t: at(ENDING.step), midi: m + v.key, dur: .7, vel: .9 });
  return out.sort((a, b) => a.t - b.t);
}
export const riffLength = (notes: readonly Note[]) => Math.max(...notes.map(n => n.t + n.dur));
export const midiHz = (m: number) => 440 * 2 ** ((m - 69) / 12);
