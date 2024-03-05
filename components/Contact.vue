<!-- When a form is submitted, add the confetti. -->

<template>
  <div class="h-screen xs:h-fit mx-auto w-5/6 container mt-4 bg-transparent">
    <section
      class="pt-4 px-4 mx-auto max-w-screen-md lg:pb-2 lg:pt-24 flex flex-col bg-transparent"
    >
      <div class="xs:pb-4 xs:mt-8 md:pt-24 lg:pt-8 bg-transparent">
        <h2
          class="xs:text-3xl text-4xl text-white-900 p-0 mb-4 tracking-tight text-center"
        >
          Let's Chat <span class="wave-animation bg-transparent"> 👋</span>
        </h2>
        <p
          class="xs:hidden mb-8 lg:text-xl lg:mb-12 font-light text-center text-gray-500"
        >
          Whether you have me in mind for a job opportunity, have stumbled upon
          a bug or want to leave some feedback, I'm all ears.
        </p>
      </div>
      <div class="mb-8 lg:mb-12 bg-transparent">
        <form
          action="https://formspree.io/f/xeqbnwlo"
          method="POST"
          class="space-y-8 flex flex-col bg-transparent"
        >
          <div class="bg-transparent">
            <!-- The _gotcha input is used as a honeypot for spam filtering  -->
            <input type="text" name="_gotcha" style="display: none" />
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-300 bg-transparent"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500 shadow-sm"
              placeholder="james.hetfield@metallica.com"
              required
            />
          </div>
          <div class="bg-transparent">
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-300 bg-transparent"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              name="subject"
              class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500 shadow-sm"
              placeholder="What's all of this about?"
              required
            />
          </div>
          <div class="sm:col-span-2 bg-transparent">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-300 bg-transparent"
              >Your message</label
            >
            <textarea
              id="message"
              name="message"
              rows="6"
              class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500 shadow-sm"
              placeholder="I'd love to know more about it. Keystroke, keystroke, keystroke..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="group relative bg-gray-700 mx-auto py-3 px-96 xs:px-16 sm:px-60 md:px-16 text-sm font-medium text-center text-white rounded-lg border border-gray-300 transition-colors hover:bg-gray-500 lg:mb-4"
          >
            Start the conversation

            <Icon
              name="ph:telegram-logo-thin"
              class="bg-transparent text-2xl transition-colors absolute right-5 top-1/2 -translate-y-1/2"
            />
          </button>
        </form>
      </div>
      <div class="bg-transparent"><TheFooter /></div>
    </section>
  </div>
</template>
<script>
if (typeof window !== "undefined") {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
}
</script>
<style scoped>
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(20deg);
  }
  20% {
    transform: rotate(-15deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.wave-animation {
  display: inline-block;
  animation: wave 2s infinite;
}
</style>
