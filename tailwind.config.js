/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"
];
export const theme = {
  extend: {
    colors: {
      'midnight': '#111111'
    },
    fontFamily: {
      kaisei: ['Kaisei HarunoUmi', 'serif']
    }
  },
};
export const plugins = [require('@tailwindcss/typography')];
