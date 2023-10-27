// https://nuxt.com/docs/api/configuration/nuxt-config

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
  modules: ["nuxt-icon"],
  // Tailwind config
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
