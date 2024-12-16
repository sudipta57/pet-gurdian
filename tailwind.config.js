/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FF9D00",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        libre: ['"Libre Baskerville"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
        robotoSerif: ['"Roboto Serif"', "serif"],
      },
    },
  },
  plugins: [],
};

