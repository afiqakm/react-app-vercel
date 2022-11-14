/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '120': '410px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeout:{
          '0%' : { opacity:'1'},
          '100%' :{ opacity: '0'},
          
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeout: 'fadeout 1.5s ease-out forwards',
      }
    }
  },
  daisyui: {
    themes: ["cupcake", "coffee",],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
