<template>
  <TheHeader @headerHeightChanged="updateHeaderHeight" />
  <div class="custom-dot-background m-4 p-1">
    <About :headerHeight="headerHeight" id="about" />
    <Projects />
    <Contact id="contact" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerHeight: 0,
    };
  },
  methods: {
    updateHeaderHeight(height) {
      this.headerHeight = height;
    },
  },
};
</script>
