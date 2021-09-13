// const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#ffffff',
      blue: '#073C56',
      green: {
        darkest: '#4E6151',
        dark: '#5E8C61',
        light: '#72BDA3',
        lightest: '#94E8B4',
      },
      black: {
        light: '#262626',
        faded: '#00000059',
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
    },
    extend: {
      maxWidth: {
        '1/3': '33.33%',
        '2/5': '40%',
      },
      minHeight: {
        230: '230px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
