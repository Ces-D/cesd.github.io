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
      dark: "#212121",
      light: "#EFEFEF",
      gray: {
        100: "#E1E2E4",
        200: "#C7C9CB",
        400: "#444444",
        800: "#161617",
      },
      teal: "#22C8B2",
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
      minHeight: (theme) => ({
        56: "14rem",
      }),
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
