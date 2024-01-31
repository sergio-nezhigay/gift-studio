import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "30px",
        lg: "32px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
      },
    },
    extend: {
      fontSize: {
        "7xl": ["64px", { lineHeight: "1.26" }],
        "6xl": ["60px", { lineHeight: "1.26" }],
        "5xl": ["56px", { lineHeight: "1.26" }],
        "4xl": ["48px", { lineHeight: "1.26" }],
        "3xl": ["24px", { lineHeight: "1.22" }],
        "2xl": ["22px", { lineHeight: "1.35" }],
        xl: ["20px", { lineHeight: "1.22" }],
        lg: ["18px", { lineHeight: "1.35" }],
        base: ["16px", { lineHeight: "1.21" }],
        sm: ["14px", { lineHeight: "1.21" }],
      },
      lineHeight: {
        "64": "81px",
        "60": "76px",
        "56": "71px",
        "48": "60px",
        "32": "32px",
        "27": "27px",
        "26": "26px",
        "16": "22px",
      },
      fontFamily: {
        caveat: ["var(--font-caveat)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        accent: "#E42C2C",
        lava: "#CF1919",
        latte: "#FFFAE7",
        gray: "#292D32",
        heroBg: "#d9d9d9",
        socialGradientStart: "#c84b4c",
        socialGradientEnd: "#672e66",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
        xlg: "1440px",
        // ml: { min: "768px", max: "1280px" },
      },
    },
    transitionDuration: {
      DEFAULT: "300ms",
      "500": "500ms",
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
