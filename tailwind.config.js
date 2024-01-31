// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      xs: { max: "575px" },
      sm: { min: "576px", max: "897px" },
      md: { min: "898px", max: "1199px" },
      lg: { min: "1200px" },
      xl: { min: "1259px" },
    },
    extend: {
      animation: {
        text: "text 1.5s ease infinite",
        slide: "slide 120s linear infinite",
        slide_xs: "slide 80s linear infinite"
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        slide: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
      },
      colors: {
        "very-dark": "#1c2127",
        dark: "#24282e",
        "dark-gray": "#636d7b",
        "light-gray": "#a8b3be",
        green: "#377b3f",
        "dark-green": "#36483e",
        brown: "#71653f",
        "dark-brown": "#48423c",
      },
    },
  },
  plugins: [],
};
