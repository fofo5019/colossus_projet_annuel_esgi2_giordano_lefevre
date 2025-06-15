/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#7BA7F9',
          500: '#5B8AF5',
          600: '#3B72E0',
          700: '#2C57B5',
          800: '#1E3A76',
          900: '#182752',
        },
        secondary: {
          50: '#F5F5F7',
          100: '#ECECF0',
          200: '#E2E2E8',
          300: '#ADADBF',
          400: '#8C8CA3',
          500: '#6B6B87',
          600: '#4A4A6A',
          700: '#37374F',
          800: '#2A2A3C',
          900: '#1D1D28',
        },
        accent: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F06BB8',
          500: '#E45BA0',
          600: '#C83585',
          700: '#9D2967',
          800: '#701D45',
          900: '#4D122E',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("/src/assets/hero-bg.svg")',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};