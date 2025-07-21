// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg:"1550px", // laptop
        md: "1025px", // mini laptop
        sm: "767px", // tablet
        xs: "320px" // mobile
      }
    },
  },
  plugins: [],
}