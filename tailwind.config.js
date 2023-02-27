const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      'xs': '400px',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
};
