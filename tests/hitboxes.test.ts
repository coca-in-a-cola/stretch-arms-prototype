import { describe, expect, test } from 'bun:test';
import { bodyBox, bodyOf, HOSTILE_HIT_SCALE } from '../src/layout';
import { resolveShot, type Hittable } from '../src/aim';
import { launch, step } from '../src/throw';

describe('SA029 shared hostile bounds, not acquisition', () => {
  for (const kind of ['enemy', 'thug', 'dog', 'friend', 'hat', 'mug'] as const) {
    test(`${kind}: bounded scale with unchanged depth`, () => {
      const who = kind === 'thug' ? 'rat' : kind === 'friend' ? 'kitten' : undefined;
      const b = bodyBox(kind, {x:0,y:1,z:0}, undefined, who), c = bodyOf(kind, who);
      const scale = kind === 'enemy' || kind === 'thug' ? HOSTILE_HIT_SCALE : 1;
      expect(b.max.x-b.min.x).toBeCloseTo(c.w*(c.inset[1]-c.inset[0])*scale);
      expect(b.max.y-b.min.y).toBeCloseTo(c.h*(c.inset[3]-c.inset[2])*scale);
      expect(b.max.z-b.min.z).toBeCloseTo(.08);
    });
  }
  const b = bodyBox('enemy', {x:0,y:1,z:0});
  const enemy: Hittable = {id:1,kind:'enemy',...b};
  const cy = (b.min.y+b.max.y)/2;
  function ray(x:number, world:Hittable[]=[enemy]) { return resolveShot({x,y:cy,z:4},{x:0,y:0,z:-1},world); }
  function flight(x:number, world:Hittable[]=[enemy]) {
    const f = launch(10,'mug',{x,y:cy,z:4},{x,y:cy,z:0});
    const impacts = [];
    for(let i=0;i<120;i++) impacts.push(...step(f,1/120,world));
    return impacts;
  }
  test('edge within expanded box hits without centre snapping; just outside stays miss', () => {
    const x = b.max.x-.01;
    expect(ray(x).id).toBe(1); expect(ray(x).point.x).toBeCloseTo(x);
    expect(flight(x).some(v=>v.type==='hit' && v.id===1)).toBe(true);
    expect(ray(b.max.x+.01).kind).toBe('whiff');
    expect(flight(b.max.x+.01).some(v=>v.type==='hit' && v.id===1)).toBe(false);
  });
  test('cover and nearer friend occlude hostile for both ray and flight', () => {
    for(const kind of ['cover','friend'] as const) {
      const blocker:Hittable={id:'front',kind,min:{x:-2,y:0,z:2},max:{x:2,y:4,z:2.1}};
      expect(ray(0,[enemy,blocker]).id).toBe('front');
      expect(flight(0,[enemy,blocker]).some(v=>v.type==='hit' && v.id===1)).toBe(false);
    }
  });
  test('stationary distant enemy is not selected outside the actual ray', () => {
    expect(ray(3).kind).toBe('whiff');
    expect(flight(3).some(v=>v.type==='hit')).toBe(false);
  });
});
