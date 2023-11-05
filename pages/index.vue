<!-- <WIP> I probably need to import all of my components 
  in the index, and navigate the scroll with it. -->
<template>
  <About id="about" />
  <Contact id="contact" />
  <div>
    <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
    ></NuxtParticles>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

// const options = {
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   background: {
//     color: { value: "#000000" },
//   },
//   particles: {
//     opacity: {
//       value: 0.05,
//     },
//     links: {
//       enable: true,
//       opacity: 0.2,
//     },
//     move: {
//       enable: true,
//     },
//     number: {
//       value: 350,
//     },
//   },
// };

const options = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  background: {
    color: { value: "#000000" },
  },
  particles: {
    opacity: {
      value: 0.05,
    },
    links: {
      enable: true,
      opacity: 0.2,
    },
    move: {
      enable: true,
      speed: 1, 
    },
    number: {
      value: 100, 
    },
    line_linked: {
      enable: true,
      distance: 100, 
      opacity: 0.3,
    },
  },
};

const onLoad = (container: Container) => {
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>
