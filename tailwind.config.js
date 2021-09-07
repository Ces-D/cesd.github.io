const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ".5rem",
      tag: ".65rem",
      sm: ".75rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "really-big": "5rem",
    },
    fontFamily: {
      base: ["Urbanist", "sans-serif"],
      code: ["Source Code Pro", "monospace"],
    },
    colors: {
      dark: colors.trueGray[900],
      light: "#fefefe",
      lightGray: colors.trueGray[100],
      gray: colors.trueGray[300],
      darkGray: colors.trueGray[400],
      darkBlue: "#1e2135",
      sky: colors.sky[400],
      teal: colors.teal[300],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },

    extend: {},
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
