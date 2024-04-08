/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#008080',
      'primary-dark': '#006666',
      'primary-light': '#b2d8d8',
      'light-gray': '#ededed',
      // 'light-gray': '#e0e0e0',
      // 'primary-light-two': '#66b2b2',
      'dark-gray': '#adadad',
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
}

