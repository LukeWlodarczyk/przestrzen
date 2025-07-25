// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    // https://github.com/withastro/astro/issues/14030
    // @ts-expect-error
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
