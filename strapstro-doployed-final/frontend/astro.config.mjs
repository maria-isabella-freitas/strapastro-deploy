import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://simonvanherweghe.github.io",
  base: "/strapstro",
  image: {
    domains: ["localhost"],
    layout: "constrained",
    responsiveStyles: true,
  },
});
