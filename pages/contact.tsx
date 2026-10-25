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

  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tween = stagger(
      [title.current, writing.current],
      { y: 16 },
      { y: 0 },
      0.12
    )

    return () => {
      tween?.kill()
    }
  }, [])

  return (
    <div className="mt-10">
      <div ref={title}>
        <Title value="Contact me" />
      </div>
      <div ref={writing} className="mx-auto max-w-[40rem] py-10">
        <p className="text-lg leading-relaxed">
          Tell me what is getting in the way, or the idea you want to make real.
        </p>
        <dl className="mt-10 border-t border-line">
          <div className="border-b border-line py-5">
            <dt className="font-medium">Email</dt>
            <dd className="mt-1 text-lg">
              <a className="hero-link font-medium text-primary" href="mailto:maftei.bogdan@outlook.com">
                maftei.bogdan@outlook.com
              </a>
            </dd>
          </div>
          <div className="border-b border-line py-5">
            <dt className="font-medium">Elsewhere</dt>
            <dd className="mt-1 text-lg text-secondary">
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
            </dd>
          </div>
        </dl>
        <ContactForm />
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
