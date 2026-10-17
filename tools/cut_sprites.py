"""Re-cut clean RGBA sprites from the Gemini concept sheets (white paper background, no stands).

Runs the pixel work inside headless Chromium's canvas (no PIL in the project venv):
  PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py
Per figure: crop a region of the sheet, flood-fill the paper from the crop edges, also clear large
enclosed paper holes (gaps between arm and body), keep only the main figure (drops neighbours' fragments
and small doodles like painted dizzy stars), then de-halo the anti-aliased fringe: edge alpha comes from
darkness and the colour is un-blended from white so no light rim remains. Fitted feet-down into 512x640.
"""
import base64
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public' / 'assets'
# Shared pixel scale per family keeps frames of one character the same size when they swap in-game.
CAT_SCALE = 1.1
JOBS = [
    # source, output, options: crop [x0,y0,x1,y1] in sheet px, blank = rows to clear from the top,
    # mirror = flip horizontally, hole = min enclosed-paper area cleared (default 1400; eye whites are smaller), scale = fixed px scale (else fit), fit = 'height' | 'width' | 'box'
    ('gemini-bully-solo.jpg', 'bully.png', {}),
    ('gemini-dog-solo.jpg', 'dog_halo.png', {'blank': 205}),
    ('gen_cat_poses.jpg', 'gen_cat_windup.png', {'crop': [10, 180, 390, 760], 'mirror': True, 'scale': CAT_SCALE}),
    ('gen_cat_poses.jpg', 'gen_cat_hurt.png', {'crop': [340, 180, 715, 760], 'mirror': True, 'scale': CAT_SCALE}),
    ('gen_cat_poses.jpg', 'gen_cat_ko.png', {'crop': [670, 230, 1010, 760], 'mirror': True, 'scale': CAT_SCALE, 'hole': 150}),
    ('gen_dog_poses.jpg', 'gen_dog_walk.png', {'crop': [0, 180, 375, 590], 'hole': 150}),
    ('gen_dog_poses.jpg', 'gen_dog_sit.png', {'crop': [180, 190, 760, 910]}),
    ('gen_dog_poses.jpg', 'gen_dog_sad.png', {'crop': [665, 330, 1020, 770]}),
    ('gen_props.jpg', 'gen_barrel.png', {'crop': [50, 85, 360, 500]}),
    ('gen_props.jpg', 'gen_bottle.png', {'crop': [790, 75, 970, 510]}),
]
JS = '''async ([src, o]) => {
  const img = new Image(); img.src = src; await img.decode();
  const [cx0, cy0, cx1, cy1] = o.crop ?? [0, 0, img.width, img.height];
  const W = cx1 - cx0, H = cy1 - cy0, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'); g.drawImage(img, cx0, cy0, W, H, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H), px = d.data, N = W * H;
  const paper = i => { const r = px[i], gg = px[i+1], b = px[i+2]; const lo = Math.min(r, gg, b), hi = Math.max(r, gg, b); return lo > 222 && hi - lo < 26; };
  const bg = new Uint8Array(N);
  const fill = (seeds, mark, test) => { const st = seeds.slice(), out = []; while (st.length) { const p = st.pop(); if (mark[p] || !test(p)) continue; mark[p] = 1; out.push(p); const x = p % W, y = (p / W) | 0;
    if (x > 0) st.push(p - 1); if (x < W - 1) st.push(p + 1); if (y > 0) st.push(p - W); if (y < H - 1) st.push(p + W); } return out; };
  const edges = []; for (let x = 0; x < W; x++) edges.push(x, (H - 1) * W + x); for (let y = 0; y < H; y++) edges.push(y * W, y * W + W - 1);
  fill(edges, bg, p => paper(p * 4));
  for (let y = 0; y < (o.blank ?? 0); y++) for (let x = 0; x < W; x++) bg[y * W + x] = 1;
  // Enclosed paper holes bigger than an eye white are background showing through (arm/body gaps).
  const seen = new Uint8Array(N), holes = [];
  for (let p = 0; p < N; p++) if (!bg[p] && !seen[p] && paper(p * 4)) { const r = fill([p], seen, q => !bg[q] && paper(q * 4)); if (r.length > (o.hole ?? 1400)) { holes.push(r.length); for (const q of r) bg[q] = 1; } }
  // Keep the main figure: largest 8-connected foreground blob plus big blobs (wrench, tail); drop doodles/neighbours.
  const lab = new Int32Array(N), sizes = [0], touch = [false];
  for (let p = 0; p < N; p++) if (!bg[p] && !lab[p]) {
    const id = sizes.length, st = [p]; lab[p] = id; let n = 0, t = false;
    while (st.length) { const q = st.pop(); n++; const x = q % W, y = (q / W) | 0; if (x === 0 || y === 0 || x === W - 1 || y === H - 1) t = true;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= W || yy >= H) continue; const r = yy * W + xx; if (!bg[r] && !lab[r]) { lab[r] = id; st.push(r); } } }
    sizes.push(n); touch.push(t);
  }
  const main = sizes.indexOf(Math.max(...sizes));
  const keep = sizes.map((n, i) => i === main || (n > sizes[main] * .04 && !touch[i]));
  const dropped = sizes.filter((n, i) => i && !keep[i]).length;
  for (let p = 0; p < N; p++) if (!bg[p] && !keep[lab[p]]) bg[p] = 1;
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let p = 0; p < N; p++) {
    const i = p * 4;
    if (bg[p]) { px[i + 3] = 0; continue; }
    const x = p % W, y = (p / W) | 0;
    const edge = (x > 0 && bg[p - 1]) || (x < W - 1 && bg[p + 1]) || (y > 0 && bg[p - W]) || (y < H - 1 && bg[p + W]);
    if (edge) {
      // Fringe: alpha from darkness, colour un-blended from the white paper (no light halo).
      const l = (px[i] + px[i+1] + px[i+2]) / 3, a = Math.max(0, Math.min(1, (255 - l) / 255 * 3.2));
      px[i + 3] = Math.round(a * 255);
      if (a > 0) for (let k = 0; k < 3; k++) px[i + k] = Math.max(0, Math.min(255, (px[i + k] - 255 * (1 - a)) / a));
    }
    if (px[i + 3] > 20) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  }
  g.putImageData(d, 0, 0);
  const out = document.createElement('canvas'); out.width = 512; out.height = 640; const ox = out.getContext('2d');
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1, s = o.scale ?? Math.min(480 / bw, 620 / bh);
  ox.imageSmoothingQuality = 'high';
  if (o.mirror) { ox.translate(512, 0); ox.scale(-1, 1); }
  const dx = (512 - bw * s) / 2, dy = 636 - bh * s;
  ox.drawImage(c, x0, y0, bw, bh, dx, dy, bw * s, bh * s);
  // Visible box as fractions of the frame (for hitbox insets): left, right, bottom, top (from the feet up).
  const box = [dx / 512, (dx + bw * s) / 512, (640 - 636) / 640, (636 - dy) / 640].map(v => +v.toFixed(3));
  return { url: out.toDataURL('image/png'), crop: [x0, y0, x1, y1], scale: s, holes, dropped, box };
}'''

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, args=['--no-sandbox'])
    page = browser.new_page()
    for src, dst, opts in JOBS:
        source = ASSETS / src
        if not source.exists():
            print(dst, 'SKIPPED: missing', src)
            continue
        data = 'data:image/jpeg;base64,' + base64.b64encode(source.read_bytes()).decode()
        res = page.evaluate(JS, [data, opts])
        (ASSETS / dst).write_bytes(base64.b64decode(res['url'].split(',', 1)[1]))
        print(dst, json.dumps({k: res[k] for k in ('crop', 'scale', 'holes', 'dropped', 'box')}))
    browser.close()
