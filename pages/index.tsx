import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import Layout from '../components/Layout'
import {motion} from 'framer-motion'

const Home: NextPageWithLayout  = () => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="dark:text-primary flex flex-col mt-36">
        <h1 className='dark:text-primary font-bold '>Bogdan Maftei</h1>
        <h3 className='font-lights mt-8 text-xl'>Junior Software Developer</h3>
      </div>      
    </motion.div>
  )
}

Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
