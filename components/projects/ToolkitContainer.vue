<template>
  <!-- Tech Stack Section  -->
  <div class="mt-20 xs:mt-10 xs:pb-4 md:pt-24 lg:pt-8 bg-transparent">
    <h2
      class="xs:hidden text-4xl text-white-900 p-0 mb-4 tracking-tight text-center bg-transparent"
    >
      {{ $t("title_3") }}
    </h2>
    <p
      class="xs:hidden mb-8 lg:text-xl lg:mb-12 font-light text-center text-gray-500"
    >
      {{ $t("subtitle_toolkit") }}
    </p>
    <div class="bg-transparent">
      <ProjectsToolkit />
    </div>
  </div>
</template>
