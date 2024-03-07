<template>
  <div>
    <header
      ref="header"
      class="fixed top-0 left-0 right-0 z-10 flex justify-between items-center xs:px-6 px-11 py-4 bg-opacity-50 bg-very-dark backdrop-blur-md"
    >
      <div class="flex items-center bg-opacity-0 bg-very-dark">
        <span class="text-white xs:text-4xl text-5xl font-bold bg-transparent">
          <!-- <NuxtLink :to="{ hash: options[0].hash }" class="bg-transparent"> -->
          <NuxtLink to="/" class="bg-transparent">
            <Icon name="ic:baseline-terminal" class="bg-transparent" />
          </NuxtLink>
        </span>
      </div>
      <div class="flex items-center bg-opacity-0 bg-very-dark">
        <div class="flex items-center space-x-12 bg-transparent">
          <a
            href="https://github.com/Felix-Hz"
            class="text-white bg-transparent"
            target="_blank"
          >
            <Icon
              name="mdi:github-face"
              class="xs:text-3xl text-4xl bg-transparent"
            />
          </a>
          <div class="relative bg-transparent">
            <div class="cursor-pointer bg-transparent">
              <Icon
                name="ic:twotone-translate"
                class="text-white xs:text-3xl text-4xl bg-transparent"
              />
              <span
                class="absolute top-0 right-0 bg-white rounded-full px-1 text-xs z-1"
              >
                {{ selectedLanguageFlag }}
              </span>
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
                {{ language.value === "en" ? "English" : "Spanish" }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
const header = ref(null);
const { locale } = useI18n();
const emit = defineEmits(["headerHeightChanged"]);

const updateHeaderHeight = () => {
  if (header.value) {
    emit("headerHeightChanged", header.value.offsetHeight);
  }
};

onMounted(() => {
  window.addEventListener("resize", updateHeaderHeight);
  // TODO: tech debt, I should use a nextTick but couldn't make it work.
  setTimeout(() => {
    updateHeaderHeight();
  }, 10);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});

const options = ref([
  { id: 1, label: "About", link: "/about", hash: "#about" },
  // { id: 2, label: "Projects", link: "/projects", hash: "#projects" },
  { id: 3, label: "Contact", link: "/contact", hash: "#contact" },
]);

const languages = ref([
  { value: "en", label: "🇬🇧" },
  { value: "es", label: "🇪🇸" },
]);

const selectedLanguage = ref(locale.value);

function changeLanguage() {
  locale.value = selectedLanguage.value;
}

const selectedLanguageFlag = computed(() => {
  const language = languages.value.find(
    (lang) => lang.value === selectedLanguage.value
  );
  return language ? language.label : "";
});
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
