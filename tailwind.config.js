/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#06D99E",
          dark: "#0F1010",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        serif: ["Titillium Web", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
