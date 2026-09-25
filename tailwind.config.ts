import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef4ff",
          100: "#d9e6ff",
          600: "#1d4ed8",
          700: "#1e3a8a",
          800: "#172d6b",
          900: "#0f1f4d",
          950: "#0a1433",
        },
        gold: {
          100: "#fbf3dc",
          300: "#ecd08a",
          400: "#e2bb5c",
          500: "#c9a13b",
          600: "#a9822a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
