import * as THREE from 'three';

/**
 * Colour logic: the world is black-and-white film; colour means "you can interact with this".
 * Everything built as scenery goes through greyscaleWorld() at load; characters, props you can grab,
 * the player's arms and impact FX never do.
 */

/** Rec. 709 luma of linear RGB. */
export const luma = (r: number, g: number, b: number) => .2126 * r + .7152 * g + .0722 * b;

/** HSV saturation, 0 for any grey. */
export function saturation(r: number, g: number, b: number) {
  const hi = Math.max(r, g, b), lo = Math.min(r, g, b);
  return hi <= 0 ? 0 : (hi - lo) / hi;
}

export function greyColor(c: THREE.Color) { const y = luma(c.r, c.g, c.b); return c.setRGB(y, y, y); }

/** Desaturate a canvas in place (neon signs, painted boards). */
export function greyCanvas(canvas: HTMLCanvasElement) {
  const g = canvas.getContext('2d', { willReadFrequently: true }); if (!g) return;
  const d = g.getImageData(0, 0, canvas.width, canvas.height), px = d.data;
  for (let i = 0; i < px.length; i += 4) { const y = Math.round(luma(px[i], px[i + 1], px[i + 2])); px[i] = px[i + 1] = px[i + 2] = y; }
  g.putImageData(d, 0, 0);
}

type Tinted = THREE.Material & { color?: THREE.Color; emissive?: THREE.Color; map?: THREE.Texture | null };
const done = new WeakSet<THREE.Material>();
/** Turn every material under root to greyscale: base/emissive colours and canvas-painted maps. */
export function greyscaleWorld(root: THREE.Object3D) {
  root.traverse(o => {
    const m = (o as THREE.Mesh).material as Tinted | Tinted[] | undefined; if (!m) return;
    for (const mat of Array.isArray(m) ? m : [m]) {
      if (done.has(mat)) continue; done.add(mat);
      if (mat.color) greyColor(mat.color);
      if (mat.emissive) greyColor(mat.emissive);
      const img = mat.map?.image as unknown;
      if (typeof HTMLCanvasElement !== 'undefined' && img instanceof HTMLCanvasElement) { greyCanvas(img); mat.map!.needsUpdate = true; }
      mat.userData.world = true;
    }
  });
  return root;
}

/**
 * Per-level light and sky, all neutral greys. Level 1: bright daylight, soft contrast.
 * Level 2: dusk — dark sky with a pale horizon, low light, short fog; lamps and windows make the pools.
 */
export const LOOKS = {
  1: { sky: [[0, '#a9a9a9'], [.55, '#e2e2e2'], [1, '#f1f1f1']], fog: '#e0e0e0', near: 16, far: 48, hemi: ['#ffffff', '#6e6e6e', 2.4], sun: ['#ffffff', 3.0], sunAt: [-7, 14, 10] },
  2: { sky: [[0, '#0d0d0d'], [.45, '#2c2c2c'], [.78, '#6a6a6a'], [1, '#bdbdbd']], fog: '#2e2e2e', near: 10, far: 34, hemi: ['#b4b4b4', '#1c1c1c', .9], sun: ['#e8e8e8', 1.9], sunAt: [13, 4.5, 6] },
} as const satisfies Record<1 | 2, { sky: readonly (readonly [number, string])[]; fog: string; near: number; far: number; hemi: readonly [string, string, number]; sun: readonly [string, number]; sunAt: readonly [number, number, number] }>;

/** The player's own sleeves: cobalt, so the arm reads as "active" against the grey street. */
export const SLEEVE = { base: '#2c55c9', shine: '#6d93ee', dark: '#1a3486' } as const;
