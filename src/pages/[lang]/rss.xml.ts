import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, langs, postSlug, t, url, type Lang } from "../../i18n/ui";

export function getStaticPaths() {
  return langs.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const posts = await getPosts(lang);
  return rss({
    title: `HexaGonito Devlog (${lang.toUpperCase()})`,
    description: t(lang, "site.description"),
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
