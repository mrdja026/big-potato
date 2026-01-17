// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],

  output: "static",

  site: "https://mrdjan.net",
  base: "/",

  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
