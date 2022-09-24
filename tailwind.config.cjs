/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Yeseva One", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
