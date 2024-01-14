<template>
  <div>
    <NuxtLink
      :to="{
        hash: pages[2].hash,
      }"
      class="text-white text-xl"
    >
      <Icon
        name="material-symbols:keyboard-double-arrow-down-rounded"
        class="text-5xl mt-28 opacity-30 animate-floatUpDown"
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
</style>
