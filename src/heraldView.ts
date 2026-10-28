// Scene-local canvas between WebGL/film and the arms. DOM contains semantics and rail control only.
import './herald.css';
import { HERALD_BYE, type Briefing } from './herald';
import { screenToStage } from './viewport';

const POSES = { lean: 'gen_herald_lean.png', point: 'gen_herald_point.png', mad: 'gen_herald_mad.png' } as const;
type Pose = keyof typeof POSES;
// Drop the genuine transparent, sheet-free replacements into these slots, then rebuild.
// Glob discovery avoids requesting nonexistent PNGs (and avoids concealing failed art generation).
const replacements = import.meta.glob('/public/assets/gen_herald_nopaper_*.png');
const url = (f: string) => `${import.meta.env.BASE_URL}assets/${f}`;
const escape = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
interface Box { x: number; y: number; w: number; h: number }
interface TextRow { text: string; size: number; y: number; title: boolean }

export function heraldView(layer: HTMLElement, onSkip: () => void) {
  layer.innerHTML = '<canvas class="hd-canvas" aria-hidden="true"></canvas><div class="hd-semantic" role="status" aria-live="polite"></div><button id="heraldSkip" class="hd-skip primary" type="button">ПОНЯЛ ✓<small>ESC · ПРОПУСТИТЬ</small></button>';
  const canvas = layer.querySelector<HTMLCanvasElement>('canvas')!, g = canvas.getContext('2d')!;
  const semantic = layer.querySelector<HTMLElement>('.hd-semantic')!;
  const skip = layer.querySelector<HTMLButtonElement>('#heraldSkip')!;
  // Outside the clipped, size-contained stage: this is an interface rail control, not scene art.
  layer.closest('#app')!.append(skip);
  skip.addEventListener('click', e => { e.stopPropagation(); onSkip(); });
  const images = new Map<Pose, HTMLImageElement>(), masks = new Map<Pose, ImageData>();
  for (const pose of Object.keys(POSES) as Pose[]) {
    const file = `gen_herald_nopaper_${pose}.png`;
    const fresh = `/public/assets/${file}` in replacements;
    const img = new Image(); img.src = url(fresh ? file : POSES[pose]); images.set(pose, img);
    img.decode().then(() => {
      const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
      const ctx = c.getContext('2d', { willReadFrequently: true }); if (!ctx) return;
      ctx.drawImage(img, 0, 0); masks.set(pose, ctx.getImageData(0, 0, c.width, c.height));
    }).catch(() => {});
  }
  let pose: Pose = 'lean', paper: Box | null = null, guy: Box = { x: 0, y: 0, w: 0, h: 0 };
  let key = '', last: Briefing | null = null, torn: { image: HTMLCanvasElement; box: Box; age: number } | null = null;
  let rows: TextRow[] = [], font = 0;
  const sheet = document.createElement('canvas');
  function wrap(ctx: CanvasRenderingContext2D, text: string, width: number): string[] {
    const lines: string[] = []; let line = '';
    for (const word of text.split(/\s+/)) {
      if (ctx.measureText(line ? `${line} ${word}` : word).width > width && line) { lines.push(line); line = ''; }
      // Long tokens are also bounded; never silently clip an unbreakable word.
      for (const char of word) {
        if (ctx.measureText(line + char).width > width && line) { lines.push(line); line = ''; }
        line += char;
      }
      line += ' ';
    }
    if (line.trim()) lines.push(line.trim()); return lines;
  }
  function typeset(ctx: CanvasRenderingContext2D, blocks: { text: string; title: boolean }[], w: number, h: number) {
    const margin = Math.max(8, w * .045), available = w - margin * 2;
    let result: TextRow[] = [], size = Math.min(24, w / 18);
    for (; size >= 6; size -= .25) {
      let y = margin; result = [];
      for (const block of blocks) {
        const fs = block.title ? size * 1.25 : size;
        ctx.font = `900 ${fs}px Georgia, serif`;
        for (const text of wrap(ctx, block.text, available)) { y += fs * 1.16; result.push({ text, size: fs, y, title: block.title }); }
        y += size * .3;
      }
      if (y <= h - margin) break;
    }
    return { rows: result, font: size, margin };
  }
  function sync(b: Briefing | null, paused: boolean) {
    layer.hidden = !b; skip.hidden = !b; last = b;
    if (!b) { key = ''; torn = null; paper = null; return; }
    layer.dataset.phase = b.phase; layer.dataset.paused = String(paused);
    const r = layer.getBoundingClientRect(), w = r.width, h = r.height, dpr = Math.min(devicePixelRatio || 1, 2);
    const bw = Math.round(w * dpr), bh = Math.round(h * dpr);
    if (canvas.width !== bw || canvas.height !== bh) { canvas.width = bw; canvas.height = bh; }
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, w, h);
    pose = b.phase === 'mad' ? 'mad' : b.index % 2 ? 'point' : 'lean';
    // One shared composition transform: the paper's grip is pose-relative, never viewport-fixed.
    const enter = !b.reduced && b.phase === 'enter' ? (1 - Math.min(1, b.t / .7)) * h : 0;
    const leave = !b.reduced && b.phase === 'leave' ? Math.min(1, b.t / 1.1) * h : 0;
    const bob = !b.reduced && b.phase === 'show' ? Math.sin(b.t * 2) * h * .006 : 0;
    guy = { x: -w * .08, y: h * .03 + enter + leave + bob, w: w * .7, h: w * .7 * .9 };
    const img = images.get(pose)!;
    layer.dataset.artGate = img.src.includes('nopaper') ? 'replacement-unreviewed' : 'OPEN-baked-sheet-fallback';
    if (img.complete && img.naturalWidth) g.drawImage(img, guy.x, guy.y, guy.w, guy.h);
    const gripX = guy.x + guy.w * (pose === 'point' ? .62 : .60);
    paper = b.flyer && ['show', 'mad', 'enter'].includes(b.phase) ? { x: gripX, y: guy.y + h * .025, w: w - gripX - w * .025, h: h * .89 } : null;
    const k = `${b.index}|${b.phase}|${w}|${h}`;
    const talk = b.phase === 'mad' ? b.line : b.phase === 'leave' ? HERALD_BYE : '';
    if (k !== key) {
      key = k;
      semantic.innerHTML = b.flyer ? `<h3>${escape(b.flyer.title)}</h3>${b.flyer.lines.map(l => `<p>${escape(l)}</p>`).join('')}<small>${b.index + 1} / ${b.flyers.length} · ударь по листовке →</small><p>${escape(talk)}</p>` : escape(talk);
    }
    if (paper && b.flyer) {
      const s = sheet.getContext('2d')!;
      sheet.width = Math.ceil(paper.w * dpr); sheet.height = Math.ceil(paper.h * dpr); s.scale(dpr, dpr);
      s.fillStyle = '#fff8d6'; s.fillRect(0, 0, paper.w, paper.h);
      s.strokeStyle = '#301909'; s.lineWidth = 3; s.strokeRect(2, 2, paper.w - 4, paper.h - 4);
      s.strokeStyle = '#b38b38'; s.lineWidth = 1; s.strokeRect(5, 5, paper.w - 10, paper.h - 10);
      const layout = typeset(s, [{ text: b.flyer.title, title: true }, ...b.flyer.lines.map(text => ({ text, title: false })), { text: `${b.index + 1} / ${b.flyers.length} · ударь по листовке →`, title: false }], paper.w, paper.h);
      rows = layout.rows; font = layout.font;
      s.textAlign = 'center'; s.textBaseline = 'alphabetic';
      for (const row of rows) { s.fillStyle = row.title ? '#86151c' : '#211207'; s.font = `900 ${row.size}px Georgia, serif`; s.fillText(row.text, paper.w / 2, row.y); }
      g.fillStyle = '#160c0766'; g.fillRect(paper.x + 4, paper.y + 4, paper.w, paper.h);
      g.drawImage(sheet, paper.x, paper.y, paper.w, paper.h);
    }
    if (talk) {
      const box = { x: w * .02, y: h * .025, w: w * .31, h: h * .23 };
      g.fillStyle = '#fff8d6'; g.fillRect(box.x, box.y, box.w, box.h);
      const layout = typeset(g, [{ text: talk, title: true }], box.w, box.h);
      g.textAlign = 'center'; g.fillStyle = '#86151c';
      for (const row of layout.rows) { g.font = `900 ${row.size}px Georgia, serif`; g.fillText(row.text, box.x + box.w / 2, box.y + row.y); }
    }
    if (torn) {
      if (!paused) torn.age = b.phase === 'torn' ? b.t : torn.age + .016;
      const t = torn.age / .85, box = torn.box;
      if (t >= 1 || b.reduced) torn = null;
      else for (const side of [-1, 1]) {
        g.save(); g.globalAlpha = 1 - t; g.translate(box.x + box.w / 2 + side * t * w * .5, box.y + box.h / 2 - t * h * .25); g.rotate(side * t);
        g.beginPath(); g.rect(side < 0 ? -box.w / 2 : 0, -box.h / 2, box.w / 2, box.h); g.clip();
        g.drawImage(torn.image, -box.w / 2, -box.h / 2, box.w, box.h); g.restore();
      }
    }
    // Renderer-owned geometry for acceptance/hit diagnostics, not unrelated DOM rectangles.
    layer.dataset.geometry = JSON.stringify({ paper, guy, font, rows, pose, width: w, height: h, sheetVisible: !!paper });
  }
  function hit(x: number, y: number): 'flyer' | 'herald' | 'none' {
    let result: 'flyer' | 'herald' | 'none' = 'none';
    const p = screenToStage(layer.getBoundingClientRect(), { x, y });
    if (!layer.hidden && p) {
      if (paper && p.x >= paper.x && p.x <= paper.x + paper.w && p.y >= paper.y && p.y <= paper.y + paper.h) result = 'flyer';
      else {
        const mask = masks.get(pose), px = mask && Math.floor((p.x - guy.x) / guy.w * mask.width), py = mask && Math.floor((p.y - guy.y) / guy.h * mask.height);
        if (mask && px !== undefined && py !== undefined && px >= 0 && py >= 0 && px < mask.width && py < mask.height && mask.data[(py * mask.width + px) * 4 + 3] > 60) result = 'herald';
      }
    }
    layer.dataset.hit = result; return result;
  }
  function tear(motion: boolean) {
    if (!paper || !motion || last?.reduced) return;
    const copy = document.createElement('canvas'); copy.width = sheet.width; copy.height = sheet.height; copy.getContext('2d')!.drawImage(sheet, 0, 0);
    torn = { image: copy, box: { ...paper }, age: 0 }; paper = null;
  }
  return { sync, hit, tear };
}
