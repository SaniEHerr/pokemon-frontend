/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        '1xs': '380px',
        '1/2xs': '402px',
        '2xs': '446px',
        '3md': '1380px',
        '3xl': '1670px',
      },
    },
  },
  plugins: [],
}