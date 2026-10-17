import type { HitKind } from './aim';
import { LEVELS, type Layer } from './layout';

export type Mode = 'menu' | 'select' | 'play' | 'pause' | 'result';
export type Kind = 'enemy' | 'dog' | 'bottle' | 'barrel';
export interface Actor { id: number; kind: Kind; x: number; y: number; z?: number; slot?: number; layer?: Layer; age: number; deadline: number; }
/** Things that just happened, drained by the renderer to play attack / knockout / sad-dog animations. */
export interface GameEvent { type: 'attack' | 'ko' | 'dog' | 'smash'; id: number; combo: number; }
export interface Progress { version: 1; unlocked: number; best: number; }
export type Action = 'punch' | 'grab';
export type Outcome = 'hit' | 'grab' | 'throw' | 'protected' | 'smash' | 'cover' | 'miss' | 'tired' | 'blocked';
/** What the free-aim ray struck first. `id` is an actor id for enemy/dog/prop. */
export interface StrikeHit { kind: HitKind | 'whiff'; id?: number | string; }
export const freshProgress = (): Progress => ({ version: 1, unlocked: 1, best: 0 });
export function readProgress(raw: string | null): Progress {
  try { const p = JSON.parse(raw ?? 'null'); if (p?.version === 1 && (p.unlocked === 1 || p.unlocked === 2) && Number.isFinite(p.best) && p.best >= 0) return { version: 1, unlocked: p.unlocked, best: Math.floor(p.best) }; } catch { /* Invalid storage is treated as a new game. */ }
  return freshProgress();
}
export const costOf = (action: Action, holding: boolean) => action === 'punch' ? 24 : holding ? 18 : 12;

export class Game {
  mode: Mode = 'menu'; level = 1; hp = 5; stamina = 100; score = 0; combo = 0; elapsed = 0; held: 'bottle' | 'barrel' | null = null;
  actors: Actor[] = []; events: GameEvent[] = []; progress: Progress; won = false; defeated = 0; spawned = 0; spawnClock = 0; nextId = 1;
  message = 'Двор ждёт своих героев';
  constructor(progress = freshProgress(), private save: (p: Progress) => void = () => {}) { this.progress = progress; }
  get layout() { return LEVELS[this.level]; }
  get goal() { return this.layout.goal; }
  start(level: number) {
    if (level > this.progress.unlocked) return false;
    this.level = level; this.hp = 5; this.stamina = 100; this.score = 0; this.combo = 0; this.elapsed = 0; this.held = null; this.actors = []; this.events = []; this.won = false; this.defeated = 0; this.spawned = 0; this.spawnClock = 0; this.nextId = 1; this.mode = 'play'; this.message = 'Покажи, кто тут длиннорукий!';
    this.spawn(); return true;
  }
  pause() { if (this.mode === 'play') this.mode = 'pause'; else if (this.mode === 'pause') this.mode = 'play'; }
  suspend() { if (this.mode === 'play') this.mode = 'pause'; }
  spawn() {
    if (this.spawned >= this.goal) return;
    const { order, slots, dog, prop, deadline } = this.layout;
    const slot = order[this.spawned % order.length];
    if (this.actors.some(t => t.kind === 'enemy' && t.slot === slot)) return;
    const s = slots[slot];
    this.actors.push({ id: this.nextId++, kind: 'enemy', x: s.x, y: s.y, z: s.z, slot, layer: s.layer, age: 0, deadline });
    this.spawned++;
    if (!this.actors.some(t => t.kind === 'dog')) this.actors.push({ id: this.nextId++, kind: 'dog', ...dog, layer: 'midground', age: 0, deadline: Infinity });
    if (!this.actors.some(t => t.kind === 'bottle' || t.kind === 'barrel') && !this.held) this.actors.push({ id: this.nextId++, kind: this.spawned % 2 ? 'bottle' : 'barrel', ...prop, layer: 'foreground', age: 0, deadline: Infinity });
  }
  tick(dt: number) {
    if (this.mode !== 'play') return;
    this.elapsed += dt; this.stamina = Math.min(100, this.stamina + dt * 21); this.spawnClock += dt;
    for (const t of [...this.actors]) { t.age += dt; if (t.kind === 'enemy' && t.age >= t.deadline) { this.actors = this.actors.filter(v => v.id !== t.id); this.hp--; this.combo = 0; this.defeated++; this.events.push({ type: 'attack', id: t.id, combo: 0 }); this.message = 'Прилетело! Следи за замахом.'; } }
    if (this.hp <= 0) { this.finish(false); return; }
    if (this.defeated >= this.goal) { this.finish(true); return; }
    if (this.spawnClock >= 1.55) { this.spawnClock = 0; this.spawn(); }
  }
  /** Pays for a swing up front. Every launched swing costs stamina, whatever it ends up hitting. */
  spend(action: Action): boolean {
    if (this.mode !== 'play') return false;
    const cost = costOf(action, action === 'grab' && this.held !== null);
    if (this.stamina < cost) { this.message = 'Выдохни. Руки тоже устают.'; return false; }
    this.stamina -= cost; return true;
  }
  /** Applies the result of an already-paid swing at whatever the free-aim ray struck first. */
  resolve(action: Action, hit: StrikeHit): Outcome {
    if (this.mode !== 'play') return 'blocked';
    const throwing = action === 'grab' && this.held !== null;
    if (throwing) this.held = null;
    const t = typeof hit.id === 'number' ? this.actors.find(v => v.id === hit.id) : undefined;
    if (hit.kind === 'cover') { this.combo = 0; this.message = throwing ? 'Бросок в укрытие. Жди, пока высунется!' : 'ТУК! Укрытие. Бей, когда высунется.'; return 'cover'; }
    if (!t) { this.combo = 0; this.message = hit.kind === 'scenery' ? 'Только стену поцарапал.' : throwing ? 'Бросок в никуда.' : 'Мимо! Чистый промах.'; return 'miss'; }
    if (t.kind === 'dog') { this.score = Math.max(0, this.score - 150); this.hp = Math.max(0, this.hp - 1); this.combo = 0; this.events.push({ type: 'dog', id: t.id, combo: 0 }); this.message = 'Пёс — святой! −150 и сердце.'; if (!this.hp) this.finish(false); return 'protected'; }
    if (t.kind !== 'enemy') {
      this.actors = this.actors.filter(v => v.id !== t.id);
      if (action === 'grab' && !throwing) { this.held = t.kind; this.message = 'В руке! Теперь бросай в задиру.'; return 'grab'; }
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
  finish(won: boolean) {
    this.won = won; this.mode = 'result'; this.held = null;
    if (won) { this.progress.unlocked = 2; this.score += this.hp * 100; }
    this.progress.best = Math.max(this.progress.best, this.score); this.save({ ...this.progress });
  }
}
