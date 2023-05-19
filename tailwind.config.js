/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      tech: ['Share Tech Mono'],
      body: ['Exo 2'],
    },
    extend: {
      boxShadow: {
        'custom': '20px 20px 50px rgba(0,0,0,0.5)',
      },
      colors: {
        'off-white': '#E2E8F0',
        'lawn-green': '#7CFC00',
        'midnight-gray': '#1D1D29',
      },
    },
  },
  plugins: [],
}
