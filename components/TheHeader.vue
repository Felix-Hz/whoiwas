<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-11 py-4 bg-opacity-50 bg-very-dark"
  >
    <!-- bg-var(--very-dark) -->
    <div class="flex items-center">
      <span class="text-white text-5xl font-bold">
        <NuxtLink :to="{ hash: options[0].hash }"
          ><Icon name="ic:baseline-terminal"
        /></NuxtLink>
      </span>
    </div>
    <!-- <div class="flex items-center space-x-4">
      <ul class="flex space-x-24">
        <li v-for="option in options" :key="option.id">
          NuxtLink can also take a link as an argument 
          <NuxtLink
            :to="{ hash: option.hash }"
            class="text-white text-xl hover:text-purple-400"
          >
            {{ option.label }}
          </NuxtLink>
        </li>
      </ul>
    </div> -->
    <div class="flex items-center">
      <div class="flex items-center space-x-12">
        <!-- Add a wrapper div -->
        <a href="https://github.com/Felix-Hz" class="text-white">
          <Icon name="mdi:github-face" class="text-4xl" />
        </a>
        <div class="relative">
          <div class="cursor-pointer">
            <Icon name="ic:twotone-translate" class="text-white text-4xl" />
            <span
              class="absolute top-0 right-0 bg-white rounded-full px-1 text-xs"
              >{{ selectedLanguage }}</span
            >
          </div>
          <select
            v-model="selectedLanguage"
            @change="changeLanguage"
            class="text-white bg-transparent border-none opacity-0 absolute top-4 right-2 h-full w-full cursor-pointer"
          >
            <option
              v-for="language in languages"
              :key="language.value"
              :value="language.value"
              class="text-gray-300"
            >
              {{ language.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, label: "About", link: "/about", hash: "#about" },
        // { id: 2, label: "Projects", link: "/projects", hash: "#projects" },
        { id: 3, label: "Contact", link: "/contact", hash: "#contact" },
      ],
      languages: [
        { value: "🇬🇧", label: "en" },
        { value: "🇪🇸", label: "es" },
      ],
      selectedLanguage: "🇬🇧",
    };
  },

  methods: {
    changeLanguage() {
      // Implement logic when language changes.
    },
  },
};
</script>
<style scoped>
select::-ms-expand {
  display: none;
}
.absolute.top-0.right-0 {
  /* Positioning the flag. */
  transform: translate(50%, -50%);
}
</style>
