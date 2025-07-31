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
        background: "var(--background)",
        secondaryColor: "var(--secondary-color)",
        colorPrimary50: "var(--color-primary-50)",
        colorPrimary100: "var(--color-primary-100)",
        colorPrimary200: "var(--color-primary-200)",
        colorPrimary300: "var(--color-primary-300)",
        colorPrimary400: "var(--color-primary-400)",
        colorPrimary500: "var(--color-primary-500)",
        colorPrimary600: "var(--color-primary-600)",
        colorPrimary700: "var(--color-primary-700)",
        colorPrimary800: "var(--color-primary-800)",
        colorPrimary900: "var(--color-primary-900)",
        colorPrimary950: "var(--color-primary-950)",
        colorPrimaryDefault: "var(--color-primary-DEFAULT)",
        colorPray50: "var(--color-gray-50)",
        colorPray100: "var(--color-gray-100)",
        colorPray200: "var(--color-gray-200)",
        colorPray300: "var(--color-gray-300)",
        colorPray400: "var(--color-gray-400)",
        colorPray500: "var(--color-gray-500)",
        colorPray600: "var(--color-gray-600)",
        colorPray700: "var(--color-gray-700)",
        colorPray800: "var(--color-gray-800)",
        colorPray900: "var(--color-gray-900)",
        colorPray950: "var(--color-gray-950)",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
