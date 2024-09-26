/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#f8f9fa",
        bgsecondary: "#e9ecef",
        componentbg: "#dee2e6",
        blue: "#0466c8"
      },
      container: {
        center: true
      }
    },
  },
  plugins: [],
}