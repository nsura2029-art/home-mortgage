import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1020",
        blue: "#5B5CF6",
        emerald: "#14B8A6",
        surface: "#F7F8FF",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(68, 64, 180, 0.13)",
        glow: "0 22px 60px rgba(91, 92, 246, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
