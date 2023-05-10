import React from "react";
import Typewriter from 'typewriter-effect';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";

const Main = () => {
    return (
        <div id="home" className=" w-full h-screen text-center font-mono">
            <div className=" w-full h-full mx-auto px-4 p-2 flex justify-center items-center">
            
                <div>
                    <h1 className="py-4 text-teal-700">Noel Galvin</h1>
                
                    <div className="text-gray-800 text-2xl py-4  md:text-3xl">

                        {/* inserted typewriter effect */}
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Front-End Web Developer")
                                    .callFunction(() => {
                                        console.log('String typed out');
                                    })
                                    .pauseFor(10)
                                    .callFunction(() => {
                                        console.log('All strings deleted');
                                    })
                                    .start();
                            }}
                        />
                    </div>
                    <p className="py-4 text-gray-600 text-lg sm:max-w-[70%] m-auto">

                        <p>I have a great passion
                            for creating responsive and visually pleasing applications.
                            I am very well organised, a great problem solver and have very high attention to detail. </p>
                        <p>I consistantly push myself to keep learning new skills to make sure the applications I make keep up with current technologies.</p>

                        <p>I'm very interested in all things front-end and want to work on ambitious projects with amazing people.</p>
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-teal-800  p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                            <AiFillGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                            <AiFillLinkedin />
                        </div>
                        <div className="rounded-full shadow-lg shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                            <AiFillInstagram />
                        </div>
                        <div className="rounded-full shadow-lg shadow-teal-800 p-2 cursor-pointer hover:scale-105 ease-in duration-500">
                            <AiFillMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main;