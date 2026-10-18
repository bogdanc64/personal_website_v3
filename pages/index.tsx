import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import ContactForm from '../components/ContactForm'
import ContactIntro from '../components/ContactIntro'
import Engagements from '../components/Engagements'
import Stories from '../components/Stories'
import Title from '../components/Title'
import { aboutCopy } from '../data/profile'

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
      <article className="lead">
        <h1 className="lead-title">Senior Technical Consultant</h1>
        <p className="deck">At Softwire since April 2025. Joined as Software Developer II.</p>
        <div className="lead-grid">
          <div className="story">
            <Avatar />
            <p className="copy">{aboutCopy}</p>
          </div>
          <aside className="write" aria-labelledby="write-heading">
            <h2 id="write-heading">Write</h2>
            <ContactIntro />
            <ContactForm />
          </aside>
        </div>
      </article>
      <section aria-labelledby="experience-heading">
        <Title level={2} id="experience-heading" value="Experience" />
        <Engagements />
      </section>
      <section aria-labelledby="projects-heading">
        <Title level={2} id="projects-heading" value="Projects" />
        <Stories />
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
