<template>
  <TheHeader @headerHeightChanged="updateHeaderHeight" />
  <About :headerHeight="headerHeight" id="about" />
  <Projects />
  <Contact id="contact" />
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
