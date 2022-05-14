module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      gray: {
        primary: '#424949',
        secondary: '#707B7C',
        tertiary: '#B2BABB'
      },
    },
  },
  plugins: [],
}
