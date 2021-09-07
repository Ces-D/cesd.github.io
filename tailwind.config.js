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
      base: ["Roboto Slab", "serif"],
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

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          // TODO: style the <pre><code> blocks to look good
          css: {
            color: theme("colors.dark"),
            fontFamily: theme("fontFamily"),
            pre: {
              backgroundColor: theme("colors.darkBlue"),
              color: theme("colors.light"),
            },
            "pre code::after": {
              backgroundColor: theme("colors.teal"),
              "padding-right": "unset",
            },
            code: {
              color: theme("colors.light"),
              fontWeight: "400",
              "border-radius": "0.25rem",
            },
          },
        },
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
