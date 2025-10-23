import { useEffect, useState } from "react"
import { cn } from "../library/utils"
import { X, Menu } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false )

    useEffect(()=> {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)

        return () =>  window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <>
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled ?
                "py-3 bg-background/60 backdrop-blur-md shadow-xs" 
                :
                "py-5"
            )}
        >
            <div
                className="container flex items-center justify-between"
            >
                <a
                    className="text-xl font-bold text-primary flex items-center "
                        href="#hero"

                >
                    <span
                        className="relative z-10 "
                    >
                        <span
                            className="text-glow text-foreground"
                        >Hieronymbus </span>
                        Portfolio
                    </span>
                </a>

                {/* desktop version */}
                <div
                    className="hidden md:flex gap-10"
                >
                    <div
                        className="hidden md:flex space-x-8"
                    >
                        {navItems.map((item, key) => {
                            return(
                                <a  
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>
                    <ThemeToggle />
                </div>
                    
                {/* mobile version */}

                    <button
                        onClick={() =>  setIsMenuOpen((prev) => !prev)}
                        aria-label="Open Menu"
                        className="relative md:hidden  text-foreground z-50 "
                    >
                        
                        <Menu size={24} />
                        
                    </button>
            </div>
        </nav>
        <div
            className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ?
                "opacity-100 pointer-events-auto "
                :
                "opacity-0 pointer-events-none"
            )} 
        >   
            <div
                className="absolute top-30"
            >
                <ThemeToggle />
            </div>

            <button
                onClick={() =>  setIsMenuOpen((prev) => !prev)}
                aria-label="Close Menu"
                className=" md:hidden  text-foreground z-50 absolute top-5 right-8"
            >
                
                <X size={24} />
                
            </button>
            
            <div
                className="flex flex-col space-y-8 text-xl"
            >
                {navItems.map((item, key) => {
                    return(
                        <a  
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    )
                })}
            </div>
        </div>
        </>
    )
}
