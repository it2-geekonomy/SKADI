import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1C4532",
        canopy: "#2D6A4F",
        gold: "#B7956A",
        parchment: "#F5F0E8",
        "parchment-dark": "#EDE8DF",
        obsidian: "#1A1A18",
        stone: "#E8E3D8",
        mid: "#6B6B68",
        "light-mid": "#9A9A96",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
