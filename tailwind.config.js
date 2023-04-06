/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "black-faded": "#767676",
      black: "#000000",
      white: "#ffffff",
      "text-grey": "#AAAAAA",
      "border-grey": "#DDDDDD",
      "light-grey": "#EEEEEE",
      "btn-red": "#BE0000",
      "infinity-grey": "#eeeeee",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
