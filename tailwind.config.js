/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      margin:{
        'fix-scrollbar' : 'calc(100vw-100%)'
      },
      screens:{
        'bigger-desktops': '1650px',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        accent: 'var(--color-accent)',
        line: 'var(--color-border)',
      },
      borderColor: {
        line: 'var(--color-border)',
        accent: 'var(--color-accent)',
      },
      fontFamily:{
        sans:['Geist', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow:{
        DEFAULT: 'var(--shadow-rest)',
        avatar:  '0 0 0 1px var(--color-border-avatar)',
        avatar2: '0 0 0 1px var(--color-border-avatar-2)',
        avatar3: '0 0 0 1px var(--color-border-avatar-3)',
      },
      textColor: {
        accent: 'var(--color-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        danger: 'var(--color-danger)',
      },
    },
  },
  plugins: [],
}
