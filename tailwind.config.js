/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunits': 'Nunito'
      },
      backgroundImage:{
        'login-image': "url('/assets/img/CoffeShop1.jpg')"
      }
    },
  },
  plugins: [],
}
