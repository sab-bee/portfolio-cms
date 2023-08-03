import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        introduction: "storyblok/Introduction",
        about: "storyblok/About",
        experience: "storyblok/Experience",
        singleExperience: "storyblok/SingleExperience",
        project: "storyblok/Project",
        singleProject: "storyblok/SingleProject",
        testimonial: "storyblok/Review",
        review: "storyblok/SingleReview"
      }
    }),
    tailwind({
      applyBaseStyles: false
    })
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  }
});
