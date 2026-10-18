"""Re-cut clean RGBA sprites from the Gemini concept sheets (white paper background, no stands).

Sources live in art/ (never shipped); the runtime cuts come from the colour recolours (gen_color_*),
which share the B/W sheets' layout, so the crop boxes are the same.

Runs the pixel work inside headless Chromium's canvas (no PIL in the project venv):
  PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py [only.png ...]
Per figure: crop a region of the sheet, flood-fill the paper from the crop edges, also clear large
enclosed paper holes (gaps between arm and body), keep only the main figure (drops neighbours' fragments
and small doodles like painted dizzy stars), then de-halo the anti-aliased fringe: edge alpha comes from
darkness and the colour is un-blended from white so no light rim remains. Fitted feet-down into 512x640.
"""
import base64
import sys
import json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'public' / 'assets'
ART = ROOT / 'art'
# Shared pixel scale per family keeps frames of one character the same size when they swap in-game.
CAT_SCALE = 1.1
JOBS = [
    # source, output, options: crop [x0,y0,x1,y1] in sheet px, blank = rows to clear from the top,
    # mirror = flip horizontally, hole = min enclosed-paper area cleared (default 1400; eye whites are smaller), scale = fixed px scale (else fit), fit = 'height' | 'width' | 'box'
    ('gen_color_gemini-bully-solo.jpg', 'bully.png', {}),
    ('gen_color_gemini-dog-solo.jpg', 'dog_halo.png', {'blank': 205}),
    ('gen_color_gen_cat_poses.jpg', 'gen_cat_windup.png', {'crop': [10, 180, 390, 760], 'mirror': True, 'scale': CAT_SCALE}),
    ('gen_color_gen_cat_poses.jpg', 'gen_cat_hurt.png', {'crop': [340, 180, 715, 760], 'mirror': True, 'scale': CAT_SCALE}),
    ('gen_color_gen_cat_poses.jpg', 'gen_cat_ko.png', {'crop': [670, 230, 1010, 760], 'mirror': True, 'scale': CAT_SCALE, 'hole': 150}),
    ('gen_color_gen_dog_poses.jpg', 'gen_dog_walk.png', {'crop': [0, 180, 375, 590], 'hole': 150}),
    ('gen_color_gen_dog_poses.jpg', 'gen_dog_sit.png', {'crop': [180, 190, 760, 910]}),
    ('gen_color_gen_dog_poses.jpg', 'gen_dog_sad.png', {'crop': [665, 330, 1020, 770]}),
    ('gen_color_gen_props.jpg', 'gen_barrel.png', {'crop': [50, 85, 360, 500]}),
    ('gen_color_gen_props.jpg', 'gen_bottle.png', {'crop': [790, 75, 970, 510]}),
    # Level 3 bar (SA-V3-14): one standing pose per patron (no separate pose sheet yet); shared scale.
    ('gen_bar_patrons.jpg', 'gen_walrus.png', {'crop': [15, 170, 560, 835], 'scale': .93}),
    ('gen_bar_patrons.jpg', 'gen_bulldog.png', {'crop': [380, 370, 722, 820], 'scale': .93 * 1.2}),
    ('gen_bar_patrons.jpg', 'gen_weasel.png', {'crop': [688, 285, 1000, 825], 'scale': .93 * 1.08}),
    # Hero item: the bowler is painted black on the sheet; recoloured violet so it reads as interactive in the grey bar.
    ('gen_bar_props.jpg', 'gen_hat.png', {'crop': [40, 55, 425, 340], 'tint': [124, 58, 230]}),
    ('gen_bar_props.jpg', 'gen_mug.png', {'crop': [452, 40, 692, 360], 'hole': 400}),
    ('gen_bar_props.jpg', 'gen_whiskey.png', {'crop': [792, 30, 922, 365]}),
    # SA-V4-16: the rest of the bar sheet (3x3; the hat is the hero item above) and the street props sheet (3x3).
    ('gen_bar_props.jpg', 'gen_stool.png', {'crop': [85, 385, 315, 695]}),
    ('gen_bar_props.jpg', 'gen_spittoon.png', {'crop': [410, 420, 660, 650], 'hole': 400}),
    ('gen_bar_props.jpg', 'gen_shaker.png', {'crop': [780, 390, 935, 665]}),
    ('gen_bar_props.jpg', 'gen_eggs.png', {'crop': [100, 720, 295, 990], 'hole': 400}),
    ('gen_bar_props.jpg', 'gen_plunger.png', {'crop': [450, 690, 605, 990]}),
    ('gen_bar_props.jpg', 'gen_cuckoo.png', {'crop': [735, 680, 980, 1020], 'hole': 400}),
    ('gen_street_props2.jpg', 'gen_hydrant.png', {'crop': [65, 20, 295, 345]}),
    ('gen_street_props2.jpg', 'gen_tire.png', {'crop': [385, 35, 640, 340], 'hole': 400}),
    ('gen_street_props2.jpg', 'gen_melon.png', {'crop': [710, 35, 980, 330]}),
    ('gen_street_props2.jpg', 'gen_fish.png', {'crop': [20, 395, 365, 640]}),
    ('gen_street_props2.jpg', 'gen_anvil.png', {'crop': [335, 390, 685, 645]}),
    ('gen_street_props2.jpg', 'gen_chicken.png', {'crop': [760, 335, 925, 710]}),
    ('gen_street_props2.jpg', 'gen_bowling.png', {'crop': [55, 715, 315, 975]}),
    ('gen_street_props2.jpg', 'gen_flowerpot.png', {'crop': [405, 660, 615, 990]}),
    ('gen_street_props2.jpg', 'gen_pie.png', {'crop': [685, 715, 1000, 955], 'hole': 6000}),  # keep the whipped cream
    # Backdrop: the B/W bar painting, kept opaque and forced to pure grey (world rule), PNG so no .jpg ships.
    ('gen_bar_bg.jpg', 'gen_bar_backdrop.png', {'plain': True}),
]
JS = '''async ([src, o]) => {
  const img = new Image(); img.src = src; await img.decode();
  const [cx0, cy0, cx1, cy1] = o.crop ?? [0, 0, img.width, img.height];
  const W = cx1 - cx0, H = cy1 - cy0, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'); g.drawImage(img, cx0, cy0, W, H, 0, 0, W, H);
  const d = g.getImageData(0, 0, W, H), px = d.data, N = W * H;
  if (o.plain) {
    for (let i = 0; i < px.length; i += 4) { const y = Math.round(.2126 * px[i] + .7152 * px[i+1] + .0722 * px[i+2]); px[i] = px[i+1] = px[i+2] = y; px[i+3] = 255; }
    g.putImageData(d, 0, 0);
    return { url: c.toDataURL('image/png'), crop: [cx0, cy0, cx1, cy1], scale: 1, holes: [], dropped: 0, box: [0, 1, 0, 1] };
  }
  if (o.tint) for (let i = 0; i < px.length; i += 4) {
    // Dark low-saturation paint (not the ink line, not the paper) takes the tint, shaded by its own value.
    const r = px[i], gg = px[i+1], b = px[i+2], hi = Math.max(r, gg, b), lo = Math.min(r, gg, b), l = (r + gg + b) / 3;
    if (l > 34 && l < 150 && hi - lo < 30) { const k = .55 + l / 150 * .9; for (let j = 0; j < 3; j++) px[i+j] = Math.min(255, Math.round(o.tint[j] * k)); }
  }
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
    only = set(sys.argv[1:])  # optional: re-cut just these outputs
    for src, dst, opts in JOBS:
        if only and dst not in only:
            continue
        source = ART / src
        if not source.exists():
            print(dst, 'SKIPPED: missing', src)
            continue
        data = 'data:image/jpeg;base64,' + base64.b64encode(source.read_bytes()).decode()
        res = page.evaluate(JS, [data, opts])
        (ASSETS / dst).write_bytes(base64.b64decode(res['url'].split(',', 1)[1]))
        print(dst, json.dumps({k: res[k] for k in ('crop', 'scale', 'holes', 'dropped', 'box')}))
    browser.close()
