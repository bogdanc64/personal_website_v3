import Link from "next/link"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import DarkModeToggle from "./DarkModeToggle"

const Navbar = () => {
  
  return (
    <nav className="w-full z-10 h-28">
        <div className="flex justify-between items-center w-full h-full 2xl:px-16">
            <Link href={"/"}>
                <p className="text-2xl dark:text-primary">B</p>
            </Link>
            <div>
                <ul className="hidden md:flex">
                    <Link href={"/"}>
                        <li className="mx-5 hover:border-b text-l dark:text-primary">Home</li>
                    </Link>
                    <Link href={"/skills"}>
                        <li className="mx-5 hover:border-b text-l dark:text-primary">Skills</li>
                    </Link>
                    <Link href={"/projects"}>
                        <li className="mx-5 hover:border-b text-l dark:text-primary">Projects</li>
                    </Link>
                    <Link href={"/contact"}>
                        <li className="mx-5 hover:border-b text-l dark:text-primary">Contact</li>
                    </Link>
                </ul>
                <div className="md:hidden">
                    <AiOutlineMenu className='text-primary'/>
                </div>
            </div>
            <DarkModeToggle />
        </div>
    </nav>
  )
}
export default Navbar