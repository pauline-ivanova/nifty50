import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: "#1A2A4F", // Deep India Blue
          secondary: "#111A32", // Indigo Navy
          saffron: {
            DEFAULT: "#C04A0F", // Dark Saffron for WCAG AA contrast (4.5:1+ with white text)
            hover: "#A83D0C",
          },
          silver: "#CED3DF", // Cool Silver
          // Legacy mappings to be refactored if found
          dark: "#1A2A4F", 
          medium: "#111A32",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
