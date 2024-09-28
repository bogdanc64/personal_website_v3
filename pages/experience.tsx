import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import sbpLogo from '../assets/logos/sbp.png'
import Image from "next/image"

const Experience: NextPageWithLayout  = () => {
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
      <div className="xl:px-20"> {/* xl:grid grid-cols-2 */}
        <div className="mt-10"> {/* sm:mt-10 lg:mt-0 xl:pr-10 */}
          <div ref={experienceTitle}>
            <Title value="Experience" />
          </div>
          <div ref={experienceSection}>
            <div className="py-10 grid grid-cols-4 gap-x-5 items-start">
              <div>
                <Image src={ sbpLogo } objectFit='contain' objectPosition='top' quality={90}></Image>
              </div>
              <div className="col-span-3 flex justify-center">
                <div>
                  <h3 className="font-light text-xl">
                    <span className="text-2xl font-bold">Full-stack developer</span> 
                    &nbsp;at&nbsp; 
                    <span className="text-2xl className-bold">Software Business Partners</span></h3>
                  <h3 className="font-light text-xl pt-2">August 2022 - Present</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

Experience.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Experience
