import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: "#D8FF3D",
        pink: "#F6B5DB",
        ink: "#0A0A0A",
        paper: "#FAFAFA",
      },
      borderRadius: {
        brutal: "28px",
        bubble: "32px",
      },
      boxShadow: {
        float: "0 22px 60px rgba(10, 10, 10, 0.18)",
        sticker: "8px 8px 0 rgba(10, 10, 10, 0.18)",
      },
      fontFamily: {
        display: ["Inter", "Arial Black", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      maxWidth: {
        page: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
