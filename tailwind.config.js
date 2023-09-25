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
        purpleNeon : "#9400FF",
        terminalGreenText : "#05FF0F",
      },
      backgroundColor : {
        terminalGray : "#3E3C41",
        terminalTop : "#D9D9D9"
      }
      ,
      animation : {
      },
      fontFamily : {
        montserrat : ["Montserrat", "sans-serif"]
      },
      screens: {
        md: "800px",
      },
      width : {
        icon : "35px"
      },
      height : {
        icon : "35px"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}