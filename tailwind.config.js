/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair', 'sans'],
        cinzel: ['Cinzel', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
