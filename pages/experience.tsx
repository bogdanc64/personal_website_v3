import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import sbpLogo from '../assets/logos/sbp.png'
import softwireLogo from '../assets/logos/softwire.png'
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
          <div ref={experienceSection}>
            <div className="py-10 items-start">
              <ExperienceCard
                companyImage={softwireLogo}
                companyName={"Softwire"}
                position="Software Developer II"
                startingDate={new Date(2025, 3, 22)}
                keypoints={[
                  "Advised clients on technical decisions and helped shape the application roadmap.",
                  "Led the development of a high-priority project from scratch, meeting strict requirements and deadlines.",
                  "Contributed to improving and maintaining existing codebases across multiple projects.",
                  "Collaborated effectively with cross-functional teams to ensure smooth development workflows."
                ]}
                skills={['react', 'python', 'fastapi', 'azure', 'snowflake']}
              />
            </div>
            <div className="py-10 items-start">
              <ExperienceCard
                companyImage={sbpLogo}
                companyName={"Software Business Partners"}
                position="Full-stack Developer"
                startingDate={new Date(2022, 7, 22)}
                endingDate={new Date(2025, 3, 15)}
                keypoints={[
                  "Designed and implemented complex management systems with full-stack proficiency, showcasing deep technical knowledge and attention to detail.",
                  "Led the end-to-end development of software solutions, including architecture design, MVP creation, and team management, ensuring efficient project execution and delivery.",
                  "Optimized application infrastructure on cloud platforms by implementing advanced CI/CD pipelines, streamlining deployment processes, and enhancing operational efficiency.",
                  "Improved code quality and maintainability by refactoring legacy code, adhering to clean coding principles, and systematically increasing test coverage with robust unit testing practices."
                ]}
                skills={['vue', 'angular', 'dotnet', 'express', 'aws', 'azure']}
              />
            </div>
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
