import { links } from '../data/profile'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="folio">
      <div className="rule-double still" aria-hidden="true" />
      <p>© {year} Bogdan Maftei</p>
      <p className="folio-links">
        <a href={`mailto:${links.email}`}>{links.email}</a>
        <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="resume-link" href={links.resume} target="_blank" rel="noreferrer">Resumé</a>
      </p>
    </footer>
  )
}

export default Footer
