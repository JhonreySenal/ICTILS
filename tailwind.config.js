/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coral: "#FF6F61",
        purple: "#6B5B95",
        oliveGreen: "#88B04B",
        lightPink: "#F7CAC9",
        whiteSmoke: "#F5F5F5",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
