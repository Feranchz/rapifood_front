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
        'inputGray': '#eeeeee'
      },
      fontFamily: {
        'sans': ['JTMarnie', 'Helvetica']
      },
      inset: {
        '20': '20px',
        '40': '40px'
      },
      height: {
        '28': '7rem',
        '42': '10.5rem',
        '44': '11rem',
        '60': '15rem',
        '70': '17rem',
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
      },
      maxHeight: {
        'modal': 'calc(100vh - 100px)'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    }
  },
  plugins: [],
}
