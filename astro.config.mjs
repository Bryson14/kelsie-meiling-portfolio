// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    image: {
        service: {
            entrypoint: "astro/assets/services/sharp",
        },
    },

    compressHTML: true,

    build: {
        inlineStylesheets: "auto",
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
