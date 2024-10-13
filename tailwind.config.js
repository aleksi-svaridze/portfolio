/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        "dark-gray": "#333136",
        "light-gray": "#F1F3F5",
        black: "#1D1C1E",
        peach: "#E7816B",
        "light-peach": "#FFAD9B",
        "extra-light-peach": "#FDF3F0",
      },
    },
  },
  plugins: [],
};
