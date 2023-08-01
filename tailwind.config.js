/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "slate-800" : '#3a4c64',
      }
    },
  },
  plugins: [],
}

