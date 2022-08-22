/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        big: "1.375rem",
      },
      colors: {
        primary: "#8bacda",
        secondary: "#00fff7",
        main: "#0d192b",
        "main-shadow": "#0c1729",
        card: "#14253d",
        line: "#2f415b",
        white: "#fcfeff",
      },
      boxShadow: {
        "3xl": "0 40px 25px 10px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
