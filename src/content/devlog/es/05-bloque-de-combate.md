---
title: "El bloque de combate"
summary: "Contraataque en área, devolución de daño, avance al derrotar, secuencias de ataque y trayectorias por perfil."
date: 2026-10-30
milestone: M15.3
tags: [combate, diseño]
---

Del 27 al 30 de octubre cerramos el bloque de combate. Fueron muchos hitos pequeños; este es el resumen.

## Reglas nuevas

- **Contraataque** (M10.7): solo si el defensor sobrevive y su alcance y trayectoria llegan al atacante. En ataques de área, **solo contraataca el enemigo del centro**; el resto es daño colateral.
- **Devolución de daño** (M10.4): puede exigir que el defensor sobreviva… o no.
- **Avance al derrotar** (M10.5): algunos perfiles de ataque mueven al atacante a la casilla del eliminado. No gasta presupuesto e ignora el alcance de movimiento, pero tiene límite.
- **Gasto en área** (M11.6): un único cargo por activación, sin importar cuántas unidades toque.

## Secuencias de ataque (M10.10 y M15.3)

Cada unidad tiene un **modo de continuación**: *siempre* o *solo si elimina*. Dos ejemplos de la demo:

| Unidad | Comportamiento |
|---|---|
| Lancer | Si elimina, avanza y puede seguir, hasta 2 veces. |
| Reaper | Sigue atacando mientras elimine, sin moverse. |

El HUD muestra "avances x/n" y "secuencia cerrada" para que el jugador sepa cuándo se acabó.

## Trayectoria por perfil (M10.11)

Cada perfil de ataque decide si atraviesa obstáculos de terreno y qué unidades bloquean su trayectoria: todas, solo aliadas, solo enemigas o ninguna.

> Suite al cerrar el bloque: 796 casos, todos en verde.
