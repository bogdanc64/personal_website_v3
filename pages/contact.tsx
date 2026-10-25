import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import ContactForm from '../components/ContactForm'

const Contact: NextPageWithLayout = () => {
  const title = useRef(null)
  const writing = useRef(null)
  const note = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tween = stagger(
      [title.current, writing.current, note.current],
      { y: 16 },
      { y: 0 },
      0.1
    )

    return () => {
      tween?.kill()
    }
  }, [])

  return (
    <div className="mt-10">
      <div ref={title}>
        <Title value="Contact" />
      </div>
      <div className="mx-auto max-w-[40rem] py-10">
        <div ref={writing}>
          <p className="text-lg leading-relaxed">
            Tell me what is getting in the way, or the idea you want to make real.
          </p>
          <a
            className="hero-link mt-8 block max-w-full text-2xl font-medium leading-snug tracking-[-0.03em] text-primary sm:text-3xl"
            href="mailto:maftei.bogdan@outlook.com"
          >
            maftei.bogdan@outlook.com
          </a>
          <p className="mt-4 text-lg text-secondary">
            <a
              className="hero-link font-medium text-primary"
              href="https://github.com/bogdanc64"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            {' and '}
            <a
              className="hero-link font-medium text-primary"
              href="https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <div ref={note} className="mt-12 border-t border-line pt-10">
          <p className="text-lg">Or send it from here.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
