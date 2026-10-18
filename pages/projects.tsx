import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Stories from '../components/Stories'

const Projects: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Projects — Bogdan Maftei</title>
      </Head>
      <Title value="Projects" />
      <Stories />
    </>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
