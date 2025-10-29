/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/index.html'
  ],
  theme: {
    extend: {
  animation: {
    gradientSlow: "gradient 12s ease infinite",
  },
  keyframes: {
    gradient: {
      "0%, 100%": { "background-position": "0% 50%" },
      "50%": { "background-position": "100% 50%" },
    },
  },
},
  },
  plugins: [],
};
