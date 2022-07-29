import Link from "next/link"
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import DarkModeToggle from "./DarkModeToggle"

const delay = (ms:number) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const Navbar = () => {
    
    const [nav, setNav] = useState(false);
    const [overflow, setOverflow] = useState(false);

    const handleClick = () => {
        setNav(!nav);
        setOverflow(!overflow)
    }
    
    const handleClickMobileNav = async () => {
        await delay(250); //added to prevent flicker bug when navigating on mobile navbar
        setNav(!nav);
        setOverflow(!overflow)
    }

    useEffect(()=>{
      
        if (overflow)
            document.body.classList.add('fix-navbar-overflow')
        else
            document.body.classList.remove('fix-navbar-overflow')
    })


    return (
    <nav className="w-full h-28 z-10">
        <div className="flex pt-4 items-center justify-between w-full h-full">
            
            <Link href={"/"}>
                <p className="text-2xl dark:text-primary">Bogdan Maftei</p>
            </Link>
            
            {/* Hamburger button*/}
            <div onClick={handleClick} className="xl:hidden z-10">
                {!nav ? <AiOutlineMenu className='text-primary text-2xl'/> : <AiOutlineClose className="text-primary text-2xl" />}
            </div>
    
            {/* Navbar for pc */}

            <ul className="hidden xl:flex">
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
            {/* Top-1 to fix navbar not taking full screen */}
            <ul className={
                nav 
                ? 'absolute top-1 left-0 w-full min-h-screen flex flex-col justify-center items-center bg-primary transition '
                : 'hidden' 
                }
            >
                <Link href={"/"}>
                    <li onClick={handleClickMobileNav} className="py-5 hover:border-b text-3xl text-primary">Home</li>
                </Link>
                <Link href={"/about"}>
                    <li onClick={handleClickMobileNav} className="py-5 hover:border-b text-3xl text-primary">About me</li>
                </Link>
                <Link href={"/projects"}>
                    <li onClick={handleClickMobileNav} className="py-5 hover:border-b text-3xl text-primary">Projects</li>
                </Link>
                <Link href={"/contact"}>
                    <li onClick={handleClickMobileNav} className="py-5 hover:border-b text-3xl text-primary">Contact</li>
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