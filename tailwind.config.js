/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ethnocentric: ['ethnocentric', 'sans-serif']
      },
      container: {
        center: true,
        padding: '32px'
      },
      colors: {
        dark: '#0f172a',
        primary: '#00FFD3',
        secondary: '#64748b',
      },
      screens: {
        m: '425px'
      }
    },
  },
  plugins: [],
}
