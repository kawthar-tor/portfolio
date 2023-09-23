/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      colors: {
        primary: "#F8F0E5",
        navy : "#27005D",
        purpleNeon : "#9400FF"
      },
      animation : {
        slideTop: ["slide-top", "1s", "cubic-bezier(0.250, 0.460, 0.450, 0.940)", "both"],
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
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