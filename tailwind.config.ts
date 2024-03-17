import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      gray: colors.gray,
      stone: colors.stone,
      cyan: colors.cyan,
      brand: {
        primary: "hsl(190, 50%, 55%)",
        light: "hsl(190 30% 70%)",
      },
      primary: "hsl(190, 10%, 90%)",
      secondary: "hsl(231, 30%, 25%)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        mont: ["Montserrat", "sans-serif"],
      },
      height: {
        page: "calc(100vh - 7rem)",
      },
      spacing: {
        page: "calc(100vh - 7rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
