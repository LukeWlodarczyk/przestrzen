// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import icon from "astro-icon";

import dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    // https://github.com/withastro/astro/issues/14030
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
  site: process.env.PUBLIC_SITE_URL,
  image: {
    domains: ["images.ctfassets.net"],
  },
  integrations: [
    react(),
    icon({ iconDir: "src/assets/icons" }),
    sitemap({
      filter: (page) =>
        !page.endsWith("/kontakt/sukces/") &&
        !page.endsWith("/rezerwacja/sukces/"),
    }),
  ],
});
