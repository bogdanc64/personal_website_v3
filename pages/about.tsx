import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Title from '../components/Title'
import SkillIcon from '../components/SkillIcon'
import { aboutCopy, links, otherSkills, proficientSkills } from '../data/profile'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About me — Bogdan Maftei</title>
      </Head>
      <Title value="About me" />
      <p className="copy">{aboutCopy}</p>
      <p>
        <a className="resume-link" href={links.resume} target="_blank" rel="noreferrer">Resumé</a>
      </p>
      <div className="inline-skills">
        <Title level={2} value="Proficient at" />
        <ul className="skill-line">
          {proficientSkills.map((skill) => (
            <li key={skill}>
              <SkillIcon title size={18} type={skill} />
            </li>
          ))}
        </ul>
      </div>
      <div className="inline-skills">
        <Title level={2} value="Other skills" />
        <ul className="skill-line">
          {otherSkills.map((skill) => (
            <li key={skill}>
              <SkillIcon title size={18} type={skill} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
