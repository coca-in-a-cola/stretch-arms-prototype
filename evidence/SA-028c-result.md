# SA-028c — contact-hands browser acceptance

Status: contact-hands browser acceptance PASS twice; not full SA-028 completion.

Inspected and preserved the existing dirty browser_mobile.py partial lifecycle rewrite and all foreign evidence. The obsolete punch-while-carrying/double-tap expectations are replaced by contact sweep/release expectations. Added held empty-space release/cancel retention and duplicate-release/projectile assertions. New browser captures go to evidence/sa028c-browser/ rather than overwriting earlier captures.

Current src/main.ts contact handlers and src/gestures.ts were inspected; no mechanics changes made. Source scan for double-tap/dblclick/tapRecognizer/TouchGesture/lastTap found zero matches.

## Actual verification

PATH required adding the existing /home/tyler/.bun/bin (initial shell lookup attempts returned 127; nothing installed).

- `bun test`: exit 0; 260 pass, 0 fail, 8819 expect calls across 13 files. Log: `evidence/sa028c-browser/bun-test.log`.
- `bun run build`: exit 0. Log: `evidence/sa028c-browser/build.log`. Existing >500 kB bundle warning remains.
- `PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python -u tests/browser_mobile.py`: final run 1 exit 0; final run 2 exit 0. Logs: `evidence/sa028c-browser/browser-run1.log`, `browser-run2.log`. Both end `All mobile tests passed with zero console errors.`
- `git diff --check`: exit 0.

Both real Chromium runs cover portrait prompt, 667x375/844x390/915x412 mobile views, desktop resize/autowin, empty-hand enemy sweep punch, prop sweep pickup (including repeated move/up without re-pick), held prop swap (one old projectile plus new held prop), held enemy sweep throw rather than punch, release-over-enemy throw, held empty-space release/cancel retention, and duplicate-release projectile identity/count. Held actors are absent from pickable actor probes. Final throws in both runs were flight 24 (whiskey) and 25 (eggs). Only read-only probes and input events are used; no game-state fixtures/mutation.

Five intermediate browser attempts exited 1 and are preserved: `browser-initial-failed.log` (sweep unintentionally crossed a shaker, legitimately swapping then throwing two different props), `browser-clean-ray-timeout1.log` and `browser-clean-ray-timeout2.log` (test unnecessarily required whiff instead of allowing cover along an isolated sweep), `browser-release-target-timeout1.log` and `browser-release-target-timeout2.log` (assumed canvas top row was whiff). Fixed target selection rather than changing correct mechanics. No demonstrated runtime contact defect remains in this acceptance chain. Captures are task-owned; earlier dirty evidence was untouched. HTTP servers are scoped to the Python context manager and shut down on exit; no child-owned background server was started.

NEXT (outside this slice): regenerate herald without paper; scene-anchored sheet rendering instead of HTML; complete remaining owner HUD/release catalog acceptance. Keep SA-028 and stretch-arms card open.
