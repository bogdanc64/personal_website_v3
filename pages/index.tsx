import type { NextPageWithLayout } from './_app'
import { ReactElement, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Avatar from '../components/Avatar'
import { FaFacebook, FaGithub, FaLinkedin, FaSoundcloud } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'


const Home: NextPageWithLayout  = () => {

  //refs

  const firstHeader = useRef(null);
  const secondHeader = useRef(null);
  const socialButtons = useRef(null);
  const avatar = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [avatar.current, firstHeader.current, secondHeader.current, socialButtons.current],
      { y: 20 },
      { y: 0 }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="dark:text-primary flex flex-col place-items-center text-center">
        <div ref={avatar}>
          <Avatar />
        </div>
        <h1 ref={firstHeader} className='font-bold mt-6 md:mt-10'>Hey, I&apos;m Bogdan Maftei!</h1>
        <h3 ref={secondHeader} className='font-light mt-8 text-xl'>Junior Software Developer, experimental music producer and cats &amp; dogs lover.</h3>
        <ul ref={socialButtons} className="flex flex-row p-6">
          <li className="mx-2"><a href="https://www.facebook.com/maftei.bogdancosmin/" target="_blank" rel="noreferrer"><FaFacebook size={25}/></a></li>
          <li className="mx-2"><a href="https://github.com/bogdanc64" target="_blank" rel="noreferrer"><FaGithub size={25}/></a></li>
          <li className="mx-2"><a href="https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/" target="_blank" rel="noreferrer"><FaLinkedin size={25}/></a></li>
          <li className="mx-2"><a href="https://soundcloud.com/altadata" target="_blank" rel="noreferrer">< FaSoundcloud size={25}/></a></li>
        </ul>
      </div>
    </motion.div>
  )
}

Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
