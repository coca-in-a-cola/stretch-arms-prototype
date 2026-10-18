// Fixed-capacity object pool for short-lived FX (shards, seeds, birds, droplets): objects are recycled instead of
// allocated per burst, so a busy brawl on a phone does not feed the garbage collector every frame.
export class Pool<T extends object> {
  /** Live objects, in spawn order. Iterate it; call `release(i)` (backwards loops) or `sweep()` to retire. */
  readonly live: T[] = [];
  private readonly spare: T[] = [];
  constructor(private readonly make: () => T, readonly capacity: number) {}
  /** A recycled (or new) object, or — at capacity — the oldest live one, reused in place. */
  get(): T {
    if (this.live.length >= this.capacity) { const oldest = this.live.shift()!; this.live.push(oldest); return oldest; }
    const o = this.spare.pop() ?? this.make(); this.live.push(o); return o;
  }
  release(i: number) { const [o] = this.live.splice(i, 1); if (o) this.spare.push(o); }
  /** Retire every live object the predicate rejects. */
  sweep(keep: (o: T) => boolean) { for (let i = this.live.length - 1; i >= 0; i--) if (!keep(this.live[i])) this.release(i); }
  clear() { this.spare.push(...this.live); this.live.length = 0; }
  get allocated() { return this.live.length + this.spare.length; }
}
