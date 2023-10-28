<!-- When a form is submitted, add the confetti. -->

<template>
  <div class="component-container">
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
        >
          Let's Chat <span class="wave-animation"> 👋</span>
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Whether you have me in mind for a job opportunity, have stumbled upon
          a 🪲 or want to leave some feedback, I'm all ears.
        </p>
        <form action="/" class="space-y-8 flex flex-col">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="james.hetfield@metallica.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="What's all of this about?"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-purple-500"
              placeholder="I'd love to know more about it. Keystroke, keystroke, keystroke..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-800 sm:w-fit hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 self-end"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
<style scoped>
.component-container {
  height: 100vh;
  margin: auto;
  width: 50%;
  color: red;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(12.5deg);
  }
  20% {
    transform: rotate(25deg);
  }
  30% {
    transform: rotate(50deg);
  }
  40% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(12.5deg);
  }
  60% {
    transform: rotate(0deg);
  }
  70% {
    transform: rotate(-12.5deg);
  }
  80% {
    transform: rotate(-25deg);
  }
  90% {
    transform: rotate(-50deg);
  }
  100% {
    transform: rotate(-25deg);
  }
}

.wave-animation {
  display: inline-block;
  animation: wave 2s infinite;
}
</style>
