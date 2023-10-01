<template></template>
<script>
export default {
  data() {
    return {
        // store the data in the store with Pinia
      pages: [
      { id: 0, label: "Index", link: "/about" },
        { id: 1, label: "About", link: "/about" },
        { id: 2, label: "Projects", link: "/projects" },
        { id: 3, label: "Contact", link: "/contact" },
      ],
  },
}}
</script>
