import React from "react";
import Image from "next/image";
import skillMatch from '../public/SkillMatch.gif';
import codeQuiz from '../public/codequiz2.gif';
import Link from "next/link";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <h2 className="text-xl tracking-widest uppercase text-teal-800">Projects</h2>
                <p className="py-4">Here are some of my most recent projects.</p>
                <div className="grid md:grid-cols-2 gap-8">
                <div className="relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-gradient-to-r from-teal-50 to-teal-50 ">
                <Image className="rounded-xl group-hover:opacity-40 shadow-xl shadow-gray-500 " src={skillMatch} alt="skillmatch logo" />
                <div className="hidden group-hover:block absolute shadow-xl bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <h3 className="text-2xl text-teal-700 tracking-wider text-center p-2">SkillMatch</h3>
                    <p className="pb-4 pt-2 text-gray-600 text-center p-3">An application that allows a user to search for jobs based on their skills.</p>
                    <p className="pb-4 pt-2 text-gray-600 text-center p-3">Created with React, Bootstrap, ChakraUI, Formik and Adzuna API </p>
                    <Link href="https://skillmatch-jobs.netlify.app">
                        <p className="text-center py-3 rounded-lg bg-teal-600 text-white font-bold text-lg cursor-pointer">More info</p>
                    </Link>
                </div>
                </div>

                <div className="relative flex items-center justify-center h-auto w-full  rounded-xl group hover:bg-gradient-to-r from-teal-50 to-teal-50 ">
                <Image className="rounded-xl group-hover:opacity-40 shadow-xl shadow-gray-500" src={codeQuiz} alt="skillmatch logo" />
                <div className="hidden group-hover:block absolute shadow-xl bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                    <h3 className="text-2xl text-teal-700 tracking-wider text-center p-2">Code Quiz</h3>
                    <p className="pb-4 pt-2 text-gray-600 text-center p-3">A browser run application allowing the user to answer a variety of questions about coding.</p>
                    <p className="pb-4 pt-2 text-gray-600 text-center p-3">Created with JavaScript, HTML & CSS</p>
                    <Link href="https://ngalvin1991.github.io/Code-Quiz">
                        <p className="text-center py-3 rounded-lg bg-teal-600 text-white font-bold text-lg cursor-pointer">More info</p>
                    </Link>
                </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;