import React from "react";
import { GrContact } from 'react-icons/gr'
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";


const ContactMe = () => {
    return (
        <div id="contactme" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <h2 className="text-xl tracking-widest uppercase text-teal-800">
                    Contact Me
                </h2>
                <p className="py-4">
                    If you've made it this far, then please get in contact with me!
                </p>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <GrContact className="text-5xl rounded-xl hover:scale-105 ease-in duration-300" />
                            <div>
                                <h2 className="py-6">Noel Galvin</h2>
                                <p>Front-End Developer</p>
                                <p className="py-6">Do you have a project on your mind that you wish to make a reality? Get in contact
                                    with me and let's discuss it!
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 text-teal-700 font-semibold">Connect With Me! </p>
                                <div className="flex items-center justify-between py-6">
                                    <div className="rounded-full shadow-md shadow-teal-800  p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <AiFillGithub className="text-2xl" />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <AiFillLinkedin className="text-2xl" />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <AiFillInstagram className="text-2xl" />
                                    </div>
                                    <div className="rounded-full shadow-md shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                                        <AiFillMail className="text-2xl" />
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">

                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input className="border-2 border-gray-300 rounded-lg p-3 flex" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input className="border-2 border-gray-300 rounded-lg p-3 flex" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input className="border-2 border-gray-300 rounded-lg p-3 flex" type="email" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input className="border-2 border-gray-300 rounded-lg p-3 flex" type="text" />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href='/'>
                        <div className="rounded-full shadow-md shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                        <HiOutlineChevronDoubleUp className="text-teal-700" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactMe; 