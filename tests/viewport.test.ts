import { describe, expect, test } from 'bun:test';
import { fitStage, ndcToScreen, screenToStage } from '../src/viewport';
import { sweepSegment } from '../src/gestures';

describe('viewport stage', () => {
  for (const [width, height] of [[740, 300], [844, 320], [667, 375], [915, 412], [390, 844], [1280, 720]]) {
    test(`${width}x${height} reserves controls and keeps 16:9`, () => {
      const rect = fitStage({ left: 11, top: 23, width, height }, { left: 17, top: 8, right: 13, bottom: 9 });
      expect(rect.width / rect.height).toBeCloseTo(16 / 9, 10);
      expect(rect.left).toBeGreaterThanOrEqual(28);
      expect(rect.top).toBeGreaterThanOrEqual(31);
      expect(rect.left + rect.width).toBeLessThanOrEqual(width - 2);
      expect(rect.top + rect.height).toBeLessThanOrEqual(height + 14);
      if (!rect.stacked) expect(rect.left - 28).toBeGreaterThanOrEqual(104);
      for (const dpr of [1, 2, 3]) {
        const projected = ndcToScreen(rect, { x: .23, y: -.37 });
        const hit = screenToStage(rect, projected)!;
        expect(hit.ndcX).toBeCloseTo(.23, 10);
        expect(hit.ndcY).toBeCloseTo(-.37, 10);
        expect(hit.x / rect.width).toBeCloseTo(hit.x * dpr / (rect.width * dpr), 10);
      }
      expect(screenToStage(rect, { x: rect.left - 1, y: rect.top + rect.height / 2 })).toBeNull();
      expect(screenToStage(rect, { x: rect.left + rect.width, y: rect.top })).toBeNull();
      const a = ndcToScreen(rect, { x: -.4, y: .2 }), b = ndcToScreen(rect, { x: .4, y: .2 });
      const sweep = sweepSegment(a, b, 16).map(p => screenToStage(rect, p)!);
      expect(sweep.every(p => Math.abs(p.ndcY - .2) < 1e-10)).toBe(true);
      expect(sweep.at(-1)!.ndcX).toBeCloseTo(.4, 10);
    });
  }
});
