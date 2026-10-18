// On-screen herald: a DOM layer between the 3D scene and the arm canvas (so the glove punches in front of the flyer).
// He leans in from the bottom-left, big and cropped by the screen edge; the flyer text is set in-game on blank flyer art.
import './herald.css';
import { HERALD_BYE, type Briefing, type FlyerArt } from './herald';

const POSES = { lean: 'gen_herald_lean.png', point: 'gen_herald_point.png', mad: 'gen_herald_mad.png' } as const;
type Pose = keyof typeof POSES;
const url = (f: string) => `${import.meta.env.BASE_URL}assets/${f}`;
const escape = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function heraldView(layer: HTMLElement, onSkip: () => void) {
  layer.innerHTML = `<div class="hd-stage"><img class="hd-guy" alt="" draggable="false"><div class="hd-flyer" hidden><img alt="" draggable="false"><div class="hd-text"></div></div><div class="hd-card" role="status" hidden></div></div><div class="hd-bits"></div><button id="heraldSkip" class="hd-skip primary" type="button">ПОНЯЛ ✓<small>ESC · ПРОПУСТИТЬ</small></button>`;
  const guy = layer.querySelector<HTMLImageElement>('.hd-guy')!, card = layer.querySelector<HTMLElement>('.hd-card')!;
  const flyer = layer.querySelector<HTMLElement>('.hd-flyer')!, art = flyer.querySelector('img')!, text = flyer.querySelector<HTMLElement>('.hd-text')!;
  const bits = layer.querySelector<HTMLElement>('.hd-bits')!;
  layer.querySelector('#heraldSkip')!.addEventListener('click', e => { e.stopPropagation(); onSkip(); });
  // Alpha masks of the poses: a punch on transparent pixels around him is not a punch on him.
  const masks = new Map<string, ImageData>();
  for (const f of Object.values(POSES)) {
    const img = new Image(); img.src = url(f);
    img.decode().then(() => { const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight; const g = c.getContext('2d', { willReadFrequently: true }); if (!g) return; g.drawImage(img, 0, 0); masks.set(f, g.getImageData(0, 0, c.width, c.height)); }).catch(() => {});
  }
  let key = '', pose: Pose = 'lean', shownFlyer = -1;

  function sync(b: Briefing | null, paused: boolean) {
    layer.hidden = !b; if (!b) { key = ''; shownFlyer = -1; return; }
    pose = b.phase === 'mad' ? 'mad' : b.index % 2 ? 'point' : 'lean';
    const f = b.flyer, k = `${b.phase}|${b.index}|${pose}|${paused}`;
    if (k === key) return; key = k;
    layer.dataset.phase = b.phase; layer.dataset.paused = String(paused);
    if (!guy.src.endsWith(POSES[pose])) guy.src = url(POSES[pose]);
    guy.dataset.pose = pose;
    const talk = b.phase === 'mad' ? b.line : b.phase === 'leave' ? HERALD_BYE : '';
    card.hidden = !talk; card.textContent = talk;
    const showFlyer = !!f && (b.phase === 'show' || b.phase === 'mad' || b.phase === 'enter');
    flyer.hidden = !showFlyer;
    if (showFlyer && f && shownFlyer !== b.index) {
      shownFlyer = b.index; flyer.dataset.art = f.art; art.src = url(`gen_flyer_${f.art}.png`);
      flyer.classList.remove('hd-in'); void flyer.offsetWidth; flyer.classList.add('hd-in');
      text.innerHTML = `<h3>${escape(f.title)}</h3>${f.lines.map(l => `<p>${escape(l)}</p>`).join('')}<small>${b.index + 1} / ${b.flyers.length} · ударь по листовке →</small>`;
    }
  }

  /** What a fist landing at this screen point strikes: the flyer (in front), the herald (opaque pixels), or nothing. */
  function hit(x: number, y: number): 'flyer' | 'herald' | 'none' { const r = strike(x, y); layer.dataset.hit = r; return r; } // published for tests
  function strike(x: number, y: number): 'flyer' | 'herald' | 'none' {
    if (layer.hidden) return 'none';
    if (!flyer.hidden) { const r = flyer.getBoundingClientRect(); if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return 'flyer'; }
    const r = guy.getBoundingClientRect(); if (x < r.left || x > r.right || y < r.top || y > r.bottom || !r.width) return 'none';
    const m = masks.get(POSES[pose]); if (!m) return 'herald';
    const px = Math.floor((x - r.left) / r.width * m.width), py = Math.floor((y - r.top) / r.height * m.height);
    return m.data[(py * m.width + px) * 4 + 3] > 60 ? 'herald' : 'none';
  }

  /** The punched flyer rips in two and flies off, shedding paper bits. */
  function tear(motion: boolean) {
    if (flyer.hidden || !motion) return;
    const r = flyer.getBoundingClientRect(), a = flyer.dataset.art as FlyerArt;
    for (const side of ['l', 'r'] as const) {
      const half = flyer.cloneNode(true) as HTMLElement; half.classList.remove('hd-in'); half.classList.add('hd-half', side);
      half.style.left = r.left + 'px'; half.style.top = r.top + 'px'; half.style.width = r.width + 'px'; half.style.height = r.height + 'px'; half.dataset.art = a;
      bits.append(half); setTimeout(() => half.remove(), 900);
    }
    for (let i = 0; i < 14; i++) {
      const b = document.createElement('i'); b.className = 'hd-bit';
      b.style.left = r.left + r.width * (.3 + Math.random() * .4) + 'px'; b.style.top = r.top + r.height * (.2 + Math.random() * .6) + 'px';
      b.style.setProperty('--dx', (Math.random() - .5) * 520 + 'px'); b.style.setProperty('--dy', (Math.random() * -.6 + .2) * 420 + 'px'); b.style.setProperty('--r', (Math.random() - .5) * 900 + 'deg');
      bits.append(b); setTimeout(() => b.remove(), 900);
    }
    flyer.hidden = true;
  }
  return { sync, hit, tear };
}
