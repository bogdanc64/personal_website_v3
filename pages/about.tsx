import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Link from 'next/link'
import { useReveal } from '../utils/useReveal'

const About: NextPageWithLayout = () => {
  const root = useReveal<HTMLDivElement>()

  return (
    <div ref={root}>
      <div className="mt-10">
        <div data-reveal>
          <Title value="About me" />
        </div>
        <div className="mx-auto max-w-[40rem] py-10">
          <p data-reveal className="text-lg leading-relaxed">
            I start with the client. We look for what is getting in the way of the business, or for an idea that still needs to become real. I stay with that until there is something they can use.
          </p>
          <dl className="mt-10">
            <div data-reveal className="border-y border-line py-5">
              <dt className="font-medium">The first conversation</dt>
              <dd className="mt-1 text-lg leading-relaxed text-secondary">
                We name what is getting in the way of the business, or the idea that is not real yet, before anyone commits to a build.
              </dd>
            </div>
            <div data-reveal className="border-b border-line py-5">
              <dt className="font-medium">A build from nothing</dt>
              <dd className="mt-1 text-lg leading-relaxed text-secondary">
                I lead it from the first technical decision to the release, with the requirements and the deadline in view.
              </dd>
            </div>
            <div data-reveal className="border-b border-line py-5">
              <dt className="font-medium">A system already in use</dt>
              <dd className="mt-1 text-lg leading-relaxed text-secondary">
                I make the codebase clearer and safer to change, and I keep that work moving with the rest of the team.
              </dd>
            </div>
          </dl>
          <p data-reveal className="mt-10 text-lg leading-relaxed text-secondary">
            I advise on the decisions, shape the roadmap, and stay close to the people doing the work. The tools follow the problem. The detail is on the{' '}
            <Link href="/experience">
              <a className="hero-link font-medium text-primary">experience</a>
            </Link>
            {' '}page.
          </p>
          <p data-reveal className="mt-8">
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
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
