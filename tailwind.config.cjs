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
        shade: "#ededed",
        dark: "#241F21"
      }
    }
  },
  plugins: []
};
