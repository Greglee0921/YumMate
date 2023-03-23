module.exports = {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif']
      },
      colors: {
        mainBg: '#ECD9B6',
        'title-green': '#079A61',
        nav: '#2E201A',
        'link-hilight': '#A96130',
        logo: '#FE9635',
        totalResults: '#757575'
      },
      backgroundImage: {
        hero: "url('../src/assets/cutting-board2.jpg')"
      },
      screens: {
        custom: '1200px'
      }
    }
  },
  plugins: []
};
