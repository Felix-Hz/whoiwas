<template>
  <!-- Social Media Type Intro -->
  <div
    class="relative xs:hidden sm:hidden"
    :style="{ paddingTop: headerHeight + 'px' }"
  >
    <!-- Background Picture -->
    <div class="bg-indigo-700/50 h-72" id="background-picture">
      <img src="/media/background.png" alt="Background" class="h-72 w-full" />
    </div>

    <!-- Avatar -->
    <div
      class="absolute top-22 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent"
    >
      <div
        class="rounded-full overflow-hidden sm:h-40 sm:w-40 lg:h-60 lg:w-60 mb-6 shadow-2xl border-2 border-indigo-500/50"
      >
        <img
          src="/media/avatar.jpeg"
          alt="Avatar"
          class="h-full w-full object-cover rounded-full m-auto"
        />
      </div>
    </div>
  </div>
  <div>
    <div
      class="class=component-container container flex justify-center items-start m-auto lg:mt-28 "
    >
      <div
        class="xs:gap-4 w-3/4 flex flex-col items-center justify-center lg:gap-1"
      >
        <!-- Name -->
        <div class="flex justify-end p-6">
          <div
            class="xs:pt-1 text-center text-3xl lg:text-6xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            Felix Hernandez Vieyra
          </div>
        </div>

        <!-- Description -->
        <div class="xs:hidden text-center text-xl lg:text-2xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <!-- List of icons -->
        <div class="flex justify-center space-x-10 lg:space-x-20">
          <a href="https://linkedin.com">
            <Icon name="uil:linkedin" class="text-2xl lg:text-4xl" />
          </a>
          <a href="https://github.com">
            <Icon name="uil:github" class="text-2xl lg:text-4xl" />
          </a>
          <a href="mailto:felix.hzv@gmail.com">
            <Icon name="material-symbols:mail" class="text-2xl lg:text-4xl" />
          </a>
          <a href="/">
            <Icon name="academicons:cv-square" class="text-2xl lg:text-4xl" />
          </a>
        </div>
        <TheNextArrow class="hidden lg:inline" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-container {
  width: 100%;
  /* height: 100vh; */
}
</style>
<script>
export default {
  props: {
    headerHeight: {
      type: Number,
      default: 0,
    },
  },
};
</script>
