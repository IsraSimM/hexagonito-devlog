---
title: "Vertical slice: the first complete match"
summary: "Two players, fourteen units and a match from start to finish. HexaGonito is now playable."
date: 2026-10-26
milestone: M15
tags: [milestone, playable, presentation]
---

With **M15** HexaGonito went from a set of rules to a game: a **complete two-player hot-seat match**.

## What you can do

- Select a unit and see its **range and targets** highlighted.
- Move it along its real path, attack and end the turn.
- Win by **annihilation**, or draw if both sides run out of units at the same time (yes, damage return makes that possible).
- Restart with confirmation.

## Action budget

**M15.1** and **M11.5** landed the same day: each unit has moves and attacks per turn (usually 1, with exceptions), with independent counters. Move, attack and move again is valid if the unit has 2 moves and 1 attack. Spending on attacks and chains shares the same atomicity guarantees.

## Units that stop chains

With **M10.6** some units **stop a chain attack** when hit, even if they die. It's a trait that can be switched on or off, on the unit itself or on others: the first hint that abilities would need a system of their own.

> The test suite had already passed 440 cases. Every new rule ships with its own.
