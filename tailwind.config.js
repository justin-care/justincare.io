/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm':'400px'
      },
      listStyleImage: {
        'checkmark': 'url("/src/assets/square-check-solid.svg")',
      }
    },
  },
  plugins: [],
}
