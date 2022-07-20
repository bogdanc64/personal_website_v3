import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react';

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
    <div>
      <Navbar />
         <main>{children}</main>
      <Footer />
    </div>
  )
}