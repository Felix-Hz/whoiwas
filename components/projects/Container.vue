<template>
  <main class="z-1 mt-20 container mx-auto">
    <!-- Add an about section  -->
    <div class="xs:mt-0 md:pt-24 lg:pt-8">
      <h2
        class="xs:text-3xl text-4xl text-white-900 p-0 mb-4 tracking-tight text-center"
      >
        The Gallery
      </h2>
      <p
        class="xs:hidden mb-8 lg:text-xl lg:mb-12 font-light text-center text-gray-500"
      >
        I've been diligently working on some pet projects that you can explore
        right here.
      </p>
    </div>

    <!-- Render project cards dynamically -->
    <div class="flex flex-row flex-wrap justify-center md:p-5 w-full">
      <ProjectsCard
        v-for="(project, index) in projects"
        :key="index"
        :projectName="project.projectName"
        :projectUrl="project.projectUrl"
        :projectDescription="project.projectDescription"
        :completeTechStack="project.completeTechStack"
        :class="'w-3/4 sm:w-1/2 sm:p-0 sm:scale-75 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'"
        u
      />
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          projectName: "whoami",
          projectUrl: "https://github.com/Felix-Hz/whoami",
          projectDescription:
            "My personal portfolio that has been crafted with a lot of love for you to get to know me better, and have a nice animated experience.",
          completeTechStack: "Nuxt,JavaScript,Tailwind,Terminal,Linux",
        },
        {
          projectName: "green-squares",
          projectUrl: "https://github.com/Felix-Hz/green-squares",
          projectDescription:
            "I wanted a shiny gh profile so I created this project that runs a daily cron job that gets a random fact and records it in markdown.",
          completeTechStack: "TypeScript,AWS,EC2,Tmux,Linux",
        },
        {
          projectName: "more-coming-soon",
          projectUrl: "https://github.com/Felix-Hz",
          projectDescription:
            "I'm working on fixing the hosting for a few projects, stay tuned!",
          completeTechStack: "",
        },
      ],
    };
  },
};
</script>
