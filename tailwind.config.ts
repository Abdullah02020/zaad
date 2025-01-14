import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ec4934", // اللون الأحمر الأساسي
        secondary: "#1B1B1B", // اللون الأسود الأساسي
        textLight: "#FFFFFF", // النصوص باللون الأبيض
        textDark: "#000000", // النصوص باللون الأسود
      },
    },
  },
  plugins: [],
} satisfies Config;
