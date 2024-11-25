import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    /**
     * [Deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
     */
    // site: 'https://example-profile.github.io',
    // base: 'example-project',

    integrations: [
        tailwind(),
        react(),
    ],
    vite: {
        plugins: [
            svgr(),
        ],
    },
});
