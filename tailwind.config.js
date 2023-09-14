/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "bridge": ["Bricolage Grotesque"],
        "poppins": ["Poppins"],
        "kanit": ["Kanit"],
        "borel": ["Borel"],
        "bebas": ["Bebas Neue"]
      },
      spacing: {
        "128": "32rem" 
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}