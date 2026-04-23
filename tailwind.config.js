/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1c365b',
          dark: '#0f1c2e',
          light: '#2a4f82',
        },
        gold: {
          DEFAULT: '#ee721a',
          light: '#ff9040',
        },
      },
    },
  },
  plugins: [],
}
