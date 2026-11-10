---
title: "The combat block"
summary: "Area counterattacks, damage return, advancing on defeat, attack sequences and per-profile trajectories."
date: 2026-10-30
milestone: M15.3
tags: [combat, design]
---

From October 27 to 30 we closed the combat block. Lots of small milestones; here's the summary.

## New rules

- **Counterattack** (M10.7): only if the defender survives and its range and trajectory reach the attacker. On area attacks, **only the enemy at the centre counterattacks**; the rest is collateral damage.
- **Damage return** (M10.4): may require the defender to survive… or not.
- **Advance on defeat** (M10.5): some attack profiles move the attacker into the defeated unit's tile. It costs no budget and ignores movement range, but it has a cap.
- **Area spending** (M11.6): one charge per activation, however many units it hits.

## Attack sequences (M10.10 and M15.3)

Each unit has a **continuation mode**: *always* or *only on kill*. Two examples from the demo:

| Unit | Behaviour |
|---|---|
| Lancer | On a kill, advances and may continue, up to 2 times. |
| Reaper | Keeps attacking while it kills, without moving. |

The HUD shows "advances x/n" and "sequence closed" so the player knows when it's over.

## Per-profile trajectory (M10.11)

Each attack profile decides whether it passes through terrain obstacles and which units block its path: all, allies only, enemies only, or none.

> Suite at the end of the block: 796 cases, all green.
