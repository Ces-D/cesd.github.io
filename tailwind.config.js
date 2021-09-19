const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: "0.7rem",
      tag: "0.9rem",
      sm: "1rem",
      smd: "1.25rem",
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
      // Background colors
      darkGround: "#181d1f",
      lightGround: "#f8f5f2",

      // Element Colors
      strokeL: "#232323",
      strokeD: "#F5F5F5",
      mainL: "#fffffe",
      pStrokeL: "#222525",
      pStrokeD: "#F4F5F5",

      // Highlight Colors
      highlight: "#00A19D",
      secondary: "#E05D5D",
      white: "#fefefe",

      gray: {
        100: "#F8F9FA",
        200: "#E9ECEF",
        400: "#CED4DA",
        800: "#343A40",
      },
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
      width: (theme) => ({
        "22/100": "22%",
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
