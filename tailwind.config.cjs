/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/index.html",
    "./src/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: []
}

// purge: [
//   "./src/**/*.{html,js,jsx}",
//   "./public/index.html",
//   "./src/*.jsx"
// ]