---
title: "Rutas reales, sesión de juego y algo en pantalla"
summary: "Movimiento con Dijkstra y terreno con peso, una fachada de sesión y la primera presentación mínima."
date: 2026-10-25
section: mechanics
milestone: M12
tags: [movimiento, hexágonos, presentación]
---

El 25 de octubre cerramos tres hitos seguidos: **M12, M13 y M14**.

## M12: movimiento por ruta real

Antes una unidad "saltaba" a cualquier casilla a su alcance. Ahora se mueve por una **ruta real**, calculada con Dijkstra determinista:

- Cada terreno tiene un `MovementWeight` (entero ≥ 1). El alcance de movimiento se mide como **coste de ruta**, no como distancia.
- Los terrenos que bloquean no se pueden atravesar, y las unidades tampoco: si hay alguien en medio, la unidad **rodea** y gasta más alcance.
- Si hay dos rodeos con el mismo coste, gana el de menor Q. Determinismo ante todo.

Los errores también tienen un orden fijo: fuera del grid, posición actual, destino bloqueado, inalcanzable, fuera de alcance, ocupado… Así la interfaz siempre sabe explicar *por qué* no.

## M13: la sesión de juego

`GameSession` es la fachada entre el dominio y la presentación: mover, atacar, terminar turno y **consultas** (¿a dónde puedo ir?, ¿a quién puedo atacar?). La condición de victoria se inyecta, para que cada modo de juego pueda tener la suya.

## M14: presentación mínima

Por fin, hexágonos en pantalla: cámara ortográfica, Input System y uGUI. Un único `MonoBehaviour` de arranque; el resto de la lógica de presentación es pura y testeable.
