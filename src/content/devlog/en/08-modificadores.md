---
title: "Modifiers: stun, silence, shields and invulnerability"
summary: "Buffs, debuffs and action locks that change a unit's effective stats."
date: 2026-11-08
section: mechanics
milestone: M22
tags: [abilities, combat]
---

**M22** adds the layer that makes abilities interesting: **modifiers**. We built it in four phases, each with a green suite.

## Phase 1: model and query (inert)

First, the data model and an **effective stats** query that didn't affect anything yet. That let us confirm the rest of the game stayed identical.

## Phase 2: locks

Action locks by category:

- **Stun**: can't act.
- **Root**: can't move.
- **Silence**: can't use abilities.

Effective movement and range can also go up or down.

## Phase 3: attack, defence and invulnerable

**Flat and percentage** buffs and debuffs: flats add up, percentages multiply, and nothing goes below 0. Also **modified damage taken** and the **invulnerable** state.

## Phase 4: shield

A shield has an amount and a duration, and absorbs damage **before health**.

One simple rule for all of it: there's no limit on effects per unit, but **the same effect replaces itself**, it doesn't stack.

## What's next?

Movement modes and teleport, summons and alterable terrain.
