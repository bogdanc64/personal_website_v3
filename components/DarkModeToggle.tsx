import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const dark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="theme-button"
      aria-pressed={dark}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
    >
      {dark ? 'Light mode' : 'Dark mode'}
    </button>
  )
}

export default DarkModeToggle
