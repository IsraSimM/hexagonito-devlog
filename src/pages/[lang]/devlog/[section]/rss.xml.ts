import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, langs, postSlug, url, type Lang } from "../../../../i18n/ui";
import { sections, sectionKeys, type Section } from "../../../../data/sections";

export function getStaticPaths() {
  return langs.flatMap((lang) => sectionKeys.map((section) => ({ params: { lang, section } })));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const section = context.params.section as Section;
  const posts = (await getPosts(lang)).filter((p) => p.data.section === section);
  return rss({
    title: `HexaGonito · ${sections[section].label[lang]} (${lang.toUpperCase()})`,
    description: sections[section].lead[lang],
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      categories: post.data.tags,
      link: url(`${lang}/devlog/${postSlug(post)}/`),
    })),
    customData: `<language>${lang === "es" ? "es-mx" : "en-us"}</language>`,
  });
}
