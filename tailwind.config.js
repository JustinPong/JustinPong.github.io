/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06D99E",
        dark: "#090909",
        white: "#e0def4",
        gray: "#808080",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Titillium Web", "Georgia", "serif"],
        mono: ["Fira Code"],
      },
    },
  },
  plugins: [],
};
