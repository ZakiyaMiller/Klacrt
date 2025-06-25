/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',  // Make sure this is set to 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          text: 'var(--text-primary)',
          bg: 'var(--bg-primary)',
          border: 'var(--border-primary)',
        }
      }
    }
  },
  plugins: [],
}