import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import basicSsl from "@vitejs/plugin-basic-ssl";
import netlify from "@astrojs/netlify/functions";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: true,
    components: {
      page: "storyblok/Page",
      introduction: "storyblok/Introduction",
      about: "storyblok/About",
      experience: "storyblok/Experience",
      workExperience: "storyblok/SingleExperience",
      project: "storyblok/Project",
      singleProject: "storyblok/SingleProject",
      testimonial: "storyblok/Review",
      review: "storyblok/SingleReview",
      contact: "storyblok/Contact"
    }
  }), tailwind({
    applyBaseStyles: false
  }), svelte()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: netlify()
});