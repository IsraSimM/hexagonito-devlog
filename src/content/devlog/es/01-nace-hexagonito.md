---
title: "Nace HexaGonito"
summary: "Primer commit, primeras reglas: por qué empezamos por la arquitectura y no por los gráficos."
date: 2026-10-06
tags: [anuncio, arquitectura]
---

El 6 de octubre de 2026 hicimos el primer commit de **HexaGonito**: un proyecto de Unity vacío y dos documentos, `ARCHITECTURE.md` y `AI_RULES.md`. Ni una unidad, ni un hexágono en pantalla.

## ¿Qué es HexaGonito?

Un juego de **estrategia por turnos sobre una cuadrícula hexagonal**. La visión a largo plazo es grande: mundos procedurales, ciudades, economía, tecnología, diplomacia, IA avanzada y multijugador. Precisamente por eso empezamos al revés de lo habitual.

## Primero los cimientos

La fase actual se llama *Foundation / Architecture* y su objetivo **no** es hacer el juego completo, sino una base que permita añadir sistemas sin reescribir el núcleo. Tres reglas guían todo:

- **Dominio puro**: las reglas del juego viven en C# sin `UnityEngine`. Se pueden probar sin abrir el editor.
- **Determinismo**: la misma partida con las mismas órdenes da siempre el mismo resultado.
- **Comandos y eventos**: un comando es una *solicitud*; un evento es un *hecho*. Si una acción se rechaza, el estado no cambia.

## ¿Por qué un devlog?

Porque cada hito obliga a tomar decisiones de diseño, y queremos dejarlas por escrito: qué elegimos, qué descartamos y por qué. Aquí iremos contando el camino, hito a hito.

> Bienvenidos al tablero.
