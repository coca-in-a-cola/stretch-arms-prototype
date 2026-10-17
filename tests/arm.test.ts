import { describe, expect, test } from 'bun:test';
import { armMetrics, gloveBounds, punchPose, restPose, sideFor } from '../src/arm';

const VIEWPORTS = [[1440, 960], [1280, 720], [390, 844], [844, 390]] as const;
const PHASES = { arrive: .36, release: .62 };
// Approximate .controls boxes from style.css (desktop: centred pair; phone portrait: full-width row).
const controlsFor = (W: number, H: number) => W < 650 ? { left: W * .04, right: W * .96, top: H - 25 - 74 } : { left: W / 2 - 182, right: W / 2 + 182, top: H - (H < 550 ? 15 : 32) - 74 };

describe('first-person arms stay readable at every aspect ratio', () => {
  for (const [W, H] of VIEWPORTS) {
    test(`${W}x${H}: both shoulders anchor at the bottom edge and both resting gloves are fully on screen`, () => {
      const avoid = controlsFor(W, H);
      for (const side of [-1, 1] as const) {
        const a = restPose(side, W, H, avoid);
        expect(a.shoulder.y).toBeGreaterThanOrEqual(H); // hose enters from below the bottom edge
        expect(a.shoulder.x - a.w0 / 2).toBeGreaterThanOrEqual(0); expect(a.shoulder.x + a.w0 / 2).toBeLessThanOrEqual(W);
        const b = gloveBounds(a);
        expect(b.minX).toBeGreaterThanOrEqual(0); expect(b.maxX).toBeLessThanOrEqual(W);
        expect(b.minY).toBeGreaterThanOrEqual(0); expect(b.maxY).toBeLessThanOrEqual(H);
        // Not hidden behind the punch/grab buttons when they overlap horizontally.
        if (avoid.right > b.minX && avoid.left < b.maxX) expect(b.maxY).toBeLessThanOrEqual(avoid.top);
        // Readable size: glove at least 34 px radius.
        expect(a.r).toBeGreaterThanOrEqual(34);
        // Breathing bob keeps it on screen too.
        const bobbed = gloveBounds(restPose(side, W, H, avoid, H * .006));
        expect(bobbed.maxY).toBeLessThanOrEqual(H);
      }
      const L = restPose(-1, W, H, avoid), R = restPose(1, W, H, avoid);
      expect(L.glove.x).toBeLessThan(W / 2); expect(R.glove.x).toBeGreaterThan(W / 2);
      expect(Math.abs(L.glove.x - (W - R.glove.x))).toBeLessThan(1e-9); // symmetric guard
    });

    test(`${W}x${H}: the punching fist lands exactly on the click point and returns to rest`, () => {
      for (const spot of [{ x: W * .5, y: H * .4 }, { x: W * .2, y: H * .3 }, { x: W * .85, y: H * .55 }, { x: 12, y: 12 }]) {
        const side = sideFor(spot, W);
        for (const k of [PHASES.arrive, .45, .55, PHASES.release - 1e-6]) {
          const a = punchPose(side, W, H, spot, k, PHASES, { depth: .6 });
          expect(a.glove.x).toBeCloseTo(spot.x, 6); expect(a.glove.y).toBeCloseTo(spot.y, 6);
        }
        const rest = restPose(side, W, H);
        const end = punchPose(side, W, H, spot, 1, PHASES);
        expect(end.glove.x).toBeCloseTo(rest.glove.x, 6); expect(end.glove.y).toBeCloseTo(rest.glove.y, 6);
        // The hose always starts from the same shoulder anchor at the bottom.
        expect(punchPose(side, W, H, spot, .2, PHASES).shoulder).toEqual(rest.shoulder);
      }
    });
  }

  test('the arm on the clicked side punches; grab opens the glove; throw whips the hose the other way', () => {
    const W = 1440, H = 960;
    expect(sideFor({ x: 300, y: 400 }, W)).toBe(-1); expect(sideFor({ x: 1100, y: 400 }, W)).toBe(1);
    const spot = { x: 700, y: 400 };
    expect(punchPose(1, W, H, spot, .2, PHASES).open).toBe(false);
    expect(punchPose(1, W, H, spot, .2, PHASES, { grab: true }).open).toBe(true);
    expect(punchPose(1, W, H, spot, .5, PHASES, { grab: true }).open).toBe(true);
    // Whip: early and late in the flight the hose bends to opposite sides.
    const bend = (k: number) => { const a = punchPose(1, W, H, spot, k, PHASES, { throwing: true }); const mx = (a.shoulder.x + a.glove.x) / 2, my = (a.shoulder.y + a.glove.y) / 2; return Math.sign((a.glove.x - a.shoulder.x) * (a.ctrl.y - my) - (a.glove.y - a.shoulder.y) * (a.ctrl.x - mx)); };
    expect(bend(.1)).toBe(-bend(.34));
    // Depth: far targets get a smaller glove at arrival.
    expect(punchPose(1, W, H, spot, .4, PHASES, { depth: .5 }).r).toBeLessThan(armMetrics(W, H).r);
  });
});
