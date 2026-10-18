import type { HitKind, Vec3 } from './aim';
import { LEVELS, LAST_LEVEL, onLanding, type Layer, type PropKind, type Skin } from './layout';

export type Mode = 'menu' | 'select' | 'play' | 'pause' | 'result';
export type Kind = 'enemy' | 'dog' | PropKind;
export interface Actor { id: number; kind: Kind; x: number; y: number; z?: number; slot?: number; layer?: Layer; skin?: Skin; age: number; deadline: number; /** Ult soaking, 0..1 (1 = knocked out). */ wet?: number; }
/** Things that just happened, drained by the renderer to play attack / knockout / sad-dog / ult animations. */
export interface GameEvent { type: 'attack' | 'ko' | 'dog' | 'smash' | 'ult' | 'ultEnd' | 'hatBack'; id: number; combo: number; }
export interface Progress { version: 2; unlocked: number; best: number; }
export type Action = 'punch' | 'grab';
export type Outcome = 'hit' | 'grab' | 'throw' | 'protected' | 'smash' | 'cover' | 'miss' | 'tired' | 'blocked' | 'ult';
/** What the free-aim ray struck first. `id` is an actor id for enemy/dog/prop; `point` is where it struck. */
export interface StrikeHit { kind: HitKind | 'whiff'; id?: number | string; point?: Vec3; }
/** Secret ultimate timing: a frozen beat with the title card, then the pour. One per level attempt. */
export const ULT = { freeze: .5, intro: 1.8, length: 6, soakRate: 1.9, dogCooldown: 1.5 } as const;
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
export const costOf = (action: Action, holding: boolean) => action === 'punch' ? 24 : holding ? 18 : 12;

export class Game {
  mode: Mode = 'menu'; level = 1; hp = 5; stamina = 100; score = 0; combo = 0; elapsed = 0; held: PropKind | null = null;
  ult: { phase: UltPhase; t: number; meter: number } = { phase: 'none', t: 0, meter: 0 }; dogSoak = 0;
  actors: Actor[] = []; events: GameEvent[] = []; progress: Progress; won = false; defeated = 0; spawned = 0; spawnClock = 0; nextId = 1;
  message = 'Двор ждёт своих героев';
  constructor(progress = freshProgress(), private save: (p: Progress) => void = () => {}) { this.progress = progress; }
  get layout() { return LEVELS[this.level]; }
  get goal() { return this.layout.goal; }
  start(level: number) {
    if (level > this.progress.unlocked) return false;
    this.level = level; this.hp = 5; this.stamina = 100; this.score = 0; this.combo = 0; this.elapsed = 0; this.held = null; this.actors = []; this.events = []; this.won = false; this.defeated = 0; this.spawned = 0; this.spawnClock = 0; this.nextId = 1; this.mode = 'play'; this.message = this.layout.look === 'bar' ? 'Бар «Длинные руки». Ведите себя прилично.' : 'Улица большая — крути камеру к краям!';
    this.ult = { phase: 'none', t: 0, meter: 0 }; this.dogSoak = 0;
    this.spawn(); this.placeHat(); return true;
  }
  get ultActive() { return this.ult.phase === 'intro' || this.ult.phase === 'pour'; }
  /** The bowler sits on its stool until it is grabbed or the ult has been spent. */
  placeHat() {
    const h = this.layout.hat; if (!h || this.ult.phase !== 'none' || this.held === 'hat' || this.actors.some(t => t.kind === 'hat')) return;
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
  pause() { if (this.mode === 'play') this.mode = 'pause'; else if (this.mode === 'pause') this.mode = 'play'; }
  suspend() { if (this.mode === 'play') this.mode = 'pause'; }
  spawn() {
    if (this.spawned >= this.goal) return;
    const { order, slots, dogs, prop, deadline, maxAlive } = this.layout;
    const slot = order[this.spawned % order.length];
    if (this.actors.some(t => t.kind === 'enemy' && t.slot === slot)) return;
    if (maxAlive && this.actors.filter(t => t.kind === 'enemy').length >= maxAlive) return;
    const s = slots[slot];
    this.actors.push({ id: this.nextId++, kind: 'enemy', x: s.x, y: s.y, z: s.z, slot, layer: s.layer, age: 0, deadline });
    this.spawned++;
    if (!this.actors.some(t => t.kind === 'dog')) for (const dog of dogs) this.actors.push({ id: this.nextId++, kind: 'dog', ...dog, layer: 'midground', age: 0, deadline: Infinity });
    const [a, b] = this.layout.props ?? ['bottle', 'barrel'];
    if (!this.actors.some(t => t.kind === a || t.kind === b) && !this.held) this.actors.push({ id: this.nextId++, kind: this.spawned % 2 ? a : b, ...prop, layer: 'foreground', age: 0, deadline: Infinity });
    if (s.skin) this.actors.find(t => t.kind === 'enemy' && t.slot === slot)!.skin = s.skin;
  }
  tick(dt: number) {
    if (this.mode !== 'play') return;
    if (this.ult.phase === 'intro') { this.ult.t += dt; if (this.ult.t >= ULT.intro) { this.ult = { phase: 'pour', t: 0, meter: 1 }; this.message = 'Веди струю прицелом! Пса не задень.'; } return; } // everyone freezes
    const pouring = this.ult.phase === 'pour';
    if (pouring) {
      this.ult.t += dt; this.ult.meter = Math.max(0, 1 - this.ult.t / ULT.length); this.dogSoak = Math.max(0, this.dogSoak - dt);
      if (this.ult.t >= ULT.length) { this.ult = { phase: 'done', t: 0, meter: 0 }; this.events.push({ type: 'ultEnd', id: 0, combo: this.combo }); this.message = 'Фух. Вот это облегчение.'; }
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
    const cost = costOf(action, action === 'grab' && this.held !== null);
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
        this.ult = { phase: 'intro', t: 0, meter: 1 }; this.combo = 0; this.events.push({ type: 'ult', id: 0, combo: 0 });
        this.message = 'ДИНЬ! Шляпа на стойке…'; return 'ult';
      }
      this.placeHat(); this.events.push({ type: 'hatBack', id: 0, combo: 0 });
    }
    const t = typeof hit.id === 'number' ? this.actors.find(v => v.id === hit.id) : undefined;
    if (hit.kind === 'cover') { this.combo = 0; this.message = throwing ? 'Бросок в укрытие. Жди, пока высунется!' : 'ТУК! Укрытие. Бей, когда высунется.'; return 'cover'; }
    if (!t) { this.combo = 0; this.message = hit.kind === 'scenery' ? 'Только стену поцарапал.' : throwing ? 'Бросок в никуда.' : 'Мимо! Чистый промах.'; return 'miss'; }
    if (t.kind === 'dog') { this.score = Math.max(0, this.score - 150); this.hp = Math.max(0, this.hp - 1); this.combo = 0; this.events.push({ type: 'dog', id: t.id, combo: 0 }); this.message = 'Пёс — святой! −150 и сердце.'; if (!this.hp) this.finish(false); return 'protected'; }
    if (t.kind === 'hat' && !(action === 'grab' && !throwing)) { this.combo = 0; this.message = 'Шляпу не бьют. Шляпу берут.'; return 'miss'; }
    if (t.kind !== 'enemy') {
      this.actors = this.actors.filter(v => v.id !== t.id);
      if (action === 'grab' && !throwing) { this.held = t.kind; this.message = t.kind === 'hat' ? 'Котелок! Ему явно где-то здесь место…' : 'В руке! Теперь бросай в задиру.'; return 'grab'; }
      this.score += 25; this.events.push({ type: 'smash', id: t.id, combo: this.combo }); this.message = 'ДЗЫНЬ! Минус реквизит, плюс 25.'; return 'smash';
    }
    if (action === 'punch' || throwing) {
      this.actors = this.actors.filter(v => v.id !== t.id); this.combo++; this.score += (throwing ? 180 : 100) + Math.min(this.combo - 1, 9) * 25; this.defeated++; this.events.push({ type: 'ko', id: t.id, combo: this.combo }); this.message = throwing ? 'Точный бросок. Красиво!' : ['БАМ! Так держать.', 'Вот это размах!', 'Живой нокаут!'][this.combo % 3];
      if (this.defeated >= this.goal) this.finish(true); return throwing ? 'throw' : 'hit';
    }
    this.combo = 0; this.message = 'Задиру — кулаком. Предмет — хватай!'; return 'miss';
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
    if (this.ultActive) this.ult = { phase: 'done', t: 0, meter: 0 };
    this.progress.best = Math.max(this.progress.best, this.score); this.save({ ...this.progress });
  }
}
