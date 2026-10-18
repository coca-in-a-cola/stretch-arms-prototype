import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { LEVELS, cameraFor, hittables } from '../src/layout';
import { ragtimeScore, riffLength, RIFF_VARIANTS } from '../src/ragtime';
import { resolveShot, type Vec3 } from '../src/aim';

const eye = cameraFor(1440, 960).position;
describe('environment gags', () => {
  test('punching the bar piano plays the ragtime riff (a gag event with a riff number); each repeat varies', () => {
    const g = new Game(); g.start(1); g.spend('punch');
    expect(g.resolve('punch', { kind: 'cover', id: 'piano', point: { x: -2.7, y: 1, z: 3.4 } })).toBe('cover');
    const e = g.events.find(v => v.type === 'gag')!; expect(e).toMatchObject({ gag: 'piano', amount: 0 });
    g.events.length = 0; g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'cover', id: 'piano' });
    expect(g.events.find(v => v.type === 'gag')!.amount).toBe(1);
    const a = ragtimeScore(0), b = ragtimeScore(1);
    expect(riffLength(a)).toBeGreaterThan(2.5); expect(riffLength(a)).toBeLessThan(6); // a few seconds
    expect(a.length).toBeGreaterThan(40); expect(a.map(n => n.midi)).not.toEqual(b.map(n => n.midi)); // another key on repeat
    expect(RIFF_VARIANTS.length).toBeGreaterThan(2);
    // Stride left hand under a syncopated melody: low bass notes and high melody notes both present.
    expect(Math.min(...a.map(n => n.midi))).toBeLessThan(50); expect(Math.max(...a.map(n => n.midi))).toBeGreaterThan(75);
  });
  test('a thrown prop that hits the piano plays it too', () => {
    const g = new Game(); g.start(1); const mug = g.actors.find(t => t.kind === 'shaker')!; g.act('grab', mug.id); g.spend('grab');
    const piano = LEVELS[1].covers.find(c => c.id === 'piano')!;
    g.launch({ x: eye.x - .6, y: eye.y - .7, z: eye.z - 1.4 }, { x: (piano.min.x + piano.max.x) / 2, y: piano.max.y * .6, z: piano.max.z });
    for (let i = 0; i < 300 && g.flights.length; i++) g.fly(1 / 60, hittables(1, g.actors));
    expect(g.events.some(e => e.type === 'gag' && e.gag === 'piano')).toBe(true);
  });
  test('each level has more jokes: cuckoo clock and swinging lamps in the bar; ringing street lamps and the washing line outside', () => {
    expect(new Set(LEVELS[1].gags.map(g => g.kind))).toEqual(new Set(['piano', 'cuckoo', 'lamp']));
    expect(new Set(LEVELS[2].gags.map(g => g.kind))).toEqual(new Set(['bell', 'laundry']));
    // Gag boxes are real hittables: a ray at the cuckoo clock stops on it.
    const clock = LEVELS[1].gags.find(g => g.kind === 'cuckoo')!, c: Vec3 = { x: (clock.min!.x + clock.max!.x) / 2, y: (clock.min!.y + clock.max!.y) / 2, z: clock.max!.z };
    const eye2 = cameraFor(1440, 960).position, shot = resolveShot(eye2, { x: c.x - eye2.x, y: c.y - eye2.y, z: c.z - eye2.z }, hittables(1, []));
    expect(shot.id).toBe('gag-cuckoo');
    const g = new Game(); g.start(1); g.spend('punch'); g.resolve('punch', { kind: 'cover', id: 'gag-cuckoo' }); expect(g.events.at(-1)).toMatchObject({ type: 'gag', gag: 'cuckoo' });
  });
  test('the washing line drops underwear on the nearest bully below it (a sting), five pieces, then it is empty', () => {
    const g = new Game({ version: 2, unlocked: 2, best: 0 }); g.start(2);
    const enemy = g.actors.find(t => t.kind === 'enemy')!; enemy.age = 2; // yard slot 0, under the line
    g.spend('punch'); g.resolve('punch', { kind: 'cover', id: 'gag-laundry', point: { x: enemy.x, y: 4, z: -4.4 } });
    expect(g.events.find(e => e.type === 'gag')).toMatchObject({ gag: 'laundry', id: enemy.id }); expect(enemy.hp).toBe(enemy.maxHp! - 10); expect(g.laundry).toBe(4);
    for (let i = 0; i < 6; i++) { g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'cover', id: 'gag-laundry' }); }
    expect(g.laundry).toBe(0);
    g.stamina = 100; g.spend('punch'); g.resolve('punch', { kind: 'cover', id: 'gag-bell-0' }); expect(g.events.at(-1)).toMatchObject({ gag: 'bell' });
  });
});
