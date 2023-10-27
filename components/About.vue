<template>
  <div
    class="component-container container flex items-center justify-center m-auto selection:h-screen"
  >
    <div class="w-1/2 flex flex-col items-center justify-center">
      <!-- Avatar -->
      <div class="rounded-full overflow-hidden h-40 w-40 mb-6 text-left" >
        <img
          src="~/public/media/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>

      <!-- Name -->
      <div class="text-center font-bold text-6xl mb-6">
        Felix Hernandez Vieyra
      </div>

      <!-- Description -->
      <div class="text-center text-2xl mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </div>

      <!-- List of icons -->
      <div class="flex justify-center space-x-12">
        <a href="https://linkedni.com">
          <Icon name="uil:linkedin" class="text-5xl" />
        </a>
        <a href="https://github.com">
          <Icon name="uil:github" class="text-5xl" />
        </a>
        <a href="mailto:felix.hzv@gmail.com">
          <Icon name="uil:envelope-alt" class="text-5xl" />
        </a>
        <a href="https://mastodon.social">
          <Icon name="mdi:mastodon" class="text-5xl" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Apply styles to the root element of the component */
.component-container {
  width: 100%;
  height: 100vh;
}
</style>
