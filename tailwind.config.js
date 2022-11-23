/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '120': '410px',
        '150': '550px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        flip: {
          '0%': {
            transform: 'rotateX(0deg)',
            transform: 'rotateY(0deg)',
          },
          '100%' : {
            transform: 'rotateX(-180deg)',
            transform: 'rotateY(-180deg)',
          },
        },
        reverseflip:{
          '0%': {
            transform: 'rotateX(-180deg)',
            transform: 'rotateY(-180deg)',
          },
          '100%' : {           
            transform: 'rotateX(0deg)',
            transform: 'rotateY(0deg)',
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeout: 'fadeout 1.5s ease-in forwards',
        flip: 'flip 0.5s ease-out forwards',
        reverseflip: 'reverseflip 0.5s ease-out forwards',
      }
    }
  },
  daisyui: {
    themes: ["cupcake", "coffee",],
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
