// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        splaPink: '#ff2a8b',
        splaYellow: '#fff338',
        splaBlue: '#00c0ff',
        splaPurple: '#7c45ff',
        splaGreen: '#39ff14',
        splaInk: '#1f1f1f',
      },
      fontFamily: {
        splatoon: ['"Bungee"', 'sans-serif'],
      },
    },
  },
  plugins:[
  require('@tailwindcss/typography'),
  function ({ addUtilities }) {
    addUtilities({
      '.text-outline-white': {
        textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white',
      },
    });
  },
]
}
