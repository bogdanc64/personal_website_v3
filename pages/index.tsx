import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import Layout from '../components/Layout'
import {motion} from 'framer-motion'

const Home: NextPageWithLayout  = () => {

  return (
    <motion.div
      className="mt-36"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <div className="dark:text-primary flex flex-col text-center">
        <h1 className='dark:text-primary font-bold'>Hey, I'm Bogdan Maftei</h1>
        <h3 className='font-light mt-8 text-2xl'>Junior Software Developer</h3>
      </div>      
    </motion.div>
  )
}

Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
