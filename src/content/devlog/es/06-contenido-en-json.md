---
title: "El contenido ahora vive en JSON"
summary: "Unidades, perfiles de ataque y escenarios salen de C#: añadir una unidad es añadir un archivo."
date: 2026-10-31
milestone: M17
tags: [herramientas, contenido]
---

Hasta **M17**, cada unidad de la demo estaba escrita en C#. Cambiar un número exigía recompilar. Ahora **unidades, perfiles de ataque y escenarios son archivos JSON** en `StreamingAssets/Content/`.

## Cómo se ve

Un perfil de ataque:

```json
{
  "schemaVersion": 1,
  "kind": "attackProfile",
  "key": "attack.demo.spear",
  "pattern": "direct"
}
```

Y la unidad que lo usa:

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

## Reglas del formato

- Un archivo por definición; el cargador lee todos los `*.json` de forma recursiva y los ordena por ruta, así que el resultado es determinista.
- Todo lleva `schemaVersion` y `kind`. Los campos opcionales que faltan toman el valor por defecto del dominio.
- Unity copia la carpeta tal cual a la build, así que se puede modificar el contenido **sin recompilar**.

Con **M17 f3** también pasaron a datos los escenarios: colocación, terreno, jugadores y reglas de acciones. Lo validamos a mano en una build de Windows.
