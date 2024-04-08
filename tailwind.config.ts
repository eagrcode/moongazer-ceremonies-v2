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
      red: colors.red,
      brand: {
        primary: "hsl(190, 50%, 55%)",
        light: "hsl(190 30% 60%)",
      },
      primary: "hsl(190, 10%, 92%)",
      secondary: "hsl(231, 30%, 20%)",
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
        poppins: ["var(--font-poppins)"],
        dancing: ["var(--font-dancing)"],
      },
      minWidth: {
        "80%": "80%",
      },
      width: {
        "80%": "80%",
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
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;

export default config;
