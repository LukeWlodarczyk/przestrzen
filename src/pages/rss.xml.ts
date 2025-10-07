import type { APIRoute } from "astro";
import rss from "@astrojs/rss";

import { DYNAMIC_ROUTES } from "@routes";

import loadBlogPostsData from "@features/blog/loaders/blogPosts";

const title = "Blog Przestrzeń – psychologia i wsparcie emocjonalne";
const description =
  "Artykuły, porady i refleksje z zakresu psychoterapii, terapii poznawczo-behawioralnej oraz zdrowia psychicznego. Praktyczne wskazówki i inspiracje dla lepszego życia emocjonalnego.";

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error("RSS generation requires a site URL");
  }

  const blogPosts = await loadBlogPostsData();

  return rss({
    title,
    description,
    site,
    items: blogPosts.map((post) => ({
      title: post.title,
      pubDate: post.date,
      description: post.description,
      link: DYNAMIC_ROUTES.blogPost(post.slug),
    })),
  });
};
