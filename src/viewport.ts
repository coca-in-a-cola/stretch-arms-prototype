export interface Point { x: number; y: number }
export interface Rect { left: number; top: number; width: number; height: number }
export interface Insets { left: number; top: number; right: number; bottom: number }

export function fitStage(view: Rect, safe: Insets) {
  const width = Math.max(1, view.width - safe.left - safe.right);
  const height = Math.max(1, view.height - safe.top - safe.bottom);
  const stacked = width < 520;
  const rail = stacked ? 0 : Math.min(160, Math.max(104, width * .14));
  const w = Math.min(Math.max(1, width - rail * 2), Math.max(1, height - (stacked ? 240 : 0)) * 16 / 9);
  const h = w * 9 / 16;
  return { left: view.left + safe.left + (width - w) / 2, top: view.top + safe.top + (height - h) / 2, width: w, height: h, stacked };
}

/** All inputs are client CSS pixels, never drawing-buffer pixels. Outside points are not aims. */
export function screenToStage(rect: Rect, point: Point) {
  if (rect.width <= 0 || rect.height <= 0 || point.x < rect.left || point.y < rect.top || point.x >= rect.left + rect.width || point.y >= rect.top + rect.height) return null;
  const x = point.x - rect.left, y = point.y - rect.top;
  return { x, y, ndcX: x / rect.width * 2 - 1, ndcY: 1 - y / rect.height * 2 };
}

export function stageToScreen(rect: Rect, point: Point): Point {
  return { x: rect.left + point.x, y: rect.top + point.y };
}

export function ndcToScreen(rect: Rect, point: Point): Point {
  return stageToScreen(rect, { x: (point.x + 1) * .5 * rect.width, y: (1 - point.y) * .5 * rect.height });
}
