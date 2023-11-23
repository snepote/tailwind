const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        15: '3.75rem' /* 60px */,
      },
      colors: {
        white: '#FFFFFF',
        cp_blue: {
          100: '#ECF5FB',
          200: '#E3EDFF',
          300: '#C2CCF6',
          400: '#7D8FDB',
          500: '#2E6FE3',
          600: '#3C57C9',
          700: '#1C349B',
          800: '#0C1E6A',
        },
        cp_red: {
          100: '#FFF4F2',
          200: '#FFECE9',
          300: '#FFDED8',
          400: '#FFC8BE',
          500: '#FFAC9D',
          600: '#FF907C',
          700: '#FF755C',
          800: '#FC5A43',
        },
        cp_black: {
          100: '#F8F9FB',
          200: '#F3F4F8',
          300: '#EAECF0',
          400: '#D2D4DA',
          500: '#9496A1',
          600: '#777986',
          700: '#5B5D6B',
          800: '#404252',
          900: '#101223'
        },        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
