import { FormEvent, useState } from 'react'

const fieldClass =
  'mt-2 w-full rounded-md border border-line bg-primary px-3 py-2 text-base text-primary shadow transition-colors duration-200 focus:border-accent'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (!res.ok) throw new Error('send failed')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-medium">Name</span>
          <input
            className={fieldClass}
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="block">
          <span className="font-medium">Email</span>
          <input
            className={fieldClass}
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="font-medium">Subject</span>
        <input
          className={fieldClass}
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
      </label>
      <label className="mt-6 block">
        <span className="font-medium">Message</span>
        <textarea
          className={fieldClass}
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="cursor-pointer border border-line bg-primary px-4 py-2 font-medium text-primary shadow transition-colors duration-200 hover:border-accent disabled:cursor-default disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending…' : 'Send the message'}
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-6 min-h-[1.6em] text-lg">
        {status === 'sent' && 'Message sent.'}
        {status === 'error' && (
          <span className="text-danger">
            That did not send. Email{' '}
            <a className="hero-link font-medium" href="mailto:maftei.bogdan@outlook.com">
              maftei.bogdan@outlook.com
            </a>
            {' '}instead.
          </span>
        )}
      </p>
    </form>
  )
}

export default ContactForm
