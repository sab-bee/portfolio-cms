/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jazmin: ["Jazmin"]
      },
      colors: {
        primary: "#98E5E1",
        second: "#8CC7D0",
        shade: "#15152c",
        colBg: "#111121",
        colBorder: "#8CC7D0"
      }
    }
  },
  plugins: []
};
