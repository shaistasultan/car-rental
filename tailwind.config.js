/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        primary: "#FE8400",
        White1:'#FFFFFF',
        White2:'#FEFEFE',
        tint:'#FFE4C6',
        Border:'#C4C4C4',
        Title:'#141414',
        Text:'#575757',
        Background:'#FBFBFB',

      },
    },
  },
  plugins: [],
}

