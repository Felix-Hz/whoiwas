// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Felix Hernandez Vieyra | whoami",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Personal website of Felix Hernandez Vieyra, who is a Software Developer.",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  devtools: { enabled: false },
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
