export type Section = "development" | "art" | "mechanics";
type Bi = { es: string; en: string };

export const sections: Record<Section, { label: Bi; lead: Bi; color: string; icon: string }> = {
  development: {
    label: { es: "Desarrollo", en: "Development" },
    lead: {
      es: "Arquitectura, herramientas, hitos y cómo construimos el juego por dentro.",
      en: "Architecture, tools, milestones and how we build the game under the hood.",
    },
    color: "var(--sec-dev)",
    icon: "</>",
  },
  art: {
    label: { es: "Arte", en: "Art" },
    lead: {
      es: "Concept art, modelos 3D, facciones y la identidad visual de HexaGonito.",
      en: "Concept art, 3D models, factions and HexaGonito's visual identity.",
    },
    color: "var(--sec-art)",
    icon: "✎",
  },
  mechanics: {
    label: { es: "Mecánicas", en: "Mechanics" },
    lead: {
      es: "Reglas de juego: movimiento, combate, habilidades y las decisiones de diseño detrás.",
      en: "Game rules: movement, combat, abilities and the design decisions behind them.",
    },
    color: "var(--sec-mech)",
    icon: "⚔",
  },
};

export const sectionKeys = Object.keys(sections) as Section[];
