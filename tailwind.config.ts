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
        "cinza-claro": "#d9d9d9",
        "azul-claro": "#38b6ff",
        "verde-claro": "#8bc34a",
        "amarelo": "#ffeb3b",
        "laranja": "#ff9800",
        "cinza-medio-texto-sec": "#9e9e9e",
        "cinza-escuro": "#424242",
      }
    },
  },
  plugins: [],
};
export default config;
