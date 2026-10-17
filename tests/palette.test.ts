import { describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { inflateSync } from 'node:zlib';
import * as THREE from 'three';
import { LOOKS, SLEEVE, greyscaleWorld, saturation } from '../src/palette';
import { LEVELS } from '../src/layout';

const root = join(import.meta.dir, '..');
const sat = (c: THREE.Color) => saturation(c.r, c.g, c.b);
const hexSat = (hex: string) => sat(new THREE.Color(hex));

/** Minimal PNG reader (8-bit RGB/RGBA, non-interlaced) — enough for the cut sprites. */
function readPng(file: string) {
  const buf = readFileSync(file); let p = 8, width = 0, height = 0, type = 0; const idat: Buffer[] = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p), kind = buf.toString('ascii', p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len);
    if (kind === 'IHDR') { width = data.readUInt32BE(0); height = data.readUInt32BE(4); type = data[9]; expect(data[8]).toBe(8); expect(data[12]).toBe(0); }
    if (kind === 'IDAT') idat.push(data);
    p += 12 + len;
  }
  const bpp = type === 6 ? 4 : 3, raw = inflateSync(Buffer.concat(idat)), stride = width * bpp, out = new Uint8Array(width * height * 4);
  let prev = new Uint8Array(stride);
  for (let y = 0; y < height; y++) {
    const f = raw[y * (stride + 1)], line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)), cur = new Uint8Array(stride);
    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? cur[i - bpp] : 0, b = prev[i], c = i >= bpp ? prev[i - bpp] : 0;
      const pr = (() => { const q = a + b - c, pa = Math.abs(q - a), pb = Math.abs(q - b), pc = Math.abs(q - c); return pa <= pb && pa <= pc ? a : pb <= pc ? b : c; })();
      cur[i] = (line[i] + [0, a, b, (a + b) >> 1, pr][f]) & 255;
    }
    for (let x = 0; x < width; x++) for (let k = 0; k < 4; k++) out[(y * width + x) * 4 + k] = k < bpp ? cur[x * bpp + k] : 255;
    prev = cur;
  }
  return { width, height, px: out };
}

describe('colour logic: grey world, colour means interactive', () => {
  test('sky, fog and lights of both levels are neutral grey', () => {
    for (const L of [LOOKS[1], LOOKS[2], LOOKS[3]]) {
      for (const hex of [...L.sky.map(s => s[1]), L.fog, L.hemi[0], L.hemi[1], L.sun[0]]) expect({ hex, s: hexSat(hex) }).toEqual({ hex, s: 0 });
    }
  });

  test('levels stay distinct by value: level 2 dusk is darker than level 1 daylight', () => {
    const v = (hex: string) => new THREE.Color(hex).r;
    expect(v(LOOKS[2].fog)).toBeLessThan(v(LOOKS[1].fog) * .5);
    expect(v(LOOKS[2].sky[0][1])).toBeLessThan(v(LOOKS[1].sky[0][1]) * .5);
    expect(LOOKS[2].hemi[2]).toBeLessThan(LOOKS[1].hemi[2]);
  });

  test('greyscaleWorld leaves every world material (street, covers, coloured lights) at saturation ~0', () => {
    // makeStreet paints neon signs on a canvas; a context-less stub is enough to build the geometry here.
    const g = globalThis as { document?: unknown };
    const had = 'document' in g, saved = g.document;
    g.document = { createElement: () => ({ width: 0, height: 0, getContext: () => null }) };
    let street: THREE.Group;
    try { street = (require('../src/street') as typeof import('../src/street')).makeStreet(); } finally { if (had) g.document = saved; else delete g.document; }
    const world = new THREE.Group(); world.add(street);
    for (const level of [1, 2, 3]) for (const c of LEVELS[level].covers) world.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial({ color: c.color, emissive: c.color })));
    world.add(new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: '#202320' })));
    let coloured = 0, checked = 0;
    world.traverse(o => { const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined; if (m?.color && sat(m.color) > .05) coloured++; });
    expect(coloured).toBeGreaterThan(10); // the source paint really is colourful
    greyscaleWorld(world);
    world.traverse(o => {
      const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined; if (!m) return;
      checked++;
      expect(sat(m.color)).toBeLessThan(1e-6);
      if (m.emissive) expect(sat(m.emissive)).toBeLessThan(1e-6);
      expect(m.userData.world).toBe(true);
    });
    expect(checked).toBeGreaterThan(50);
  });

  test("the player's sleeves are coloured", () => {
    for (const hex of Object.values(SLEEVE)) expect(hexSat(hex)).toBeGreaterThan(.4);
  });

  const backdrops = ['gen_bar_backdrop.png'];
  const sprites = readdirSync(join(root, 'public', 'assets')).filter(f => f.endsWith('.png') && !backdrops.includes(f));
  test('every runtime sprite is present', () => {
    expect(sprites.sort()).toEqual(['bully.png', 'dog_halo.png', 'gen_barrel.png', 'gen_bottle.png', 'gen_bulldog.png', 'gen_cat_hurt.png', 'gen_cat_ko.png', 'gen_cat_windup.png', 'gen_dog_sad.png', 'gen_dog_sit.png', 'gen_dog_walk.png', 'gen_hat.png', 'gen_mug.png', 'gen_walrus.png', 'gen_weasel.png', 'gen_whiskey.png']);
  });
  for (const f of backdrops) test(`${f}: painted backdrop is pure grey world`, () => {
    const { px } = readPng(join(root, 'public', 'assets', f));
    let worst = 0; for (let i = 0; i < px.length; i += 4 * 97) worst = Math.max(worst, saturation(px[i], px[i + 1], px[i + 2]));
    expect(worst).toBeLessThan(.02);
  });
  for (const f of sprites) test(`${f}: character / interactable sprite keeps its colour`, () => {
    const { px } = readPng(join(root, 'public', 'assets', f));
    let n = 0, vivid = 0;
    for (let i = 0; i < px.length; i += 4) {
      if (px[i + 3] < 200) continue; n++;
      if (saturation(px[i], px[i + 1], px[i + 2]) > .35) vivid++;
    }
    expect(n).toBeGreaterThan(5000);
    expect({ f, vividShare: vivid / n > .12 }).toEqual({ f, vividShare: true });
  });
});

describe('shipping: only cut sprites, never the source sheets', () => {
  const sheet = (f: string) => /\.(jpe?g|psd|webp)$/i.test(f) || /^gemini-|^gen_color_|_poses\.|^gen_props\./.test(f);
  test('public/ holds no source sheets (Vite copies all of public/ into dist)', () => {
    const walk = (dir: string): string[] => readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(join(dir, e.name)) : [e.name]);
    expect(walk(join(root, 'public')).filter(sheet)).toEqual([]);
  });
  test('dist/assets (when built) holds no source sheets', () => {
    const dir = join(root, 'dist', 'assets'); if (!existsSync(dir)) return;
    expect(readdirSync(dir).filter(sheet)).toEqual([]);
  });
  test('every gen_ / gemini source in art/ and every sprite has provenance in ASSETS.md', () => {
    const doc = readFileSync(join(root, 'ASSETS.md'), 'utf8');
    const files = [...readdirSync(join(root, 'art')), ...readdirSync(join(root, 'public', 'assets'))].filter(f => /^(gen_|gemini-|bully|dog_halo)/.test(f));
    expect(files.length).toBeGreaterThan(15);
    for (const f of files) expect({ f, documented: doc.includes(f) }).toEqual({ f, documented: true });
  });
});
