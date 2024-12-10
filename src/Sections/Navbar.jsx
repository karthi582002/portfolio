import React, {useState} from 'react'
import {navLinks} from "../constant/index.js";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {setIsOpen((prevState)=>!prevState)}
    const NavItems = () => {
        return (
            <div>
                <ul className={"nav-ul"}>
                    {
                        navLinks.map(({id,name,href})=>(
                            <li key={id} className={"nav-li"}>
                                <a href={href} className={"nav-li_a"}
                                    onClick={()=>{}}
                                >
                                    {name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    return (
        <header
            className={"text-white fixed top-0 left-0 right-0 z-50 bg-black/90"}
        >
            <div
                className={"max-w-7xl mx-auto"}
            >
                <div
                    className={"flex justify-between items-center py-5 mx-auto c-space"}
                >
                    <a href={"#home"} className={"text-neutral-400 text-2xl font-bold hover:text-white transition-colors duration-300"}>
                        Karthikeyan
                    </a>
                    <button
                        onClick={toggleMenu}
                        className={"text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"}
                        aria-label={"toggle menu"}
                    >
                        <img src={isOpen ? "/assets/close.svg":"/assets/menu.svg"} alt={"menu"} className={"w-6 h-6"}/>
                    </button>
                    <nav className={"sm:flex hidden"}>
                        <NavItems/>
                    </nav>
                </div>
                <div
                    className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
                >
                        <nav
                            className={"p-5"}
                        >
                            <NavItems />
                        </nav>
                </div>
            </div>

        </header>
    )
}
export default Navbar
