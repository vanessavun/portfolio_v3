/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sacramento: ['Sacramento', 'sans-serif'],
      sans: ['Josefin Sans', 'sans-serif'],
      poppins: ['Poppins', 'cursive']
    }
  },
  plugins: []
}

// purge: [
//   "./src/**/*.{html,js,jsx}",
//   "./public/index.html",
//   "./src/*.jsx"
// ]