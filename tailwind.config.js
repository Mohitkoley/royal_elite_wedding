/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        ovo: ['Ovo', 'serif']
      },
      colors: {
        primary: {
          DEFAULT: '#a48244',
          light: '#b6965b',
          dark: '#3d3a23'
        },
        secondary: {
          DEFAULT: '#ee959e'
        },
        cream: '#f7e7ce'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};