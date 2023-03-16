module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif']
      },
      colors: {
        mainBg: '#F7F7F7',
        'title-green': '#079A61'
      }
    }
  },
  plugins: []
};
