/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      }
    }
  },
  plugins: [],
}
