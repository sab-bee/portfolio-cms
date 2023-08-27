/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jazmin: ["Jazmin"]
      },
      colors: {
        primary: "#D292FF",
        second: "#b97be6",
        shade: "#020233",
        colBg: "#00002E",
        colBorder: "#D292FF"
      }
    }
  },
  plugins: []
};
