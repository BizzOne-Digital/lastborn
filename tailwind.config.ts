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
        navy: {
          DEFAULT: "#0D1B3E",
          light: "#1a2d5a",
          dark: "#081226",
        },
        gold: {
          DEFAULT: "#C8992A",
          light: "#E8B84B",
          dark: "#A67820",
        },
        crimson: "#C0392B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
