module.exports = {
  content: [
    './themes/TwentyTwentyFive/layouts/**/*.html',
    './layouts/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}