/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b336",
        "primary-variant": "#93ea20",
        secondary: colors.amber["700"],
        "secondary-variant": colors.orange["500"],
        error: colors.red["600"],
        "v-gray": colors.gray["600"],
        "v-gray-light": colors.gray["200"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
