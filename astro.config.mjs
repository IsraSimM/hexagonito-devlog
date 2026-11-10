// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE y BASE los define el workflow de GitHub Pages a partir del nombre del repo.
// Valores por defecto: https://israsimm.github.io/hexagonito-devlog
const site = process.env.SITE ?? "https://israsimm.github.io";
const base = process.env.BASE ?? "/hexagonito-devlog";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-MX", en: "en-US" } },
    }),
  ],
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
