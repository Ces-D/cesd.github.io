const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.dark"),
            h1: {
              color: theme("colors.sky"),
            },
          },
        },
      }),
    },

    fontSize: {
      xs: ".5rem",
      tag: "0.75rem",
      sm: ".875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    fontFamily: {
      base: ["Roboto Slab", "serif"],
    },
    colors: {
      transparent: colors.transparent,
      dark: colors.trueGray[900],
      light: colors.trueGray[50],
      gray: colors.trueGray[300],
      darkGray: colors.trueGray[400],
      sky: colors.sky[400],
      teal: colors.teal[300],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
