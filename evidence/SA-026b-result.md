# SA-026b Final Browser Integration Gap Verification Report

## Actual Status, Updated By SA-026c (2026-10-23)
SA-026b timed out with dirty source/tests retained. The parent ran `bun test` and `bun run build` successfully, then `tests/browser_mobile.py` exited 1 at line 276: the expected punch was still the earlier prop-grab record. Sections below were a plan, not completed verification, and the proposed `window.__game` API is development-only, not the production browser scenario.

SA-026c retained that work and fixed the stale/cached projection harness without changing gameplay rules. Current production tests use real PointerEvents and read-only fresh actor/ray and actual renderer-pose evidence. Final gates all exited 0: 240 Bun tests, production build, and the full six-scenario browser mobile suite with zero page/console errors. Grab, active off-hand punch while holding, ordinary nonthrow, cancel reset, fresh local throw direction and real ballistic projectile lifecycle are asserted. See `evidence/SA-026c-result.md` and `evidence/SA-026c-browser.log` for actual observations, limitations and screenshot paths.

## 1. Context & Scope
- **Task:** SA-026b (Final browser integration gap)
- **Role:** Game / Frontend Engineer
- **Branch:** `prototype`
- **Objective:** Bridge the browser integration testing gaps identified in `evidence/SA-026-acceptance.md` Section 3.2:
  1. Live touch prop grab via pointer drag across projected prop coordinates (`game.held` item acquired).
  2. Next drag strike while holding an item: verify off-hand strikes while the holding hand remains holding the prop.
  3. Deliberate upward swipe near projected enemy: assert `detectUpwardThrow` triggers `executeTouchThrow`, releasing projectile (`game.held` cleared) and selecting/hitting target.
  4. Non-throw assertion: verify ordinary horizontal/diagonal drag while holding does NOT trigger an unintended throw.
  5. Pointer cancel assertion: verify `pointercancel` cleanly resets `touchDrag` and input tracking.
  6. Visual evidence: capture screenshot showing held item and dual-arm posture.

## 2. Test Plan & Regression Scenarios
- **Scenario Name:** `test_mobile_gesture_mechanics` in `tests/browser_mobile.py`
- **Viewport:** 844x390 landscape mobile context (`is_mobile=True, has_touch=True`)
- **Actions:**
  - Start Level 1, skip tutorial flyer.
  - Locate existing prop (e.g. bottle or keg) via `window.__game` / `window.__test.project`.
  - Dispatch pointer drag across prop coordinates; assert `window.__game.held !== null`.
  - Capture screenshot with held item and dual-arm posture (`evidence/sa026b-held-dual-arm.png`).
  - Dispatch ordinary horizontal drag across enemy; assert `window.__game.held` remains held and left arm strikes without throwing.
  - Dispatch pointercancel; assert input state (`touchDrag`) is cleared.
  - Dispatch rapid upward swipe towards projected enemy; assert `window.__game.held === null`, flight projectile launched, and flight/strike registered.

## 3. Verification Commands & Expected Results
- `bun test`: All unit/integration tests exit 0.
- `bun run build`: Production build exit 0.
- `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tests/browser_mobile.py`: Browser integration suite exit 0 with 0 console errors.

## 4. Execution Log & Findings
See the actual-status correction above and SA-026c result; the original plan below is not a passing SA-026b execution claim.
