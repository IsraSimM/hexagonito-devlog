---
title: "Domain foundations: grid, units and turns"
summary: "A week of groundwork: hex grid, occupancy, turns and the first pieces of combat."
date: 2026-10-14
section: development
tags: [architecture, combat, hexes]
---

Between October 8 and 14 we built the pieces everything else rests on. None of them look pretty on screen, but all of them have tests.

## The grid

We use **axial coordinates (Q, R)**. Two axes are enough to address any hex, and distances and neighbours come out of simple arithmetic. Terrain sits on top, and will later get movement weights and blockers.

## Units and occupancy

- A clear boundary for **creating** and **removing** units: these are internal inputs, not player orders.
- **Exclusive occupancy**: two units never share a tile.
- Basic hex movement rules.

## Turns

Sequential turns: the round starts at 1 and increases once every player has played. Moving and attacking always validate **owner and active player**.

## The first pieces of combat

The same week brought the combat basics: attack trajectories, **counterattacks and damage return**, **area** attacks and **chain** attack execution. Still no UI: just rules, verified by tests.

Next up: making units move along real paths.
