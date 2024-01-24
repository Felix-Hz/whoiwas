<template>
  <main class="h-screen z-1 mt-20 container mx-auto">
    <div class="xs:pb-4 xs:mt-24 md:pt-24 lg:pt-8">
      <h2
        class="xs:text-3xl text-4xl text-white-900 p-0 mb-4 tracking-tight text-center"
      >
        Project Gallery
      </h2>
      <p
        class="xs:hidden mb-8 lg:text-xl lg:mb-12 font-light text-center text-gray-500"
      >
        I've been working on some cool pet projects that you can check out
        below.
      </p>
    </div>

    <div class="flex flex-row space-x-16 p-5">
      <ProjectsCard
        projectName="Dummy Project 1"
        projectUrl="https://google.com/"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        completeTechStack="Linux,Python,JavaScript,Express"
      />
      <ProjectsCard
        projectName="Dummy Project 2"
        projectUrl="https://google.com/"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        completeTechStack="Nuxt,Vue,JavaScript,AWS"
      />
    </div>
  </main>
</template>
