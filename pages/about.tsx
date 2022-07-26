import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import {SiTypescript, SiArduino, SiNextdotjs, SiHtml5, SiCss3, SiReact, SiCplusplus, SiDotnet, SiCsharp, SiNodedotjs} from 'react-icons/si'
import Layout from '../components/Layout'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'

const About: NextPageWithLayout  = () => {

  //refs

  const firstTitle = useRef(null);
  const description = useRef(null);
  const secondTitle = useRef(null);
  const skillsList = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [firstTitle.current, description.current, secondTitle.current, skillsList.current],
      { y: 20 },
      { y: 0 }
    );
  }, []);

  return (
    <motion.div
      //className="xl:px-60"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="xl:px-40"> {/* xl:grid grid-cols-2 */}
        <div className=""> {/* sm:mt-10 lg:mt-0 xl:pr-10 */}
          <div ref={firstTitle}>
            <Title value="About me" />
          </div>
          <div ref={description}>
            <div className="py-10">
              <p className='text-xl md:text-justify text-left'>
                My name is Maftei Bogdan-Cosmin, I am a full-time Junior Software Developer and I love making customers satisfied and pleased with my work. 
                I always bring a touch of originality to every project I do and I love to communicate while carrying out the project, 
                precisely to satisfy the needs and desires of each client.
              </p>
            </div>
            <div className='flex justify-center'>
              <Link target='_blank' href='/Resume.pdf'>
                <button data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-primary text-color font-semibold py-2 px-4 border hover:text-color transition-all duration-300 rounded shadow">
                  Get my CV
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">{/* sm:mt-10 lg:mt-0 xl:pl-10 */}
          <div ref={secondTitle}>
            <Title value="Skills" />
          </div>
          <div ref={skillsList} className="grid grid-cols-4 gap-y-10 justify-items-center py-10">
            <div className="flex flex-col items-center">
              <SiTypescript className='hover:text-[#3178C6] transition duration-200' size={50}/>
              <p className="pt-2">Typescript</p>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className='hover:text-[#61DAFB] transition duration-200' size={50}/>
              <p className="pt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 className='hover:text-[#E34F26] transition duration-200' size={50}/>
              <p className="pt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className='hover:text-[#1572B6] transition duration-200' size={50}/>
              <p className="pt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs className='hover:text-[#339933] transition duration-200' size={50}/>
              <p className="pt-2">Node.JS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={50}/>
              <p className="pt-2">Next.JS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCsharp className='hover:text-[#239120] transition duration-200' size={50}/>
              <p className="pt-2">C#</p>
            </div>
            <div className="flex flex-col items-center">
              <SiDotnet className='hover:text-[#512BD4] transition duration-200' size={50}/>
              <p className="pt-2">.NET</p>
            </div>
            <div className="flex flex-col items-center">
              <SiArduino className='hover:text-[#00979D] transition duration-200' size={50}/>
              <p className="pt-2">Arduino</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus className='hover:text-[#00599C] transition duration-200' size={50}/>
              <p className="pt-2">C++</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

About.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default About
