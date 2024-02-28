<template>
  <div class="md:p-12 bg-transparent">
    <NuxtLink
      :to="{
        hash: pages[2].hash,
      }"
      class="text-white text-xl bg-transparent"
    >
      <Icon
        name="material-symbols:keyboard-double-arrow-down-rounded"
        class="xs:text-4xl text-5xl xs:mt-14 mt-20 opacity-70 bg-transparent animate-floatUpDown stop-animation-hover"
    /></NuxtLink>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        { id: 1, label: "About", link: "/about", hash: "#about" },
        { id: 2, label: "Projects", link: "/projects", hash: "#projects" },
        { id: 3, label: "Contact", link: "/contact", hash: "#contact" },
      ],
    };
  },
};
</script>
<style>
@keyframes floatUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
}

.animate-floatUpDown {
  animation: floatUpDown 4s infinite;
}

.stop-animation-hover:hover {
  animation: none;
}
</style>
