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
        'xsm':'325px'
      },
      fontFamily: {
        'teko': ['Teko', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}
