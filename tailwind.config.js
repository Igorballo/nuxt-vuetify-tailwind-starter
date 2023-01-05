/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: true,
  },
  important: true,
  content: ["./pages/**/*.{vue,js}", "./components/**/*.{vue,js}", "./layouts/**/*.{vue,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        logex: {
          dark_chocolate: "#322328",
          light_chocolate: "#4a3e40",
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),

  ],
}
