/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-darker-gray': '#1C1C1C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
