/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fibre_franklin_italic : ['Libre_Franklin_Italic'],
        fibre_franklin_semibold : ['Libre_Franklin_SemiBold'],
      }
    },
  },
  plugins: [
    require('tailwindcss/plugin'),
  ],
}

