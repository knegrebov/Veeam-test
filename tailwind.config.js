/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald["700"],
        "primary-variant": colors.cyan["700"],
        secondary: colors.amber["700"],
        "secondary-variant": colors.orange["700"],
        error: colors.red["600"],
        "v-gray": colors.gray["600"],
        "v-gray-light": colors.gray["200"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
