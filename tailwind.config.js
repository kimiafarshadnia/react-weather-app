/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloud': "url('assets/images/cloud.jpeg')",
        'rain': "url('assets/images/rainy.jpeg')",
        'haze': "url('assets/images/haze.jpeg')",
        'snow': "url('assets/images/snow.png')",
        'suny': "url('assets/images/sunny.jpeg')",
      },
      
      fontSize: {
        '2xs': ['0.6rem'],
        '1xs': ['0.7rem'],
      }
    },
    
  },
  plugins: [],
}