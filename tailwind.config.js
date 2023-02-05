/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        lightGray: 'hsl(0, 0%, 98%)',
        grayishBlue: 'hsl(228, 45%, 44%)',
        darkBlue: ' hsl(228, 39%, 23%)',
        paleRed: 'hsl(13, 100%, 96%)',
        darkestBlue: 'hsl(233, 12%, 13%)'
      },
    },
  },
  plugins: [],
}

