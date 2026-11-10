---
title: "Habilidades y efectos con duración"
summary: "Un diseño para habilidades, efectos, invocaciones y terreno alterable, y las primeras habilidades jugables."
date: 2026-11-06
milestone: M21
tags: [habilidades, diseño, combate]
---

Antes de escribir código, **M18** fue un hito solo de diseño: cómo encajar habilidades, efectos, invocaciones, objetos de mapa y terreno alterable sin romper nada de lo que ya funcionaba.

## La idea central

- Un único agregado nuevo de estado, `AbilityRuntimeState`, con efectos activos, invocaciones, objetos de mapa, alteraciones de terreno y enfriamientos.
- **Un solo contador de turnos** (`TurnCountdown`) para todo lo que dura: efectos, enfriamientos, terreno temporal… Baja uno al inicio del turno del jugador que marca su reloj.
- Todo **aditivo**: sin habilidades configuradas, el juego se comporta exactamente igual que antes.

## Lo que ya está hecho

- **M19**: los cimientos (agregado, contador, ids en el estado).
- **M20**: efectos con duración. El primero, el **veneno**.
- **M21**: habilidades. Funcionan como ataques: objetivo único o área, filtro de a quién afectan y colores propios. Cada habilidad tiene **su botón**; hay unidades, como los curanderos, que no tienen ataque normal.

Las dos habilidades de prueba: un **dardo envenenado** en línea recta y una **curación en área**.

> Suite tras M21: 1 365 casos.
