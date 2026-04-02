import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          500: "#15803d",
          600: "#166534",
          700: "#14532d",
        },
        farm: {
          green: "#15803d",
          earth: "#854d0e",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
