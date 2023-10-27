<template>
  <div
    class="component-container container flex items-center justify-center m-auto px-40 h-screen"
  >
    <!-- First block (60% width) -->
    <div class="w-3/5 h-full overflow-y-scroll py-40">
      <div class="font-bold text-4xl">Felix Hernandez Vieyra</div>
      <div class="text-md my-10">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,<br />
        sed do eiusmod tempor incididunt<br />
        ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam,<br />
        quis nostrud exercitation ullamco<br />
      </div>
      <!-- List of icons -->
      <div class="flex space-x-12">
        <a href="https://linkedni.com"
          ><img src="linkedin-icon.png" alt="LinkedIn" class="w-6 h-6"
        /></a>
        <a href="https://github.com"
          ><img src="github-icon.png" alt="GitHub" class="w-6 h-6"
        /></a>
        <a href="mailto:felix.hzv@gmail.com"
          ><img src="email-icon.png" alt="Email" class="w-6 h-6"
        /></a>
        <a href="https://mastodon.social"
          ><img src="mastodon-icon.png" alt="Mastodon" class="w-6 h-6"
        /></a>
      </div>
    </div>

    <!-- Second block (40% width) -->
    <div class="w-2/5 h-full py-52">
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
  margin-top: 12%;
  width: 80%;
  height: 100vh;
}
</style>
