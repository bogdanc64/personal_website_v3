import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Engagements from '../components/Engagements'

const Experience: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Experience — Bogdan Maftei</title>
      </Head>
      <div className="page">
        <h1 className="page-title">Experience</h1>
        <Engagements />
      </div>
    </>
  )
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Experience
