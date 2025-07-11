/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  colors: {
        'primary-color' : '#AACCFF',
       //'primary-color' :'#73AFD2',
        'secondary-color' : '#5c9cff',
        'highlight-color' : '#F8F8FF',
        'hover-color' : '#0058e0',
        'header-hover-color': '#589bff'
      },
      width: {
        '96': '24rem', 
        '112': '32rem',
        '128': '40rem',
           },
      height: {
        '96': '24rem',
        '112': '32rem',
        '128': '40rem',
       },
      },
  },
  plugins: [],
}

