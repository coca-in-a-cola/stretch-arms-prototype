// Data-driven throwables: one row per prop kind, shared by rules (damage, stamina, mass), flight physics and rendering.
// Sprites are 512x640 cuts (tools/cut_sprites.py); `w`/`h` is the world size of that frame, `inset` the visible
// box inside it as [left, right, bottom, top] fractions (the hitbox).

export type PropKind =
  | 'hat' | 'bottle' | 'barrel' | 'mug' | 'whiskey' | 'stool' | 'spittoon' | 'shaker' | 'eggs' | 'plunger'
  | 'hydrant' | 'tire' | 'melon' | 'fish' | 'anvil' | 'chicken' | 'bowling' | 'flowerpot' | 'pie';

export interface PropSpec {
  /** Runtime sprite in public/assets/. */
  sprite: string;
  /** Short Russian name for HUD hints. */
  name: string;
  w: number; h: number; inset: readonly [number, number, number, number];
  /** Heavier = slower flight and pricier to lift and throw. */
  mass: number;
  /** HP knocked off an enemy on a direct hit (enemies have 20–40 HP, a punch does 10). */
  damage: number;
  /** Stamina: lifting it (the reach itself costs REACH_COST up front) and throwing it. */
  grab: number; throw: number;
  /** Glass, fruit and pies shatter / splat on impact; everything else lands and stays. */
  breakable: boolean;
}

/** What any reach for a prop costs up front; heavier props charge the rest of their `grab` cost on pick-up. */
export const REACH_COST = 12;

const p = (sprite: string, name: string, w: number, h: number, inset: readonly [number, number, number, number], mass: number, damage: number, grab: number, thr: number, breakable: boolean): PropSpec =>
  ({ sprite, name, w, h, inset, mass, damage, grab, throw: thr, breakable });

export const PROPS: Record<PropKind, PropSpec> = {
  // The bar's hero item: never a weapon, it belongs on the counter.
  hat: p('gen_hat.png', 'котелок', .78, .975, [.03, .97, 0, .54], .5, 0, 12, 18, false),
  bottle: p('gen_bottle.png', 'бутылка', .62, .82, [.26, .74, 0, .96], 1, 15, 12, 18, true),
  barrel: p('gen_barrel.png', 'бочонок', .7, .82, [.1, .9, 0, .96], 3, 25, 14, 22, false),
  mug: p('gen_mug.png', 'кружка', .56, .7, [.03, .97, 0, .97], 1, 15, 12, 16, true),
  whiskey: p('gen_whiskey.png', 'виски', .5, .82, [.28, .72, 0, .97], 1, 15, 12, 16, true),
  stool: p('gen_stool.png', 'табурет', .8, 1, [.13, .87, 0, .95], 3, 25, 14, 24, false),
  spittoon: p('gen_spittoon.png', 'плевательница', .6, .75, [.04, .96, 0, .7], 2.5, 20, 12, 20, false),
  shaker: p('gen_shaker.png', 'шейкер', .44, .55, [.2, .8, 0, .95], 1, 12, 12, 14, false),
  eggs: p('gen_eggs.png', 'банка яиц', .5, .62, [.13, .87, 0, .95], 1.5, 15, 12, 16, true),
  plunger: p('gen_plunger.png', 'вантуз', .56, .7, [.25, .75, 0, .95], .8, 10, 12, 12, false),
  hydrant: p('gen_hydrant.png', 'гидрант', .72, .9, [.1, .9, 0, .95], 5, 35, 18, 30, false),
  tire: p('gen_tire.png', 'шина', .72, .9, [.1, .9, 0, .95], 3, 20, 14, 22, false),
  melon: p('gen_melon.png', 'арбуз', .64, .8, [.04, .96, 0, .9], 2.5, 20, 12, 20, true),
  fish: p('gen_fish.png', 'рыба', .72, .9, [.03, .97, 0, .6], 1, 12, 12, 14, false),
  anvil: p('gen_anvil.png', 'наковальня', .8, 1, [.03, .97, 0, .62], 7, 45, 22, 36, false),
  chicken: p('gen_chicken.png', 'резиновая курица', .5, .62, [.2, .8, 0, .95], .5, 8, 12, 10, false),
  bowling: p('gen_bowling.png', 'шар для боулинга', .5, .62, [.04, .96, 0, .8], 4, 30, 16, 26, false),
  flowerpot: p('gen_flowerpot.png', 'цветочный горшок', .56, .7, [.15, .85, 0, .95], 1.5, 15, 12, 16, true),
  pie: p('gen_pie.png', 'кремовый пирог', .56, .7, [.03, .97, 0, .5], .8, 10, 12, 12, true),
};
export const PROP_KINDS = Object.keys(PROPS) as PropKind[];
