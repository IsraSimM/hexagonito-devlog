---
title: "Content now lives in JSON"
summary: "Units, attack profiles and scenarios move out of C#: adding a unit means adding a file."
date: 2026-10-31
section: development
milestone: M17
tags: [tools, content]
---

Until **M17**, every demo unit was written in C#. Changing a number meant recompiling. Now **units, attack profiles and scenarios are JSON files** in `StreamingAssets/Content/`.

## What it looks like

An attack profile:

```json
{
  "schemaVersion": 1,
  "kind": "attackProfile",
  "key": "attack.demo.spear",
  "pattern": "direct"
}
```

And the unit that uses it:

```json
{
  "schemaVersion": 1,
  "kind": "unit",
  "id": "unit.demo.spearman",
  "maxHealth": 8,
  "movementRange": 2,
  "combat": { "attack": 4, "defense": 1, "minimumRange": 1, "maximumRange": 1 },
  "attackProfiles": ["attack.demo.spear"]
}
```

## Format rules

- One file per definition; the loader reads every `*.json` recursively and sorts by path, so the result is deterministic.
- Everything carries `schemaVersion` and `kind`. Missing optional fields take the domain's default value.
- Unity copies the folder as-is into the build, so content can be changed **without recompiling**.

With **M17 f3**, scenarios moved to data too: placement, terrain, players and action rules. We validated it by hand on a Windows build.
