import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
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

export const collections = { devlog };
