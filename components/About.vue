<template>
  <!-- Social Media Type Intro -->
  <div class="relative" :style="{ paddingTop: headerHeight + 'px' }">
    <!-- Background Picture -->
    <div
      class="bg-indigo-700/50 xs:max-h-24 md:max-h-4 h-72 blur-3xl"
      id="background-picture"
    >
      <img
        src="/media/background.png"
        alt="Background"
        class="h-72 xs:max-h-20 md:max-h-20 w-full"
      />
    </div>

    <!-- Avatar -->
    <div
      class="absolute xs:mt-20 md:mt-36 top-42 sm:top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent"
    >
      <div
        class="rounded-full overflow-hidden xs:w-32 sm:w-60 md:w-40 lg:w-60 mb-6 sm:shadow-xl shadow-2xl border-2 border-indigo-200/25 bg-transparent"
      >
        <img
          src="/media/avatar.jpeg"
          alt="Avatar"
          class="h-full w-full object-cover rounded-full m-auto"
        />
      </div>
    </div>
  </div>
  <div class="bg-transparent">
    <div
      class="class=component-container container flex justify-center items-start m-auto lg:mt-28 bg-transparent"
    >
      <div
        class="xs:gap-4 w-3/4 flex flex-col items-center justify-center lg:gap-1 bg-transparent"
      >
        <!-- Name -->
        <div class="flex justify-end xs:p-2 md:p-12 p-6 bg-transparent">
          <div
            class="xs:mt-40 xs:mb-6 sm:mt-12 md:mt-52 text-center xs:text-5xl sm:text-6xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter bg-transparent"
          >
            Felix Hernandez Vieyra
          </div>
        </div>

        <!-- Description -->
        <div
          class="text-center xs:hidden sm:text-lg md:text-lg lg:text-xl lg:mt-2 mb-5"
        >
          {{ $t("pt_1") }}
          <p
            class="inline sm:text-xl md:text-xl lg:text-2xl hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            software developer
          </p>
          {{ $t("pt_2") }}
          <p
            class="inline sm:text-xl md:text-xl lg:text-2xl hover:text-light-gray hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            {{ $t("animated_1") }}.
          </p>
          {{ $t("pt_3") }}
          <p
            class="inline sm:text-xl md:text-xl lg:text-2xl hover:text-light-gray hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            {{ $t("animated_2") }}
          </p>
          {{ $t("pt_4") }}
          <p
            class="inline sm:text-xl md:text-xl lg:text-2xl hover:text-light-gray hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            web development,
          </p>
          <p
            class="inline sm:text-xl md:text-xl lg:text-2xl hover:text-light-gray hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            devOps,
          </p>
          {{ $t("pt_5") }}
          <p
            class="inline xs:text-xl sm:text-xl md:text-xl lg:text-2xl hover:text-light-gray hover:animate-text hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition duration-500"
          >
            infoSec.
          </p>
        </div>

        <!-- List of icons -->
        <div
          class="flex justify-center space-x-10 sm:space-x-24 sm:mt-16 sm:mb-14 lg:space-x-20 md:mt-8 lg:mt-4 bg-transparent"
        >
          <a
            href="https://www.linkedin.com/in/felix-hernandez-vieyra/"
            target="_blank"
          >
            <Icon
              name="uil:linkedin"
              class="xs:text-4xl sm:text-3xl text-2xl md:text-3xl lg:text-4xl transform hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a href="https://github.com/Felix-Hz" target="_blank">
            <Icon
              name="uil:github"
              class="xs:text-4xl sm:text-3xl text-2xl md:text-3xl lg:text-4xl transform hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a href="mailto:felix.hzv@gmail.com" target="_blank">
            <Icon
              name="material-symbols:mail"
              class="xs:text-4xl sm:text-3xl text-2xl md:text-3xl lg:text-4xl transform hover:scale-125 transition-transform duration-300"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1NeDEZgTRqM5hZeJTbbrCUKv3gMVARkz8/view?usp=drive_link"
            target="_blank"
          >
            <Icon
              name="academicons:cv-square"
              class="xs:text-4xl sm:text-3xl text-2xl md:text-3xl lg:text-4xl transform hover:scale-125 transition-transform duration-300"
            />
          </a>
        </div>

        <TheNextArrow
          class="xs:hidden sm:hidden md:inline lg:inline hover:scale-150 transition-transform duration-300 bg-transparent"
        />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.component-container {
  width: 100%;
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
