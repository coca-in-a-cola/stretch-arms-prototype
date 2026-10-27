import * as THREE from 'three';
import { Pool } from './pool';
import { type GameEvent, Game, GAGS, HAZARD, loadProgress, resultActions, healthBarAlpha, PROGRESS_KEY, costOf, ULT, type Action, type Kind, type Actor, type Outcome } from './game';
import { resolveShot, type Hittable, type Shot, type Vec3 } from './aim';
import { LEVELS, BODY, SKIN_INSET, WINDUP, YARD_X, ALLEY_X, LAST_LEVEL, clampPan, pose, dogWalk, dogAscent, bodyOf, hittables, cameraFor, onLanding, type Cover, type BodyKind, type Skin } from './layout';
import { FRIEND_MAD, THUG, friendPose, type FriendKind, type ThugKind } from './friends';
import './style.css';
import { fitStage, screenToStage, ndcToScreen, stageToScreen } from './viewport';
import { heraldView } from './heraldView';
import { makeStreet } from './street';
import { makeBar } from './bar';
import { Stream, cardAt } from './ult';
import { PROPS, PROP_KINDS, REACH_COST } from './props';
import { ragtimeScore } from './ragtime';
import { LOOKS, greyscaleWorld, greyCanvas, greyColor } from './palette';
import { armMetrics, restPose, punchPose, sideFor, drawArm as inkArm, type Avoid, type Pt } from './arm';
import { sweepSegment, HitCooldownTracker, ContactHandTracker, selectLocalAimEnemy, type AimCandidate } from './gestures';
import { reducedMotion, unlockAudio, sound, trickle, ragtime, settingsUi, bindSettings } from './preferences';
import './stage.css';

let saved = loadProgress(() => null);
try { saved = loadProgress(k => localStorage.getItem(k)); } catch { /* storage blocked: fresh progress */ }
const game = new Game(saved, p => { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch { game.message = 'Сохранение недоступно в этом браузере.'; } });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<div id="safe-probe"></div><div id="stage"><canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><div id="herald" hidden></div><canvas id="arm" aria-hidden="true"></canvas></div><div id="ui"></div><div id="orientation-prompt" class="orientation-overlay" hidden></div>';
const ui = document.querySelector<HTMLDivElement>('#ui')!;
const orientationOverlay = document.querySelector<HTMLDivElement>('#orientation-prompt');
let portraitBypassed = false;
function checkOrientation() {
  if (!orientationOverlay) return;
  const isPortrait = window.innerHeight > window.innerWidth;
  const show = isPortrait && !portraitBypassed;
  if (!show) {
    orientationOverlay.hidden = true;
    orientationOverlay.innerHTML = '';
    return;
  }
  if (orientationOverlay.hidden || !orientationOverlay.querySelector('#portrait-bypass')) {
    orientationOverlay.hidden = false;
    orientationOverlay.innerHTML = '<div class="orientation-card" role="dialog" aria-modal="true" aria-labelledby="orient-title"><div class="orientation-icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="52" height="52"><rect x="13" y="7" width="22" height="34" rx="4" fill="none" stroke="#f4f1e8" stroke-width="3"/><line x1="20" y1="35" x2="28" y2="35" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M 37 15 A 13 13 0 0 1 37 31" fill="none" stroke="#c7f653" stroke-width="3" stroke-dasharray="4 2"/><polyline points="34,31 38,33 40,28" fill="none" stroke="#c7f653" stroke-width="3" stroke-linejoin="round"/></svg></div><div class="eyebrow" style="justify-content:center">ГОРИЗОНТАЛЬНЫЙ РЕЖИМ</div><h2 id="orient-title">ПОВЕРНИТЕ<br><em>УСТРОЙСТВО</em></h2><p>Пожалуйста, переверните устройство в горизонтальный режим</p><div class="buttons" style="justify-content:center"><button id="portrait-bypass" class="secondary" type="button">Продолжить</button></div></div>';
    orientationOverlay.querySelector('#portrait-bypass')?.addEventListener('click', () => {
      unlockAudio();
      sound('ui');
      portraitBypassed = true;
      checkOrientation();
    });
  }
}
// Level-start briefing by the herald (once per level per session); touch wording if the player taps.
game.briefings = true; game.touch = matchMedia('(pointer: coarse)').matches;
addEventListener('pointerdown', e => { game.touch = e.pointerType === 'touch'; }, { capture: true });
const herald = heraldView(document.querySelector<HTMLElement>('#herald')!, () => skipBriefing());
function skipBriefing() { if (!game.briefing || game.mode !== 'play') return; unlockAudio(); sound('ui'); game.skipBriefing(); renderUi(); }
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
    cloth.userData.sway = i; cloth.userData.cloth = color;
  });
  block(g, .16, 5.6, .16, '#596358', -5.4, 2.8, -6); const lamp = new THREE.Mesh(new THREE.SphereGeometry(.28, 14, 10), new THREE.MeshBasicMaterial({ color: '#f7ffe0' })); lamp.position.set(-5.4, 5.7, -6); g.add(lamp);
  return g;
}

const signs: THREE.CanvasTexture[] = [];
const levelGroups: Record<number, THREE.Group> = {};
const levelScenery: Record<number, Hittable[]> = {};
const swaying: THREE.Object3D[] = [];
const swinging: THREE.Object3D[] = [];
/** Gag props in the scene, by gag id (lamp pivots, ringing lamp heads, the cuckoo clock), and the washing on the line. */
const gagParts = new Map<string, THREE.Object3D>();
const laundry: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial>[] = [];
const barPainting = new THREE.Texture(); barPainting.colorSpace = THREE.SRGBColorSpace;
new THREE.TextureLoader().load(asset('gen_bar_backdrop.png'), t => { barPainting.image = t.image; barPainting.needsUpdate = true; }, undefined, () => { /* bare walls if the painting is missing */ });
const LEVEL_IDS = [1, 2] as const;
for (const level of LEVEL_IDS) {
  const group = new THREE.Group(); scene.add(group); levelGroups[level] = group;
  const backdrop = new THREE.Group(); group.add(backdrop);
  if (isBar(level)) backdrop.add(makeBar(barPainting));
  else { const y = courtyard(), a = makeStreet({ left: false }); y.position.x = YARD_X; a.position.x = ALLEY_X; backdrop.add(y, a); }
  backdrop.traverse(o => {
    if (o.userData.sway !== undefined) swaying.push(o); if (o.userData.swing !== undefined) swinging.push(o);
    if (o.userData.lamp !== undefined) gagParts.set('gag-lamp-' + o.userData.lamp, o); if (o.userData.bell !== undefined) gagParts.set('gag-bell-' + o.userData.bell, o);
    if (o.userData.cloth) laundry.push(o as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshStandardMaterial>);
  });
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
const skins: Record<Exclude<Skin, 'cat' | 'weasel'>, THREE.Texture> = { walrus: spriteTexture('gen_walrus.png', 'enemy'), bulldog: spriteTexture('gen_bulldog.png', 'enemy') };
/** Drawn acting frames (gen_ sheets): the bully's wind-up / hurt / knocked-out poses, the dog's walk and sad sit. */
const frames = {
  windup: spriteTexture('gen_cat_windup.png', 'enemy'), hurt: spriteTexture('gen_cat_hurt.png', 'enemy'), ko: spriteTexture('gen_cat_ko.png', 'enemy'),
  walk: spriteTexture('gen_dog_walk.png', 'dog'), sad: spriteTexture('gen_dog_sad.png', 'dog'),
};
/** Friends (must not hit): calm / offended / furious, plus the mole's lantern pop. Thugs: appear / attack / knocked out. */
const friendFrames = Object.fromEntries((['granny', 'kitten', 'pigeon', 'drunk'] as const).map(w => [w, { idle: spriteTexture(`gen_${w}_idle.png`, 'dog'), mad: spriteTexture(`gen_${w}_mad.png`, 'dog'), fury: spriteTexture(`gen_${w}_fury.png`, 'dog') }])) as Record<FriendKind, { idle: THREE.Texture; mad: THREE.Texture; fury: THREE.Texture; lantern?: THREE.Texture }>;
{ const hurt = spriteTexture('gen_mole_hurt.png', 'dog'); friendFrames.mole = { idle: spriteTexture('gen_mole_up.png', 'dog'), lantern: spriteTexture('gen_mole_lantern.png', 'dog'), mad: hurt, fury: hurt }; }
{ const weasel = spriteTexture('gen_weasel.png', 'dog'); friendFrames.bartender = { idle: weasel, mad: weasel, fury: weasel }; }
const thugFrames = Object.fromEntries((['rat', 'gang', 'kid'] as const).map(w => [w, { appear: spriteTexture(`gen_${w}_appear.png`, 'enemy'), attack: spriteTexture(`gen_${w}_attack.png`, 'enemy'), ko: spriteTexture(`gen_${w}_ko.png`, 'enemy') }])) as Record<ThugKind, { appear: THREE.Texture; attack: THREE.Texture; ko: THREE.Texture }>;
for (const t of [...Object.values(textures), ...Object.values(frames), ...Object.values(skins), ...Object.values(friendFrames).flatMap(f => Object.values(f)), ...Object.values(thugFrames).flatMap(f => Object.values(f))]) { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; }
const frameName = new Map<THREE.Texture, string>([[textures.enemy, 'idle'], [textures.dog, 'sit'], ...Object.entries(frames).map(([k, t]) => [t, k] as [THREE.Texture, string]),
  ...Object.values(friendFrames).flatMap(f => Object.entries(f).map(([k, t]) => [t, k] as [THREE.Texture, string])), ...Object.values(thugFrames).flatMap(f => Object.entries(f).map(([k, t]) => [t, k] as [THREE.Texture, string]))]);
function showFrame(v: ActorView, map: THREE.Texture) {
  if (v.skin && v.kind === 'enemy') { v.frame = map === frames.windup ? 'windup' : map === frames.hurt ? 'hurt' : map === frames.ko ? 'ko' : 'idle'; return; } // patrons keep their one pose
  if (v.sprite.material.map === map) return;
  v.frame = frameName.get(map);
  v.sprite.material.map = map; (v.sprite.customDepthMaterial as THREE.MeshDepthMaterial).map = map;
}
signs.push(art('sign'));
const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.25), new THREE.MeshBasicMaterial({ map: signs[0], alphaTest: .5 }));
sign.position.set(-6.3 + YARD_X, 2.5, -8.8); levelGroups[2].add(sign);
// The violet hat mat on the counter top (colour = you can do something here) and the trophy hat once it lands.
const landingCover = LEVELS[1].covers.find(c => c.id === LEVELS[1].landing?.cover)!;
// Once it lands the bowler sits UPSIDE DOWN on the counter — crown down, opening up — a receptacle for the bet.
// The plane is flipped vertically and lifted by the drawn hat's height so the crown rests on the slab.
const HAT_SCALE = 1.35, HAT_TALL = BODY.hat.h * BODY.hat.inset[3] * HAT_SCALE; // a touch oversized so it reads at counter depth
const hatTrophy = new THREE.Mesh(new THREE.PlaneGeometry(BODY.hat.w, BODY.hat.h).translate(0, BODY.hat.h / 2, 0), new THREE.MeshBasicMaterial({ map: textures.hat, alphaTest: .5, side: THREE.DoubleSide }));
hatTrophy.visible = false; hatTrophy.renderOrder = 2; hatTrophy.scale.set(HAT_SCALE, -HAT_SCALE, 1);
/** Screen centre and half-width of the upturned hat's opening (null when not on the counter). */
function hatMouth() {
  if (!hatTrophy.visible) return null;
  const p = hatTrophy.position, c = toScreen({ x: p.x, y: p.y - .04, z: p.z }), e = toScreen({ x: p.x + BODY.hat.w * HAT_SCALE * .36, y: p.y - .04, z: p.z });
  return { x: c.x, y: c.y, r: Math.abs(e.x - c.x) };
}
// The world is B/W film; only characters, grabbable props, the player's arms and FX keep colour.
for (const t of signs) greyCanvas(t.image as HTMLCanvasElement);
for (const level of LEVEL_IDS) greyscaleWorld(levelGroups[level]);
greyColor(ink.color);
// Colour = you can do something with it: the washing on the line (laundry gag) keeps its paint.
for (const c of laundry) { c.material = c.material.clone(); c.material.color.set(c.userData.cloth as string); }
{ // Gag cues added after the grey pass: the cuckoo clock on the back-room wall, sheet music on the piano, brass bells under the near street lamps.
  const clock = LEVELS[1].gags.find(g => g.id === 'gag-cuckoo')!, cw = .66 / .852, ch = cw / .8;
  const cuckoo = new THREE.Mesh(new THREE.PlaneGeometry(cw, ch).translate(0, ch / 2, 0), new THREE.MeshBasicMaterial({ map: spriteTexture('gen_cuckoo.png', 'barrel'), alphaTest: .5 }));
  (cuckoo.material.map as THREE.Texture).colorSpace = THREE.SRGBColorSpace;
  cuckoo.position.set((clock.min!.x + clock.max!.x) / 2, clock.min!.y - .02, clock.max!.z - .02); levelGroups[1].add(cuckoo); gagParts.set('gag-cuckoo', cuckoo);
  const c = document.createElement('canvas'); c.width = 256; c.height = 150; const g = c.getContext('2d');
  if (g) {
    g.fillStyle = '#fff4d6'; g.fillRect(0, 0, 256, 150); g.strokeStyle = '#3a2a1e'; g.lineWidth = 2; for (let y = 34; y <= 114; y += 16) { g.beginPath(); g.moveTo(14, y); g.lineTo(242, y); g.stroke(); }
    g.font = '900 54px Georgia'; ['#e8475f', '#2f6fe0', '#e8475f', '#2f9c5a', '#2f6fe0'].forEach((col, i) => { g.fillStyle = col; g.fillText('♪', 22 + i * 46, 96 - (i % 3) * 14); });
    g.strokeStyle = '#151715'; g.lineWidth = 6; g.strokeRect(3, 3, 250, 144);
  }
  const sheetTex = new THREE.CanvasTexture(c); sheetTex.colorSpace = THREE.SRGBColorSpace;
  const piano = LEVELS[1].covers.find(v => v.id === 'piano')!, sheet = new THREE.Mesh(new THREE.PlaneGeometry(.62, .36), new THREE.MeshBasicMaterial({ map: sheetTex }));
  sheet.position.set((piano.min.x + piano.max.x) / 2, piano.max.y * .8, piano.max.z + .045); sheet.rotation.x = -.12; levelGroups[1].add(sheet);
  for (const id of ['gag-bell-0', 'gag-bell-1']) {
    const head = gagParts.get(id); if (!head) continue; const at = head.getWorldPosition(new THREE.Vector3());
    const bell = new THREE.Mesh(new THREE.SphereGeometry(.17, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#e0a83a', metalness: .6, roughness: .3, side: THREE.DoubleSide }));
    bell.position.set(at.x, at.y - .3, at.z); levelGroups[2].add(bell); bell.userData.ringer = id;
    const clapper = new THREE.Mesh(new THREE.SphereGeometry(.05, 8, 6), new THREE.MeshStandardMaterial({ color: '#c8742a' })); clapper.position.y = -.04; bell.add(clapper);
    gagParts.set(id, bell);
  }
}
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
const protectedBadgeTex = overlayTexture(g => {
  const w = 256, h = 84, r = 24;
  g.beginPath(); g.roundRect(8, 8, w - 16, h - 16, r);
  g.fillStyle = '#225530'; g.fill();
  g.strokeStyle = '#0f2414'; g.lineWidth = 7; g.stroke();
  g.beginPath(); g.roundRect(14, 14, w - 28, h - 28, r - 6);
  g.strokeStyle = '#a3e8b0'; g.lineWidth = 3; g.stroke();
  g.font = '900 32px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.strokeStyle = '#0f2414'; g.lineWidth = 5; g.strokeText('НЕ ТРОГАТЬ', w / 2, h / 2 + 1);
  g.fillStyle = '#f0fff4'; g.fillText('НЕ ТРОГАТЬ', w / 2, h / 2 + 1);
}, 256, 84);
const zzzTex = overlayTexture(g => { g.font = '900 54px Georgia'; g.lineWidth = 7; g.strokeStyle = '#1c1d1a'; g.fillStyle = '#9fd3ff'; [[30, 110, 1], [100, 72, .8], [170, 40, .6]].forEach(([x, y, k]) => { g.save(); g.translate(x, y); g.scale(k, k); g.strokeText('Z', 0, 0); g.fillText('Z', 0, 0); g.restore(); }); });
/** A soft shaft of heavenly light for the dog's ascension. */
const beamTex = overlayTexture(g => { const gr = g.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, 'rgba(255,240,170,0)'); gr.addColorStop(.25, 'rgba(255,240,170,.55)'); gr.addColorStop(1, 'rgba(255,240,170,.1)'); g.fillStyle = gr; g.beginPath(); g.moveTo(90, 0); g.lineTo(166, 0); g.lineTo(240, 512); g.lineTo(16, 512); g.closePath(); g.fill(); }, 256, 512);
function overlay(map: THREE.Texture, w: number, h: number, order = 2) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false }));
  s.scale.set(w, h, 1); s.renderOrder = order; return s;
}

interface ActorView {
  kind: Kind; group: THREE.Group; body: THREE.Group; sprite: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  flash: number; sad: number; facing: number; antic?: boolean; knock?: number; who?: FriendKind | ThugKind; badge?: THREE.Sprite; zzz?: THREE.Sprite; beam?: THREE.Sprite; hole?: THREE.Mesh; ascending?: boolean; /** Health bar: the trailing 'just lost' chunk, eased down to the real value. */ ghost?: number; frame?: string; wound?: boolean; skin?: Exclude<Skin, 'cat' | 'weasel'>; wet?: number; yuck?: boolean; warning?: THREE.Sprite; stars?: THREE.Sprite; halo?: THREE.Sprite; cloud?: THREE.Sprite;
}
const actorGroup = new THREE.Group(); scene.add(actorGroup);
const views = new Map<number, ActorView>();
/** Views whose actor has left the game state but still plays an exit: knocked out, or lunging in to attack. */
type Exit = 'ko' | 'attack' | 'pancake' | 'stars' | 'birds';
const leaving: { view: ActorView; age: number; spin: number; how: Exit; done?: boolean }[] = [];
const exits = new Map<number, Exit>();

function makeView(t: Actor): ActorView {
  const c = bodyOf(t.kind, t.who); const group = new THREE.Group(), body = new THREE.Group(); group.add(body);
  const geometry = new THREE.PlaneGeometry(c.w, c.h); geometry.translate(0, c.h / 2, 0);
  const skin = t.kind === 'enemy' && t.skin && (t.skin === 'walrus' || t.skin === 'bulldog') ? t.skin : undefined;
  const map = skin ? skins[skin] : t.kind === 'friend' ? friendFrames[t.who as FriendKind].idle : t.kind === 'thug' ? thugFrames[t.who as ThugKind].appear : textures[t.kind as BodyKind];
  const material = new THREE.MeshBasicMaterial({ map, alphaTest: .5, side: THREE.DoubleSide });
  const sprite = new THREE.Mesh(geometry, material); sprite.castShadow = true;
  sprite.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map, alphaTest: .5 });
  body.add(sprite);
  if (t.y <= .01 && t.who !== 'mole') { const shadow = new THREE.Mesh(new THREE.CircleGeometry(c.w * .36, 24), blob); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .035; shadow.scale.y = .45; shadow.renderOrder = 1; group.add(shadow); }
  // Enemies square up toward the middle of the yard; the dog turns with its stroll.
  const view: ActorView = { kind: t.kind, group, body, sprite, flash: 0, sad: 0, skin, who: t.who, facing: t.kind === 'enemy' && t.x < 0 ? -1 : t.kind === 'thug' ? -(t.side ?? 1) : 1 };
  if (t.kind === 'friend') {
    view.badge = overlay(protectedBadgeTex, .72, .24); body.add(view.badge);
    if (t.who === 'drunk') { view.zzz = overlay(zzzTex, .7, .35); view.zzz.position.set(.45, c.h * .95, 0); body.add(view.zzz); }
  }
  if (t.kind === 'thug') {
    view.warning = new THREE.Sprite(new THREE.SpriteMaterial({ map: ring, depthWrite: false })); view.warning.position.set(0, c.h * .82, 0); body.add(view.warning);
    if (t.from === 'manhole') { view.hole = new THREE.Mesh(new THREE.CircleGeometry(.62, 24), new THREE.MeshBasicMaterial({ color: '#141414' })); view.hole.rotation.x = -Math.PI / 2; view.hole.scale.y = .5; view.hole.renderOrder = 1; group.add(view.hole); }
  }
  view.frame = skin ? 'idle' : frameName.get(map);
  if (t.kind === 'enemy') {
    view.warning = new THREE.Sprite(new THREE.SpriteMaterial({ map: ring, depthWrite: false })); view.warning.position.set(0, c.h + .3, 0); body.add(view.warning);
    view.stars = overlay(starsTex, 1.1, .55); view.stars.position.set(0, c.h * .97, .05); view.stars.visible = false; body.add(view.stars);
  }
  if (t.kind === 'dog') {
    view.halo = overlay(haloTex, .62, .31); body.add(view.halo);
    view.badge = overlay(protectedBadgeTex, .64, .21); body.add(view.badge);
    view.cloud = overlay(cloudTex, .8, .4); view.cloud.visible = false; body.add(view.cloud);
    view.beam = overlay(beamTex, 1.6, 6, 1); view.beam.visible = false; group.add(view.beam);
  }
  actorGroup.add(group); views.set(t.id, view); return view;
}
function disposeView(v: ActorView) { actorGroup.remove(v.group); v.group.traverse(o => { if (o instanceof THREE.Mesh && o.geometry) o.geometry.dispose(); }); v.sprite.material.dispose(); }

// The menu stands in the bar (level 1): the walrus by the piano, the halo dog, the weasel behind the counter.
const menuActors: Actor[] = [
  { id: -1, kind: 'enemy', skin: 'walrus', x: -2.55, y: 0, z: 2.2, age: 1, deadline: 60 },
  { id: -2, kind: 'dog', x: .2, y: 0, z: -.7, age: 1, deadline: Infinity },
  { id: -3, kind: 'friend', who: 'bartender', x: .3, y: .3, z: -3.15, age: 1, deadline: 60 },
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
    // Ids restart with every level: a view left over from another actor with the same id is rebuilt, never reused.
    const old = views.get(t.id), skin = t.kind === 'enemy' && t.skin && (t.skin === 'walrus' || t.skin === 'bulldog') ? t.skin : undefined;
    if (old && (old.kind !== t.kind || old.skin !== skin)) { views.delete(t.id); disposeView(old); }
    const view = views.get(t.id) ?? makeView(t); const c = bodyOf(t.kind, t.who);
    const p = pose(game.level, t, motion);
    view.group.position.set(p.x, p.y, p.z);
    const a = motion ? (t.id < 0 ? time : t.age) + t.id * .7 : 0;
    let sx = 1, sy = 1, rot = 0, lift = 0; const tint = new THREE.Color(1, 1, 1);
    if (t.kind === 'enemy') {
      tint.setRGB(1.0, 0.88, 0.88);
      const isForeground = t.layer === 'foreground' || t.layer === undefined;
      const left = t.deadline - t.age, wind = (motion && isForeground) ? THREE.MathUtils.clamp(1 - left / WINDUP, 0, 1) : 0;
      const bounce = Math.abs(Math.sin(a * 4.2));
      sx = 1 + (1 - bounce) * .05; sy = 1 - (1 - bounce) * .06 + bounce * .03; lift = bounce * .06; rot = Math.sin(a * 2.1) * .035;
      if (wind > 0 && !view.wound && t.id > 0) { view.wound = true; sound('windup'); }
      showFrame(view, wind > 0 ? frames.windup : textures.enemy);
      if (wind > 0) {
        // Wind-up: the drawn wrench-overhead pose, rocking back, puffing up, flushing red and trembling.
        const tremble = Math.sin(time * 48) * .02 * wind;
        rot = -view.facing * .08 * wind + tremble; sx *= 1 + .08 * wind; sy *= 1 + .1 * wind; lift = 0;
        const pulse = .5 + .5 * Math.sin(time * 18); tint.setRGB(1, (1 - .45 * wind * pulse) * 0.88, (1 - .5 * wind * pulse) * 0.88);
      }
      if (view.warning) {
        const shown = t.id > 0 && isForeground && left < WINDUP * 1.6;
        view.warning.visible = shown; view.warning.scale.setScalar(.38 + wind * .3 + (motion ? Math.sin(time * 14) * .03 : 0));
      }
      if (view.stars) view.stars.visible = false;
      view.body.position.x = 0;
      if (t.antic && motion) {
        if (!view.antic && t.age > .45 && t.id > 0) { view.antic = true; const s = toScreen(barAnchor(view)); callout({ dance: 'ПЛЯШЕТ! БЕЙ!', sandwich: 'ОБЕДАЕТ! БЕЙ!', selfie: 'СЕЛФИ! БЕЙ!' }[t.antic], s.x, s.y - 20, 'combo'); }
        if (t.antic === 'dance') { const b = Math.abs(Math.sin(time * 9)); lift = b * .16; rot = Math.sin(time * 9) * .22; view.facing = Math.sin(time * 4.5) > 0 ? 1 : -1; sx *= 1 + (1 - b) * .08; sy *= 1 - (1 - b) * .08; }
        else if (t.antic === 'sandwich') { const chew = Math.abs(Math.sin(time * 11)); sy *= 1 - chew * .05; sx *= 1 + chew * .04; rot = .04; }
        else { rot = Math.sin(time * 1.5) * .05 - .06 * view.facing; lift = .03; }
      } else view.antic = false;
      if (t.blind && motion) { showFrame(view, frames.hurt); view.body.position.x = Math.sin(time * 5.5) * .2; rot = Math.sin(time * 7) * .16; lift = 0; } // pie in the face: staggering blind
      if (view.knock) { view.knock = Math.max(0, view.knock - 1 / 60 * 1.5); lift += Math.sin(view.knock * Math.PI) * .9; rot += view.knock * .5 * view.facing; }
      // Ult soaking: disgust — green about the gills, shuddering, shrinking away.
      const wet = t.wet ?? 0; view.wet = wet;
      if (wet > 0) {
        if (!view.yuck) { view.yuck = true; sound('yuck'); const p = toScreen({ x: view.group.position.x, y: view.group.position.y + 1.6, z: view.group.position.z }); callout(['ФУ-У!', 'БЕ-Е!', 'ФИ!'][t.id % 3], p.x, p.y, 'bad'); }
        const quake = motion ? Math.sin(time * 70 + t.id) * .05 * (.4 + wet) : 0;
        rot = quake; sx *= 1 + .08 * wet; sy *= 1 - .14 * wet; lift = 0; tint.setRGB(1 - .45 * wet, 1, 1 - .55 * wet);
      }
    } else if (t.kind === 'dog') {
      tint.setRGB(0.92, 1.0, 0.94);
      const walk = dogWalk(motion ? (t.id < 0 ? time : t.age) : 0, motion); view.facing = -walk.facing;
      if (walk.walking) { const hop = Math.abs(Math.sin(a * 11)); lift = hop * .09; sy = 1 + hop * .04; rot = Math.sin(a * 11) * .06; }
      else { const breathe = Math.sin(a * 2.6); sy = 1 + breathe * .025; sx = 1 - breathe * .012; rot = Math.sin(a * .9) * .03; }
      view.sad = Math.max(0, view.sad - 1 / 60);
      const sad = Math.min(1, view.sad);
      showFrame(view, sad > 0 ? frames.sad : walk.walking ? frames.walk : textures.dog);
      if (sad > 0) { sy *= 1 - .12 * sad; sx *= 1 + .05 * sad; rot = Math.sin(time * 20) * .03 * sad; lift = 0; tint.setRGB(0.85, 0.95, 0.98); }
      const hx = .1 * view.facing;
      if (view.halo) {
        view.halo.position.set(hx, c.h * 1.0 + (motion ? Math.sin(time * 3 + t.id) * .04 : 0) - sad * .12, 0);
        view.halo.material.rotation = sad * .45 * Math.sin(time * 6); view.halo.material.color.setRGB(1, 1, 1 - sad * .5);
      }
      if (view.badge) {
        view.badge.visible = true;
        view.badge.position.set(hx, c.h * 1.0 + .34 + (motion ? Math.sin(time * 3 + t.id) * .02 : 0) - sad * .12, .02);
      }
      if (view.cloud) { view.cloud.visible = sad > 0; view.cloud.position.set(hx, c.h * 1.25 + Math.sin(time * 4) * .03, 0); }
      // Ascension: a shaft of light, a harp glissando, the halo glowing — then a gentle float back down.
      const up = dogAscent(motion ? (t.id < 0 ? time : t.age) : 0, motion);
      if (up > 0 && !view.ascending && t.id > 0) { view.ascending = true; sound('harp'); const s = toScreen({ x: p.x, y: p.y + 2.2, z: p.z }); callout('♪ АЛЛИЛУЙЯ! ♪', s.x, s.y, 'combo'); }
      if (up <= 0) view.ascending = false;
      if (view.beam) { view.beam.visible = up > 0; view.beam.position.set(0, 3 - p.y + up * .2, -.05); view.beam.material.opacity = Math.min(1, up / .5); }
      if (up > 0) { rot = Math.sin(time * 2) * .05; lift += Math.sin(time * 3) * .03; }
    } else if (t.kind === 'friend') {
      tint.setRGB(0.92, 1.0, 0.94);
      const plan = LEVELS[game.level].friends[t.plan ?? 0], fp = plan ? friendPose(plan, t.age, motion) : null, ff = friendFrames[t.who as FriendKind];
      const mad = t.mad ?? 0;
      showFrame(view, mad > 0 ? (mad > FRIEND_MAD * .5 ? ff.mad : ff.fury) : fp?.lantern && ff.lantern ? ff.lantern : ff.idle);
      if (fp) view.facing = fp.facing; // every friend is drawn facing right
      if (mad > 0) { rot = Math.sin(time * 40) * .04; sx = 1.06; sy = .96; tint.setRGB(0.96, 0.92, 0.86); }
      else if (fp?.walking) { const hop = Math.abs(Math.sin(a * 7)); lift = hop * .05; rot = Math.sin(a * 7) * .05; }
      else if (t.who === 'drunk') rot = Math.sin(a * .9) * .07; // swaying in his sleep
      else { const breathe = Math.sin(a * 2.6); sy = 1 + breathe * .02; }
      if (view.badge) {
        view.badge.visible = (fp?.rise ?? 1) > .5;
        view.badge.position.set(0, c.h * c.inset[3] + .22 + (motion ? Math.sin(time * 3 + t.id) * .02 : 0), .02);
      }
      if (view.zzz) { view.zzz.visible = mad <= 0; view.zzz.position.y = c.h * .95 + (motion ? (time * .25 % .3) : 0); }
    } else if (t.kind === 'thug') {
      tint.setRGB(1.0, 0.88, 0.88);
      const tf = thugFrames[t.who as ThugKind], striking = t.age >= THUG.attack, tele = THREE.MathUtils.clamp((t.age - 1.2) / (THUG.attack - 1.2), 0, 1);
      showFrame(view, striking ? tf.attack : tf.appear);
      const hop = Math.abs(Math.sin(a * 9)); lift = hop * .04; rot = Math.sin(a * 9) * .04;
      if (tele > 0 && motion) { rot += Math.sin(time * 50) * .03 * tele; tint.setRGB(1, (1 - .4 * tele * (.5 + .5 * Math.sin(time * 18))) * 0.88, (1 - .45 * tele) * 0.88); }
      if (striking) { sx = 1.15; sy = 1.1; }
      if (view.warning) { view.warning.visible = t.age > .9; view.warning.scale.setScalar(.34 + tele * .26); }
      if (view.hole) view.hole.position.y = -p.y + .03;
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
    if (d.how === 'pancake') {
      // Flattened flat on the floor… then it peels off the ground like a sheet of paper and flutters away.
      showFrame(v, frames.ko); v.body.position.x = 0;
      if (d.age < .9) { v.sprite.scale.set(1.6 * v.facing, .2, 1); v.body.rotation.set(0, 0, 0); v.body.position.y = 0; }
      else { const k = Math.min(1, (d.age - .9) / .8); v.sprite.scale.set(1.45 * v.facing, .1 + .5 * k, 1); v.body.rotation.x = -.9 * (1 - k); v.body.rotation.z = Math.sin(d.age * 9) * .5 * k; v.body.position.y = k * k * 2.6; v.group.position.x += dt * Math.sin(d.age * 4) * 1.2; }
      if (v.stars) v.stars.visible = false;
      if (d.age > 1.4) { m.transparent = true; m.opacity = Math.max(0, 1 - (d.age - 1.4) * 2.5); }
      if (d.age > 1.8) { disposeView(v); leaving.splice(i, 1); }
      continue;
    }
    if (d.how === 'stars' || d.how === 'birds') {
      showFrame(v, d.age < .22 ? frames.hurt : frames.ko); if (v.stars) { v.stars.visible = true; v.stars.material.rotation = time * 8; }
      if (d.how === 'stars' && d.age > .18) { const k = d.age - .18; v.body.position.y = k * k * 22; v.body.rotation.z = k * 14 * d.spin; const sc = Math.max(.2, 1 - k * 1.3); v.sprite.scale.set(sc * v.facing, sc, 1); }
      if (d.age > (d.how === 'stars' ? .62 : .3) && !d.done) {
        d.done = true; const at = toScreen({ x: v.group.position.x, y: v.group.position.y + 1, z: v.group.position.z });
        if (d.how === 'stars') constellation(at.x); else flock(at.x, at.y);
        disposeView(v); leaving.splice(i, 1);
      }
      continue;
    }
    if (d.how === 'ko') {
      const tf = v.kind === 'thug' ? thugFrames[v.who as ThugKind] : null;
      showFrame(v, tf ? tf.ko : d.age < .22 ? frames.hurt : frames.ko); // recoil from the blow, then dizzy knockout
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
      showFrame(v, v.kind === 'thug' ? thugFrames[v.who as ThugKind].attack : frames.windup);
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
  crash: burstTexture('БДЫЩЬ!', '#ffd84a', '#ff6b3d', 16), strike: burstTexture('СТРАЙК!', '#9fe7ff', '#f3388f', 14),
  squeak: burstTexture('ПИ-И-ИСК!', '#fff36b', '#ff9f2a', 10), splat: burstTexture('ШМЯК!', '#fff6e0', '#ff9fb0', 11),
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
interface Swing { action: Action; throwing: boolean; /** Thrown during the herald's briefing: lands on a flyer, on him or on air. */ brief?: boolean; /** Throws only: whether the prop has left the hand yet. */ launched?: boolean; /** Click point as a fraction of the viewport, so a rotation mid-swing keeps the fist on it. */ spot: Pt; ray: { origin: Vec3; direction: Vec3 }; shot: Shot; phase: number; resolved: boolean; outcome?: Outcome; held: BodyKind | null; staminaBefore: number; staminaAfter: number; }
let swing: Swing | null = null;
let shake = 0, hitstop = 0, timeScale = 1;
const strikes: { action: Action; outcome: Outcome; kind: string; id: number | string | null; staminaBefore: number; staminaAfter: number }[] = [];

/** Horizontal camera pan along wide levels (world units; 0 = centre). Aim always raycasts from the real camera. */
let pan = 0, panVel = 0;
function viewportSize() {
  return { w: 960, h: 540 };
}
function resize() {
  cancelContact();
  const vv = window.visualViewport;
  const view = { left: vv?.offsetLeft ?? 0, top: vv?.offsetTop ?? 0, width: vv?.width ?? innerWidth, height: vv?.height ?? innerHeight };
  const safe = getComputedStyle(document.getElementById('safe-probe')!);
  const rect = fitStage(view, { left: parseFloat(safe.paddingLeft), top: parseFloat(safe.paddingTop), right: parseFloat(safe.paddingRight), bottom: parseFloat(safe.paddingBottom) });
  app.style.cssText = `left:${view.left}px;top:${view.top}px;width:${view.width}px;height:${view.height}px;--stage-x:${rect.left - view.left}px;--stage-y:${rect.top - view.top}px;--stage-w:${rect.width}px;--stage-h:${rect.height}px;--safe-left:${safe.paddingLeft};--safe-right:${safe.paddingRight};--safe-top:${safe.paddingTop};--safe-bottom:${safe.paddingBottom}`;
  app.dataset.stacked = String(rect.stacked);
  const w = rect.width, h = rect.height;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
  const rig = cameraFor(960, 540, game.mode === 'menu' || game.mode === 'select' ? 0 : pan);
  camera.aspect = w / h; camera.fov = rig.fov; camera.updateProjectionMatrix();
  camera.position.set(rig.position.x, rig.position.y, rig.position.z); camera.lookAt(rig.look.x, rig.look.y, rig.look.z);
  if (game.mode === 'menu' || game.mode === 'select') { camera.position.x -= w < 650 ? 0 : 1.2; camera.lookAt(rig.look.x - (w < 650 ? 0 : 1.8), rig.look.y, rig.look.z); }
  camera.updateMatrixWorld();
  armCanvas.width = Math.round(w * dpr); armCanvas.height = Math.round(h * dpr);
  updateCrosshair();
}
addEventListener('resize', () => { resize(); measureControls(); checkOrientation(); });
addEventListener('orientationchange', () => { resize(); measureControls(); checkOrientation(); });
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', () => { resize(); measureControls(); checkOrientation(); });
  window.visualViewport.addEventListener('scroll', () => { resize(); measureControls(); });
}

function screenAim(x: number, y: number) {
  const p = screenToStage(canvas.getBoundingClientRect(), { x, y });
  return p ? new THREE.Vector2(p.ndcX, p.ndcY) : null;
}
function screenShot(x: number, y: number) {
  const ndc = screenAim(x, y);
  return ndc ? shotAt(ndc) : null;
}
function stageFraction(x: number, y: number) {
  const r = canvas.getBoundingClientRect();
  return stageToScreen(r, { x: x * r.width, y: y * r.height });
}

function updateCrosshair() {
  const crosshair = document.querySelector<HTMLElement>('.crosshair');
  if (crosshair) {
    const p = ndcToScreen(canvas.getBoundingClientRect(), pointer), a = app.getBoundingClientRect();
    crosshair.style.left = (p.x - a.left) + 'px';
    crosshair.style.top = (p.y - a.top) + 'px';
  }
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
  if (game.briefing) { // briefing: every swing is a free punch at the flyer layer, not at the world
    const ray = aimRay(pointer); sound('whoosh');
    swing = { action: 'punch', throwing: false, brief: true, spot: { x: (pointer.x + 1) / 2, y: (1 - pointer.y) / 2 }, ray, shot: { kind: 'whiff', distance: 3, point: ray.origin }, phase: 0, resolved: false, held: null, staminaBefore: game.stamina, staminaAfter: game.stamina };
    if (!motion()) land(swing);
    return;
  }
  const throwing = action === 'grab' && game.held !== null;
  const held = game.held, staminaBefore = game.stamina;
  if (!game.spend(action)) { updateHud(); sound('ui'); return; }
  const ray = aimRay(pointer);
  sound('whoosh');
  const spot = { x: (pointer.x + 1) / 2, y: (1 - pointer.y) / 2 };
  swing = { action, throwing, spot, ray, shot: resolveShot(ray.origin, ray.direction, currentHittables(), throwing ? 'punch' : action), phase: 0, resolved: false, held, staminaBefore, staminaAfter: game.stamina };
  if (!motion()) { if (throwing) release(swing); else land(swing); }
  updateHud();
}

/** Comic callout text popping at a screen point (combo counts, dog scolding, attacks). */
function callout(text: string, x: number, y: number, tone: 'combo' | 'bad' | 'pop' = 'pop') {
  const el = document.createElement('div'); el.className = 'callout ' + tone; el.textContent = text;
  ui.append(el);
  // Reserve room for the 1.15x pop and rotation, including wrapped mobile captions.
  const rect = canvas.getBoundingClientRect(), origin = app.getBoundingClientRect();
  const halfWidth = Math.min(rect.width / 2, el.offsetWidth * .62 + 16);
  const halfHeight = el.offsetHeight * .7 + 16;
  el.style.left = (THREE.MathUtils.clamp(x, rect.left + halfWidth, rect.right - halfWidth) - origin.left) + 'px';
  el.style.top = (THREE.MathUtils.clamp(y, rect.top + halfHeight, rect.bottom - halfHeight) - origin.top) + 'px';
  setTimeout(() => el.remove(), 900);
}
const COMBO_WORDS = ['', '', 'ДВОЙНОЙ!', 'ТРОЙНОЙ!', 'РАЗМАШИСТО!', 'НЕУДЕРЖИМ!'];
function drainEvents(at?: { x: number; y: number }) {
  for (const e of game.events) {
    const v = views.get(e.id); const p = at ?? (v ? toScreen({ x: v.group.position.x, y: v.group.position.y + 1.2, z: v.group.position.z }) : stageFraction(.5, .5));
    if (e.type === 'hurt' && e.amount) { const t = game.actors.find(a => a.id === e.id) ?? (v ? { x: v.group.position.x, y: v.group.position.y, z: v.group.position.z } : null); if (t) { const h = v ? barAnchor(v) : { x: t.x, y: t.y + 2, z: t.z ?? 0 }; damageNumbers.push({ ...h, amount: e.amount, age: 0, big: e.amount > 10 }); } if (v) v.flash = 1; }
    if (e.type === 'ko' || e.type === 'smash') { exits.set(e.id, e.type === 'ko' && e.how && e.how !== 'spin' ? e.how : 'ko'); if (e.type === 'ko') sound('ko'); }
    if (e.type === 'ko' && e.who) callout(['ШМЯК!', 'БРЫСЬ!', 'ПШЁЛ!'][e.id % 3], p.x, p.y - 20, 'pop');
    if (e.type === 'ko' && e.combo >= 2) callout(`КОМБО ×${e.combo} ${COMBO_WORDS[Math.min(e.combo, 5)]}`, p.x, p.y - 70, 'combo');
    if (e.type === 'attack') { exits.set(e.id, 'attack'); sound('attack'); callout('БАЦ! −♥', p.x, p.y, 'bad'); if (motion()) shake = .22; }
    if (e.type === 'dog') { if (v) v.sad = 2.4; sound('dog'); callout(game.ult.phase === 'pour' ? 'ПЁС ОСКОРБЛЁН!' : 'ПСА НЕ ТРОГАЙ!', p.x, p.y - 60, 'bad'); }
    if (e.type === 'tear') herald.tear(motion());
    if (e.type === 'offend' && e.who === 'herald') { sound('huff'); if (motion()) shake = Math.max(shake, .14); continue; } // his rude card is drawn by the herald layer
    if (e.type === 'offend') { if (v) v.flash = 1; sound('huff'); callout(e.text ?? 'ХАМ!', p.x, p.y - 60, 'bad'); if (motion()) shake = Math.max(shake, .12); }
    if (e.type === 'nuisance') {
      exits.set(e.id, 'attack');
      if (e.who === 'rat') { sound('steal'); callout('КРЫСА СПЁРЛА СИЛЫ! −35', p.x, p.y, 'bad'); }
      else if (e.who === 'gang') { sound('splat'); splat(); const p = stageFraction(.5, .4); callout('ПЛЮХ!', p.x, p.y, 'bad'); }
      else { sound('zing'); callout('ЩЁЛК! −♥', p.x, p.y, 'bad'); if (motion()) shake = .2; }
    }
    if (e.type === 'squeak') { sound('squeak'); if (e.point) pop('squeak', e.point, .8); if (e.id) callout(`ПИ-И-ИСК! КОМБО +${GAGS.chicken.combo}`, p.x, p.y - 50, 'combo'); }
    if (e.type === 'blind') { sound('splat'); if (e.point) { pop('splat', e.point, .9); shatter(e.point, ['#fff6e0', '#ffffff', '#ff4f6d']); } callout('ПИРОГ В ЛИЦО!', p.x, p.y - 40, 'combo'); }
    if (e.type === 'stick') { sound('pop'); callout('ЧПОК!', p.x, p.y - 40, 'pop'); }
    if (e.type === 'strike') { sound('strike'); if (e.point) pop('strike', e.point, 1.3); const p = stageFraction(.5, .35); callout('СТРАЙК!', p.x, p.y, 'combo'); if (motion()) shake = .2; }
    if (e.type === 'seeds' && e.point) { sound('pop'); seedBurst(e.point, e.ids ?? []); }
    if (e.type === 'geyser' && e.point) { sound('geyser'); const s = toScreen(e.point); callout('ФОНТАН!', s.x, s.y - 80, 'pop'); }
    if (e.type === 'knock') { if (v) { v.flash = 1; v.knock = 1; } sound('splat'); callout('ПЛЮХ!', p.x, p.y - 30, 'pop'); }
    if (e.type === 'hazard' && e.point) { sound('whistle'); const s = toScreen(e.point); callout('БЕРЕГИСЬ!', s.x, s.y - 30, 'bad'); }
    if (e.type === 'crash' && e.point) { sound('crash'); pop('crash', { ...e.point, y: .6 }, 1.6); const hv = hazardViews.get(e.id); if (hv) hv.wreck = 2.4; if (motion()) shake = .35; }
    if (e.type === 'milestone' && e.text) milestone(e.text);
    if (e.type === 'ult') startUlt();
    if (e.type === 'land' && e.point) { sound('thud'); if (e.prop === 'anvil' && motion()) { shake = Math.max(shake, .22); pop('cover', e.point, .9); } }
    if (e.type === 'gag') playGag(e);
    if (e.type === 'shatter' && e.point && e.prop) { shatter(e.point, PROPS[e.prop].shards ?? ['#ffffff']); pop('smash', e.point, .8); }
    if (e.type === 'ultEnd') { sound('slide'); const p = stageFraction(.5, .6); callout(e.amount ? `НИ КАПЛИ МИМО! +${e.amount}` : 'ПРОЛИЛ… ПЛАТИ ТРИСТА', p.x, p.y, e.amount ? 'combo' : 'bad'); }
    if (e.type === 'advance') { sound('whoosh'); callout('БЛИЖЕ!', p.x, p.y - 30, 'bad'); }
    if (e.type === 'taunt') { sound('pop'); callout(['ЭЙ ТЫ!', 'НЕ ДОСТАНЕШЬ!', 'ХА-ХА!'][e.id % 3], p.x, p.y - 30, 'bad'); }
  }
  game.events.length = 0;
}

/** Where the glove is in a throw's whip: a short way from its rest spot toward the aim. */
function whipSpot(s: Swing): Pt {
  const rect = canvas.getBoundingClientRect();
  const W = rect.width, H = rect.height, rest = restPose(1, W, H, avoidRect).glove;
  return { x: rect.left + rest.x + (s.spot.x * W - rest.x) * WHIP.reach, y: rect.top + rest.y + (s.spot.y * H - rest.y) * WHIP.reach - H * .05 };
}
function release(s: Swing) {
  s.launched = true; s.resolved = true;
  const g = whipSpot(s);
  const rect = canvas.getBoundingClientRect();
  const ndc = screenAim(g.x, g.y); if (!ndc) return;
  raycaster.setFromCamera(ndc, camera);
  const from = raycaster.ray.at(1.7, new THREE.Vector3());
  const f = game.launch({ x: from.x, y: from.y, z: from.z }, s.shot.point);
  s.outcome = 'throw'; strikes.push({ action: 'grab', outcome: 'throw', kind: 'flight', id: f?.id ?? null, staminaBefore: s.staminaBefore, staminaAfter: s.staminaAfter }); if (strikes.length > 20) strikes.shift();
  sound('toss'); renderUi();
}
/** Pigeon-gang splats on the 'lens': big white blobs that slowly slide down and fade (viewport fractions). */
const splats: { x: number; y: number; r: number; age: number; seed: number }[] = [];
function splat() { for (let i = 0; i < 3; i++) splats.push({ x: .25 + Math.random() * .5, y: .2 + Math.random() * .4, r: .09 + Math.random() * .06, age: 0, seed: Math.random() * 10 }); while (splats.length > 6) splats.shift(); }
function drawSplats(g: CanvasRenderingContext2D, W: number, H: number, dt: number, ink: number) {
  const m = Math.min(W, H);
  for (let i = splats.length - 1; i >= 0; i--) {
    const s = splats[i]; s.age += dt; if (s.age > 3.2) { splats.splice(i, 1); continue; }
    const x = s.x * W, y = s.y * H + s.age * m * .03, r = s.r * m;
    g.save(); g.globalAlpha = Math.min(1, (3.2 - s.age) * 1.5) * .93; g.translate(x, y); g.beginPath();
    for (let k = 0; k <= 16; k++) { const a = k / 16 * Math.PI * 2, rr = r * (k % 2 ? .62 + .2 * Math.sin(s.seed + k) : 1 + .15 * Math.sin(s.seed * 2 + k)); g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
    g.closePath(); g.fillStyle = '#f4f2e6'; g.fill(); g.lineWidth = Math.max(2, ink * .4); g.strokeStyle = '#151715'; g.stroke();
    g.beginPath(); g.ellipse(r * .1, r * .05, r * .32, r * .26, 0, 0, Math.PI * 2); g.fillStyle = '#9a9a8a'; g.fill();
    g.beginPath(); g.ellipse(-r * .3, -r * .3, r * .14, r * .08, -.6, 0, Math.PI * 2); g.fillStyle = '#ffffff'; g.fill(); g.restore();
  }
}
/** Screen-space comic bursts not tied to the glove (thrown-prop impacts land wherever the prop does). */
const pops: { key: string; x: number; y: number; size: number; age: number }[] = [];
/** Cartoon pieces of a broken prop. */
const shards = new Pool(() => ({ x: 0, y: 0, vx: 0, vy: 0, rot: 0, vr: 0, size: 0, color: '', life: 0 }), 180);
function pop(key: string, at: Vec3, scale = 1) {
  const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), unit = Math.abs(q.x - p.x);
  pops.push({ key, x: p.x, y: p.y, size: THREE.MathUtils.clamp(unit * 1.6, 70, 260) * scale, age: 0 });
}
function shatter(at: Vec3, colors: readonly string[]) {
  const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), unit = THREE.MathUtils.clamp(Math.abs(q.x - p.x), 30, 200);
  for (let i = 0; i < 14; i++) {
    const a = -Math.PI / 2 + (Math.random() - .5) * 2.6, v = unit * (2 + Math.random() * 3), d = shards.get();
    d.x = p.x; d.y = p.y; d.vx = Math.cos(a) * v; d.vy = Math.sin(a) * v; d.rot = Math.random() * 6; d.vr = (Math.random() - .5) * 18; d.size = unit * (.07 + Math.random() * .09); d.color = colors[i % colors.length]; d.life = .7 + Math.random() * .4;
  }
}
/** Thrown props in the air: their own spinning sprite plus a ground shadow that sells the height. */
const flightViews = new Map<number, { mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>; shadow: THREE.Mesh; whistled?: boolean }>();
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
    if (f.dropped && !v.whistled) { v.whistled = true; sound('whistle'); } // the anvil stops dead in the air… and drops
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

// -------------------------------------------------------------------------------------------------
// ENVIRONMENT GAGS: piano ragtime, the insulting cuckoo, swinging lamps, ringing street lamps, falling laundry.
// -------------------------------------------------------------------------------------------------
const INSULTS = ['КУ-КУ, МАЗИЛА!', 'КУ-КУ! РУКИ-КРЮКИ!', 'КУ-КУ! ИДИ ДОМОЙ!', 'КУ-КУ! НУ ТЫ И ЛОПУХ!'];
let insult = 0, flicker = 0;
/** Washing falling from the line onto a bully's head (screen-space, follows the victim). */
const drops2: { from: Vec3; id: number; color: string; age: number }[] = [];
function playGag(e: GameEvent) {
  const part = e.gagId ? gagParts.get(e.gagId) : undefined, at = e.point ?? (part ? part.getWorldPosition(new THREE.Vector3()) : null), p = at ? toScreen(at) : stageFraction(.5, 1 / 3);
  canvas.dataset.gag = `${e.gag}:${game.riffs}`;
  if (e.gag === 'piano') {
    ragtime(ragtimeScore(e.amount ?? 0)); callout('♪ ТРЫНЬ-ТЫН-ТЫН ♪', p.x, p.y - 40, 'combo');
    const c = coverMeshes.get('piano'); if (c) c.userData.wobble = 1; pianoNotes = 3.5;
  } else if (e.gag === 'cuckoo') {
    sound('cuckoo'); callout(INSULTS[insult++ % INSULTS.length], p.x, p.y - 30, 'bad'); if (part) part.userData.pop = 1;
  } else if (e.gag === 'lamp') {
    sound('buzz'); if (part) part.userData.swingV = (part.userData.swingV ?? 0) + (Math.random() < .5 ? -1 : 1) * 2.2; flicker = 1.2;
  } else if (e.gag === 'bell') {
    sound('bell'); callout('ДЗИИИНЬ!', p.x, p.y, 'pop'); if (part) part.userData.ring = 1;
  } else if (e.gag === 'laundry') {
    sound('flop'); const cloth = laundry.find(c => c.visible);
    if (cloth) { cloth.visible = false; if (e.id) drops2.push({ from: cloth.getWorldPosition(new THREE.Vector3()), id: e.id, color: cloth.userData.cloth as string, age: 0 }); }
    if (e.id) callout('ТРУСЫ НА ГОЛОВУ!', p.x, p.y + 30, 'combo');
  }
}
let pianoNotes = 0;
function animateGags(dt: number, time: number) {
  for (const [id, o] of gagParts) {
    if (id.startsWith('gag-lamp')) {
      // A damped pendulum; the lights flicker while the hit is fresh.
      const v = (o.userData.swingV ?? 0) - o.rotation.z * 9 * dt; o.userData.swingV = v * (1 - dt * .45); o.rotation.z += o.userData.swingV * dt;
      o.traverse(l => { if (l instanceof THREE.PointLight) l.intensity = (l.userData.base as number) * (flicker > 0 && Math.sin(time * 61) > -.2 + (1 - flicker) ? .15 : 1); });
    } else if (o.userData.ring) { o.userData.ring = Math.max(0, o.userData.ring - dt * .9); o.rotation.z = Math.sin(time * 26) * .5 * o.userData.ring; }
    else if (o.userData.pop) { o.userData.pop = Math.max(0, o.userData.pop - dt * 1.6); const k = Math.sin(o.userData.pop * Math.PI * 3) * o.userData.pop; o.scale.set(1 + k * .18, 1 + k * .18, 1); }
  }
  flicker = Math.max(0, flicker - dt);
  if (pianoNotes > 0) { pianoNotes -= dt; if (Math.random() < dt * 5) { const pc = LEVELS[1].covers.find(c => c.id === 'piano')!, s = toScreen({ x: pc.min.x + Math.random() * (pc.max.x - pc.min.x), y: pc.max.y + .3, z: pc.max.z }); callout(['♪', '♫', '♬'][Math.floor(Math.random() * 3)], s.x, s.y, 'pop'); } }
}
function drawLaundryDrops(g: CanvasRenderingContext2D, dt: number, ink: number) {
  for (let i = drops2.length - 1; i >= 0; i--) {
    const d = drops2[i]; d.age += dt; const v = views.get(d.id), to = v ? barAnchor(v) : null;
    if (d.age > 2.6 || (!to && d.age > .5)) { drops2.splice(i, 1); continue; }
    const k = Math.min(1, d.age / .5), w = to ?? d.from, at = { x: d.from.x + (w.x - d.from.x) * k, y: d.from.y + (w.y - .35 - d.from.y) * k * k, z: d.from.z + (w.z - d.from.z) * k };
    const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }), u = THREE.MathUtils.clamp(Math.abs(q.x - p.x), 20, 160) * .5;
    g.save(); g.translate(p.x, p.y); g.rotate(k < 1 ? Math.sin(d.age * 20) * .4 : Math.sin(d.age * 6) * .08); g.globalAlpha = Math.min(1, (2.6 - d.age) * 2);
    // Cartoon underpants: a waistband and two leg holes.
    g.beginPath(); g.moveTo(-u * .6, -u * .3); g.lineTo(u * .6, -u * .3); g.lineTo(u * .55, u * .25); g.lineTo(u * .15, u * .3); g.lineTo(0, u * .05); g.lineTo(-u * .15, u * .3); g.lineTo(-u * .55, u * .25); g.closePath();
    g.fillStyle = d.color; g.fill(); g.lineWidth = Math.max(2, ink * .4); g.strokeStyle = '#151715'; g.lineJoin = 'round'; g.stroke();
    g.fillStyle = '#ffffff'; for (const [x, y] of [[-.3, -.05], [.25, .02], [0, -.18]]) { g.beginPath(); g.arc(x * u, y * u, u * .06, 0, Math.PI * 2); g.fill(); }
    g.restore();
  }
}

// -------------------------------------------------------------------------------------------------
// SA-V4-17 FX: melon seeds, geysers, KO constellations and birds, falling pianos / safes, pie / plunger / antic props,
// milestone intertitles. Particles live in one pool (mobile: no per-burst allocation).
// -------------------------------------------------------------------------------------------------
interface Bit { kind: 'seed' | 'drop' | 'bird'; x: number; y: number; vx: number; vy: number; life: number; max: number; size: number; tx: number; ty: number; phase: number; }
const bits = new Pool<Bit>(() => ({ kind: 'drop', x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 1, size: 1, tx: 0, ty: 0, phase: 0 }), 260);
const unitAt = (at: Vec3) => { const p = toScreen(at), q = toScreen({ ...at, x: at.x + 1 }); return { p, u: THREE.MathUtils.clamp(Math.abs(q.x - p.x), 20, 260) }; };
function seedBurst(at: Vec3, ids: number[]) {
  const { p, u } = unitAt(at);
  for (let i = 0; i < 10; i++) { const b = bits.get(), a = Math.random() * Math.PI * 2; b.kind = 'seed'; b.x = p.x; b.y = p.y; b.tx = p.x + Math.cos(a) * u * 1.4; b.ty = p.y + Math.sin(a) * u; b.life = b.max = .45; b.size = u * .05; b.phase = a; }
  for (const id of ids) { // seeds that ricochet into a bully
    const v = views.get(id); if (!v) continue; const t = toScreen(barAnchor(v));
    for (let i = 0; i < 4; i++) { const b = bits.get(); b.kind = 'seed'; b.x = p.x; b.y = p.y; b.tx = t.x + (Math.random() - .5) * 30; b.ty = t.y + 30 + Math.random() * 30; b.life = b.max = .35 + i * .05; b.size = u * .05; b.phase = i; }
    setTimeout(() => callout('ТЬФУ!', t.x, t.y, 'pop'), 300);
  }
}
/** A KO'd bully flies up and becomes a constellation in the sky for a few seconds. */
const constellations: { x: number; pts: { x: number; y: number }[]; age: number }[] = [];
const FIGURE = [[0, -1.2], [-.5, -.4], [.5, -.4], [0, 0], [-.6, 1], [.6, 1], [-1, -.9], [1, -.9]] as const;
const LINKS = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [1, 6], [2, 7]] as const;
function constellation(x: number) {
  const rect = canvas.getBoundingClientRect(), W = rect.width, H = rect.height, cx = THREE.MathUtils.clamp(x, rect.left + W * .15, rect.left + W * .85), s = Math.min(W, H) * .07;
  constellations.push({ x: cx, pts: FIGURE.map(([a, b]) => ({ x: cx + a * s + (Math.random() - .5) * s * .2, y: rect.top + H * .26 + b * s })), age: 0 });
  if (constellations.length > 3) constellations.shift(); sound('harp');
}
/** …or turns into a little flock of birds that flap off. */
function flock(x: number, y: number) {
  sound('pop'); for (let i = 0; i < 5; i++) { const b = bits.get(); b.kind = 'bird'; b.x = x + (Math.random() - .5) * 40; b.y = y + (Math.random() - .5) * 30; b.vx = (i - 2) * 50 + (Math.random() - .5) * 40; b.vy = -140 - Math.random() * 80; b.life = b.max = 2; b.size = 14 + Math.random() * 8; b.phase = Math.random() * 6; }
  callout('ФЬЮТЬ!', x, y - 40, 'pop');
}
function drawBits(g: CanvasRenderingContext2D, dt: number, ink: number, time: number) {
  g.lineCap = 'round'; g.lineJoin = 'round';
  for (let i = bits.live.length - 1; i >= 0; i--) {
    const b = bits.live[i]; b.life -= dt; if (b.life <= 0) { bits.release(i); continue; }
    const k = 1 - b.life / b.max;
    if (b.kind === 'seed') {
      const x = b.x + (b.tx - b.x) * k, y = b.y + (b.ty - b.y) * k - Math.sin(k * Math.PI) * 30;
      g.save(); g.translate(x, y); g.rotate(b.phase + k * 9); g.beginPath(); g.ellipse(0, 0, b.size, b.size * .6, 0, 0, Math.PI * 2); g.fillStyle = '#1b1b1b'; g.fill(); g.restore();
    } else if (b.kind === 'drop') {
      b.vy += 900 * dt; b.x += b.vx * dt; b.y += b.vy * dt;
      g.beginPath(); g.arc(b.x, b.y, b.size, 0, Math.PI * 2); g.fillStyle = '#8fd8ff'; g.fill(); g.lineWidth = 1.5; g.strokeStyle = '#151715'; g.stroke();
    } else {
      b.x += b.vx * dt; b.y += b.vy * dt; b.vy *= 1 - dt * .3; const flap = Math.sin(time * 18 + b.phase) * .6;
      g.save(); g.globalAlpha = Math.min(1, b.life * 1.5); g.translate(b.x, b.y); g.beginPath();
      g.moveTo(-b.size, -b.size * flap * .8); g.quadraticCurveTo(-b.size * .4, -b.size * .2, 0, 0); g.quadraticCurveTo(b.size * .4, -b.size * .2, b.size, -b.size * flap * .8);
      g.lineWidth = Math.max(2.5, ink * .45); g.strokeStyle = '#151715'; g.stroke(); g.restore();
    }
  }
  for (let i = constellations.length - 1; i >= 0; i--) {
    const c = constellations[i]; c.age += dt; if (c.age > 3.4) { constellations.splice(i, 1); continue; }
    const a = Math.min(1, c.age * 3, (3.4 - c.age) * 1.5);
    g.save(); g.globalAlpha = a; g.setLineDash([6, 7]); g.strokeStyle = '#fff6c8'; g.lineWidth = 2;
    for (const [p, q] of LINKS) { g.beginPath(); g.moveTo(c.pts[p].x, c.pts[p].y); g.lineTo(c.pts[q].x, c.pts[q].y); g.stroke(); }
    g.setLineDash([]); c.pts.forEach((p, j) => { const r = 8 + 3 * Math.sin(time * 6 + j); g.beginPath(); for (let k = 0; k <= 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * .45 : r; g.lineTo(p.x + Math.cos(a) * rr, p.y + Math.sin(a) * rr); } g.closePath(); g.fillStyle = '#ffe14d'; g.fill(); g.lineWidth = 2; g.strokeStyle = '#151715'; g.stroke(); });
    g.font = '900 15px Georgia'; g.textAlign = 'center'; g.lineWidth = 4; g.strokeStyle = '#151715'; g.strokeText('СОЗВЕЗДИЕ «ЗАДИРА»', c.x, c.pts[5].y + 34); g.fillStyle = '#fff6c8'; g.fillText('СОЗВЕЗДИЕ «ЗАДИРА»', c.x, c.pts[5].y + 34);
    g.restore();
  }
}
/** Hydrant geysers: a wobbling water column from the ground with droplets raining off the top. */
function drawGeysers(g: CanvasRenderingContext2D, time: number, ink: number) {
  for (const s of game.geysers) {
    const grow = Math.min(1, s.age / .35), fade = Math.min(1, (GAGS.geyser.life - s.age) / .6), h = 2.8 * grow * fade;
    const base = toScreen({ x: s.x, y: 0, z: s.z }), top = toScreen({ x: s.x, y: h, z: s.z }), { u } = unitAt({ x: s.x, y: 0, z: s.z }), w = u * .32;
    g.save(); g.beginPath();
    for (let k = 0; k <= 10; k++) { const f = k / 10, y = base.y + (top.y - base.y) * f; g.lineTo(base.x - w * (1 - f * .35) + Math.sin(time * 20 + f * 9) * w * .15, y); }
    for (let k = 10; k >= 0; k--) { const f = k / 10, y = base.y + (top.y - base.y) * f; g.lineTo(base.x + w * (1 - f * .35) + Math.sin(time * 23 + f * 7) * w * .15, y); }
    g.closePath(); g.fillStyle = '#7fd0ff'; g.globalAlpha = .9; g.fill(); g.globalAlpha = 1; g.lineWidth = Math.max(2, ink * .45); g.strokeStyle = '#151715'; g.stroke();
    g.beginPath(); g.moveTo(base.x - w * .3, base.y); g.lineTo(top.x - w * .2, top.y); g.strokeStyle = '#ffffff'; g.lineWidth = w * .18; g.stroke();
    g.beginPath(); g.ellipse(top.x, top.y, w * 1.2, w * .45, 0, 0, Math.PI * 2); g.fillStyle = '#bfeaff'; g.fill(); g.lineWidth = Math.max(2, ink * .4); g.strokeStyle = '#151715'; g.stroke();
    g.restore();
    if (motion() && fade > .3 && Math.random() < .7) { const b = bits.get(); b.kind = 'drop'; b.x = top.x; b.y = top.y; b.vx = (Math.random() - .5) * w * 9; b.vy = -Math.random() * 260; b.life = b.max = .8; b.size = Math.max(2, w * .09); }
  }
}
/** Pie cream over a blinded face, a plunger stuck on a nose, and the antic props (sandwich, box camera, dance notes). */
function drawActorFx(g: CanvasRenderingContext2D, time: number, ink: number) {
  for (const t of game.actors) {
    if (t.kind !== 'enemy' || !(t.blind || t.plunger || t.antic)) continue;
    const v = views.get(t.id); if (!v) continue;
    const head = barAnchor(v), face = { x: head.x + v.body.position.x, y: head.y - .5 + v.body.position.y, z: head.z + .05 }, { p, u } = unitAt(face), r = u * .26;
    g.save(); g.lineJoin = 'round'; g.lineWidth = Math.max(2, ink * .45); g.strokeStyle = '#151715';
    if (t.blind) {
      g.beginPath(); for (let k = 0; k <= 14; k++) { const a = k / 14 * Math.PI * 2, rr = r * (k % 2 ? .82 : 1.05); g.lineTo(p.x + Math.cos(a) * rr * 1.2, p.y + Math.sin(a) * rr); } g.closePath(); g.fillStyle = '#fffaf0'; g.fill(); g.stroke();
      for (const dx of [-.5, .1, .6]) { g.beginPath(); g.ellipse(p.x + dx * r, p.y + r * (1 + (dx + .5) * .3) + Math.sin(time * 2 + dx) * 2, r * .14, r * .3, 0, 0, Math.PI * 2); g.fillStyle = '#fffaf0'; g.fill(); g.stroke(); }
      g.beginPath(); g.arc(p.x + r * .2, p.y - r * 1.05, r * .2, 0, Math.PI * 2); g.fillStyle = '#e8243c'; g.fill(); g.stroke();
    }
    if (t.plunger) { const img = textures.plunger.image as CanvasImageSource, h = r * 3, w = h * .8; g.translate(p.x, p.y + r * .2); g.rotate(-.5 + Math.sin(time * 6) * .1); g.drawImage(img, -w / 2, -h * .25, w, h); g.setTransform(g.getTransform()); }
    g.restore(); g.save(); g.lineJoin = 'round'; g.lineWidth = Math.max(2, ink * .4); g.strokeStyle = '#151715';
    if (t.antic === 'sandwich') {
      const x = p.x + v.facing * r * 1.1, y = p.y + r * .5 + Math.sin(time * 11) * r * .12;
      [['#e8b46a', .3], ['#5fbf4a', .12], ['#e8475f', .12], ['#f7d36b', .12], ['#e8b46a', .3]].forEach(([c, hh], k) => { g.beginPath(); g.roundRect(x - r * .9, y - r * .5 + k * r * .22, r * 1.8, r * (hh as number), r * .1); g.fillStyle = c as string; g.fill(); g.stroke(); });
    } else if (t.antic === 'selfie') {
      const x = p.x + v.facing * r * 2.2, y = p.y - r * 1.4;
      g.beginPath(); g.moveTo(p.x + v.facing * r * .6, p.y + r); g.lineTo(x, y + r * .5); g.lineWidth = Math.max(2, ink * .5); g.stroke(); g.lineWidth = Math.max(2, ink * .4);
      g.beginPath(); g.roundRect(x - r * .7, y - r * .5, r * 1.4, r, r * .12); g.fillStyle = '#2b2b2b'; g.fill(); g.stroke();
      g.beginPath(); g.arc(x - v.facing * r * .1, y, r * .32, 0, Math.PI * 2); g.fillStyle = '#9fd3ff'; g.fill(); g.stroke();
      const flash = (time % 1.3) < .12; if (flash) { g.beginPath(); for (let k = 0; k <= 16; k++) { const a = k / 16 * Math.PI * 2, rr = k % 2 ? r * .6 : r * 1.7; g.lineTo(x + Math.cos(a) * rr, y - r * .7 + Math.sin(a) * rr); } g.closePath(); g.fillStyle = '#fffbd0'; g.fill(); g.stroke(); }
    } else if (t.antic === 'dance') {
      g.font = `900 ${Math.round(r * 1.3)}px Georgia`; g.textAlign = 'center';
      for (let k = 0; k < 3; k++) { const a = time * 2 + k * 2.1, x = p.x + Math.cos(a) * r * 2.4, y = p.y - r * 1.6 + Math.sin(a * 1.3) * r * .6; g.lineWidth = 4; g.strokeText('♪♫♬'[k], x, y); g.fillStyle = ['#ff6fa8', '#5ef0c8', '#ffd84a'][k]; g.fillText('♪♫♬'[k], x, y); }
    }
    g.restore();
  }
}
/** Falling pianos and safes: a shadow that grows on the ground and the object dropping into it; then a wreck. */
function hazardTexture(kind: 'piano' | 'safe') {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d')!; g.lineJoin = 'round'; g.lineWidth = 9; g.strokeStyle = '#151715';
  if (kind === 'piano') {
    g.fillStyle = '#3a2418'; g.beginPath(); g.roundRect(24, 40, 208, 170, 14); g.fill(); g.stroke();
    g.fillStyle = '#f4efe0'; g.fillRect(34, 130, 188, 44); g.strokeRect(34, 130, 188, 44); g.fillStyle = '#151715'; for (let i = 0; i < 9; i++) g.fillRect(48 + i * 20, 130, 9, 26);
    g.fillStyle = '#5a3a26'; g.fillRect(40, 210, 22, 36); g.strokeRect(40, 210, 22, 36); g.fillRect(194, 210, 22, 36); g.strokeRect(194, 210, 22, 36);
    g.fillStyle = '#ffd84a'; g.font = '900 34px Georgia'; g.fillText('♪', 110, 105);
  } else {
    g.fillStyle = '#4f7a64'; g.beginPath(); g.roundRect(38, 30, 180, 200, 12); g.fill(); g.stroke(); g.strokeRect(56, 48, 144, 164);
    g.fillStyle = '#d9c46a'; g.beginPath(); g.arc(128, 130, 34, 0, Math.PI * 2); g.fill(); g.stroke(); g.beginPath(); g.moveTo(128, 130); g.lineTo(150, 108); g.stroke();
    g.fillStyle = '#151715'; g.font = '900 26px Arial'; g.textAlign = 'center'; g.fillText('100 т', 128, 205);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const hazardTex = { piano: hazardTexture('piano'), safe: hazardTexture('safe') };
const hazardViews = new Map<number, { group: THREE.Group; obj: THREE.Mesh; shadow: THREE.Mesh; wreck?: number }>();
function dropHazardView(id: number) { const v = hazardViews.get(id); if (!v) return; actorGroup.remove(v.group); v.obj.geometry.dispose(); v.shadow.geometry.dispose(); (v.obj.material as THREE.Material).dispose(); (v.shadow.material as THREE.Material).dispose(); hazardViews.delete(id); }
function syncHazards(dt: number) {
  for (const h of game.hazards) {
    let v = hazardViews.get(h.id);
    if (!v) {
      const size = h.kind === 'piano' ? 2.1 : 1.4, group = new THREE.Group(); group.position.set(h.x, 0, h.z + .15);
      const obj = new THREE.Mesh(new THREE.PlaneGeometry(size, size).translate(0, size / 2, 0), new THREE.MeshBasicMaterial({ map: hazardTex[h.kind], alphaTest: .5, side: THREE.DoubleSide }));
      const shadow = new THREE.Mesh(new THREE.CircleGeometry(size * .55, 28), new THREE.MeshBasicMaterial({ color: '#1c1c1c', polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 })); shadow.rotation.x = -Math.PI / 2; shadow.position.y = .06; // a solid ink-black cartoon shadow shadow.renderOrder = 1;
      group.add(shadow, obj); actorGroup.add(group); v = { group, obj, shadow }; hazardViews.set(h.id, v);
    }
    const k = Math.min(1, h.age / HAZARD.warn); v.obj.position.y = 8.5 * (1 - k * k); v.obj.rotation.z = Math.sin(h.age * 3) * .15 * (1 - k); v.shadow.scale.setScalar(.25 + 1.15 * k); // grows as it falls; the camera foreshortens the disc by itself
  }
  for (const [id, v] of hazardViews) {
    if (game.hazards.some(h => h.id === id)) continue;
    if (v.wreck === undefined) { dropHazardView(id); continue; }
    v.wreck -= dt; v.obj.position.y = 0; v.obj.rotation.z = .08; v.obj.scale.set(1.2, .62, 1); v.shadow.scale.setScalar(1.3);
    if (v.wreck <= 0) dropHazardView(id);
  }
}
/** Combo milestones: an iris wipe closes on the action, an intertitle card shouts, the iris opens again. */
function milestone(text: string) {
  document.querySelector('.iris')?.remove(); sound('iris');
  const el = document.createElement('div'); el.className = 'iris'; el.setAttribute('role', 'status'); el.innerHTML = `<div>${text}</div>`; ui.append(el); canvas.dataset.milestone = text; setTimeout(() => el.remove(), 1500);
}

/** Arrival: re-cast the same ray against the scene as it is *now* (actors keep moving while the fist flies). */
function land(s: Swing) {
  s.resolved = true;
  if (s.brief) {
    const rect = canvas.getBoundingClientRect(), at = stageToScreen(rect, { x: s.spot.x * rect.width, y: s.spot.y * rect.height }), res = game.briefPunch(herald.hit(at.x, at.y));
    if (res === 'tear') { sound('flop'); if (motion()) { shake = .06; hitstop = .04; } }
    else if (res !== 'protected') sound('miss');
    s.outcome = res === 'tear' ? 'hit' : res === 'protected' ? 'protected' : 'miss'; // the comic burst behind the glove
    drainEvents(at); renderUi(); return;
  }
  s.shot = resolveShot(s.ray.origin, s.ray.direction, currentHittables(), s.throwing ? 'punch' : s.action);
  const id = typeof s.shot.id === 'number' ? s.shot.id : undefined;
  const res = game.resolve(s.action, { kind: s.shot.kind, id: s.shot.id, point: s.shot.point });
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

const contactTracker = new ContactHandTracker(0.35);
const hitCooldowns = contactTracker.cooldowns;
let touchDrag: { id: number; currentX: number; currentY: number; prevX: number; prevY: number; moved: boolean } | null = null;

function executeTouchThrow(at: { readonly x: number; readonly y: number }, preferredTarget?: Actor, forceForward = false) {
  if (game.mode !== 'play' || !game.held) return;
  const rect = canvas.getBoundingClientRect();
  const heldItem = game.held;

  let targetEnemy: Actor | null = preferredTarget ?? null;
  if (!targetEnemy && !forceForward) {
    const candidates: AimCandidate<Actor>[] = game.actors
      .filter(a => a.kind === 'enemy' || a.kind === 'thug')
      .map(a => ({
        entity: a,
        screenPos: toScreen(pose(game.level, a, motion())),
        isOccluded: clickablePoint(a) === null,
      }));

    const maxRadiusPx = Math.max(150, rect.width * 0.22);
    targetEnemy = selectLocalAimEnemy(at, { x: 0, y: 0 }, candidates, maxRadiusPx);
  }

  if (!targetEnemy && !forceForward) return;

  let targetPoint: Vec3;
  if (targetEnemy) {
    const p = pose(game.level, targetEnemy, motion());
    targetPoint = { x: p.x, y: p.y, z: p.z };
  } else {
    const ndc = screenAim(at.x, at.y); if (!ndc) return;
    raycaster.setFromCamera(ndc, camera);
    const p = raycaster.ray.at(10, new THREE.Vector3());
    targetPoint = { x: p.x, y: p.y, z: p.z };
  }

  const staminaBefore = game.stamina;
  if (!game.spend('grab')) { updateHud(); sound('ui'); return; }

  raycaster.setFromCamera(new THREE.Vector2(0.45, -0.65), camera);
  const from = raycaster.ray.at(1.7, new THREE.Vector3());
  const f = game.launch({ x: from.x, y: from.y, z: from.z }, targetPoint);
  strikes.push({ action: 'grab', outcome: 'throw', kind: 'flight', id: f?.id ?? null, staminaBefore, staminaAfter: game.stamina });
  if (strikes.length > 20) strikes.shift();

  sound('toss');
  const ndcTarget = new THREE.Vector3(targetPoint.x, targetPoint.y, targetPoint.z).project(camera);
  swing = {
    action: 'grab',
    throwing: true,
    launched: true,
    resolved: true,
    spot: { x: (ndcTarget.x + 1) / 2, y: (1 - ndcTarget.y) / 2 },
    ray: aimRay(new THREE.Vector2(ndcTarget.x, ndcTarget.y)),
    shot: { kind: 'whiff', distance: 6, point: targetPoint },
    phase: 0,
    held: heldItem,
    staminaBefore,
    staminaAfter: game.stamina,
  };
  updateHud();
  renderUi();
}

function sweepTouchSegment(x0: number, y0: number, x1: number, y1: number) {
  if (game.mode !== 'play') return;
  const rect = canvas.getBoundingClientRect();
  const pts = sweepSegment({ x: x0, y: y0 }, { x: x1, y: y1 }, 16);
  for (const pt of pts) {
    const ndc = screenAim(pt.x, pt.y); if (!ndc) continue;
    if (game.briefing) {
      const hitRes = herald.hit(pt.x, pt.y);
      if (hitRes === 'flyer') {
        const res = game.briefPunch('flyer');
        if (res === 'tear') { sound('flop'); if (motion()) { shake = .06; hitstop = .04; } }
        renderUi();
        break;
      } else if (hitRes === 'herald') {
        if (hitCooldowns.canHit('herald', game.elapsed)) {
          hitCooldowns.recordHit('herald', game.elapsed);
          game.briefPunch('herald');
          renderUi();
          break;
        }
      }
      continue;
    }
    const shot = shotAt(ndc);
    const id = typeof shot.id === 'number' ? shot.id : undefined;

    if (shot.kind === 'enemy' || shot.kind === 'thug') {
      if (game.held !== null) {
        if (id !== undefined && hitCooldowns.canHit(id, game.elapsed)) {
          hitCooldowns.recordHit(id, game.elapsed);
          const enemyActor = game.actors.find(a => a.id === shot.id);
          executeTouchThrow(pt, enemyActor);
        }
      } else if (id !== undefined && hitCooldowns.canHit(id, game.elapsed)) {
        if (game.spend('punch')) {
          hitCooldowns.recordHit(id, game.elapsed);
          const outcome = game.resolve('punch', { kind: shot.kind, id: shot.id, point: shot.point });
          strikes.push({ action: 'punch', outcome, kind: shot.kind, id: shot.id ?? null, staminaBefore: game.stamina + 24, staminaAfter: game.stamina });
          if (strikes.length > 20) strikes.shift();
          if (outcome === 'hit') sound('hit');
          if (id !== undefined) { const v = views.get(id); if (v) v.flash = 1; }
          if (motion()) { shake = .16; hitstop = .06; }
          pops.push({ key: 'hit', x: pt.x, y: pt.y, size: armMetrics(rect.width, rect.height).r * 2.6, age: 0 });
          drainEvents(toScreen(shot.point));
          syncActors(runtime);
          updateHud();
          renderUi();
        }
      }
    } else if (shot.kind === 'prop') {
      if (game.held === null) {
        if (id !== undefined && hitCooldowns.canHit(id, game.elapsed)) {
          if (game.spend('grab')) {
            hitCooldowns.recordHit(id, game.elapsed);
            const outcome = game.resolve('grab', { kind: shot.kind, id: shot.id, point: shot.point });
            strikes.push({ action: 'grab', outcome, kind: shot.kind, id: shot.id ?? null, staminaBefore: game.stamina + REACH_COST, staminaAfter: game.stamina });
            if (strikes.length > 20) strikes.shift();
            sound('grab');
            pops.push({ key: 'grab', x: pt.x, y: pt.y, size: armMetrics(rect.width, rect.height).r * 2.2, age: 0 });
            drainEvents(toScreen(shot.point));
            syncActors(runtime);
            updateHud();
            renderUi();
          }
        }
      } else if (id !== undefined && hitCooldowns.canHit(id, game.elapsed)) {
        executeTouchThrow(pt, undefined, true);
        hitCooldowns.recordHit(id, game.elapsed);
        if (game.spend('grab')) {
          const outcome = game.resolve('grab', { kind: shot.kind, id: shot.id, point: shot.point });
          strikes.push({ action: 'grab', outcome, kind: shot.kind, id: shot.id ?? null, staminaBefore: game.stamina + REACH_COST, staminaAfter: game.stamina });
          if (strikes.length > 20) strikes.shift();
          sound('grab');
          pops.push({ key: 'grab', x: pt.x, y: pt.y, size: armMetrics(rect.width, rect.height).r * 2.2, age: 0 });
          drainEvents(toScreen(shot.point));
          syncActors(runtime);
          updateHud();
          renderUi();
        }
      }
    } else if (shot.kind === 'dog' || shot.kind === 'friend') {
      if (id !== undefined && hitCooldowns.canHit(id, game.elapsed)) {
        hitCooldowns.recordHit(id, game.elapsed);
        game.resolve('punch', { kind: shot.kind, id: shot.id, point: shot.point });
        if (motion()) shake = .14;
        drainEvents(toScreen(shot.point));
        syncActors(runtime);
        updateHud();
        renderUi();
      }
    } else if (shot.kind === 'cover' && typeof shot.id === 'string') {
      if (hitCooldowns.canHit(shot.id, game.elapsed)) {
        hitCooldowns.recordHit(shot.id, game.elapsed);
        if (game.gag(shot.id, shot.point)) {
          const c = coverMeshes.get(shot.id);
          if (c) c.userData.wobble = 1;
        }
        drainEvents(toScreen(shot.point));
      }
    }
  }
}

function worldPerPx() {
  const rect = canvas.getBoundingClientRect();
  const d = camera.position.z + 2, half = Math.tan(camera.fov * Math.PI / 360) * d * camera.aspect;
  return 2 * half / Math.max(1, rect.width);
}
function panDirection() {
  let dir = (panKeys.has('ArrowRight') || panKeys.has('KeyD') ? 1 : 0) - (panKeys.has('ArrowLeft') || panKeys.has('KeyA') ? 1 : 0);
  if (!dir && mouseX >= 0) {
    const rect = canvas.getBoundingClientRect();
    const f = (mouseX - rect.left) / Math.max(1, rect.width);
    if (f < EDGE) dir = -(1 - f / EDGE);
    else if (f > 1 - EDGE) dir = (f - (1 - EDGE)) / EDGE;
  }
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
function setPointer(e: PointerEvent) {
  const ndc = screenAim(e.clientX, e.clientY); if (!ndc) return;
  pointer.copy(ndc);
  updateCrosshair();
}
canvas.addEventListener('pointermove', e => {
  if (!screenAim(e.clientX, e.clientY)) { cancelContact(); return; }
  if (e.pointerType === 'mouse') mouseX = e.clientX;
  if (touchDrag && e.pointerId === touchDrag.id) {
    touchDrag.prevX = touchDrag.currentX;
    touchDrag.prevY = touchDrag.currentY;
    touchDrag.currentX = e.clientX;
    touchDrag.currentY = e.clientY;
    contactTracker.updatePos({ x: e.clientX, y: e.clientY });
    if (game.ultActive) { setPointer(e); return; }
    sweepTouchSegment(touchDrag.prevX, touchDrag.prevY, touchDrag.currentX, touchDrag.currentY);
    setPointer(e);
    if (canPan()) {
      const rect = canvas.getBoundingClientRect();
      const f = (e.clientX - rect.left) / Math.max(1, rect.width);
      if (f < EDGE) pan = clampPan(game.level, pan - (1 - f / EDGE) * PAN_SPEED * 0.02);
      else if (f > 1 - EDGE) pan = clampPan(game.level, pan + ((f - (1 - EDGE)) / EDGE) * PAN_SPEED * 0.02);
    }
    return;
  }
  if (drag && e.pointerId === drag.id) {
    const dx = e.clientX - drag.x;
    if (!drag.moved && Math.hypot(dx, e.clientY - drag.y) > DRAG_PX && canPan() && !game.ultActive) drag.moved = true;
    if (drag.moved) { pan = clampPan(game.level, drag.pan - dx * worldPerPx()); return; }
  }
  if (e.pointerType !== 'touch' || game.ultActive) setPointer(e);
});
function cancelContact() {
  mouseX = -1; touchDrag = null; drag = null; contactTracker.reset();
  canvas.dataset.touching = 'false';
}
canvas.addEventListener('pointerleave', cancelContact);
canvas.addEventListener('pointerdown', e => {
  if (game.mode !== 'play') return;
  if (!screenAim(e.clientX, e.clientY)) { cancelContact(); return; }
  if (e.pointerType === 'touch') {
    e.preventDefault();
    if (touchDrag) { contactTracker.reset(); return; }
    game.touch = true;
    document.documentElement.dataset.touch = 'true';
    touchDrag = { id: e.pointerId, currentX: e.clientX, currentY: e.clientY, prevX: e.clientX, prevY: e.clientY, moved: false };
    contactTracker.begin(e.pointerId, { x: e.clientX, y: e.clientY });
    canvas.dataset.touching = 'true';
    setPointer(e);
    if (game.ultActive) return;
    sweepTouchSegment(e.clientX, e.clientY, e.clientX, e.clientY);
    updateHud();
    return;
  }
  setPointer(e);
  if (game.ultActive) return;
  perform(e.button === 2 ? 'grab' : 'punch');
});
const endDrag = (e: PointerEvent) => {
  if (!screenAim(e.clientX, e.clientY)) { cancelContact(); return; }
  if (touchDrag && e.pointerId === touchDrag.id) {
    e.preventDefault();
    if (game.mode === 'play' && game.held !== null && !game.ultActive && !game.briefing) {
      const ndc = screenAim(e.clientX, e.clientY);
      let targetEnemy: Actor | null = null;
      if (ndc) {
        const shot = shotAt(ndc);
        if (shot.kind === 'enemy' || shot.kind === 'thug') {
          targetEnemy = game.actors.find(a => a.id === shot.id) ?? null;
        }
      }
      if (!targetEnemy) {
        const rect = canvas.getBoundingClientRect();
        const candidates: AimCandidate<Actor>[] = game.actors
          .filter(a => a.kind === 'enemy' || a.kind === 'thug')
          .map(a => ({
            entity: a,
            screenPos: toScreen(pose(game.level, a, motion())),
            isOccluded: clickablePoint(a) === null,
          }));
        const maxRadiusPx = Math.max(150, rect.width * 0.22);
        targetEnemy = selectLocalAimEnemy({ x: e.clientX, y: e.clientY }, { x: 0, y: 0 }, candidates, maxRadiusPx);
      }
      if (targetEnemy) {
        executeTouchThrow({ x: e.clientX, y: e.clientY }, targetEnemy);
      }
    }
    touchDrag = null;
    contactTracker.reset();
    canvas.dataset.touching = 'false';
    updateHud();
  }
  if (drag && e.pointerId === drag.id) {
    const tap = !drag.moved; drag = null;
    if (tap && game.mode !== 'play') return;
    setPointer(e);
    if (game.briefing) { perform('punch'); return; }
  }
};
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', e => {
  if (touchDrag && e.pointerId === touchDrag.id) {
    touchDrag = null;
    contactTracker.reset();
    canvas.dataset.touching = 'false';
    updateHud();
  }
  if (drag && e.pointerId === drag.id) drag = null;
});
addEventListener('keyup', e => panKeys.delete(e.code));
addEventListener('blur', () => { panKeys.clear(); contactTracker.reset(); touchDrag = null; canvas.dataset.touching = 'false'; });
canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('keydown', e => {
  if (game.mode === 'play' && (e.code === 'F8' || e.code === 'KeyW')) { e.preventDefault(); game.winNow(); renderUi(); }
  if (['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD'].includes(e.code)) { panKeys.add(e.code); if (canPan()) e.preventDefault(); }
  if (e.code === 'Escape' && !document.hidden) { if (game.briefing && game.mode === 'play') skipBriefing(); else { game.pause(); renderUi(); } }
  if ((e.code === 'Space' || e.code === 'KeyE') && !(e.target instanceof HTMLButtonElement)) { e.preventDefault(); if (!e.repeat) perform(e.code === 'Space' ? 'punch' : 'grab'); }
});
function showLevelGroup() { const shown = shownLevel(); for (const l of LEVEL_IDS) levelGroups[l].visible = shown === l; }
function suspendPage() { contactTracker.reset(); touchDrag = null; canvas.dataset.touching = 'false'; game.suspend(); renderUi(); }
document.addEventListener('visibilitychange', () => { if (document.hidden) suspendPage(); });
document.addEventListener('freeze', suspendPage);
addEventListener('pagehide', suspendPage);

function button(id: string, handler: () => void) { document.getElementById(id)?.addEventListener('click', () => { unlockAudio(); sound('ui'); handler(); }); }
function startLevel(level: number) { game.reduced = !motion(); if (game.start(level)) { for (const c of laundry) c.visible = true; drops2.length = 0; pan = 0; panVel = 0; lastMode = ''; damageNumbers.length = 0; pops.length = 0; shards.clear(); splats.length = 0; bits.clear(); constellations.length = 0; for (const id of [...hazardViews.keys()]) dropHazardView(id); document.querySelector('.iris')?.remove(); } renderUi(); }
function chrome() { return '<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'; }

function renderUi() {
  if (game.mode !== 'play') { contactTracker.reset(); touchDrag = null; canvas.dataset.touching = 'false'; }
  const mode = game.mode;
  if (mode !== lastMode) { lastMode = mode; resize(); }
  applyLook(shownLevel());
  showLevelGroup();
  app.dataset.mode = mode; app.dataset.level = String(game.level);
  if (mode === 'menu') {
    ui.innerHTML = chrome() + '<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: ' + game.progress.best + ' / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>';
    button('start', () => { game.mode = 'select'; renderUi(); });
    button('how', () => {
      const controls = game.touch ? 'Веди рукой: по врагу — удар, по предмету — захват. С предметом проведи по врагу или отпусти над ним — бросок! Веди к краю улицы для движения камеры.' : 'ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана — камера едет.';
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>' + controls + ' Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>';
      button('close', renderUi);
    });
  } else if (mode === 'select') {
    ui.innerHTML = chrome() + '<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>' + LEVELS[1].goal + ' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level"><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>' + LEVELS[2].goal + ' задир · широкая панорама, крути камеру</small></span><b>↗</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>';
    button('level1', () => startLevel(1));
    button('level2', () => startLevel(2));
    button('back', () => { game.mode = 'menu'; renderUi(); });
  } else {
    const mobileControls = game.touch ? '' : '<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';
    ui.innerHTML = '<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>' + (LEVELS[game.level].pan > 0 ? '<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>' : '') + mobileControls;
    button('punch', () => perform('punch'));
    button('grab', () => perform('grab'));
    button('pause', () => { game.pause(); renderUi(); });
    if (mode === 'pause' || mode === 'result') {
      const result = mode === 'result', won = result && game.won;
      const actions = result ? resultActions(game) : [{ id: 'resume', label: 'ПРОДОЛЖИТЬ →', primary: true }, { id: 'autowin', label: 'АВТО-ПОБЕДА ⚡', primary: false }, { id: 'select', label: 'ВЫБОР УРОВНЯ', primary: false }];
      const after = !won ? 'Ещё попытка — все сердца снова с тобой.' : game.level < LAST_LEVEL ? 'Открыта улица: двор и переулок на одной широкой панораме.' : 'Улица чиста. Бар открыт до утра.';
      ui.innerHTML += '<div class="shade"></div><section class="panel centerpanel"><span class="note">' + (result ? (won ? 'ПОРЯДОК НАВЕДЁН' : 'БЫВАЕТ И ТАК') : 'РУКИ НА ПЕРЕРЫВЕ') + '</span><h2>' + (result ? (won ? 'КРАСИВО<br>РАЗОБРАЛСЯ!' : 'НЕ ТОТ<br>РАЗМАХ.') : 'ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.') + '</h2><p>' + (result ? 'Счёт: <b>' + game.score + '</b> · Рекорд: ' + game.progress.best + '<br>' + after : 'Время остановилось. Ни один задира не ударит исподтишка.') + '</p><div class="buttons">' + actions.map(a => `<button id="${a.id}" class="${a.primary ? 'primary' : 'secondary'}">${a.label}</button>`).join('') + '</div></section>';
      button('resume', () => { game.pause(); renderUi(); });
      button('autowin', () => { game.pause(); game.winNow(); renderUi(); });
      button('next', () => startLevel(game.level + 1));
      button('retry', () => startLevel(game.level));
      button('select', () => { game.mode = 'select'; renderUi(); });
      button('menu', () => { game.mode = 'menu'; renderUi(); });
    }
    updateHud();
  }
  syncActors(runtime);
  if (mode !== 'play') { ui.insertAdjacentHTML('beforeend', settingsUi()); bindSettings(renderUi); }
  const hud = ui.querySelector('.hud');
  if (hud) {
    const left = document.createElement('aside'), right = document.createElement('aside');
    left.className = 'game-rail rail-left'; right.className = 'game-rail rail-right';
    const boxes = hud.querySelectorAll('.hudbox');
    if (boxes[0]) left.append(boxes[0]);
    if (boxes[1]) right.append(boxes[1]);
    for (const id of ['progress', 'ultmeter', 'panL']) { const el = document.getElementById(id); if (el) left.append(el); }
    for (const selector of ['#pause', '#message', '#panR', '.controls']) { const el = ui.querySelector(selector); if (el) right.append(el); }
    hud.remove(); ui.prepend(left, right);
  }
  updateCrosshair();
  measureControls();
  checkOrientation();
}

function toScreen(p: Vec3) {
  const v = new THREE.Vector3(p.x, p.y, p.z).project(camera);
  return ndcToScreen(canvas.getBoundingClientRect(), v);
}
/**
 * A screen point that free-aim would actually resolve to this actor right now (hitbox sampled top-down,
 * occlusion respected). Published for accessibility tooling and tests; null when fully behind cover.
 */
function clickablePoint(t: Actor) {
  const c = bodyOf(t.kind, t.who); const p = pose(game.level, t, motion()); const [l, r, b, tp] = t.kind === 'enemy' && t.skin ? SKIN_INSET[t.skin] : c.inset;
  const rect = canvas.getBoundingClientRect();
  for (const fy of [.8, .65, .9, .5, .35]) for (const fx of [.5, .38, .62]) {
    const world = { x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z };
    const s = toScreen(world);
    const shot = screenShot(s.x, s.y);
    if (shot?.id === t.id) return { x: Math.round(s.x), y: Math.round(s.y) };
  }
  return null;
}

let lastAim = '';
function updateHud() {
  const enemies = game.actors.filter(t => t.kind === 'enemy');
  const labels = enemies.map(t => (t.x < -.5 ? 'слева' : t.x > .5 ? 'справа' : 'в центре') + (t.layer === 'foreground' ? ' (за укрытием рядом)' : t.layer === 'background' ? ' (в окне)' : ' (за забором)'));
  canvas.setAttribute('aria-label', `Уровень ${game.level}. Задиры: ${labels.join(', ') || 'нет'}. ${game.touch ? 'Веди рукой: по врагу — удар, по предмету — захват. С предметом проведи по врагу или отпусти над ним — бросок.' : 'Наведи прицел, затем нажми Удар.'}`);
  const aim = JSON.stringify(game.mode === 'play' ? game.actors.map(t => ({ id: t.id, kind: t.kind, layer: t.layer, frame: views.get(t.id)?.frame ?? null, at: (t.kind !== 'enemy' || t.age >= .4) ? clickablePoint(t) : null })) : []);
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
  const ult = JSON.stringify({ phase: game.ult.phase, meter: +game.ult.meter.toFixed(2), tip: stream && game.ult.phase === 'pour' ? stageFraction(stream.tip.x, stream.tip.y) : null });
  if (canvas.dataset.ult !== ult) canvas.dataset.ult = ult;
  const held = game.held ?? '';
  if (canvas.dataset.held !== held) canvas.dataset.held = held;
  const touching = String(!!touchDrag);
  if (canvas.dataset.touching !== touching) canvas.dataset.touching = touching;
  const lastStrike = strikes.length > 0 ? JSON.stringify(strikes[strikes.length - 1]) : '';
  if (canvas.dataset.strike !== lastStrike) canvas.dataset.strike = lastStrike;
  const flights = String(game.flights.length);
  if (canvas.dataset.flights !== flights) canvas.dataset.flights = flights;
  if (game.touch && (!game.message || game.message.includes('Прицел стоит') || game.message.includes('Двор ждёт'))) {
    game.message = game.held ? 'Двойной тап рядом с врагом — бросок!' : 'Веди пальцем — бей задир! Через предмет — захват.';
  }
  set('message', game.message);
  const energy = document.getElementById('energy'); if (energy) energy.style.width = game.stamina + '%';
  const grab = document.getElementById('grab'); if (grab) grab.innerHTML = game.held ? 'БРОСАЙ ↗<small>' + PROPS[game.held].name.toUpperCase() + ' · ' + costOf('grab', true, game.held) + ' СИЛ</small>' : 'ХВАТАЙ ◎<small>ПКМ / E · ' + REACH_COST + ' СИЛ</small>';
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
    const rect = canvas.getBoundingClientRect(), sx = toScreen(pose(game.level, t, motion())).x, k = sx < rect.left ? side.L : sx > rect.right ? side.R : null;
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
  const c = document.querySelector('.controls button') ? document.querySelector('.controls')?.getBoundingClientRect() : null;
  const stage = canvas.getBoundingClientRect();
  avoidRect = c && c.width && c.right > stage.left && c.left < stage.right && c.bottom > stage.top && c.top < stage.bottom ? { left: c.left - stage.left, right: c.right - stage.left, top: c.top - stage.top } : null;
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
let stream: Stream | null = null, hatFill = 0;
const drops: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
/** Puddles in viewport fractions; r in px. */
const puddles: { x: number; y: number; r: number; max: number }[] = [];
function startUlt() {
  const r = game.hatRest;
  if (r) { hatTrophy.position.set(r.x, landingCover.max.y + HAT_TALL, Math.min(r.z, landingCover.max.z - .1)); hatTrophy.visible = true; }
  stream = null; drops.length = 0;
  const flash = document.createElement('div'); flash.className = 'ultflash'; ui.append(flash); setTimeout(() => flash.remove(), 800);
  if (motion()) shake = .25;
}
function landingPoint() {
  const c = landingCover;
  const rect = canvas.getBoundingClientRect();
  for (const fx of [.55, .42, .68, .3, .8]) for (const fz of [.5, .3, .7]) {
    const sp = toScreen({ x: c.min.x + (c.max.x - c.min.x) * fx, y: c.max.y, z: c.min.z + (c.max.z - c.min.z) * fz });
    const shot = screenShot(sp.x, sp.y);
    if (shot?.kind === 'cover' && shot.point.y >= c.max.y - 1e-3 && onLanding(game.level, shot.id, shot.point)) return { x: Math.round(sp.x), y: Math.round(sp.y) };
  }
  return null;
}
function updateUlt(dt: number) {
  const rect = canvas.getBoundingClientRect();
  trickle(game.pouring && game.mode === 'play');
  if (game.ult.phase === 'none' && (puddles.length || hatTrophy.visible)) { puddles.length = 0; drops.length = 0; hatTrophy.visible = false; stream = null; hatFill = 0; }
  // Dialogue intertitles (the bet), one card at a time after the frozen beat. Driven by game time (pause-safe).
  const card = document.getElementById('ulttitle'), now = game.ult.phase === 'intro' ? cardAt(game.ult.t) : null;
  if (card && card.dataset.who !== now?.who) card.remove();
  if (now && !document.getElementById('ulttitle')) ui.insertAdjacentHTML('beforeend', `<div id="ulttitle" class="intertitle dialog" role="status" data-who="${now.who}"><div><small>❦ ${now.who} ❦</small><b>${now.text}</b></div></div>`);
  // The pour starts right where the bet is: the jet (and the aim) begin in the hat.
  if (game.ult.phase === 'pour' && !stream) {
    const m = hatMouth(), at = m ? { x: (m.x - rect.left) / rect.width, y: (m.y - rect.top) / rect.height } : { x: .5, y: .6 };
    stream = new Stream(at); pointer.set(at.x * 2 - 1, 1 - at.y * 2); updateCrosshair();
  }
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
  const mouth = hatMouth(), tipScreen = stageToScreen(rect, { x: tip.x * rect.width, y: tip.y * rect.height }), inHat = !!mouth && Math.hypot(tipScreen.x - mouth.x, (tipScreen.y - mouth.y) * 1.6) < mouth.r;
  if (inHat) { game.pourInHat(dt); hatFill = Math.min(1, hatFill + dt / (ULT.length * .8)); }
  canvas.dataset.inhat = String(inHat);
  if (motion() && Math.random() < .7) drops.push({ x: tip.x + (Math.random() - .5) * .02, y: tip.y, vx: (Math.random() - .5) * .22, vy: -.18 - Math.random() * .22, life: .22 + Math.random() * .2 });
  if (drops.length > 40) drops.splice(0, drops.length - 40);
  if (floor && floor.y < .2) {
    const sp = toScreen(floor), fx = (sp.x - rect.left) / rect.width, fy = (sp.y - rect.top) / rect.height, m = Math.min(rect.width, rect.height);
    const near = puddles.find(p => Math.hypot((p.x - fx) * rect.width, (p.y - fy) * rect.height) < m * .06);
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
    roundRect(g, x, y, w, h, h / 2); g.fillStyle = '#260a0a'; g.fill();
    if (v.ghost > ratio) { roundRect(g, x, y, w * v.ghost, h, h / 2); g.fillStyle = '#ff8585'; g.fill(); }
    roundRect(g, x, y, Math.max(h, w * ratio), h, h / 2); g.fillStyle = ratio > .6 ? '#e61e1e' : ratio > .3 ? '#cc1414' : '#990c0c'; if (ratio > 0) g.fill();
    if (v.flash > .3) { roundRect(g, x, y, w, h, h / 2); g.fillStyle = `rgba(255,255,255,${(v.flash - .3) * .9})`; g.fill(); }
    // Segment ticks every 10 HP: you can count the punches left.
    g.strokeStyle = '#180404'; g.lineWidth = Math.max(1.5, ink * .3);
    for (let k = 10; k < t.maxHp; k += 10) { const sx = x + w * k / t.maxHp; g.beginPath(); g.moveTo(sx, y + 2); g.lineTo(sx, y + h - 2); g.stroke(); }
    roundRect(g, x, y, w, h, h / 2); g.lineWidth = Math.max(2, ink * .45); g.strokeStyle = '#180404'; g.stroke();
    g.beginPath(); g.moveTo(x + h * .6, y + h * .3); g.lineTo(x + w * Math.max(.1, ratio) - h * .4, y + h * .3); g.strokeStyle = 'rgba(255,200,200,.6)'; g.lineWidth = Math.max(1, h * .16); g.lineCap = 'round'; g.stroke(); // shine
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
  const rect = canvas.getBoundingClientRect(), source = hatMouth(), mouth = source ? { ...source, x: source.x - rect.left, y: source.y - rect.top } : null;
  if (mouth && hatFill > 0) { g.beginPath(); g.ellipse(mouth.x, mouth.y + mouth.r * .05, mouth.r * (.55 + .4 * hatFill), mouth.r * .22, 0, 0, Math.PI * 2); g.fillStyle = YELLOW; g.fill(); g.lineWidth = Math.max(1.5, ink * .35); g.strokeStyle = '#151715'; g.stroke(); }
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
const drawnArms = { left: { mode: 'rest', x: 0, y: 0, open: false, item: '' }, right: { mode: 'rest', x: 0, y: 0, open: false, item: '' } };
function drawArm(time: number) {
  const rect = canvas.getBoundingClientRect();
  const W = rect.width, H = rect.height, g = armCtx, dpr = armCanvas.width / Math.max(1, W), dt = Math.max(0, Math.min(.05, time - lastDraw)); lastDraw = time;
  g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, armCanvas.width, armCanvas.height);
  if (game.mode !== 'play' && game.mode !== 'pause') return;
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (isBar()) drawStream(g, W, H, time, armMetrics(W, H).ink);
  const { ink, rim } = armMetrics(W, H), avoid = game.briefing ? null : avoidRect, s = swing, k = s ? s.phase : 1;
  g.save(); g.translate(-rect.left, -rect.top);
  drawGeysers(g, time, ink); drawActorFx(g, time, ink); drawHealthBars(g, dt, ink); drawLaundryDrops(g, dt, ink); drawBits(g, dt, ink, time);
  g.restore();
  const spot = s ? { x: s.spot.x * W, y: s.spot.y * H } : { x: 0, y: 0 };
  const active = s && k < 1 ? (s.throwing ? 1 : sideFor(spot, W)) : 0;
  // Impact burst sits behind the glove so the fist stays readable on contact.
  for (let i = pops.length - 1; i >= 0; i--) {
    const p = pops[i]; p.age += dt; if (p.age > .5) { pops.splice(i, 1); continue; }
    const a = p.age / .5, size = p.size * (a < .15 ? .6 + a * 4 : 1.2 - a * .2);
    g.save(); g.globalAlpha = Math.max(0, 1 - Math.max(0, a - .5) * 2); g.translate(p.x - rect.left, p.y - rect.top); g.drawImage(bursts[p.key] ?? bursts.miss, -size / 2, -size / 2, size, size); g.restore();
  }
  for (let i = shards.live.length - 1; i >= 0; i--) {
    const d = shards.live[i]; d.life -= dt; if (d.life <= 0) { shards.release(i); continue; }
    d.vy += H * 2.2 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.rot += d.vr * dt;
    g.save(); g.translate(d.x - rect.left, d.y - rect.top); g.rotate(d.rot); g.globalAlpha = Math.min(1, d.life * 3);
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
    // While the herald talks the fists rest low at the corners so they never cover the flyer text.
    const bob = (motion() ? Math.sin(time * 2.4 + (side > 0 ? 0 : 1.3)) * H * .006 : 0) + (game.briefing ? armMetrics(W, H).r * 1.7 : 0);
    let arm = restPose(side, W, H, avoid, bob);
    let armMode = 'rest';
    if (s && side === active) {
      const whip = whipSpot(s);
      arm = s.throwing ? punchPose(side, W, H, { x: whip.x - rect.left, y: whip.y - rect.top }, k, WHIP, { throwing: true, avoid }) : punchPose(side, W, H, spot, k, { arrive: ARRIVE, release: RELEASE }, { depth: 6.5 / Math.max(3, s.shot.distance), grab: s.action === 'grab', avoid });
      armMode = s.throwing ? 'throw' : 'swing';
    } else if (touchDrag && !s) {
      const strikeSide = game.held ? -1 : sideFor({ x: touchDrag.currentX - rect.left, y: touchDrag.currentY - rect.top }, W);
      if (side === strikeSide) {
        const touchSpot = { x: touchDrag.currentX - rect.left, y: touchDrag.currentY - rect.top };
        arm = punchPose(side, W, H, touchSpot, 0.5, { arrive: 0.1, release: 0.9 }, { depth: 1, avoid: null });
        armMode = 'touch';
      }
    }
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
    const drawn = drawnArms[side === 1 ? 'right' : 'left'];
    drawn.mode = armMode;
    drawn.x = arm.glove.x; drawn.y = arm.glove.y; drawn.open = arm.open; drawn.item = item ?? '';
    if (item) {
      const img = textures[item].image as CanvasImageSource, h = arm.r * 2.2, w = h * BODY[item].w / BODY[item].h;
      g.save(); g.translate(arm.glove.x, arm.glove.y - arm.r * .5); g.rotate(motion() ? Math.sin(time * 2) * .07 : 0); g.drawImage(img, -w / 2, -h * .8, w, h); g.restore();
    }
  }
  drawSplats(g, W, H, dt, ink); // on the 'lens', over everything but the HUD
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
  { const b = game.mode === 'play' || game.mode === 'pause' ? game.briefing : null; herald.sync(b, game.mode === 'pause'); const on = String(!!b); if (app.dataset.brief !== on) app.dataset.brief = on; }
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

  flyProps(dt); syncFlights(); animateGags(dt, runtime); syncHazards(game.mode === 'play' ? dt : 0);
  animateLeaving(dt, runtime);
  for (const cover of coverMeshes.values()) {
    const w = cover.userData.wobble as number | undefined; if (!w) continue;
    cover.scale.set(1 + Math.sin(w * 30) * w * .05, 1 - Math.sin(w * 30) * w * .04, 1); cover.userData.wobble = Math.max(0, w - dt * 3);
  }
  if (motion()) for (const cloth of swaying) cloth.rotation.z = Math.sin(runtime * 1.7 + cloth.userData.sway) * .08;
  if (motion()) for (const door of swinging) door.rotation.y = door.userData.swing * (.35 + .3 * Math.sin(runtime * 2.3 + door.userData.swing));

  resizeCameraShake(dt);
  { // Thugs pop in close to wherever the camera looks: share its x, depth and the visible half-width at thug depth.
    const d = THUG.depth, half = Math.tan(camera.fov * Math.PI / 360) * d * camera.aspect;
    game.cam = { x: rest.x || pan, z: camera.position.z, half: Math.max(1.2, half - .6) };
  }
  renderer.info.reset();
  renderer.clear();
  renderer.render(scene, camera);
  drawArm(runtime);
}
function resizeCameraShake(dt: number) {
  if (game.mode === 'menu' || game.mode === 'select') { placeSun(0); return; }
  const { w, h } = viewportSize();
  const rig = cameraFor(w, h, pan); placeSun(pan);
  rest.set(rig.position.x, rig.position.y, rig.position.z);
  if (shake > 0) { shake = Math.max(0, shake - dt * .9); camera.position.set(rest.x + (Math.random() - .5) * shake, rest.y + (Math.random() - .5) * shake, rest.z); }
  else camera.position.copy(rest);
  camera.updateMatrixWorld();
}

resize(); checkOrientation(); renderUi(); frame();

Object.assign(window, {
  __interaction: {
    actors: () => {
      const hits = currentHittables();
      return game.actors.map(t => {
        const h = hits.find(h => h.id === t.id);
        const targetCenter = h ? toScreen({ x: (h.min.x + h.max.x) / 2, y: (h.min.y + h.max.y) / 2, z: (h.min.z + h.max.z) / 2 }) : null;
        const corners = h ? [h.min.x, h.max.x].flatMap(x => [h.min.y, h.max.y].flatMap(y => [h.min.z, h.max.z].map(z => toScreen({ x, y, z })))) : [];
        const bounds = h ? { x: Math.min(...corners.map(p => p.x)), y: Math.min(...corners.map(p => p.y)), width: Math.max(...corners.map(p => p.x)) - Math.min(...corners.map(p => p.x)), height: Math.max(...corners.map(p => p.y)) - Math.min(...corners.map(p => p.y)) } : null;
        return { id: t.id, kind: t.kind, at: clickablePoint(t), center: toScreen(pose(game.level, t, motion())), targetCenter, bounds, world: pose(game.level, t, motion()) };
      });
    },
    shot(x: number, y: number) {
      const s = screenShot(x, y);
      return { kind: s?.kind ?? 'outside', id: s?.id ?? null };
    },
    arms: () => drawnArms,
    flights: () => game.flights.map(f => ({ id: f.id, kind: f.kind, pos: { ...f.pos }, vel: { ...f.vel }, age: f.age, struck: f.struck })),
  },
});

if (import.meta.env.DEV) {
  Object.assign(window, {
    __game: game,
    __test: {
      /** Screen point that free-aim resolves to this actor right now (null if fully occluded). */
      project(id: number) { const t = game.actors.find(v => v.id === id); return t ? clickablePoint(t) : null; },
      /** Predict what a click at (x,y) would strike, using the same resolver the game uses. */
      shotAt(x: number, y: number) {
        const s = screenShot(x, y);
        return { kind: s?.kind ?? 'outside', id: s?.id ?? null, distance: s?.distance ?? null };
      },
      /** Sample the full sprite hitbox of an actor and report what each screen point would actually hit. */
      samples(id: number) {
        const t = game.actors.find(v => v.id === id); if (!t) return [];
        const c = bodyOf(t.kind, t.who), p = pose(game.level, t, motion()), [l, r, b, tp] = c.inset, out = [];
        const rect = canvas.getBoundingClientRect();
        for (let fy = .05; fy < 1; fy += .1) for (let fx = .1; fx < 1; fx += .2) {
          const s = toScreen({ x: p.x - c.w / 2 + c.w * (l + (r - l) * fx), y: p.y + c.h * (b + (tp - b) * fy), z: p.z });
          const shot = screenShot(s.x, s.y);
          out.push({ x: Math.round(s.x), y: Math.round(s.y), kind: shot?.kind ?? 'outside', id: shot?.id ?? null });
        }
        return out;
      },
      flights: () => game.flights.map(f => ({ id: f.id, kind: f.kind, pos: f.pos, struck: f.struck })),
      views: () => [...views.entries()].map(([id, v]) => ({ id, kind: v.kind, who: v.who ?? null, frame: v.frame ?? null, pos: v.group.position.toArray().map(n => +n.toFixed(2)), scale: v.sprite.scale.toArray().map(n => +n.toFixed(2)), visible: v.group.visible })),
      swing: () => swing ? { phase: swing.phase, resolved: swing.resolved, outcome: swing.outcome ?? null, shot: swing.shot.kind } : null,
      setTimeScale(v: number) { timeScale = v; },
      setPan(x: number) { pan = clampPan(game.level, x); resizeCameraShake(0); return pan; },
      pan: () => pan,
      toScreen: (p: Vec3) => toScreen(p),
      hazards: () => [...hazardViews.entries()].map(([id, v]) => ({ id, group: v.group.position.toArray(), obj: v.obj.position.y, shadow: v.shadow.scale.toArray(), visible: v.group.visible, parent: !!v.group.parent?.parent })),
      strikes: () => strikes.slice(),
      isPortrait: () => window.innerHeight > window.innerWidth,
      isPortraitBypassed: () => portraitBypassed,
      bypassPortrait: () => { portraitBypassed = true; checkOrientation(); },
      webgl: () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, context: renderer.getContext().getParameter(renderer.getContext().VERSION) }),
    },
  });
}
