/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-background)',
        foreground: 'var(--text-foreground)',
        card: 'var(--bg-card)',
        border: 'var(--border-color)',
      },
    },
  },
  plugins: [],
}
