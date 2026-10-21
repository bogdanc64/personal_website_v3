import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import SocialButtons from '../components/SocialButtons'
import Link from 'next/link'
import { useReveal } from '../utils/useReveal'

const Home: NextPageWithLayout = () => {
  const root = useReveal<HTMLElement>()

  return (
    <section ref={root} className="flex flex-1 flex-col justify-center py-8">
      <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div>
          <h1
            data-reveal
            className="max-w-[14ch] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            From a client's problem, or a new idea, to something real.
          </h1>
          <p data-reveal className="mt-8 text-lg leading-snug">
            <span className="font-medium text-primary">Bogdan Maftei</span>
            <span className="text-secondary">, Software Developer II at Softwire</span>
          </p>
          <p data-reveal className="mt-3 max-w-[42rem] text-lg leading-relaxed text-secondary">
            I talk with clients, find what&apos;s in the way, and build what makes life easier.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/contact">
              <a className="inline-block border border-line bg-primary px-4 py-2 font-medium text-primary shadow transition-colors duration-200 hover:border-accent rounded">
                Let&apos;s get in touch
              </a>
            </Link>
            <Link href="/experience">
              <a className="hero-link font-medium text-primary">See the work</a>
            </Link>
            <SocialButtons />
          </div>
        </div>
        <div data-reveal="media" className="order-first justify-self-start md:order-last md:justify-self-end">
          <Avatar size="lg" />
        </div>
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
