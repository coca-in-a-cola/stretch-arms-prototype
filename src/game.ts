import type { HitKind, Vec3 } from './aim';
import { LEVELS, LAST_LEVEL, WINDUP, onLanding, pose, type GagKind, type Layer, type PropKind, type Skin } from './layout';
import { PROPS, REACH_COST } from './props';
import { launch, step, type Flight, type Impact } from './throw';
import type { Hittable } from './aim';
import { BET, BET_CARDS } from './ult';
import { FRIEND_LINES, FRIEND_MAD, FRIEND_PENALTY, THUG, THUG_NUISANCE, THUG_STEAL, type FriendKind, type ThugKind } from './friends';

export type Mode = 'menu' | 'select' | 'play' | 'pause' | 'result';
export type Kind = 'enemy' | 'dog' | 'friend' | 'thug' | PropKind;
export interface Actor {
  id: number; kind: Kind; x: number; y: number; z?: number; slot?: number; layer?: Layer; skin?: Skin; age: number; deadline: number;
  /** Ult soaking, 0..1 (1 = knocked out). */ wet?: number;
  /** Enemies: health left / at spawn, and game time of the last damage (drives the health bar). */
  hp?: number; maxHp?: number; hurtAt?: number;
  /** Friends: who, which plan of the level, seconds left being offended (they freeze). Thugs: who, edge side, entrance. */
  who?: FriendKind | ThugKind; plan?: number; mad?: number; side?: -1 | 1; from?: 'edge' | 'manhole';
  /** Enemies: seconds left blinded by a cream pie; a plunger stuck on the face; a silly antic instead of fighting. */
  blind?: number; plunger?: boolean; antic?: Antic;
}
export type Antic = 'dance' | 'sandwich' | 'selfie';
export type KoHow = 'spin' | 'stars' | 'birds' | 'pancake';
/** Every third bully forgets the fight for a while: dances, eats a sandwich or takes a box-camera selfie — fully out, no ducking. */
export const ANTIC = { start: .45, len: 2.6, kinds: ['dance', 'sandwich', 'selfie'] as const, bonus: 2 } as const;
/** Prop gags (thrown props, see props.ts for the base damage). */
export const GAGS = {
  pie: { blind: 3 }, plunger: { stun: 2 }, chicken: { combo: 2, bonus: 100 },
  seeds: { radius: 3.2, damage: 5, max: 3 }, geyser: { radius: 2.4, life: 4.5, damage: 10, stagger: 1.5 },
} as const;
/** A piano or a safe drops out of the sky onto a bully: whistle and a growing shadow first, then the crash. */
export const HAZARD = { first: 9, every: 13, warn: 1.9, radius: 1.3 } as const;
/** Combo milestones get an old-cartoon intertitle with an iris wipe. */
export const MILESTONES: Record<number, string> = { 3: 'ОГО!', 5: 'ВОТ ЭТО ДА!', 8: 'МАМА!', 12: 'ЧУДЕСА НА ВИРАЖАХ!' };
const koStyle = (n: number): KoHow => (['spin', 'stars', 'birds'] as const)[n % 3];
/** Things that just happened, drained by the renderer to play attack / knockout / sad-dog / ult animations. */
export interface GameEvent {
  type: 'attack' | 'ko' | 'dog' | 'smash' | 'ult' | 'ultEnd' | 'hatBack' | 'hurt' | 'land' | 'shatter' | 'thud' | 'gag' | 'offend' | 'nuisance'
    | 'blind' | 'squeak' | 'seeds' | 'geyser' | 'knock' | 'stick' | 'strike' | 'hazard' | 'crash' | 'milestone';
  /** 'ko': how the bully leaves (spinning, as stars, as birds, flattened). 'seeds': who the melon seeds struck. 'hazard'/'crash': piano or safe. */
  how?: KoHow; ids?: number[]; hazard?: 'piano' | 'safe';
  /** 'offend' / 'nuisance' / thug 'ko': which friend or thug; 'offend' also carries the line it shouts. */ who?: FriendKind | ThugKind; text?: string;
  /** 'gag': which joke fired, the gag's id (its box / cover) and, for the laundry, the bully it landed on (id). */ gag?: GagKind; gagId?: string;
  id: number; combo: number; /** Damage dealt ('hurt'). */ amount?: number;
  /** World point of a landing / shatter / thrown-prop impact, and the prop kind. */ point?: Vec3; prop?: PropKind;
}
export interface Progress { version: 2; unlocked: number; best: number; }
export type Action = 'punch' | 'grab';
export type Outcome = 'hit' | 'grab' | 'throw' | 'protected' | 'smash' | 'cover' | 'miss' | 'tired' | 'blocked' | 'ult';
/** What the free-aim ray struck first. `id` is an actor id for enemy/dog/prop; `point` is where it struck. */
export interface StrikeHit { kind: HitKind | 'whiff'; id?: number | string; point?: Vec3; }
/** Secret ultimate timing: a frozen beat with the title card, then the pour. One per level attempt. */
export const ULT = { freeze: .5, intro: BET_CARDS[BET_CARDS.length - 1].at + BET_CARDS[BET_CARDS.length - 1].len, length: 6, soakRate: 1.9, dogCooldown: 1.5 } as const;
export type UltPhase = 'none' | 'intro' | 'pour' | 'done';
export const PROGRESS_KEY = 'long-arms.progress.v2', LEGACY_PROGRESS_KEY = 'long-arms.progress.v1';
export const freshProgress = (): Progress => ({ version: 2, unlocked: 1, best: 0 });
/**
 * v2 order: 1 = bar (open from the start), 2 = the wide street. v1 had 1 = yard, 2 = alley, 3 = bar; the yard and
 * alley were merged into the street, so any v1 save that got past the yard opens the street. Best score carries over.
 */
export function readProgress(raw: string | null): Progress {
  try {
    const p = JSON.parse(raw ?? 'null'), best = Number.isFinite(p?.best) && p.best >= 0 ? Math.floor(p.best) : -1;
    if (p?.version === 2 && Number.isInteger(p.unlocked) && p.unlocked >= 1 && p.unlocked <= LAST_LEVEL && best >= 0) return { version: 2, unlocked: p.unlocked, best };
    if (p?.version === 1 && Number.isInteger(p.unlocked) && p.unlocked >= 1 && p.unlocked <= 3 && best >= 0) return { version: 2, unlocked: p.unlocked >= 2 ? 2 : 1, best };
  } catch { /* Invalid storage is treated as a new game. */ }
  return freshProgress();
}
/** Current save if present, else the migrated v1 save. */
export const loadProgress = (get: (key: string) => string | null) => { const v2 = get(PROGRESS_KEY); return readProgress(v2 ?? get(LEGACY_PROGRESS_KEY)); };
export interface ResultAction { id: 'next' | 'retry' | 'select' | 'menu'; label: string; primary: boolean; }
/** Result screen buttons: after a win the next level is the main call to action; the last level goes back to the menu. */
export function resultActions(g: { won: boolean; level: number; progress: Progress }): ResultAction[] {
  if (g.won && g.level < LAST_LEVEL && g.progress.unlocked > g.level) return [{ id: 'next', label: 'СЛЕДУЮЩИЙ УРОВЕНЬ →', primary: true }, { id: 'retry', label: 'ЕЩЁ РАЗ ↺', primary: false }, { id: 'select', label: 'ВЫБОР УРОВНЯ', primary: false }];
  if (g.won) return [{ id: 'menu', label: 'В МЕНЮ →', primary: true }, { id: 'retry', label: 'ЕЩЁ РАЗ ↺', primary: false }];
  return [{ id: 'retry', label: 'ЕЩЁ РАЗ ↗', primary: true }, { id: 'select', label: 'ВЫБОР УРОВНЯ', primary: false }];
}
/** Stamina for a swing: a punch, a reach for a prop, or a throw of the held prop (heavier costs more). */
export const costOf = (action: Action, holding: boolean, held?: PropKind | null) => action === 'punch' ? 24 : holding ? (held ? PROPS[held].throw : 18) : REACH_COST;
/** Enemy health: a punch knocks off about a third of a regular bully; heavy throws do more (prop table). */
export const PUNCH_DAMAGE = 10;
export const ENEMY_HP: Record<Skin, number> = { cat: 30, walrus: 30, bulldog: 40, weasel: 20 };
/** Health bars show on damage, hold, then fade so a calm street stays uncluttered. */
export const HEALTHBAR = { hold: 2.2, fade: .8 } as const;
export function healthBarAlpha(t: Pick<Actor, 'hurtAt'>, now: number) {
  if (t.hurtAt === undefined) return 0;
  const s = now - t.hurtAt; return s < HEALTHBAR.hold ? 1 : Math.max(0, 1 - (s - HEALTHBAR.hold) / HEALTHBAR.fade);
}

const layerAt = (z: number): Layer => z > 1.5 ? 'foreground' : z > -5 ? 'midground' : 'background';

export class Game {
  mode: Mode = 'menu'; level = 1; hp = 5; stamina = 100; score = 0; combo = 0; elapsed = 0; held: PropKind | null = null;
  ult: { phase: UltPhase; t: number; meter: number; /** Seconds of the pour that went into the hat. */ hat: number } = { phase: 'none', t: 0, meter: 0, hat: 0 }; dogSoak = 0;
  /** Where the bowler sits on the counter once the ult is on (upside down, as a receptacle). */
  hatRest: (Vec3 & { flipped: boolean }) | null = null;
  actors: Actor[] = []; events: GameEvent[] = []; flights: Flight[] = [];
  /** Gags: how many piano riffs played (each repeat varies) and pieces of washing left on the line. */
  riffs = 0; laundry = 5; progress: Progress; won = false; defeated = 0; spawned = 0; spawnClock = 0; nextId = 1;
  message = 'Двор ждёт своих героев';
  /** Where the camera looks (set by the renderer each frame): thugs pop in close to it. `half` = visible half-width at thug depth. */
  cam = { x: 0, z: 9.5, half: 2.6 }; thugClock = 0; thugs = 0;
  /** Hydrant geysers spouting where a hydrant landed, and pianos / safes on their way down. */
  geysers: { id: number; x: number; z: number; age: number; hit: number[] }[] = [];
  hazards: { id: number; kind: 'piano' | 'safe'; x: number; z: number; age: number }[] = []; hazardClock = 0; hazardCount = 0;
  constructor(progress = freshProgress(), private save: (p: Progress) => void = () => {}) { this.progress = progress; }
  get layout() { return LEVELS[this.level]; }
  get goal() { return this.layout.goal; }
  start(level: number) {
    if (level > this.progress.unlocked) return false;
    this.level = level; this.hp = 5; this.stamina = 100; this.score = 0; this.combo = 0; this.elapsed = 0; this.held = null; this.actors = []; this.events = []; this.flights = []; this.riffs = 0; this.laundry = 5; this.won = false; this.defeated = 0; this.spawned = 0; this.spawnClock = 0; this.nextId = 1; this.thugClock = 0; this.thugs = 0; this.geysers = []; this.hazards = []; this.hazardClock = 0; this.hazardCount = 0; this.mode = 'play'; this.message = this.layout.look === 'bar' ? 'Бар «Длинные руки». Ведите себя прилично.' : 'Улица большая — крути камеру к краям!';
    this.ult = { phase: 'none', t: 0, meter: 0, hat: 0 }; this.dogSoak = 0; this.hatRest = null;
    for (const p of this.layout.props) this.actors.push({ id: this.nextId++, kind: p.kind, x: p.x, y: p.y, z: p.z, layer: layerAt(p.z), age: 0, deadline: Infinity });
    this.layout.friends.forEach((f, plan) => this.actors.push({ id: this.nextId++, kind: 'friend', who: f.who, plan, x: f.x0, y: f.y, z: f.z, layer: layerAt(f.z), age: 0, deadline: Infinity }));
    this.spawn(); this.placeHat(); return true;
  }
  get ultActive() { return this.ult.phase === 'intro' || this.ult.phase === 'pour'; }
  /** The bowler sits on its stool until it is grabbed or the ult has been spent. */
  placeHat() {
    const h = this.layout.hat; if (!h || this.ult.phase !== 'none' || this.held === 'hat' || this.actors.some(t => t.kind === 'hat') || this.flights.some(f => f.kind === 'hat')) return;
    this.actors.push({ id: this.nextId++, kind: 'hat', ...h, layer: 'foreground', age: 0, deadline: Infinity });
  }
  /** One frame of the ult stream striking `hit`. Enemies soak up and get knocked out; the halo dog takes offence. */
  soak(hit: StrikeHit, dt: number): 'soak' | 'ko' | 'dog' | null {
    if (this.mode !== 'play' || this.ult.phase !== 'pour') return null;
    const t = typeof hit.id === 'number' ? this.actors.find(v => v.id === hit.id) : undefined; if (!t) return null;
    if (t.kind === 'dog') {
      if (this.dogSoak > 0) return null;
      this.dogSoak = ULT.dogCooldown; this.score = Math.max(0, this.score - 150); this.hp = Math.max(0, this.hp - 1); this.combo = 0;
      this.events.push({ type: 'dog', id: t.id, combo: 0 }); this.message = 'Пёс глубоко оскорблён! −150 и сердце.';
      if (!this.hp) this.finish(false); return 'dog';
    }
    if (t.kind !== 'enemy') return null;
    t.wet = Math.min(1, (t.wet ?? 0) + dt * ULT.soakRate);
    if (t.wet < 1) { this.message = 'ФУ-У-У! Задиры в ужасе.'; return 'soak'; }
    this.actors = this.actors.filter(v => v.id !== t.id); this.combo++; this.defeated++; this.score += 120 + Math.min(this.combo - 1, 9) * 25;
    this.events.push({ type: 'ko', id: t.id, combo: this.combo }); this.message = 'Смыло!';
    if (this.defeated >= this.goal) this.finish(true); return 'ko';
  }
  /** An environment joke struck by a fist or a thrown prop. Returns false if `id` is not a gag. */
  gag(id: string, point?: Vec3) {
    const g = this.layout.gags.find(v => v.id === id); if (!g) return false;
    const e: GameEvent = { type: 'gag', id: 0, combo: this.combo, gag: g.kind, gagId: g.id, point };
    if (g.kind === 'piano') { e.amount = this.riffs++; this.message = 'ТРЫНЬ! Пианино само заиграло рэгтайм.'; }
    else if (g.kind === 'cuckoo') this.message = 'КУ-КУ! Кукушка высунулась и обозвала тебя.';
    else if (g.kind === 'lamp') this.message = 'Лампа раскачалась — свет мигает!';
    else if (g.kind === 'bell') this.message = 'ДЗИИНЬ! Фонарь звенит, как колокол.';
    else if (g.kind === 'laundry') {
      if (this.laundry <= 0) { this.message = 'Верёвка пуста — всё бельё уже на задирах.'; return true; }
      this.laundry--;
      // The washing drops on the bully nearest below the line (exposed, on the yard side), with a sting.
      const cx = point?.x ?? ((g.min!.x + g.max!.x) / 2), under = this.actors.filter(t => t.kind === 'enemy' && t.age > .3 && t.x > g.min!.x - 1 && t.x < g.max!.x + 1)
        .sort((a, b) => Math.abs(a.x - cx) - Math.abs(b.x - cx))[0];
      if (under) { e.id = under.id; this.events.push(e); this.hurt(under, 10); this.message = 'Трусы на голову! Задира ослеп.'; return true; }
      this.message = 'Бельё шлёпнулось в пыль. Мимо!';
    }
    this.events.push(e); return true;
  }
  /** One frame of the pour landing in the upside-down hat: that is the bet (and a trickle of points). */
  pourInHat(dt: number) {
    if (this.mode !== 'play' || this.ult.phase !== 'pour') return false;
    const before = Math.floor(this.ult.hat * BET.perSecond); this.ult.hat += dt; this.score += Math.floor(this.ult.hat * BET.perSecond) - before;
    this.message = 'Прямо в шляпу! Ни капли мимо…'; return true;
  }
  pause() { if (this.mode === 'play') this.mode = 'pause'; else if (this.mode === 'pause') this.mode = 'play'; }
  suspend() { if (this.mode === 'play') this.mode = 'pause'; }
  spawn() {
    if (this.spawned >= this.goal) return;
    const { order, slots, dogs, deadline, maxAlive } = this.layout;
    const slot = order[this.spawned % order.length];
    if (this.actors.some(t => t.kind === 'enemy' && t.slot === slot)) return;
    if (maxAlive && this.actors.filter(t => t.kind === 'enemy').length >= maxAlive) return;
    const s = slots[slot];
    const hp = ENEMY_HP[s.skin ?? 'cat'];
    const antic = this.spawned % 3 === 2 ? ANTIC.kinds[Math.floor(this.spawned / 3) % ANTIC.kinds.length] : undefined;
    this.actors.push({ id: this.nextId++, kind: 'enemy', x: s.x, y: s.y, z: s.z, slot, layer: s.layer, age: 0, deadline: deadline + (antic ? ANTIC.len : 0), hp, maxHp: hp, antic });
    this.spawned++;
    if (!this.actors.some(t => t.kind === 'dog')) for (const dog of dogs) this.actors.push({ id: this.nextId++, kind: 'dog', ...dog, layer: 'midground', age: 0, deadline: Infinity });
    if (s.skin) this.actors.find(t => t.kind === 'enemy' && t.slot === slot)!.skin = s.skin;
  }
  tick(dt: number) {
    if (this.mode !== 'play') return;
    if (this.ult.phase === 'intro') { this.ult.t += dt; if (this.ult.t >= ULT.intro) { this.ult = { phase: 'pour', t: 0, meter: 1, hat: 0 }; this.message = 'Держи струю в шляпе! Задир можно и окатить. Пса не задень.'; } return; } // everyone freezes
    const pouring = this.ult.phase === 'pour';
    if (pouring) {
      this.ult.t += dt; this.ult.meter = Math.max(0, 1 - this.ult.t / ULT.length); this.dogSoak = Math.max(0, this.dogSoak - dt);
      if (this.ult.t >= ULT.length) {
        const won = this.ult.hat >= ULT.length * BET.share;
        this.ult = { ...this.ult, phase: 'done', t: 0, meter: 0 }; this.events.push({ type: 'ultEnd', id: 0, combo: this.combo, amount: won ? BET.prize : 0 });
        if (won) { this.score += BET.prize; this.message = `Ни капли мимо! Бармен платит ${BET.prize}.`; } else this.message = 'Пролил! Бармен забирает свои триста.';
      }
    }
    this.elapsed += dt; this.stamina = Math.min(100, this.stamina + dt * 21); this.spawnClock += dt;
    for (const t of [...this.actors]) {
      if (t.kind === 'friend' && t.mad) { t.mad = Math.max(0, t.mad - dt); continue; } // offended: frozen on the spot
      t.age += dt;
      if (t.kind === 'thug' && t.age >= THUG.strike) { this.nuisance(t); continue; }
      if (t.kind === 'enemy') {
        if (t.blind) { t.blind = Math.max(0, t.blind - dt); t.deadline = Math.max(t.deadline, t.age + WINDUP + .4); } // can't swing what you can't see
        if (t.antic && t.age > ANTIC.start + ANTIC.len) t.antic = undefined;
      }
      // Mid-pour nobody gets a swing in: they are too busy being disgusted.
      if (pouring && t.kind === 'enemy') t.age = Math.min(t.age, Math.max(t.age - dt, t.deadline - 1.0));
      if (t.kind === 'enemy' && t.age >= t.deadline) { this.actors = this.actors.filter(v => v.id !== t.id); this.hp--; this.combo = 0; this.defeated++; this.events.push({ type: 'attack', id: t.id, combo: 0 }); this.message = 'Прилетело! Следи за замахом.'; }
    }
    if (this.hp <= 0) { this.finish(false); return; }
    if (this.defeated >= this.goal) { this.finish(true); return; }
    if (this.spawnClock >= 1.55) { this.spawnClock = 0; this.spawn(); }
    this.stepGeysers(dt); this.stepHazards(dt, pouring); if (this.mode !== 'play') return;
    if (this.layout.thugs && !pouring) { this.thugClock += dt; if (this.thugClock >= (this.thugs ? THUG.every : THUG.first)) { this.thugClock = 0; this.spawnThug(); } }
  }
  /** A combo step: milestones (3, 5, 8, 12) raise an intertitle. */
  private bump(n = 1) {
    for (let i = 0; i < n; i++) { this.combo++; const text = MILESTONES[this.combo]; if (text) this.events.push({ type: 'milestone', id: 0, combo: this.combo, text }); }
  }
  /** Hydrant geysers knock back (and sting) every bully near them, once each. */
  private stepGeysers(dt: number) {
    for (const g of this.geysers) {
      g.age += dt;
      for (const t of this.actors.filter(a => a.kind === 'enemy' && !g.hit.includes(a.id))) {
        const p = pose(this.level, t); if (Math.hypot(p.x - g.x, p.z - g.z) > GAGS.geyser.radius) continue;
        g.hit.push(t.id); this.events.push({ type: 'knock', id: t.id, combo: this.combo, point: { x: g.x, y: 0, z: g.z } });
        if (!this.hurt(t, GAGS.geyser.damage, true)) { t.deadline += GAGS.geyser.stagger; this.message = 'Гидрант бьёт фонтаном — задиру сдуло!'; }
        if (this.mode !== 'play') return;
      }
    }
    this.geysers = this.geysers.filter(g => g.age < GAGS.geyser.life);
  }
  /** Now and then a piano or a safe whistles down onto an exposed bully (the shadow grows first). */
  private stepHazards(dt: number, pouring: boolean) {
    if (!pouring) this.hazardClock += dt;
    if (this.hazardClock >= (this.hazardCount ? HAZARD.every : HAZARD.first)) {
      const cands = this.actors.filter(t => t.kind === 'enemy' && t.age > .6).map(t => ({ t, p: pose(this.level, t) })).sort((a, b) => Math.abs(a.p.x - this.cam.x) - Math.abs(b.p.x - this.cam.x));
      if (cands.length) { this.hazardClock = 0; this.dropFromSky(cands[0].p.x, cands[0].p.z); } else this.hazardClock -= 1;
    }
    for (const h of [...this.hazards]) {
      h.age += dt; if (h.age < HAZARD.warn) continue;
      this.hazards = this.hazards.filter(v => v !== h);
      const flat = this.actors.filter(t => t.kind === 'enemy').filter(t => { const p = pose(this.level, t); return Math.hypot(p.x - h.x, p.z - h.z) <= HAZARD.radius; });
      this.events.push({ type: 'crash', id: h.id, combo: this.combo, hazard: h.kind, point: { x: h.x, y: 0, z: h.z }, ids: flat.map(t => t.id) });
      for (const t of flat) { this.hurt(t, 999, false, 'pancake'); if (this.mode !== 'play') return; }
      this.message = flat.length ? (h.kind === 'piano' ? 'БДЫЩЬ! Рояль с неба — задира в лепёшку!' : 'БУМ! Сейф на голову — в лепёшку!') : 'Мимо! Но грохоту-то сколько.';
    }
  }
  /** Start a falling piano or safe at a ground spot (also used by tests). */
  dropFromSky(x: number, z: number) {
    const h = { id: this.nextId++, kind: this.hazardCount++ % 2 ? 'safe' as const : 'piano' as const, x, z, age: 0 };
    this.hazards.push(h); this.events.push({ type: 'hazard', id: h.id, combo: this.combo, hazard: h.kind, point: { x, y: 0, z } }); return h;
  }
  /** Melon seeds ricochet off the burst into nearby bullies. */
  private seeds(point: Vec3, skip?: number) {
    const near = this.actors.filter(t => t.kind === 'enemy' && t.id !== skip).map(t => ({ t, d: Math.hypot(pose(this.level, t).x - point.x, pose(this.level, t).z - point.z) }))
      .filter(v => v.d <= GAGS.seeds.radius).sort((a, b) => a.d - b.d).slice(0, GAGS.seeds.max).map(v => v.t);
    this.events.push({ type: 'seeds', id: 0, combo: this.combo, point, ids: near.map(t => t.id) });
    for (const t of near) { this.hurt(t, GAGS.seeds.damage, true); if (this.mode !== 'play') return; }
  }
  /** A thrown prop struck a bully: base damage from the prop table, plus each prop's own joke. */
  private propHit(f: Flight, t: Actor, point: Vec3) {
    const spec = PROPS[f.kind];
    if (!spec.damage) { this.combo = 0; this.message = 'Шляпу — не в задиру!'; return; }
    if (f.kind === 'anvil') { this.hurt(t, Math.max(spec.damage, t.hp ?? 0), true, 'pancake'); this.message = 'НАКОВАЛЬНЯ! Задира — блин.'; return; }
    if (f.kind === 'chicken') { this.bump(GAGS.chicken.combo); this.score += GAGS.chicken.bonus; this.events.push({ type: 'squeak', id: t.id, combo: this.combo, point }); }
    const ko = this.hurt(t, spec.damage * (t.antic ? ANTIC.bonus : 1), true);
    if (f.kind === 'bowling' && f.hits?.length === 2) { this.events.push({ type: 'strike', id: t.id, combo: this.combo, point }); this.message = 'СТРАЙК! Двоих одним шаром!'; }
    if (ko) return;
    if (f.kind === 'pie') { t.blind = GAGS.pie.blind; this.events.push({ type: 'blind', id: t.id, combo: this.combo, point }); this.message = 'Пирог в лицо! Ничего не видит, шатается.'; }
    if (f.kind === 'plunger') { t.plunger = true; t.deadline += GAGS.plunger.stun; this.events.push({ type: 'stick', id: t.id, combo: this.combo, point }); this.message = 'ЧПОК! Вантуз прилип к физиономии.'; }
    if (f.kind === 'chicken') this.message = `ПИ-И-ИСК! Комбо +${GAGS.chicken.combo}!`;
  }
  /** A close-range thug pops in right in front of the camera: from a screen edge or out of a manhole. */
  spawnThug() {
    const live = this.actors.filter(t => t.kind === 'thug').length; if (live >= (this.elapsed > 30 ? 2 : 1)) return null;
    const n = this.thugs++, who = (['rat', 'gang', 'kid'] as const)[n % 3], side: -1 | 1 = n % 2 ? 1 : -1, from = n % 3 === 1 ? 'manhole' as const : 'edge' as const;
    const z = this.cam.z - THUG.depth, x = this.cam.x + side * this.cam.half * (from === 'manhole' ? .3 : .62);
    const t: Actor = { id: this.nextId++, kind: 'thug', who, side, from, x, y: 0, z, layer: 'foreground', age: 0, deadline: THUG.strike, hp: 1, maxHp: 1 };
    this.actors.push(t); this.message = from === 'manhole' ? 'Из люка лезет шпана — бей сразу!' : 'Шпана под носом — бей сразу!'; return t;
  }
  /** Ignored too long: the thug does its quick dirty trick and runs off. */
  private nuisance(t: Actor) {
    this.actors = this.actors.filter(v => v.id !== t.id); const n = THUG_NUISANCE[t.who as ThugKind];
    if (n.what === 'stamina') this.stamina = Math.max(0, this.stamina - THUG_STEAL);
    if (n.what === 'heart') { this.hp--; this.combo = 0; }
    this.events.push({ type: 'nuisance', id: t.id, combo: this.combo, who: t.who }); this.message = n.line;
  }
  /** One punch (or any thrown prop) knocks a thug out. Not a bully for the goal, but it feeds the combo. */
  private thugKo(t: Actor, throwing = false) {
    this.actors = this.actors.filter(v => v.id !== t.id); this.bump(); this.score += 60 + Math.min(this.combo - 1, 9) * 15;
    this.events.push({ type: 'ko', id: t.id, combo: this.combo, who: t.who }); this.message = throwing ? 'Шпану — с одного броска!' : ['ШМЯК! Шпана — в нокауте.', 'Мелочь, а приятно!', 'Брысь!'][this.combo % 3];
  }
  /** Hitting a friend: a heart and points, and they stay offended (frozen) for a while. */
  private friendHit(t: Actor) {
    if (t.mad) { this.message = 'Он и так обижен! Оставь в покое.'; return; }
    const lines = FRIEND_LINES[t.who as FriendKind], text = lines[this.events.length % lines.length];
    this.score = Math.max(0, this.score - FRIEND_PENALTY); this.hp = Math.max(0, this.hp - 1); this.combo = 0; t.mad = FRIEND_MAD;
    this.events.push({ type: 'offend', id: t.id, combo: 0, who: t.who, text }); this.message = `${text} −${FRIEND_PENALTY} и сердце.`;
    if (!this.hp) this.finish(false);
  }
  /** Pays for a swing up front. Every launched swing costs stamina, whatever it ends up hitting. */
  spend(action: Action): boolean {
    if (this.mode !== 'play') return false;
    if (this.ultActive) { this.message = 'Не до кулаков — идёт ульта!'; return false; }
    const cost = costOf(action, action === 'grab' && this.held !== null, this.held);
    if (this.stamina < cost) { this.message = 'Выдохни. Руки тоже устают.'; return false; }
    this.stamina -= cost; return true;
  }
  /** Applies the result of an already-paid swing at whatever the free-aim ray struck first. */
  resolve(action: Action, hit: StrikeHit): Outcome {
    if (this.mode !== 'play') return 'blocked';
    const throwing = action === 'grab' && this.held !== null, thrown = this.held;
    if (throwing) this.held = null;
    if (thrown === 'hat') {
      if (hit.kind === 'cover' && onLanding(this.level, hit.id, hit.point) && this.ult.phase === 'none') {
        this.hatRest = { ...hit.point!, y: LEVELS[this.level].covers.find(c => c.id === hit.id)!.max.y, flipped: true };
        this.ult = { phase: 'intro', t: 0, meter: 1, hat: 0 }; this.combo = 0; this.events.push({ type: 'ult', id: 0, combo: 0, point: this.hatRest });
        this.message = 'ДИНЬ! Шляпа на стойке…'; return 'ult';
      }
      this.placeHat(); this.events.push({ type: 'hatBack', id: 0, combo: 0 });
    }
    const t = typeof hit.id === 'number' ? this.actors.find(v => v.id === hit.id) : undefined;
    if (throwing && thrown && thrown !== 'hat' && (!t || t.kind !== 'enemy') && hit.point) this.rest(thrown, { x: hit.point.x, y: 0, z: hit.point.z });
    if (hit.kind === 'cover' && typeof hit.id === 'string' && this.gag(hit.id, hit.point)) { this.combo = 0; return 'cover'; }
    if (hit.kind === 'cover') { this.combo = 0; this.message = throwing ? 'Бросок в укрытие. Жди, пока высунется!' : 'ТУК! Укрытие. Бей, когда высунется.'; return 'cover'; }
    if (!t) { this.combo = 0; this.message = hit.kind === 'scenery' ? 'Только стену поцарапал.' : throwing ? 'Бросок в никуда.' : 'Мимо! Чистый промах.'; return 'miss'; }
    if (t.kind === 'dog') { this.dogHit(t); return 'protected'; }
    if (t.kind === 'friend') { this.friendHit(t); return 'protected'; }
    if (t.kind === 'thug') { if (action === 'punch' || throwing) { this.thugKo(t, throwing); return throwing ? 'throw' : 'hit'; } this.combo = 0; this.message = 'Шпану — кулаком!'; return 'miss'; }
    if (t.kind === 'hat' && !(action === 'grab' && !throwing)) { this.combo = 0; this.message = 'Шляпу не бьют. Шляпу берут.'; return 'miss'; }
    if (t.kind !== 'enemy') {
      this.actors = this.actors.filter(v => v.id !== t.id);
      if (action === 'grab' && !throwing) {
        this.held = t.kind; this.stamina = Math.max(0, this.stamina - Math.max(0, PROPS[t.kind].grab - REACH_COST)); // heavy lifting
        this.message = t.kind === 'hat' ? 'Котелок! Ему явно где-то здесь место…' : PROPS[t.kind].mass >= 4 ? `Ух, ${PROPS[t.kind].name}! Тяжело, но больно.` : 'В руке! Теперь бросай в задиру.'; return 'grab';
      }
      this.score += 25; this.events.push({ type: 'smash', id: t.id, combo: this.combo }); this.message = 'ДЗЫНЬ! Минус реквизит, плюс 25.'; return 'smash';
    }
    if (action === 'punch' || throwing) {
      const caught = t.antic ? ANTIC.bonus : 1; // caught clowning around: double damage
      if (!this.hurt(t, (throwing && thrown ? PROPS[thrown].damage : PUNCH_DAMAGE) * caught, throwing) && caught > 1) this.message = 'ПОДЛОВИЛ! Урон ×2.';
      return throwing ? 'throw' : 'hit';
    }
    this.combo = 0; this.message = 'Задиру — кулаком. Предмет — хватай!'; return 'miss';
  }
  /** Let go of the held prop: it flies on its own from `from` toward the aim point `to` (see throw.ts). */
  launch(from: Vec3, to: Vec3): Flight | null {
    if (this.mode !== 'play' || !this.held) return null;
    const f = launch(this.nextId++, this.held, from, to); this.held = null; this.flights.push(f);
    this.message = 'Полетел!'; return f;
  }
  /** Advance every prop in the air against the world; returns what happened this frame (for sound and FX). */
  fly(dt: number, world: readonly Hittable[]): { flight: Flight; impact: Impact }[] {
    const out: { flight: Flight; impact: Impact }[] = [];
    if (this.mode !== 'play') return out;
    for (const f of [...this.flights]) {
      for (const impact of step(f, dt, world)) {
        out.push({ flight: f, impact }); if (this.mode !== 'play') return out;
        const spec = PROPS[f.kind];
        if (impact.type === 'hit') {
          const t = typeof impact.id === 'number' ? this.actors.find(v => v.id === impact.id) : undefined;
          if (t?.kind === 'enemy') this.propHit(f, t, impact.point);
          else if (t?.kind === 'dog') this.dogHit(t);
          else if (t?.kind === 'friend') this.friendHit(t);
          else if (t?.kind === 'thug') this.thugKo(t, true);
          else if (!(typeof impact.id === 'string' && this.gag(impact.id, impact.point))) { this.combo = 0; this.message = impact.kind === 'cover' ? 'Бросок в укрытие. Жди, пока высунется!' : 'Только стену задел.'; }
          if (this.mode !== 'play') return out;
          if (f.kind === 'melon') this.seeds(impact.point, t?.kind === 'enemy' ? t.id : undefined);
          if (f.kind === 'plunger' && t?.kind === 'enemy' && t.plunger) { this.flights = this.flights.filter(v => v !== f); break; } // stuck on the face
          if (spec.breakable) { this.flights = this.flights.filter(v => v !== f); this.events.push({ type: 'shatter', id: f.id, combo: this.combo, point: impact.point, prop: f.kind }); break; }
        } else {
          this.flights = this.flights.filter(v => v !== f);
          this.landed(f, impact.point, impact.on);
        }
      }
    }
    return out;
  }
  /** A flight came to rest. Props stay where they land; the hat is special (see below). */
  private landed(f: Flight, point: Vec3, on: number | string) {
    if (f.kind === 'hat') {
      if (onLanding(this.level, on, point) && this.ult.phase === 'none') {
        this.hatRest = { ...point, flipped: true }; // crown down, opening up: it is a receptacle now
        this.ult = { phase: 'intro', t: 0, meter: 1, hat: 0 }; this.combo = 0; this.events.push({ type: 'ult', id: 0, combo: 0, point });
        this.message = 'ДИНЬ! Шляпа на стойке — вверх дном.'; return;
      }
      // Behind the counter it would be out of reach for good: the bowler hops back onto its stool.
      const counter = this.layout.covers.find(c => c.id === this.layout.landing?.cover);
      if (counter && point.z < counter.min.z) { this.placeHat(); this.events.push({ type: 'hatBack', id: 0, combo: 0 }); return; }
    }
    if (f.kind === 'hydrant') { const g = { id: this.nextId++, x: point.x, z: point.z, age: 0, hit: [] as number[] }; this.geysers.push(g); this.events.push({ type: 'geyser', id: g.id, combo: this.combo, point }); this.message = 'Гидрант сорвало — фонтан!'; this.rest(f.kind, point); return; }
    if (f.kind === 'chicken') this.events.push({ type: 'squeak', id: 0, combo: this.combo, point });
    if (!f.struck) { this.combo = 0; this.message = f.kind === 'hat' ? 'Мимо стойки. Подбери котелок и ещё раз!' : `Мимо! ${PROPS[f.kind].name[0].toUpperCase() + PROPS[f.kind].name.slice(1)} лежит — подбери.`; }
    this.rest(f.kind, point);
  }
  private rest(kind: PropKind, point: Vec3) {
    const t: Actor = { id: this.nextId++, kind, x: point.x, y: point.y, z: point.z, layer: layerAt(point.z), age: 0, deadline: Infinity };
    this.actors.push(t); this.events.push({ type: 'land', id: t.id, combo: this.combo, point, prop: kind });
  }
  private dogHit(t: Actor) {
    this.score = Math.max(0, this.score - 150); this.hp = Math.max(0, this.hp - 1); this.combo = 0; this.events.push({ type: 'dog', id: t.id, combo: 0 }); this.message = 'Пёс — святой! −150 и сердце.'; if (!this.hp) this.finish(false);
  }
  /** Damage an enemy: a hurt flash + number while it has HP left (and a stagger), a knockout when it runs out. */
  hurt(t: Actor, amount: number, throwing = false, how?: KoHow) {
    const lost = Math.min(amount, t.hp ?? 1); t.hp = Math.max(0, (t.hp ?? 1) - amount); t.hurtAt = this.elapsed;
    this.events.push({ type: 'hurt', id: t.id, combo: this.combo, amount: lost }); // a falling piano shows −30, not −999
    if (t.hp > 0) {
      this.score += 20; t.deadline = Math.max(t.deadline, t.age + WINDUP + 1.2); // staggered: the swing restarts
      this.message = throwing ? `Прямое попадание! −${amount}` : ['БАМ! Ещё разок!', 'Шатается!', 'Добавь!'][Math.floor(t.hp / 10) % 3];
      return false;
    }
    this.actors = this.actors.filter(v => v.id !== t.id); this.bump(); this.score += (throwing ? 180 : 100) + Math.min(this.combo - 1, 9) * 25; this.defeated++;
    this.events.push({ type: 'ko', id: t.id, combo: this.combo, how: how ?? koStyle(this.defeated) });
    this.message = throwing ? 'Точный бросок. Нокаут!' : ['Нокаут! Так держать.', 'Вот это размах!', 'Живой нокаут!'][this.combo % 3];
    if (this.defeated >= this.goal) this.finish(true);
    return true;
  }
  /** Convenience: spend + resolve against an actor id (undefined = whiff). */
  act(action: Action, id?: number, costPaid = false): Outcome {
    if (this.mode !== 'play') return 'blocked';
    if (!costPaid && !this.spend(action)) return 'tired';
    const t = this.actors.find(v => v.id === id);
    return this.resolve(action, t ? { kind: t.kind === 'enemy' || t.kind === 'dog' || t.kind === 'friend' || t.kind === 'thug' ? t.kind : 'prop', id } : { kind: 'whiff' });
  }
  get canUlt() { return this.ult.phase === 'none'; }
  get pouring() { return this.ult.phase === 'pour';
  }
  finish(won: boolean) {
    this.won = won; this.mode = 'result'; this.held = null;
    if (won) { this.progress.unlocked = Math.min(LAST_LEVEL, Math.max(this.progress.unlocked, this.level + 1)); this.score += this.hp * 100; }
    if (this.ultActive) this.ult = { ...this.ult, phase: 'done', t: 0, meter: 0 };
    this.progress.best = Math.max(this.progress.best, this.score); this.save({ ...this.progress });
  }
}
