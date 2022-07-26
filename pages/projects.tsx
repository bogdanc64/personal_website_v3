import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'

const Projects: NextPageWithLayout  = () => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25 }}
    >
      <Title value="Projects" />
    </motion.div>
  )
}

Projects.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Projects
