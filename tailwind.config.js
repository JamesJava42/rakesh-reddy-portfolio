/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all files in src/
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#a855f7', // Purple
        'secondary': '#3b82f6', // Blue
        'dark-bg': '#0f0c29', // Deep dark blue/purple
      },
    },
  },
  plugins: [],
}