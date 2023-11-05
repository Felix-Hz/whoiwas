<template>
  <About id="about" />
  <Contact id="contact" />
  <NuxtParticles
    id="tsparticles"
    :options="particleOptions"
    @load="onLoad"
  ></NuxtParticles>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";
import particleOptions from "@/config/particles.js";

const onLoad = (container: Container) => {
  setTimeout(() => container.play(), 2000);
};
</script>
