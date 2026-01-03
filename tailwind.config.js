/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8F0E5",
        navy : "#27005D",
        purpleNeon : "#9400FF"
      },
      animation : {
        slideTop: ["slide-top", "1s", "cubic-bezier(0.250, 0.460, 0.450, 0.940)", "both"]
      },
      fontFamily : {
        montserrat : ["Montserrat", "sans-serif"]
      },
      screens: {
        md: "800px",
      }
    },
  },
  plugins: [],
}

