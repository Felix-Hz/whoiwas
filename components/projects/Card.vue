<template>
  <article
    class="border group shadow-md hover:shadow-xl border-light-gray rounded-tr-lg relative overflow-hidden bg-dark-gray/10 hover:bg-dark-gray/30 p-5 bg-opacity-50 hover:bg-opacity-95 transition duration-300 ease-in-out max-w-xs"
  >
    <div
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent"
    >
      <Icon
        name="material-symbols-light:arrow-outward-rounded"
        class="text-xl bg-transparent md:text-3xl lg:text-2xl transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    <div class="p-4 bg-transparent">
      <p class="text-white text-2xl bg-transparent">{{ projectName }}</p>
      <section class="text-gray-400 text-sm bg-transparent mt-2">
        {{ projectDescription }}
      </section>
      <!-- Add the icons of the tech stack used per project to the card -->
    </div>
  </article>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
  },
};
</script>
