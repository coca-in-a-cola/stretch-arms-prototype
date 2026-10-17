// First-person rubber-hose arms: pure screen-space geometry (unit-tested) + Canvas 2D inking.
// Two cobalt hoses rise from the bottom edge into a boxing guard; the one on the clicked side
// stretches so the fist centre lands exactly on the click point, wobbles, and snaps back.

import { SLEEVE as PALETTE_SLEEVE } from './palette';

export interface Pt { x: number; y: number }
/** Screen px, y down. `glove` is the fist centre; `ctrl` bends the hose (quadratic bezier shoulder→cuff). */
export interface ArmPose { side: -1 | 1; shoulder: Pt; ctrl: Pt; glove: Pt; r: number; w0: number; w1: number; open: boolean; squash: number }
/** A rectangle the resting glove must stay above when it overlaps horizontally (the on-screen buttons). */
export interface Avoid { left: number; right: number; top: number }
export interface Phases { arrive: number; release: number }

/** Glove radius and hose width for a viewport; never tiny on phones, never huge on desktops. */
export function armMetrics(W: number, H: number) {
  const r = Math.max(34, Math.min(78, Math.min(W * .095, H * .078)));
  return { r, hose: r * 1.02, ink: Math.max(3, r * .09), rim: Math.max(2, r * .05) };
}
/** How far the glove silhouette (fist, thumb, cuff) can reach from its centre, in glove radii. */
export const GLOVE_REACH = 1.45;

export function sideFor(spot: Pt, W: number): -1 | 1 { return spot.x >= W / 2 ? 1 : -1; }

export function restPose(side: -1 | 1, W: number, H: number, avoid?: Avoid | null, bob = 0): ArmPose {
  const { r, hose } = armMetrics(W, H);
  const mx = Math.max(r * 2, W * .12);
  const x = side > 0 ? W - mx : mx;
  let y = H - r * 2.3;
  if (avoid && avoid.right > x - r * GLOVE_REACH && avoid.left < x + r * GLOVE_REACH) y = Math.min(y, avoid.top - r * GLOVE_REACH - 6);
  y = Math.max(y, H * .45) + bob;
  // Shoulder sits below the bottom edge, toward the middle: forearms angle up and out into a guard.
  const sx = Math.min(W - hose, Math.max(hose, x - side * r * 1.5));
  const shoulder = { x: sx, y: H + hose * .7 }, glove = { x, y };
  const ctrl = { x: x + side * r * .55, y: (shoulder.y + y) / 2 + r * .2 };
  return { side, shoulder, ctrl, glove, r, w0: hose, w1: hose * .74, open: false, squash: 0 };
}

const lerp = (a: Pt, b: Pt, t: number): Pt => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
const ease = (v: number) => 1 - (1 - v) ** 3;
const backOut = (v: number) => { const c = 1.9, u = v - 1; return 1 + (c + 1) * u ** 3 + c * u ** 2; };

/**
 * Arm pose at swing phase k (0..1). Between `arrive` and `release` the fist centre is exactly `spot`.
 * `depth` shrinks the glove with distance (1 = arm's length). `grab` opens the glove; `throwing` whips the hose.
 */
export function punchPose(side: -1 | 1, W: number, H: number, spot: Pt, k: number, p: Phases, opts: { depth?: number; grab?: boolean; throwing?: boolean; avoid?: Avoid | null } = {}): ArmPose {
  const rest = restPose(side, W, H, opts.avoid);
  const depth = opts.depth ?? 1, throwing = !!opts.throwing;
  let glove: Pt, reach = 0, curl = 0, squash = 0, open = false;
  if (k < .08) {
    // Anticipation: the fist cocks down and out (a throw winds up much further).
    const a = Math.sin(k / .08 * Math.PI / 2) * (throwing ? 1.8 : 1);
    glove = { x: rest.glove.x + side * rest.r * .25 * a, y: rest.glove.y + rest.r * .45 * a };
    curl = .1 * a; squash = .08 * a;
  } else if (k < p.arrive) {
    const t = (k - .08) / (p.arrive - .08); reach = backOut(t);
    glove = lerp(rest.glove, spot, reach);
    curl = throwing ? .55 * Math.cos(t * Math.PI) : .22 * Math.sin(t * Math.PI) + .05;
    squash = -.12 * Math.sin(t * Math.PI);
    open = !!opts.grab && !throwing;
  } else if (k < p.release) {
    const t = (k - p.arrive) / (p.release - p.arrive); reach = 1;
    glove = { ...spot };
    curl = .07 * Math.sin(t * Math.PI * 5) * (1 - t) + (throwing ? -.3 * (1 - t) : 0);
    squash = .22 * Math.max(0, 1 - t * 3);
    open = !!opts.grab || throwing;
  } else {
    // Snap back with a damped rubbery wobble that ends exactly at rest.
    const t = Math.min(1, (k - p.release) / (1 - p.release)), w = (1 - t) ** 2 * Math.cos(t * Math.PI * 2.5);
    // Overshoot past rest is capped to a quarter glove so the wobble never leaves the screen.
    const f = w < 0 ? Math.max(w, -.25 * rest.r / (Math.hypot(spot.x - rest.glove.x, spot.y - rest.glove.y) || 1)) : w;
    reach = Math.max(0, f); glove = lerp(rest.glove, spot, f);
    curl = -.18 * (1 - t) * Math.sin(t * Math.PI * 3 + .5);
    open = throwing && t < .3;
  }
  const scale = 1 + (Math.min(1.15, Math.max(.6, depth)) - 1) * Math.min(1, Math.max(0, reach));
  const r = rest.r * scale, shoulder = rest.shoulder;
  const dx = glove.x - shoulder.x, dy = glove.y - shoulder.y, len = Math.hypot(dx, dy) || 1;
  const mid = lerp(shoulder, glove, .45), n = { x: -dy / len * side, y: dx / len * side };
  const ctrl = k < .08 ? { x: rest.ctrl.x + n.x * curl * len, y: rest.ctrl.y + n.y * curl * len } : { x: mid.x + n.x * curl * len, y: mid.y + n.y * curl * len };
  return { side, shoulder, ctrl, glove, r, w0: rest.w0, w1: rest.w1 * Math.max(.55, scale), open, squash };
}

/** Axis-aligned bounds of the glove silhouette (used to keep the resting arm on screen). */
export function gloveBounds(a: ArmPose) {
  const e = a.r * GLOVE_REACH;
  return { minX: a.glove.x - e, maxX: a.glove.x + e, minY: a.glove.y - e, maxY: a.glove.y + e };
}

// -------------------------------------------------------------------------------------------------
// Inking (Canvas 2D). Silhouette passes: cream rim → black ink → fills, so the arm reads on any backdrop.
// -------------------------------------------------------------------------------------------------
// Sleeves are coloured (palette.ts): the player's own arm is "active" in a grey world; gloves stay white.
const INK = '#151715', RIM = 'rgba(255,248,226,.92)', SLEEVE = PALETTE_SLEEVE.base, SLEEVE_SHINE = PALETTE_SLEEVE.shine, SLEEVE_DARK = PALETTE_SLEEVE.dark;
const GLOVE = '#fdfaf0', GLOVE_SHADE = '#ddd6c4';

function bezier(a: Pt, c: Pt, b: Pt, t: number): Pt { const u = 1 - t; return { x: u * u * a.x + 2 * u * t * c.x + t * t * b.x, y: u * u * a.y + 2 * u * t * c.y + t * t * b.y }; }
function tangent(a: Pt, c: Pt, b: Pt, t: number): Pt {
  const u = 1 - t, x = 2 * u * (c.x - a.x) + 2 * t * (b.x - c.x), y = 2 * u * (c.y - a.y) + 2 * t * (b.y - c.y), l = Math.hypot(x, y) || 1;
  return { x: x / l, y: y / l };
}
/** Closed outline of a tapered tube along the bezier, with an optional sideways offset band (for the shine). */
function tube(g: CanvasRenderingContext2D, a: Pt, c: Pt, b: Pt, w0: number, w1: number, band?: [number, number]) {
  const N = 24, left: Pt[] = [], right: Pt[] = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = bezier(a, c, b, t), d = tangent(a, c, b, t), w = (w0 + (w1 - w0) * t) / 2, nx = -d.y, ny = d.x;
    const [o0, o1] = band ?? [-1, 1];
    left.push({ x: p.x + nx * w * o1, y: p.y + ny * w * o1 }); right.push({ x: p.x + nx * w * o0, y: p.y + ny * w * o0 });
  }
  g.beginPath(); left.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y));
  for (let i = right.length - 1; i >= 0; i--) g.lineTo(right[i].x, right[i].y);
  g.closePath();
}

/** Glove parts in a local frame: origin = fist centre, −y = toward the spot, unit = r. `line` = a round-capped stroke of that width. */
interface Part { path: (g: CanvasRenderingContext2D) => void; line?: number }
function gloveParts(open: boolean, hand: number): Part[] {
  const ell = (x: number, y: number, rx: number, ry: number, rot = 0): Part => ({ path: g => { g.beginPath(); g.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2); } });
  const finger = (ang: number, len: number, w: number, from = .35): Part => {
    const sx = Math.sin(ang), sy = -Math.cos(ang);
    return { line: w, path: g => { g.beginPath(); g.moveTo(sx * from, sy * from); g.lineTo(sx * (from + len), sy * (from + len)); } };
  };
  if (!open) return [ell(0, .05, .88, .84), ell(0, -.5, .8, .46), ell(hand * .8, .05, .3, .5, hand * .35)];
  return [
    ell(0, .1, .82, .78),
    finger(-.5, .72, .38), finger(-.17, .86, .38), finger(.17, .86, .38), finger(.5, .72, .38),
    finger(hand * 1.35, .55, .36, .45),
  ];
}
const CUFF: Part[] = [{ path: g => {
  g.beginPath(); g.moveTo(-.5, .55); g.lineTo(.5, .55); g.lineTo(.74, 1.02);
  g.ellipse(0, 1.02, .74, .3, 0, 0, Math.PI); g.lineTo(-.5, .55); g.closePath();
} }];
/** Paint parts grown by `extra` (outline passes) or filled. */
function paint(g: CanvasRenderingContext2D, parts: Part[], extra: number, color: string, fill: boolean) {
  g.strokeStyle = color; g.fillStyle = color;
  for (const part of parts) {
    part.path(g);
    if (part.line) { g.lineWidth = part.line + extra * 2; g.stroke(); continue; }
    if (extra > 0) { g.lineWidth = extra * 2; g.stroke(); }
    if (fill) g.fill();
  }
}

export function drawArm(g: CanvasRenderingContext2D, a: ArmPose, ink: number, rim: number) {
  const { shoulder: s, ctrl: c, glove, r, side } = a;
  const d = tangent(s, c, glove, 1), cuff = { x: glove.x + d.x * -r * .95, y: glove.y + d.y * -r * .95 };
  const angle = Math.atan2(d.y, d.x) + Math.PI / 2, hand = -side;
  g.save(); g.lineJoin = 'round'; g.lineCap = 'round';
  // Hose: rim, ink, sleeve fill, underside shade, shine.
  tube(g, s, c, cuff, a.w0, a.w1); g.strokeStyle = RIM; g.lineWidth = (ink + rim) * 2; g.stroke();
  g.strokeStyle = INK; g.lineWidth = ink * 2; g.stroke(); g.fillStyle = SLEEVE; g.fill();
  tube(g, s, c, cuff, a.w0, a.w1, [side > 0 ? .35 : -1, side > 0 ? 1 : -.35]); g.fillStyle = SLEEVE_DARK; g.fill();
  tube(g, s, c, cuff, a.w0, a.w1, side > 0 ? [-.62, -.3] : [.3, .62]); g.fillStyle = SLEEVE_SHINE; g.fill();
  // Glove in its local frame (r units), squashed along the punch axis on impact.
  g.translate(glove.x, glove.y); g.rotate(angle); g.scale(r * (1 + a.squash * .6), r * (1 - a.squash));
  const u = 1 / r, hand_ = gloveParts(a.open, hand), cuffP = CUFF;
  paint(g, [...hand_, ...cuffP], (ink + rim) * u, RIM, false);
  paint(g, hand_, ink * u, INK, false);
  paint(g, hand_, 0, GLOVE, true);
  // Soft underside shade + back-of-glove stitching (three Mickey lines) or palm crease.
  g.save(); hand_[0].path(g); g.clip(); g.fillStyle = GLOVE_SHADE; g.beginPath(); g.ellipse(-hand * .45, .55, .8, .55, 0, 0, Math.PI * 2); g.fill(); g.restore();
  g.strokeStyle = INK; g.lineWidth = ink * u * .55; g.lineCap = 'round';
  if (!a.open) {
    // Curled-finger creases along the top, then the three bold back-of-glove stitches.
    for (const x of [-.32, 0, .32]) { g.beginPath(); g.moveTo(x * 1.05, -.94 + Math.abs(x) * .2); g.quadraticCurveTo(x * .9, -.78, x * .8, -.62); g.stroke(); }
    g.lineWidth = ink * u * .8;
    for (const x of [-.27, 0, .27]) { g.beginPath(); g.moveTo(x, -.22); g.lineTo(x * 1.08, .3); g.stroke(); }
  } else { g.beginPath(); g.arc(0, .2, .38, Math.PI * 1.15, Math.PI * 1.85); g.stroke(); }
  paint(g, cuffP, ink * u, INK, false); paint(g, cuffP, 0, GLOVE, true);
  g.beginPath(); g.moveTo(-.56, .7); g.quadraticCurveTo(0, .82, .56, .7); g.stroke();
  g.restore();
}
