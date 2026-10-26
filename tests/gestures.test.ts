import { describe, expect, test } from 'bun:test';
import {
  sweepSegment,
  HitCooldownTracker,
  DoubleTapTracker,
  selectLocalAimEnemy,
  type TouchPoint,
  type AimCandidate,
} from '../src/gestures';

describe('gestures: sweepSegment', () => {
  test('returns single point when distance is zero or near-zero', () => {
    const pts = sweepSegment({ x: 100, y: 100 }, { x: 100, y: 100 }, 18);
    expect(pts.length).toBe(1);
    expect(pts[0]).toEqual({ x: 100, y: 100 });
  });

  test('interpolates intermediate points to prevent tunneling across fast movement', () => {
    const p0 = { x: 0, y: 0 };
    const p1 = { x: 0, y: 100 };
    const pts = sweepSegment(p0, p1, 20);
    // dist = 100, step = 20 -> 5 steps
    expect(pts.length).toBe(5);
    expect(pts[pts.length - 1]).toEqual({ x: 0, y: 100 });
    // Intermediate point at 40 should exist
    expect(pts.some(p => Math.abs(p.y - 40) < 1e-4)).toBe(true);
  });

  test('handles diagonal movement segments', () => {
    const p0 = { x: 10, y: 20 };
    const p1 = { x: 40, y: 60 }; // dx = 30, dy = 40, dist = 50
    const pts = sweepSegment(p0, p1, 15); // ceil(50 / 15) = 4 steps
    expect(pts.length).toBe(4);
    expect(pts[pts.length - 1].x).toBeCloseTo(40, 4);
    expect(pts[pts.length - 1].y).toBeCloseTo(60, 4);
  });
});

describe('gestures: HitCooldownTracker', () => {
  test('allows initial hit on an actor', () => {
    const tracker = new HitCooldownTracker(0.35);
    expect(tracker.canHit(1, 1.0)).toBe(true);
  });

  test('rejects subsequent hits on the same actor within cooldown window', () => {
    const tracker = new HitCooldownTracker(0.35);
    tracker.recordHit(1, 1.0);
    expect(tracker.canHit(1, 1.05)).toBe(false);
    expect(tracker.canHit(1, 1.20)).toBe(false);
    expect(tracker.canHit(1, 1.34)).toBe(false);
  });

  test('permits re-striking after cooldown elapses', () => {
    const tracker = new HitCooldownTracker(0.35);
    tracker.recordHit(1, 1.0);
    expect(tracker.canHit(1, 1.36)).toBe(true);
    tracker.recordHit(1, 1.36);
    expect(tracker.canHit(1, 1.50)).toBe(false);
  });

  test('tracks distinct actors independently during continuous sweep', () => {
    const tracker = new HitCooldownTracker(0.35);
    tracker.recordHit(1, 1.0);
    expect(tracker.canHit(1, 1.1)).toBe(false);
    // Another enemy hit along the same sweep should be permitted immediately
    expect(tracker.canHit(2, 1.1)).toBe(true);
    tracker.recordHit(2, 1.1);
    expect(tracker.canHit(2, 1.2)).toBe(false);
  });

  test('clearing resets all recorded cooldowns', () => {
    const tracker = new HitCooldownTracker(0.35);
    tracker.recordHit(1, 1.0);
    tracker.clear();
    expect(tracker.canHit(1, 1.05)).toBe(true);
  });
});

describe('gestures: DoubleTapTracker', () => {
  const p = (time: number, x = 200, y = 200): TouchPoint => ({ time, x, y });
  function tap(tracker: DoubleTapTracker, time: number, x = 200, eligible = true) {
    tracker.begin(p(time, x), eligible);
    return tracker.end(p(time + .04, x), eligible);
  }

  test('accepts two deliberate nearby taps only once', () => {
    const tracker = new DoubleTapTracker();
    expect(tap(tracker, 1)).toBe(false);
    expect(tap(tracker, 1.16, 210)).toBe(true);
    expect(tracker.end(p(1.21), true)).toBe(false);
    expect(tap(tracker, 1.30)).toBe(false);
  });

  test.each([.04, .5])('rejects duplicate or late tap gap %s', gap => {
    const tracker = new DoubleTapTracker();
    tap(tracker, 1);
    expect(tap(tracker, 1 + gap)).toBe(false);
  });

  test('rejects distant second tap', () => {
    const tracker = new DoubleTapTracker();
    tap(tracker, 1);
    expect(tap(tracker, 1.16, 240)).toBe(false);
  });

  test.each([[240, 200], [200, 120], [200, 280]])('rejects drag through %s,%s even after returning', (x, y) => {
    const tracker = new DoubleTapTracker();
    tap(tracker, 1);
    tracker.begin(p(1.16), true);
    tracker.move(p(1.18, x, y));
    expect(tracker.end(p(1.20), true)).toBe(false);
    expect(tap(tracker, 1.32)).toBe(false);
  });

  test('rejects long press and clears earlier tap', () => {
    const tracker = new DoubleTapTracker();
    tap(tracker, 1);
    tracker.begin(p(1.16), true);
    expect(tracker.end(p(1.4), true)).toBe(false);
    expect(tap(tracker, 1.5)).toBe(false);
  });

  test('cancel resets pending and active taps', () => {
    const tracker = new DoubleTapTracker();
    tap(tracker, 1);
    tracker.begin(p(1.16), true);
    tracker.reset();
    expect(tracker.end(p(1.2), true)).toBe(false);
    expect(tap(tracker, 1.3)).toBe(false);
  });

  test('pickup tap cannot seed throw sequence', () => {
    const tracker = new DoubleTapTracker();
    tracker.begin(p(1), false);
    expect(tracker.end(p(1.04), true)).toBe(false);
    expect(tap(tracker, 1.16)).toBe(false);
    expect(tap(tracker, 1.3)).toBe(true);
  });

  test('empty-hand double tap cannot throw', () => {
    const tracker = new DoubleTapTracker();
    expect(tap(tracker, 1, 200, false)).toBe(false);
    expect(tap(tracker, 1.16, 200, false)).toBe(false);
  });
});

describe('gestures: selectLocalAimEnemy (bounded aim assist)', () => {
  interface Enemy { id: number; name: string }

  const gestureEnd = { x: 300, y: 220 };
  const gestureDir = { x: 0, y: -1 }; // Straight upward

  test('selects suitable nearby enemy aligned with aim direction', () => {
    const candidates: AimCandidate<Enemy>[] = [
      { entity: { id: 1, name: 'Close Ahead' }, screenPos: { x: 310, y: 140 } },
      { entity: { id: 2, name: 'Far Away' }, screenPos: { x: 700, y: 100 } },
    ];
    const selected = selectLocalAimEnemy(gestureEnd, gestureDir, candidates, 160);
    expect(selected).not.toBeNull();
    expect(selected!.id).toBe(1);
  });

  test('returns null when no enemies are within bound (not global lock)', () => {
    const candidates: AimCandidate<Enemy>[] = [
      { entity: { id: 2, name: 'Far Left' }, screenPos: { x: 50, y: 100 } },
      { entity: { id: 3, name: 'Far Right' }, screenPos: { x: 750, y: 120 } },
    ];
    // Distance from (300, 220) to (50, 100) is 277px > 160px
    const selected = selectLocalAimEnemy(gestureEnd, gestureDir, candidates, 160);
    expect(selected).toBeNull();
  });

  test('does not extend local radius along aim direction', () => {
    expect(selectLocalAimEnemy(gestureEnd, gestureDir, [
      { entity: { id: 9, name: 'Distant ahead' }, screenPos: { x: 300, y: -100 } },
    ], 160)).toBeNull();
  });

  test('zero-direction tap chooses nearest enemy around intended point', () => {
    expect(selectLocalAimEnemy(gestureEnd, { x: 0, y: 0 }, [
      { entity: 1, screenPos: { x: 320, y: 225 } },
      { entity: 2, screenPos: { x: 304, y: 216 } },
    ], 160)).toBe(2);
  });

  test('ignores occluded enemies even if nearby', () => {
    const candidates: AimCandidate<Enemy>[] = [
      { entity: { id: 1, name: 'Behind Cover' }, screenPos: { x: 305, y: 150 }, isOccluded: true },
    ];
    const selected = selectLocalAimEnemy(gestureEnd, gestureDir, candidates, 160);
    expect(selected).toBeNull();
  });

  test('picks closest of multiple nearby candidates', () => {
    const candidates: AimCandidate<Enemy>[] = [
      { entity: { id: 1, name: 'Closer' }, screenPos: { x: 305, y: 160 } },
      { entity: { id: 2, name: 'Further' }, screenPos: { x: 340, y: 120 } },
    ];
    const selected = selectLocalAimEnemy(gestureEnd, gestureDir, candidates, 160);
    expect(selected).not.toBeNull();
    expect(selected!.id).toBe(1);
  });
});
