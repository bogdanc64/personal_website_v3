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
  const name = useRef<HTMLHeadingElement>(null)
  const role = useRef<HTMLParagraphElement>(null)
  const intro = useRef<HTMLParagraphElement>(null)
  const socials = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const nodes = [name.current, portrait.current, role.current, intro.current, socials.current]
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
      <div className="flex items-end justify-between gap-6 sm:gap-10">
        <h1
          ref={name}
          className="text-[3.15rem] font-medium leading-[0.96] tracking-[-0.04em] sm:text-7xl"
        >
          Bogdan
          <br />
          Maftei
        </h1>
        <div ref={portrait} className="mb-1 shrink-0 sm:mb-2">
          <Avatar />
        </div>
      </div>

      <p ref={role} className="mt-10 text-lg text-secondary sm:mt-12">
        Software developer
      </p>
      <p ref={intro} className="mt-3 max-w-[38rem] text-lg leading-relaxed text-secondary">
        <Link href="/about">
          <a className="hero-link font-medium text-primary">Get to know me better</a>
        </Link>
        , check out{' '}
        <Link href="/experience">
          <a className="hero-link font-medium text-primary">my experience</a>
        </Link>
        , and{' '}
        <Link href="/contact">
          <a className="hero-link font-medium text-primary">let&apos;s get in touch</a>
        </Link>
        .
      </p>
      <div ref={socials} className="mt-8">
        <SocialButtons />
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
