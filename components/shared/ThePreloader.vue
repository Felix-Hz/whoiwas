<template>
  <div class="preloader flex items-center justify-center h-screen">
    <div class="text-center">
      <div v-if="currentIndex < texts.length" :key="currentIndex" ref="text">
        <div
          class="relative mx-auto p-4 w-[80vh] h-[80vh] xs:h-[50vh] xs:w-[50vh] max-w-400 max-h-400"
        >
          <p
            class="absolute inset-0 z-0 flex items-center justify-center gradient-background rounded-full tracking-tighter animate-subtle"
          ></p>
          <h1
            class="absolute inset-0 z-1 flex items-center justify-center rounded-full tracking-tighter font-medium text-9xl xs:text-7xl animate-subtle"
          >
            {{ texts[currentIndex] }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: ["Welcome", "Bienvenido", "Welkom"],
      currentIndex: 0,
      currentTextVisible: false,
    };
  },

  mounted() {
    this.animateText();
  },

  methods: {
    animateText() {
      const intervalId = setInterval(() => {
        if (this.currentIndex < this.texts.length) {
          this.currentTextVisible = true;
          setTimeout(() => {
            this.currentTextVisible = false;
            this.currentIndex++;
          }, 550);
        } else {
          clearInterval(intervalId);
          this.$emit("loading-is-over");
        }
      }, 1500);
    },
  },
};
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(225deg, #ff3cac -15%, #784ba0 35%, #2b86c5 100%);
  opacity: 0;
  transition: opacity 2s ease-in-out;
}

@keyframes subtle-animation {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-subtle {
  animation: subtle-animation 2s ease forwards;
}
</style>
