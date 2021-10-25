module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      filter: { // defaults to {}
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: { // defaults to {}
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
