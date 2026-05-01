/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.2), 0 14px 30px rgba(2,6,23,0.5)'
      }
    },
  },
  plugins: [],
}

