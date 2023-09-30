<template>
  <div class="m-5 text-md">
    Lorem ipsum dolor sit amet,<br />
    consectetur adipiscing elit,<br />
    sed do eiusmod tempor incididunt<br />
    ut labore et dolore magna aliqua.<br />
    Ut enim ad minim veniam,<br />
    quis nostrud exercitation ullamco<br />

    <n-ellipsis :line-clamp="1" class="m-5">
      Hola, como te va... <br />
      Adsdrtfyghjk <br />
      Afghjkl <br />
      ASDFHGJHK <br />
    </n-ellipsis>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { NEllipsis } from "naive-ui";

export default defineComponent({
  components: {
    NEllipsis,
  },
});
</script>
