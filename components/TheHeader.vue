<!-- Header.vue -->
<!-- <!!!> USE NUXT-LINKS FOR NAVIGATION -->
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5"
  >
    <div class="flex items-center">
      <span class="text-white text-2xl font-bold">
        <!-- <a href="/">F</a> -->
        <NuxtLink to="/">F</NuxtLink>
      </span>
    </div>
    <div class="flex items-center space-x-4">
      <ul class="flex space-x-4">
        <li v-for="option in options" :key="option.id">
          <!-- NuxtLink can also take a link as an argument  -->
          <NuxtLink
            :to="{ hash: option.hash }"
            class="text-white hover:text-purple-400"
          >
            {{ option.label }}
          </NuxtLink>
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
        { id: 1, label: "About", link: "/about", hash: "#about" },
        { id: 2, label: "Projects", link: "/projects", hash: "#projects" },
        { id: 3, label: "Contact", link: "/contact", hash: "#contact" },
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
