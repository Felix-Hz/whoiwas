<template>
  <div
    class="logos whitespace-nowrap relative overflow-x-clip w-full bg-transparent sm:my-20"
  >
    <div
      class="logos-slide mt-8 inline-block xs:animate-slide_xs animate-slide bg-transparent"
    >
      <!-- Icons  -->
      <div
        v-for="tech in techStackArray"
        :key="tech"
        class="inline bg-transparent xs:p-5 sm:p-7 md:p-9 p-12 group"
      >
        <a :href="getTechUrl(tech)" target="_blank" class="bg-transparent">
          <Icon
            :name="getIconName(tech)"
            class="text-6xl xs:text-9xl opacity-60 group-hover:opacity-95 bg-transparent md:text-6xl lg:text-9xl transform group-hover:scale-125 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
    <div
      class="logos-slide xs:mt-8 inline-block xs:animate-slide_xs animate-slide bg-transparent"
    >
      <div
        v-for="tech in techStackArray"
        :key="tech"
        class="inline bg-transparent xs:p-5 p-12 group"
      >
        <a :href="getTechUrl(tech)" target="_blank" class="bg-transparent">
          <Icon
            :name="getIconName(tech)"
            class="text-6xl xs:text-9xl opacity-60 group-hover:opacity-95 bg-transparent md:text-6xl lg:text-9xl transform group-hover:scale-125 transition-transform duration-300"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<style>
/* Pause animation */
.logos:hover .logos-slide {
  animation-play-state: paused;
}
/* Fade transitions  */
.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}
.logos:before {
  background: linear-gradient(to left, rgba(255, 255, 255, 0), var(--dark));
  left: -1px;
}
.logos:after {
  background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--dark));
  right: -1px;
}

/* Small screens */
@media (max-width: 640px) {
  .logos:before,
  .logos:after {
    width: 100px;
  }
}
</style>
<script>
export default {
  computed: {
    techStackArray() {
      const technologies = [
        "python",
        "typescript",
        "javascript",
        "django",
        "next",
        "react",
        "nuxt",
        "vue",
        "docker",
        "tailwind",
        "gsap",
        "node",
        "express",
        "linux",
        "aws",
        "postgresql",
        "cockroachdb",
        "mysql",
        "sqlalchemy",
        "terminal",
        "openai",
      ];
      return technologies;
    },
  },
  methods: {
    getIconName(tech) {
      const iconMap = {
        nuxt: "file-icons:nuxt",
        vue: "mdi:vuejs",
        python: "mdi:language-python",
        typescript: "mdi:language-typescript",
        javascript: "mdi:language-javascript",
        next: "akar-icons:nextjs-fill",
        react: "mdi:react",
        node: "teenyicons:nodejs-solid",
        docker: "ion:logo-docker",
        postgresql: "bxl:postgresql",
        cockroachdb: "simple-icons:cockroachlabs",
        sqlalchemy: "simple-icons:sqlalchemy",
        express: "simple-icons:express",
        mysql: "cib:mysql",
        django: "bxl:django",
        aws: "mdi:aws",
        tmux: "codicon:terminal-tmux",
        linux: "codicon:terminal-linux",
        terminal: "bitcoin-icons:linux-terminal-filled",
        tailwind: "mdi:tailwind",
        openai: "arcticons:openai-chatgpt",
        gsap: "cib:greensock",
      };
      // If the icon doesn't exist, default to 404.
      return iconMap[tech] || "mdi:help-circle";
    },
    getTechUrl(tech) {
      const techUrls = {
        nuxt: "https://nuxt.com/",
        vue: "https://vuejs.org/",
        python: "https://www.python.org/",
        typescript: "https://www.typescriptlang.org/",
        javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        next: "https://nextjs.org/",
        react: "https://react.dev/",
        node: "https://nodejs.org/en",
        docker: "https://www.docker.com/",
        postgresql: "https://www.postgresql.org/",
        cockroachdb: "https://cockroachlabs.cloud/",
        sqlalchemy: "https://www.sqlalchemy.org/",
        express: "https://expressjs.com/",
        mysql: "https://www.mysql.com/",
        django: "https://www.djangoproject.com/",
        aws: "https://aws.amazon.com/?nc2=h_lg",
        tmux: "https://github.com/tmux/tmux/wiki",
        linux: "https://www.linux.org/",
        terminal: "https://www.gnu.org/software/bash/manual/bash.html",
        tailwind: "https://tailwindcss.com/",
        openai: "https://openai.com/blog/openai-api",
        gsap: "https://gsap.com/",
      };
      // If the docs are not found, go to MDN.
      return techUrls[tech] || "https://developer.mozilla.org/en-US/";
    },
  },
};
</script>
