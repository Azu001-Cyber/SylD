/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDF6EC',
          light: '#FFFBF5',
          dark: '#F5EED9',
        },
        brown: {
          DEFAULT: '#6B4226',
          light: '#8B6445',
          dark: '#4A2E1A',
        },
        terracotta: {
          DEFAULT: '#C86F3B',
          light: '#DC8F5E',
          dark: '#A95827',
        },
        sage: {
          DEFAULT: '#8A9A7B',
          light: '#A8B89A',
          dark: '#6D7C5E',
        },
        gold: {
          DEFAULT: '#D4A574',
          light: '#E4C19D',
          dark: '#B8884F',
        },
        slate: {
          DEFAULT: '#3D4852',
          light: '#556570',
          dark: '#2a3138',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
