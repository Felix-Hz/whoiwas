<template>
  <div
    class="component-container h-screen container flex items-center justify-center m-auto selection:h-screen"
  >
    <div
      class="xs:gap-4 w-3/4 flex flex-col items-center justify-center lg:gap-1"
    >
      <!-- Avatar -->
      <div
        class="rounded-full overflow-hidden h-40 w-40 mb-6 mt-8 text-left md:mt-0"
      >
        <img
          src="~/public/media/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Name -->
      <div class="flex justify-end p-6">
        <div
          class="xs:pt-1 text-center text-5xl lg:text-7xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black m-4"
        >
          Felix Hernandez Vieyra
        </div>
      </div>

      <!-- Description -->
      <div class="xs:hidden text-center text-2xl lg:text-3xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <!-- List of icons -->
      <div class="flex justify-center space-x-10 lg:space-x-20">
        <a href="https://linkedin.com">
          <Icon name="uil:linkedin" class="text-4xl lg:text-5xl" />
        </a>
        <a href="https://github.com">
          <Icon name="uil:github" class="text-4xl lg:text-5xl" />
        </a>
        <a href="mailto:felix.hzv@gmail.com">
          <Icon name="material-symbols:mail" class="text-4xl lg:text-5xl" />
        </a>
        <a href="/">
          <Icon name="academicons:cv-square" class="text-4xl" />
        </a>
        <a href="https://mastodon.social/@red_rogue" class="xs:hidden">
          <Icon name="mdi:mastodon" class="text-4xl lg:text-5xl" />
        </a>
      </div>
      <TheNextArrow class="hidden lg:inline" />
    </div>
  </div>
</template>

<style scoped>
.component-container {
  width: 100%;
  /* height: 100vh; */
}
</style>
