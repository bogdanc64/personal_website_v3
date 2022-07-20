import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import Layout from '../components/Layout'

const Home: NextPageWithLayout  = () => {

  return (
    <div>
      <div className="dark:text-primary flex flex-col mt-36">
        <h1 className='dark:text-primary font-bold '>Bogdan Maftei</h1>
        <h3 className='font-lights mt-8 text-xl'>Junior Software Developer</h3>
      </div>      
    </div>
  )
}

Home.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Home
