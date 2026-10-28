# SA-028g — native runtime screenshot visual review

**Verdict: PASS for the six supplied regular tutorial screenshots.** No blocking visual defects observed. Reviewed the attached image pixels directly, not a geometry report. These are browser-emulator captures, not physical-phone validation.

Context supplied by owner: SA-028f, HEAD `6a12463a01baafae2d57d044fc37c5c5adb7fbff`. This review does not independently verify the checkout or running test process.

## Exact screenshot evidence

All paths below are relative to the repository root.

| Screenshot | Visual result |
| --- | --- |
| `evidence/sa028f-scene/740x300-sheet-1.png` | PASS. Instruction heading/body and sheet counter readable at this compact size. Paper stays within the scene, upper hand contacts the left edge and lower palm supports its bottom-left corner. HUD/pause/acknowledge remain in side gutters. |
| `evidence/sa028f-scene/740x300-sheet-5.png` | PASS. Riddle lines and final-sheet counter fit without text clipping. Same plausible hand/paper contact and gutter separation. |
| `evidence/sa028f-scene/844x320-sheet-1.png` | PASS. Instruction lines fit, with clean paper framing; both support contacts remain aligned. No HUD/control intrusion into the scene. |
| `evidence/sa028f-scene/667x375-sheet-5.png` | PASS. Smaller centered play scene remains readable, including the riddle and counter. Acknowledge text wraps within its gutter button without clipping. No floating-paper gap apparent. |
| `evidence/sa028f-scene/915x412-sheet-1.png` | PASS. Clear title and body, paper frame inside scene, lower palm visibly supports the paper and raised hand meets its left edge. Side controls remain outside play. |
| `evidence/sa028f-scene/1280x720-sheet-5.png` | PASS. Riddle and counter clearly readable. Large view confirms sensible hand/paper contact, clean paper border, and gutter-only HUD/controls. |

## Scope checks

- One visible paper surface per screenshot; no old baked-in sheet, duplicate paper, or remotely floating replacement is apparent.
- Lean character has two coherent visible arm/hand connections; no third arm or detached forearm is visible in these captures. The rejected point pose is not required for this acceptance and is not approved here.
- Visible player gloves stay at the bottom foreground, below the paper/text and without a visible layering conflict. Their cropping at the play-scene lower boundary reads as foreground framing, not clipped tutorial content.
- Headings, body lines, counters and gutter labels are visually readable in the supplied pixels. No numeric minimum-font measurement was independently performed.
- The aiming reticle overlaps a small part of tutorial text in some captures, but text remains decipherable; this is not a blocking defect in this review.
- No visible detached HTML-sheet placement or scene-obscuring gameplay control appears in these screenshots. Static pixels cannot prove DOM/canvas implementation or motion stability.

**Not tested:** mad/tear states, transitions or animation, other tutorial pages/viewports, physical phones, or the parent's ongoing full herald test. No unit/build/mobile gate result is claimed from this visual review. No implementation changes, browser actions, generation or publication performed.
