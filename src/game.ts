import type { HitKind, Vec3 } from './aim';
import { LEVELS, LAST_LEVEL, WINDUP, onLanding, type GagKind, type Layer, type PropKind, type Skin } from './layout';
import { PROPS, REACH_COST } from './props';
import { launch, step, type Flight, type Impact } from './throw';
import type { Hittable } from './aim';
import { BET, BET_CARDS } from './ult';

export type Mode = 'menu' | 'select' | 'play' | 'pause' | 'result';
export type Kind = 'enemy' | 'dog' | PropKind;
export interface Actor {
  id: number; kind: Kind; x: number; y: number; z?: number; slot?: number; layer?: Layer; skin?: Skin; age: number; deadline: number;
  /** Ult soaking, 0..1 (1 = knocked out). */ wet?: number;
  /** Enemies: health left / at spawn, and game time of the last damage (drives the health bar). */
  hp?: number; maxHp?: number; hurtAt?: number;
}
/** Things that just happened, drained by the renderer to play attack / knockout / sad-dog / ult animations. */
export interface GameEvent {
  type: 'attack' | 'ko' | 'dog' | 'smash' | 'ult' | 'ultEnd' | 'hatBack' | 'hurt' | 'land' | 'shatter' | 'thud' | 'gag';
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
  constructor(progress = freshProgress(), private save: (p: Progress) => void = () => {}) { this.progress = progress; }
  get layout() { return LEVELS[this.level]; }
  get goal() { return this.layout.goal; }
  start(level: number) {
    if (level > this.progress.unlocked) return false;
    this.level = level; this.hp = 5; this.stamina = 100; this.score = 0; this.combo = 0; this.elapsed = 0; this.held = null; this.actors = []; this.events = []; this.flights = []; this.riffs = 0; this.laundry = 5; this.won = false; this.defeated = 0; this.spawned = 0; this.spawnClock = 0; this.nextId = 1; this.mode = 'play'; this.message = this.layout.look === 'bar' ? 'Бар «Длинные руки». Ведите себя прилично.' : 'Улица большая — крути камеру к краям!';
    this.ult = { phase: 'none', t: 0, meter: 0, hat: 0 }; this.dogSoak = 0; this.hatRest = null;
    for (const p of this.layout.props) this.actors.push({ id: this.nextId++, kind: p.kind, x: p.x, y: p.y, z: p.z, layer: layerAt(p.z), age: 0, deadline: Infinity });
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
    this.actors.push({ id: this.nextId++, kind: 'enemy', x: s.x, y: s.y, z: s.z, slot, layer: s.layer, age: 0, deadline, hp, maxHp: hp });
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
      t.age += dt;
      // Mid-pour nobody gets a swing in: they are too busy being disgusted.
      if (pouring && t.kind === 'enemy') t.age = Math.min(t.age, Math.max(t.age - dt, t.deadline - 1.0));
      if (t.kind === 'enemy' && t.age >= t.deadline) { this.actors = this.actors.filter(v => v.id !== t.id); this.hp--; this.combo = 0; this.defeated++; this.events.push({ type: 'attack', id: t.id, combo: 0 }); this.message = 'Прилетело! Следи за замахом.'; }
    }
    if (this.hp <= 0) { this.finish(false); return; }
    if (this.defeated >= this.goal) { this.finish(true); return; }
    if (this.spawnClock >= 1.55) { this.spawnClock = 0; this.spawn(); }
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
    if (t.kind === 'hat' && !(action === 'grab' && !throwing)) { this.combo = 0; this.message = 'Шляпу не бьют. Шляпу берут.'; return 'miss'; }
    if (t.kind !== 'enemy') {
      this.actors = this.actors.filter(v => v.id !== t.id);
      if (action === 'grab' && !throwing) {
        this.held = t.kind; this.stamina = Math.max(0, this.stamina - Math.max(0, PROPS[t.kind].grab - REACH_COST)); // heavy lifting
        this.message = t.kind === 'hat' ? 'Котелок! Ему явно где-то здесь место…' : PROPS[t.kind].mass >= 4 ? `Ух, ${PROPS[t.kind].name}! Тяжело, но больно.` : 'В руке! Теперь бросай в задиру.'; return 'grab';
      }
      this.score += 25; this.events.push({ type: 'smash', id: t.id, combo: this.combo }); this.message = 'ДЗЫНЬ! Минус реквизит, плюс 25.'; return 'smash';
    }
    if (action === 'punch' || throwing) { this.hurt(t, throwing && thrown ? PROPS[thrown].damage : PUNCH_DAMAGE, throwing); return throwing ? 'throw' : 'hit'; }
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
          if (t?.kind === 'enemy') { if (spec.damage) this.hurt(t, spec.damage, true); else { this.combo = 0; this.message = 'Шляпу — не в задиру!'; } }
          else if (t?.kind === 'dog') this.dogHit(t);
          else if (!(typeof impact.id === 'string' && this.gag(impact.id, impact.point))) { this.combo = 0; this.message = impact.kind === 'cover' ? 'Бросок в укрытие. Жди, пока высунется!' : 'Только стену задел.'; }
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
  hurt(t: Actor, amount: number, throwing = false) {
    t.hp = Math.max(0, (t.hp ?? 1) - amount); t.hurtAt = this.elapsed;
    this.events.push({ type: 'hurt', id: t.id, combo: this.combo, amount });
    if (t.hp > 0) {
      this.score += 20; t.deadline = Math.max(t.deadline, t.age + WINDUP + 1.2); // staggered: the swing restarts
      this.message = throwing ? `Прямое попадание! −${amount}` : ['БАМ! Ещё разок!', 'Шатается!', 'Добавь!'][Math.floor(t.hp / 10) % 3];
      return false;
    }
    this.actors = this.actors.filter(v => v.id !== t.id); this.combo++; this.score += (throwing ? 180 : 100) + Math.min(this.combo - 1, 9) * 25; this.defeated++;
    this.events.push({ type: 'ko', id: t.id, combo: this.combo });
    this.message = throwing ? 'Точный бросок. Нокаут!' : ['Нокаут! Так держать.', 'Вот это размах!', 'Живой нокаут!'][this.combo % 3];
    if (this.defeated >= this.goal) this.finish(true);
    return true;
  }
  /** Convenience: spend + resolve against an actor id (undefined = whiff). */
  act(action: Action, id?: number, costPaid = false): Outcome {
    if (this.mode !== 'play') return 'blocked';
    if (!costPaid && !this.spend(action)) return 'tired';
    const t = this.actors.find(v => v.id === id);
    return this.resolve(action, t ? { kind: t.kind === 'enemy' ? 'enemy' : t.kind === 'dog' ? 'dog' : 'prop', id } : { kind: 'whiff' });
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
