<template>
  <ThePreloader
    :class="loaded ? 'hidden' : ''"
    @loading-is-over="loadingIsOver"
  />

  <section v-if="loaded">
    <TheHeader @headerHeightChanged="updateHeaderHeight" />
    <section class="custom-dot-background m-4 p-1">
      <About :headerHeight="headerHeight" id="about" />
      <Projects />
      <Contact id="contact" />
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 0,
      loaded: false,
    };
  },
  methods: {
    updateHeaderHeight(height) {
      this.headerHeight = height;
    },
    loadingIsOver() {
      setTimeout(() => {
        this.loaded = true;
      }, 50);
    },
  },
};
</script>
