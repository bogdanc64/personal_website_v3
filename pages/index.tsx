import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Avatar from '../components/Avatar'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home: NextPageWithLayout  = () => {

  return (
    <motion.div
      className="mt-14"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="dark:text-primary flex flex-col place-items-center text-center">
        <Avatar />
        <h1 className='font-bold mt-6 md:mt-10'>Hey, I'm Bogdan Maftei!</h1>
        <h3 className='font-light mt-8 text-xl'>Junior Software Developer, experimental music producer and cats & dogs lover.</h3>
        <ul className="flex flex-row p-6">
          <li className="mx-2"><a href="https://www.facebook.com/maftei.bogdancosmin/" target="_blank"><FaFacebook size={25}/></a></li>
          <li className="mx-2"><a href="https://github.com/bogdanc64" target="_blank"><FaGithub size={25}/></a></li>
          <li className="mx-2"><a href="https://www.linkedin.com/in/bogdan-cosmin-maftei-412018215/" target="_blank"><FaLinkedin size={25}/></a></li>
        </ul>
      </div>
    </motion.div>
  )
}

Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
