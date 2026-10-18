// The herald: at the start of each level a rubber-hose crow in a dented bowler leans into the camera and holds up
// flyers that explain this level's controls. Punch a flyer to tear it away (next one); punch him and he takes offence.

export type FlyerArt = 'tall' | 'tag' | 'taped' | 'wide' | 'pinned';
export interface Flyer { art: FlyerArt; title: string; lines: readonly string[]; }
export type BriefPhase = 'enter' | 'show' | 'torn' | 'mad' | 'leave' | 'done';
/** Seconds: pop-in, a torn flyer flying off, offended pause, the hat-tip exit; `read` = a flyer left alone moves on. */
export const HERALD = { enter: .7, torn: .55, mad: 1.7, leave: 1.1, read: 14, penalty: 120 } as const;
/** What he says on a card when punched (rude, but family-friendly), in turn. */
export const HERALD_LINES = ['ЭЙ, ПОЛЕГЧЕ! Я ТУТ ГЛАШАТАЙ!', 'ХАМЬЁ! КОТЕЛОК ПОМЯЛ!', 'ПО ЛИСТОВКЕ БЕЙ, ДУБИНА!', 'НУ И МАНЕРЫ! ЧИТАЙ ДАЛЬШЕ!'] as const;
export const HERALD_BYE = 'ЧЕСТЬ ИМЕЮ!';

/** Flyers for a level; desktop or touch wording. Level 1 = the bar, level 2 = the wide street. */
export function flyersFor(level: number, touch: boolean): Flyer[] {
  if (level === 1) return [
    { art: 'tall', title: 'БЕЙ!', lines: touch ? ['Тапни, куда бить,', 'и жми УДАР.', 'Кулак летит ровно туда.'] : ['ЛКМ или ПРОБЕЛ —', 'кулак летит ровно', 'в точку прицела.'] },
    { art: 'tag', title: 'ХВАТАЙ И БРОСАЙ', lines: touch ? ['Тапни по предмету', 'и жми ХВАТАЙ.', 'Ещё раз — бросок!'] : ['ПКМ или E — схватить', 'бутылку, табурет…', 'Ещё раз — бросок!'] },
    { art: 'taped', title: 'БЕРЕГИ СИЛЫ', lines: ['Каждый замах', 'стоит сил — даже промах.', 'Выдохни — и снова в бой.'] },
    { art: 'pinned', title: 'НЕ ТРОЖЬ СВОИХ!', lines: ['Пёс с нимбом, котёнок,', 'крот, бармен, пьяница —', 'с сердечком не бьют!'] },
    { art: 'wide', title: 'ЗАГАДКА', lines: ['На голове котелок — для форса.', 'Вверх дном на стойке —', 'для чего-то покрепче…'] },
  ];
  return [
    { art: 'wide', title: 'УЛИЦА ШИРОКАЯ', lines: touch ? ['Свайп по экрану —', 'камера едет', 'вдоль улицы.'] : ['Стрелки, A / D', 'или мышь у края —', 'камера едет.'] },
    { art: 'tag', title: 'ПОЛОСКИ ЗДОРОВЬЯ', lines: ['У задиры своя полоска.', 'Кулак — треть,', 'тяжёлый бросок — всё.'] },
    { art: 'pinned', title: 'ШПАНА У НОСА', lines: touch ? ['Крыса, голубь, мальчишка', 'лезут к самой камере —', 'тапни и бей сразу!'] : ['Крыса, голубь, мальчишка', 'лезут к самой камере —', 'бей сразу, с одного!'] },
    { art: 'taped', title: 'БАБУШКУ НЕ БЬЮТ', lines: ['Бабушка, голубь-почтальон,', 'крот и пёс —', 'свои. Руки прочь!'] },
  ];
}

/** One briefing: which flyer is up, what the herald is doing. Pure state; the renderer reads it. */
export class Briefing {
  index = 0; phase: BriefPhase = 'enter'; t = 0; offences = 0; /** Text on the rude card while offended. */ line = '';
  constructor(readonly level: number, readonly flyers: Flyer[], readonly reduced = false) { if (reduced) this.phase = 'show'; }
  get flyer(): Flyer | null { return this.flyers[this.index] ?? null; }
  get done() { return this.phase === 'done'; }
  /** Punches only count while a flyer is up (not mid-entrance, mid-tear or while leaving). */
  get live() { return this.phase === 'show' || this.phase === 'mad'; }
  tick(dt: number) {
    if (this.done) return;
    this.t += dt;
    if (this.phase === 'enter' && this.t >= HERALD.enter) this.go('show');
    else if (this.phase === 'show' && this.t >= HERALD.read) this.next();
    else if (this.phase === 'torn' && this.t >= HERALD.torn) this.next();
    else if (this.phase === 'mad' && this.t >= HERALD.mad) this.go('show');
    else if (this.phase === 'leave' && this.t >= HERALD.leave) this.go('done');
  }
  /** A punch landed on the flyer: it tears and flies off; the next one comes up. */
  tear() {
    if (this.phase !== 'show') return false;
    this.reduced ? this.next() : this.go('torn'); return true;
  }
  /** A punch landed on the herald himself. Returns true when it counts as an offence (not while he is still offended). */
  offend() {
    if (this.phase !== 'show') return false;
    this.line = HERALD_LINES[this.offences++ % HERALD_LINES.length]; this.go('mad'); return true;
  }
  /** 'ПОНЯЛ' / Esc: straight to the hat tip (or gone at once with reduced motion). */
  skip() { if (this.phase !== 'leave' && !this.done) this.go(this.reduced ? 'done' : 'leave'); }
  private next() { this.index++; this.go(this.index >= this.flyers.length ? (this.reduced ? 'done' : 'leave') : 'show'); }
  private go(p: BriefPhase) { this.phase = p; this.t = 0; }
}
