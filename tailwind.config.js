/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4935ff',
        secondary: '#000000',
        bgSlate: '#fafafa',
        mdSlate: '#646464',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
