# SA-027: Double-tap throw

Status: implemented and verified locally on `prototype`. Nothing published or pushed.

## Root Behavior

The old input handler detected upward velocity during pointermove and could launch
before release. Both swipe launch sites and the old detector are removed. Touch
throws now come only from a consumed pair of completed, deliberate taps while a
prop is already held. Desktop mouse buttons, Space, and E retain their bindings;
there is no new desktop double-click binding or click/dblclick throw listener.

Tunable bounds in `src/gestures.ts`, `DOUBLE_TAP`:
- Maximum press: 220 ms; inter-tap release-to-press gap: 35-320 ms.
- Maximum displacement during either tap: 12 CSS pixels, checked on every sample.
- Maximum distance between tap releases: 28 CSS pixels.

Pickup, invalid/dragged presses, cancellation, blur, suspension, and leaving play
reset the sequence. A pickup cannot seed the first throw tap. Single taps,
ordinary drags, upward swipes, and empty-hand taps do not throw. Accepted pairs
are consumed before launch; duplicate release/click/dblclick events do not launch
again. Existing stamina rules still apply.

Touch following, swept punches, and right-hand item holding remain intact.
The existing ballistic launch uses a nearest visible enemy near the intended tap,
with the existing radius `max(150, canvas width * .22)` CSS pixels. The helper now
enforces that actual radius, rather than extending it along a swipe direction.
Without a local enemy it throws toward the tapped scene point, not a global lock.

Live message, mobile help, herald throw flyer, and accessibility copy now explain
double taps. Camera-pan swipe wording remains valid. No CSS/backplate changes.

## Verification

- `bun test`: exit 0, 249 passing tests, 0 failures, 8661 expectations.
- `bun run build`: exit 0; includes `tsc --noEmit` and production Vite build.
- `bun test tests/herald.test.ts`: exit 0, 12 passing tests. The herald commit
  message mistakenly says 16; the actual count is 12. History was not amended.
- `bun test tests/v2.test.ts`: exit 0, 34 passing tests.
- Full browser final run 1: exit 0, `evidence/SA-027-browser-final1.log`.
- Full browser final run 2: exit 0, `evidence/SA-027-browser-final2.log`.
- Both used `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python -u tests/browser_mobile.py`.
- Both end with all mobile tests passing and zero console/page errors.
- `git diff --check`: exit 0.

Unit coverage replaces rejected swipe assertions and covers timing, distance,
long presses, out-and-back drags, upward/downward drags, cancellation, pickup,
empty hands, duplicate release, pair consumption, and local aim selection.

Browser coverage uses read-only `window.__interaction` actor projections/ray
validation and dispatches against fresh scene samples without mutating gameplay.
It confirms pickup followed by a single tap retains the prop, an active left
hand punches while the right hand holds the item, horizontal/upward drags retain
it, cancelled/distant/late tap sequences retain it, and two taps launch exactly
one age-zero projectile. The projectile trajectory is checked against the fresh
local target with gravity, then observed advancing and completing. Synthetic
click/dblclick and duplicate pointerup do not create a second projectile.
Portrait, three landscape viewports, desktop controls, resize, and autowin run too.

An earlier attempt timed out acquiring a prop (`SA-027-browser-run1.log`), and is
not counted as a pass. The harness now starts pickup directly at the freshly
ray-validated prop sample, rather than at an unvalidated 32-pixel leading offset,
and reports the immediate held/mode/strike result. A diagnostic run passed,
followed by the two final full-suite passes recorded above.

TypeScript and Python LSP servers are unavailable and installation was previously
declined. No tools were installed. TypeScript was checked by the build. Vite's
existing large-chunk warning remains non-fatal.

## Rendered Evidence

- `evidence/sa027-held-dual-arm.png`: inspected; active left fist and open right glove holding mug.
- `evidence/sa027-after-double-tap.png`: scene after the verified projectile completes.
- `evidence/sa027-tutorial-844x390.png`: inspected; existing flyer/backplate presentation.
- `evidence/sa027-portrait-prompt.png`.
- `evidence/sa027-mobile-667x375.png`.
- `evidence/sa027-mobile-844x390.png`.
- `evidence/sa027-mobile-915x412.png`.
- `evidence/sa027-desktop.png`.
- Gate logs: `evidence/SA-027-unit.log`, `evidence/SA-027-build.log`.

All pre-existing dirty mobile/sa026 screenshots and SA-025/SA-026 documents were
left untouched and are not staged for this task.

## Catalog and DevOps Handoff

Canonical source is `releases.html` on the locally available `origin/gh-pages`
snapshot `59635534e7e177700f8904acc5f1d37c5bbf6d4a`, not a source-branch file.
`evidence/SA-027-releases.patch` is the narrow patch to that existing page.
It retains all eight existing cards, adds r11-gestures and r12-double-tap archive
cards, updates the no-JS count to ten, and promotes latest to r12-double-tap.
README adds r11 and explicitly marks r12 as pending publication.

Verified with an isolated temporary Git index: read the gh-pages snapshot,
`git apply --cached --check`, then apply the patch and inspect its stat:
17 insertions, 3 deletions in the existing releases.html. The workspace's real
index and branch were not switched. All referenced old archive directories,
including `r11-gestures/`, exist in the local gh-pages tree. No remote/API calls.

Deployment requirements (DevOps only, NOT executed):
1. Prepare a separate gh-pages working directory at the current deployment head.
   Preserve all existing version directories, `releases.html`, and assets.
2. Build this prototype revision with `bun run build`. The built index uses
   `./assets/...` links, suitable for both root and a version subdirectory.
3. Copy the complete dist contents to a new `r12-double-tap/` directory and to
   the site root, without removing archived versions. Keep `r11-gestures/` as-is.
4. In that separate deployment directory run:

   ```sh
   GIT_MASTER=1 git apply --check "$SOURCE/evidence/SA-027-releases.patch"
   GIT_MASTER=1 git apply "$SOURCE/evidence/SA-027-releases.patch"
   ```

   `$SOURCE` is this source checkout. If the canonical page changed since the
   snapshot above, rebase only this narrow catalog patch; do not replace the page.
5. Verify local root, `r11-gestures/`, `r12-double-tap/`, and `releases.html` links,
   latest/archive filters, search, and no-JS ten-card fallback. Then follow the
   owner's deployment approval flow. Publishing/pushing remains unauthorized here.

Expected version URLs after deployment:
- `https://coca-in-a-cola.github.io/stretch-arms-prototype/r11-gestures/`
- `https://coca-in-a-cola.github.io/stretch-arms-prototype/r12-double-tap/`

The r12 directory does not yet exist on the inspected gh-pages snapshot. Apply
the catalog promotion together with deploying r12/root, not before, to avoid a
dead version link or a false latest label.

## Commits

- `c334d7d`: input recognition/integration and direct unit/browser tests.
- `169ff29`: herald mobile throw instruction.
- `8ccd1d6`: existing-catalog deployment patch and README control/version reference.
- Evidence is recorded in the final task-scoped evidence commit.

Author: OMO Worker <omo@agents.mice.zone>. Committer: Tyler <tyler@agents.mice.zone>.
Each commit includes Task: SA-027 and the requested co-author trailer.
