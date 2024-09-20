import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--papaya-whip)",
        foreground: "var(--prussian-blue)",
        redPrimary: "var(--fire-brick)",
        redSecondary: "var(--barn-red)",
        foregroundSecondary: "var(--air-superiority-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
