import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import Button from '../components/Button'
import SkillIcon from '../components/SkillIcon'

const About: NextPageWithLayout = () => {
  const firstTitle = useRef(null);
  const description = useRef(null);
  const secondTitle = useRef(null);
  const skillsList = useRef(null);
  const thirdTitle = useRef(null);
  const secondSkillsList = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [
        firstTitle.current,
        description.current,
        secondTitle.current,
        skillsList.current,
        thirdTitle.current,
        secondSkillsList.current
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
        <div className=""> {/* sm:mt-10 lg:mt-0 xl:pr-10 */}
          <div ref={firstTitle}>
            <Title value="About me" />
          </div>
          <div ref={description}>
            <div className="py-10">
              <p className='text-xl text-justify'>
                My name is Maftei Bogdan-Cosmin, I am a software developer and I love making customers satisfied and pleased with my work.
                I always bring a touch of originality to every project I do and I love to communicate while carrying out the project,
                precisely to satisfy the needs and desires of each client.
              </p>
            </div>
            <div className='flex justify-center'>
              <a target='_blank' href='/Resume.pdf'>
                <Button name={'Resumé'} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">{/* sm:mt-10 lg:mt-0 xl:pl-10 */}
          <div ref={secondTitle}>
            <Title value="Proficient at" />
          </div>
          <div ref={skillsList} className="grid grid-cols-3 gap-y-10 justify-items-center py-10">
            <SkillIcon title={true} size={50} type={'typescript'} />
            <SkillIcon title={true} size={50} type={'angular'} />
            <SkillIcon title={true} size={50} type={'dotnet'} />
          </div>
        </div>
        <div className="">{/* sm:mt-10 lg:mt-0 xl:pl-10 */}
          <div ref={thirdTitle}>
            <Title value="Other skills" />
          </div>
          <div ref={secondSkillsList} className="grid grid-cols-4 gap-y-10 justify-items-center py-10">
            <SkillIcon title={true} size={50} type={'go'} />
            <SkillIcon title={true} size={50} type={'jest'} />
            <SkillIcon title={true} size={50} type={'vue'} />
            <SkillIcon title={true} size={50} type={'nestjs'} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default About
