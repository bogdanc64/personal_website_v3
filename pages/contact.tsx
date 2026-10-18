import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import ContactIntro from '../components/ContactIntro'

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact — Bogdan Maftei</title>
      </Head>
      <div className="page">
        <h1 className="page-title">Contact</h1>
        <div className="contact-block">
          <ContactIntro />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
