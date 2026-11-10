import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Entradas del devlog.
 * Ruta: src/content/devlog/<idioma>/<slug>.md
 * La traducción de una entrada usa el MISMO nombre de archivo en la otra carpeta.
 */
const devlog = defineCollection({
  loader: glob({ base: "./src/content/devlog", pattern: "**/[^_]*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      /** Sección del devlog: development (Desarrollo), art (Arte) o mechanics (Mecánicas). */
      section: z.enum(["development", "art", "mechanics"]),
      tags: z.array(z.string()).default([]),
      /** Hito del plan, p. ej. "M22". Se muestra como insignia hexagonal. */
      milestone: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const bi = z.object({ es: z.string(), en: z.string() });

/** Roles de unidad: src/content/roles.yaml */
const roles = defineCollection({
  loader: file("src/content/roles.yaml"),
  schema: z.object({ label: bi, color: z.string() }),
});

/** Facciones: src/content/factions/<id>.yaml */
const factions = defineCollection({
  loader: glob({ base: "./src/content/factions", pattern: "*.yaml" }),
  schema: ({ image }) =>
    z.object({
      /** Parte de la URL: /<idioma>/factions/<path>/ (no usar "slug": Astro lo toma como id). */
      path: z.string(),
      order: z.number(),
      accent: z.string(),
      accent2: z.string(),
      cardStyle: z.enum(["clean", "rugged"]).default("clean"),
      sheet: image(),
      es: z.object({ name: z.string(), motto: z.string(), lead: z.string() }),
      en: z.object({ name: z.string(), motto: z.string(), lead: z.string() }),
    }),
});

/** Textos de una unidad en un idioma. Todo lo opcional se muestra como "Por definir". */
const unitText = z.object({
  name: z.string(),
  title: z.string(),
  summary: z.string(),
  passive: z.object({ name: z.string(), text: z.string() }).nullish(),
  abilities: z
    .array(
      z.object({
        name: z.string(),
        text: z.string(),
        cooldown: z.number().optional(),
        cost: z.string().optional(),
      }),
    )
    .nullish()
    .transform((a) => a ?? []),
  story: z.string().nullish(),
});

/** Unidades: src/content/units/<facción>/<rol>.yaml */
const units = defineCollection({
  loader: glob({ base: "./src/content/units", pattern: "**/*.yaml" }),
  schema: ({ image }) =>
    z.object({
      faction: reference("factions"),
      role: reference("roles"),
      order: z.number(),
      portrait: image(),
      stats: z
        .object({
          health: z.number(),
          attack: z.number(),
          defense: z.number(),
          move: z.number(),
          range: z.union([z.string(), z.number()]),
        })
        .nullish(),
      es: unitText,
      en: unitText,
    }),
});

export const collections = { devlog, roles, factions, units };
