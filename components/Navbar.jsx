import React, {useState}  from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail, AiOutlineLeft } from 'react-icons/ai';

const Navbar = () => {

    //used for burger menu on smaller screen brings up side menu.
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="fixed w-full h-30 shadow-xl shadow-teal-700/25 z-[100] font-mono">
            <div className="flex justify-between items-center w-full h-full px-2 ">
                <Image src="/../public/nbavatar.png" alt="logo" width={120} height={50} className="cursor-pointer" />

                <div>
                    <ul className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase hover:border-b">Home
                        <Link href='/'></Link>
                        </li>

                        <li className="ml-10 text-sm uppercase hover:border-b">About Me
                        <Link href='/'></Link>
                        </li>

                        <li className="ml-10 text-sm uppercase hover:border-b">Skills
                        <Link href='/'></Link>
                        </li>

                        <li className="ml-10 text-sm uppercase hover:border-b">Projects
                        <Link href='/'></Link>
                        </li>

                        <li className="ml-10 text-sm uppercase hover:border-b">Contact Me
                        <Link href='/'></Link>
                        </li>
                    </ul>

                {/* burger menu coce below. */}
                    
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={35} />
                    </div>
                </div>
            </div> 

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-gray/70" : ''}>

            <div className={
                nav 
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-6 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
            >
            
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="/../public/nbavatar.png" alt="logo" width="90" height="50" />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-teal-700 p-3 cursor-pointer">
                                <AiOutlineLeft />
                            </div>
                        </div>
                        <div className="border-b border-teal-800 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 ">
                                Noel Galvin - Front-End Web Developer
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                            <li className="py-4 text-sm">Home</li>
                            </Link>

                            <Link href="/">
                            <li className="py-4 text-sm">About Me</li>
                            </Link>

                            <Link href="/">
                            <li className="py-4 text-sm">Skills</li>
                            </Link>

                            <Link href="/">
                            <li className="py-4 text-sm">Projects</li>
                            </Link>

                            <Link href="/">
                            <li className="py-4 text-sm">Contact Me</li>
                            </Link>
                        </ul>

                        <div className="pt-40">
                        <p className="uppercase tracking-widest text-teal-700">Follow Me</p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]"> 
                        <div className="rounded-full shadow-lg shadow-teal-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500"> 
                            <AiFillGithub />
                            </div>
                            <div className="rounded-full shadow-lg shadow-teal-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500"> 
                            <AiFillLinkedin />
                            </div>
                            <div className="rounded-full shadow-lg shadow-teal-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500"> 
                            <AiFillInstagram />
                            </div>
                            <div className="rounded-full shadow-lg shadow-teal-800 p-3 cursor-pointer hover:scale-105 ease-in duration-500"> 
                            <AiFillMail />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Navbar;