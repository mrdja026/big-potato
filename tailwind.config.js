/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          DEFAULT: '#d6ccc2',
          dark: '#d5bdaf',
        },
        input: {
          DEFAULT: '#d6ccc2',
          dark: '#d5bdaf',
        },
        ring: {
          DEFAULT: '#d5bdaf',
          dark: '#e3d5ca',
        },
        background: {
          DEFAULT: '#edede9',
          dark: '#d5bdaf',
        },
        foreground: {
          DEFAULT: '#2c2416',
          dark: '#edede9',
        },
        primary: {
          DEFAULT: '#d5bdaf',
          foreground: '#edede9',
          50: '#f5ebe0',
          100: '#e3d5ca',
          200: '#d5bdaf',
          300: '#c9a896',
          400: '#bd9480',
          500: '#b18069',
          600: '#a56c52',
          700: '#99583c',
          800: '#8d4426',
          900: '#813010',
        },
        secondary: {
          DEFAULT: '#e3d5ca',
          foreground: '#2c2416',
          50: '#f5ebe0',
          100: '#e3d5ca',
          200: '#d6ccc2',
          300: '#c9bfb8',
          400: '#bdb2af',
          500: '#b0a5a5',
          600: '#a3989a',
          700: '#968b8f',
          800: '#897e84',
          900: '#7c7179',
        },
        destructive: {
          DEFAULT: '#a56c52',
          foreground: '#edede9',
        },
        muted: {
          DEFAULT: '#f5ebe0',
          foreground: '#8d7b68',
        },
        accent: {
          DEFAULT: '#d6ccc2',
          foreground: '#2c2416',
        },
        popover: {
          DEFAULT: '#f5ebe0',
          foreground: '#2c2416',
        },
        card: {
          DEFAULT: '#f5ebe0',
          foreground: '#2c2416',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
}
