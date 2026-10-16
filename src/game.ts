export type Mode = 'menu' | 'select' | 'play' | 'pause' | 'result';
export type Kind = 'enemy' | 'dog' | 'bottle' | 'barrel';
export interface Target { id: number; kind: Kind; x: number; y: number; age: number; deadline: number; }
export interface Progress { version: 1; unlocked: number; best: number; }
export const freshProgress = (): Progress => ({ version: 1, unlocked: 1, best: 0 });
export function readProgress(raw: string | null): Progress {
  try { const p = JSON.parse(raw ?? 'null'); if (p?.version === 1 && (p.unlocked === 1 || p.unlocked === 2) && Number.isFinite(p.best) && p.best >= 0) return { version: 1, unlocked: p.unlocked, best: Math.floor(p.best) }; } catch { /* Invalid storage is treated as a new game. */ }
  return freshProgress();
}
export class Game {
  mode: Mode = 'menu'; level = 1; hp = 5; stamina = 100; score = 0; combo = 0; elapsed = 0; held: 'bottle' | 'barrel' | null = null;
  targets: Target[] = []; progress: Progress; won = false; defeated = 0; spawned = 0; spawnClock = 0; nextId = 1;
  message = 'Двор ждёт своих героев';
  constructor(progress = freshProgress(), private save: (p: Progress) => void = () => {}) { this.progress = progress; }
  get goal() { return this.level === 1 ? 9 : 14; }
  start(level: number) {
    if (level > this.progress.unlocked) return false;
    this.level = level; this.hp = 5; this.stamina = 100; this.score = 0; this.combo = 0; this.elapsed = 0; this.held = null; this.targets = []; this.won = false; this.defeated = 0; this.spawned = 0; this.spawnClock = 0; this.nextId = 1; this.mode = 'play'; this.message = 'Покажи, кто тут длиннорукий!';
    this.spawn(); return true;
  }
  pause() { if (this.mode === 'play') this.mode = 'pause'; else if (this.mode === 'pause') this.mode = 'play'; }
  suspend() { if (this.mode === 'play') this.mode = 'pause'; }
  spawn() {
    if (this.spawned >= this.goal) return;
    const lanes = this.level === 1 ? [-2.7, 0, 2.7] : [2.6, -2.6, 0]; const lane = this.spawned % 3;
    if (this.targets.some(t => t.kind === 'enemy' && t.x === lanes[lane])) return;
    this.targets.push({ id: this.nextId++, kind: 'enemy', x: lanes[lane], y: this.level === 1 ? 1.8 + (this.spawned % 2) * .25 : [1.7, 2.6, 2.1][lane], age: 0, deadline: this.level === 1 ? 6.2 : 4.6 });
    this.spawned++;
    if (!this.targets.some(t => t.kind === 'dog')) this.targets.push({ id: this.nextId++, kind: 'dog', x: 3.3, y: .7, age: 0, deadline: Infinity });
    if (!this.targets.some(t => t.kind === 'bottle' || t.kind === 'barrel')) this.targets.push({ id: this.nextId++, kind: this.spawned % 2 ? 'bottle' : 'barrel', x: -3.3, y: .65, age: 0, deadline: Infinity });
  }
  tick(dt: number) {
    if (this.mode !== 'play') return;
    this.elapsed += dt; this.stamina = Math.min(100, this.stamina + dt * 21); this.spawnClock += dt;
    for (const t of [...this.targets]) { t.age += dt; if (t.kind === 'enemy' && t.age >= t.deadline) { this.targets = this.targets.filter(v => v.id !== t.id); this.hp--; this.combo = 0; this.defeated++; this.message = 'Прилетело! Следи за замахом.'; } }
    if (this.hp <= 0) { this.finish(false); return; }
    if (this.defeated >= this.goal) { this.finish(true); return; }
    if (this.spawnClock >= 1.55) { this.spawnClock = 0; this.spawn(); }
  }
  act(action: 'punch' | 'grab', id?: number): 'hit' | 'grab' | 'throw' | 'protected' | 'miss' | 'tired' | 'blocked' {
    if (this.mode !== 'play') return 'blocked';
    const throwing = action === 'grab' && this.held !== null;
    const cost = action === 'punch' ? 24 : throwing ? 18 : 12;
    if (this.stamina < cost) { this.message = 'Выдохни. Руки тоже устают.'; return 'tired'; }
    this.stamina -= cost;
    const t = this.targets.find(v => v.id === id);
    if (throwing) this.held = null;
    if (!t) { this.combo = 0; this.message = 'Мимо! Наведи на картонку.'; return 'miss'; }
    if (t.kind === 'dog') { this.score = Math.max(0, this.score - 150); this.hp = Math.max(0, this.hp - 1); this.combo = 0; this.message = 'Пёс — святой! −150 и сердце.'; if (!this.hp) this.finish(false); return 'protected'; }
    if (t.kind !== 'enemy' && action === 'grab' && !throwing) { this.held = t.kind; this.targets = this.targets.filter(v => v.id !== id); this.message = 'В руке! Теперь бросай в задиру.'; return 'grab'; }
    if (t.kind === 'enemy' && (action === 'punch' || throwing)) {
      this.targets = this.targets.filter(v => v.id !== id); this.combo++; this.score += (throwing ? 180 : 100) + Math.min(this.combo - 1, 9) * 25; this.defeated++; this.message = throwing ? 'Точный бросок. Красиво!' : ['БАМ! Так держать.', 'Вот это размах!', 'Картонный нокаут!'][this.combo % 3];
      if (this.defeated >= this.goal) this.finish(true); return throwing ? 'throw' : 'hit';
    }
    this.combo = 0; this.message = t.kind === 'enemy' ? 'Задиру — кулаком. Предмет — хватай!' : 'Предметы лучше хватать.'; return 'miss';
  }
  finish(won: boolean) {
    this.won = won; this.mode = 'result'; this.held = null;
    if (won) { this.progress.unlocked = 2; this.score += this.hp * 100; }
    this.progress.best = Math.max(this.progress.best, this.score); this.save({ ...this.progress });
  }
}
