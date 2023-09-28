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
      },
      boxShadow : {
        projectCard : "1px -1px 19px 0px #9400FF",
        skillCard : "1px 0px 7px 1px #9400FF"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}