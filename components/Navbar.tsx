import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'

const links = [
  { href: '/projects', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
]

const Navbar = () => {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const contactCurrent = pathname === '/contact'
  const home = pathname === '/'

  return (
    <header className={home ? 'site-header is-home' : 'site-header'}>
      <div className="page header-bar">
        <Link href="/">
          <a className="wordmark">Bogdan Maftei</a>
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Primary">
          <div className="nav-links">
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
          </div>
          <div className="nav-tools">
            <DarkModeToggle />
            <Link href="/contact">
              <a
                className="button"
                aria-current={contactCurrent ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
