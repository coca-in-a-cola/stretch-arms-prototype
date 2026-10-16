import * as THREE from 'three';
import { Game, readProgress, type Kind, type Target } from './game';
import './style.css';
import { makeStreet } from './street';
import { reducedMotion, unlockAudio, sound, settingsUi, bindSettings } from './preferences';

const KEY = 'long-arms.progress.v1';
let raw: string | null = null;
try { raw = localStorage.getItem(KEY); } catch { raw = null; }
const game = new Game(readProgress(raw), p => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { game.message = 'Сохранение недоступно в этом браузере.'; } });
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = '<canvas id="scene" aria-label="Трёхмерный двор и картонные мишени"></canvas><div id="ui"></div>';
const ui = document.querySelector<HTMLDivElement>('#ui')!;
const canvas = document.querySelector<HTMLCanvasElement>('#scene')!;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color('#d7dbd2');
scene.fog = new THREE.Fog('#d7dbd2', 18, 48);
const camera = new THREE.PerspectiveCamera(48, 1, .1, 100);
const ambient = new THREE.HemisphereLight('#fff9e4', '#6f766e', 2.5); scene.add(ambient);
const sun = new THREE.DirectionalLight('#fff5df', 3); sun.position.set(-8, 15, 10); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = -16; sun.shadow.camera.right = 16; sun.shadow.camera.top = 16; sun.shadow.camera.bottom = -16; scene.add(sun);
const world = new THREE.Group(); scene.add(world);
const street=makeStreet();scene.add(street);
function box(w: number, h: number, d: number, color: string, x: number, y: number, z: number, parent: THREE.Object3D = world) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color, roughness: .95 }));
  mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
}
box(70, .25, 65, '#a7aaa0', 0, -.18, -10);
box(21, .22, 4, '#c8c9bd', 0, -.03, -1);
for (let x = -12; x <= 12; x += 1.8) box(.025, .012, 13, '#8b9086', x, .09, -3);
for (let z = -8; z <= 4; z += 1.4) box(25, .012, .025, '#8b9086', 0, .09, z);
box(21, 1.8, .45, '#b9bcb1', 0, .9, -5.5);
box(22, .12, .7, '#777e75', 0, 1.85, -5.5);
for (const side of [-1, 1]) {
  box(5, 13, 20, side === -1 ? '#a9afa5' : '#bcc0b4', side * 12, 6.5, -10);
  box(6, .25, 20.5, '#7e877e', side * 12, 13, -10);
  for (let y = 3; y < 12; y += 2.7) for (let z = -16; z < -1; z += 3.2) {
    box(.12, 1.65, 1.25, '#59675f', side * 9.45, y, z);
    box(.17, .08, 1.4, '#d4d5c7', side * 9.35, y, z);
    box(.17, 1.7, .065, '#d4d5c7', side * 9.35, y, z);
  }
}
box(21, 10, 4, '#c3c5b8', 0, 5, -17);
for (let x = -8; x <= 8; x += 2.7) for (let y = 3; y < 10; y += 2.7) {
  box(1.25, 1.6, .12, '#6f7c72', x, y, -14.95); box(.07, 1.6, .15, '#d6d8ca', x, y, -14.85);
}
box(2.1, 3, .15, '#67786d', 5.5, 1.5, -14.8);
for (let i = 0; i < 3; i++) { box(3, .16, .32, '#6c7468', -5.4, .75, -3 + i * .37); }
box(.14, .7, 1.3, '#333f35', -6.4, .35, -2.6); box(.14, .7, 1.3, '#333f35', -4.4, .35, -2.6);
for (let i = 0; i < 6; i++) { box(.12, 4.8, .12, '#6c756a', 6.6 + i * .38, 2.4, -7); }
box(2.5, .12, .12, '#6c756a', 7.5, 4.7, -7);
box(.16, 6, .16, '#596358', -7.8, 3, -8); box(1.7, .16, .16, '#596358', -7.1, 6, -8);
const lamp = new THREE.Mesh(new THREE.SphereGeometry(.3, 12, 8), new THREE.MeshBasicMaterial({ color: '#ecf7c8' })); lamp.position.set(-6.3, 5.8, -8); world.add(lamp);

function art(kind: Kind | 'sign', level = 1): THREE.CanvasTexture {
  const c = document.createElement('canvas'); c.width = 512; c.height = 640;
  const g = c.getContext('2d')!; g.lineJoin = 'round'; g.lineCap = 'round'; g.strokeStyle = '#202522'; g.lineWidth = 12;
  function ellipse(x: number, y: number, rx: number, ry: number, color: string) { g.fillStyle = color; g.beginPath(); g.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); g.fill(); g.stroke(); }
  function path(points: number[][], color: string) { g.fillStyle = color; g.beginPath(); points.forEach(([x,y], i) => i ? g.lineTo(x,y) : g.moveTo(x,y)); g.closePath(); g.fill(); g.stroke(); }
  if (kind === 'enemy') {
    path([[130,420],[120,591],[208,591],[240,450],[277,590],[368,590],[355,410]], '#3e4741');
    path([[121,570],[105,611],[212,611],[210,576]], '#e7e4ce'); path([[281,575],[276,612],[392,612],[365,576]], '#e7e4ce');
    path([[157,232],[100,252],[42,377],[100,411],[155,330],[148,465],[365,465],[354,327],[405,386],[465,347],[392,250],[333,229]], '#b6d451');
    path([[160,250],[230,303],[265,249],[302,298],[333,240]], '#dce5b2');
    ellipse(259,167,91,105,'#f1cbae'); ellipse(170,178,18,27,'#f1cbae'); ellipse(350,178,18,27,'#f1cbae');
    path([[165,137],[177,69],[254,43],[333,76],[353,126],[285,103],[236,122]], '#444b43');
    g.lineWidth = 10; g.beginPath(); g.moveTo(199,153); g.lineTo(234,163); g.moveTo(281,162); g.lineTo(320,147); g.stroke();
    ellipse(221,180,6,9,'#222722'); ellipse(297,179,6,9,'#222722');
    g.beginPath();g.moveTo(253,187);g.lineTo(244,216);g.lineTo(266,215);g.stroke();
    path([[214,239],[299,231],[286,257],[234,260]], '#fff9e2');
    ellipse(79,389,35,40,'#f1cbae'); ellipse(436,363,35,40,'#f1cbae');
    g.fillStyle='#253027';g.font='bold 41px Arial';g.fillText('ЭЙ!',208,390);
  } else if (kind === 'dog') {
    g.strokeStyle='#d3ed64';g.lineWidth=15;g.beginPath();g.ellipse(260,95,88,26,-.15,0,Math.PI*2);g.stroke();g.strokeStyle='#222722';g.lineWidth=12;
    path([[164,382],[142,550],[202,556],[221,452],[290,452],[308,557],[369,552],[350,374]],'#e7ddbd');
    ellipse(253,370,118,109,'#e7ddbd');
    path([[163,212],[116,168],[92,250],[143,333],[193,274]],'#725b42'); path([[336,211],[395,173],[420,251],[370,331],[320,275]],'#725b42');
    ellipse(260,262,108,100,'#e7ddbd');ellipse(265,302,62,45,'#fff1d5');ellipse(263,280,28,19,'#262e26');
    ellipse(220,248,7,11,'#222722');ellipse(309,248,7,11,'#222722');
    g.beginPath();g.moveTo(263,300);g.lineTo(263,323);g.lineTo(287,326);g.stroke();
    path([[159,353],[352,350],[342,379],[170,384]],'#f36ca7');ellipse(260,390,19,23,'#d3ed64');
    g.font='bold 31px Arial';g.fillStyle='#222722';g.fillText('НЕ БИТЬ',180,610);
  } else if (kind === 'bottle') {
    path([[210,103],[300,103],[302,235],[354,296],[354,554],[160,554],[160,297],[209,237]], '#94be6a');
    path([[207,103],[207,70],[306,70],[306,105]],'#f7c56d');
    path([[163,333],[350,333],[350,462],[163,462]], '#eee9d3');
    g.fillStyle='#252d24';g.font='bold 37px Arial';g.fillText('КВАС',195,410);
    g.strokeStyle='#d4e9a6';g.lineWidth=15;g.beginPath();g.moveTo(190,305);g.lineTo(190,322);g.moveTo(190,487);g.lineTo(190,518);g.stroke();
  } else if (kind === 'barrel') {
    path([[133,178],[379,178],[402,526],[111,526]], '#e09b71');
    ellipse(256,180,123,35,'#f1b48c');ellipse(256,526,145,35,'#c68362');
    path([[128,260],[385,260],[389,293],[125,293]], '#6d7767');path([[117,433],[396,433],[399,467],[114,467]], '#6d7767');
    g.font='bold 42px Arial';g.fillStyle='#263126';g.fillText('БАМ!',194,385);
  } else {
    path([[15,120],[495,120],[495,480],[15,480]], level===1?'#c7f653':'#f359a4');g.fillStyle='#222722';g.textAlign='center';g.font='900 75px Arial';g.fillText(level===1?'ДВОР':'ШУМ!',256,270);g.fillText(level===1?'№ 01':'№ 02',256,370);
  }
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace; return texture;
}
const textures = { enemy: art('enemy'), dog: art('dog'), bottle: art('bottle'), barrel: art('barrel') };
const signs = [art('sign'), art('sign',2)];
const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.5, 3.1), new THREE.MeshBasicMaterial({ map: signs[0], transparent: true })); sign.position.set(-1,3,-5.2);world.add(sign);
const targetGroup = new THREE.Group(); scene.add(targetGroup);
const meshes = new Map<number, THREE.Group>();
function makeTarget(t: Target) {
  const group = new THREE.Group();
  const size = t.kind === 'enemy' ? 2.35 : t.kind === 'dog' ? 1.6 : 1.45;
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(size, size * 1.25), new THREE.MeshBasicMaterial({ map: textures[t.kind], transparent: true, alphaTest: .1, side: THREE.DoubleSide }));
  plane.userData.targetId = t.id; group.add(plane);
  const stick = box(.09, 1.2, .12, '#5b6455', 0, -.9, -.08, group); stick.castShadow = false;
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(size * .4, 24), new THREE.MeshBasicMaterial({ color: '#303e2b', transparent: true, opacity: .18, depthWrite: false })); shadow.rotation.x = -Math.PI / 2; shadow.position.set(0,-t.y+.025,0);group.add(shadow);
  if (t.kind === 'enemy') {
    const warning = new THREE.Mesh(new THREE.RingGeometry(.2,.3,32), new THREE.MeshBasicMaterial({ color: '#f45d96', side: THREE.DoubleSide })); warning.position.set(0,1.65,.04);warning.name='warning';group.add(warning);
  }
  group.position.set(t.x, t.y, 0); targetGroup.add(group); meshes.set(t.id, group);
}
function syncTargets() {
  const visible = game.mode === 'menu' || game.mode === 'select' ? [
    {id:-1,kind:'enemy' as const,x:2.4,y:1.8,age:1,deadline:6}, {id:-2,kind:'dog' as const,x:4.6,y:.7,age:1,deadline:Infinity}, {id:-3,kind:'barrel' as const,x:.9,y:.6,age:1,deadline:Infinity}
  ] : game.targets;
  for (const [id, mesh] of meshes) if (!visible.some(t => t.id === id)) { targetGroup.remove(mesh); mesh.traverse(o => { if (o instanceof THREE.Mesh) { o.geometry.dispose(); if (!Array.isArray(o.material)) o.material.dispose(); } }); meshes.delete(id); }
  for (const t of visible) {
    if (!meshes.has(t.id)) makeTarget(t);
    const mesh = meshes.get(t.id)!;
    mesh.position.y = t.y + (reducedMotion()?0:Math.sin(t.age * 3 + t.id) * .04);
    mesh.rotation.z = reducedMotion()?0:Math.sin(t.age * 2 + t.id) * .025;
    const warning = mesh.getObjectByName('warning');
    if (warning) { const urgency = t.age / t.deadline; warning.visible = urgency > .48; warning.scale.setScalar(.65 + urgency * .7 + (reducedMotion()?0:Math.sin(t.age*14)*.08)); mesh.rotation.z += !reducedMotion()&&urgency > .7 ? Math.sin(t.age*24)*.05 : 0; }
  }
}

const armGroup = new THREE.Group(); scene.add(armGroup);
const fistMaterial = new THREE.MeshToonMaterial({ color: '#f2bd93' });
const outlineMaterial = new THREE.MeshBasicMaterial({ color: '#202722', side: THREE.BackSide });
const glove = new THREE.Group();
function fistPart(w:number,h:number,d:number,x:number,y:number,z:number) {
  const geometry = new THREE.SphereGeometry(1,16,12);
  const part = new THREE.Mesh(geometry,fistMaterial);part.scale.set(w,h,d);part.position.set(x,y,z);glove.add(part);
  const outline = new THREE.Mesh(geometry,outlineMaterial);outline.scale.set(w*1.08,h*1.08,d*1.08);outline.position.copy(part.position);glove.add(outline);
}
fistPart(.34,.29,.28,0,0,0);for(let i=0;i<4;i++)fistPart(.095,.14,.16,-.23+i*.15,.2,.06);fistPart(.16,.2,.17,.29,-.04,.05);armGroup.add(glove);
const sleeveMaterial = new THREE.MeshToonMaterial({color:'#c7f653'});
const hose: THREE.Mesh<THREE.BufferGeometry, THREE.MeshToonMaterial> = new THREE.Mesh(new THREE.CylinderGeometry(.14,.19,1,12),sleeveMaterial);armGroup.add(hose);
const hoseOutline = new THREE.Mesh(hose.geometry,outlineMaterial);armGroup.add(hoseOutline);
const heldMesh = new THREE.Mesh(new THREE.PlaneGeometry(.65,.85),new THREE.MeshBasicMaterial({map:textures.bottle,transparent:true,depthTest:false}));heldMesh.renderOrder=5;armGroup.add(heldMesh);
let attack = 0; let attackDestination = new THREE.Vector3(0,1.5,0); let lastAction = 'punch';
const effects: { group: THREE.Group; age: number }[] = [];
function burst(position: THREE.Vector3, good: boolean) {
  if(reducedMotion())return;
  const group = new THREE.Group();group.position.copy(position);group.position.z += .4;
  for(let i=0;i<12;i++) {
    const angle=i/12*Math.PI*2;const shape=new THREE.Shape();shape.moveTo(0,0);shape.lineTo(-.09,.45+Math.random()*.25);shape.lineTo(.1,.4);shape.closePath();
    const shard=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshBasicMaterial({color:i%2?'#f957ac':good?'#c7f653':'#ff4c66',side:THREE.DoubleSide}));shard.rotation.z=angle;group.add(shard);
  }
  scene.add(group);effects.push({group,age:0});
}
const raycaster = new THREE.Raycaster();const pointer = new THREE.Vector2(0,0);
let lastMode = ''; let lastHp = game.hp; let aimId: number | undefined;
function resize() {
  renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;
  camera.fov = innerWidth < 650 ? 58 : 48;camera.updateProjectionMatrix();
  const menu = game.mode === 'menu' || game.mode === 'select';
  if(menu) {camera.position.set(-.4,3,innerWidth<650?13:10);camera.lookAt(innerWidth<650?0:-1.1,1.65,0);}
  else {const distance=innerWidth<650?Math.max(14.5,8.6/(2*Math.tan(THREE.MathUtils.degToRad(29))*camera.aspect)):10.8;camera.position.set(0,2.8,distance);camera.lookAt(0,1.5,0);}
}
addEventListener('resize',resize);
function pick() { raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects([...meshes.values()],true).find(h=>h.object.userData.targetId!==undefined);aimId=hit?.object.userData.targetId;const crosshair=document.querySelector<HTMLElement>('.crosshair');if(crosshair){crosshair.style.left=(pointer.x+1)*50+'%';crosshair.style.top=(1-pointer.y)*50+'%';crosshair.style.borderColor=aimId!==undefined?'#f359a4':'#2229';}return aimId; }
function perform(action:'punch'|'grab') {
  unlockAudio();
  const id=pick();const target=game.targets.find(t=>t.id===id);const wasHeld=game.held;
  const result=game.act(action,id);
  if(result==='blocked'||result==='tired'){ updateHud();return; }
  sound(result==='protected'?'miss':result);
  attack=1;lastAction=wasHeld&&action==='grab'?'throw':action;attackDestination.set(target?.x??pointer.x*4,target?.y??1.6,.3);
  if(result==='hit'||result==='throw'||result==='protected')burst(attackDestination,result!=='protected');
  syncTargets();renderUi();
}
canvas.addEventListener('pointermove',e=>{pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);pick();});
canvas.addEventListener('pointerdown',e=>{ if(game.mode!=='play')return;pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1); if(e.pointerType==='touch'){pick();game.message='Цель выбрана. Жми «Удар» или «Хватай».';updateHud();}else perform(e.button===2?'grab':'punch'); });
canvas.addEventListener('contextmenu',e=>e.preventDefault());
addEventListener('keydown',e=>{if(e.code==='Escape'&&!document.hidden){game.pause();renderUi();}if((e.code==='Space'||e.code==='KeyE')&&!(e.target instanceof HTMLButtonElement)){e.preventDefault();if(!e.repeat)perform(e.code==='Space'?'punch':'grab');}});
function suspendPage(){game.suspend();renderUi();}
document.addEventListener('visibilitychange',()=>{if(document.hidden)suspendPage();});
document.addEventListener('freeze',suspendPage);
addEventListener('pagehide',suspendPage);
function button(id:string,handler:()=>void){document.getElementById(id)?.addEventListener('click',()=>{unlockAudio();sound('ui');handler();});}
function chrome() {return '<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>';}
function renderUi() {
  const mode=game.mode;
  if(mode!==lastMode){lastMode=mode;resize();}
  sign.material.map=signs[game.level-1];
  sun.color.set(game.level===1?'#fff5df':'#e0e9ff');
  world.visible=game.level===1;street.visible=game.level===2;
  app.dataset.mode=mode;app.dataset.level=String(game.level);
  if(mode==='menu') {
    ui.innerHTML=chrome()+'<section class="panel"><div class="eyebrow">Карманный дворовый экшен / 01</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Большой размах в маленьком дворе.<br>Утихомирь задир. Пса не трогай.</p><div class="buttons"><button id="start" class="primary">ВО ДВОР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>ДВА ДВОРА · ОДНА ПАРА РУК</span><span>РЕКОРД: '+game.progress.best+' / СДЕЛАНО ИЗ КАРТОНА И ХАРАКТЕРА</span></div>';
    button('start',()=>{game.mode='select';renderUi();});button('how',()=>{ui.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Мышь — прицел. ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай в задиру. На телефоне коснись цели и нажми нужную кнопку.</p><p>Розовое кольцо? Задира скоро ударит! Береги 5 сердец и запас сил. Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>';button('close',renderUi);});
  } else if(mode==='select') {
    ui.innerHTML=chrome()+'<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>ЗНАКОМЫЕ<br>ВСЁ ДВОРЫ.</h2><div class="levels"><button id="level1" class="primary level"><span>01 / ТИХИЙ ДВОР<br><small>9 задир · мягкий разогрев</small></span><b>↗</b></button><button id="level2" class="secondary level" '+(game.progress.unlocked<2?'disabled':'')+'><span>02 / ШУМНЫЙ ПЕРЕУЛОК<br><small>'+(game.progress.unlocked<2?'Сначала наведи порядок в первом дворе':'14 задир · держи темп')+'</small></span><b>'+(game.progress.unlocked<2?'⊗':'↗')+'</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>';
    button('level1',()=>{game.start(1);renderUi();});button('level2',()=>{game.start(2);renderUi();});button('back',()=>{game.mode='menu';renderUi();});
  } else {
    ui.innerHTML='<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div><div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';
    button('punch',()=>perform('punch'));button('grab',()=>perform('grab'));button('pause',()=>{game.pause();renderUi();});
    if(mode==='pause'||mode==='result') {
      const result=mode==='result';
      ui.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">'+(result?(game.won?'ДВОР В ПОРЯДКЕ':'БЫВАЕТ И ТАК'):'РУКИ НА ПЕРЕРЫВЕ')+'</span><h2>'+(result?(game.won?'КРАСИВО<br>РАЗОБРАЛСЯ!':'НЕ ТОТ<br>РАЗМАХ.'):'ВЫДОХНИ.<br>ДВОР ПОДОЖДЁТ.')+'</h2><p>'+(result?'Счёт: <b>'+game.score+'</b> · Рекорд: '+game.progress.best+(game.won?'<br>Шумный переулок открыт. Есть ещё силы?':'<br>Ещё попытка — все сердца снова с тобой.'):'Время остановилось. Ни один задира не ударит исподтишка.')+'</p><div class="buttons"><button id="resume" class="primary">'+(result?'ЕЩЁ РАЗ ↗':'ПРОДОЛЖИТЬ →')+'</button><button id="select" class="secondary">ВЫБОР ДВОРА</button></div></section>';
      button('resume',()=>{if(result)game.start(game.level);else game.pause();renderUi();});button('select',()=>{game.mode='select';renderUi();});
    }
    updateHud();
  }
  syncTargets();
  if(mode!=='play'){ui.insertAdjacentHTML('beforeend',settingsUi());bindSettings(renderUi);}
}
function updateHud(){
  const enemyLabels=game.targets.filter(t=>t.kind==='enemy').map(t=>t.x<-.5?'слева':t.x>.5?'справа':'в центре');
  canvas.setAttribute('aria-label',`Уровень ${game.level}. Задиры: ${enemyLabels.join(', ')||'нет'}. Коснитесь цели, затем нажмите Удар.`);
  const set=(id:string,text:string)=>{const el=document.getElementById(id);if(el)el.textContent=text;};
  set('hearts','♥'.repeat(Math.max(0,game.hp))+'♡'.repeat(5-Math.max(0,game.hp)));set('stamina',Math.floor(game.stamina)+'');set('score',game.score.toString().padStart(5,'0'));set('combo',game.combo>1?'КОМБО ×'+game.combo:'ДАЙ ИМ РАЗМАХ');set('progress',`ДВОР 0${game.level} / ${game.defeated} ИЗ ${game.goal} ЗАДИР`);set('message',game.message);
  const energy=document.getElementById('energy');if(energy)energy.style.width=game.stamina+'%';
  const grab=document.getElementById('grab');if(grab)grab.innerHTML=game.held?'БРОСАЙ ↗<small>В ЗАДИРУ · 18 СИЛ</small>':'ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small>';
}
const clock=new THREE.Clock();let runtime=0;
function frame(){
  requestAnimationFrame(frame);const dt=Math.min(clock.getDelta(),.05);if(game.mode!=='pause')runtime+=dt;game.tick(dt);
  if(game.mode!==lastMode)renderUi();
  if(lastHp>game.hp&&!reducedMotion()){const flash=document.createElement('div');flash.className='flash';ui.append(flash);setTimeout(()=>flash.remove(),400);}lastHp=game.hp;
  syncTargets();if(game.mode==='play')updateHud();
  if(game.mode!=='pause')attack=Math.max(0,attack-dt*3.4);const travel=!reducedMotion()&&attack>0?Math.sin((1-attack)*Math.PI):0;
  const rest=new THREE.Vector3(.8,1, camera.position.z-1.5);glove.position.copy(rest).lerp(attackDestination,travel);
  glove.rotation.set(.1,0,-.25+travel*.3);glove.scale.setScalar(.7+travel*.2);
  const origin=new THREE.Vector3(1.1,-.4,camera.position.z-.4);const bend=origin.clone().lerp(glove.position,.5).add(new THREE.Vector3(.5*travel,-.65*travel,0));
  const curve=new THREE.CatmullRomCurve3([origin,bend,glove.position.clone()]);hose.geometry.dispose();hoseOutline.geometry.dispose();hose.geometry=new THREE.TubeGeometry(curve,20,.14,8,false);hoseOutline.geometry=new THREE.TubeGeometry(curve,20,.16,8,false);
  armGroup.visible=game.mode==='play'||game.mode==='pause';
  heldMesh.visible=game.held!==null||lastAction==='throw'&&attack>.2;
  if(game.held){const material=heldMesh.material;material.map=textures[game.held];heldMesh.position.copy(rest).add(new THREE.Vector3(-.45,.5,-.3));heldMesh.rotation.z=reducedMotion()?0:Math.sin(runtime*2)*.07;}
  else if(lastAction==='throw'){heldMesh.visible=!reducedMotion()&&attack>.2;heldMesh.position.copy(rest).lerp(attackDestination,1-attack);}
  for(let i=effects.length-1;i>=0;i--){const effect=effects[i];if(game.mode!=='pause')effect.age+=dt;effect.group.scale.setScalar(.4+effect.age*3);effect.group.rotation.z=effect.age;effect.group.children.forEach(child=>{if(child instanceof THREE.Mesh){child.material.transparent=true;child.material.opacity=Math.max(0,1-effect.age*2);}});if(effect.age>.5){scene.remove(effect.group);effect.group.traverse(o=>{if(o instanceof THREE.Mesh){o.geometry.dispose();o.material.dispose();}});effects.splice(i,1);}}
  renderer.render(scene,camera);
}
resize();renderUi();frame();

if(import.meta.env.DEV){
  Object.assign(window,{__game:game,__test:{project(id:number){const t=game.targets.find(v=>v.id===id);if(!t)return null;const p=new THREE.Vector3(t.x,t.y,0).project(camera);return{x:(p.x+1)/2*innerWidth,y:(1-p.y)/2*innerHeight};},webgl:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,context:renderer.getContext().getParameter(renderer.getContext().VERSION)})}});
}
