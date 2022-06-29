module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Metropolis'],
        secondary: ['Wavehaus'],
      },
      letterSpacing: {
        normal: '.01em',
        wide: '.02em',
      },
      colors: {
        dark: '#222222',
        white: {
          DEFAULT: '#ffffff',
        },
        green: {
          DEFAULT: '#4DFF74',
          dark: '#4DFF7416',
        },
        red: {
          DEFAULT: '#FE4242',
        },
        purple: {
          DEFAULT: '#FF46F3',
          dark: '#8D2486',
        },
        'gradient-light': {
          50: '#8A2387',
          100: '#E94057',
          200: '#F27121',
        },
        'gradient-dark': {
          50: '#290a28',
          100: '#500913',
          200: '#4e2105',
        },
        'modal': {
          50: '#3e1a04',
          100: '#40070f',
          200: '#210820',
        },
      },
      linearBorderGradients: {
        colors: {
          'gradient-light': ['#8A2387', '#E94057', '#F27121'],
          'gradient-soft': ['#8A238716', '#E9405716', '#F2712116']
        },
        background: {
          'transparent': ['#290a28', '#500913'],
          'soft': ['#8A238716', '#E9405716', '#F2712116'],
          'colored': 'transparent',
        },
      },
      boxShadow: {
        DEFAULT: '0px 72px 121px rgba(0, 0, 0, 0.25)',
        'modal': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        DEFAULT: '96px',
      },
      dropShadow: {
        'modal': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [require('tailwindcss-border-gradient-radius'), require('@tailwindcss/forms')],
};
