# SA-026c Bounded Interaction Fix

Branch: `prototype`. Inherited SA-026b source/tests retained.

## Starting Evidence
- Parent reported `bun test` and `bun run build` exit 0.
- Parent browser run exited 1 at the held-item horizontal enemy sweep: last strike remained prop grab (id 1).
- Root cause: unstable cached target projection/occlusion in the inherited harness, not a touch-strike bug; the inherited sweep passed with gameplay unchanged, while its asynchronous cached coordinate lookup and offset sampling did not guarantee a currently exposed enemy under the actual input samples.

## Bounded Fix
- Retained the inherited touch input/HUD changes and prop exposure readback.
- Re-read current projected actors, validate the rounded point with the actual shot resolver, and dispatch input in the same JavaScript turn. The sweep now explicitly crosses that point rather than sampling only on either side of it.
- Keep the second drag active while checking actual `drawArm` output: resolved glove coordinates, openness, item and pose branch passed to `inkArm`. Removed the inferred `dataset.arms` claim.
- A small read-only `window.__interaction` probe provides current projection/ray/flight evidence on demand. It exposes no game-state mutation. Arm output uses fixed scalar records, not per-frame serialization.
- Throw uses a new exposed enemy projection after punching/cancel, not the old enemy coordinate. Ballistic position/velocity must reconstruct that local enemy's world position. The flight must advance and subsequently leave the active flight list.
- All gameplay actions remain PointerEvents through the existing handlers; no actors, timing, stamina, HP, held items or projectiles are assigned by the test.
- Portrait capture uses `sa026c-portrait-prompt.png` rather than overwriting foreign `mobile-portrait-prompt.png`.

## Actual Verification
- Initial diagnostic browser run: exit 0 with unchanged gameplay. Enemy id 21 at (386,191) was ray-exposed; sampled x=379/393 hit it while adjacent samples hit shelves, a prop and a friend. This confirmed working touch punching and the need to validate the input point, not assume the old cached projection remains suitable. That exploratory log was superseded by the final full-run log.
- One intermediate `bun test` exited 1 because the new probe method name `targets` violated the existing source-wording guard. Renamed it `actors`; did not weaken the test.
- Final `bun test`: exit 0, 240 pass, 0 fail, 8,646 assertions across 12 files.
- Final `bun run build`: exit 0, TypeScript `tsc --noEmit` and Vite production build passed. Existing >500 kB chunk warning remains.
- Final `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python -u tests/browser_mobile.py > evidence/SA-026c-browser.log 2>&1`: exit 0, all six scenarios, zero page/console errors. HTTP logs are in the named log, not terminal output.
- `git diff --check`: exit 0.
- LSP diagnostics attempted on both changed source/test files: TypeScript and basedpyright servers unavailable, previously declined; no install performed. Build typecheck and real browser execution are the verification gates instead.

## Observed Interaction Evidence
- Grabbed real `mug` from the level via horizontal touch sweep.
- Held-item punch: enemy id 19, outcome `hit`, stamina 100 -> 76.
- Actual rendered left glove: touch pose at (277,213), closed, no item. Actual rendered right glove: resting at (742.72,309.97), open, drawing `mug`.
- Ordinary horizontal drag retained the mug and created zero flights. Cancel cleared touching, retained the mug, created zero flights and returned the left arm to rest.
- Fresh local throw enemy: id 21 at world (-1.1,0.3,-3.15), center (385.96,228.93). Swipe endpoint (385.96,238.93), 10 px from that center.
- Launch: real mug flight id 22, age 0, position (0.67758,1.73597,8.04647), velocity (-3.42223,-0.29731,-21.55564). Held cleared; strike was grab/throw/flight id 22. Ballistic reconstruction matched local world position within 1e-6; observed age advance and eventual removal.
- This verifies real local aiming and projectile lifecycle, not a guaranteed enemy impact: a moving enemy/cover may still intercept or evade the physical throw normally.
- `evidence/sa026c-held-dual-arm.png`: active second-hand pose, visually inspected; extended left fist and mug in right glove.
- `evidence/sa026c-portrait-prompt.png`: current portrait orientation capture.

Foreign `evidence/mobile-*` and SA-025 files were not edited or staged. No installs, external APIs, push, branch change or history rewrite.
