import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import DarkModeToggle from "./DarkModeToggle"

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About me" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
]

const delay = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
)

function linkClass(active: boolean) {
    return active
        ? "text-sm text-primary tracking-[-0.01em] transition-colors duration-200"
        : "text-sm text-secondary hover:text-primary tracking-[-0.01em] transition-colors duration-200"
}

const Navbar = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const closeMenu = async () => {
        await delay(250)
        setOpen(false)
    }

    useEffect(() => {
        document.body.classList.toggle("fix-navbar-overflow", open)
        return () => document.body.classList.remove("fix-navbar-overflow")
    }, [open])

    return (
        <nav className="fixed inset-x-0 top-0 z-40">
            <div className="relative z-40 flex h-14 items-center justify-between border-b border-line bg-primary px-6 md:px-10 xl:px-64 bigger-desktops:px-96">
                <Link href="/">
                    <a className="text-[15px] font-medium tracking-[-0.02em] text-primary">Bogdan Maftei</a>
                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) => {
                        const active = router.pathname === link.href
                        return (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    <a aria-current={active ? "page" : undefined} className={linkClass(active)}>
                                        {link.label}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                    <li className="flex items-center">
                        <DarkModeToggle size="16" />
                    </li>
                </ul>

                <div className="flex items-center gap-4 md:hidden">
                    <DarkModeToggle size="18" />
                    <button
                        type="button"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className="text-primary"
                    >
                        {open ? <AiOutlineClose className="text-xl" /> : <AiOutlineMenu className="text-xl" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-30 flex flex-col bg-primary px-6 pt-24 md:hidden">
                    <ul className="flex flex-col gap-6">
                        {links.map((link) => {
                            const active = router.pathname === link.href
                            return (
                                <li key={link.href}>
                                    <Link href={link.href}>
                                        <a
                                            aria-current={active ? "page" : undefined}
                                            onClick={closeMenu}
                                            className={active
                                                ? "text-xl font-medium text-primary"
                                                : "text-xl font-medium text-secondary"}
                                        >
                                            {link.label}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
