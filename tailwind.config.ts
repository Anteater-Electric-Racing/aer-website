import type { Config } from "next";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Your custom vintage theme
        vintage: {
          white: "#F5F5F0",    // Off-white/Cream
          navy: "#0D2544",     // Deep Navy
          orange: "#E88D14",   // Burnt Orange
          red: "#C23B22",      // Brick Red (for hovers)
          yellow: "#F3C523",   // Gold/Yellow
          lightgray: "#E5E5E5",
        },
        // ... keep standard shadcn variables if you want them
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
