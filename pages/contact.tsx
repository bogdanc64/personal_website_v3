import type { NextPageWithLayout } from './_app'
import { ReactElement, useRef } from 'react'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import { useIsomorphicLayoutEffect } from '../utils/useIsomorphicLayoutEffect'
import { stagger } from '../utils/animations'
import ContactForm from '../components/ContactForm'
import SocialButtons from '../components/SocialButtons'

const Contact: NextPageWithLayout  = () => {

  const title = useRef(null);
  const description = useRef(null);
  const form = useRef(null);

  useIsomorphicLayoutEffect(() => {
    
    stagger(
      [title.current, description.current, form.current],
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
      <div ref={title}>
        <Title value="Contact me" />
      </div>
      <h3 ref={description} className='justify-center text-center font-light mt-10 mb-5 text-lg'>Get in touch or shoot me an email directly on <span className='font-bold'>bogdancm02@gmail.com</span></h3>
      <div ref={form}>
        <ContactForm />
      </div>
    </motion.div>
  )
}

Contact.getLayout = function getLayout(page:ReactElement){
  return <Layout>{page}</Layout>
}

export default Contact
