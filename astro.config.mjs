import sitemap from "@astrojs/sitemap";
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
	site: siteConfig.siteURL,
	base: "/",
	trailingSlash: "always",

	output: "static",

	integrations: [
		tailwind({
			nesting: true,
		}),
		svelte({
			preprocess: vitePreprocess(),
		}),
		sitemap(),
	],
});
