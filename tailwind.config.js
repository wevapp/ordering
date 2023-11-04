/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px', // Define your custom "xs" screen
        'xxs': '320px',
      },
    },
  },
  plugins: [],
}
