// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
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
    mode: "slim", // 'full' | 'slim' | 'basic' | 'custom'
    lazy: false,
  },
});
