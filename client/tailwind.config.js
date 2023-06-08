/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '3': 'repeat(3, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '100px minmax(400px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}