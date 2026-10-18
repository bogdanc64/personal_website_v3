import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Avatar from '../components/Avatar'
import { aboutCopy, links, otherSkills, proficientSkills, skillLabel } from '../data/profile'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About — Bogdan Maftei</title>
      </Head>
      <div className="page">
        <h1 className="page-title">About</h1>
        <div className="about-layout">
          <Avatar />
          <div>
            <p className="copy">{aboutCopy}</p>
            <p className="actions">
              <a className="quiet" href={links.resume} target="_blank" rel="noreferrer">Resumé</a>
            </p>
          </div>
        </div>
        <div className="skill-group">
          <h2>Proficient at</h2>
          <p className="skill-text">{proficientSkills.map(skillLabel).join(', ')}</p>
        </div>
        <div className="skill-group">
          <h2>Other skills</h2>
          <p className="skill-text">{otherSkills.map(skillLabel).join(', ')}</p>
        </div>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
