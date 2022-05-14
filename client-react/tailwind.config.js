module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      gray: {
        primary: '#424949',
        secondary: '#707B7C',
        tertiary: 'rgba(112, 123, 124, 0.5)'
      },
      white: {
        primary: '#ffffff',
      },
    },
  },
  plugins: [],
}
