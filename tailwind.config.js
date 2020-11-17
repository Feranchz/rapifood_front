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
      },
      inset: {
        '20': '20px',
        '40': '40px'
      },
      height: {
        '128': '32rem' 
      },
      boxShadow: {
        'gradient': 'inset 5em 1em rgba(0,0,0,0.5)'
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5
      }
    }
  },
  variants: {},
  plugins: [],
}
