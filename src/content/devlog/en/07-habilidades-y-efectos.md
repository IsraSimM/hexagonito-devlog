---
title: "Abilities and timed effects"
summary: "A design for abilities, effects, summons and alterable terrain, plus the first playable abilities."
date: 2026-11-06
section: mechanics
milestone: M21
tags: [abilities, design, combat]
---

Before writing any code, **M18** was a design-only milestone: how to fit abilities, effects, summons, map objects and alterable terrain without breaking anything that already worked.

## The core idea

- A single new state aggregate, `AbilityRuntimeState`, holding active effects, summons, map objects, terrain changes and cooldowns.
- **One turn counter** (`TurnCountdown`) for everything that lasts: effects, cooldowns, temporary terrain… It ticks down at the start of the turn of the player who owns its clock.
- Everything is **additive**: with no abilities configured, the game behaves exactly as before.

## What's done

- **M19**: the foundations (aggregate, counter, ids in the state).
- **M20**: timed effects. The first one: **poison**.
- **M21**: abilities. They work like attacks: single target or area, a filter for whom they affect, and their own colours. Each ability gets **its own button**; some units, like healers, have no normal attack at all.

The two test abilities: a straight-line **poison dart** and an **area heal**.

> Suite after M21: 1,365 cases.
