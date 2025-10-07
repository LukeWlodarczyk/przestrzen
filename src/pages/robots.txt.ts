import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *

Disallow: /kontakt/sukces/
Disallow: /rezerwacja/sukces/

Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("RSS generation requires a site URL");
  }

  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL));
};
