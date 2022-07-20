import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import Layout from '../components/Layout'

const Skills: NextPageWithLayout  = () => {

  return (
    <div>
      <p>Skills</p>    
    </div>
  )
}

Skills.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Skills
