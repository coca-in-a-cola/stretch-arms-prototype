import { describe, expect, test } from 'bun:test';
import { Pool } from '../src/pool';

describe('FX object pool', () => {
  test('recycles released objects instead of allocating; never grows past capacity', () => {
    let made = 0; const pool = new Pool(() => ({ n: made++, life: 0 }), 8);
    for (let burst = 0; burst < 50; burst++) { for (let i = 0; i < 6; i++) pool.get().life = 1; pool.sweep(() => false); }
    expect(made).toBe(6); expect(pool.allocated).toBe(6); expect(pool.live.length).toBe(0);
    for (let i = 0; i < 20; i++) pool.get();
    expect(pool.live.length).toBe(8); expect(made).toBe(8); // at capacity the oldest is reused in place
    pool.clear(); expect(pool.live.length).toBe(0); expect(pool.allocated).toBe(8);
  });
});
