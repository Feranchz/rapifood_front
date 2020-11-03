module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.tsx',
    './pages/**/*.js',
    './components/**/*.tsx',
    './components/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'thyellow': '#FFCB19',
        'inputGray': '#F6F6F6'
      },
      fontFamily: {
        'sans': ['JTMarnie', 'Helvetica']
      }
    }
  },
  variants: {},
  plugins: [],
}
