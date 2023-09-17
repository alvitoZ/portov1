/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    // 	blue: "#1fb6ff",
    // 	pink: "#ff49db",
    // 	orange: "#ff7849",
    // 	green: "#13ce66",
    // 	"gray-dark": "#273444",
    // 	gray: "#8492a6",
    // 	"gray-light": "#d3dce6",
    // font-family: 'DM Sans';
    // },
    fontFamily: {
      dmsans: "DM Sans",
      custom: "'Poppins', sans-serif",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
