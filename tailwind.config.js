/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#111111'
      },
      fontFamily: {
        kaisei: ['Kaisei HarunoUmi', 'serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
