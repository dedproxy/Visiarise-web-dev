/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/Footer.jsx",
    "./src/Content.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #8302B6 10%, #000000 50%)'
      },
      fontFamily: {
        meow: ['"Meow Script"', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        sans: ['"Helvetica World"', ...defaultTheme.fontFamily.sans],
        condensed: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
};


