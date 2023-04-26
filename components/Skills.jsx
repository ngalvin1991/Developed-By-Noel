import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <h2 className="text-xl tracking-widest text-teal-800 uppercase">Skills</h2>
                <p className="py-4">These are the skills that I have obtained since starting my journey and which I develop further every day.</p>

                <div className="grid md:grid-cols-2 lg:grid-col-4 gap-8">


                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                    <Image alt="/" />
                    </div>

                </div>
                </div>

                </div>

            </div>
        </div>
    )
}

export default Skills;