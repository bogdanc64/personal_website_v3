import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

type Props = {
    children?: React.ReactNode;
  };

export default function Layout({children}:Props) {
  
    // fix hydration mismatch bug (ssr vs csr) 

    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(()=>{
        setMounted(true);   
    })
    if(!mounted) return null;
  
    return (
    <motion.div
        className="min-h-screen flex flex-col pt-4 l:pt-6"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
    >  
      <Navbar />
         <main className="xl:mt-14">
             {children}
         </main>
      <Footer />
    </motion.div>
  )
}