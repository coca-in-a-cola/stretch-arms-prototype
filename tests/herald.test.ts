import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { Briefing, HERALD, HERALD_LINES, flyersFor } from '../src/herald';

const briefed = (level = 1, opts: { touch?: boolean; reduced?: boolean } = {}) => {
  const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.briefings = true; g.touch = !!opts.touch; g.reduced = !!opts.reduced; g.start(level); return g;
};
/** Past the pop-in, a flyer is up. */
const ready = (g: Game) => { g.tick(HERALD.enter + .01); expect(g.briefing!.phase).toBe('show'); return g; };
const allText = (level: number, touch: boolean) => flyersFor(level, touch).map(f => [f.title, ...f.lines].join(' ')).join(' ');

describe('the herald briefing', () => {
  test('appears at level start with level-specific flyers (bar: punch, grab, stamina, friends, hat riddle; street: pan, health bars, thugs)', () => {
    const bar = briefed(1);
    expect(bar.briefing).not.toBeNull(); expect(bar.briefing!.level).toBe(1);
    const one = allText(1, false);
    for (const w of ['ЛКМ', 'ПРОБЕЛ', 'ПКМ', 'E', 'сил', 'Пёс', 'котелок']) expect(one).toContain(w);
    const two = allText(2, false);
    for (const w of ['Стрелки', 'у края', 'ПОЛОСКИ ЗДОРОВЬЯ', 'ШПАНА']) expect(two).toContain(w);
    expect(two).not.toEqual(one);
    expect(briefed(2).briefing!.flyers.map(f => f.title)).toEqual(flyersFor(2, false).map(f => f.title));
  });
  test('touch players get touch wording (tap / swipe / the on-screen buttons), desktop players get mouse and keys', () => {
    const t1 = allText(1, true), t2 = allText(2, true);
    expect(t1).toContain('Тапни'); expect(t1).toContain('УДАР'); expect(t1).toContain('ХВАТАЙ'); expect(t1).not.toContain('ЛКМ');
    expect(t2).toContain('Свайп'); expect(t2).not.toContain('Стрелки');
    expect(briefed(1, { touch: true }).briefing!.flyers[0].lines.join(' ')).toContain('Тапни');
  });
  test('punching a flyer tears it (free of stamina) and advances to the next one; the last one sends him off', () => {
    const g = ready(briefed(1)), n = g.briefing!.flyers.length;
    expect(g.spend('punch')).toBe(true); expect(g.stamina).toBe(100);
    expect(g.briefPunch('flyer')).toBe('tear'); expect(g.briefing!.phase).toBe('torn');
    expect(g.events.some(e => e.type === 'tear')).toBe(true);
    g.tick(HERALD.torn + .01); expect(g.briefing!.index).toBe(1); expect(g.briefing!.phase).toBe('show');
    for (let i = 1; i < n; i++) { expect(g.briefPunch('flyer')).toBe('tear'); g.tick(HERALD.torn + .01); }
    expect(g.briefing!.phase).toBe('leave'); expect(g.actors.some(t => t.kind === 'enemy')).toBe(false);
    g.tick(HERALD.leave + .01); expect(g.briefing).toBeNull(); expect(g.actors.some(t => t.kind === 'enemy')).toBe(true);
  });
  test('a second punch while the flyer is still tearing does not skip two flyers', () => {
    const g = ready(briefed(1));
    g.briefPunch('flyer'); expect(g.briefPunch('flyer')).toBe('miss');
    g.tick(HERALD.torn + .01); expect(g.briefing!.index).toBe(1);
  });
  test('punching the herald is penalized like a friend (heart, points, combo) and does not advance; he says something rude and goes on', () => {
    const g = ready(briefed(1)); g.score = 500; g.combo = 2;
    expect(g.briefPunch('herald')).toBe('protected');
    expect([g.hp, g.score, g.combo]).toEqual([4, 500 - HERALD.penalty, 0]);
    expect(g.briefing!.index).toBe(0); expect(g.briefing!.phase).toBe('mad');
    const e = g.events.find(v => v.type === 'offend')!; expect(e.who).toBe('herald'); expect(HERALD_LINES).toContain(e.text as never);
    expect(g.briefPunch('herald')).toBe('miss'); expect(g.hp).toBe(4); // still offended: no double penalty
    expect(g.briefPunch('flyer')).toBe('miss'); // and the flyer waits
    g.tick(HERALD.mad + .01); expect(g.briefing!.phase).toBe('show'); expect(g.briefing!.index).toBe(0);
    g.briefPunch('herald'); expect(g.events.filter(v => v.type === 'offend').map(v => v.text)).toEqual([HERALD_LINES[0], HERALD_LINES[1]]);
  });
  test('a fist past the flyer and the herald does nothing', () => {
    const g = ready(briefed(1)); expect(g.briefPunch('none')).toBe('miss'); expect(g.briefing!.index).toBe(0); expect(g.hp).toBe(5);
  });
  test('skip (ПОНЯЛ / Esc) ends the briefing: hat tip, then the fight; with reduced motion at once', () => {
    const g = ready(briefed(1)); g.skipBriefing(); expect(g.briefing!.phase).toBe('leave');
    g.tick(HERALD.leave + .01); expect(g.briefing).toBeNull(); expect(g.actors.some(t => t.kind === 'enemy')).toBe(true);
    const r = briefed(2, { reduced: true }); expect(r.briefing!.phase).toBe('show'); // no pop-in animation
    r.skipBriefing(); expect(r.briefing).toBeNull(); expect(r.actors.some(t => t.kind === 'enemy')).toBe(true);
  });
  test('reduced motion: a punched flyer is swapped at once (no tear animation)', () => {
    const b = new Briefing(1, flyersFor(1, false), true); expect(b.tear()).toBe(true); expect(b.index).toBe(1); expect(b.phase).toBe('show');
  });
  test('not repeated on an immediate retry of the same level (once per level per session); the next level gets its own', () => {
    const g = briefed(1); g.skipBriefing(); g.tick(5);
    g.finish(false); g.start(1); expect(g.briefing).toBeNull(); expect(g.actors.some(t => t.kind === 'enemy')).toBe(true);
    g.start(2); expect(g.briefing?.level).toBe(2);
    g.start(2); expect(g.briefing).toBeNull();
  });
  test('no enemy attacks during the briefing: nobody spawns, ages or swings, and the hearts stay full', () => {
    const g = briefed(2), b = g.briefing!; b.tick(HERALD.enter + .01);
    for (let i = 0; i < 600; i++) { g.tick(1 / 30); if (b.phase === 'show' && b.t > HERALD.read - .1) b.t = 0; } // 20 s of reading
    expect(g.briefing).not.toBeNull(); expect(g.hp).toBe(5);
    expect(g.actors.some(t => t.kind === 'enemy' || t.kind === 'thug')).toBe(false);
    expect(g.hazards.length).toBe(0); expect(g.events.some(e => e.type === 'attack' || e.type === 'nuisance')).toBe(false);
    expect(g.act('punch', g.actors.find(t => t.kind === 'friend')!.id)).toBe('blocked'); // the world cannot be hit meanwhile
  });
  test('a flyer left alone moves on by itself after a long read', () => {
    const g = ready(briefed(1)); g.tick(HERALD.read + .01); expect(g.briefing!.index).toBe(1);
  });
  test('rule tests and the default game start straight in the fight (briefings are opt-in)', () => {
    const g = new Game(); g.start(1); expect(g.briefing).toBeNull(); expect(g.actors.some(t => t.kind === 'enemy')).toBe(true);
  });
});
