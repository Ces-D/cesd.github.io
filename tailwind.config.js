module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a",
        light: "#f5f5f5",
        "baby-blue": "#e2f6ff",
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.light"),
            h1: {
              color: theme("colors.baby-blue"),
            },
          },
        },
      }),
    },

    fontFamily: {
      robot: ["Roboto", "sans-serif"],
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography")],
};
