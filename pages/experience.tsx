import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Engagements from '../components/Engagements'

const Experience: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Experience — Bogdan Maftei</title>
      </Head>
      <Title value="Experience" />
      <Engagements />
    </>
  )
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Experience
