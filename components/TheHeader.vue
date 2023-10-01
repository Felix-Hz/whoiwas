<!-- <template>
  <div>
    <n-gradient-text type="success" class="m-5 text-2xl">
      A ver si esta verga funciona
    </n-gradient-text>
  </div>
  
</template>
<script>
import { NGradientText } from "naive-ui";

export default defineComponent({
  components: {
    NGradientText,
  },
});
</script> -->

<!-- Header.vue -->
<template>
  <header class="flex justify-between items-center p-5">
    <div class="flex items-center">
      <span class="text-white text-2xl font-bold"> <a href="/">F</a></span>
    </div>
    <div class="flex items-center space-x-4">
      <ul class="flex space-x-4">
        <li v-for="option in options" :key="option.id">
          <a :href="option.link" class="text-white hover:text-gray-400">{{
            option.label
          }}</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center">
      <div class="flex items-center space-x-12">
        <!-- Add a wrapper div -->
        <a href="https://github.com/Felix-Hz" class="text-white">
          <img src="github-icon.png" alt="GitHub" class="w-6 h-6" />
        </a>
        <select
          v-model="selectedLanguage"
          class="text-white bg-transparent border-none"
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { id: 1, label: "About", link: "/about" },
        { id: 2, label: "Projects", link: "/projects" },
        { id: 3, label: "Contact", link: "/contact" },
      ],
      languages: [
        { value: "en", label: "🇬🇧" },
        { value: "es", label: "🇪🇸" },
        // Add more language options as needed
      ],
      selectedLanguage: "en", // Set the default language
    };
  },
};
</script>

<style scoped>
/* No additional scoped styles needed */
</style>
