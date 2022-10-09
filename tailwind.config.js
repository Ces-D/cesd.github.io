/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      code: 'Cascadia Code',
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: { },
  },
  plugins: [require('@tailwindcss/typography')],
}
