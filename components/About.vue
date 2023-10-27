<template>
  <div
    class="component-container container flex items-center justify-center m-auto selection:h-screen"
  >
    <!-- First block (60% width) -->
    <div class="w-4/5 h-full py-72">
      <div class="font-bold text-7xl">Felix Hernandez Vieyra</div>
      <div class="text-2xl my-10">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt<br />
        ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,<br />
        quis nostrud exercitation ullamco<br />
      </div>
      <!-- List of icons -->
      <div class="flex space-x-12">
        <a href="https://linkedni.com">
          <Icon name="uil:linkedin" class="text-4xl"/>
        </a>
        <a href="https://github.com">
          <Icon name="uil:github" class="text-4xl" />
        </a>
        <a href="mailto:felix.hzv@gmail.com"
          ><Icon name="uil:envelope-alt" class="text-4xl"
        /></a>
        <a href="https://mastodon.social"> <Icon name="mdi:mastodon" class="text-4xl"/></a>
      </div>
    </div>

    <!-- Second block (40% width) -->
    <div class="w-2/5 h-full py-96">
      <div class="rounded-full overflow-hidden h-40 w-40">
        <!-- <nuxt-img
          src="~/public/media/avatar.png"
          alt=""
          class="float-left margin-fleche"
          quality="30"
        /> -->
        <img
          src="~/public/media/avatar.png"
          alt="Avatar"
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Apply styles to the root element of the component */
.component-container {
  width: 100%;
  height: 100vh;
}
</style>
