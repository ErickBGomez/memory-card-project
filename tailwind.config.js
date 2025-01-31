/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FCFCFC",
      black: "#1E2024",
      darkBlue: "#282B38",
      whiteHover: "#E8EAEC",
      whiteActive: "#82848B",
    },
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
