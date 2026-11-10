import { getCollection, type CollectionEntry } from "astro:content";

export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";
export const langs = Object.keys(languages) as Lang[];

export const ui = {
  es: {
    "site.tagline": "Estrategia por turnos sobre un mundo hexagonal",
    "site.description":
      "HexaGonito, de Stinky Interactive: estrategia por turnos sobre cuadrícula hexagonal. Devlog, facciones y lanzamiento.",
    "nav.home": "Inicio",
    "nav.devlog": "Devlog",
    "nav.game": "El juego",
    "nav.factions": "Facciones",
    "nav.press": "Prensa",
    "nav.rss": "RSS",
    "studio.presents": "Stinky Interactive presenta",
    "launch.soon": "Próximamente",
    "launch.release": "Lanzamiento",
    "launch.tba": "Fecha por anunciar",
    "launch.steam": "Añadir a la lista de deseos en Steam",
    "launch.itch": "Seguir en itch.io",
    "launch.days": "días",
    "launch.hours": "horas",
    "launch.minutes": "min",
    "launch.out": "¡Ya disponible!",
    "launch.trailer": "Tráiler",
    "sections.title": "Tres frentes de desarrollo",
    "sections.posts": "entradas",
    "sections.see": "Ver sección",
    "factions.title": "Facciones",
    "factions.lead": "Dos bandos, doce roles cada uno. Mismo rol, distinta personalidad.",
    "factions.units": "Unidades",
    "factions.stats": "Estadísticas",
    "factions.tbd": "Por definir",
    "factions.sheet": "Hoja de modelo",
    "factions.see": "Ver facción",
    "factions.health": "Vida",
    "factions.attack": "Ataque",
    "factions.defense": "Defensa",
    "factions.move": "Movimiento",
    "factions.range": "Alcance",
    "factions.flip": "Habilidades e historia",
    "factions.flipBack": "Volver",
    "factions.passive": "Pasiva",
    "factions.abilities": "Habilidades",
    "factions.story": "Historia",
    "factions.cooldown": "turnos de enfriamiento",
    "factions.cost": "Coste",
    "factions.storyTbd": "Historia por escribir",
    "factions.viewSheet": "Ver hoja de modelo",
    "press.title": "Kit de prensa",
    "press.lead": "Todo lo que necesitas para escribir sobre HexaGonito.",
    "theme.toggle": "Cambiar tema",
    "home.kicker": "Diario de desarrollo",
    "home.title": "Construimos HexaGonito, un hexágono a la vez.",
    "home.lead":
      "Dos facciones, doce roles cada una y un tablero donde cada casilla cuenta. Aquí contamos cómo lo construimos: desarrollo, arte y mecánicas, hito a hito.",
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
    "footer.made": "HexaGonito es un juego de Stinky Interactive.",
    "lang.switch": "Read in English",
    "404.title": "Casilla fuera del mapa",
    "404.lead": "Esta página no existe. Vuelve al tablero.",
  },
  en: {
    "site.tagline": "Turn-based strategy on a hexagonal world",
    "site.description":
      "HexaGonito by Stinky Interactive: turn-based strategy on a hexagonal grid. Devlog, factions and launch.",
    "nav.home": "Home",
    "nav.devlog": "Devlog",
    "nav.game": "The game",
    "nav.factions": "Factions",
    "nav.press": "Press",
    "nav.rss": "RSS",
    "studio.presents": "Stinky Interactive presents",
    "launch.soon": "Coming soon",
    "launch.release": "Release",
    "launch.tba": "Release date TBA",
    "launch.steam": "Wishlist on Steam",
    "launch.itch": "Follow on itch.io",
    "launch.days": "days",
    "launch.hours": "hours",
    "launch.minutes": "min",
    "launch.out": "Out now!",
    "launch.trailer": "Trailer",
    "sections.title": "Three fronts of development",
    "sections.posts": "posts",
    "sections.see": "Open section",
    "factions.title": "Factions",
    "factions.lead": "Two sides, twelve roles each. Same role, different personality.",
    "factions.units": "Units",
    "factions.stats": "Stats",
    "factions.tbd": "To be defined",
    "factions.sheet": "Model sheet",
    "factions.see": "View faction",
    "factions.health": "Health",
    "factions.attack": "Attack",
    "factions.defense": "Defence",
    "factions.move": "Movement",
    "factions.range": "Range",
    "factions.flip": "Abilities & story",
    "factions.flipBack": "Back",
    "factions.passive": "Passive",
    "factions.abilities": "Abilities",
    "factions.story": "Story",
    "factions.cooldown": "turn cooldown",
    "factions.cost": "Cost",
    "factions.storyTbd": "Story to be written",
    "factions.viewSheet": "View model sheet",
    "press.title": "Press kit",
    "press.lead": "Everything you need to write about HexaGonito.",
    "theme.toggle": "Toggle theme",
    "home.kicker": "Development diary",
    "home.title": "Building HexaGonito, one hex at a time.",
    "home.lead":
      "Two factions, twelve roles each and a board where every tile matters. Here we tell how we build it: development, art and mechanics, milestone by milestone.",
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
    "footer.made": "HexaGonito is a game by Stinky Interactive.",
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
