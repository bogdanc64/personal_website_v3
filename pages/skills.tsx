import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import Layout from '../components/Layout'
import {motion} from 'framer-motion'

const Skills: NextPageWithLayout  = () => {

  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.25 }}
    >
      <p>Skills</p>    
    </motion.div>
  )
}

Skills.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Skills
