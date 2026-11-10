---
title: "Vertical slice: la primera partida completa"
summary: "Dos jugadores, catorce unidades y una partida de principio a fin. HexaGonito ya se juega."
date: 2026-10-26
milestone: M15
tags: [hito, jugable, presentación]
---

Con **M15** HexaGonito pasó de ser un conjunto de reglas a ser un juego: una **partida completa de dos jugadores en hot-seat**.

## Qué se puede hacer

- Seleccionar una unidad y ver su **alcance y objetivos** resaltados.
- Moverla por su ruta real, atacar y terminar el turno.
- Ganar por **aniquilación**, o empatar si ambos bandos se quedan sin unidades a la vez (sí, puede pasar con la devolución de daño).
- Reiniciar con confirmación.

## Presupuesto de acciones

El mismo día entraron **M15.1** y **M11.5**: cada unidad tiene movimientos y ataques por turno (normalmente 1, con excepciones), con contadores independientes. Mover, atacar y volver a mover es válido si la unidad tiene 2 movimientos y 1 ataque. El gasto de ataques y cadenas comparte las mismas garantías de atomicidad.

## Unidades que frenan cadenas

Con **M10.6** algunas unidades **detienen un ataque en cadena** al ser golpeadas, aunque mueran. Es una característica que se puede activar o desactivar, en la propia unidad o en otras: la primera pista de que las habilidades iban a necesitar un sistema propio.

> El número de casos de test ya pasaba de 440. Cada regla nueva llega con los suyos.
