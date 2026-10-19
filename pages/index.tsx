import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import SocialButtons from '../components/SocialButtons'
import Link from 'next/link'
import gsap from 'gsap'

const Home: NextPageWithLayout = () => {
  const portrait = useRef<HTMLDivElement>(null)
  const headline = useRef<HTMLHeadingElement>(null)
  const identity = useRef<HTMLParagraphElement>(null)
  const proof = useRef<HTMLParagraphElement>(null)
  const actions = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = [headline.current, identity.current, proof.current, actions.current, portrait.current]
    if (reduce) return

    const tween = gsap.fromTo(
      nodes,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        delay: 0.12,
        stagger: 0.08,
        ease: 'power3.out',
      }
    )

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section className="flex min-h-[calc(100dvh-6.5rem)] flex-col justify-center py-8">
      <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div>
          <h1
            ref={headline}
            className="max-w-[14ch] text-[2.6rem] font-medium leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            From the first technical decision to the release.
          </h1>
          <p ref={identity} className="mt-8 text-lg leading-snug">
            <span className="font-medium text-primary">Bogdan Maftei</span>
            <span className="text-secondary">, Software Developer II at Softwire</span>
          </p>
          <p ref={proof} className="mt-3 max-w-[42rem] text-lg leading-relaxed text-secondary">
            I advise clients, shape the roadmap, and lead the build. Before Softwire, I was a Full{"\u2011"}stack Developer at Software Business Partners.
          </p>
          <div ref={actions} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
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
        <div ref={portrait} className="order-first justify-self-start md:order-last md:justify-self-end">
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
