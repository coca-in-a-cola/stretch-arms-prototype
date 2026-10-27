import { describe, expect, test } from 'bun:test';
import {
  sweepSegment,
  HitCooldownTracker,
  ContactHandTracker,
  selectLocalAimEnemy,
  type ContactEntity,
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

describe('gestures: ContactHandTracker (contact-driven mobile hands)', () => {
  const enemyTarget: ContactEntity = { id: 10, kind: 'enemy', screenPos: { x: 200, y: 150 } };
  const thugTarget: ContactEntity = { id: 11, kind: 'thug', screenPos: { x: 250, y: 180 } };
  const propBottle: ContactEntity = { id: 20, kind: 'prop', propKind: 'bottle', screenPos: { x: 120, y: 220 } };
  const propStool: ContactEntity = { id: 21, kind: 'prop', propKind: 'stool', screenPos: { x: 300, y: 220 } };
  const dogTarget: ContactEntity = { id: 30, kind: 'dog', screenPos: { x: 180, y: 280 } };
  const coverTarget: ContactEntity = { id: 'piano', kind: 'cover', screenPos: { x: 150, y: 200 } };
  const whiffTarget: ContactEntity = { kind: 'whiff', screenPos: { x: 100, y: 100 } };

  test('empty punch: striking an enemy with empty hands triggers punch', () => {
    const tracker = new ContactHandTracker(0.35);
    tracker.begin(1, { x: 190, y: 150 });
    const decision = tracker.evaluateContact(enemyTarget, null, 1.0, { x: 200, y: 150 });
    expect(decision.action).toBe('punch');
    expect(decision.entity?.id).toBe(10);
    expect(decision.heldProp).toBeNull();
  });

  test('empty punch: hit cooldown suppresses repeated punch on same enemy in 1 frame', () => {
    const tracker = new ContactHandTracker(0.35);
    tracker.begin(1, { x: 190, y: 150 });
    const first = tracker.evaluateContact(enemyTarget, null, 1.0);
    expect(first.action).toBe('punch');
    const second = tracker.evaluateContact(enemyTarget, null, 1.05);
    expect(second.action).toBe('cooldown');
    const third = tracker.evaluateContact(enemyTarget, null, 1.40);
    expect(third.action).toBe('punch');
  });

  test('empty punch: can strike distinct enemies in the same continuous sweep', () => {
    const tracker = new ContactHandTracker(0.35);
    const hit1 = tracker.evaluateContact(enemyTarget, null, 1.0);
    const hit2 = tracker.evaluateContact(thugTarget, null, 1.02);
    expect(hit1.action).toBe('punch');
    expect(hit2.action).toBe('punch');
  });

  test('prop pickup: crossing accessible prop with empty hands triggers grab', () => {
    const tracker = new ContactHandTracker(0.35);
    const grab = tracker.evaluateContact(propBottle, null, 1.0);
    expect(grab.action).toBe('grab');
    expect(grab.entity?.id).toBe(20);
    expect(grab.heldProp).toBeNull();
  });

  test('carrying sweep throw: crossing enemy with prop held launches throw at that enemy', () => {
    const tracker = new ContactHandTracker(0.35);
    const decision = tracker.evaluateContact(enemyTarget, 'bottle', 1.0, { x: 200, y: 150 });
    expect(decision.action).toBe('sweep_throw');
    expect(decision.entity?.id).toBe(10);
    expect(decision.heldProp).toBe('bottle');
  });

  test('carrying sweep through empty space does not accidentally throw', () => {
    const tracker = new ContactHandTracker(0.35);
    const decision = tracker.evaluateContact(whiffTarget, 'bottle', 1.0, { x: 100, y: 100 });
    expect(decision.action).toBe('none');
    expect(decision.heldProp).toBe('bottle');
  });

  test('carrying release throw: pointerup directly over an enemy triggers release throw', () => {
    const tracker = new ContactHandTracker(0.35);
    tracker.begin(1, { x: 195, y: 150 });
    const release = tracker.evaluateRelease({ x: 200, y: 150 }, 'bottle', enemyTarget);
    expect(release.action).toBe('release_throw');
    expect(release.entity?.id).toBe(10);
    expect(release.heldProp).toBe('bottle');
    expect(tracker.isTouching).toBe(false);
  });

  test('carrying release throw: pointerup near an enemy triggers aim-assisted release throw', () => {
    const tracker = new ContactHandTracker(0.35);
    const candidates = [
      { entity: { id: 10, name: 'Bully' }, screenPos: { x: 210, y: 155 } },
    ];
    const release = tracker.evaluateRelease({ x: 200, y: 150 }, 'bottle', null, candidates, 160);
    expect(release.action).toBe('release_throw');
    expect(release.aimEnemy).toEqual({ id: 10, name: 'Bully' });
    expect(release.heldProp).toBe('bottle');
  });

  test('carrying release over empty space retains prop and does not throw', () => {
    const tracker = new ContactHandTracker(0.35);
    tracker.begin(1, { x: 50, y: 50 });
    const candidates = [
      { entity: { id: 10, name: 'Far Enemy' }, screenPos: { x: 600, y: 600 } },
    ];
    const release = tracker.evaluateRelease({ x: 50, y: 50 }, 'bottle', null, candidates, 160);
    expect(release.action).toBe('none');
    expect(release.heldProp).toBe('bottle');
    expect(tracker.isTouching).toBe(false);
  });

  test('empty hand release over enemy does nothing', () => {
    const tracker = new ContactHandTracker(0.35);
    const release = tracker.evaluateRelease({ x: 200, y: 150 }, null, enemyTarget);
    expect(release.action).toBe('none');
  });

  test('carrying chain prop swap: crossing second prop launches held prop and grabs new prop', () => {
    const tracker = new ContactHandTracker(0.35);
    const swap = tracker.evaluateContact(propStool, 'bottle', 1.0, { x: 300, y: 220 });
    expect(swap.action).toBe('chain_swap');
    expect(swap.heldProp).toBe('bottle');
    expect(swap.entity?.id).toBe(21);
  });

  test('non-enemy interactions: friends, dogs, and covers are respected', () => {
    const tracker = new ContactHandTracker(0.35);
    const scold = tracker.evaluateContact(dogTarget, null, 1.0);
    expect(scold.action).toBe('scold');

    const cover = tracker.evaluateContact(coverTarget, null, 1.0);
    expect(cover.action).toBe('cover');
  });

  test('safety resets: reset() clears touch contact but preserves cooldowns; resetAll() clears both', () => {
    const tracker = new ContactHandTracker(0.35);
    tracker.begin(42, { x: 100, y: 100 });
    expect(tracker.isTouching).toBe(true);
    expect(tracker.touchId).toBe(42);
    tracker.cooldowns.recordHit(10, 1.0);

    tracker.reset();
    expect(tracker.isTouching).toBe(false);
    expect(tracker.touchId).toBeNull();
    expect(tracker.cooldowns.canHit(10, 1.1)).toBe(false);

    tracker.resetAll();
    expect(tracker.cooldowns.canHit(10, 1.1)).toBe(true);
  });

  test('evaluateSegment chain: pickup -> throw -> punch chain in continuous motion', () => {
    const tracker = new ContactHandTracker(0.35);
    let heldItem: string | null = null;

    const step1 = tracker.evaluateSegment(
      { x: 100, y: 220 },
      { x: 140, y: 220 },
      pt => (Math.abs(pt.x - 120) < 10 ? propBottle : whiffTarget),
      () => heldItem,
      1.0
    );
    expect(step1.length).toBe(1);
    expect(step1[0].action).toBe('grab');
    heldItem = 'bottle';

    const step2 = tracker.evaluateSegment(
      { x: 150, y: 150 },
      { x: 220, y: 150 },
      pt => (Math.abs(pt.x - 200) < 10 ? enemyTarget : whiffTarget),
      () => heldItem,
      1.1
    );
    expect(step2.length).toBe(1);
    expect(step2[0].action).toBe('sweep_throw');
    heldItem = null;

    const step3 = tracker.evaluateSegment(
      { x: 220, y: 180 },
      { x: 260, y: 180 },
      pt => (Math.abs(pt.x - 250) < 10 ? thugTarget : whiffTarget),
      () => heldItem,
      1.2
    );
    expect(step3.length).toBe(1);
    expect(step3[0].action).toBe('punch');
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
