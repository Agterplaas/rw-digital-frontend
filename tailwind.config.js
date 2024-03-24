/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F4F4F4',
        silver: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#bababa',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
          950: '#363636'
        }
      }
    }
  },
  plugins: []
};
