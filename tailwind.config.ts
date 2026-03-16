import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          // Main truck / brand blue inspired by brochure
          DEFAULT: "#00519A",
          dark: "#002B57"
        },
        accent: {
          // Warm construction accent (stripe / highlight)
          DEFAULT: "#F5A623",
          soft: "#FFE4B8"
        },
        concrete: {
          // Neutral concrete grey
          DEFAULT: "#D4D8DD",
          dark: "#9CA3AF"
        },
        // Deep background for premium industrial feel
        background: "#050814"
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"]
      },
      boxShadow: {
        "card-soft": "0 18px 45px rgba(0,0,0,0.18)"
      }
    }
  },
  plugins: []
};

export default config;

