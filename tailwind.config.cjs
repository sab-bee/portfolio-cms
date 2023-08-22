/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jazmin: ["Jazmin"]
      },
      colors: {
        primary: "#ffffff",
        shade: "#29292b",
        dark: "#241F21",
        secondary: "#D3FE9E",
        third: "#8CC7D0"
      }
    }
  },
  plugins: []
};
