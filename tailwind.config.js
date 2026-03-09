/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      tech: ['Share Tech Mono'],
      body: ['Exo 2'],
    },
    extend: {
      colors: {
        'off-white': '#E2E8F0',
        'lawn-green': '#7CFC00',
        'midnight-gray': '#1D1D29',
      },
    },
  },
  plugins: [],
}
