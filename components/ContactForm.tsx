import { FormEvent, useId, useState } from 'react'

function ContactForm() {
  const baseId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  const sending = submitted && response === null

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setResponse(null)

    const data = { name, email, subject, message }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setResponse('Success')
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
          return
        }
        setResponse('Error')
      })
      .catch(() => {
        setResponse('Error')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="field" htmlFor={`${baseId}-name`}>
        <span>Name</span>
        <input
          id={`${baseId}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label className="field" htmlFor={`${baseId}-email`}>
        <span>Email</span>
        <input
          id={`${baseId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label className="field" htmlFor={`${baseId}-subject`}>
        <span>Subject</span>
        <input
          id={`${baseId}-subject`}
          name="subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
      </label>
      <label className="field" htmlFor={`${baseId}-message`}>
        <span>Your message</span>
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <button className="send" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </button>
      {response === 'Success' && <p className="form-status" role="status">Message sent.</p>}
      {response === 'Error' && (
        <p className="form-status error" role="alert">
          The message did not send. Try again in a moment.
        </p>
      )}
    </form>
  )
}

export default ContactForm
