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
        slideToRight : "transition duration-700 ease-in-out transform hover:translate-x-1",
        slideTop : "transition duration-700 ease-in-out transform hover:-translate-y-1"
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