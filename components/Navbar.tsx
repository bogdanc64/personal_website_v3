import Link from "next/link"
import { Router } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import DarkModeToggle from "./DarkModeToggle"

const Navbar = () => {
    
    const [nav, setNav] = useState(false);
    const [loading, setLoading] = React.useState<boolean>(false);

     Router.events.on('routeChangeStart', (url) => {
       setLoading(true);
      });

     Router.events.on('routeChangeComplete', (url) => {
       setLoading(false);
       setNav(!nav)
     });

     const handleClick = () => setNav(!nav);
    
  
    return (

    <nav className="w-full h-28">
        <div className="flex items-center justify-between w-full h-full">
            
            <Link href={"/"}>
                <p className="text-2xl dark:text-primary">Bogdan Maftei</p>
            </Link>
            
            {/* Hamburger button*/}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <AiOutlineMenu className='text-primary text-2xl'/> : <AiOutlineClose className="text-primary text-2xl" />}
            </div>
    
            {/* Navbar for pc */}

            <ul className="hidden md:flex">
                <Link href={"/"}>
                    <li className="mx-5 hover:border-b text-l dark:text-primary">Home</li>
                </Link>
                <Link href={"/about"}>
                    <li className="mx-5 hover:border-b text-l dark:text-primary">About me</li>
                </Link>
                <Link href={"/projects"}>
                    <li className="mx-5 hover:border-b text-l dark:text-primary">Projects</li>
                </Link>
                <Link href={"/contact"}>
                    <li className="ml-5 mr-10 hover:border-b text-l dark:text-primary">Contact</li>
                </Link>
                
                <DarkModeToggle size="15" />
            </ul>

            {/* Mobile menu*/}

            <ul className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-primary transition '}>

                <Link href={"/"}>
                    <li className="py-5 hover:border-b text-3xl text-primary">Home</li>
                </Link>
                <Link href={"/skills"}>
                    <li className="py-5 hover:border-b text-3xl text-primary">Skills</li>
                </Link>
                <Link href={"/projects"}>
                    <li className="py-5 hover:border-b text-3xl text-primary">Projects</li>
                </Link>
                <Link href={"/contact"}>
                    <li className="py-5 hover:border-b text-3xl text-primary">Contact</li>
                </Link>
                <div className="py-5 ">
                    <DarkModeToggle size="30"/>
                </div>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar