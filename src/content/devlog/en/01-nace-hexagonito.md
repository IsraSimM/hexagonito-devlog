---
title: "HexaGonito is born"
summary: "First commit, first rules: why we started with architecture instead of graphics."
date: 2026-10-06
tags: [announcement, architecture]
---

On October 6, 2026 we made the first commit to **HexaGonito**: an empty Unity project and two documents, `ARCHITECTURE.md` and `AI_RULES.md`. Not a single unit, not a single hex on screen.

## What is HexaGonito?

A **turn-based strategy game on a hexagonal grid**. The long-term vision is big: procedural worlds, cities, economy, technology, diplomacy, advanced AI and multiplayer. That is exactly why we started the other way around.

## Foundations first

The current phase is called *Foundation / Architecture*, and its goal is **not** to build the whole game but a base that lets us add systems without rewriting the core. Three rules guide everything:

- **Pure domain**: game rules live in C# with no `UnityEngine`. They can be tested without opening the editor.
- **Determinism**: the same match with the same orders always gives the same result.
- **Commands and events**: a command is a *request*; an event is a *fact*. If an action is rejected, the state does not change.

## Why a devlog?

Because every milestone forces design decisions, and we want them written down: what we chose, what we dropped and why. We'll tell the story here, milestone by milestone.

> Welcome to the board.
