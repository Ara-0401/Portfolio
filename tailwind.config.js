/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'surface-dark': '#0d0d0d',
        'surface':      '#141414',
        'surface-2':    '#1a1a1a',
        'text-primary': '#f5f5f5',
        'text-muted':   '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
