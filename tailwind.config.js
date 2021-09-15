const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      tag: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.75rem",
      xl: "2rem",
      "2xl": "2.25rem",
      "really-big": "5rem",
    },
    fontFamily: {
      base: ["Urbanist", "sans-serif"],
      code: ["Source Code Pro", "monospace"],
    },
    colors: {
      dark: "#1a1a1a",
      light: "#fefefe",
      lightGray: colors.trueGray[200],
      gray: colors.trueGray[300],
      darkGray: colors.trueGray[500],
      darkBlue: "#1e2135",
      sky: colors.sky[400],
      teal: colors.teal[300],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      height: (theme) => ({
        100: "32rem",
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
