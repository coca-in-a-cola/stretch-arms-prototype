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

export const DOUBLE_TAP = { maxPressSec: .22, maxGapSec: .32, minGapSec: .035, movePx: 12, radiusPx: 28 } as const;

export class DoubleTapTracker {
  private start: TouchPoint | null = null;
  private previous: TouchPoint | null = null;

  constructor(readonly bounds: { readonly [K in keyof typeof DOUBLE_TAP]: number } = DOUBLE_TAP) {}

  begin(point: TouchPoint, eligible: boolean): void {
    if (!eligible || this.start) { this.reset(); return; }
    this.start = point;
  }

  move(point: TouchPoint): void {
    if (this.start && Math.hypot(point.x - this.start.x, point.y - this.start.y) > this.bounds.movePx) this.reset();
  }

  end(point: TouchPoint, eligible: boolean): boolean {
    this.move(point);
    const start = this.start;
    this.start = null;
    if (!eligible || !start || point.time - start.time > this.bounds.maxPressSec || point.time < start.time) {
      this.reset(); return false;
    }
    const previous = this.previous;
    this.previous = point;
    if (!previous) return false;
    const gap = start.time - previous.time;
    if (gap < this.bounds.minGapSec || gap > this.bounds.maxGapSec || Math.hypot(point.x - previous.x, point.y - previous.y) > this.bounds.radiusPx) return false;
    this.reset();
    return true;
  }

  reset(): void { this.start = null; this.previous = null; }
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
