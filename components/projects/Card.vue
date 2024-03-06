<template>
  <a :href="projectUrl" target="_blank">
    <article
      class="border mx-auto group shadow-md hover:shadow-xl border-light-gray rounded-tr-lg relative overflow-hidden bg-dark-gray/10 hover:bg-dark-gray/30 p-8 bg-opacity-50 hover:bg-opacity-95 transition duration-300 ease-in-out max-w-xs"
    >
      <div
        class="absolute top-2 right-2 xs:opacity-70 sm:opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent"
      >
        <Icon
          name="material-symbols-light:arrow-outward-rounded"
          class="text-xl bg-transparent md:text-3xl lg:text-2xl transform transition-transform duration-300"
        />
      </div>

      <div class="px-4 bg-transparent">
        <p class="text-white text-2xl bg-transparent">{{ projectName }}</p>
        <section class="text-gray-400 text-sm bg-transparent mt-2">
          {{ projectDescription }}
        </section>
        <div
          class="pt-3 xs:opacity-70 sm:opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent flex space-x-5"
        >
          <!-- Icons based on the techStack prop -->
          <div
            v-for="tech in techStackArray"
            :key="tech"
            class="inline bg-transparent"
          >
            <Icon
              :name="getIconName(tech)"
              class="text-xl bg-transparent md:text-3xl lg:text-2xl transform transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </article>
  </a>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    completeTechStack: {
      type: String,
      required: true,
    },
  },
  computed: {
    techStackArray() {
      return this.completeTechStack.toLowerCase().replace(" ", "").split(",");
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
        react: "mdi:react",
        next: "akar-icons:nextjs-fill",
        node: "teenyicons:nodejs-solid",
        docker: "ion:logo-docker",
        postgresql: "bxl:postgresql",
        cockroachdb: "simple-icons:cockroachlabs",
        sqlalchemy: "simple-icons:sqlalchemy",
        express: "simple-icons:express",
        mysql: "cib:mysql",
        django: "bxl:django",
        aws: "mdi:aws",
        ec2: "simple-icons:amazonec2",
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
  },
};
</script>
