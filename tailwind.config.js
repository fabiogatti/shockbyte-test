/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts}"],
  content: [],
  theme: {
    colors: {
      "gray-light": "#1E1F25",
      "gray-dark": "#131517",
      "blue-active": "#5051F9",
      "white-text": "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
