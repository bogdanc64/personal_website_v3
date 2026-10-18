import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Stories from '../components/Stories'

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Work — Bogdan Maftei</title>
      </Head>
      <div className="page">
        <h1 className="page-title">Work</h1>
        <Stories />
      </div>
    </>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
