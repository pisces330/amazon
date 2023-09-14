/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        amazon: {
          DEFAULT: "#131921",
          backgorund: "#EAEDED",
          yellow: "#FEBD69",
          light_blue: "#232F3A",
        },
      },
    },
  },
  plugins: [],
};
