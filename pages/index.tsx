import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'

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
      <section className="opening">
        <div className="opening-copy">
          <h1>Bogdan Maftei</h1>
          <div className="mark-line" aria-hidden="true" />
          <p className="role-line">Senior Technical Consultant</p>
          <p className="meta">At Softwire since April 2025. Joined as Software Developer II.</p>
          <div className="actions">
            <Link href="/contact">
              <a className="button">Get in touch</a>
            </Link>
          </div>
        </div>
        <Avatar />
      </section>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
