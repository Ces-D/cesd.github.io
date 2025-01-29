import flowbitePlugin from 'flowbite/plugin';

const PRIMARY_COLOR = {
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
};

const SECONDARY_COLOR = {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  darkMode: 'class',
  theme: {
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
      primary: PRIMARY_COLOR,
      secondary: SECONDARY_COLOR,
      outlineColor: { 300: PRIMARY_COLOR[300] },
      ringColor: {
        primary: {
          300: PRIMARY_COLOR[300],
          800: PRIMARY_COLOR[800],
        },
      },
      textColor: {
        primary: {
          400: PRIMARY_COLOR[400],
          500: PRIMARY_COLOR[500],
          900: PRIMARY_COLOR[900],
        },
        secondary: {
          400: SECONDARY_COLOR[400],
          500: SECONDARY_COLOR[500],
          900: SECONDARY_COLOR[900],
        },
      },
      backgroundColor: {
        primary: {
          100: PRIMARY_COLOR[100],
          300: PRIMARY_COLOR[300],
        },
        secondary: {
          100: SECONDARY_COLOR[100],
          300: SECONDARY_COLOR[300],
        },
      },
      borderColor: {
        primary: { 900: PRIMARY_COLOR[900] },
        secondary: { 900: SECONDARY_COLOR[900] },
      },
    },
  },
  plugins: [flowbitePlugin],
};
