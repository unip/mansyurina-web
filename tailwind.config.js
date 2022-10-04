module.exports = {
  content: [
    "./index.html",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./static/**/*.{js,css}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        "green-baby": "#B3D968",
        peach: "#F6C346",
        "dark-red": "#7C3939",
        grey: "#EBEBEB",
        "dark-grey": "#A1A1A1",
      },
    },
  },
  plugins: [],
};
