/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jazmin: ["Jazmin"]
      },
      colors: {
        primary: "#000000",
        second: "#1c1c1c",
        shade: "#f4f4f4",
        colBg: "#ffffff",
        colBorder: "#000000"
      }
    }
  },
  plugins: []
};
