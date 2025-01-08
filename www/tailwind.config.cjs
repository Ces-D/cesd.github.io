import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      sm: 'clamp(0.6875rem, 0.6528rem + 0.1852vw, 0.875rem)',
      md: 'clamp(0.9375rem, 0.9028rem + 0.1852vw, 1.125rem)',
      lg: 'clamp(1.125rem, 0.8935rem + 1.2346vw, 2.375rem)',
      xl: 'clamp(1.25rem, 0.9259rem + 1.7284vw, 3rem)',
      '2xl': 'clamp(1.5625rem, 1.2384rem + 1.7284vw, 3.3125rem)',
    },
    colors: {
      'gray-black': '#403f43',
      'gray-black-dark': '#323135',
      'gray-white': '#d4d3e0',
      'gray-white-lite': '#EBEAF0',
    },
    fontFamily: {
      lato: ['Lato', 'serif'],
      cookie: ['Cookie', 'serif'],
    },
    extend: {
      width: {
        110: '28rem',
        120: '32rem',
        130: '36rem',
        140: '40rem',
      },
      colors: {
        white: '#eeedf9',
        black: '#1b1a1c',
      },
      primary: {
        50: '#FFF5F2',
        100: '#FFF1EE',
        200: '#FFE4DE',
        300: '#FFD5CC',
        400: '#FFBCAD',
        500: '#FE795D',
        600: '#EF562F',
        700: '#EB4F27',
        800: '#CC4522',
        900: '#A5371B',
      },
      outlineColor: {
        300: '#FFD5CC',
      },
      ringColor: {
        primary: {
          300: '#FFD5CC',
          800: '#CC4522',
        },
      },
      textColor: {
        primary: {
          400: '#FFBCAD',
          500: '#FE795D',
          900: '#A5371B',
        },
      },
      borderColor: {
        primary: {
          900: '#A5371B',
        },
      },
    },
  },
  plugins: [flowbitePlugin],
};
