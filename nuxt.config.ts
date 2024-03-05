// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Felix Hernandez Vieyra | Full-Stack Software Developer",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Personal website of Felix Hernandez Vieyra. He is a Full-Stack Software Developer that builds with frameworks as Nuxt.js, and Next.js. He's experienced in Python-based AWS microservices, and databases.",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  devtools: { enabled: false },
  modules: ["nuxt-icon", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  // Tailwind config
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
