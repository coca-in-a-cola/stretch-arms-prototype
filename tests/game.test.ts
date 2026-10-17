import { describe, expect, test } from 'bun:test';
import { Game, readProgress, type Progress } from '../src/game';

describe('deterministic arcade rules', () => {
  test('street spawns across depth layers with elevation and shorter warning deadlines', () => {
    const g = new Game({version:1,unlocked:2,best:0}); g.start(2); g.spawn(); g.spawn();
    const enemies = g.targets.filter(t=>t.kind==='enemy');
    expect(enemies.map(t=>t.layer)).toEqual(['foreground','background','foreground']);
    expect(enemies[1].y).toBeGreaterThan(3); // upper-floor window
    expect(new Set(enemies.map(t=>t.z)).size).toBe(3);
    expect(enemies.every(t=>t.deadline===4.6)).toBe(true);
    g.start(1); expect(g.targets[0].layer).toBe('foreground'); expect(g.targets[0].slot).toBe(0);
    for (let i=0;i<2;i++) g.spawn();
    expect(g.targets.filter(t=>t.kind==='enemy').map(t=>t.layer)).toEqual(['foreground','midground','background']);
  });
  test('fresh run and locked second level', () => {
    const g = new Game(); expect(g.start(2)).toBe(false); expect(g.start(1)).toBe(true);
    expect(g.hp).toBe(5); expect(g.stamina).toBe(100); expect(g.targets.filter(t => t.kind === 'enemy')).toHaveLength(1);
  });
  test('stamina cost, regeneration, gating and cap', () => {
    const g = new Game(); g.start(1); g.act('punch'); expect(g.stamina).toBe(76);
    g.stamina = 23; const count = g.targets.length; expect(g.act('punch',g.targets[0].id)).toBe('tired'); expect(g.targets).toHaveLength(count);expect(g.stamina).toBe(23);
    g.tick(1);expect(g.stamina).toBe(44);g.stamina=99;g.tick(1);expect(g.stamina).toBe(100);
  });
  test('attack timeout removes enemy, damages HP and breaks combo', () => {
    const g = new Game();g.start(1);g.combo=4;g.tick(6.3);expect(g.hp).toBe(4);expect(g.combo).toBe(0);expect(g.defeated).toBe(1);
  });
  test('protected dog survives, score penalty and heart loss', () => {
    const g = new Game();g.start(1);g.score=300;const dog=g.targets.find(t=>t.kind==='dog')!;
    expect(g.act('punch',dog.id)).toBe('protected');expect(g.hp).toBe(4);expect(g.score).toBe(150);expect(g.targets).toContain(dog);
    g.stamina=100;g.act('punch',dog.id);g.stamina=100;g.act('punch',dog.id);expect(g.score).toBe(0);
  });
  test('grab prop then throw kills an enemy with premium score', () => {
    const g = new Game();g.start(1);const prop=g.targets.find(t=>t.kind==='bottle')!;const enemy=g.targets.find(t=>t.kind==='enemy')!;
    expect(g.act('grab',prop.id)).toBe('grab');expect(g.held).toBe('bottle');expect(g.stamina).toBe(88);
    expect(g.act('grab',enemy.id)).toBe('throw');expect(g.held).toBeNull();expect(g.score).toBe(180);expect(g.stamina).toBe(70);expect(g.defeated).toBe(1);
  });
  test('pause freezes time, HP, stamina and actions', () => {
    const g=new Game();g.start(1);g.stamina=50;g.pause();const snapshot=JSON.stringify(g);g.tick(100);expect(g.act('punch',g.targets[0].id)).toBe('blocked');expect(JSON.stringify(g)).toBe(snapshot);g.pause();g.tick(1);expect(g.stamina).toBe(71);
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
    for(let i=0;i<9;i++){if(!g.targets.some(t=>t.kind==='enemy'))g.spawn();g.stamina=100;g.act('punch',g.targets.find(t=>t.kind==='enemy')!.id);}
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
