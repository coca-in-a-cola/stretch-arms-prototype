"""Re-cut clean RGBA character sprites from the Gemini concept sheets (white paper background, no stands).

Runs the pixel work inside headless Chromium's canvas (no PIL in the project venv):
  .venv-browser/bin/python tools/cut_sprites.py
Border flood-fill removes only paper connected to the image edge, so eye whites / muzzle stay opaque.
Edge pixels get a soft alpha ramp; the result is cropped, padded and fitted feet-down into 512x640.
"""
import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public' / 'assets'
JOBS = [
    # source, output, rows to blank from the top (the dog's painted halo is replaced by an animated one)
    ('gemini-bully-solo.jpg', 'bully.png', 0),
    ('gemini-dog-solo.jpg', 'dog_halo.png', 205),
]
JS = '''async ([src, blank]) => {
  const img = new Image(); img.src = src; await img.decode();
  const W = img.width, H = img.height, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, W, H), px = d.data;
  const paper = i => { const r = px[i], gg = px[i+1], b = px[i+2]; const lo = Math.min(r, gg, b), hi = Math.max(r, gg, b); return lo > 222 && hi - lo < 26; };
  const bg = new Uint8Array(W * H), stack = [];
  for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
  while (stack.length) { const p = stack.pop(); if (bg[p] || !paper(p * 4)) continue; bg[p] = 1; const x = p % W, y = (p / W) | 0;
    if (x > 0) stack.push(p - 1); if (x < W - 1) stack.push(p + 1); if (y > 0) stack.push(p - W); if (y < H - 1) stack.push(p + W); }
  for (let y = 0; y < blank; y++) for (let x = 0; x < W; x++) bg[y * W + x] = 1;
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let p = 0; p < W * H; p++) {
    const i = p * 4;
    if (bg[p]) { px[i + 3] = 0; continue; }
    // Anti-aliased fringe: a foreground pixel touching paper fades by its own lightness.
    const x = p % W, y = (p / W) | 0;
    const edge = (x > 0 && bg[p - 1]) || (x < W - 1 && bg[p + 1]) || (y > 0 && bg[p - W]) || (y < H - 1 && bg[p + W]);
    if (edge) { const l = (px[i] + px[i+1] + px[i+2]) / 3; px[i + 3] = Math.max(0, Math.min(255, (255 - l) * 3.2)); }
    if (px[i + 3] > 20) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  }
  g.putImageData(d, 0, 0);
  const out = document.createElement('canvas'); out.width = 512; out.height = 640; const o = out.getContext('2d');
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1, s = Math.min(480 / bw, 620 / bh);
  o.imageSmoothingQuality = 'high';
  o.drawImage(c, x0, y0, bw, bh, (512 - bw * s) / 2, 636 - bh * s, bw * s, bh * s);
  return { url: out.toDataURL('image/png'), box: [x0, y0, x1, y1], scale: s };
}'''

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox'])
    page = browser.new_page()
    for src, dst, blank in JOBS:
        data = 'data:image/jpeg;base64,' + base64.b64encode((ASSETS / src).read_bytes()).decode()
        res = page.evaluate(JS, [data, blank])
        (ASSETS / dst).write_bytes(base64.b64decode(res['url'].split(',', 1)[1]))
        print(dst, res['box'], round(res['scale'], 3))
    browser.close()
