// The secret bar ultimate's stream, as pure screen-space math (fractions of the viewport, y down).
// It rises from below the bottom edge, arcs like a thrown hose jet and chases the aim point with lag.
export interface Pt { x: number; y: number; }

/** Origin sits below the bottom edge (nothing anatomical is ever on screen); `lag` is the follow rate per second. */
export const STREAM = { origin: { x: .5, y: 1.12 } as Pt, lag: 6.5, arc: .2, segments: 26 } as const;

export class Stream {
  tip: Pt;
  constructor(start: Pt = { x: .5, y: .8 }) { this.tip = { ...start }; }
  /** Critically-damped-ish follow: the jet trails the cursor / finger, never snaps to it. */
  update(dt: number, aim: Pt) {
    const k = 1 - Math.exp(-dt * STREAM.lag);
    this.tip.x += (aim.x - this.tip.x) * k; this.tip.y += (aim.y - this.tip.y) * k;
    return this.tip;
  }
  /**
   * Two cubic control points: the jet leaves the origin steeply upward, climbs above the landing point while
   * leaning outward, then bends over and drops onto the aim — a hose arc even when aimed straight ahead.
   */
  controls(): [Pt, Pt] {
    const o = STREAM.origin, t = this.tip, dx = t.x - o.x, lean = .07 * Math.tanh(dx * 6) + .04, rise = STREAM.arc + Math.abs(dx) * .12;
    return [{ x: o.x + dx * .2, y: t.y - rise * .9 }, { x: t.x + lean, y: t.y - rise * 1.15 }];
  }
  /** Points along the arc from the origin (below the bottom edge) to the tip. */
  points(n: number = STREAM.segments): Pt[] {
    const o = STREAM.origin, [c1, c2] = this.controls(), t = this.tip, out: Pt[] = [];
    for (let i = 0; i <= n; i++) {
      const s = i / n, u = 1 - s, a = u * u * u, b = 3 * u * u * s, c = 3 * u * s * s, d = s * s * s;
      out.push({ x: a * o.x + b * c1.x + c * c2.x + d * t.x, y: a * o.y + b * c1.y + c * c2.y + d * t.y });
    }
    return out;
  }
}
