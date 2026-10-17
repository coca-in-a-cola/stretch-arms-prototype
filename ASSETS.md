# Ассеты и происхождение

| Файл | Что это | Генератор | Обработка |
|---|---|---|---|
| `public/assets/gemini-bully-solo.jpg` | концепт задиры-кота (rubber-hose, 1930-е) | Gemini image model (через Tyler) | — исходник |
| `public/assets/gemini-dog-solo.jpg` | концепт пса с нимбом | Gemini image model (через Tyler) | — исходник |
| `public/assets/bully.png` | RGBA-спрайт задиры 512×640, ноги внизу | из `gemini-bully-solo.jpg` | Claude: `tools/cut_sprites.py` — заливка фона от краёв, мягкая кромка, обрезка, вписывание |
| `public/assets/dog_halo.png` | RGBA-спрайт пса 512×640 (нарисованный нимб убран — в игре он анимированный) | из `gemini-dog-solo.jpg` | Claude: `tools/cut_sprites.py` |
| `art/gemini-flash-pov-master.jpg` | старый концепт руки от первого лица (только референс, в сборку не входит) | Gemini image model (через Tyler) | — исходник |

Процедурно в рантайме (Canvas 2D / Three.js): руки игрока (шланг + перчатка, `src/arm.ts`; растровые `pov_*.png` удалены в SA-V2-12), нимб, звёздочки нокаута, тучка грустного пса, комикс-вспышки, бутылка и бочонок, неоновые вывески, гирлянды, всё 3D-окружение, небо-градиенты уровней. Звук — синтез Web Audio, без файлов.

Пересборка спрайтов персонажей:
```sh
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .venv-browser/bin/python tools/cut_sprites.py
```
