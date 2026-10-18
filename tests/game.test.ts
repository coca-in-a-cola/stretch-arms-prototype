import { describe, expect, test } from 'bun:test';
import { PROPS, REACH_COST } from '../src/props';
import { Game, ANTIC, ENEMY_HP, PUNCH_DAMAGE, healthBarAlpha, readProgress, loadProgress, resultActions, PROGRESS_KEY, LEGACY_PROGRESS_KEY, type Progress } from '../src/game';

describe('deterministic arcade rules', () => {
  test('the bar is level 1 (open from the start); the merged street is level 2 and spawns across depth layers on both halves', () => {
    const fresh = new Game(); expect(fresh.start(1)).toBe(true); expect(fresh.layout.look).toBe('bar'); expect(fresh.actors.some(t => t.kind === 'hat')).toBe(true);
    const first = fresh.actors.find(t => t.kind === 'enemy')!; expect(first.layer).toBe('foreground'); expect(first.slot).toBe(0); expect(fresh.start(2)).toBe(false);
    const g = new Game({version:2,unlocked:2,best:0}); expect(g.start(2)).toBe(true); expect(g.layout.look).toBe('street');
    expect(g.layout.goal).toBeGreaterThan(20); expect(g.layout.pan).toBeGreaterThan(6); expect(g.actors.filter(t=>t.kind==='dog').length).toBe(2);
    for (let i = 0; i < 8; i++) { g.spawn(); for (const t of g.actors) if (t.kind === 'enemy' && g.actors.filter(e => e.kind === 'enemy').length >= 5) { g.actors = g.actors.filter(e => e !== t); break; } }
    const slots = g.layout.slots, used = [...new Set(g.layout.order.slice(0, 9))].map(i => slots[i]);
    expect(new Set(used.map(s => s.layer))).toEqual(new Set(['foreground', 'midground', 'background']));
    expect(used.some(s => s.x < -6)).toBe(true); expect(used.some(s => s.x > 6)).toBe(true); // yard half and alley half
    expect(g.actors.filter(t => t.kind === 'enemy').every(t => t.deadline === 5.4 + (t.antic ? ANTIC.len : 0))).toBe(true); // clowning bullies swing later
    // Never more than five bullies out at once on the wide street.
    const h = new Game({version:2,unlocked:2,best:0}); h.start(2); for (let i = 0; i < 12; i++) h.spawn();
    expect(h.actors.filter(t => t.kind === 'enemy').length).toBe(5);
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
  test('health bars: every enemy has HP; a punch takes a third, a thrown prop more; the bar shows on damage and fades', () => {
    const g = new Game(); g.start(1); const enemy = g.actors.find(t => t.kind === 'enemy')!;
    expect(enemy.hp).toBe(ENEMY_HP.walrus); expect(enemy.maxHp).toBe(30); expect(healthBarAlpha(enemy, g.elapsed)).toBe(0); // no bar before any damage
    expect(g.act('punch', enemy.id)).toBe('hit'); expect(enemy.hp).toBe(30 - PUNCH_DAMAGE); expect(g.actors).toContain(enemy);
    expect(g.events.find(e => e.type === 'hurt')).toMatchObject({ id: enemy.id, amount: PUNCH_DAMAGE });
    expect(healthBarAlpha(enemy, g.elapsed)).toBe(1); expect(healthBarAlpha(enemy, g.elapsed + 2.6)).toBeGreaterThan(0); expect(healthBarAlpha(enemy, g.elapsed + 3.1)).toBe(0);
    const prop = g.actors.find(t => t.kind === 'mug' || t.kind === 'whiskey')!;
    g.stamina = 100; expect(g.act('grab', prop.id)).toBe('grab'); expect(g.held).toBe(prop.kind); expect(g.stamina).toBe(100 - REACH_COST);
    g.stamina = 100; expect(g.act('grab', enemy.id)).toBe('throw'); expect(g.stamina).toBe(100 - PROPS[prop.kind as 'mug'].throw);
    expect(enemy.hp).toBe(30 - PUNCH_DAMAGE - PROPS[prop.kind as 'mug'].damage); expect(PROPS.mug.damage).toBeGreaterThan(PUNCH_DAMAGE);
    expect(g.defeated).toBe(0);
    g.stamina = 100; g.act('punch', enemy.id); expect(g.actors).not.toContain(enemy); expect(g.defeated).toBe(1); expect(g.events.some(e => e.type === 'ko' && e.id === enemy.id)).toBe(true);
    // Heavier props hit harder and cost more to lift and throw.
    expect(PROPS.anvil.damage).toBeGreaterThan(PROPS.bottle.damage); expect(PROPS.anvil.throw).toBeGreaterThan(PROPS.bottle.throw); expect(PROPS.anvil.grab).toBeGreaterThan(REACH_COST);
  });
  test('a non-lethal hit staggers the enemy: its swing restarts', () => {
    const g = new Game(); g.start(1); const enemy = g.actors.find(t => t.kind === 'enemy')!; enemy.age = enemy.deadline - .2; // mid wind-up
    g.act('punch', enemy.id); expect(enemy.deadline - enemy.age).toBeGreaterThan(1.5);
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
    for(let i=0;i<200&&g.mode==='play';i++){if(!g.actors.some(t=>t.kind==='enemy'))g.spawn();g.stamina=100;g.act('punch',g.actors.find(t=>t.kind==='enemy')!.id);}
    expect(g.mode).toBe('result');expect(g.won).toBe(true);expect(g.score).toBeGreaterThan(900);expect(saved?.unlocked).toBe(2);expect(saved?.version).toBe(2);
    expect(g.start(2)).toBe(true);g.hp=1;g.held='barrel';g.combo=8;g.start(2);expect(g.hp).toBe(5);expect(g.stamina).toBe(100);expect(g.held).toBeNull();expect(g.combo).toBe(0);expect(g.score).toBe(0);
  });
  test('five missed attack deadlines lose; result blocks actions',()=>{
    const g=new Game();g.start(1);for(let i=0;i<5;i++)g.tick(8.5);expect(g.mode).toBe('result');expect(g.won).toBe(false);expect(g.hp).toBe(0);expect(g.act('punch')).toBe('blocked');
  });
  test('malformed, wrong-version and invalid progress are safe',()=>{
    for(const raw of [null,'oops','null','{}','{"version":3,"unlocked":2,"best":99}','{"version":2,"unlocked":3,"best":1}','{"version":2,"unlocked":2,"best":-1}','{"version":1,"unlocked":7,"best":1}'])expect(readProgress(raw)).toEqual({version:2,unlocked:1,best:0});
    expect(readProgress('{"version":2,"unlocked":2,"best":1024}')).toEqual({version:2,unlocked:2,best:1024});
  });
  test('v1 saves migrate to the new order: yard-only stays at the bar, anything past the yard opens the street; best survives',()=>{
    expect(readProgress('{"version":1,"unlocked":1,"best":40}')).toEqual({version:2,unlocked:1,best:40});
    expect(readProgress('{"version":1,"unlocked":2,"best":512}')).toEqual({version:2,unlocked:2,best:512});
    expect(readProgress('{"version":1,"unlocked":3,"best":900}')).toEqual({version:2,unlocked:2,best:900});
    const store: Record<string,string> = {'long-arms.progress.v1':'{"version":1,"unlocked":3,"best":77}'};
    expect(loadProgress(k=>store[k]??null)).toEqual({version:2,unlocked:2,best:77});
    store[PROGRESS_KEY]='{"version":2,"unlocked":1,"best":5}'; expect(loadProgress(k=>store[k]??null)).toEqual({version:2,unlocked:1,best:5}); // v2 wins once written
    expect(PROGRESS_KEY).toBe('long-arms.progress.v2');
    const g=new Game(loadProgress(k=>k===LEGACY_PROGRESS_KEY?'{"version":1,"unlocked":3,"best":1}':null)); expect(g.start(2)).toBe(true);
  });
  test('win → the next level is the primary result button; retry stays secondary; the last level goes back to the menu',()=>{
    const g=new Game(); g.start(1); g.finish(true);
    const a=resultActions(g); expect(a[0]).toMatchObject({id:'next',primary:true}); expect(a.filter(x=>x.primary)).toHaveLength(1); expect(a.some(x=>x.id==='retry'&&!x.primary)).toBe(true);
    g.start(2); g.finish(true); const last=resultActions(g); expect(last[0]).toMatchObject({id:'menu',primary:true}); expect(last.some(x=>x.id==='retry')).toBe(true); expect(last.some(x=>x.id==='next')).toBe(false);
    g.start(1); g.finish(false); expect(resultActions(g)[0]).toMatchObject({id:'retry',primary:true});
  });

});

import { ULT } from '../src/game';
import { LEVELS, cameraFor as rig, hittables as hits, onLanding } from '../src/layout';
import { resolveShot } from '../src/aim';
import { Stream, STREAM } from '../src/ult';

describe('level 3: the secret bar', () => {
  const counter = LEVELS[1].covers.find(c => c.id === 'counter')!;
  const onTop = { x: .3, y: counter.max.y, z: (counter.min.z + counter.max.z) / 2 };
  const ready = () => { const g = new Game(); g.start(1); return g; };
  const grabHat = (g: Game) => { const hat = g.actors.find(t => t.kind === 'hat')!; expect(g.act('grab', hat.id)).toBe('grab'); expect(g.held).toBe('hat'); };

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
    expect(onLanding(2, 'counter', onTop)).toBe(false);
  });
  test('a real ray from the camera onto the counter top resolves to the landing zone', () => {
    const cam = rig(1440, 960).position, g = ready();
    const shot = resolveShot(cam, { x: onTop.x - cam.x, y: onTop.y - .05 - cam.y, z: counter.max.z - cam.z }, hits(1, []));
    expect(shot.id).toBe('counter'); expect(onLanding(1, shot.id, shot.point)).toBe(true);
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
    g.start(1); expect(g.ult.phase).toBe('none'); expect(g.actors.some(t => t.kind === 'hat')).toBe(true);
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
