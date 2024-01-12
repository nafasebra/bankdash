/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2D60FF',
          200: '#343C6A',
        },
        yellow: '#FEAA09',
        light: '#F5F7FA',
        magenta: '#FE5C73',
        'dark-blue': '#718EBF',
      },
    },
  },
  plugins: [],
}

