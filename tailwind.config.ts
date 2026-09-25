import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        card: "#121217",
        muted: "#27272a",
        accent: {
          neon: "#00f0ff",
          emerald: "#10b981",
          purple: "#a855f7",
          amber: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
