import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                regular: ["DodoRounded v2", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                orange: {
                    DEFAULT: "hsl(26,100%,50%)",
                },
            },
        },

    },
    plugins: [],
} satisfies Config;
