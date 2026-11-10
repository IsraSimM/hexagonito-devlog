---
title: "Cimientos del dominio: grid, unidades y turnos"
summary: "Una semana de bases: cuadrícula hexagonal, ocupación, turnos y las primeras piezas del combate."
date: 2026-10-14
tags: [arquitectura, combate, hexágonos]
---

Entre el 8 y el 14 de octubre levantamos las piezas sobre las que se apoya todo lo demás. Ninguna se ve bonita en pantalla, pero todas tienen tests.

## La cuadrícula

Usamos **coordenadas axiales (Q, R)**. Con dos ejes basta para direccionar cualquier hexágono, y las distancias y vecinos salen con aritmética simple. Encima va el terreno, que más adelante tendrá peso de movimiento y bloqueos.

## Unidades y ocupación

- Una frontera clara para **crear** y **eliminar** unidades: son entradas internas, no órdenes del jugador.
- **Ocupación exclusiva**: dos unidades nunca comparten casilla.
- Reglas básicas de movimiento hexagonal.

## Turnos

Turnos secuenciales: la ronda empieza en 1 y sube cuando todos los jugadores han jugado. Mover y atacar validan siempre **propietario y jugador activo**.

## Las primeras piezas del combate

En esta misma semana entraron las bases del combate: trayectorias de ataque, **contraataque y devolución de daño**, ataques de **área** y la ejecución de ataques en **cadena**. Todavía sin interfaz: solo reglas, verificadas por tests.

Lo siguiente: que las unidades se muevan por rutas de verdad.
