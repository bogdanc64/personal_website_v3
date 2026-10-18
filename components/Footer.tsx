import { links } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="page site-footer">
      <p>© {year} Bogdan Maftei</p>
      <p className="footer-links">
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={links.resume} target="_blank" rel="noreferrer">Resumé</a>
      </p>
    </footer>
  )
}

export default Footer
