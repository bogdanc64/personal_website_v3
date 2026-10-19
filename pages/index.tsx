import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Avatar from '../components/Avatar'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import SocialButtons from '../components/SocialButtons'
import Link from 'next/link'


const Home: NextPageWithLayout = () => {

  //refs

  const firstHeader = useRef(null);
  const secondHeader = useRef(null);
  const thirdHeader = useRef(null);
  const socialButtons = useRef(null);
  const avatar = useRef(null);

  useIsomorphicLayoutEffect(() => {
    stagger(
      [avatar.current, firstHeader.current, secondHeader.current, thirdHeader.current, socialButtons.current],
      { y: 20 },
      { y: 0 },
      0.2
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="text-primary flex flex-col place-items-center text-center">
        <div ref={avatar}>
          <Avatar />
        </div>
        <h1 ref={firstHeader} className='text-2xl sm:text-3xl mt-6 mb-3'>Hey, I&apos;m Bogdan Maftei! <span className="wave">👋🏻</span></h1>
        <h3 ref={secondHeader} className='font-normal my-3 text-xl text-secondary'>Software Developer</h3>
        <h3 ref={thirdHeader} className='font-normal my-3 text-xl text-secondary'>
          <Link href={"/about"}>
            <span className="font-medium text-primary inline-block hover-animation relative cursor-pointer">Get to know me better</span>
          </Link>
          , check out&nbsp;
          <Link href={"/experience"}>
            <span className="font-medium text-primary inline-block hover-animation relative cursor-pointer">my experience</span>
          </Link>
          , and&nbsp;
          <Link href={"/contact"}>
            <span className="font-medium text-primary inline-block hover-animation relative cursor-pointer">let&apos;s get in touch</span>
          </Link>
          .
        </h3>
        <div ref={socialButtons} className="mt-3">
          <SocialButtons />
        </div>
      </div>
    </motion.div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
