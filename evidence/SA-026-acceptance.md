# SA-026 QA & Acceptance Verification Report

## SA-026c Verified Update (2026-10-23)
This update supersedes the historical gap/readiness claims below. SA-026b timed out and its parent's browser run failed at the held-item enemy sweep; it was not a verified completion.

SA-026c corrected only the integration harness/readback: fresh ray-validated projected actors and same-turn PointerEvents, active actual `drawArm` output, ordinary nonthrow/cancel checks, fresh local upward-throw projection and real ballistic flight lifecycle checks. No gameplay strike rewrite or state injection.

Actual final gates: `bun test` exit 0 (240 pass, 8,646 assertions), `bun run build` exit 0, full `tests/browser_mobile.py` exit 0 with zero page/console errors. All Section 3.2 browser gaps are now exercised. Projectile trajectory matches the local enemy world position; enemy impact is not guaranteed through cover or movement. Build retains its existing large-chunk warning; LSP servers are unavailable.

Current evidence: `evidence/SA-026c-result.md`, `evidence/SA-026c-browser.log`, `evidence/sa026c-held-dual-arm.png` (actual active left fist/right mug). Foreign `mobile-*` and SA-025 evidence preserved. Local verification only; nothing published or pushed. Sections below are the earlier SA-026 report, not evidence of SA-026b success.

## 1. Overview & Execution Context
- **Task:** SA-026 (Touch gesture controls, dual-arm item handling, upward throw aim assist, scene text backplates)
- **Role:** QA / Release Verification Lead
- **Workspace:** `/home/tyler/workspaces/stretch-arms-prototype`
- **Branch:** `prototype`
- **Head Commit:** `720ae8ebf8582db79db67485d13ba3c18c4a1a1b` (`input: add touch drag-follow strikes, dual-arm item holding, and mobile throw`)
- **Parent Commit History for SA-026:**
  - `fcfeb87fc9176fd73841d466b16808a3548f4a8b` (`input: add sweep interpolation, cooldown tracker, and aim assist math`)
  - `86fdaf458760706b3a48c9726e0d50d99e63c56e` (`ui: add high-contrast backplates for scene-overlaid text`)
  - `720ae8ebf8582db79db67485d13ba3c18c4a1a1b` (`input: add touch drag-follow strikes, dual-arm item holding, and mobile throw`)
- **Residual Process Check:** Clean. Zero residual OMO processes or file write operations running.

---

## 2. Real Test Suite Results

### 2.1 Native Unit & Integration Tests (Bun)
- **Command:** `bun test`
- **Binary:** `/home/tyler/.bun/bin/bun`
- **Exit Code:** `0`
- **Results:**
  - **Total Tests Passed:** 240 pass
  - **Total Tests Failed:** 0 fail
  - **Total Assertions:** 8,646 `expect()` calls across 12 test files
  - **Gesture Engine Coverage (`tests/gestures.test.ts`):** 17 tests passed (0.54ms)
    - `sweepSegment`: point interpolation, diagonal movement, anti-tunneling
    - `HitCooldownTracker`: initial hit, per-actor cooldown window, independent actor tracking, reset
    - `detectUpwardThrow`: fast upward swipe detection, slow drag rejection, horizontal pan rejection, downward drag rejection
    - `selectLocalAimEnemy`: local aim assist candidate selection, distance/angle thresholds, occlusion filtering, nearest candidate arbitration

### 2.2 Production Build & Typecheck (Vite & TSC)
- **Command:** `bun run build` (`tsc --noEmit && vite build`)
- **Exit Code:** `0`
- **Build Duration:** 1.20s
- **Output Artifacts:** `dist/index.html` (0.68 kB), `dist/assets/main-hARvbLEi.js` (644.55 kB), `dist/assets/index-B35vuBYx.css` (19.61 kB), `dist/assets/main-BPCdMWV4.css` (6.33 kB)

### 2.3 Browser Mobile Automation Suite (Playwright)
- **Command:** `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tests/browser_mobile.py`
- **Exit Code:** `0`
- **Page & Console Errors:** `0`
- **Scenarios Verified:**
  1. `test_portrait_prompt` (390x844 portrait): orientation prompt display, Russian instruction copy, bypass button >= 44px min-height, transition to start.
  2. `test_landscape_667x375` (iPhone SE): `#punch` and `#grab` buttons removed/hidden, HUD elements visible, simulated touch sweep across projected enemy position.
  3. `test_landscape_844x390` (iPhone 12/13/14): tutorial herald flyer screenshot, briefing skip, `#punch`/`#grab` buttons removed, simulated touch sweep.
  4. `test_landscape_915x412` (Android landscape): level 2 start, pause menu interaction, resume tap.
  5. `test_desktop_regression` (1280x720 / 1024x600): `#punch` and `#grab` controls preserved, KeyW autowin triggers 'КРАСИВО' victory screen.

---

## 3. Proven Capabilities vs Unknown Gaps

### 3.1 Proven Capabilities
- **Touch Button Removal:** Mobile viewports completely suppress `#punch` and `#grab` buttons via `.controls { display: none !important; }` in `@media (pointer: coarse)` and `html[data-touch="true"]`.
- **Text Backplates & Readability:** All overlaid text elements (HUD boxes, stamina, hearts, score, status messages, pan hints, herald tutorial flyers, pause modals) feature high-contrast 1930s rubber-hose backplates.
- **Tutorial Touch Copy:** Herald flyers deliver gesture-specific Russian instructions on touch devices (Level 1: *"Веди пальцем — рука летит за ним! Проведи через врага — УДАР."*, *"Свайп снизу вверх — бросок"*).
- **Desktop Regression:** Desktop controls, mouse clicking, and keyboard shortcuts remain intact without behavioral regressions.
- **Gesture Math:** Sweep interpolation, per-target cooldowns, swipe angle/velocity thresholds, and occlusion-aware local aim assist math are proven via deterministic unit tests.

### 3.2 Unknown Gaps in Test Harness
- **Prop Grab via Drag:** `sweepTouchSegment` implements prop pickup when `shot.kind === 'prop' && game.held === null`. However, `tests/browser_mobile.py` does not navigate a touch drag across a prop coordinate to assert prop pickup in browser automation.
- **Live Upward Throw Execution:** `tests/browser_mobile.py` executes horizontal drags (`x` delta +60-70px, `y` constant). No upward swipe (`detectUpwardThrow`) while holding an item is dispatched in the browser integration test.
- **Dual-Arm Posture in Browser DOM:** While `drawArm` logic forces the striking arm to `-1` (left) when `game.held` is active and leaves side `1` (right) open to hold the prop, this dual-arm visual state is not asserted in the browser integration harness.

---

## 4. Screenshot Evidence Paths
The following test screenshots were generated and verified on disk:
- `evidence/sa026-tutorial-844x390.png`: Herald tutorial flyer with high-contrast backplate and updated touch copy.
- `evidence/sa026-mobile-667x375.png`: iPhone SE landscape gameplay with touch drag, status pill, and hidden button bar.
- `evidence/sa026-mobile-844x390.png`: iPhone 12/13/14 landscape gameplay with clean scene visibility.
- `evidence/sa026-mobile-915x412.png`: Android landscape viewport pause modal with readable buttons and backplates.
- `evidence/sa026-desktop.png`: Desktop regression showing victory screen and visible desktop controls.

*Foreign baseline evidence preserved untouched:*
- `evidence/mobile-667x375.png`
- `evidence/mobile-844x390.png`
- `evidence/mobile-915x412.png`
- `evidence/mobile-portrait-prompt.png`
- `evidence/SA-025-*`

---

## 5. Commit & Release Readiness Assessment
- **Local Prototype Branch:** **READY & COMMITTED**. The task changes were committed cleanly in commit `720ae8e` with the approved author `Tyler <tyler@agents.mice.zone>` and trailers (`Task: SA-026`, `Co-authored-by: Дмитрий Дронов <coca-in-a-cola@protonmail.com>`).
- **Remote Publishing / GitHub Pages:** **HOLD / PENDING AUTHORIZED DEVOPS ROUTE**. Remote writes and direct pushes are strictly prohibited for this verification role.

---

## 6. Exact Next Authorized Route
To release SA-026 changes to production without polluting the working tree:
1. **Isolated Worktree Release:**
   ```bash
   git worktree add ../wt-ghpages gh-pages
   cd ../wt-ghpages
   # Copy build artifacts from prototype dist/ into root and new version release directory (e.g., r11-gestures/)
   # Preserve all historical release folders: r3-bw, r4-bar, r5-props, r6-bar-first, r7-balanced, r7-friends, r8-herald, r9-showcase, r10-mobile
   git add -A
   git commit -m "release: SA-026 touch gestures, dual-arm item handling, and text backplates"
   git push origin gh-pages
   cd /home/tyler/workspaces/stretch-arms-prototype
   git worktree remove ../wt-ghpages
   ```
2. **Card Governance:** Kanban card `t_dc642899` is maintained for tracking; do not mark closed until release publication is validated by the project owner.
