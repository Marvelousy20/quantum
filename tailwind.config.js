/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   primary: '#03B9FF',
    //   secondary: '#3F3BFC',
    //   tertiary: '#E13BFC',
    //   'dark-grey': '#242464',
    //   'primary-black': '#242464',
    //   grey: '#5D5DC5',
    //   white: '#FFFFFF',
    //   'lightest-grey': '#FAFAFF',
    //   'light-grey': '#E0E0FF',
    //   'error-red': '#F04C4C',
    //   'success-green': '#88DA62',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      exbold: ['"Altone-ExtraBold"', 'sans-serif'],
      smbold: ['"Altone-SemiBold"', 'sans-serif'],
      boldn: ['"Altone-Bold"', 'sans-serif'],
      regular: ['"Altone-Regular"', 'sans-serif'],
      ce: ['"CoffeeExtra"', 'sans-serif']
    },
  },
  plugins: [],
};
