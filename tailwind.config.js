/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        greenLight: '#5cd034',
        blueLight: '#039df7',
        greenDark: '#24a322',
        blueDark: '#00568b',
        orangeLight: '#fbd62f',
        orangeDark: '#fbb107',
        font: '#7c7c80',
        fontBlack: '#1d1d1f',
        fontGrey: '#8e8e93',
        fontDarkGrey: '#6c6c70',
        purple: '#5e5be6',

        greenGradient: 'linear-gradient(90deg, #51b82d 1.54%, #007000 100%)'
      },
      fontFamily: {
        base: ['var(--font-family)'],
        secondFamily: ['var(--second-family)'],
        geologica: ['var(--font5)'],
        montserrat: ['var(--font6)']
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        17: '17px',
        22: '22px',
        24: '24px'
      }
    }
  },
  plugins: []
}
