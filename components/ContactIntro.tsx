import { contactIntro } from '../data/profile'

function ContactIntro() {
  return (
    <p className="contact-intro">
      {contactIntro.before}
      <a href={`mailto:${contactIntro.email}`}>{contactIntro.email}</a>
    </p>
  )
}

export default ContactIntro
