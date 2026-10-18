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
      className="edition"
      aria-pressed={dark}
      aria-label={dark ? 'Switch to day edition' : 'Switch to night edition'}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
    >
      {dark ? 'Night edition' : 'Day edition'}
    </button>
  )
}

export default DarkModeToggle
