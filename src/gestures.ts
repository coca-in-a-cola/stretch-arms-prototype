export interface TouchPoint {
  x: number;
  y: number;
  time: number;
}

export function sweepSegment(
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  stepPx = 18
): { x: number; y: number }[] {
  const dx = p1.x - p0.x;
  const dy = p1.y - p0.y;
  const dist = Math.hypot(dx, dy);
  if (dist < 1e-4) return [{ ...p1 }];
  const steps = Math.max(1, Math.ceil(dist / Math.max(1, stepPx)));
  const points: { x: number; y: number }[] = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    points.push({ x: p0.x + dx * t, y: p0.y + dy * t });
  }
  return points;
}

export class HitCooldownTracker {
  private lastHitTimes = new Map<number | string, number>();

  constructor(readonly cooldownSeconds = 0.35) {}

  canHit(id: number | string, now: number): boolean {
    const last = this.lastHitTimes.get(id);
    if (last === undefined) return true;
    return (now - last) >= this.cooldownSeconds;
  }

  recordHit(id: number | string, now: number): void {
    this.lastHitTimes.set(id, now);
  }

  clear(): void {
    this.lastHitTimes.clear();
  }
}

export const HIT_COOLDOWN_SECONDS = 0.35;

export interface ContactEntity {
  id?: number | string;
  kind: 'enemy' | 'thug' | 'prop' | 'friend' | 'dog' | 'cover' | 'herald' | 'flyer' | 'whiff' | 'outside';
  screenPos?: { x: number; y: number };
  point?: { x: number; y: number; z: number };
  propKind?: string;
}

export type ContactActionType =
  | 'punch'
  | 'grab'
  | 'sweep_throw'
  | 'release_throw'
  | 'chain_swap'
  | 'scold'
  | 'cover'
  | 'tear_flyer'
  | 'offend_herald'
  | 'none'
  | 'cooldown';

export interface ContactDecision {
  action: ContactActionType;
  entity?: ContactEntity;
  heldProp?: string | null;
  point?: { x: number; y: number };
}

export class ContactHandTracker {
  private activeTouchId: number | null = null;
  private lastPos: { x: number; y: number } | null = null;
  readonly cooldowns: HitCooldownTracker;

  constructor(cooldownSeconds = HIT_COOLDOWN_SECONDS) {
    this.cooldowns = new HitCooldownTracker(cooldownSeconds);
  }

  get isTouching(): boolean {
    return this.activeTouchId !== null;
  }

  get touchId(): number | null {
    return this.activeTouchId;
  }

  begin(id: number, pos: { x: number; y: number }): void {
    this.activeTouchId = id;
    this.lastPos = { ...pos };
  }

  updatePos(pos: { x: number; y: number }): void {
    this.lastPos = { ...pos };
  }

  getLastPos(): { x: number; y: number } | null {
    return this.lastPos ? { ...this.lastPos } : null;
  }

  evaluateContact(
    entity: ContactEntity,
    held: string | null,
    now: number,
    point?: { x: number; y: number }
  ): ContactDecision {
    if (entity.kind === 'enemy' || entity.kind === 'thug') {
      const subjectId = entity.id ?? 'enemy';
      if (held !== null) {
        if (this.cooldowns.canHit(subjectId, now)) {
          this.cooldowns.recordHit(subjectId, now);
          return { action: 'sweep_throw', entity, heldProp: held, point };
        }
        return { action: 'cooldown', entity, heldProp: held, point };
      }
      if (this.cooldowns.canHit(subjectId, now)) {
        this.cooldowns.recordHit(subjectId, now);
        return { action: 'punch', entity, heldProp: null, point };
      }
      return { action: 'cooldown', entity, heldProp: null, point };
    }

    if (entity.kind === 'prop') {
      const propId = entity.id ?? 'prop';
      if (held === null) {
        if (this.cooldowns.canHit(propId, now)) {
          this.cooldowns.recordHit(propId, now);
          return { action: 'grab', entity, heldProp: null, point };
        }
        return { action: 'cooldown', entity, heldProp: null, point };
      } else {
        if (this.cooldowns.canHit(propId, now)) {
          this.cooldowns.recordHit(propId, now);
          return { action: 'chain_swap', entity, heldProp: held, point };
        }
        return { action: 'cooldown', entity, heldProp: held, point };
      }
    }

    if (entity.kind === 'dog' || entity.kind === 'friend') {
      const id = entity.id ?? entity.kind;
      if (this.cooldowns.canHit(id, now)) {
        this.cooldowns.recordHit(id, now);
        return { action: 'scold', entity, heldProp: held, point };
      }
      return { action: 'cooldown', entity, heldProp: held, point };
    }

    if (entity.kind === 'cover') {
      const id = entity.id ?? 'cover';
      if (this.cooldowns.canHit(id, now)) {
        this.cooldowns.recordHit(id, now);
        return { action: 'cover', entity, heldProp: held, point };
      }
      return { action: 'cooldown', entity, heldProp: held, point };
    }

    if (entity.kind === 'flyer') {
      return { action: 'tear_flyer', entity, heldProp: held, point };
    }

    if (entity.kind === 'herald') {
      if (this.cooldowns.canHit('herald', now)) {
        this.cooldowns.recordHit('herald', now);
        return { action: 'offend_herald', entity, heldProp: held, point };
      }
      return { action: 'cooldown', entity, heldProp: held, point };
    }

    return { action: 'none', entity, heldProp: held, point };
  }

  evaluateSegment(
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    resolveEntity: (pt: { x: number; y: number }) => ContactEntity,
    getHeld: () => string | null,
    now: number,
    stepPx = 16,
    onAction?: (decision: ContactDecision) => void
  ): ContactDecision[] {
    const pts = sweepSegment(p0, p1, stepPx);
    const results: ContactDecision[] = [];
    for (const pt of pts) {
      const held = getHeld();
      const entity = resolveEntity(pt);
      const decision = this.evaluateContact(entity, held, now, pt);
      if (decision.action !== 'none' && decision.action !== 'cooldown') {
        results.push(decision);
        onAction?.(decision);
      }
    }
    this.lastPos = { ...p1 };
    return results;
  }

  evaluateRelease<T>(
    point: { x: number; y: number },
    held: string | null,
    hoveredEntity: ContactEntity | null,
    candidates?: readonly AimCandidate<T>[],
    maxRadiusPx = 160
  ): ContactDecision & { aimEnemy?: T | null } {
    if (held === null) {
      this.reset();
      return { action: 'none', point };
    }

    if (hoveredEntity && (hoveredEntity.kind === 'enemy' || hoveredEntity.kind === 'thug')) {
      this.reset();
      return { action: 'release_throw', entity: hoveredEntity, heldProp: held, point };
    }

    if (candidates && candidates.length > 0) {
      const aimEnemy = selectLocalAimEnemy(point, { x: 0, y: 0 }, candidates, maxRadiusPx);
      if (aimEnemy) {
        this.reset();
        return { action: 'release_throw', heldProp: held, point, aimEnemy };
      }
    }

    this.reset();
    return { action: 'none', heldProp: held, point };
  }

  reset(): void {
    this.activeTouchId = null;
    this.lastPos = null;
  }

  resetAll(): void {
    this.reset();
    this.cooldowns.clear();
  }
}

export interface AimCandidate<T = unknown> {
  entity: T;
  screenPos: { x: number; y: number };
  isOccluded?: boolean;
}

export function selectLocalAimEnemy<T>(
  gestureEnd: { x: number; y: number },
  gestureDir: { x: number; y: number },
  candidates: readonly AimCandidate<T>[],
  maxRadiusPx = 160
): T | null {
  let bestEnemy: T | null = null;
  let bestScore = maxRadiusPx;

  const len = Math.hypot(gestureDir.x, gestureDir.y) || 1;
  const udx = gestureDir.x / len;
  const udy = gestureDir.y / len;

  for (const c of candidates) {
    if (c.isOccluded) continue;
    const dx = c.screenPos.x - gestureEnd.x;
    const dy = c.screenPos.y - gestureEnd.y;
    const distToEnd = Math.hypot(dx, dy);
    if (distToEnd > maxRadiusPx) continue;

    const forward = dx * udx + dy * udy;
    const perp = Math.abs(dx * (-udy) + dy * udx);

    if (forward < -40) continue;

    const effectiveDist = Math.hypot(gestureDir.x, gestureDir.y) === 0 ? distToEnd : forward >= 0 ? Math.hypot(perp, forward * 0.3) : distToEnd;

    if (effectiveDist < bestScore) {
      bestScore = effectiveDist;
      bestEnemy = c.entity;
    }
  }

  return bestEnemy;
}
