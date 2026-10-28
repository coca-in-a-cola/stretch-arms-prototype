# SA-029 — r14-hitboxes handoff

## Outcome
- Baseline HEAD verified `4cadef93575df3391fd1b4d596a692674e26349e` (published build prefix `641e0a8`). Gameplay commit: `af911a9`.
- Removed projected rectangles/pixel circles, actor-centre retargeting, nearest-enemy candidate selection and obsolete aim-assist tests/helper. Mobile and desktop throws use the actual first ray intersection. Contact-hand controls, swaps, empty-space/cancel retention remain.
- `HOSTILE_HIT_SCALE = 1.2`: only enemy/thug width and height +20% (10% original size per side), depth remains 0.08 world units. Current world pose/skin inset remain shared. Projectile collision consumes exactly those same bounds; removed its separate enemy ×1.3/depth padding. Friends, dogs, props, cover not enlarged by this change. Existing desktop prop-grab forgiveness is unchanged, not enemy targeting.
- Held hat now explicitly throws on touch release over actual counter TOP (first hit counter, y >= top−0.001), not other empty space. No enemy required. Desktop hat activation unchanged. Relevant HUD/help, herald touch riddle, README updated; no art/layout changes.

## Real gates
Commands from repository root with `PATH=/home/tyler/.bun/bin:$PATH`:
- `bun test`: exit **0**, **266 pass / 0 fail**, 14 files, 8855 assertions. `evidence/SA-029-test.log`.
- `bun run build`: exit **0**, TypeScript + Vite. `evidence/SA-029-build.log`. Existing >500 kB chunk warning remains.
- `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tests/browser_sa029.py`: final **two runs exit 0**, logs `SA-029-browser-final1.log`, `SA-029-browser-final2.log`. Earlier pre-final run also exit 0 (`SA-029-browser-run1.log`). Both final runs exercise existing real contact lifecycle plus touch and desktop hat path. No direct game mutation, dev game access, resolve/launch invocation or cheat state; canvas pointer input + read-only production probes only.
- Unit regressions: hostile-only bounded scaling, edge ray/projectile hit, just-outside miss, cover/nearer friend blocking both ray and projectile, stationary distant enemy never acquired. Browser outside hostile bounds hit piano cover and retained hat with zero flights (no fallback to nearby enemy).
- `git diff --check`: exit **0**.

## Observed hat input path (both final runs)
Touch 844×390: acquire hat actor 18 through canvas touch input (479,233); retained through empty release/cancel. Counter release (441,202) first ray hit `{x:0.6286667535,y:1.15,z:-2.5696473424}`. Before release held hat; after release held empty, exactly one hat flight 21. Ballistic rest `{x:0.6293532001,y:1.15,z:-2.6968311638,flipped:true}`; rendered trophy visible with scaleY **−1.35**; observed **intro**, then **pour** (active ult). Desktop 1280×720 right-pointer input also acquired, threw and landed `{x:0.6175751132,y:1.15,z:-2.4730574852,flipped:true}`; observed intro→pour. Screenshots: `evidence/sa029-browser/hat-touch-intro.png`, `hat-desktop-intro.png`, contact lifecycle screenshot alongside.

## Publication handoff / remaining
- `evidence/SA-029-releases.patch` is a narrow patch against canonical `origin/gh-pages:releases.html`, NOT stale public/releases.html. Latest + new r14-hitboxes archive; fallback count 11→12 cards; all 10 prior archive articles preserved byte-for-byte. DevOps must apply during publication and deploy dist to latest + r14-hitboxes archive; no publication performed here.
- Parent owns broader production/mobile visual matrices and live deployed hash verification if required. Re-run focused gate using the exact browser command above; all requested focused local gates have completed, no child background jobs.
- Card remains open. No main/push/force/reset/install/services/secrets touched. Foreign dirty evidence preserved and excluded from commits.
- Initial bare `bun` commands failed exit **127** because shell PATH omitted ~/.bun/bin; logs retained in `SA-029-test-initial.log`; resolved using existing executable (no installation). No browser failures were hidden or replaced with fabricated PASS.
