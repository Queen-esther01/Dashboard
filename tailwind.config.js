/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      black: '#000000',
      transparent: 'transparent',
      pink: '#EF2C5A',
      lightPink: '#FFFBF7',
      gray: '#0A0A0A',
      lightGray__heading: '#8D8D8D',
      lightGray__border: '#EDEDED',
      lightGray__placeholder: '#565C69',
      lightGray__paginationhighlight: '#F0F0F0',
      gray__tablehead: '#5F5F5F',
      gray__cell: '#484848',
      gray__tablehighlight: '#F7F7F7',
      gray__pagination: '#A39D9E'

    },
  },
  plugins: [],
}

