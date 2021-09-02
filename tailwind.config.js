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

    fontFamily: {
      robot: ["Roboto", "sans-serif"],
    },
    colors: {
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
