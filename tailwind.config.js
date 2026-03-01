/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#7A0F1B',
        crimson:  '#9E1B25',
        scarlet:  '#B22222',
        cream:    '#F5EFE6',
        parchment:'#EDE3D6',
        wwhite:   '#FBF8F4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}