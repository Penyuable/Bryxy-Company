import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: [
      {
        bryxy: {
          primary: "#e87932",
          "primary-content": "#ffffff",
          secondary: "#8fc9ae",
          accent: "#f2c078",
          neutral: "#40372f",
          "base-100": "#f4f0e9",
          "base-200": "#ebe5dc",
          "base-300": "#ded7cc",
          "base-content": "#40372f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

export default config;
