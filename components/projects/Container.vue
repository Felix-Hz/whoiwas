<template>
  <main class="z-1 container mx-auto">
    <!-- Add an about section  -->
    <div class="xs:pb-4 xs:mt-24 md:pt-24 lg:pt-8">
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

    <div class="flex flex-row space-x-16 p-5">
      <ProjectsCard
        projectName="whoami"
        projectUrl="https://github.com/Felix-Hz/whoami"
        projectDescription="My personal portfolio that has been crafted with a lot of love for you to get to know me better, and have a nice animated experience."
        completeTechStack="Nuxt,JavaScript,Tailwind,Terminal,Linux"
      />
      <ProjectsCard
        projectName="green-squares"
        projectUrl="https://github.com/Felix-Hz/green-squares"
        projectDescription="I wanted a shiny gh profile so I created this project that runs a daily cron job that gets a random fact and records it in markdown."
        completeTechStack="TypeScript,AWS,EC2,Tmux,Terminal,Linux"
      />
      <ProjectsCard
        projectName="More coming soon..."
        projectUrl="https://github.com/Felix-Hz"
        projectDescription="I'm working on fixing the hosting for a few projects. Stay tuned for more updates on them!"
        completeTechStack="Django,React,Vue,PostgreSQL,Node"
      />
    </div>
  </main>
</template>
