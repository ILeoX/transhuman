/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
    },
    screens: {
      mobile: { max: '540px' },
      // => @media (min-width: 170px) { ... }

      tablet: { max: '1050px' },
      // => @media (min-width: 640px) { ... }

      laptop: { max: '1024px' },
      // => @media (min-width: 1024px) { ... }

      desktop: { max: '1280px' },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  darkMode: 'class',
};
