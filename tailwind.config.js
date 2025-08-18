/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: [defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
