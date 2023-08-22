/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jazmin: ["Jazmin"]
      },
      colors: {
        primary: "#D3FE9E",
        second: "#8CC7D0",
        shade: "#29292b",
        colBorder: "black"
      }
    }
  },
  plugins: []
};
