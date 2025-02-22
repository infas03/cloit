/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueGray: '#101828',
        lightGray: '#F9FAFB',
        darkGray: '#EAECF0',
        blueGray2: '#475467',
        "arctic-blue-600": "#253BFF",
        "blue-gray-800": "#1D2939",
        "blue-gray-300": "#D0D5DD",
        "blue-gray-600": "#475467",
      },
      fontFamily: {
        sans: ['"Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
