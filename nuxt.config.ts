// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  // Every time that I use @ it'll resolve to root dir.
  // alias: {
  //   "@": resolve(__dirname, "/"),
  // },
  // devtools: { enabled: true },
  // image: {
  //   dir: "public/media",
  //   quality: 50,
  // },
  // Tailwind config
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
