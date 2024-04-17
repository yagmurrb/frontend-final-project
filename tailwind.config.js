/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#211E23', 
        darkH1: '#AEBCCF',
        darkH2: '#B7AAFF',
      },
    },
  },
  plugins: [],
}