/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0b0b0a',
          50: '#f5f5f4',
          100: '#e7e6e3',
          200: '#cfcdc8',
          300: '#a8a59d',
          400: '#7a7770',
          500: '#4d4b47',
          600: '#2f2e2b',
          700: '#1f1e1c',
          800: '#151513',
          900: '#0b0b0a',
          950: '#050504',
        },
        ivory: {
          DEFAULT: '#f7f2e9',
          50: '#fdfcf9',
          100: '#faf6ee',
          200: '#f7f2e9',
          300: '#f1e9d8',
          400: '#e7dcc4',
          500: '#d9c9a8',
        },
        gold: {
          DEFAULT: '#c9a24b',
          50: '#fbf7ec',
          100: '#f5ecd3',
          200: '#ecd9a6',
          300: '#e0c074',
          400: '#d4ae5c',
          500: '#c9a24b',
          600: '#b0893a',
          700: '#8a6a2d',
          800: '#634a22',
          900: '#3d2d15',
        },
        stone: {
          DEFAULT: '#d8d5ce',
          50: '#fafaf8',
          100: '#f2f1ee',
          200: '#e6e4df',
          300: '#d8d5ce',
          400: '#b8b4aa',
          500: '#969189',
          600: '#736f67',
          700: '#544f49',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Jost', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionDuration: {
        700: '700ms',
        900: '900ms',
      },
    },
  },
  plugins: [],
};
