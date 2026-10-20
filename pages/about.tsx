import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import Link from 'next/link'

const About: NextPageWithLayout = () => {
  const title = useRef(null)
  const writing = useRef(null)

  useIsomorphicLayoutEffect(() => {
    stagger(
      [title.current, writing.current],
      { y: 20 },
      { y: 0 },
      0.2
    )
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="mt-10">
        <div ref={title}>
          <Title value="About me" />
        </div>
        <div ref={writing} className="mx-auto max-w-[40rem] py-10">
          <p className="text-lg leading-relaxed">
            I start with the client. We look for what is getting in the way of the business, or for an idea that still needs to become real. I stay with that until there is something they can use.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-secondary">
            I advise on the technical decisions, shape the roadmap, and lead the build through to the release. The tools follow the problem. The work is on the{' '}
            <Link href="/experience">
              <a className="hero-link font-medium text-primary">experience</a>
            </Link>
            {' '}page.
          </p>
          <p className="mt-10">
            <a
              className="hero-link font-medium text-primary"
              href="/Bogdan_Maftei_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read the résumé
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
