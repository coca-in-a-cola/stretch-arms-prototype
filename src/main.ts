import * as THREE from 'three';
import { Game, readProgress, costOf, type Action, type Kind, type Target, type Outcome } from './game';
import { resolveShot, type Hittable, type Shot, type Vec3 } from './aim';
import { LEVELS, CARD, pose, hittables, cameraFor, type Cover, type CardKind } from './layout';
import './style.css';
import { makeStreet } from './street';
import { reducedMotion, unlockAudio, sound, settingsUi, bindSettings } from './preferences';

const KEY = 'long-arms.progress.v1';
let raw: string | null = null;
try { raw = localStorage.getItem(KEY); } catch { raw = null; }
const game = new Game(readProgress(raw), p => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { game.message = 'Сохранение недоступно в этом браузере.'; } });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="ui"></div>';
const ui = document.querySelector<HTMLDivElement>('#ui')!;
const canvas = document.querySelector<HTMLCanvasElement>('#scene')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.autoClear = false;
renderer.info.autoReset = false;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#d7dbd2');
// Atmospheric perspective: the background layer fades toward the sky colour so depth reads at a glance.
scene.fog = new THREE.Fog('#d7dbd2', 14, 42);
const camera = new THREE.PerspectiveCamera(50, 1, .3, 90);
scene.add(new THREE.HemisphereLight('#fff9e4', '#6f766e', 2.4));
const sun = new THREE.DirectionalLight('#fff5df', 3.0); sun.position.set(-7, 14, 10); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0006; sun.shadow.normalBias = .02;
sun.shadow.camera.left = -16; sun.shadow.camera.right = 16; sun.shadow.camera.top = 16; sun.shadow.camera.bottom = -16;
scene.add(sun);
const asset = (name: string) => import.meta.env.BASE_URL + 'assets/' + name;

// -------------------------------------------------------------------------------------------------
// SCENERY. Solid faces are pushed back with polygonOffset so ink edge lines and decals never z-fight.
// -------------------------------------------------------------------------------------------------
const ink = new THREE.LineBasicMaterial({ color: '#202320' });
const materials = new Map<string, THREE.MeshStandardMaterial>();
function solid(color: string) {
  let m = materials.get(color);
  if (!m) { m = new THREE.MeshStandardMaterial({ color, roughness: .9, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }); materials.set(color, m); }
  return m;
}
function block(parent: THREE.Object3D, w: number, h: number, d: number, color: string, x: number, y: number, z: number, edges = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), solid(color));
  mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh);
  if (edges) mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry), ink));
  return mesh;
}
const center = (c: Cover) => new THREE.Vector3((c.min.x + c.max.x) / 2, (c.min.y + c.max.y) / 2, (c.min.z + c.max.z) / 2);
const size = (c: Cover) => new THREE.Vector3(c.max.x - c.min.x, c.max.y - c.min.y, c.max.z - c.min.z);

const coverMeshes = new Map<string, THREE.Object3D>();
function buildCover(parent: THREE.Object3D, c: Cover) {
  const g = new THREE.Group(); const p = center(c), s = size(c);
  g.position.set(p.x, c.min.y, p.z); parent.add(g); coverMeshes.set(c.id, g);
  if (c.look === 'barrel') {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(s.x / 2, s.x / 2 * .94, s.y, 20), solid(c.color)); body.position.y = s.y / 2; body.castShadow = body.receiveShadow = true; g.add(body);
    for (const k of [.18, .82]) { const hoop = new THREE.Mesh(new THREE.CylinderGeometry(s.x / 2 + .018, s.x / 2 + .018, .07, 20, 1, true), solid('#2a2e2a')); hoop.position.y = s.y * k; g.add(hoop); }
    const lid = new THREE.Mesh(new THREE.CircleGeometry(s.x / 2 * .9, 20), solid('#1f2422')); lid.rotation.x = -Math.PI / 2; lid.position.y = s.y + .004; g.add(lid);
  } else if (c.look === 'crate' || c.look === 'pallet') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    const slats = c.look === 'crate' ? 3 : 5;
    for (let i = 0; i < slats; i++) block(g, s.x * .96, .05, .03, '#7b5532', 0, s.y * (i + .5) / slats, s.z / 2 + .02, false);
  } else if (c.look === 'dumpster') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    block(g, s.x + .08, .09, s.z + .08, '#2b4f39', 0, s.y + .045, 0);
    block(g, s.x * .8, .16, .03, '#f1e7c3', 0, s.y * .55, s.z / 2 + .02, false);
  } else if (c.look === 'van') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    block(g, .9, .6, .03, '#2d3a40', s.x / 2 - .6, s.y * .72, s.z / 2 + .02, false);
    block(g, s.x * .55, .2, .03, '#f359a4', -.4, s.y * .38, s.z / 2 + .02, false);
    for (const wx of [-s.x / 2 + .55, s.x / 2 - .55]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.34, .34, .25, 16), solid('#1f2321')); wheel.rotation.x = Math.PI / 2; wheel.position.set(wx, .09 - c.min.y + .25, s.z / 2 - .1); g.add(wheel); }
  } else if (c.look === 'barrier') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    for (let i = 0; i < 4; i++) block(g, .32, s.y * .7, .03, '#e55a3a', -s.x / 2 + .35 + i * .6, s.y * .5, s.z / 2 + .02, false);
  } else if (c.look === 'interior') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0, false);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(s.x * .5, s.y * .4), new THREE.MeshBasicMaterial({ color: '#f7d58a', fog: true }));
    glow.position.set(s.x * .18, s.y * .62, s.z / 2 + .01); g.add(glow);
  } else {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0, c.look !== 'wall');
  }
}

/** Window trims sit 4cm proud of the wall face (never coplanar) and only frame the openings. */
function trims(parent: THREE.Object3D, covers: Cover[]) {
  const walls = covers.filter(c => c.look === 'wall'); if (!walls.length) return;
  const front = walls[0].max.z + .04;
  for (const room of covers.filter(c => c.look === 'interior')) {
    const x0 = room.min.x + .5, x1 = room.max.x - .5, y0 = room.min.y + 1.2, y1 = room.max.y - .6;
    block(parent, x1 - x0 + .3, .14, .1, '#efe7cc', (x0 + x1) / 2, y0 - .07, front);
    block(parent, x1 - x0 + .3, .14, .1, '#efe7cc', (x0 + x1) / 2, y1 + .07, front);
    for (const x of [x0 - .08, x1 + .08]) block(parent, .14, y1 - y0, .1, '#efe7cc', x, (y0 + y1) / 2, front);
  }
}

/** Backdrop meshes become 'scenery' hittables: the fist stops on them but that is still a whiff. */
function sceneryOf(group: THREE.Object3D, skip: Set<THREE.Object3D>): Hittable[] {
  const out: Hittable[] = []; let n = 0; group.updateMatrixWorld(true);
  group.traverse(o => {
    if (!(o instanceof THREE.Mesh) || skip.has(o)) return;
    const b = new THREE.Box3().setFromObject(o);
    if (b.max.y - b.min.y < .5) return;
    out.push({ id: 'scenery-' + n++, kind: 'scenery', min: b.min.clone(), max: b.max.clone() });
  });
  return out;
}

function courtyard() {
  const g = new THREE.Group();
  block(g, 60, .25, 60, '#a7aaa0', 0, -.125, -10, false);
  block(g, 12, .02, 9, '#bdbdb0', 0, .01, 2.5, false);
  for (const side of [-1, 1]) {
    block(g, 4, 9, 16, side < 0 ? '#a9afa5' : '#bcc0b4', side * 9.5, 4.5, -2);
    for (let y = 2; y < 8; y += 2.6) for (let z = -8; z < 5; z += 3.2) block(g, .1, 1.5, 1.1, '#59675f', side * 7.47, y, z);
  }
  block(g, 26, 2, .3, '#9da497', 0, 10, -9);
  // Clothesline across the mid-ground: overlapping laundry cards are a strong parallax cue.
  block(g, .1, 4.6, .1, '#596358', -6.5, 2.3, -4.5); block(g, .1, 4.6, .1, '#596358', 6.5, 2.3, -4.5);
  const line = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, 13, 4), solid('#2b2f2b')); line.rotation.z = Math.PI / 2; line.position.set(0, 4.45, -4.5); g.add(line);
  ['#f359a4', '#c7f653', '#f4f1e8', '#6fb6c6', '#f6c453'].forEach((color, i) => {
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(.9, 1.1), new THREE.MeshStandardMaterial({ color, side: THREE.DoubleSide, roughness: 1 }));
    cloth.position.set(-4.6 + i * 2.2, 3.85, -4.5 + (i % 2) * .02); cloth.rotation.z = (i % 2 ? .05 : -.04); cloth.castShadow = true; g.add(cloth);
    cloth.userData.sway = i;
  });
  block(g, .16, 5.6, .16, '#596358', -5.4, 2.8, -6); const lamp = new THREE.Mesh(new THREE.SphereGeometry(.28, 14, 10), new THREE.MeshBasicMaterial({ color: '#f7ffe0' })); lamp.position.set(-5.4, 5.7, -6); g.add(lamp);
  return g;
}

const signs: THREE.CanvasTexture[] = [];
const levelGroups: Record<number, THREE.Group> = {};
const levelScenery: Record<number, Hittable[]> = {};
const swaying: THREE.Object3D[] = [];
for (const level of [1, 2]) {
  const group = new THREE.Group(); scene.add(group); levelGroups[level] = group;
  const backdrop = level === 1 ? courtyard() : makeStreet(); group.add(backdrop);
  backdrop.traverse(o => { if (o.userData.sway !== undefined) swaying.push(o); });
  const layout = LEVELS[level];
  for (const c of layout.covers) buildCover(group, c);
  trims(group, layout.covers);
  levelScenery[level] = sceneryOf(backdrop, new Set());
}

// -------------------------------------------------------------------------------------------------
// TARGET CARDS (2D art on depth-placed cards; alpha-tested + depth-written so overlap is exact).
// -------------------------------------------------------------------------------------------------
function art(kind: Kind | 'sign', level = 1): THREE.CanvasTexture {
  const c = document.createElement('canvas'); c.width = 512; c.height = 640;
  const g = c.getContext('2d')!; g.lineJoin = 'round'; g.lineCap = 'round'; g.strokeStyle = '#202522'; g.lineWidth = 12;
  function ellipse(x: number, y: number, rx: number, ry: number, color: string) { g.fillStyle = color; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); g.fill(); g.stroke(); }
  function path(points: number[][], color: string) { g.fillStyle = color; g.beginPath(); points.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); g.fill(); g.stroke(); }
  if (kind === 'enemy') {
    path([[130, 420], [120, 591], [208, 591], [240, 450], [277, 590], [368, 590], [355, 410]], '#3e4741');
    path([[157, 232], [100, 252], [42, 377], [100, 411], [155, 330], [148, 465], [365, 465], [354, 327], [405, 386], [465, 347], [392, 250], [333, 229]], '#b6d451');
    ellipse(259, 167, 91, 105, '#f1cbae'); path([[165, 137], [177, 69], [254, 43], [333, 76], [353, 126], [285, 103], [236, 122]], '#444b43');
    ellipse(221, 180, 6, 9, '#222722'); ellipse(297, 179, 6, 9, '#222722');
  } else if (kind === 'dog') {
    g.strokeStyle = '#d3ed64'; g.lineWidth = 15; g.beginPath(); g.ellipse(260, 95, 88, 26, -.15, 0, Math.PI * 2); g.stroke(); g.strokeStyle = '#222722'; g.lineWidth = 12;
    ellipse(253, 420, 118, 150, '#e7ddbd'); ellipse(260, 262, 108, 100, '#e7ddbd'); ellipse(263, 280, 28, 19, '#262e26');
  } else if (kind === 'bottle') {
    path([[210, 103], [300, 103], [302, 235], [354, 296], [354, 600], [160, 600], [160, 297], [209, 237]], '#94be6a');
    path([[207, 103], [207, 70], [306, 70], [306, 105]], '#f7c56d');
    path([[163, 333], [350, 333], [350, 462], [163, 462]], '#eee9d3');
    g.fillStyle = '#252d24'; g.font = 'bold 37px Arial'; g.fillText('КВАС', 195, 410);
  } else if (kind === 'barrel') {
    path([[133, 178], [379, 178], [402, 600], [111, 600]], '#d63434');
    ellipse(256, 180, 123, 35, '#f05050');
    path([[128, 260], [385, 260], [389, 293], [125, 293]], '#272d28'); path([[117, 470], [396, 470], [399, 504], [114, 504]], '#272d28');
    g.fillStyle = '#f9d846'; g.fillRect(145, 330, 222, 70); g.font = '900 46px Arial'; g.fillStyle = '#263126'; g.fillText('БАМ!', 200, 382);
  } else {
    path([[15, 120], [495, 120], [495, 480], [15, 480]], level === 1 ? '#c7f653' : '#f359a4'); g.fillStyle = '#222722'; g.textAlign = 'center'; g.font = '900 75px Arial'; g.fillText(level === 1 ? 'ДВОР' : 'ШУМ!', 256, 270); g.fillText(level === 1 ? '№ 01' : '№ 02', 256, 370);
  }
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}
const loader = new THREE.TextureLoader();
function cardTexture(file: string, fallback: Kind) {
  const tex = art(fallback) as THREE.Texture;
  loader.load(asset(file), loaded => { tex.image = loaded.image; tex.needsUpdate = true; }, undefined, () => { /* keep procedural card */ });
  return tex;
}
const textures: Record<CardKind, THREE.Texture> = { enemy: cardTexture('bully.png', 'enemy'), dog: cardTexture('dog_halo.png', 'dog'), bottle: art('bottle'), barrel: art('barrel') };
for (const t of Object.values(textures)) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; }
signs.push(art('sign'), art('sign', 2));
const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.25), new THREE.MeshBasicMaterial({ map: signs[0], alphaTest: .5 }));
sign.position.set(-6.3, 2.5, -8.8); levelGroups[1].add(sign);

function ringTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!;
  g.lineWidth = 20; g.strokeStyle = '#202320'; g.beginPath(); g.arc(64, 64, 44, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 11; g.strokeStyle = '#f45d96'; g.stroke(); g.fillStyle = '#202320'; g.font = '900 54px Arial'; g.textAlign = 'center'; g.fillText('!', 64, 83);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const ring = ringTexture();
const blob = new THREE.MeshBasicMaterial({ color: '#253022', transparent: true, opacity: .28, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });

interface CardView { group: THREE.Group; card: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>; flash: number; }
const targetGroup = new THREE.Group(); scene.add(targetGroup);
const views = new Map<number, CardView>();
const dying: { view: CardView; age: number; spin: number }[] = [];
const knocked = new Set<number>();

function makeView(t: Target): CardView {
  const c = CARD[t.kind]; const group = new THREE.Group();
  const geometry = new THREE.PlaneGeometry(c.w, c.h); geometry.translate(0, c.h / 2, 0);
  const material = new THREE.MeshBasicMaterial({ map: textures[t.kind], alphaTest: .5, side: THREE.DoubleSide });
  const card = new THREE.Mesh(geometry, material); card.castShadow = true;
  card.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: textures[t.kind], alphaTest: .5 });
  group.add(card);
  if (t.y <= .01) { const shadow = new THREE.Mesh(new THREE.CircleGeometry(c.w * .36, 24), blob); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .035; shadow.scale.y = .45; shadow.renderOrder = 1; group.add(shadow); }
  if (t.kind === 'enemy') { const warning = new THREE.Sprite(new THREE.SpriteMaterial({ map: ring, depthWrite: false })); warning.position.set(0, c.h + .3, 0); warning.name = 'warning'; group.add(warning); }
  targetGroup.add(group);
  const view = { group, card, flash: 0 }; views.set(t.id, view); return view;
}
function disposeView(v: CardView) { targetGroup.remove(v.group); v.group.traverse(o => { if (o instanceof THREE.Mesh && o.geometry) o.geometry.dispose(); }); v.card.material.dispose(); }

const menuTargets: Target[] = [
  { id: -1, kind: 'enemy', x: -2.45, y: 0, z: 2.25, age: 1, deadline: 6 },
  { id: -2, kind: 'dog', x: .45, y: 0, z: -.85, age: 1, deadline: Infinity },
  { id: -3, kind: 'enemy', x: .95, y: 0, z: -2.35, age: 1, deadline: 6 },
];
const visibleTargets = () => game.mode === 'menu' || game.mode === 'select' ? menuTargets : game.targets;

function syncTargets(time: number) {
  const visible = visibleTargets(); const motion = !reducedMotion();
  for (const [id, view] of views) if (!visible.some(t => t.id === id)) {
    views.delete(id);
    if (knocked.delete(id) && motion) dying.push({ view, age: 0, spin: Math.random() < .5 ? -1 : 1 }); else disposeView(view);
  }
  for (const t of visible) {
    const view = views.get(t.id) ?? makeView(t);
    const p = pose(game.level, t, motion);
    view.group.position.set(p.x, p.y, p.z);
    const breathe = motion ? Math.sin(t.age * 3.4 + t.id) * .025 : 0;
    view.card.scale.set(1 - breathe * .5 + view.flash * .12, 1 + breathe - view.flash * .1, 1);
    view.card.rotation.z = motion ? Math.sin(t.age * 2.2 + t.id) * .02 : 0;
    view.card.material.color.setRGB(1, 1 - view.flash * .55, 1 - view.flash * .45);
    view.flash = Math.max(0, view.flash - .08);
    const warning = view.group.getObjectByName('warning');
    if (warning) {
      const urgency = t.age / t.deadline; warning.visible = urgency > .48 && game.mode !== 'menu' && game.mode !== 'select';
      warning.scale.setScalar(.35 + urgency * .3 + (motion ? Math.sin(time * 14) * .03 : 0));
    }
  }
}

// -------------------------------------------------------------------------------------------------
// 2D POV ARM OVERLAY (grease-pencil frames + stretchy ink hose) rendered in screen space on top.
// The glove always stops at the front-most surface along the aim ray, so nothing can be in front of it.
// -------------------------------------------------------------------------------------------------
const hud = new THREE.Scene();
const hudCamera = new THREE.OrthographicCamera(0, 1, 1, 0, -10, 10);
function spriteFrom(file: string, crop: [number, number, number, number], anchor: [number, number]) {
  const [sx, sy, sw, sh] = crop; const c = document.createElement('canvas'); c.width = sw; c.height = sh;
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const img = new Image(); img.onload = () => { c.getContext('2d')!.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh); tex.needsUpdate = true; }; img.src = asset(file);
  // Unit-height quad whose origin is the anchor pixel (shoulder edge / cuff opening).
  const geometry = new THREE.PlaneGeometry(sw / sh, 1); geometry.translate((.5 - (anchor[0] - sx) / sw) * sw / sh, ((anchor[1] - sy) / sh - .5), 0);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }));
  hud.add(mesh); return mesh;
}
// Rest pose anchored at its bottom-right corner; flight glove anchored at the cuff, art angle ≈ 48°/52°.
const restArm = spriteFrom('pov_windup.png', [212, 212, 300, 268], [512, 480]);
const recoilArm = spriteFrom('pov_recoil.png', [28, 200, 450, 280], [478, 480]);
const flightGlove = spriteFrom('pov_thrust.png', [200, 128, 212, 165], [276, 236]);
const impactGlove = spriteFrom('pov_impact.png', [100, 64, 380, 380], [189, 288]);
const GLOVE_ANGLE = { flight: 48 * Math.PI / 180, impact: 52 * Math.PI / 180 };

const HOSE_SEGMENTS = 28;
function ribbon(color: string, order: number) {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array((HOSE_SEGMENTS + 1) * 2 * 3), 3));
  const index: number[] = []; for (let i = 0; i < HOSE_SEGMENTS; i++) { const a = i * 2; index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  geometry.setIndex(index);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, depthTest: false, depthWrite: false, transparent: true }));
  mesh.renderOrder = order; mesh.frustumCulled = false; hud.add(mesh); return mesh;
}
const hoseInk = ribbon('#151715', 1), hoseFill = ribbon('#898989', 2), hoseShine = ribbon('#b3b3ad', 3);
const speedLines = [ribbon('#151715', 1), ribbon('#151715', 1)];
flightGlove.renderOrder = 4; impactGlove.renderOrder = 5; restArm.renderOrder = 6; recoilArm.renderOrder = 6;
const heldSprite = new THREE.Mesh(new THREE.PlaneGeometry(CARD.bottle.w / CARD.bottle.h, 1), new THREE.MeshBasicMaterial({ map: textures.bottle, transparent: true, depthTest: false, depthWrite: false }));
heldSprite.renderOrder = 7; hud.add(heldSprite);

function setRibbon(mesh: THREE.Mesh, a: THREE.Vector2, ctrl: THREE.Vector2, b: THREE.Vector2, w0: number, w1: number, shift = 0) {
  const pos = mesh.geometry.getAttribute('position') as THREE.BufferAttribute; const p = new THREE.Vector2(), tan = new THREE.Vector2();
  for (let i = 0; i <= HOSE_SEGMENTS; i++) {
    const t = i / HOSE_SEGMENTS, u = 1 - t;
    p.set(u * u * a.x + 2 * u * t * ctrl.x + t * t * b.x, u * u * a.y + 2 * u * t * ctrl.y + t * t * b.y);
    tan.set(2 * u * (ctrl.x - a.x) + 2 * t * (b.x - ctrl.x), 2 * u * (ctrl.y - a.y) + 2 * t * (b.y - ctrl.y)).normalize();
    const nx = -tan.y, ny = tan.x, w = (w0 + (w1 - w0) * t) / 2, o = shift * w * 2;
    pos.setXYZ(i * 2, p.x + nx * (w + o), p.y + ny * (w + o), 0); pos.setXYZ(i * 2 + 1, p.x - nx * (w - o), p.y - ny * (w - o), 0);
  }
  pos.needsUpdate = true;
}

/** Comic impact bursts per outcome, procedurally inked to match the grease-pencil line weight. */
function burstTexture(word: string, fill: string, accent: string, spikes = 12) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d')!;
  g.translate(128, 128); g.lineJoin = 'round';
  g.beginPath(); for (let i = 0; i <= spikes * 2; i++) { const r = i % 2 ? 62 : 118 - (i % 4) * 9, a = i / (spikes * 2) * Math.PI * 2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fillStyle = fill; g.fill(); g.lineWidth = 9; g.strokeStyle = '#151715'; g.stroke();
  g.beginPath(); for (let i = 0; i <= spikes * 2; i++) { const r = i % 2 ? 36 : 70, a = i / (spikes * 2) * Math.PI * 2 + .2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fillStyle = accent; g.fill();
  g.rotate(-.12); g.font = '900 46px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineWidth = 8; g.strokeStyle = '#151715'; g.strokeText(word, 0, 2); g.fillStyle = '#fffbe8'; g.fillText(word, 0, 2);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const bursts: Record<string, THREE.Texture> = {
  hit: burstTexture('БАМ!', '#fff6d8', '#f359a4'), throw: burstTexture('ХРЯСЬ!', '#fff6d8', '#c7f653'),
  protected: burstTexture('АЙ!', '#ffd3d3', '#e2324e', 9), cover: burstTexture('ТУК!', '#e9dcc0', '#9c7a54', 8),
  smash: burstTexture('ДЗЫНЬ!', '#fff6d8', '#f6c453', 14), miss: burstTexture('ВЖУХ', '#eef0ea', '#b9c0b5', 7),
};
const burstMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: bursts.hit, transparent: true, depthTest: false, depthWrite: false }));
burstMesh.renderOrder = 3; hud.add(burstMesh);

// -------------------------------------------------------------------------------------------------
// FREE AIM: the strike goes exactly where the pointer is. No magnetism, no snapping.
// -------------------------------------------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(0, 0);
let lastMode = '';
let lastHp = game.hp;
const DURATION = .42, ARRIVE = .36, RELEASE = .62;
interface Swing { action: Action; throwing: boolean; ray: { origin: Vec3; direction: Vec3 }; shot: Shot; phase: number; resolved: boolean; outcome?: Outcome; held: CardKind | null; staminaBefore: number; staminaAfter: number; }
let swing: Swing | null = null;
let shake = 0, hitstop = 0, timeScale = 1;
const strikes: { action: Action; outcome: Outcome; kind: string; id: number | string | null; staminaBefore: number; staminaAfter: number }[] = [];

function resize() {
  renderer.setSize(innerWidth, innerHeight);
  const rig = cameraFor(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.fov = rig.fov; camera.updateProjectionMatrix();
  camera.position.set(rig.position.x, rig.position.y, rig.position.z); camera.lookAt(rig.look.x, rig.look.y, rig.look.z);
  if (game.mode === 'menu' || game.mode === 'select') { camera.position.x -= innerWidth < 650 ? 0 : 1.2; camera.lookAt(rig.look.x - (innerWidth < 650 ? 0 : 1.8), rig.look.y, rig.look.z); }
  camera.updateMatrixWorld();
  hudCamera.right = innerWidth; hudCamera.top = innerHeight; hudCamera.updateProjectionMatrix();
}
addEventListener('resize', resize);

function updateCrosshair() {
  const crosshair = document.querySelector<HTMLElement>('.crosshair');
  if (crosshair) { crosshair.style.left = (pointer.x + 1) * 50 + '%'; crosshair.style.top = (1 - pointer.y) * 50 + '%'; }
}
const motion = () => !reducedMotion();
function currentHittables() { return hittables(game.level, game.targets, motion(), levelScenery[game.level]); }
function aimRay(ndc: THREE.Vector2) {
  raycaster.setFromCamera(ndc, camera);
  const { origin, direction } = raycaster.ray;
  return { origin: { x: origin.x, y: origin.y, z: origin.z }, direction: { x: direction.x, y: direction.y, z: direction.z } };
}
const shotAt = (ndc: THREE.Vector2) => { const ray = aimRay(ndc); return resolveShot(ray.origin, ray.direction, currentHittables()); };

function perform(action: Action) {
  if (game.mode !== 'play') return;
  unlockAudio();
  if (swing && !swing.resolved) return; // one fist in flight at a time
  const throwing = action === 'grab' && game.held !== null;
  const held = game.held, staminaBefore = game.stamina;
  if (!game.spend(action)) { updateHud(); sound('ui'); return; }
  const ray = aimRay(pointer);
  swing = { action, throwing, ray, shot: resolveShot(ray.origin, ray.direction, currentHittables()), phase: 0, resolved: false, held, staminaBefore, staminaAfter: game.stamina };
  if (!motion()) land(swing);
  updateHud();
}

/** Arrival: re-cast the same ray against the scene as it is *now* (targets keep moving while the fist flies). */
function land(s: Swing) {
  s.resolved = true;
  s.shot = resolveShot(s.ray.origin, s.ray.direction, currentHittables());
  const id = typeof s.shot.id === 'number' ? s.shot.id : undefined;
  const res = game.resolve(s.action, { kind: s.shot.kind, id: s.shot.id });
  s.outcome = res;
  strikes.push({ action: s.action, outcome: res, kind: s.shot.kind, id: s.shot.id ?? null, staminaBefore: s.staminaBefore, staminaAfter: s.staminaAfter }); if (strikes.length > 20) strikes.shift();
  if (res === 'hit' || res === 'throw' || res === 'smash') { if (id !== undefined) knocked.add(id); sound(res === 'smash' ? 'grab' : res); }
  else if (res === 'grab') sound('grab');
  else sound('miss');
  if (id !== undefined) { const v = views.get(id); if (v) v.flash = 1; }
  if (res === 'cover' && typeof s.shot.id === 'string') { const c = coverMeshes.get(s.shot.id); if (c) c.userData.wobble = 1; }
  const strong = res === 'hit' || res === 'throw' || res === 'protected';
  if (motion()) { shake = strong ? .16 : res === 'cover' || res === 'smash' ? .08 : .02; hitstop = strong ? .07 : res === 'cover' ? .04 : 0; }
  syncTargets(runtime); renderUi();
}

canvas.addEventListener('pointermove', e => { pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); updateCrosshair(); });
canvas.addEventListener('pointerdown', e => {
  if (game.mode !== 'play') return;
  pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  updateCrosshair();
  if (e.pointerType === 'touch') { game.message = 'Прицел стоит. Жми «Удар» или «Хватай».'; updateHud(); }
  else perform(e.button === 2 ? 'grab' : 'punch');
});
canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('keydown', e => {
  if (e.code === 'Escape' && !document.hidden) { game.pause(); renderUi(); }
  if ((e.code === 'Space' || e.code === 'KeyE') && !(e.target instanceof HTMLButtonElement)) { e.preventDefault(); if (!e.repeat) perform(e.code === 'Space' ? 'punch' : 'grab'); }
});
function suspendPage() { game.suspend(); renderUi(); }
document.addEventListener('visibilitychange', () => { if (document.hidden) suspendPage(); });
document.addEventListener('freeze', suspendPage);
addEventListener('pagehide', suspendPage);

function button(id: string, handler: () => void) { document.getElementById(id)?.addEventListener('click', () => { unlockAudio(); sound('ui'); handler(); }); }
function chrome() { return '<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'; }

function renderUi() {
  const mode = game.mode;
  if (mode !== lastMode) { lastMode = mode; resize(); }
  sign.material.map = signs[game.level - 1];
  sun.color.set(game.level === 1 ? '#fff5df' : '#e0e9ff');
  levelGroups[1].visible = game.level === 1; levelGroups[2].visible = game.level === 2;
  app.dataset.mode = mode; app.dataset.level = String(game.level);
  if (mode === 'menu') {
    ui.innerHTML = chrome() + '<section class="panel"><div class="eyebrow">Карманный дворовый экшен / 01</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Большой размах в маленьком дворе.<br>Утихомирь задир. Пса не трогай.</p><div class="buttons"><button id="start" class="primary">ВО ДВОР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>ДВА ДВОРА · ОДНА ПАРА РУК</span><span>РЕКОРД: ' + game.progress.best + ' / СДЕЛАНО ИЗ КАРТОНА И ХАРАКТЕРА</span></div>';
    button('start', () => { game.mode = 'select'; renderUi(); });
    button('how', () => {
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься: никакого автоприцела. Бочки, ящики и забор закрывают задир — бей, когда высунутся. Промах тоже тратит силы.</p><p>ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай в задиру. Розовое кольцо — задира скоро ударит. Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>';
      button('close', renderUi);
    });
  } else if (mode === 'select') {
    ui.innerHTML = chrome() + '<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>ЗНАКОМЫЕ<br>ВСЁ ДВОРЫ.</h2><div class="levels"><button id="level1" class="primary level"><span>01 / ТИХИЙ ДВОР<br><small>9 задир · мягкий разогрев</small></span><b>↗</b></button><button id="level2" class="secondary level" ' + (game.progress.unlocked < 2 ? 'disabled' : '') + '><span>02 / ШУМНЫЙ ПЕРЕУЛОК<br><small>' + (game.progress.unlocked < 2 ? 'Сначала наведи порядок в первом дворе' : '14 задир · держи темп') + '</small></span><b>' + (game.progress.unlocked < 2 ? '⊗' : '↗') + '</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>';
    button('level1', () => { game.start(1); renderUi(); });
    button('level2', () => { game.start(2); renderUi(); });
    button('back', () => { game.mode = 'menu'; renderUi(); });
  } else {
    ui.innerHTML = '<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div><div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';
    button('punch', () => perform('punch'));
    button('grab', () => perform('grab'));
    button('pause', () => { game.pause(); renderUi(); });
    if (mode === 'pause' || mode === 'result') {
      const result = mode === 'result';
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">' + (result ? (game.won ? 'ДВОР В ПОРЯДКЕ' : 'БЫВАЕТ И ТАК') : 'РУКИ НА ПЕРЕРЫВЕ') + '</span><h2>' + (result ? (game.won ? 'КРАСИВО<br>РАЗОБРАЛСЯ!' : 'НЕ ТОТ<br>РАЗМАХ.') : 'ВЫДОХНИ.<br>ДВОР ПОДОЖДЁТ.') + '</h2><p>' + (result ? 'Счёт: <b>' + game.score + '</b> · Рекорд: ' + game.progress.best + (game.won ? '<br>Шумный переулок открыт. Есть ещё силы?' : '<br>Ещё попытка — все сердца снова с тобой.') : 'Время остановилось. Ни один задира не ударит исподтишка.') + '</p><div class="buttons"><button id="resume" class="primary">' + (result ? 'ЕЩЁ РАЗ ↗' : 'ПРОДОЛЖИТЬ →') + '</button><button id="select" class="secondary">ВЫБОР ДВОРА</button></div></section>';
      button('resume', () => { if (result) game.start(game.level); else game.pause(); renderUi(); });
      button('select', () => { game.mode = 'select'; renderUi(); });
    }
    updateHud();
  }
  syncTargets(runtime);
  if (mode !== 'play') { ui.insertAdjacentHTML('beforeend', settingsUi()); bindSettings(renderUi); }
}

function toScreen(p: Vec3) { const v = new THREE.Vector3(p.x, p.y, p.z).project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight }; }
/**
 * A screen point that free-aim would actually resolve to this target right now (hitbox sampled top-down,
 * occlusion respected). Published for accessibility tooling and tests; null when fully behind cover.
 */
function clickablePoint(t: Target) {
  const c = CARD[t.kind]; const p = pose(game.level, t, motion()); const [l, r, b, tp] = c.inset;
  for (const fy of [.8, .65, .9, .5, .35]) for (const fx of [.5, .38, .62]) {
    const world = { x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z };
    const s = toScreen(world); const shot = shotAt(new THREE.Vector2(s.x / innerWidth * 2 - 1, 1 - s.y / innerHeight * 2));
    if (shot.id === t.id) return { x: Math.round(s.x), y: Math.round(s.y) };
  }
  return null;
}

let lastAim = '';
function updateHud() {
  const enemies = game.targets.filter(t => t.kind === 'enemy');
  const labels = enemies.map(t => (t.x < -.5 ? 'слева' : t.x > .5 ? 'справа' : 'в центре') + (t.layer === 'foreground' ? ' (за укрытием рядом)' : t.layer === 'background' ? ' (в окне)' : ' (за забором)'));
  canvas.setAttribute('aria-label', `Уровень ${game.level}. Задиры: ${labels.join(', ') || 'нет'}. Наведи прицел, затем нажми Удар.`);
  const aim = JSON.stringify(game.mode === 'play' ? game.targets.map(t => ({ id: t.id, kind: t.kind, layer: t.layer, at: t.age >= .4 ? clickablePoint(t) : null })) : []);
  if (aim !== lastAim) { lastAim = aim; canvas.dataset.aim = aim; }
  const set = (id: string, text: string) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set('hearts', '♥'.repeat(Math.max(0, game.hp)) + '♡'.repeat(5 - Math.max(0, game.hp)));
  set('stamina', Math.floor(game.stamina) + '');
  set('score', game.score.toString().padStart(5, '0'));
  set('combo', game.combo > 1 ? 'КОМБО ×' + game.combo : 'ДАЙ ИМ РАЗМАХ');
  set('progress', `ДВОР 0${game.level} / ${game.defeated} ИЗ ${game.goal} ЗАДИР`);
  set('message', game.message);
  const energy = document.getElementById('energy'); if (energy) energy.style.width = game.stamina + '%';
  const grab = document.getElementById('grab'); if (grab) grab.innerHTML = game.held ? 'БРОСАЙ ↗<small>В ЗАДИРУ · ' + costOf('grab', true) + ' СИЛ</small>' : 'ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small>';
}

const ease = (v: number) => 1 - (1 - v) ** 3;
function drawArm(time: number) {
  const W = innerWidth, H = innerHeight, unit = Math.min(W, H);
  const show = game.mode === 'play' || game.mode === 'pause';
  const restSize = unit * (W < 650 ? .34 : .36);
  const bob = motion() ? Math.sin(time * 2.4) * unit * .008 : 0;
  const shoulder = new THREE.Vector2(W - restSize * .32, -restSize * .1);
  for (const m of [restArm, recoilArm, flightGlove, impactGlove, hoseInk, hoseFill, hoseShine, burstMesh, heldSprite, ...speedLines]) m.visible = false;
  if (!show) return;
  const s = swing;
  const k = s ? s.phase : 1;
  if (!s || k >= .97) {
    restArm.visible = true; restArm.scale.setScalar(restSize); restArm.position.set(W + restSize * .02, bob - restSize * .03, 0); restArm.rotation.z = 0;
  } else if (k < .08) {
    // Anticipation: the rest arm cocks back before the rubber launch.
    const a = k / .08; restArm.visible = true; restArm.scale.setScalar(restSize * (1 + a * .06)); restArm.position.set(W + restSize * (.02 + a * .08), -restSize * (.03 + a * .1), 0); restArm.rotation.z = -a * .08;
  } else if (k > .84) {
    const a = (k - .84) / .13; recoilArm.visible = true; recoilArm.scale.setScalar(restSize * .95); recoilArm.position.set(W + restSize * .05, -restSize * (.25 - a * .2), 0);
  }
  if (s && k >= .08 && k <= .84) {
    const target = toScreen(s.shot.point); const tip = new THREE.Vector2(target.x, H - target.y);
    const extend = k < ARRIVE ? ease((k - .08) / (ARRIVE - .08)) : k < RELEASE ? 1 : 1 - ease((k - RELEASE) / (.84 - RELEASE)) * .82;
    const fist = shoulder.clone().lerp(tip, extend);
    const dist = Math.max(3, s.shot.distance);
    const impactSize = THREE.MathUtils.clamp(unit * 1.35 / dist, unit * .07, unit * .3);
    const glove = THREE.MathUtils.lerp(restSize * .55, impactSize, Math.min(1, extend * 1.1));
    const dir = fist.clone().sub(shoulder); const len = Math.max(1, dir.length()); dir.divideScalar(len);
    // Rubber-hose S-curl: sags with distance, wobbles on the snap-back.
    const side = new THREE.Vector2(-dir.y, dir.x).multiplyScalar(Math.sign(dir.x || 1));
    const curl = (k < ARRIVE ? .2 : k < RELEASE ? Math.sin((k - ARRIVE) * 60) * .05 : -.18) * len;
    const ctrl = shoulder.clone().lerp(fist, .45).addScaledVector(side, curl);
    const w0 = restSize * .26, w1 = glove * .26, inkW = Math.max(3, unit * .006);
    setRibbon(hoseInk, shoulder, ctrl, fist, w0 + inkW * 2, w1 + inkW * 2); setRibbon(hoseFill, shoulder, ctrl, fist, w0, w1); setRibbon(hoseShine, shoulder, ctrl, fist, w0 * .16, w1 * .16, .22);
    hoseInk.visible = hoseFill.visible = hoseShine.visible = true;
    if (k < ARRIVE && motion()) speedLines.forEach((line, i) => {
      const off = side.clone().multiplyScalar((i ? -1 : 1) * (w1 * .9 + 8)); line.visible = true;
      const a = fist.clone().addScaledVector(dir, -Math.min(len * .35, unit * .28)).add(off), b = fist.clone().addScaledVector(dir, -glove * .45).add(off);
      setRibbon(line, a, a.clone().lerp(b, .5), b, 1.5, 3);
    });
    const angle = Math.atan2(dir.y, dir.x), left = dir.x < 0;
    const impacting = s.resolved && k < RELEASE + .06 && s.outcome !== 'miss' && s.outcome !== 'grab';
    const gloveMesh = impacting ? impactGlove : flightGlove, base = impacting ? GLOVE_ANGLE.impact : GLOVE_ANGLE.flight;
    gloveMesh.visible = true; gloveMesh.position.set(fist.x, fist.y, 0);
    const scale = glove * (impacting ? 1.9 : 1) * (impacting && k < ARRIVE + .05 ? 1.12 : 1);
    gloveMesh.scale.set(left ? -scale : scale, scale, 1);
    gloveMesh.rotation.z = left ? angle - (Math.PI - base) : angle - base;
    const held = s.throwing && s.held && k < ARRIVE;
    if (held) { heldSprite.visible = true; (heldSprite.material as THREE.MeshBasicMaterial).map = textures[s.held!]; heldSprite.scale.setScalar(glove * 1.2); heldSprite.position.set(fist.x, fist.y + glove * .3, 0); }
    if (s.resolved && k < .8) {
      const a = (k - ARRIVE) / (.8 - ARRIVE); const key = s.outcome && bursts[s.outcome] ? s.outcome : 'miss';
      const mat = burstMesh.material as THREE.MeshBasicMaterial; mat.map = bursts[key]; mat.opacity = 1 - Math.max(0, a - .5) * 2;
      const pop = (key === 'miss' ? .9 : 1.6) * impactSize * (a < .2 ? .6 + a * 3 : 1.2 - a * .2);
      burstMesh.visible = true; burstMesh.scale.setScalar(pop); burstMesh.position.set(tip.x, tip.y, 0); burstMesh.rotation.z = (s.ray.direction.x) * .4;
    }
  }
  if (game.held && !(s && s.throwing && k < .97)) {
    heldSprite.visible = true; (heldSprite.material as THREE.MeshBasicMaterial).map = textures[game.held];
    heldSprite.scale.setScalar(restSize * .42); heldSprite.position.set(W - restSize * .45, restSize * .52 + bob, 0); heldSprite.rotation.z = motion() ? Math.sin(time * 2) * .07 : 0;
  }
}

const clock = new THREE.Clock();
let runtime = 0;
const rest = new THREE.Vector3();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), .05) * timeScale;
  if (game.mode !== 'pause') runtime += dt;
  if (hitstop > 0) hitstop -= dt; else game.tick(dt);
  if (game.mode !== lastMode) renderUi();
  levelGroups[1].visible = game.level === 1; levelGroups[2].visible = game.level === 2;
  if (lastHp > game.hp && motion()) { const flash = document.createElement('div'); flash.className = 'flash'; ui.append(flash); setTimeout(() => flash.remove(), 400); }
  lastHp = game.hp;
  syncTargets(runtime);
  if (game.mode === 'play') updateHud();

  if (swing && game.mode !== 'pause') {
    swing.phase = Math.min(1, swing.phase + dt / DURATION);
    if (!swing.resolved && swing.phase >= ARRIVE) land(swing);
    if (swing.phase >= 1) swing = null;
  }
  if (game.mode !== 'play' && game.mode !== 'pause') swing = null;

  for (let i = dying.length - 1; i >= 0; i--) {
    const d = dying[i]; d.age += dt;
    // Knockout: the card is punched backward off its feet and tumbles out.
    d.view.card.rotation.x = -Math.min(1.45, d.age * 7); d.view.card.rotation.z = d.spin * d.age * 2.5;
    d.view.group.position.y += dt * (2.2 - d.age * 12); d.view.group.position.z -= dt * 3;
    if (d.age > .45) { disposeView(d.view); dying.splice(i, 1); }
  }
  for (const cover of coverMeshes.values()) {
    const w = cover.userData.wobble as number | undefined; if (!w) continue;
    cover.scale.set(1 + Math.sin(w * 30) * w * .05, 1 - Math.sin(w * 30) * w * .04, 1); cover.userData.wobble = Math.max(0, w - dt * 3);
  }
  if (motion()) for (const cloth of swaying) cloth.rotation.z = Math.sin(runtime * 1.7 + cloth.userData.sway) * .08;

  resizeCameraShake(dt);
  renderer.info.reset();
  renderer.clear();
  renderer.render(scene, camera);
  drawArm(runtime);
  renderer.clearDepth();
  renderer.render(hud, hudCamera);
}
function resizeCameraShake(dt: number) {
  const rig = cameraFor(innerWidth, innerHeight);
  if (game.mode === 'menu' || game.mode === 'select') return;
  rest.set(rig.position.x, rig.position.y, rig.position.z);
  if (shake > 0) { shake = Math.max(0, shake - dt * .9); camera.position.set(rest.x + (Math.random() - .5) * shake, rest.y + (Math.random() - .5) * shake, rest.z); }
  else camera.position.copy(rest);
  camera.updateMatrixWorld();
}

resize(); renderUi(); frame();

if (import.meta.env.DEV) {
  Object.assign(window, {
    __game: game,
    __test: {
      /** Screen point that free-aim resolves to this target right now (null if fully occluded). */
      project(id: number) { const t = game.targets.find(v => v.id === id); return t ? clickablePoint(t) : null; },
      /** Predict what a click at (x,y) would strike, using the same resolver the game uses. */
      shotAt(x: number, y: number) { const s = shotAt(new THREE.Vector2(x / innerWidth * 2 - 1, 1 - y / innerHeight * 2)); return { kind: s.kind, id: s.id ?? null, distance: s.distance }; },
      /** Sample the full card hitbox of a target and report what each screen point would actually hit. */
      samples(id: number) {
        const t = game.targets.find(v => v.id === id); if (!t) return [];
        const c = CARD[t.kind], p = pose(game.level, t, motion()), [l, r, b, tp] = c.inset, out = [];
        for (let fy = .05; fy < 1; fy += .1) for (let fx = .1; fx < 1; fx += .2) {
          const s = toScreen({ x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z });
          const shot = shotAt(new THREE.Vector2(s.x / innerWidth * 2 - 1, 1 - s.y / innerHeight * 2));
          out.push({ x: Math.round(s.x), y: Math.round(s.y), kind: shot.kind, id: shot.id ?? null });
        }
        return out;
      },
      swing: () => swing ? { phase: swing.phase, resolved: swing.resolved, outcome: swing.outcome ?? null, shot: swing.shot.kind } : null,
      setTimeScale(v: number) { timeScale = v; },
      strikes: () => strikes.slice(),
      webgl: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, context: renderer.getContext().getParameter(renderer.getContext().VERSION) }),
    },
  });
}
