"""Deterministic border-connected white removal, comparison, and measured mask metadata.
Run with an existing Pillow-enabled Python; no inference or procedural character drawing.
"""
from collections import deque
import hashlib
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
sheet = Image.new('RGB', (1200, 930), '#b8b2a8')
draw = ImageDraw.Draw(sheet)
metrics = {}
for i, pose in enumerate(('lean', 'point', 'mad')):
    raw = next(OUT.glob(f'gen_herald_nopaper_{pose}.j*'))
    image = Image.open(raw).convert('RGB')
    w, h = image.size
    # Only near-white connected to the image border is removed; cream gloves survive.
    nearwhite = image.point(lambda _: 0).convert('L')
    nearwhite.putdata([255 if min(rgb) >= 235 else 0 for rgb in image.getdata()])
    ImageDraw.floodfill(nearwhite, (0, 0), 128)
    background = nearwhite.point(lambda p: 255 if p == 128 else 0)
    # Smooth only the outer 1px fringe, not interior colors or line work.
    alpha = background.point(lambda p: 255 - p).filter(ImageFilter.MedianFilter(3))
    bbox = alpha.getbbox()
    if not bbox or bbox == (0, 0, w, h):
        raise SystemExit(f'{pose}: invalid/full-frame alpha bounds {bbox}')
    sprite = image.convert('RGBA')
    sprite.putalpha(alpha)
    # Keep original square generation framing: do not invent pose-relative cropping.
    target = ROOT / f'public/assets/gen_herald_nopaper_{pose}.png'
    sprite.save(target)
    # Measure cream connected components as review candidates, NOT semantic hand anchors.
    px = image.load()
    ap = alpha.load()
    candidates = set((x, y) for y in range(h) for x in range(w)
        if ap[x, y] > 128 and px[x, y][0] > 180 and px[x, y][1] > 165
        and 100 < px[x, y][2] < 235 and px[x, y][0] - px[x, y][2] > 12)
    regions = []
    while candidates:
        start = candidates.pop()
        q = deque([start]); n = sx = sy = 0
        xs = []; ys = []
        while q:
            x, y = q.popleft(); n += 1; sx += x; sy += y; xs.append(x); ys.append(y)
            for p in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
                if p in candidates:
                    candidates.remove(p); q.append(p)
        if n >= 400:
            regions.append({'pixels': n, 'centroid': [round(sx/n, 2), round(sy/n, 2)],
                'bbox': [min(xs), min(ys), max(xs)+1, max(ys)+1]})
    histogram = alpha.histogram()
    metrics[pose] = {'png': str(target.relative_to(ROOT)), 'dimensions': [w,h],
        'sha256': hashlib.sha256(target.read_bytes()).hexdigest(), 'alpha_bbox': bbox,
        'transparent_pixels': histogram[0], 'opaque_pixels': histogram[255],
        'cream_region_candidates_NOT_verified_hands': sorted(regions, key=lambda r: -r['pixels'])[:8],
        'accepted_hand_anchors': None, 'visual_acceptance': 'pending native image review'}
    for col, asset in enumerate((ROOT / f'public/assets/gen_herald_{pose}.png', target)):
        thumb = Image.open(asset).convert('RGBA'); thumb.thumbnail((570, 270))
        x = col*600 + (600-thumb.width)//2; y=i*310+30
        sheet.paste(thumb, (x,y), thumb)
        draw.text((col*600+15,i*310+10), f'{pose}: ' + ('ORIGINAL (baked paper)' if col == 0 else 'REFERENCE EDIT — UNREVIEWED'), fill='black')
    print(pose, json.dumps(metrics[pose]))
sheet.save(ROOT / 'evidence/SA-028d-herald-comparison.png')
(OUT / 'cutout-metrics.json').write_text(json.dumps(metrics, indent=2))
