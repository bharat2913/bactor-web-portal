const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#073C56',
      green: {
        darkest: '#4E6151',
        dark: '#5E8C61',
        light: '#72BDA3',
        lightest: '#94E8B4',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
