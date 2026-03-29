/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff6a00',
        'primary-dark': '#e55e00',
        'primary-light': '#ff8533',
        dark: {
          950: '#080808',
          900: '#0d0d0d',
          800: '#151515',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#3d3d3d',
          300: '#5a5a5a',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
