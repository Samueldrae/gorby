/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22212B',
        secondary: '#000000', 
        accent: '#DADADA', // warna aksen untuk sentuhan luxury
      },
      screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '990px',
      'xl': '1440px',
      },
      spacing: {
        '0px': '0px',
      }
    },
  },
  plugins: [],
}