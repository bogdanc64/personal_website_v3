import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

const links = [
  { href: '/about', label: 'About me' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

function formatDateline(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

const Navbar = () => {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const [dateline, setDateline] = useState({ label: '', iso: '' })

  useEffect(() => {
    const today = new Date()
    setDateline({
      label: formatDateline(today),
      iso: today.toISOString().slice(0, 10),
    })
  }, [])

  return (
    <header className="mast">
      <div className="mast-top">
        <Link href="/">
          <a className="nameplate">Bogdan Maftei</a>
        </Link>
      </div>
      <div className="rule-double" aria-hidden="true" />
      <div className="dateline">
        <time dateTime={dateline.iso || undefined}>{dateline.label}</time>
        <button
          type="button"
          className="sections-toggle"
          aria-expanded={open}
          aria-controls="section-index"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Sections'}
        </button>
        <nav
          id="section-index"
          className={open ? 'sections is-open' : 'sections'}
          aria-label="Sections"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Navbar
