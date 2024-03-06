<template>
  <main class="z-1 mt-20 container mx-auto bg-transparent">
    <!-- Add an about section  -->
    <div class="xs:mt-0 md:pt-24 lg:pt-8 bg-transparent">
      <h2
        class="xs:text-3xl text-4xl text-white-900 p-0 mb-4 tracking-tight text-center bg-transparent"
      >
        {{ $t("title_1") }}
      </h2>
      <p
        class="xs:hidden mb-8 lg:text-xl lg:mb-12 font-light text-center text-gray-500"
      >
        {{ $t("subtitle_gallery") }}
      </p>
    </div>

    <!-- Render project cards dynamically -->
    <div
      class="flex flex-row flex-wrap justify-center md:p-5 w-full bg-transparent"
    >
      <ProjectsCard
        v-for="(project, index) in projects"
        :key="index"
        :projectName="project.projectName"
        :projectUrl="project.projectUrl"
        :projectDescription="getProjectDescription(project.projectKey)"
        :completeTechStack="project.completeTechStack"
        :class="'w-3/4 sm:w-1/2 sm:p-0 sm:scale-75 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'"
        u
      />
    </div>
  </main>
</template>
<script>
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n();

    const projects = [
      {
        projectName: "whoami",
        projectUrl: "https://github.com/Felix-Hz/whoami",
        projectKey: "whoami_desc",
        completeTechStack: "Nuxt,JavaScript,Tailwind,Terminal,Linux",
      },
      {
        projectName: "ai-assistant",
        projectUrl: "https://github.com/Felix-Hz/ai-chat",
        projectKey: "aiasistant_desc",
        completeTechStack: "Next,TypeScript,OpenAI,Tailwind,GSAP",
      },
      {
        projectName: "auth-api",
        projectUrl: "https://github.com/Felix-Hz/proto-auth",
        projectKey: "authapi_desc",
        completeTechStack: "Django,Python,CockroachDB,PostgreSQL,Linux",
      },
      {
        projectName: "green-squares",
        projectUrl: "https://github.com/Felix-Hz/green-squares",
        projectKey: "greensquares_desc",
        completeTechStack: "TypeScript,AWS,EC2,Tmux,Linux",
      },
      {
        projectName: "more-coming-soon",
        projectUrl: "https://github.com/Felix-Hz",
        projectKey: "morecomingsoon_desc",
        completeTechStack: "",
      },
    ];

    const getProjectDescription = (key) => {
      return t(key);
    };

    return {
      projects,
      getProjectDescription,
    };
  },
};
</script>
