/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fill-animation': {
          '0%': { fill: 'transparent' },
          '100%': { fill: '#f8fafc' }, // Change to your desired color
        },
      },
      animation: {
        'fill-animation': 'fill-animation 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

