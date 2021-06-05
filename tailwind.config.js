const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        'balsamiq':["Balsamiq Sans",'cursive'],
        'chewy':["Chewy","cursive"]
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
      backgroundColor: {
        ycard: "#f5bf00",
        bcard: "#4fb0d7",
      },

      screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... } 

          'md': '768px',
          // => @media (min-width: 768px) { ... }

          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
      fontSize: {
       '7xl': '5rem',
       '8xl': '6rem',
       '9xl': '7rem',
       '10xl': '8rem',
      }        
    },
  },
})
