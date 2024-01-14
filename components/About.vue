<template>
  <!-- <div class="h-screen"> -->
    <!-- Social Media Type Intro -->
    <div
      class="relative xs:hidden sm:hidden"
      :style="{ paddingTop: headerHeight + 'px' }"
    >
      <!-- Background Picture -->
      <div
        class="bg-indigo-700/50 md:max-h-4 h-72 blur-3xl"
        id="background-picture"
      >
        <img
          src="/media/background.png"
          alt="Background"
          class="h-72 md:max-h-20 w-full"
        />
      </div>

      <!-- Avatar -->
      <div
        class="absolute md:mt-36 top-42 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent"
      >
        <div
          class="rounded-full overflow-hidden sm:h-40 sm:w-40 md:w-40 lg:w-60 mb-6 shadow-2xl border-2 border-indigo-200/25"
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
        class="class=component-container container flex justify-center items-start m-auto lg:mt-28"
      >
        <div
          class="xs:gap-4 w-3/4 flex flex-col items-center justify-center lg:gap-1"
        >
          <!-- Name -->
          <!-- animate-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent font-black -->
          <div class="flex justify-end md:p-12 p-6">
            <div
              class="xs:pt-1 md:mt-52 text-center text-2xl md:text-4xl lg:text-5xl font-extrabold"
            >
              Felix Hernandez Vieyra
            </div>
          </div>

          <!-- Description -->
          <div class="xs:hidden text-center text-lg lg:text-xl mb-5">
            I'm a
            <p
              class="inline md:text-xl lg:text-2xl hover:text-light-gray transition duration-500"
            >
              software developer
            </p>
            with a specialization in
            <p
              class="inline md:text-xl lg:text-2xl hover:text-light-gray transition duration-500"
            >
              cloud technologies.
            </p>
            My expertise lies in crafting
            <p
              class="inline md:text-xl lg:text-2xl hover:text-light-gray transition duration-500"
            >
              user-centered features
            </p>
            and writing code that not only performs at its best but is also
            easily interpretable. I have a keen interest in
            <p
              class="inline lmd:text-xl g:text-2xl hover:text-light-gray transition duration-500"
            >
              web development,
            </p>
            <p
              class="inline md:text-xl lg:text-2xl hover:text-light-gray transition duration-500"
            >
              devOps,
            </p>
            and
            <p
              class="inline md:text-xl lg:text-2xl hover:text-light-gray transition duration-500"
            >
              infoSec.
            </p>
          </div>

          <!-- List of icons -->
          <div class="flex justify-center space-x-10 lg:space-x-20 md:mt-8">
            <a href="https://linkedin.com">
              <Icon
                name="uil:linkedin"
                class="text-2xl md:text-3xl lg:text-4xl"
              />
            </a>
            <a href="https://github.com">
              <Icon
                name="uil:github"
                class="text-2xl md:text-3xl lg:text-4xl"
              />
            </a>
            <a href="mailto:felix.hzv@gmail.com">
              <Icon
                name="material-symbols:mail"
                class="text-2xl md:text-3xl lg:text-4xl"
              />
            </a>
            <a href="/">
              <Icon
                name="academicons:cv-square"
                class="text-2xl md:text-3xl lg:text-4xl"
              />
            </a>
          </div>
          <TheNextArrow class="hidden md:inline lg:inline" />
        </div>
      </div>
    </div>
  <!-- </div> -->
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
