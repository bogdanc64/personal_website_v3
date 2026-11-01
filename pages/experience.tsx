import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { useReveal } from '../utils/useReveal'
import ExperienceCard from '../components/ExperienceCard'
import softwireLogo from '../assets/logos/softwire.png'
import sbpLogo from '../assets/logos/sbp-mark.png'

const Experience: NextPageWithLayout = () => {
  const root = useReveal<HTMLDivElement>()

  return (
    <div ref={root}>
      <div>
        <div className="mt-10">
          <div data-reveal>
            <Title value="Experience" />
          </div>
          <div className="mx-auto max-w-[40rem] divide-y divide-line pt-4">
            <ExperienceCard
              companyName="Softwire"
              companyLogo={softwireLogo}
              logoTone="color"
              position="Software Developer II"
              startingDate={new Date(2025, 3, 22)}
              keypoints={[
                "I advise clients on the technical decisions and help shape the roadmap.",
                "I led a high-priority product from nothing to release, on strict requirements and a real deadline.",
                "I look after systems that are already live, across more than one project.",
                "I work with the other people on the delivery, so the build stays clear.",
              ]}
              skills={['react', 'python', 'fastapi', 'azure', 'snowflake', 'tableau']}
            />
            <ExperienceCard
              companyName="Software Business Partners"
              companyLogo={sbpLogo}
              logoTone="light"
              position="Full-stack Developer"
              startingDate={new Date(2022, 7, 22)}
              endingDate={new Date(2025, 3, 15)}
              keypoints={[
                "I designed and built management systems, from the screen through to the data.",
                "I led the work from the architecture and the first version through to delivery, and managed the team.",
                "I moved releases onto the cloud, so a change could ship without a manual process.",
                "I reworked older code and raised the test coverage, so the system was safer to change.",
              ]}
              skills={['vue', 'angular', 'dotnet', 'express', 'aws', 'azure']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Experience
