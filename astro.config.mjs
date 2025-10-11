import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
    integrations: [react(), sitemap(), alpinejs()],
    vite: {
        plugins: [tailwindcss()],
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