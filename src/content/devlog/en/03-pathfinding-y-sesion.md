---
title: "Real paths, a game session and something on screen"
summary: "Dijkstra movement over weighted terrain, a session facade and the first minimal presentation."
date: 2026-10-25
milestone: M12
tags: [movement, hexes, presentation]
---

On October 25 we closed three milestones in a row: **M12, M13 and M14**.

## M12: moving along real paths

Before, a unit "jumped" to any tile within range. Now it moves along a **real path**, computed with deterministic Dijkstra:

- Each terrain has a `MovementWeight` (integer ≥ 1). Movement range is measured as **path cost**, not distance.
- Blocking terrain can't be crossed, and neither can units: if someone is in the way, the unit **goes around** and spends more range.
- When two detours cost the same, the one with the lower Q wins. Determinism above all.

Errors have a fixed order too: off the grid, current position, blocked destination, unreachable, out of range, occupied… So the UI can always explain *why not*.

## M13: the game session

`GameSession` is the facade between domain and presentation: move, attack, end turn, and **queries** (where can I go? whom can I attack?). The victory condition is injected, so each game mode can have its own.

## M14: minimal presentation

Finally, hexes on screen: orthographic camera, Input System and uGUI. One bootstrap `MonoBehaviour`; the rest of the presentation logic is pure and testable.
