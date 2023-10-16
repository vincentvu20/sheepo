/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/tools/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
      maxWidth: {
        '8xl': '100rem',
        '2xl': '40rem',
      },
      screens: {
        '2xsmall': { max: '640px', min: '320px' },
        xsmall: { max: '959px', min: '320px' },
        xxsmall: '960px',
        small: '1024px',
        medium: '1280px',
        large: '1440px',
        xlarge: '1680px',
        '2xlarge': '1920px',
      },
      fontFamily: {
        santoshi: ['Satoshi', 'sans-serif'],
        integralCF: ['Integral CF', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        error: '#FF3333',
        error10: 'rgba(255, 51, 51, 0.10)',
        black40: 'rgba(0, 0, 0, 0.4)',
        black60: 'rgba(0, 0, 0, 0.6)',
        warning: '#FFC633',
        snowFlake: '#F0F0F0',
        success: '#01AB31',
        limoniteBrown: '#4F4631',
        treeBarkGreen: '#314F4A',
        metal: '#31344F',
        green: '#00C12B',
        red: '#F50606',
        yellow: '#F5DD06',
        orange: '#F57906',
        skyBlue: '#06CAF5',
        vibrantBlue: '#063AF5',
        purple: '#7D06F5',
        pink: '#F506A4',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '3rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
  safelist: [
    'bg-General',
    'bg-Thematic',
    'bg-Forum',
    'bg-Training',
    'bg-Seminar',
    'bg-Report',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@headlessui/tailwindcss'),
  ],
};
