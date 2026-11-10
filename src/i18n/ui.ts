import { getCollection, type CollectionEntry } from "astro:content";

export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  es: {
    "site.tagline": "Estrategia por turnos sobre un mundo hexagonal",
    "site.description":
      "Devlog de HexaGonito: un juego de estrategia por turnos sobre cuadrícula hexagonal hecho en Unity.",
    "nav.home": "Inicio",
    "nav.devlog": "Devlog",
    "nav.game": "El juego",
    "nav.rss": "RSS",
    "theme.toggle": "Cambiar tema",
    "home.kicker": "Diario de desarrollo",
    "home.title": "Construimos HexaGonito, un hexágono a la vez.",
    "home.lead":
      "Un juego de estrategia por turnos sobre cuadrícula hexagonal. Aquí contamos cada hito: qué hicimos, qué decidimos y qué viene.",
    "home.cta.devlog": "Leer el devlog",
    "home.cta.game": "Conocer el juego",
    "home.latest": "Últimas entradas",
    "home.all": "Ver todas",
    "home.factions": "Facciones",
    "home.factions.lead": "Doce arquetipos por bando. Mismo rol, distinta personalidad.",
    "stats.tests": "tests automatizados",
    "stats.units": "unidades en la demo",
    "stats.milestones": "hitos completados",
    "stats.engine": "motor",
    "devlog.title": "Devlog",
    "devlog.lead": "Todas las entradas, de la más reciente a la más antigua.",
    "devlog.filter": "Filtrar por etiqueta",
    "devlog.all": "Todas",
    "post.readingTime": "min de lectura",
    "post.back": "Volver al devlog",
    "post.prev": "Anterior",
    "post.next": "Siguiente",
    "post.milestone": "Hito",
    "game.title": "El juego",
    "footer.made": "Hecho con Astro. Arte y código © equipo HexaGonito.",
    "lang.switch": "Read in English",
    "404.title": "Casilla fuera del mapa",
    "404.lead": "Esta página no existe. Vuelve al tablero.",
  },
  en: {
    "site.tagline": "Turn-based strategy on a hexagonal world",
    "site.description":
      "HexaGonito devlog: a turn-based strategy game on a hexagonal grid, built in Unity.",
    "nav.home": "Home",
    "nav.devlog": "Devlog",
    "nav.game": "The game",
    "nav.rss": "RSS",
    "theme.toggle": "Toggle theme",
    "home.kicker": "Development diary",
    "home.title": "Building HexaGonito, one hex at a time.",
    "home.lead":
      "A turn-based strategy game on a hexagonal grid. Here we write up every milestone: what we built, what we decided and what comes next.",
    "home.cta.devlog": "Read the devlog",
    "home.cta.game": "About the game",
    "home.latest": "Latest posts",
    "home.all": "See all",
    "home.factions": "Factions",
    "home.factions.lead": "Twelve archetypes per side. Same role, different personality.",
    "stats.tests": "automated tests",
    "stats.units": "units in the demo",
    "stats.milestones": "milestones done",
    "stats.engine": "engine",
    "devlog.title": "Devlog",
    "devlog.lead": "Every post, newest first.",
    "devlog.filter": "Filter by tag",
    "devlog.all": "All",
    "post.readingTime": "min read",
    "post.back": "Back to the devlog",
    "post.prev": "Previous",
    "post.next": "Next",
    "post.milestone": "Milestone",
    "game.title": "The game",
    "footer.made": "Built with Astro. Art and code © the HexaGonito team.",
    "lang.switch": "Leer en español",
    "404.title": "Tile out of bounds",
    "404.lead": "This page doesn't exist. Head back to the board.",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}

/** Une rutas con el `base` del sitio (GitHub Pages sirve en /<repo>/). */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const clean = path.replace(/^\//, "");
  const joined = `${base}/${clean}`;
  // trailingSlash: "always" excepto archivos (rss.xml, favicon.svg...)
  return /\.[a-z0-9]+$/i.test(joined) || joined.endsWith("/") ? joined : `${joined}/`;
}

export const postLang = (p: CollectionEntry<"devlog">) => p.id.split("/")[0] as Lang;
export const postSlug = (p: CollectionEntry<"devlog">) => p.id.split("/").slice(1).join("/");

export async function getPosts(lang: Lang) {
  const all = await getCollection(
    "devlog",
    (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft),
  );
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function readingTime(body = ""): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
