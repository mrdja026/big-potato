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
          DEFAULT: 'oklch(0.9 0.01 280)',
          dark: 'oklch(0.25 0.02 280)',
        },
        input: {
          DEFAULT: 'oklch(0.92 0 0)',
          dark: 'oklch(0.22 0.01 280)',
        },
        ring: {
          DEFAULT: 'oklch(0.55 0.25 280)',
          dark: 'oklch(0.65 0.22 280)',
        },
        background: {
          DEFAULT: 'oklch(0.98 0 0)',
          dark: 'oklch(0.12 0.01 280)',
        },
        foreground: {
          DEFAULT: 'oklch(0.15 0 0)',
          dark: 'oklch(0.95 0 0)',
        },
        primary: {
          DEFAULT: 'oklch(0.55 0.25 280)',
          foreground: 'oklch(0.98 0 0)',
          dark: 'oklch(0.65 0.22 280)',
          darkForeground: 'oklch(0.12 0 0)',
        },
        secondary: {
          DEFAULT: 'oklch(0.96 0.01 280)',
          foreground: 'oklch(0.25 0 0)',
          dark: 'oklch(0.22 0.02 280)',
          darkForeground: 'oklch(0.95 0 0)',
        },
        destructive: {
          DEFAULT: 'oklch(0.577 0.245 27.325)',
          foreground: 'oklch(0.577 0.245 27.325)',
          dark: 'oklch(0.396 0.141 25.723)',
          darkForeground: 'oklch(0.637 0.237 25.331)',
        },
        muted: {
          DEFAULT: 'oklch(0.95 0 0)',
          foreground: 'oklch(0.5 0 0)',
          dark: 'oklch(0.22 0.01 280)',
          darkForeground: 'oklch(0.65 0 0)',
        },
        accent: {
          DEFAULT: 'oklch(0.65 0.2 260)',
          foreground: 'oklch(0.98 0 0)',
          dark: 'oklch(0.55 0.18 260)',
          darkForeground: 'oklch(0.95 0 0)',
        },
        popover: {
          DEFAULT: 'oklch(1 0 0)',
          foreground: 'oklch(0.15 0 0)',
          dark: 'oklch(0.15 0.01 280)',
          darkForeground: 'oklch(0.95 0 0)',
        },
        card: {
          DEFAULT: 'oklch(1 0 0)',
          foreground: 'oklch(0.15 0 0)',
          dark: 'oklch(0.15 0.01 280)',
          darkForeground: 'oklch(0.95 0 0)',
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
