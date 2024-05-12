/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      blackpure: '#000',
      dark_b: '#171718',
      black_border: '#26292d',
      white_b: '#fff',
      purple: '#5c62ec',
      
      'royal-blue': {
        '50': '#eef2ff',
        '100': '#e1e8fe',
        '200': '#c8d4fd',
        '300': '#a7b8fa',
        '400': '#8491f5',
        '500': '#5c62ec',
        '600': '#504ae1',
        '700': '#433cc6',
        '800': '#3833a0',
        '900': '#31307f',
        '950': '#1e1c4a',
    },
    

    }
  },
  plugins: [],
}