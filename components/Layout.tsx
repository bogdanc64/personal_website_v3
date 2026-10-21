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
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
         <main className="flex flex-1 flex-col pt-20 md:pt-24">
             {children}
         </main>
      <Footer />
    </div>
  )
}