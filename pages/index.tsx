import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import Engagements from '../components/Engagements'
import Stories from '../components/Stories'
import { aboutCopy, links } from '../data/profile'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Bogdan Maftei, Senior Technical Consultant</title>
        <meta
          name="description"
          content="Bogdan Maftei is a senior technical consultant at Softwire."
        />
      </Head>
      <div className="page">
        <header className="hero">
          <h1>Bogdan Maftei</h1>
          <div className="mark-line" aria-hidden="true" />
          <p className="role-line">Senior Technical Consultant</p>
          <p className="meta">At Softwire since April 2025. Joined as Software Developer II.</p>
          <div className="hero-body">
            <Avatar />
            <div className="intro-copy">
              <div className="actions">
                <Link href="/contact">
                  <a className="button">Get in touch</a>
                </Link>
                <a className="quiet" href={links.resume} target="_blank" rel="noreferrer">Resumé</a>
                <a className="quiet" href={`mailto:${links.email}`}>{links.email}</a>
              </div>
              <p className="copy">{aboutCopy}</p>
            </div>
          </div>
        </header>
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-head">Experience</h2>
          <Engagements />
        </section>
      </div>
      <section className="band" aria-labelledby="projects-heading">
        <div className="page">
          <h2 id="projects-heading" className="section-head">Projects</h2>
          <Stories />
        </div>
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
