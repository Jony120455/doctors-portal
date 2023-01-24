/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes:[
     {
      doctors:{
        primary:'#0FCFEC',
        secondary:'#19D3AE',
        accent: "#2a3040",   
        neutral: "#3D4451",
          
        "base-100": "#FFFFFF",
      }
     }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
