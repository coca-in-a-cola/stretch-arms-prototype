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

export interface SwipeInfo {
  isUpwardThrow: boolean;
  startPoint: { x: number; y: number };
  endPoint: { x: number; y: number };
  velocity: { vx: number; vy: number; speed: number };
}

export function detectUpwardThrow(
  history: readonly TouchPoint[],
  opts: {
    minUpwardDistance?: number;
    minSpeedPxPerSec?: number;
    maxTimeWindowSec?: number;
  } = {}
): SwipeInfo | null {
  if (history.length < 2) return null;
  const minDistance = opts.minUpwardDistance ?? 28;
  const minSpeed = opts.minSpeedPxPerSec ?? 320;
  const windowSec = opts.maxTimeWindowSec ?? 0.22;

  const latest = history[history.length - 1];
  let oldestIndex = history.length - 2;
  while (oldestIndex > 0 && (latest.time - history[oldestIndex].time) < windowSec) {
    oldestIndex--;
  }
  const oldest = history[oldestIndex];
  const dt = Math.max(1e-3, latest.time - oldest.time);
  const dx = latest.x - oldest.x;
  const dy = latest.y - oldest.y;
  const vy = dy / dt;
  const vx = dx / dt;
  const speed = Math.hypot(vx, vy);

  const isUpward = dy <= -minDistance && vy <= -minSpeed && Math.abs(dy) >= Math.abs(dx) * 0.6;

  return {
    isUpwardThrow: isUpward,
    startPoint: { x: oldest.x, y: oldest.y },
    endPoint: { x: latest.x, y: latest.y },
    velocity: { vx, vy, speed },
  };
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

    const forward = dx * udx + dy * udy;
    const perp = Math.abs(dx * (-udy) + dy * udx);

    if (forward < -40) continue;

    const effectiveDist = forward >= 0 ? Math.hypot(perp, forward * 0.3) : distToEnd;

    if (effectiveDist < bestScore) {
      bestScore = effectiveDist;
      bestEnemy = c.entity;
    }
  }

  return bestEnemy;
}
