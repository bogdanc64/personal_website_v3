import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Project from '../components/Project'
import { useReveal } from '../utils/useReveal'

import personalWebsite from '../assets/images/personal_website.png'
import runnie from '../assets/images/runnie.png'

const projects = [
  {
    technologies: ['vue', 'nestjs', 'socket.io'],
    title: 'Runnie',
    description: 'An app that runs end-to-end tests by walking a website the way a person would, and checking that it still behaves from start to finish.',
    linkCode: 'https://github.com/bogdanc64/runnie',
    image: runnie,
    imageAlt: 'The Runnie tests screen, with passed and failed results.',
    privateRepository: true,
  },
  {
    technologies: ['react', 'tailwind', 'nextjs'],
    title: 'Personal portfolio',
    description: 'A fast, responsive personal site built with React, Tailwind, and Next.js, so the work and the background read clearly.',
    linkCode: 'https://github.com/bogdanc64/personal_website_v3',
    image: personalWebsite,
    imageAlt: 'An earlier version of this site in a browser window.',
    privateRepository: false,
  },
]

const Projects: NextPageWithLayout = () => {
  const root = useReveal<HTMLDivElement>()

  return (
    <div ref={root} className="mt-10">
      <div data-reveal>
        <Title value="Projects" />
      </div>
      <div className="mx-auto max-w-5xl pt-10">
        <p data-reveal className="max-w-[40rem] text-lg leading-relaxed">
          Two things I built, shown as they look.
        </p>
        <div className="mt-16 flex flex-col gap-24">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Projects
