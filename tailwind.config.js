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
        accent: 'var(--color-border-avatar)',
      },
      fontFamily:{
        sans:['Manrope', 'sans-serif']
      },
      boxShadow:{
        avatar: '0 0 0 1px var(--color-border-avatar)',
        avatar2: '0 0 0 1px var(--color-border-avatar-2)',
        avatar3: '0 0 0 1px var(--color-border-avatar-3)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
    },
  },
  plugins: [],
}
