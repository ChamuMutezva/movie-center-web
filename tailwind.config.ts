import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            white: "hsl(var(--color-white) / 1)",
            darkBlue: "hsl(var(--dark-blue) / 1)",
            greyishBlue: "hsl(var(--greyish-blue) / 1)",
            semiDarkBlue: "hsl(var(--semi-dark-blue) / 1)",
            red: "hsl(var(--color-red) / 1)",
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-outfit)"],
            },
        },
    },
    plugins: [],
};
export default config;
