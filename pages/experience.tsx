import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import ExperienceCard from '../components/ExperienceCard'

const Experience: NextPageWithLayout = () => {
  const experienceTitle = useRef(null);
  const experienceSection = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        experienceTitle.current,
        experienceSection.current,
      ],
      { y: 20 },
      { y: 0 },
      0.2
    );
  }, []);

  return (
    <motion.div
      //className="xl:px-60"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div> {/* xl:grid grid-cols-2 */}
        <div className="mt-10"> {/* sm:mt-10 lg:mt-0 xl:pr-10 */}
          <div ref={experienceTitle}>
            <Title value="Experience" />
          </div>
          <div ref={experienceSection} className="mx-auto max-w-[40rem] pt-6">
            <ExperienceCard
              companyName="Softwire"
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
    </motion.div>
  )
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Experience
