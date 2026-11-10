/**
 * Datos del juego que aparecen en Inicio y en "El juego".
 * Actualízalos al cerrar cada hito (fuente: PROJECT_STATUS.md y PLAN_Hitos.md del repo del juego).
 */
export const stats = {
  tests: "1 397",
  units: "14",
  milestones: "25+",
  engine: "Unity 6.3",
};

type Bi = { es: string; en: string };

export const features: { icon: string; title: Bi; text: Bi }[] = [
  {
    icon: "⬢",
    title: { es: "Tablero hexagonal", en: "Hex board" },
    text: {
      es: "Coordenadas axiales, terreno con peso de movimiento y rutas reales calculadas con Dijkstra.",
      en: "Axial coordinates, weighted terrain and true paths computed with Dijkstra.",
    },
  },
  {
    icon: "⚔",
    title: { es: "Combate táctico", en: "Tactical combat" },
    text: {
      es: "Ataques directos, de área y en cadena; contraataques, devolución de daño y avance al derrotar.",
      en: "Direct, area and chain attacks; counterattacks, damage return and advancing on defeat.",
    },
  },
  {
    icon: "✦",
    title: { es: "Habilidades y efectos", en: "Abilities & effects" },
    text: {
      es: "Veneno, curación en área, escudos, aturdir, silenciar e invulnerabilidad con duración en turnos.",
      en: "Poison, area heals, shields, stun, silence and invulnerability with turn-based durations.",
    },
  },
  {
    icon: "{ }",
    title: { es: "Contenido en datos", en: "Data-driven content" },
    text: {
      es: "Unidades, perfiles de ataque y escenarios viven en JSON: añadir una unidad es añadir un archivo.",
      en: "Units, attack profiles and scenarios live in JSON: adding a unit means adding a file.",
    },
  },
];

export const roadmap: { status: "done" | "next" | "later"; label: Bi }[] = [
  { status: "done", label: { es: "Partida completa de 2 jugadores (hot-seat)", en: "Full 2-player hot-seat match" } },
  { status: "done", label: { es: "Bloque de combate completo", en: "Complete combat block" } },
  { status: "done", label: { es: "Capa de contenido en JSON", en: "JSON content layer" } },
  { status: "done", label: { es: "Habilidades, efectos y modificadores", en: "Abilities, effects and modifiers" } },
  { status: "next", label: { es: "Modos de movimiento y teletransporte", en: "Movement modes and teleport" } },
  { status: "next", label: { es: "Invocaciones y terreno alterable", en: "Summons and alterable terrain" } },
  { status: "later", label: { es: "Reclutamiento, ciudades y economía", en: "Recruiting, cities and economy" } },
  { status: "later", label: { es: "Cámara 3D, animaciones e IA", en: "3D camera, animation and AI" } },
  { status: "later", label: { es: "Guardado y multijugador", en: "Save games and multiplayer" } },
];
