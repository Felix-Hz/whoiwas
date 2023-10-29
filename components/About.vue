<template>
  <div
    class="component-container container flex items-center justify-center m-auto selection:h-screen"
  >
    <div class="w-1/2 flex flex-col items-center justify-center">
      <!-- Avatar -->
      <div class="rounded-full overflow-hidden h-40 w-40 mb-6 text-left">
        <img
          src="~/public/media/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover hover:bg-purple"
        />
      </div>

      <!-- Name -->
      <div class="flex justify-end">
        <div
          class="text-center text-5xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black m-4"
        >
          Felix Hernandez Vieyra
        </div>
      </div>

      <!-- Description -->
      <div class="text-center text-2xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Download my cv
        <a href="/" class="hover:text-purple-400">here</a>.
      </div>

      <!-- List of icons -->
      <div class="flex justify-center space-x-12">
        <a href="https://linkedin.com">
          <Icon name="uil:linkedin" class="text-3xl" />
        </a>
        <a href="https://github.com">
          <Icon name="uil:github" class="text-3xl" />
        </a>
        <a href="mailto:felix.hzv@gmail.com">
          <Icon name="uil:envelope-alt" class="text-3xl" />
        </a>
        <a href="https://mastodon.social/@red_rogue">
          <Icon name="mdi:mastodon" class="text-3xl" />
        </a>
      </div>
      <TheNextArrow />
    </div>
  </div>
</template>

<style scoped>
.component-container {
  width: 100%;
  height: 100vh;
}
</style>
