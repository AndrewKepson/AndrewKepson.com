import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
	integrations: [tailwind(), react(), sitemap()],
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
