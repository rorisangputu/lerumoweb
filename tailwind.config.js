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
        spacegrotesk: ["Space Grotesk", "san-serif"]
      },
      colors: {
        bg: "#f8f9fa",
        bgsecondary: "#f2f2f2",
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