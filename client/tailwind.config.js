/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      dark: "#282828",
      black: "#121212",
      white: "#FFFFFF",
      gray: "#B3B3B3",
      green: "#57B65F",
    },
  },
  plugins: [],
};
