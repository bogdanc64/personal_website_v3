import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Title from '../components/Title'
import ContactForm from '../components/ContactForm'
import ContactIntro from '../components/ContactIntro'

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Contact me — Bogdan Maftei</title>
      </Head>
      <Title value="Contact me" />
      <div className="write write-page">
        <ContactIntro />
        <ContactForm />
      </div>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Contact
