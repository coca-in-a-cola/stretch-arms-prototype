import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { LEVELS, cameraFor, hittables, pose, bodyBox, dogAscent, ASCENT } from '../src/layout';
import { FRIEND_PENALTY, MOLE, THUG, THUG_STEAL, molePhase, friendPose } from '../src/friends';
import { resolveShot } from '../src/aim';

const street = () => { const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.start(2); return g; };
const bar = () => { const g = new Game(); g.start(1); return g; };

describe('the mole', () => {
  test('pop cycle: hidden underground, rises out of the mound, peeks, digs back down, next time at another hole', () => {
    expect(molePhase(.5, 5).rise).toBe(0);
    expect(molePhase(MOLE.rise[0] + .15, 5).rise).toBeCloseTo(.5, 1);
    const up = molePhase(4, 5); expect(up.rise).toBe(1); expect(up.hole).toBe(0);
    expect(molePhase(MOLE.dig[1] + .1, 5).rise).toBe(0);
    const next = molePhase(MOLE.period + 4, 5); expect(next.rise).toBe(1); expect(next.hole).toBe(1);
    expect(molePhase(4, 5).lantern).not.toBe(next.lantern); // every other pop he brings the lantern
    for (const level of [1, 2]) {
      const plan = LEVELS[level].friends.find(f => f.who === 'mole')!;
      expect(plan.spots!.length).toBeGreaterThanOrEqual(4);
      expect(friendPose(plan, .5).y).toBeLessThan(-.9); // fully below the floor
      expect(friendPose(plan, 4).y).toBe(0);
    }
  });
  test('out of reach while underground, hittable once up; hitting him costs a heart and points, and he freezes offended', () => {
    const g = bar(), mole = g.actors.find(t => t.who === 'mole')!;
    mole.age = .5; expect(hittables(1, g.actors).some(h => h.id === mole.id)).toBe(false);
    mole.age = 4; expect(hittables(1, g.actors).some(h => h.id === mole.id)).toBe(true);
    g.score = 500; g.spend('punch');
    expect(g.resolve('punch', { kind: 'friend', id: mole.id })).toBe('protected');
    expect(g.hp).toBe(4); expect(g.score).toBe(500 - FRIEND_PENALTY); expect(g.combo).toBe(0);
    expect(g.events.find(e => e.type === 'offend')).toMatchObject({ who: 'mole', id: mole.id });
    const age = mole.age; g.tick(1); expect(mole.age).toBe(age); // stays up, offended
    g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'friend', id: mole.id }); expect(g.hp).toBe(4); // no double penalty
    g.tick(2); expect(mole.mad).toBe(0); g.tick(.1); expect(mole.age).toBeGreaterThan(age);
  });
  test('he pops up right in front of a bully: a careless straight punch at the bartender hits the mole instead', () => {
    const g = bar(), mole = g.actors.find(t => t.who === 'mole')!; mole.age = 4; // hole 0, in front of the counter
    const eye = cameraFor(1440, 960).position, m = bodyBox('friend', pose(1, mole), undefined, 'mole');
    const aim = { x: (m.min.x + m.max.x) / 2, y: m.max.y - .1, z: m.max.z };
    const shot = resolveShot(eye, { x: aim.x - eye.x, y: aim.y - eye.y, z: aim.z - eye.z }, hittables(1, g.actors));
    expect(shot.id).toBe(mole.id);
    expect(Math.abs(LEVELS[1].slots[4].x - pose(1, mole).x)).toBeLessThan(.5); // the weasel's slot is right behind
  });
});

describe('friendly characters', () => {
  test('every level has the mole plus at least two other friends; the street has granny and the postman pigeon, the bar a kitten and a sleeping drunk', () => {
    expect(LEVELS[1].friends.map(f => f.who).sort()).toEqual(['bartender', 'drunk', 'kitten', 'mole']);
    expect(LEVELS[2].friends.map(f => f.who).sort()).toEqual(['granny', 'mole', 'pigeon']);
  });
  for (const [level, make] of [[1, bar], [2, street]] as const) for (const who of LEVELS[level].friends.map(f => f.who)) {
    test(`level ${level}: hitting the ${who} is penalized (heart, −${FRIEND_PENALTY}, combo reset, offended event)`, () => {
      const g = make(), t = g.actors.find(a => a.kind === 'friend' && a.who === who)!; t.age = 4;
      g.score = 400; g.combo = 3; g.spend('punch');
      expect(g.resolve('punch', { kind: 'friend', id: t.id })).toBe('protected');
      expect([g.hp, g.score, g.combo]).toEqual([4, 400 - FRIEND_PENALTY, 0]);
      const e = g.events.find(v => v.type === 'offend')!; expect(e.who).toBe(who); expect(e.text!.length).toBeGreaterThan(3);
      expect(t.mad).toBeGreaterThan(0);
    });
  }
  test('a thrown prop that hits a friend is penalized too', () => {
    const g = street(), granny = g.actors.find(t => t.who === 'granny')!; granny.age = 0; // standing at x0
    g.score = 300; g.held = 'bottle'; const at = pose(2, granny);
    g.launch({ x: at.x, y: 2, z: 5 }, { x: at.x, y: .8, z: at.z });
    for (let i = 0; i < 200 && g.flights.length; i++) g.fly(1 / 60, hittables(2, g.actors));
    expect(g.events.some(e => e.type === 'offend' && e.who === 'granny')).toBe(true); expect(g.hp).toBe(4);
  });
  test('the strollers really walk: granny crosses the whole street, the kitten walks the counter', () => {
    const s = LEVELS[2].friends.find(f => f.who === 'granny')!, k = LEVELS[1].friends.find(f => f.who === 'kitten')!;
    expect(friendPose(s, 0).x).toBe(-14); expect(friendPose(s, s.period / 2).x).toBe(14);
    expect(friendPose(k, k.period / 4).walking).toBe(true); expect(friendPose(k, 0).y).toBe(1.15); // up on the counter
  });
  test('now and then the halo dog ascends (and comes back down)', () => {
    expect(dogAscent(1)).toBe(0);
    expect(dogAscent(ASCENT.start + ASCENT.up + 1)).toBe(ASCENT.height);
    expect(dogAscent(ASCENT.period - .1)).toBe(0);
    const g = bar(), dog = g.actors.find(t => t.kind === 'dog')!; dog.age = ASCENT.start + ASCENT.up + 1;
    expect(pose(1, dog).y).toBeCloseTo(ASCENT.height); // the hitbox ascends too: still a protected dog
  });
  test('bartender is friendly and penalized', () => {
    const g = bar();
    const bartender = g.actors.find(t => t.kind === 'friend' && t.who === 'bartender')!;
    expect(bartender).toBeTruthy();
    expect(bartender.z).toBeCloseTo(-3.15);
    expect(LEVELS[1].slots.some(s => s.skin === 'weasel')).toBe(false);
    g.score = 300; g.combo = 2; g.spend('punch');
    expect(g.resolve('punch', { kind: 'friend', id: bartender.id })).toBe('protected');
    expect(g.hp).toBe(4);
    expect(g.score).toBe(300 - FRIEND_PENALTY);
    expect(g.combo).toBe(0);
    const e = g.events.find(v => v.type === 'offend' && v.who === 'bartender')!;
    expect(e).toBeTruthy();
    expect(e.text).toBeTruthy();
  });
});

describe('close-range thugs (street)', () => {
  test('they pop in close to the camera (big on screen) after a few seconds, never in the bar', () => {
    const b = bar(); for (let i = 0; i < 60 * 8; i++) b.tick(1 / 60); expect(b.actors.some(t => t.kind === 'thug')).toBe(false);
    const g = street(); g.cam = { x: 5, z: 9.5, half: 2.6 };
    for (let i = 0; i < 60 * (THUG.first + .1); i++) g.tick(1 / 60);
    const t = g.actors.find(a => a.kind === 'thug')!; expect(t).toBeTruthy();
    expect(t.z).toBeCloseTo(9.5 - THUG.depth); expect(Math.abs(t.x - 5)).toBeLessThan(2.6);
    expect(t.hp).toBe(1);
  });
  test('one punch knocks a thug out: combo and points, but it does not count toward the bully goal', () => {
    const g = street(), t = g.spawnThug()!; t.age = 1; g.combo = 1; const before = g.defeated, score = g.score;
    g.spend('punch'); expect(g.resolve('punch', { kind: 'thug', id: t.id })).toBe('hit');
    expect(g.actors.includes(t)).toBe(false); expect(g.combo).toBe(2); expect(g.score).toBeGreaterThan(score); expect(g.defeated).toBe(before);
    expect(g.events.find(e => e.type === 'ko')).toMatchObject({ who: t.who });
  });
  test('ignored, each does its nuisance: the rat steals stamina, the pigeon gang splats the screen, the kid shoots a heart off', () => {
    const g = street(); g.stamina = 100;
    const rat = g.spawnThug()!; expect(rat.who).toBe('rat');
    for (let i = 0; i < 60 * (THUG.strike + .1); i++) g.tick(1 / 60);
    expect(g.actors.includes(rat)).toBe(false); expect(g.events.some(e => e.type === 'nuisance' && e.who === 'rat')).toBe(true); expect(g.stamina).toBeLessThan(100 - THUG_STEAL + 5);
    g.stamina = 50; g.events.length = 0; const gang = g.spawnThug()!; expect(gang.who).toBe('gang'); expect(gang.from).toBe('manhole');
    gang.age = THUG.strike; g.tick(.01); expect(g.events.some(e => e.type === 'nuisance' && e.who === 'gang')).toBe(true);
    const hp = g.hp, kid = g.spawnThug()!; expect(kid.who).toBe('kid'); kid.age = THUG.strike; g.tick(.01); expect(g.hp).toBe(hp - 1);
    expect(THUG_STEAL).toBeGreaterThan(20);
  });
});
