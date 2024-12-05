/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-1': "url('/src/assets/background.png')", // Rename for clarity
        'gradient-2': "url('/src/assets/Services.png')",   // Rename for clarity
        'gradient-3': "url('/src/assets/background.png')", // Rename for clarity
        'custom-gradient': 'linear-gradient(to bottom, #8302B6 10%, #000000 50%)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        breath: 'breath 6s ease-in-out infinite', // Default speed
        'breath-slow': 'breath 8s ease-in-out infinite', // Slower speed
        'breath-fast': 'breath 7s ease-in-out infinite', // Faster speed
        'reveal-baseline': 'revealBaseline 0.6s ease-out forwards',
        'reveal-left': 'revealLeft 0.6s ease-out forwards',
        'reveal-right': 'revealRight 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.20)' },
        },
        revealBaseline: {
          '0%': { transform: 'translateY(50px)', opacity: '0' }, // Starting below the baseline
          '100%': { transform: 'translateY(0)', opacity: '1' }, // Move to baseline position with opacity change
        },
        revealLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' }, // Starting from the left
          '100%': { transform: 'translateX(0)', opacity: '1' }, // Move to original position with opacity change
        },
        revealRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' }, // Starts from the right
          '100%': { transform: 'translateX(0)', opacity: '1' },  // Moves to the original position
        },
      },
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'], // Removed duplicate
        helvetica: ['"Helvetica World"', 'sans-serif'],
        meow: ['"Meow Script"', ...defaultTheme.fontFamily.sans],
        sans: ['"Helvetica World"', ...defaultTheme.fontFamily.sans],
        condensed: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
