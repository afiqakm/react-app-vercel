/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '120': '410px',
      }
    }
  },
  daisyui: {
    themes: ["cupcake", "coffee"],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
