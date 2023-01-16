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
        'mist': "url('assets/images/mist.jpeg')",
        'snow': "url('assets/images/snow.png')",
        'suny': "url('assets/images/cloudy.jpeg')",
      }
    },
  },
  plugins: [],
}