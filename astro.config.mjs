import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";
import pagefind from "astro-pagefind";

export default defineConfig({
	integrations: [
		sitemap(),
		alpinejs(),
		pagefind({
			indexConfig: {
				rootSelector: "[data-pagefind-body]",
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
			},
		},
	},
	trailingSlash: "always",
	site: "https://andrewkepson.com",
	image: {
		domains: ["headless.andrewkepson.com"],
	},
	prefetch: true,
	compressHTML: true,
	output: "static",
	redirects: {
		"/blog/create-headless-wordpress-source-gatsby-wordpress-api/":
			"/blog/headless-wordpress/create-headless-wordpress-source-gatsby-wordpress-api/",
		"/blog/how-and-why-nike-is-using-blockchain/": "/blog/blockchain/how-and-why-nike-is-using-blockchain/",
	},
});
