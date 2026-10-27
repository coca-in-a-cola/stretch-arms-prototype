# SA-028: viewport stage and shared coordinates

## Scope and Source
- Source SHA: 9b966aa9208bfda9d0f99df6d0809e2fe2d66658 (`prototype`).
- First increment only: standard landscape stage, outside gameplay rails, shared screen/stage coordinate conversion and regression coverage.
- Existing dirty mobile, SA-025, SA-026 and SA-027 evidence is foreign and must remain untouched.

## Implementation
In progress. Inspection confirms WebGL sizing uses visualViewport dimensions, but CSS fixes the canvas to the full layout viewport. Several overlay/ultimate paths still use innerWidth/innerHeight; stage offsets therefore require a shared conversion, not larger hitboxes. Physical-device root cause is not independently verified.

## Verification
- Baseline `bun test`: exit 0, 249 pass, 0 fail, 8661 assertions (before implementation).
- Not yet run: post-implementation bun test; bun run build; production-browser viewport/input regressions.
- Screenshots: pending; new captures will use SA-028-specific paths.
- No physical smartphone verification claimed.

## Mandatory Follow-up (Not Implemented Here)
- Replace all mobile tap/double-tap recognition with contact-driven behavior: empty hand/enemy punch; empty hand/prop grab; carrying/prop throw old and grab new; carrying/enemy crossing or release over enemy throws.
- Regenerate herald art without baked-in paper; render paper in the scene rather than drifting DOM.
- Preserve existing double-tap semantics until that complete input increment. No publication of this partial redesign.
