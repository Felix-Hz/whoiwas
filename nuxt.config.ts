// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-icon", "nuxt-particles"],
  // Tailwind config
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  particles: {
    mode: "slim",
    lazy: true,
  },
});
