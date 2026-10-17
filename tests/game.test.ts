import { describe, expect, test } from 'bun:test';
import { Game, readProgress, type Progress } from '../src/game';

describe('deterministic arcade rules', () => {
  test('street spawns across depth layers with elevation and shorter warning deadlines', () => {
    const g = new Game({version:1,unlocked:2,best:0}); g.start(2); g.spawn(); g.spawn();
    const enemies = g.actors.filter(t=>t.kind==='enemy');
    expect(enemies.map(t=>t.layer)).toEqual(['foreground','background','foreground']);
    expect(enemies[1].y).toBeGreaterThan(3); // upper-floor window
    expect(new Set(enemies.map(t=>t.z)).size).toBe(3);
    expect(enemies.every(t=>t.deadline===4.6)).toBe(true);
    g.start(1); expect(g.actors[0].layer).toBe('foreground'); expect(g.actors[0].slot).toBe(0);
    for (let i=0;i<2;i++) g.spawn();
    expect(g.actors.filter(t=>t.kind==='enemy').map(t=>t.layer)).toEqual(['foreground','midground','background']);
  });
  test('fresh run and locked second level', () => {
    const g = new Game(); expect(g.start(2)).toBe(false); expect(g.start(1)).toBe(true);
    expect(g.hp).toBe(5); expect(g.stamina).toBe(100); expect(g.actors.filter(t => t.kind === 'enemy')).toHaveLength(1);
  });
  test('stamina cost, regeneration, gating and cap', () => {
    const g = new Game(); g.start(1); g.act('punch'); expect(g.stamina).toBe(76);
    g.stamina = 23; const count = g.actors.length; expect(g.act('punch',g.actors[0].id)).toBe('tired'); expect(g.actors).toHaveLength(count);expect(g.stamina).toBe(23);
    g.tick(1);expect(g.stamina).toBe(44);g.stamina=99;g.tick(1);expect(g.stamina).toBe(100);
  });
  test('attack timeout removes enemy, damages HP and breaks combo', () => {
    const g = new Game();g.start(1);g.combo=4;g.tick(6.3);expect(g.hp).toBe(4);expect(g.combo).toBe(0);expect(g.defeated).toBe(1);
  });
  test('protected dog survives, score penalty and heart loss', () => {
    const g = new Game();g.start(1);g.score=300;const dog=g.actors.find(t=>t.kind==='dog')!;
    expect(g.act('punch',dog.id)).toBe('protected');expect(g.hp).toBe(4);expect(g.score).toBe(150);expect(g.actors).toContain(dog);
    g.stamina=100;g.act('punch',dog.id);g.stamina=100;g.act('punch',dog.id);expect(g.score).toBe(0);
  });
  test('grab prop then throw kills an enemy with premium score', () => {
    const g = new Game();g.start(1);const prop=g.actors.find(t=>t.kind==='bottle')!;const enemy=g.actors.find(t=>t.kind==='enemy')!;
    expect(g.act('grab',prop.id)).toBe('grab');expect(g.held).toBe('bottle');expect(g.stamina).toBe(88);
    expect(g.act('grab',enemy.id)).toBe('throw');expect(g.held).toBeNull();expect(g.score).toBe(180);expect(g.stamina).toBe(70);expect(g.defeated).toBe(1);
  });
  test('pause freezes time, HP, stamina and actions', () => {
    const g=new Game();g.start(1);g.stamina=50;g.pause();const snapshot=JSON.stringify(g);g.tick(100);expect(g.act('punch',g.actors[0].id)).toBe('blocked');expect(JSON.stringify(g)).toBe(snapshot);g.pause();g.tick(1);expect(g.stamina).toBe(71);
  });
  test('repeated background lifecycle signals never resume or advance paused gameplay', () => {
    const g=new Game();g.start(1);g.tick(.5);g.suspend();
    const before=JSON.stringify(g);g.suspend();g.tick(60);g.suspend();
    expect(JSON.stringify(g)).toBe(before);expect(g.mode).toBe('pause');
    g.pause();g.tick(.5);expect(g.elapsed).toBe(1);
    g.finish(false);g.suspend();expect(g.mode).toBe('result');
  });
  test('win unlocks second level and persists versioned best; retry resets all health', () => {
    let saved: Progress | undefined;const g=new Game(undefined,p=>{saved=p;});g.start(1);
    for(let i=0;i<9;i++){if(!g.actors.some(t=>t.kind==='enemy'))g.spawn();g.stamina=100;g.act('punch',g.actors.find(t=>t.kind==='enemy')!.id);}
    expect(g.mode).toBe('result');expect(g.won).toBe(true);expect(g.score).toBeGreaterThan(900);expect(saved?.unlocked).toBe(2);expect(saved?.version).toBe(1);
    expect(g.start(2)).toBe(true);g.hp=1;g.held='barrel';g.combo=8;g.start(2);expect(g.hp).toBe(5);expect(g.stamina).toBe(100);expect(g.held).toBeNull();expect(g.combo).toBe(0);expect(g.score).toBe(0);
  });
  test('five missed attack deadlines lose; result blocks actions',()=>{
    const g=new Game();g.start(1);for(let i=0;i<5;i++)g.tick(7);expect(g.mode).toBe('result');expect(g.won).toBe(false);expect(g.hp).toBe(0);expect(g.act('punch')).toBe('blocked');
  });
  test('malformed, wrong-version and invalid progress are safe',()=>{
    for(const raw of [null,'oops','null','{}','{"version":2,"unlocked":2,"best":99}','{"version":1,"unlocked":7,"best":1}','{"version":1,"unlocked":2,"best":-1}'])expect(readProgress(raw)).toEqual({version:1,unlocked:1,best:0});
    expect(readProgress('{"version":1,"unlocked":2,"best":1024}')).toEqual({version:1,unlocked:2,best:1024});
  });
});

import { ULT } from '../src/game';
import { LEVELS, cameraFor as rig, hittables as hits, onLanding } from '../src/layout';
import { resolveShot } from '../src/aim';
import { Stream, STREAM } from '../src/ult';

describe('level 3: the secret bar', () => {
  const counter = LEVELS[3].covers.find(c => c.id === 'counter')!;
  const onTop = { x: .3, y: counter.max.y, z: (counter.min.z + counter.max.z) / 2 };
  const ready = () => { const g = new Game({ version: 1, unlocked: 3, best: 0 }); g.start(3); return g; };
  const grabHat = (g: Game) => { const hat = g.actors.find(t => t.kind === 'hat')!; expect(g.act('grab', hat.id)).toBe('grab'); expect(g.held).toBe('hat'); };

  test('unlocks after level 2, is selectable once unlocked and survives storage', () => {
    const g = new Game({ version: 1, unlocked: 2, best: 0 }); expect(g.start(3)).toBe(false);
    g.start(2); g.finish(true); expect(g.progress.unlocked).toBe(3); expect(g.start(3)).toBe(true);
    expect(readProgress(JSON.stringify({ version: 1, unlocked: 3, best: 10 })).unlocked).toBe(3);
    expect(readProgress(JSON.stringify({ version: 1, unlocked: 4, best: 10 })).unlocked).toBe(1);
    const w = new Game({ version: 1, unlocked: 3, best: 0 }); w.start(1); w.finish(true); expect(w.progress.unlocked).toBe(3); // never re-locks
  });
  test('bar patrons peek from their cover; mug / whiskey are the throwables; the hat sits on its stool', () => {
    const g = ready(); for (let i = 0; i < 4; i++) g.spawn();
    expect(new Set(g.actors.filter(t => t.kind === 'enemy').map(t => t.skin))).toEqual(new Set(['walrus', 'weasel', 'bulldog']));
    expect(g.actors.some(t => t.kind === 'mug' || t.kind === 'whiskey')).toBe(true);
    expect(g.actors.filter(t => t.kind === 'hat')).toHaveLength(1);
    expect(g.actors.some(t => t.kind === 'dog')).toBe(true);
  });
  test('punching the hat does not break it', () => {
    const g = ready(); const hat = g.actors.find(t => t.kind === 'hat')!;
    expect(g.act('punch', hat.id)).toBe('miss'); expect(g.actors).toContain(hat);
  });
  test('hat thrown onto the counter top triggers the ult; thrown elsewhere it goes back to its stool', () => {
    for (const elsewhere of [{ kind: 'cover' as const, id: 'counter', point: { ...onTop, y: .3 } }, { kind: 'cover' as const, id: 'piano', point: { x: -2.7, y: 1.3, z: 3 } }, { kind: 'whiff' as const, point: { x: 0, y: 0, z: 0 } }]) {
      const g = ready(); grabHat(g); g.spend('grab');
      expect(g.resolve('grab', elsewhere)).not.toBe('ult'); expect(g.ult.phase).toBe('none');
      expect(g.held).toBe(null); expect(g.actors.filter(t => t.kind === 'hat')).toHaveLength(1);
    }
    const g = ready(); grabHat(g); g.spend('grab');
    expect(g.resolve('grab', { kind: 'cover', id: 'counter', point: onTop })).toBe('ult');
    expect(g.ult.phase).toBe('intro'); expect(g.events.some(e => e.type === 'ult')).toBe(true);
    expect(g.actors.some(t => t.kind === 'hat')).toBe(false); // the hat stays on the counter
    expect(onLanding(1, 'counter', onTop)).toBe(false);
  });
  test('a real ray from the camera onto the counter top resolves to the landing zone', () => {
    const cam = rig(1440, 960).position, g = ready();
    const shot = resolveShot(cam, { x: onTop.x - cam.x, y: onTop.y - .05 - cam.y, z: counter.max.z - cam.z }, hits(3, []));
    expect(shot.id).toBe('counter'); expect(onLanding(3, shot.id, shot.point)).toBe(true);
    expect(g).toBeTruthy();
  });
  test('ult: frozen intro, then a 6 s pour that drains the meter; no stamina spent, no attacks land', () => {
    const g = ready(); grabHat(g); g.spend('grab'); g.resolve('grab', { kind: 'cover', id: 'counter', point: onTop });
    const ages = g.actors.map(t => t.age); g.tick(ULT.freeze); expect(g.actors.map(t => t.age)).toEqual(ages); // everyone freezes
    g.tick(ULT.intro); expect(g.ult.phase).toBe('pour'); expect(g.ult.meter).toBe(1);
    const st = g.stamina; expect(g.spend('punch')).toBe(false); expect(g.stamina).toBe(st);
    const hp = g.hp; for (let i = 0; i < 30; i++) g.tick(.1); expect(g.ult.meter).toBeCloseTo(.5, 1); expect(g.hp).toBe(hp);
    for (let i = 0; i < 31; i++) g.tick(.1); expect(g.ult.phase).toBe('done'); expect(g.events.some(e => e.type === 'ultEnd')).toBe(true);
  });
  test('the stream soaks enemies to a knockout and penalises the halo dog (with a cooldown)', () => {
    const g = ready(); grabHat(g); g.spend('grab'); g.resolve('grab', { kind: 'cover', id: 'counter', point: onTop }); g.tick(ULT.intro + .01);
    const enemy = g.actors.find(t => t.kind === 'enemy')!, dog = g.actors.find(t => t.kind === 'dog')!;
    expect(g.soak({ kind: 'enemy', id: enemy.id }, .1)).toBe('soak'); expect(enemy.wet).toBeGreaterThan(0);
    let r: string | null = null; for (let i = 0; i < 20 && r !== 'ko'; i++) r = g.soak({ kind: 'enemy', id: enemy.id }, .1);
    expect(r).toBe('ko'); expect(g.actors).not.toContain(enemy); expect(g.defeated).toBe(1);
    const hp = g.hp, score = g.score;
    expect(g.soak({ kind: 'dog', id: dog.id }, .1)).toBe('dog'); expect(g.hp).toBe(hp - 1); expect(g.score).toBe(Math.max(0, score - 150));
    expect(g.soak({ kind: 'dog', id: dog.id }, .1)).toBe(null); expect(g.hp).toBe(hp - 1); // still offended, not double-charged
    expect(g.actors).toContain(dog);
  });
  test('one ult per attempt: after it is spent the hat never returns; a fresh attempt resets it', () => {
    const g = ready(); grabHat(g); g.spend('grab'); g.resolve('grab', { kind: 'cover', id: 'counter', point: onTop });
    g.tick(ULT.intro + .01); for (let i = 0; i < 70; i++) g.tick(.1);
    expect(g.ult.phase).toBe('done'); g.placeHat(); expect(g.actors.some(t => t.kind === 'hat')).toBe(false);
    expect(g.soak({ kind: 'enemy', id: g.actors.find(t => t.kind === 'enemy')?.id }, 1)).toBe(null);
    g.start(3); expect(g.ult.phase).toBe('none'); expect(g.actors.some(t => t.kind === 'hat')).toBe(true);
  });
  test('ult stream: rises from below the bottom centre, arcs above the chord and follows the aim with lag', () => {
    const s = new Stream(), aim = { x: .8, y: .35 };
    s.update(1 / 60, aim); expect(s.tip.x).toBeLessThan(aim.x); expect(s.tip.x).toBeGreaterThan(.5); // lags, but moves toward it
    for (let i = 0; i < 90; i++) s.update(1 / 60, aim);
    expect(Math.hypot(s.tip.x - aim.x, s.tip.y - aim.y)).toBeLessThan(.01);
    const pts = s.points(); expect(pts[0]).toEqual(STREAM.origin); expect(pts[0].y).toBeGreaterThan(1); expect(pts[0].x).toBe(.5);
    expect(pts.at(-1)!.x).toBeCloseTo(s.tip.x, 6); expect(pts.at(-1)!.y).toBeCloseTo(s.tip.y, 6);
    const mid = pts[Math.floor(pts.length / 2)], chordY = (STREAM.origin.y + s.tip.y) / 2;
    expect(mid.y).toBeLessThan(chordY - .05); // a real arc, not a straight line
    expect(Math.min(...pts.map(p => p.y))).toBeLessThan(s.tip.y - .05); // it rises above the landing point and drops onto it
    // Moving the aim moves the landing point over a few frames.
    for (let i = 0; i < 90; i++) s.update(1 / 60, { x: .2, y: .6 });
    expect(s.tip.x).toBeCloseTo(.2, 2);
  });
});
