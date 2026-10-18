import * as THREE from 'three';
import { Game, loadProgress, resultActions, healthBarAlpha, PROGRESS_KEY, costOf, ULT, type Action, type Kind, type Actor, type Outcome } from './game';
import { resolveShot, type Hittable, type Shot, type Vec3 } from './aim';
import { LEVELS, BODY, SKIN_INSET, WINDUP, YARD_X, ALLEY_X, LAST_LEVEL, clampPan, pose, dogWalk, hittables, cameraFor, onLanding, type Cover, type BodyKind, type Skin } from './layout';
import './style.css';
import { makeStreet } from './street';
import { makeBar } from './bar';
import { Stream } from './ult';
import { PROPS, PROP_KINDS } from './props';
import { LOOKS, greyscaleWorld, greyCanvas, greyColor } from './palette';
import { armMetrics, restPose, punchPose, sideFor, drawArm as inkArm, type Avoid, type Pt } from './arm';
import { reducedMotion, unlockAudio, sound, trickle, settingsUi, bindSettings } from './preferences';

let saved = loadProgress(() => null);
try { saved = loadProgress(k => localStorage.getItem(k)); } catch { /* storage blocked: fresh progress */ }
const game = new Game(saved, p => { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch { game.message = 'Сохранение недоступно в этом браузере.'; } });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><canvas id="arm" aria-hidden="true"></canvas><div id="ui"></div>';
const ui = document.querySelector<HTMLDivElement>('#ui')!;
{ // Old-film grain + vignette over the scene (under the arms and HUD): one static noise tile, drifted by CSS.
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  if (g) { const d = g.createImageData(128, 128); for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; } g.putImageData(d, 0, 0); }
  document.getElementById('film')?.style.setProperty('--grain', `url(${c.toDataURL()})`);
}
const canvas = document.querySelector<HTMLCanvasElement>('#scene')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.autoClear = false;
renderer.info.autoReset = false;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#e2e2e2');
// Atmospheric perspective: the background layer fades toward the sky colour so depth reads at a glance.
scene.fog = new THREE.Fog('#e2e2e2', 14, 42);
const camera = new THREE.PerspectiveCamera(50, 1, .3, 90);
const hemi = new THREE.HemisphereLight('#ffffff', '#6e6e6e', 2.4); scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffffff', 3.0); sun.position.set(-7, 14, 10); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -.0006; sun.shadow.normalBias = .02;
sun.shadow.camera.left = -16; sun.shadow.camera.right = 16; sun.shadow.camera.top = 16; sun.shadow.camera.bottom = -16;
scene.add(sun);
function skyTexture(stops: readonly (readonly [number, string])[]) {
  const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 0, 256); for (const [o, col] of stops) grad.addColorStop(o, col);
  g.fillStyle = grad; g.fillRect(0, 0, 4, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
/** Grey film looks (palette.ts): the street's late-afternoon sky, the bar's smoky dark. */
const skies = { street: skyTexture(LOOKS.street.sky), bar: skyTexture(LOOKS.bar.sky) };
const shownLevel = () => game.mode === 'menu' || game.mode === 'select' ? 1 : game.level;
const isBar = (level = game.level) => LEVELS[level].look === 'bar';
function applyLook(level: number) {
  const k = LEVELS[level].look, L = LOOKS[k];
  scene.background = skies[k]; (scene.fog as THREE.Fog).color.set(L.fog); (scene.fog as THREE.Fog).near = L.near; (scene.fog as THREE.Fog).far = L.far;
  hemi.color.set(L.hemi[0]); hemi.groundColor.set(L.hemi[1]); hemi.intensity = L.hemi[2];
  sun.color.set(L.sun[0]); sun.intensity = L.sun[1]; sunAt = L.sunAt;
}
let sunAt: readonly [number, number, number] = LOOKS.bar.sunAt;
scene.add(sun.target);
/** The shadow frustum rides along with the camera pan so the wide street keeps crisp shadows end to end. */
function placeSun(pan: number) { sun.position.set(sunAt[0] + pan, sunAt[1], sunAt[2]); sun.target.position.set(pan, 0, 0); sun.target.updateMatrixWorld(); }
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
  } else if (c.look === 'piano') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    block(g, s.x + .1, .08, s.z + .1, '#241a15', 0, s.y + .04, 0);
    block(g, s.x * .92, .1, .32, '#efe9da', 0, s.y * .6, s.z / 2 + .16); // keys stick out toward you
    for (let i = 0; i < 14; i++) block(g, .045, .05, .18, '#161311', -s.x * .42 + i * s.x * .065, s.y * .6 + .07, s.z / 2 + .12, false);
    block(g, s.x * .7, s.y * .3, .03, '#5a4436', 0, s.y * .8, s.z / 2 + .02, false);
  } else if (c.look === 'table') {
    const cloth = new THREE.Mesh(new THREE.CylinderGeometry(s.x / 2, s.x / 2 + .08, s.y, 24), solid(c.color)); cloth.position.y = s.y / 2; cloth.castShadow = cloth.receiveShadow = true; g.add(cloth);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(s.x / 2 + .06, s.x / 2 + .06, .06, 24), solid('#4a3a2e')); top.position.y = s.y + .03; g.add(top);
    const candle = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, .25, 8), solid('#f2efe6')); candle.position.set(.2, s.y + .18, 0); g.add(candle);
  } else if (c.look === 'counter') {
    block(g, s.x, s.y - .1, s.z, c.color, 0, (s.y - .1) / 2, 0);
    block(g, s.x + .2, .1, s.z + .2, '#3a2a1e', 0, s.y - .05, .05); // the slab you throw hats onto
    for (let i = 0; i < 6; i++) block(g, s.x / 6 - .2, s.y * .55, .03, '#7d5a40', -s.x / 2 + (i + .5) * s.x / 6, s.y * .45, s.z / 2 + .02, false);
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(.04, .04, s.x, 8), solid('#b9b9b9')); rail.rotation.z = Math.PI / 2; rail.position.set(0, .22, s.z / 2 + .2); g.add(rail);
  } else if (c.look === 'shelves') {
    block(g, s.x, s.y, s.z, c.color, 0, s.y / 2, 0);
    for (let r = 0; r < 3; r++) {
      block(g, s.x * .94, .06, .2, '#2c221a', 0, .9 + r * .7, s.z / 2 + .08, false);
      for (let i = 0; i < 11; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(.07, .08, .38 + (i % 3) * .06, 8), solid(['#3d4a35', '#5a3a26', '#77705e'][(i + r) % 3])); b.position.set(-s.x * .43 + i * s.x * .086, 1.13 + r * .7, s.z / 2 + .1); g.add(b); }
    }
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

/** The yard half of the street (left end of the panorama; its right side opens onto the alley). */
function courtyard() {
  const g = new THREE.Group();
  block(g, 41.5, .25, 60, '#a7aaa0', -11.25, -.125, -10, false);
  block(g, .3, .14, 60, '#c9cbc2', 9.5, .07, -10); // kerb where the yard's paving meets the alley tarmac
  block(g, 12, .02, 9, '#bdbdb0', 0, .01, 2.5, false);
  block(g, 4, 9, 16, '#a9afa5', -9.5, 4.5, -2);
  for (let y = 2; y < 8; y += 2.6) for (let z = -8; z < 5; z += 3.2) block(g, .1, 1.5, 1.1, '#59675f', -7.47, y, z);
  block(g, 21, 2, .3, '#9da497', -2.5, 10, -9);
  // Brick gate pillars where the yard meets the alley.
  for (const z of [-4.2, -6.6]) block(g, .9, 5.2, .9, '#8f8a80', 7.4, 2.6, z);
  block(g, .9, .7, 3.3, '#8f8a80', 7.4, 5.55, -5.4);
  block(g, 1.6, 10, 3, '#a3a59b', 8.6, 5, -10.1); // corner house: the yard's back block meets the alley's shopfronts
  // Clothesline across the mid-ground: overlapping laundry sprites are a strong parallax cue.
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
const swinging: THREE.Object3D[] = [];
const barPainting = new THREE.Texture(); barPainting.colorSpace = THREE.SRGBColorSpace;
new THREE.TextureLoader().load(asset('gen_bar_backdrop.png'), t => { barPainting.image = t.image; barPainting.needsUpdate = true; }, undefined, () => { /* bare walls if the painting is missing */ });
const LEVEL_IDS = [1, 2] as const;
for (const level of LEVEL_IDS) {
  const group = new THREE.Group(); scene.add(group); levelGroups[level] = group;
  const backdrop = new THREE.Group(); group.add(backdrop);
  if (isBar(level)) backdrop.add(makeBar(barPainting));
  else { const y = courtyard(), a = makeStreet({ left: false }); y.position.x = YARD_X; a.position.x = ALLEY_X; backdrop.add(y, a); }
  backdrop.traverse(o => { if (o.userData.sway !== undefined) swaying.push(o); if (o.userData.swing !== undefined) swinging.push(o); });
  const layout = LEVELS[level];
  for (const c of layout.covers) buildCover(group, c);
  trims(group, layout.covers);
  levelScenery[level] = sceneryOf(backdrop, new Set());
}

// -------------------------------------------------------------------------------------------------
// LIVING CHARACTERS (2D art on depth-placed sprites; alpha-tested + depth-written so overlap is exact).
// -------------------------------------------------------------------------------------------------
function art(kind: Kind | 'sign'): THREE.CanvasTexture {
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
    path([[15, 120], [495, 120], [495, 480], [15, 480]], '#c7f653'); g.fillStyle = '#222722'; g.textAlign = 'center'; g.font = '900 75px Arial'; g.fillText('ДВОР', 256, 270); g.fillText('№ 02', 256, 370);
  }
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}
const loader = new THREE.TextureLoader();
function spriteTexture(file: string, fallback: Kind | 'bottle' | 'barrel') {
  const tex = art(fallback) as THREE.Texture;
  loader.load(asset(file), loaded => { tex.image = loaded.image; tex.needsUpdate = true; }, undefined, () => { /* keep procedural sprite */ });
  return tex;
}
const textures = {
  enemy: spriteTexture('bully.png', 'enemy'), dog: spriteTexture('gen_dog_sit.png', 'dog'),
  ...Object.fromEntries(PROP_KINDS.map(k => [k, spriteTexture(PROPS[k].sprite, k === 'barrel' || k === 'hat' ? 'barrel' : 'bottle')])),
} as Record<BodyKind, THREE.Texture>;
/** Bar patrons: one drawn pose each (wind-up / hurt / knockout are acted with squash, tint and spin). */
const skins: Record<Exclude<Skin, 'cat'>, THREE.Texture> = { walrus: spriteTexture('gen_walrus.png', 'enemy'), bulldog: spriteTexture('gen_bulldog.png', 'enemy'), weasel: spriteTexture('gen_weasel.png', 'enemy') };
/** Drawn acting frames (gen_ sheets): the bully's wind-up / hurt / knocked-out poses, the dog's walk and sad sit. */
const frames = {
  windup: spriteTexture('gen_cat_windup.png', 'enemy'), hurt: spriteTexture('gen_cat_hurt.png', 'enemy'), ko: spriteTexture('gen_cat_ko.png', 'enemy'),
  walk: spriteTexture('gen_dog_walk.png', 'dog'), sad: spriteTexture('gen_dog_sad.png', 'dog'),
};
for (const t of [...Object.values(textures), ...Object.values(frames), ...Object.values(skins)]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; }
const frameName = new Map<THREE.Texture, string>([[textures.enemy, 'idle'], [textures.dog, 'sit'], ...Object.entries(frames).map(([k, t]) => [t, k] as [THREE.Texture, string])]);
function showFrame(v: ActorView, map: THREE.Texture) {
  if (v.skin) { v.frame = map === frames.windup ? 'windup' : map === frames.hurt ? 'hurt' : map === frames.ko ? 'ko' : 'idle'; return; } // patrons keep their one pose
  if (v.sprite.material.map === map) return;
  v.frame = frameName.get(map);
  v.sprite.material.map = map; (v.sprite.customDepthMaterial as THREE.MeshDepthMaterial).map = map;
}
signs.push(art('sign'));
const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.25), new THREE.MeshBasicMaterial({ map: signs[0], alphaTest: .5 }));
sign.position.set(-6.3 + YARD_X, 2.5, -8.8); levelGroups[2].add(sign);
// The violet hat mat on the counter top (colour = you can do something here) and the trophy hat once it lands.
const landingCover = LEVELS[1].covers.find(c => c.id === LEVELS[1].landing?.cover)!;
const hatTrophy = new THREE.Mesh(new THREE.PlaneGeometry(BODY.hat.w, BODY.hat.h).translate(0, BODY.hat.h / 2, 0), new THREE.MeshBasicMaterial({ map: textures.hat, alphaTest: .5, side: THREE.DoubleSide }));
hatTrophy.visible = false; hatTrophy.renderOrder = 2;
// The world is B/W film; only characters, grabbable props, the player's arms and FX keep colour.
for (const t of signs) greyCanvas(t.image as HTMLCanvasElement);
for (const level of LEVEL_IDS) greyscaleWorld(levelGroups[level]);
greyColor(ink.color);
{
  const mat = new THREE.Mesh(new THREE.BoxGeometry(1.1, .02, .5), new THREE.MeshStandardMaterial({ color: '#7c3ae6', roughness: .7 }));
  mat.position.set(.9, landingCover.max.y + .01, (landingCover.min.z + landingCover.max.z) / 2 + .05); levelGroups[1].add(mat, hatTrophy);
  const bell = new THREE.Mesh(new THREE.SphereGeometry(.13, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#e0a83a', metalness: .6, roughness: .3 }));
  bell.position.set(-.1, landingCover.max.y, mat.position.z); levelGroups[1].add(bell);
}

function ringTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d')!;
  g.lineWidth = 20; g.strokeStyle = '#202320'; g.beginPath(); g.arc(64, 64, 44, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 11; g.strokeStyle = '#f45d96'; g.stroke(); g.fillStyle = '#202320'; g.font = '900 54px Arial'; g.textAlign = 'center'; g.fillText('!', 64, 83);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const ring = ringTexture();
const blob = new THREE.MeshBasicMaterial({ color: '#262626', transparent: true, opacity: .28, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });

/** Small inked overlay textures: halo, dizzy stars, sad rain-cloud. */
function overlayTexture(draw: (g: CanvasRenderingContext2D) => void, w = 256, h = 128) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d')!;
  g.lineJoin = 'round'; g.lineCap = 'round'; draw(g);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const haloTex = overlayTexture(g => {
  g.lineWidth = 22; g.strokeStyle = '#3a2f18'; g.beginPath(); g.ellipse(128, 64, 92, 30, 0, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 13; g.strokeStyle = '#ffe27a'; g.stroke();
});
function star(g: CanvasRenderingContext2D, x: number, y: number, r: number) {
  g.beginPath(); for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
  g.closePath(); g.fillStyle = '#ffe14d'; g.fill(); g.lineWidth = 6; g.strokeStyle = '#1c1d1a'; g.stroke();
}
const starsTex = overlayTexture(g => { for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; star(g, 128 + Math.cos(a) * 92, 64 + Math.sin(a) * 34, 20); } });
const cloudTex = overlayTexture(g => {
  g.strokeStyle = '#1c1d1a'; g.lineWidth = 7; g.fillStyle = '#9aa6b4';
  g.beginPath(); g.arc(90, 52, 30, Math.PI * .5, Math.PI * 1.6); g.arc(130, 38, 34, Math.PI * 1.05, Math.PI * 1.95); g.arc(172, 54, 28, Math.PI * 1.4, Math.PI * .5); g.closePath(); g.fill(); g.stroke();
  g.strokeStyle = '#3d7fd6'; g.lineWidth = 6; for (const x of [96, 124, 152, 176]) { g.beginPath(); g.moveTo(x, 92); g.lineTo(x - 6, 116); g.stroke(); }
});
function overlay(map: THREE.Texture, w: number, h: number, order = 2) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false }));
  s.scale.set(w, h, 1); s.renderOrder = order; return s;
}

interface ActorView {
  kind: Kind; group: THREE.Group; body: THREE.Group; sprite: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  flash: number; sad: number; facing: number; /** Health bar: the trailing 'just lost' chunk, eased down to the real value. */ ghost?: number; frame?: string; wound?: boolean; skin?: Exclude<Skin, 'cat'>; wet?: number; yuck?: boolean; warning?: THREE.Sprite; stars?: THREE.Sprite; halo?: THREE.Sprite; cloud?: THREE.Sprite;
}
const actorGroup = new THREE.Group(); scene.add(actorGroup);
const views = new Map<number, ActorView>();
/** Views whose actor has left the game state but still plays an exit: knocked out, or lunging in to attack. */
const leaving: { view: ActorView; age: number; spin: number; how: 'ko' | 'attack' }[] = [];
const exits = new Map<number, 'ko' | 'attack'>();

function makeView(t: Actor): ActorView {
  const c = BODY[t.kind]; const group = new THREE.Group(), body = new THREE.Group(); group.add(body);
  const geometry = new THREE.PlaneGeometry(c.w, c.h); geometry.translate(0, c.h / 2, 0);
  const skin = t.kind === 'enemy' && t.skin && t.skin !== 'cat' ? t.skin : undefined, map = skin ? skins[skin] : textures[t.kind];
  const material = new THREE.MeshBasicMaterial({ map, alphaTest: .5, side: THREE.DoubleSide });
  const sprite = new THREE.Mesh(geometry, material); sprite.castShadow = true;
  sprite.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: .5 });
  body.add(sprite);
  if (t.y <= .01) { const shadow = new THREE.Mesh(new THREE.CircleGeometry(c.w * .36, 24), blob); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .035; shadow.scale.y = .45; shadow.renderOrder = 1; group.add(shadow); }
  // Enemies square up toward the middle of the yard; the dog turns with its stroll.
  const view: ActorView = { kind: t.kind, group, body, sprite, flash: 0, sad: 0, skin, facing: t.kind === 'enemy' && t.x < 0 ? -1 : 1 };
  if (skin) view.frame = 'idle';
  if (t.kind === 'enemy') {
    view.warning = new THREE.Sprite(new THREE.SpriteMaterial({ map: ring, depthWrite: false })); view.warning.position.set(0, c.h + .3, 0); body.add(view.warning);
    view.stars = overlay(starsTex, 1.1, .55); view.stars.position.set(0, c.h * .97, .05); view.stars.visible = false; body.add(view.stars);
  }
  if (t.kind === 'dog') {
    view.halo = overlay(haloTex, .62, .31); body.add(view.halo);
    view.cloud = overlay(cloudTex, .8, .4); view.cloud.visible = false; body.add(view.cloud);
  }
  actorGroup.add(group); views.set(t.id, view); return view;
}
function disposeView(v: ActorView) { actorGroup.remove(v.group); v.group.traverse(o => { if (o instanceof THREE.Mesh && o.geometry) o.geometry.dispose(); }); v.sprite.material.dispose(); }

// The menu stands in the bar (level 1): the walrus by the piano, the halo dog, the weasel behind the counter.
const menuActors: Actor[] = [
  { id: -1, kind: 'enemy', skin: 'walrus', x: -2.55, y: 0, z: 2.2, age: 1, deadline: 60 },
  { id: -2, kind: 'dog', x: .2, y: 0, z: -.7, age: 1, deadline: Infinity },
  { id: -3, kind: 'enemy', skin: 'weasel', x: 1.9, y: .3, z: -3.15, age: 1, deadline: 60 },
];
const visibleActors = () => game.mode === 'menu' || game.mode === 'select' ? menuActors : game.actors;

/** Rubber-hose acting: idle bounce, peek, wind-up telegraph, hit flash, sad dog. Purely visual — pose() is the hitbox. */
function syncActors(time: number) {
  const visible = visibleActors(); const motion = !reducedMotion();
  for (const [id, view] of views) if (!visible.some(t => t.id === id)) {
    views.delete(id); const how = exits.get(id); exits.delete(id);
    if (how && motion) leaving.push({ view, age: 0, spin: view.facing, how }); else disposeView(view);
  }
  for (const t of visible) {
    const view = views.get(t.id) ?? makeView(t); const c = BODY[t.kind];
    const p = pose(game.level, t, motion);
    view.group.position.set(p.x, p.y, p.z);
    const a = motion ? (t.id < 0 ? time : t.age) + t.id * .7 : 0;
    let sx = 1, sy = 1, rot = 0, lift = 0; const tint = new THREE.Color(1, 1, 1);
    if (t.kind === 'enemy') {
      const left = t.deadline - t.age, wind = motion ? THREE.MathUtils.clamp(1 - left / WINDUP, 0, 1) : 0;
      const bounce = Math.abs(Math.sin(a * 4.2));
      sx = 1 + (1 - bounce) * .05; sy = 1 - (1 - bounce) * .06 + bounce * .03; lift = bounce * .06; rot = Math.sin(a * 2.1) * .035;
      if (wind > 0 && !view.wound && t.id > 0) { view.wound = true; sound('windup'); }
      showFrame(view, wind > 0 ? frames.windup : textures.enemy);
      if (wind > 0) {
        // Wind-up: the drawn wrench-overhead pose, rocking back, puffing up, flushing red and trembling.
        const tremble = Math.sin(time * 48) * .02 * wind;
        rot = -view.facing * .08 * wind + tremble; sx *= 1 + .08 * wind; sy *= 1 + .1 * wind; lift = 0;
        const pulse = .5 + .5 * Math.sin(time * 18); tint.setRGB(1, 1 - .45 * wind * pulse, 1 - .5 * wind * pulse);
      }
      if (view.warning) {
        const shown = t.id > 0 && left < WINDUP * 1.6;
        view.warning.visible = shown; view.warning.scale.setScalar(.38 + wind * .3 + (motion ? Math.sin(time * 14) * .03 : 0));
      }
      if (view.stars) view.stars.visible = false;
      // Ult soaking: disgust — green about the gills, shuddering, shrinking away.
      const wet = t.wet ?? 0; view.wet = wet;
      if (wet > 0) {
        if (!view.yuck) { view.yuck = true; sound('yuck'); const p = toScreen({ x: view.group.position.x, y: view.group.position.y + 1.6, z: view.group.position.z }); callout(['ФУ-У!', 'БЕ-Е!', 'ФИ!'][t.id % 3], p.x, p.y, 'bad'); }
        const quake = motion ? Math.sin(time * 70 + t.id) * .05 * (.4 + wet) : 0;
        rot = quake; sx *= 1 + .08 * wet; sy *= 1 - .14 * wet; lift = 0; tint.setRGB(1 - .45 * wet, 1, 1 - .55 * wet);
      }
    } else if (t.kind === 'dog') {
      const walk = dogWalk(motion ? (t.id < 0 ? time : t.age) : 0, motion); view.facing = -walk.facing;
      if (walk.walking) { const hop = Math.abs(Math.sin(a * 11)); lift = hop * .09; sy = 1 + hop * .04; rot = Math.sin(a * 11) * .06; }
      else { const breathe = Math.sin(a * 2.6); sy = 1 + breathe * .025; sx = 1 - breathe * .012; rot = Math.sin(a * .9) * .03; }
      view.sad = Math.max(0, view.sad - 1 / 60);
      const sad = Math.min(1, view.sad);
      showFrame(view, sad > 0 ? frames.sad : walk.walking ? frames.walk : textures.dog);
      if (sad > 0) { sy *= 1 - .12 * sad; sx *= 1 + .05 * sad; rot = Math.sin(time * 20) * .03 * sad; lift = 0; tint.setRGB(1 - .25 * sad, 1 - .15 * sad, 1); }
      const hx = .1 * view.facing;
      if (view.halo) {
        view.halo.position.set(hx, c.h * 1.0 + (motion ? Math.sin(time * 3 + t.id) * .04 : 0) - sad * .12, 0);
        view.halo.material.rotation = sad * .45 * Math.sin(time * 6); view.halo.material.color.setRGB(1, 1, 1 - sad * .5);
      }
      if (view.cloud) { view.cloud.visible = sad > 0; view.cloud.position.set(hx, c.h * 1.25 + Math.sin(time * 4) * .03, 0); }
    } else {
      rot = motion ? Math.sin(a * 1.6) * .04 : 0;
      if (t.kind === 'hat' && motion) { lift = Math.abs(Math.sin(a * 2.4)) * .05; rot = Math.sin(a * 2.4) * .08; } // the bowler twitches: pick me up
    }
    if (view.flash > 0) { sx *= 1 + view.flash * .2; sy *= 1 - view.flash * .18; tint.setRGB(1, 1 - view.flash * .55, 1 - view.flash * .45); }
    view.flash = Math.max(0, view.flash - .08);
    view.body.position.y = lift; view.body.rotation.z = rot;
    view.sprite.scale.set(sx * view.facing, sy, 1);
    view.sprite.material.color.copy(tint);
  }
}

/** Exit animations for actors already gone from the rules: knockout flight with dizzy stars, or the attack lunge. */
function animateLeaving(dt: number, time: number) {
  for (let i = leaving.length - 1; i >= 0; i--) {
    const d = leaving[i]; d.age += dt; const v = d.view, m = v.sprite.material;
    if (d.how === 'ko') {
      showFrame(v, d.age < .22 ? frames.hurt : frames.ko); // recoil from the blow, then dizzy knockout
      if (d.age < .09) v.sprite.scale.set(1.4 * v.facing, .6, 1); // impact squash
      else {
        const k = d.age - .09; v.sprite.scale.set(.9 * v.facing, 1.12, 1);
        v.body.rotation.z = -d.spin * k * 7; v.body.position.y = k * 3.2 - k * k * 7;
        v.group.position.z -= dt * 3.5; v.group.position.x += dt * d.spin * -1.5;
      }
      if (v.stars) { v.stars.visible = true; v.stars.material.rotation = time * 8; }
      if (d.age > .45) { m.transparent = true; m.opacity = Math.max(0, 1 - (d.age - .45) * 4); }
      if (d.age > .75) { disposeView(v); leaving.splice(i, 1); }
    } else {
      // Attack: lunge at the player with a big swing, then duck away.
      showFrame(v, frames.windup);
      const k = Math.min(1, d.age / .16);
      v.group.position.z += dt * (d.age < .16 ? 5 : -2); v.body.rotation.z = v.facing * .35 * k;
      v.sprite.scale.set((1 + .25 * k) * v.facing, 1 + .2 * k, 1);
      if (d.age > .2) { v.body.position.y -= dt * 6; m.transparent = true; m.opacity = Math.max(0, 1 - (d.age - .2) * 3.5); }
      if (d.age > .5) { disposeView(v); leaving.splice(i, 1); }
    }
  }
}

// -------------------------------------------------------------------------------------------------
// FIRST-PERSON ARMS: vector rubber hoses inked on a 2D overlay canvas (see arm.ts), unaffected by scene lighting.
// The glove always stops at the clicked point; the free-aim ray decides what it actually struck.
// -------------------------------------------------------------------------------------------------
const armCanvas = document.querySelector<HTMLCanvasElement>('#arm')!;
const armCtx = armCanvas.getContext('2d')!;

/** Comic impact bursts per outcome, procedurally inked to match the grease-pencil line weight. */
function burstTexture(word: string, fill: string, accent: string, spikes = 12) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d')!;
  g.translate(128, 128); g.lineJoin = 'round';
  g.beginPath(); for (let i = 0; i <= spikes * 2; i++) { const r = i % 2 ? 62 : 118 - (i % 4) * 9, a = i / (spikes * 2) * Math.PI * 2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fillStyle = fill; g.fill(); g.lineWidth = 9; g.strokeStyle = '#151715'; g.stroke();
  g.beginPath(); for (let i = 0; i <= spikes * 2; i++) { const r = i % 2 ? 36 : 70, a = i / (spikes * 2) * Math.PI * 2 + .2; g.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
  g.closePath(); g.fillStyle = accent; g.fill();
  g.rotate(-.12); g.font = '900 46px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineWidth = 8; g.strokeStyle = '#151715'; g.strokeText(word, 0, 2); g.fillStyle = '#fffbe8'; g.fillText(word, 0, 2);
  return c;
}
const bursts: Record<string, HTMLCanvasElement> = {
  // Saturated fills: impact FX are colour against the grey world, like everything you touch.
  hit: burstTexture('БАМ!', '#ffd84a', '#f3388f'), throw: burstTexture('ХРЯСЬ!', '#ffd84a', '#8fdc2a'),
  protected: burstTexture('АЙ!', '#ff9fb0', '#e2324e', 9), cover: burstTexture('ТУК!', '#f4c27a', '#c9772e', 8),
  smash: burstTexture('ДЗЫНЬ!', '#9fe7ff', '#2f9be0', 14), miss: burstTexture('ВЖУХ', '#eef0ea', '#b9c0b5', 7),
  ult: burstTexture('ДИНЬ!', '#c9a6ff', '#7c3ae6', 16),
};

// -------------------------------------------------------------------------------------------------
// FREE AIM: the strike goes exactly where the pointer is. No magnetism, no snapping.
// -------------------------------------------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2(0, 0);
let lastMode = '';
let lastHp = game.hp;
const DURATION = .42, ARRIVE = .36, RELEASE = .62;
/** A throw is a quick whip: the glove snaps a short way toward the aim and lets go at WHIP.arrive; the prop flies on alone. */
const WHIP = { duration: .34, arrive: .3, release: .46, reach: .38 } as const;
interface Swing { action: Action; throwing: boolean; /** Throws only: whether the prop has left the hand yet. */ launched?: boolean; /** Click point as a fraction of the viewport, so a rotation mid-swing keeps the fist on it. */ spot: Pt; ray: { origin: Vec3; direction: Vec3 }; shot: Shot; phase: number; resolved: boolean; outcome?: Outcome; held: BodyKind | null; staminaBefore: number; staminaAfter: number; }
let swing: Swing | null = null;
let shake = 0, hitstop = 0, timeScale = 1;
const strikes: { action: Action; outcome: Outcome; kind: string; id: number | string | null; staminaBefore: number; staminaAfter: number }[] = [];

/** Horizontal camera pan along wide levels (world units; 0 = centre). Aim always raycasts from the real camera. */
let pan = 0, panVel = 0;
function resize() {
  renderer.setSize(innerWidth, innerHeight);
  const rig = cameraFor(innerWidth, innerHeight, game.mode === 'menu' || game.mode === 'select' ? 0 : pan);
  camera.aspect = innerWidth / innerHeight; camera.fov = rig.fov; camera.updateProjectionMatrix();
  camera.position.set(rig.position.x, rig.position.y, rig.position.z); camera.lookAt(rig.look.x, rig.look.y, rig.look.z);
  if (game.mode === 'menu' || game.mode === 'select') { camera.position.x -= innerWidth < 650 ? 0 : 1.2; camera.lookAt(rig.look.x - (innerWidth < 650 ? 0 : 1.8), rig.look.y, rig.look.z); }
  camera.updateMatrixWorld();
  const dpr = Math.min(devicePixelRatio, 2); armCanvas.width = Math.round(innerWidth * dpr); armCanvas.height = Math.round(innerHeight * dpr);
}
addEventListener('resize', () => { resize(); measureControls(); });

function updateCrosshair() {
  const crosshair = document.querySelector<HTMLElement>('.crosshair');
  if (crosshair) { crosshair.style.left = (pointer.x + 1) * 50 + '%'; crosshair.style.top = (1 - pointer.y) * 50 + '%'; }
}
const motion = () => !reducedMotion();
function currentHittables() { return hittables(game.level, game.actors, motion(), levelScenery[game.level]); }
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
  sound('whoosh');
  const spot = { x: (pointer.x + 1) / 2, y: (1 - pointer.y) / 2 };
  swing = { action, throwing, spot, ray, shot: resolveShot(ray.origin, ray.direction, currentHittables()), phase: 0, resolved: false, held, staminaBefore, staminaAfter: game.stamina };
  if (!motion()) { if (throwing) release(swing); else land(swing); }
  updateHud();
}

/** Comic callout text popping at a screen point (combo counts, dog scolding, attacks). */
function callout(text: string, x: number, y: number, tone: 'combo' | 'bad' | 'pop' = 'pop') {
  const el = document.createElement('div'); el.className = 'callout ' + tone; el.textContent = text;
  el.style.left = Math.round(THREE.MathUtils.clamp(x, 90, innerWidth - 90)) + 'px'; el.style.top = Math.round(THREE.MathUtils.clamp(y, 120, innerHeight - 160)) + 'px';
  ui.append(el); setTimeout(() => el.remove(), 900);
}
const COMBO_WORDS = ['', '', 'ДВОЙНОЙ!', 'ТРОЙНОЙ!', 'РАЗМАШИСТО!', 'НЕУДЕРЖИМ!'];
function drainEvents(at?: { x: number; y: number }) {
  for (const e of game.events) {
    const v = views.get(e.id); const p = at ?? (v ? toScreen({ x: v.group.position.x, y: v.group.position.y + 1.2, z: v.group.position.z }) : { x: innerWidth / 2, y: innerHeight / 2 });
    if (e.type === 'hurt' && e.amount) { const t = game.actors.find(a => a.id === e.id) ?? (v ? { x: v.group.position.x, y: v.group.position.y, z: v.group.position.z } : null); if (t) { const h = v ? barAnchor(v) : { x: t.x, y: t.y + 2, z: t.z ?? 0 }; damageNumbers.push({ ...h, amount: e.amount, age: 0, big: e.amount > 10 }); } if (v) v.flash = 1; }
    if (e.type === 'ko' || e.type === 'smash') { exits.set(e.id, 'ko'); if (e.type === 'ko') sound('ko'); }
    if (e.type === 'ko' && e.combo >= 2) callout(`КОМБО ×${e.combo} ${COMBO_WORDS[Math.min(e.combo, 5)]}`, p.x, p.y - 70, 'combo');
    if (e.type === 'attack') { exits.set(e.id, 'attack'); sound('attack'); callout('БАЦ! −♥', p.x, p.y, 'bad'); if (motion()) shake = .22; }
    if (e.type === 'dog') { if (v) v.sad = 2.4; sound('dog'); callout(game.ult.phase === 'pour' ? 'ПЁС ОСКОРБЛЁН!' : 'ПСА НЕ ТРОГАЙ!', p.x, p.y - 60, 'bad'); }
    if (e.type === 'ult') startUlt();
    if (e.type === 'land' && e.point) sound('thud');
    if (e.type === 'shatter' && e.point && e.prop) { shatter(e.point, PROPS[e.prop].shards ?? ['#ffffff']); pop('smash', e.point, .8); }
    if (e.type === 'ultEnd') { sound('slide'); callout('ФЬЮ-У-У…', innerWidth / 2, innerHeight * .6, 'pop'); }
  }
  game.events.length = 0;
}

/** Where the glove is in a throw's whip: a short way from its rest spot toward the aim. */
function whipSpot(s: Swing): Pt {
  const W = innerWidth, H = innerHeight, rest = restPose(1, W, H, avoidRect).glove; // the prop is held in the right hand
  return { x: rest.x + (s.spot.x * W - rest.x) * WHIP.reach, y: rest.y + (s.spot.y * H - rest.y) * WHIP.reach - H * .05 };
}
/** Let go: the prop leaves the glove (at its screen spot, ~1.7 m in front of the camera) and flies at the aim point. */
function release(s: Swing) {
  s.launched = true; s.resolved = true;
  const g = whipSpot(s); raycaster.setFromCamera(new THREE.Vector2(g.x / innerWidth * 2 - 1, 1 - g.y / innerHeight * 2), camera);
  const from = raycaster.ray.at(1.7, new THREE.Vector3());
  const f = game.launch({ x: from.x, y: from.y, z: from.z }, s.shot.point);
  s.outcome = 'throw'; strikes.push({ action: 'grab', outcome: 'throw', kind: 'flight', id: f?.id ?? null, staminaBefore: s.staminaBefore, staminaAfter: s.staminaAfter }); if (strikes.length > 20) strikes.shift();
  sound('toss'); renderUi();
}
/** Screen-space comic bursts not tied to the glove (thrown-prop impacts land wherever the prop does). */
const pops: { key: string; x: number; y: number; size: number; age: number }[] = [];
/** Cartoon pieces of a broken prop. */
const shards: { x: number; y: number; vx: number; vy: number; rot: number; vr: number; size: number; color: string; life: number }[] = [];
function pop(key: string, at: Vec3, scale = 1) {
  const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), unit = Math.abs(q.x - p.x);
  pops.push({ key, x: p.x, y: p.y, size: THREE.MathUtils.clamp(unit * 1.6, 70, 260) * scale, age: 0 });
}
function shatter(at: Vec3, colors: readonly string[]) {
  const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), unit = THREE.MathUtils.clamp(Math.abs(q.x - p.x), 30, 200);
  for (let i = 0; i < 14; i++) { const a = -Math.PI / 2 + (Math.random() - .5) * 2.6, v = unit * (2 + Math.random() * 3); shards.push({ x: p.x, y: p.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, rot: Math.random() * 6, vr: (Math.random() - .5) * 18, size: unit * (.07 + Math.random() * .09), color: colors[i % colors.length], life: .7 + Math.random() * .4 }); }
}
/** Thrown props in the air: their own spinning sprite plus a ground shadow that sells the height. */
const flightViews = new Map<number, { mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>; shadow: THREE.Mesh }>();
function syncFlights() {
  for (const [id, v] of flightViews) if (!game.flights.some(f => f.id === id)) { actorGroup.remove(v.mesh, v.shadow); v.mesh.geometry.dispose(); v.mesh.material.dispose(); flightViews.delete(id); }
  for (const f of game.flights) {
    let v = flightViews.get(f.id); const c = BODY[f.kind];
    if (!v) {
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(c.w, c.h), new THREE.MeshBasicMaterial({ map: textures[f.kind], alphaTest: .5, side: THREE.DoubleSide })); mesh.castShadow = true;
      const shadow = new THREE.Mesh(new THREE.CircleGeometry(c.w * .3, 18), blob); shadow.rotation.x = -Math.PI / 2; shadow.renderOrder = 1;
      actorGroup.add(mesh, shadow); v = { mesh, shadow }; flightViews.set(f.id, v);
    }
    v.mesh.position.set(f.pos.x, f.pos.y + c.h * .35, f.pos.z); v.mesh.rotation.z = motion() ? f.angle : 0;
    v.shadow.position.set(f.pos.x, .035, f.pos.z); const k = Math.max(.35, 1 - f.pos.y / 6); v.shadow.scale.set(k, k * .45, 1);
  }
}
function flyProps(dt: number) {
  if (game.mode !== 'play' || hitstop > 0) return;
  for (const { flight, impact } of game.fly(dt, currentHittables())) {
    if (impact.type === 'rest') continue; // the 'land' event plays the thud
    const id = impact.id;
    if (impact.kind === 'enemy') { sound('throw'); pop('throw', impact.point); if (motion()) { shake = .16; hitstop = .06; } }
    else if (impact.kind === 'dog') pop('protected', impact.point);
    else { sound('cover'); pop('cover', impact.point, .7); if (typeof id === 'string') { const c = coverMeshes.get(id); if (c) c.userData.wobble = 1; } if (motion()) shake = .06; }
    if (typeof id === 'number') { const v = views.get(id); if (v) v.flash = 1; }
    if (PROPS[flight.kind].breakable) sound('shatter');
  }
  drainEvents();
}

/** Arrival: re-cast the same ray against the scene as it is *now* (actors keep moving while the fist flies). */
function land(s: Swing) {
  s.resolved = true;
  s.shot = resolveShot(s.ray.origin, s.ray.direction, currentHittables());
  const id = typeof s.shot.id === 'number' ? s.shot.id : undefined;
  const res = game.resolve(s.action, { kind: s.shot.kind, id: s.shot.id, point: s.shot.point });
  if (res === 'ult') { hatTrophy.position.set(s.shot.point.x, landingCover.max.y, Math.min(s.shot.point.z, landingCover.max.z - .1)); hatTrophy.visible = true; }
  s.outcome = res;
  strikes.push({ action: s.action, outcome: res, kind: s.shot.kind, id: s.shot.id ?? null, staminaBefore: s.staminaBefore, staminaAfter: s.staminaAfter }); if (strikes.length > 20) strikes.shift();
  if (res === 'hit' || res === 'throw') sound(res);
  else if (res === 'smash' || res === 'grab') sound('grab');
  else if (res === 'ult') sound('ding');
  else if (res === 'cover') sound('cover');
  else if (res !== 'protected') sound('miss');
  if (id !== undefined) { const v = views.get(id); if (v) v.flash = 1; }
  if (res === 'cover' && typeof s.shot.id === 'string') { const c = coverMeshes.get(s.shot.id); if (c) c.userData.wobble = 1; }
  const strong = res === 'hit' || res === 'throw' || res === 'protected';
  // Hit-stop (~60 ms freeze) + a small shake sell the contact; whiffs only get a breath of shake.
  if (motion()) { shake = strong ? .16 : res === 'cover' || res === 'smash' ? .08 : .02; hitstop = strong ? .06 : res === 'cover' ? .035 : 0; }
  drainEvents(toScreen(s.shot.point));
  syncActors(runtime); renderUi();
}

// -------------------------------------------------------------------------------------------------
// CAMERA PAN on wide levels: arrows / A-D, the mouse resting near a screen edge (eases in), or a touch drag.
// A touch that moves less than DRAG_PX is still a tap that places the aim.
// -------------------------------------------------------------------------------------------------
const panKeys = new Set<string>();
let mouseX = -1, edgeHold = 0;
const DRAG_PX = 14, EDGE = .07, PAN_SPEED = 11;
let drag: { id: number; x: number; y: number; pan: number; moved: boolean } | null = null;
const canPan = () => game.mode === 'play' && LEVELS[game.level].pan > 0;
/** World units per screen pixel at the mid-ground depth, so a drag moves the street under the finger. */
function worldPerPx() { const d = camera.position.z + 2, half = Math.tan(camera.fov * Math.PI / 360) * d * camera.aspect; return 2 * half / innerWidth; }
function panDirection() {
  let dir = (panKeys.has('ArrowRight') || panKeys.has('KeyD') ? 1 : 0) - (panKeys.has('ArrowLeft') || panKeys.has('KeyA') ? 1 : 0);
  if (!dir && mouseX >= 0) { const f = mouseX / innerWidth; if (f < EDGE) dir = -(1 - f / EDGE); else if (f > 1 - EDGE) dir = (f - (1 - EDGE)) / EDGE; }
  return dir;
}
function updatePan(dt: number) {
  if (!canPan()) { panVel = 0; edgeHold = 0; return; }
  const dir = drag?.moved ? 0 : panDirection();
  // Smooth acceleration: the longer you lean on an edge or key, the faster the street slides (up to PAN_SPEED).
  edgeHold = dir ? Math.min(1, edgeHold + dt * 1.6) : 0;
  const want = dir * PAN_SPEED * (.35 + .65 * edgeHold), k = 1 - Math.exp(-dt * (dir ? 6 : 10));
  panVel += (want - panVel) * k;
  if (Math.abs(panVel) > .01) pan = clampPan(game.level, pan + panVel * dt);
}
function setPointer(e: PointerEvent) { pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); updateCrosshair(); }
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'mouse') mouseX = e.clientX;
  if (drag && e.pointerId === drag.id) {
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.hypot(dx, e.clientY - drag.y) > DRAG_PX && canPan() && !game.ultActive) drag.moved = true;
    if (drag.moved) { pan = clampPan(game.level, drag.pan - dx * worldPerPx()); return; }
  }
  if (e.pointerType !== 'touch' || game.ultActive) setPointer(e);
});
canvas.addEventListener('pointerleave', () => { mouseX = -1; });
canvas.addEventListener('pointerdown', e => {
  if (game.mode !== 'play') return;
  if (e.pointerType === 'touch') {
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, pan, moved: false };
    if (game.ultActive) setPointer(e); // during the ult the finger steers the stream
    return;
  }
  setPointer(e);
  if (game.ultActive) return; // during the ult the pointer only steers the stream
  perform(e.button === 2 ? 'grab' : 'punch');
});
const endDrag = (e: PointerEvent) => {
  if (!drag || e.pointerId !== drag.id) return;
  const tap = !drag.moved; drag = null;
  if (!tap || game.mode !== 'play') return;
  setPointer(e);
  if (!game.ultActive) { game.message = 'Прицел стоит. Жми «Удар» или «Хватай».'; updateHud(); }
};
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', e => { if (drag && e.pointerId === drag.id) drag = null; });
addEventListener('keyup', e => panKeys.delete(e.code));
addEventListener('blur', () => panKeys.clear());
canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('keydown', e => {
  if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(e.code)) { panKeys.add(e.code); if (canPan()) e.preventDefault(); }
  if (e.code === 'Escape' && !document.hidden) { game.pause(); renderUi(); }
  if ((e.code === 'Space' || e.code === 'KeyE') && !(e.target instanceof HTMLButtonElement)) { e.preventDefault(); if (!e.repeat) perform(e.code === 'Space' ? 'punch' : 'grab'); }
});
function showLevelGroup() { const shown = shownLevel(); for (const l of LEVEL_IDS) levelGroups[l].visible = shown === l; }
function suspendPage() { game.suspend(); renderUi(); }
document.addEventListener('visibilitychange', () => { if (document.hidden) suspendPage(); });
document.addEventListener('freeze', suspendPage);
addEventListener('pagehide', suspendPage);

function button(id: string, handler: () => void) { document.getElementById(id)?.addEventListener('click', () => { unlockAudio(); sound('ui'); handler(); }); }
function startLevel(level: number) { if (game.start(level)) { pan = 0; panVel = 0; lastMode = ''; damageNumbers.length = 0; pops.length = 0; shards.length = 0; } renderUi(); }
function chrome() { return '<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'; }

function renderUi() {
  const mode = game.mode;
  if (mode !== lastMode) { lastMode = mode; resize(); }
  applyLook(shownLevel());
  showLevelGroup();
  app.dataset.mode = mode; app.dataset.level = String(game.level);
  if (mode === 'menu') {
    ui.innerHTML = chrome() + '<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: ' + game.progress.best + ' / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>';
    button('start', () => { game.mode = 'select'; renderUi(); });
    button('how', () => {
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься: никакого автоприцела. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана или свайп — камера едет. Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>';
      button('close', renderUi);
    });
  } else if (mode === 'select') {
    const locked = game.progress.unlocked < 2;
    ui.innerHTML = chrome() + '<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>' + LEVELS[1].goal + ' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level" ' + (locked ? 'disabled' : '') + '><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>' + (locked ? 'Сначала наведи порядок в баре' : LEVELS[2].goal + ' задир · широкая панорама, крути камеру') + '</small></span><b>' + (locked ? '⊗' : '↗') + '</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>';
    button('level1', () => startLevel(1));
    button('level2', () => startLevel(2));
    button('back', () => { game.mode = 'menu'; renderUi(); });
  } else {
    ui.innerHTML = '<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>' + (LEVELS[game.level].pan > 0 ? '<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>' : '') + '<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';
    button('punch', () => perform('punch'));
    button('grab', () => perform('grab'));
    button('pause', () => { game.pause(); renderUi(); });
    if (mode === 'pause' || mode === 'result') {
      const result = mode === 'result', won = result && game.won;
      const actions = result ? resultActions(game) : [{ id: 'resume', label: 'ПРОДОЛЖИТЬ →', primary: true }, { id: 'select', label: 'ВЫБОР УРОВНЯ', primary: false }];
      const after = !won ? 'Ещё попытка — все сердца снова с тобой.' : game.level < LAST_LEVEL ? 'Открыта улица: двор и переулок на одной широкой панораме.' : 'Улица чиста. Бар открыт до утра.';
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">' + (result ? (won ? 'ПОРЯДОК НАВЕДЁН' : 'БЫВАЕТ И ТАК') : 'РУКИ НА ПЕРЕРЫВЕ') + '</span><h2>' + (result ? (won ? 'КРАСИВО<br>РАЗОБРАЛСЯ!' : 'НЕ ТОТ<br>РАЗМАХ.') : 'ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.') + '</h2><p>' + (result ? 'Счёт: <b>' + game.score + '</b> · Рекорд: ' + game.progress.best + '<br>' + after : 'Время остановилось. Ни один задира не ударит исподтишка.') + '</p><div class="buttons">' + actions.map(a => `<button id="${a.id}" class="${a.primary ? 'primary' : 'secondary'}">${a.label}</button>`).join('') + '</div></section>';
      button('resume', () => { game.pause(); renderUi(); });
      button('next', () => startLevel(game.level + 1));
      button('retry', () => startLevel(game.level));
      button('select', () => { game.mode = 'select'; renderUi(); });
      button('menu', () => { game.mode = 'menu'; renderUi(); });
    }
    updateHud();
  }
  syncActors(runtime);
  if (mode !== 'play') { ui.insertAdjacentHTML('beforeend', settingsUi()); bindSettings(renderUi); }
  measureControls();
}

function toScreen(p: Vec3) { const v = new THREE.Vector3(p.x, p.y, p.z).project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight }; }
/**
 * A screen point that free-aim would actually resolve to this actor right now (hitbox sampled top-down,
 * occlusion respected). Published for accessibility tooling and tests; null when fully behind cover.
 */
function clickablePoint(t: Actor) {
  const c = BODY[t.kind]; const p = pose(game.level, t, motion()); const [l, r, b, tp] = c.inset;
  for (const fy of [.8, .65, .9, .5, .35]) for (const fx of [.5, .38, .62]) {
    const world = { x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z };
    const s = toScreen(world); const shot = shotAt(new THREE.Vector2(s.x / innerWidth * 2 - 1, 1 - s.y / innerHeight * 2));
    if (shot.id === t.id) return { x: Math.round(s.x), y: Math.round(s.y) };
  }
  return null;
}

let lastAim = '';
function updateHud() {
  const enemies = game.actors.filter(t => t.kind === 'enemy');
  const labels = enemies.map(t => (t.x < -.5 ? 'слева' : t.x > .5 ? 'справа' : 'в центре') + (t.layer === 'foreground' ? ' (за укрытием рядом)' : t.layer === 'background' ? ' (в окне)' : ' (за забором)'));
  canvas.setAttribute('aria-label', `Уровень ${game.level}. Задиры: ${labels.join(', ') || 'нет'}. Наведи прицел, затем нажми Удар.`);
  const aim = JSON.stringify(game.mode === 'play' ? game.actors.map(t => ({ id: t.id, kind: t.kind, layer: t.layer, frame: views.get(t.id)?.frame ?? null, at: t.age >= .4 ? clickablePoint(t) : null })) : []);
  if (aim !== lastAim) { lastAim = aim; canvas.dataset.aim = aim; }
  const set = (id: string, text: string) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  set('hearts', '♥'.repeat(Math.max(0, game.hp)) + '♡'.repeat(5 - Math.max(0, game.hp)));
  set('stamina', Math.floor(game.stamina) + '');
  set('score', game.score.toString().padStart(5, '0'));
  set('combo', game.combo > 1 ? 'КОМБО ×' + game.combo : 'ДАЙ ИМ РАЗМАХ');
  set('progress', `${isBar() ? 'БАР' : 'УЛИЦА'} / ${game.defeated} ИЗ ${game.goal} ЗАДИР`);
  updatePanHints();
  const meter = document.getElementById('ultmeter'); if (meter) { meter.hidden = !game.ultActive; const f = document.getElementById('ultfill'); if (f) f.style.width = Math.round(game.ult.meter * 100) + '%'; }
  // Published for players' assistive tools and the production check: where a thrown hat would land on the counter.
  const zone = game.mode === 'play' && game.held === 'hat' ? JSON.stringify(landingPoint()) : '';
  if (canvas.dataset.zone !== zone) canvas.dataset.zone = zone;
  const ult = JSON.stringify({ phase: game.ult.phase, meter: +game.ult.meter.toFixed(2), tip: stream && game.ult.phase === 'pour' ? { x: Math.round(stream.tip.x * innerWidth), y: Math.round(stream.tip.y * innerHeight) } : null });
  if (canvas.dataset.ult !== ult) canvas.dataset.ult = ult;
  set('message', game.message);
  const energy = document.getElementById('energy'); if (energy) energy.style.width = game.stamina + '%';
  const grab = document.getElementById('grab'); if (grab) grab.innerHTML = game.held ? 'БРОСАЙ ↗<small>' + PROPS[game.held].name.toUpperCase() + ' · ' + costOf('grab', true, game.held) + ' СИЛ</small>' : 'ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small>';
}

/**
 * Subtle edge arrows on wide levels: shown while the street continues that way, with a count of bullies out of
 * view on that side; they pulse red when one of them is winding up a swing.
 */
function updatePanHints() {
  const range = LEVELS[game.level].pan; if (!range) return;
  const side = { L: { n: 0, hot: false }, R: { n: 0, hot: false } };
  for (const t of game.actors) {
    if (t.kind !== 'enemy') continue;
    const sx = toScreen(pose(game.level, t, motion())).x, k = sx < 0 ? side.L : sx > innerWidth ? side.R : null;
    if (k) { k.n++; if (t.deadline - t.age < WINDUP * 1.6) k.hot = true; }
  }
  for (const [id, more, s] of [['panL', pan > -range + .05, side.L], ['panR', pan < range - .05, side.R]] as const) {
    const el = document.getElementById(id); if (!el) continue;
    const state = (more || s.n ? 'on' : '') + (s.hot ? ' hot' : '');
    if (el.dataset.state !== state) { el.dataset.state = state; el.classList.toggle('on', more || s.n > 0); el.classList.toggle('hot', s.hot); }
    const label = s.n ? String(s.n) : ''; const span = el.querySelector('span'); if (span && span.textContent !== label) span.textContent = label;
  }
}

/** The on-screen buttons the resting gloves must not hide behind (phones put them full-width at the bottom). */
let avoidRect: Avoid | null = null, measureTick = 0;
function measureControls() {
  const r = document.querySelector('.controls')?.getBoundingClientRect();
  avoidRect = r && r.width ? { left: r.left, right: r.right, top: r.top } : null;
  // The status pill is centred text in a wide box: measure the visible text, not the box.
  const msg = document.getElementById('message');
  if (avoidRect && msg?.textContent) {
    const range = document.createRange(); range.selectNodeContents(msg); const t = range.getBoundingClientRect();
    if (t.width) avoidRect = { left: Math.min(avoidRect.left, t.left - 18), right: Math.max(avoidRect.right, t.right + 18), top: Math.min(avoidRect.top, t.top - 10) };
  }
}
// -------------------------------------------------------------------------------------------------
// SECRET ULT (bar only): hat on the counter → DING, freeze, intertitle, then a glossy yellow stream for 6 s.
// The jet rises from below the bottom edge (nothing else is ever shown), arcs and chases the aim with lag.
// -------------------------------------------------------------------------------------------------
let stream: Stream | null = null;
const drops: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
/** Puddles in viewport fractions; r in px. */
const puddles: { x: number; y: number; r: number; max: number }[] = [];
function startUlt() {
  stream = new Stream(); drops.length = 0;
  const flash = document.createElement('div'); flash.className = 'ultflash'; ui.append(flash); setTimeout(() => flash.remove(), 800);
  if (motion()) shake = .25;
}
function landingPoint() {
  const c = landingCover;
  for (const fx of [.55, .42, .68, .3, .8]) for (const dy of [.06, .2]) {
    const sp = toScreen({ x: c.min.x + (c.max.x - c.min.x) * fx, y: c.max.y - dy, z: c.max.z });
    const shot = shotAt(new THREE.Vector2(sp.x / innerWidth * 2 - 1, 1 - sp.y / innerHeight * 2));
    if (shot.kind === 'cover' && onLanding(game.level, shot.id, shot.point)) return { x: Math.round(sp.x), y: Math.round(sp.y) };
  }
  return null;
}
function updateUlt(dt: number) {
  trickle(game.pouring && game.mode === 'play');
  if (game.ult.phase === 'none' && (puddles.length || hatTrophy.visible)) { puddles.length = 0; drops.length = 0; hatTrophy.visible = false; stream = null; }
  // Intertitle card: shown after the frozen beat, until the pour starts. Driven by game time (pause-safe).
  const card = document.getElementById('ulttitle'), showCard = game.ult.phase === 'intro' && game.ult.t >= ULT.freeze;
  if (showCard && !card) ui.insertAdjacentHTML('beforeend', '<div id="ulttitle" class="intertitle" role="status"><div><small>❦ БАР «ДЛИННЫЕ РУКИ» ПРЕДСТАВЛЯЕТ ❦</small><b>СЕКРЕТНАЯ<br>УЛЬТА</b><small>шляпа на месте · дамы, отвернитесь</small></div></div>');
  if (!showCard && card) card.remove();
  for (let i = drops.length - 1; i >= 0; i--) { const d = drops[i]; d.life -= dt; d.vy += 2.4 * dt; d.x += d.vx * dt; d.y += d.vy * dt; if (d.life <= 0) drops.splice(i, 1); }
  if (!stream || !game.pouring || game.mode !== 'play') return;
  const tip = stream.update(dt, { x: (pointer.x + 1) / 2, y: (1 - pointer.y) / 2 });
  // The splash is a little wider than the jet: three rays, each victim soaked once per frame.
  const ids = new Map<number, string>(); let floor: Vec3 | null = null;
  for (const ox of [0, -.018, .018]) {
    const shot = shotAt(new THREE.Vector2((tip.x + ox) * 2 - 1, 1 - tip.y * 2));
    if (typeof shot.id === 'number' && !ids.has(shot.id)) ids.set(shot.id, shot.kind);
    if (ox === 0 && (shot.kind === 'whiff' || shot.point.y < .2)) floor = shot.point;
  }
  for (const [id, kind] of ids) if (kind === 'enemy' || kind === 'dog') game.soak({ kind: kind as 'enemy' | 'dog', id }, dt);
  if (motion() && Math.random() < .7) drops.push({ x: tip.x + (Math.random() - .5) * .02, y: tip.y, vx: (Math.random() - .5) * .22, vy: -.18 - Math.random() * .22, life: .22 + Math.random() * .2 });
  if (drops.length > 40) drops.splice(0, drops.length - 40);
  if (floor && floor.y < .2) {
    const sp = toScreen(floor), fx = sp.x / innerWidth, fy = sp.y / innerHeight, m = Math.min(innerWidth, innerHeight);
    const near = puddles.find(p => Math.hypot((p.x - fx) * innerWidth, (p.y - fy) * innerHeight) < m * .06);
    if (near) near.r = Math.min(near.max, near.r + dt * m * .08); else { puddles.push({ x: fx, y: fy, r: m * .015, max: m * (.07 + Math.random() * .04) }); if (puddles.length > 14) puddles.shift(); }
  }
}
// -------------------------------------------------------------------------------------------------
// HEALTH BARS + DAMAGE NUMBERS: colour HUD info drawn over each hurt enemy, sized by its depth, fading when calm.
// -------------------------------------------------------------------------------------------------
const damageNumbers: { x: number; y: number; z: number; amount: number; age: number; big: boolean }[] = [];
/** World point just above the drawn head of an enemy view (follows its rise / duck). */
function barAnchor(v: ActorView) {
  const top = v.skin ? SKIN_INSET[v.skin][3] : BODY.enemy.inset[3];
  return { x: v.group.position.x, y: v.group.position.y + BODY.enemy.h * top + .16, z: v.group.position.z };
}
function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) { g.beginPath(); g.roundRect(x, y, w, h, r); }
function drawHealthBars(g: CanvasRenderingContext2D, dt: number, ink: number) {
  for (const t of game.actors) {
    if (t.kind !== 'enemy' || !t.maxHp) continue;
    const v = views.get(t.id), a = healthBarAlpha(t, game.elapsed); if (!v || a <= 0) continue;
    const at = barAnchor(v), p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), unit = Math.abs(q.x - p.x);
    const w = THREE.MathUtils.clamp(unit * .95, 36, 150), h = Math.max(8, w * .16), x = p.x - w / 2, y = p.y - h, ratio = (t.hp ?? 0) / t.maxHp;
    v.ghost = Math.max(ratio, (v.ghost ?? 1) - dt * .9);
    g.save(); g.globalAlpha = a;
    roundRect(g, x, y, w, h, h / 2); g.fillStyle = '#2b2b2b'; g.fill();
    if (v.ghost > ratio) { roundRect(g, x, y, w * v.ghost, h, h / 2); g.fillStyle = '#fff6c8'; g.fill(); }
    roundRect(g, x, y, Math.max(h, w * ratio), h, h / 2); g.fillStyle = ratio > .6 ? '#8fdc2a' : ratio > .3 ? '#ffd84a' : '#ff4f6d'; if (ratio > 0) g.fill();
    if (v.flash > .3) { roundRect(g, x, y, w, h, h / 2); g.fillStyle = `rgba(255,255,255,${(v.flash - .3) * .9})`; g.fill(); }
    // Segment ticks every 10 HP: you can count the punches left.
    g.strokeStyle = '#151715'; g.lineWidth = Math.max(1.5, ink * .3);
    for (let k = 10; k < t.maxHp; k += 10) { const sx = x + w * k / t.maxHp; g.beginPath(); g.moveTo(sx, y + 2); g.lineTo(sx, y + h - 2); g.stroke(); }
    roundRect(g, x, y, w, h, h / 2); g.lineWidth = Math.max(2, ink * .45); g.stroke();
    g.beginPath(); g.moveTo(x + h * .6, y + h * .3); g.lineTo(x + w * Math.max(.1, ratio) - h * .4, y + h * .3); g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = Math.max(1, h * .16); g.lineCap = 'round'; g.stroke(); // shine
    g.restore();
  }
  for (let i = damageNumbers.length - 1; i >= 0; i--) {
    const d = damageNumbers[i]; d.age += dt; if (d.age > 1) { damageNumbers.splice(i, 1); continue; }
    const p = toScreen({ x: d.x, y: d.y + d.age * .7, z: d.z }), q = toScreen({ x: d.x + 1, y: d.y, z: d.z }), unit = Math.abs(q.x - p.x);
    const pop = d.age < .12 ? .6 + d.age / .12 * .6 : 1.2 - Math.min(.2, (d.age - .12));
    const size = THREE.MathUtils.clamp(unit * (d.big ? .55 : .42), 16, 64) * pop;
    g.save(); g.globalAlpha = Math.min(1, (1 - d.age) * 2.5); g.font = `900 ${size}px Arial`; g.textAlign = 'center'; g.textBaseline = 'bottom';
    g.lineJoin = 'round'; g.lineWidth = Math.max(3, size * .16); g.strokeStyle = '#151715'; g.strokeText('−' + d.amount, p.x + (d.big ? 0 : size * .3), p.y - 4);
    g.fillStyle = d.big ? '#ff6b3d' : '#ffd84a'; g.fillText('−' + d.amount, p.x + (d.big ? 0 : size * .3), p.y - 4); g.restore();
  }
}
const YELLOW = '#ffd400', GLOSS = '#fff6b8';
function drawStream(g: CanvasRenderingContext2D, W: number, H: number, time: number, ink: number) {
  const m = Math.min(W, H);
  for (const p of puddles) { g.beginPath(); g.ellipse(p.x * W, p.y * H, p.r, p.r * .3, 0, 0, Math.PI * 2); g.fillStyle = YELLOW; g.globalAlpha = .9; g.fill(); g.globalAlpha = 1; g.lineWidth = Math.max(2, ink * .45); g.strokeStyle = '#151715'; g.stroke(); g.beginPath(); g.ellipse(p.x * W - p.r * .25, p.y * H - p.r * .08, p.r * .35, p.r * .07, 0, 0, Math.PI * 2); g.fillStyle = GLOSS; g.fill(); }
  if (stream && game.ult.phase === 'pour') {
    const pts = stream.points().map(p => ({ x: p.x * W, y: p.y * H })), n = pts.length - 1, L: { x: number; y: number }[] = [], R: { x: number; y: number }[] = [], C: { x: number; y: number; w: number; nx: number; ny: number }[] = [];
    const wob = motion() ? 1 : 0;
    for (let i = 0; i <= n; i++) {
      const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n, i + 1)], dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy) || 1, nx = -dy / l, ny = dx / l, s = i / n;
      const w = m * (.068 * (1 - s) + .03 * s) * (1 + wob * .12 * Math.sin(s * 9 - time * 17)), off = wob * Math.sin(s * 15 - time * 24) * m * .007 * (.3 + s);
      const cx = pts[i].x + nx * off, cy = pts[i].y + ny * off; C.push({ x: cx, y: cy, w, nx, ny });
      L.push({ x: cx + nx * w / 2, y: cy + ny * w / 2 }); R.push({ x: cx - nx * w / 2, y: cy - ny * w / 2 });
    }
    g.beginPath(); L.forEach((p, i) => i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)); for (let i = n; i >= 0; i--) g.lineTo(R[i].x, R[i].y); g.closePath();
    g.fillStyle = YELLOW; g.fill(); g.lineJoin = 'round'; g.lineWidth = Math.max(2, ink * .55); g.strokeStyle = '#151715'; g.stroke();
    // Gloss: a bright highlight running along the upper side, plus flecks that ride the flow.
    g.beginPath(); for (let i = 1; i < n; i++) { const c = C[i], x = c.x + c.nx * c.w * .2, y = c.y + c.ny * c.w * .2; if (i === 1) g.moveTo(x, y); else g.lineTo(x, y); }
    g.lineCap = 'round'; g.lineWidth = m * .007; g.strokeStyle = GLOSS; g.stroke();
    g.fillStyle = '#ffffff';
    for (let k = 0; k < 6; k++) { const s = (time * 1.7 + k / 6) % 1, i = Math.min(n - 1, Math.floor(s * n)), c = C[i]; g.beginPath(); g.ellipse(c.x - c.nx * c.w * .15, c.y - c.ny * c.w * .15, c.w * .16, c.w * .07, Math.atan2(c.ny, c.nx) + Math.PI / 2, 0, Math.PI * 2); g.fill(); }
    // Splash crown where it lands.
    const t = pts[n]; g.strokeStyle = '#151715'; g.lineWidth = Math.max(2, ink * .4); g.fillStyle = YELLOW;
    for (let k = 0; k < 5; k++) { const a = -Math.PI / 2 + (k - 2) * .45 + (wob ? Math.sin(time * 30 + k) * .1 : 0), r0 = m * .02, r1 = m * (.045 + .012 * Math.sin(time * 40 + k * 2) * wob); g.beginPath(); g.moveTo(t.x + Math.cos(a) * r0, t.y + Math.sin(a) * r0); g.lineTo(t.x + Math.cos(a) * r1, t.y + Math.sin(a) * r1); g.stroke(); }
  }
  for (const d of drops) { g.beginPath(); g.arc(d.x * W, d.y * H, m * .0045 + 1, 0, Math.PI * 2); g.fillStyle = YELLOW; g.fill(); g.lineWidth = 1.5; g.strokeStyle = '#151715'; g.stroke(); }
}

let lastDraw = 0;
function drawArm(time: number) {
  const W = innerWidth, H = innerHeight, g = armCtx, dpr = armCanvas.width / Math.max(1, W), dt = Math.max(0, Math.min(.05, time - lastDraw)); lastDraw = time;
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, armCanvas.width, armCanvas.height);
  if (game.mode !== 'play' && game.mode !== 'pause') return;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (isBar()) drawStream(g, W, H, time, armMetrics(W, H).ink);
  const { ink, rim } = armMetrics(W, H), avoid = avoidRect, s = swing, k = s ? s.phase : 1;
  drawHealthBars(g, dt, ink);
  const spot = s ? { x: s.spot.x * W, y: s.spot.y * H } : { x: 0, y: 0 };
  const active = s && k < 1 ? (s.throwing ? 1 : sideFor(spot, W)) : 0;
  // Impact burst sits behind the glove so the fist stays readable on contact.
  for (let i = pops.length - 1; i >= 0; i--) {
    const p = pops[i]; p.age += dt; if (p.age > .5) { pops.splice(i, 1); continue; }
    const a = p.age / .5, size = p.size * (a < .15 ? .6 + a * 4 : 1.2 - a * .2);
    g.save(); g.globalAlpha = Math.max(0, 1 - Math.max(0, a - .5) * 2); g.translate(p.x, p.y); g.drawImage(bursts[p.key] ?? bursts.miss, -size / 2, -size / 2, size, size); g.restore();
  }
  for (let i = shards.length - 1; i >= 0; i--) {
    const d = shards[i]; d.life -= dt; if (d.life <= 0) { shards.splice(i, 1); continue; }
    d.vy += H * 2.2 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.rot += d.vr * dt;
    g.save(); g.translate(d.x, d.y); g.rotate(d.rot); g.globalAlpha = Math.min(1, d.life * 3);
    g.beginPath(); g.moveTo(-d.size, d.size * .6); g.lineTo(0, -d.size); g.lineTo(d.size * .8, d.size * .4); g.closePath();
    g.fillStyle = d.color; g.fill(); g.lineWidth = Math.max(1.5, ink * .3); g.strokeStyle = '#151715'; g.stroke(); g.restore();
  }
  if (s && s.resolved && !s.throwing && k < .8) {
    const a = (k - ARRIVE) / (.8 - ARRIVE), key = s.outcome && bursts[s.outcome] ? s.outcome : 'miss';
    const size = (key === 'miss' ? .9 : 1.6) * armMetrics(W, H).r * 2 * Math.max(.5, Math.min(1.2, 6.5 / Math.max(3, s.shot.distance))) * (a < .2 ? .6 + a * 3 : 1.2 - a * .2);
    g.save(); g.globalAlpha = Math.max(0, 1 - Math.max(0, a - .5) * 2); g.translate(spot.x, spot.y); g.rotate(-s.ray.direction.x * .4);
    g.drawImage(bursts[key], -size / 2, -size / 2, size, size); g.restore();
  }
  for (const side of [-1, 1] as const) {
    const bob = motion() ? Math.sin(time * 2.4 + (side > 0 ? 0 : 1.3)) * H * .006 : 0;
    let arm = restPose(side, W, H, avoid, bob);
    if (s && side === active) arm = s.throwing ? punchPose(side, W, H, whipSpot(s), k, WHIP, { throwing: true, avoid }) : punchPose(side, W, H, spot, k, { arrive: ARRIVE, release: RELEASE }, { depth: 6.5 / Math.max(3, s.shot.distance), grab: s.action === 'grab', avoid });
    const holding = game.held && side === 1 && !(s && s.throwing && active === 1);
    if (holding) arm = { ...arm, open: true };
    // Speed lines trail the fist while it flies out.
    if (s && side === active && k > .08 && k < ARRIVE && motion()) {
      const dx = arm.glove.x - arm.ctrl.x, dy = arm.glove.y - arm.ctrl.y, l = Math.hypot(dx, dy) || 1, ux = dx / l, uy = dy / l;
      g.strokeStyle = '#151715'; g.lineWidth = Math.max(2, ink * .5); g.lineCap = 'round';
      for (const o of [-1, 1]) { const off = arm.w1 / 2 + arm.r * .45, ox = -uy * o * off, oy = ux * o * off; g.beginPath(); g.moveTo(arm.glove.x - ux * arm.r * 2.4 + ox, arm.glove.y - uy * arm.r * 2.4 + oy); g.lineTo(arm.glove.x - ux * arm.r * 1.25 + ox, arm.glove.y - uy * arm.r * 1.25 + oy); g.stroke(); }
    }
    inkArm(g, arm, ink, rim);
    const item = holding ? game.held : s && s.throwing && s.held && side === active && !s.launched ? s.held : null;
    if (item) {
      const img = textures[item].image as CanvasImageSource, h = arm.r * 2.2, w = h * BODY[item].w / BODY[item].h;
      g.save(); g.translate(arm.glove.x, arm.glove.y - arm.r * .5); g.rotate(motion() ? Math.sin(time * 2) * .07 : 0); g.drawImage(img, -w / 2, -h * .8, w, h); g.restore();
    }
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
  updateUlt(game.mode === 'play' ? dt : 0);
  if (game.events.length) drainEvents();
  showLevelGroup();
  if (lastHp > game.hp && motion()) { const flash = document.createElement('div'); flash.className = 'flash'; ui.append(flash); setTimeout(() => flash.remove(), 400); }
  lastHp = game.hp;
  syncActors(runtime);
  updatePan(game.mode === 'play' ? dt : 0);
  if (game.mode === 'play') { updateHud(); if ((measureTick -= dt) <= 0) { measureTick = .25; measureControls(); } }

  if (swing && game.mode !== 'pause') {
    swing.phase = Math.min(1, swing.phase + dt / (swing.throwing ? WHIP.duration : DURATION));
    if (swing.throwing && !swing.launched && swing.phase >= WHIP.arrive) release(swing);
    else if (!swing.throwing && !swing.resolved && swing.phase >= ARRIVE) land(swing);
    if (swing.phase >= 1) swing = null;
  }
  if (game.mode !== 'play' && game.mode !== 'pause') swing = null;

  flyProps(dt); syncFlights();
  animateLeaving(dt, runtime);
  for (const cover of coverMeshes.values()) {
    const w = cover.userData.wobble as number | undefined; if (!w) continue;
    cover.scale.set(1 + Math.sin(w * 30) * w * .05, 1 - Math.sin(w * 30) * w * .04, 1); cover.userData.wobble = Math.max(0, w - dt * 3);
  }
  if (motion()) for (const cloth of swaying) cloth.rotation.z = Math.sin(runtime * 1.7 + cloth.userData.sway) * .08;
  if (motion()) for (const door of swinging) door.rotation.y = door.userData.swing * (.35 + .3 * Math.sin(runtime * 2.3 + door.userData.swing));

  resizeCameraShake(dt);
  renderer.info.reset();
  renderer.clear();
  renderer.render(scene, camera);
  drawArm(runtime);
}
function resizeCameraShake(dt: number) {
  if (game.mode === 'menu' || game.mode === 'select') { placeSun(0); return; }
  const rig = cameraFor(innerWidth, innerHeight, pan); placeSun(pan);
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
      /** Screen point that free-aim resolves to this actor right now (null if fully occluded). */
      project(id: number) { const t = game.actors.find(v => v.id === id); return t ? clickablePoint(t) : null; },
      /** Predict what a click at (x,y) would strike, using the same resolver the game uses. */
      shotAt(x: number, y: number) { const s = shotAt(new THREE.Vector2(x / innerWidth * 2 - 1, 1 - y / innerHeight * 2)); return { kind: s.kind, id: s.id ?? null, distance: s.distance }; },
      /** Sample the full sprite hitbox of an actor and report what each screen point would actually hit. */
      samples(id: number) {
        const t = game.actors.find(v => v.id === id); if (!t) return [];
        const c = BODY[t.kind], p = pose(game.level, t, motion()), [l, r, b, tp] = c.inset, out = [];
        for (let fy = .05; fy < 1; fy += .1) for (let fx = .1; fx < 1; fx += .2) {
          const s = toScreen({ x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z });
          const shot = shotAt(new THREE.Vector2(s.x / innerWidth * 2 - 1, 1 - s.y / innerHeight * 2));
          out.push({ x: Math.round(s.x), y: Math.round(s.y), kind: shot.kind, id: shot.id ?? null });
        }
        return out;
      },
      flights: () => game.flights.map(f => ({ id: f.id, kind: f.kind, pos: f.pos, struck: f.struck })),
      swing: () => swing ? { phase: swing.phase, resolved: swing.resolved, outcome: swing.outcome ?? null, shot: swing.shot.kind } : null,
      setTimeScale(v: number) { timeScale = v; },
      setPan(x: number) { pan = clampPan(game.level, x); resizeCameraShake(0); return pan; },
      pan: () => pan,
      strikes: () => strikes.slice(),
      webgl: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, context: renderer.getContext().getParameter(renderer.getContext().VERSION) }),
    },
  });
}
