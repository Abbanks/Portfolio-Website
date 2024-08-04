import React, { forwardRef } from 'react'
import sparklesblack from "../assets/sparkles-black.svg";
import sparkleswhite from "../assets/sparkles-white.svg";
import number1 from "../assets/number1.svg";
import number2 from "../assets/number2.svg";
import number3 from "../assets/number3.svg";
import number4 from "../assets/number4.svg";
import linkwhite from "../assets/link-white.svg";
import linkblack from "../assets/link-black.svg";

const Projects = forwardRef((props, ref) => {
    const { theme } = props;
    const icon = theme === 'dark' ? linkwhite : linkblack;
    const iconn = theme === 'dark' ? sparkleswhite : sparklesblack;

    return (
        <section id="projects" ref={ref} className='px-4 md:px-8 lg:px-16 pb-28 md:pb-3 animate-fade-in'>
            <div className='flex items-center space-x-4 pt-28 md:pt-28 w-full'>
                <h1 className='font-poppins text-4xl'>Projects</h1>
                <img src={iconn} alt="sparkles" className="h-9 w-9" />
            </div>

            <div className="container mx-auto pt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 h-72 p-1 rounded items-center">
                    <div className="rounded bg-gradient-to-r from-[#7e89f8] to-[#fad19e] w-2/3 h-full mx-auto flex items-center justify-center">

                    </div>

                    <div className="flex flex-col">
                        <img src={number1} alt="1" className="h-9 w-9" />
                        <h2 className="font-poppins text-3xl font-normal pt-2">
                            Project Name
                        </h2>
                        <p className="text-base leading-relaxed pt-2">
                            Project description
                        </p>
                        <img src={icon} alt="link" className="pt-2 h-6 w-6" />
                    </div>

                </div>
            </div>

            <div className="container mx-auto pt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 p-1 h-72 rounded items-center">
                    <div className="rounded bg-gradient-to-r from-[#7e89f8] to-[#fad19e] w-2/3 h-full mx-auto flex items-center justify-center">

                    </div>

                    <div className="flex flex-col">
                        <img src={number2} alt="1" className="h-9 w-9" />
                        <h2 className="font-poppins text-3xl font-normal pt-2">
                            Project Name
                        </h2>
                        <p className="text-base leading-relaxed pt-2">
                            Project description
                        </p>
                        <img src={icon} alt="link" className="pt-2 h-6 w-6" />
                    </div>

                </div>
            </div>

            <div className="container mx-auto pt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 p-1 h-72 rounded items-center">
                    <div className="rounded bg-gradient-to-r from-[#7e89f8] to-[#fad19e] w-2/3 h-full mx-auto flex items-center justify-center">

                    </div>

                    <div className="flex flex-col">
                        <img src={number3} alt="1" className="h-9 w-9" />
                        <h2 className="font-poppins text-3xl font-normal pt-2">
                            Project Name
                        </h2>
                        <p className="text-base leading-relaxed pt-2">
                            Project description
                        </p>
                        <img src={icon} alt="link" className="pt-2 h-6 w-6" />
                    </div>

                </div>
            </div>

            <div className="container mx-auto pt-7">
                <div className="grid grid-cols-1 md:grid-cols-2 p-1 h-72 rounded items-center">
                    <div className="rounded bg-gradient-to-r from-[#7e89f8] to-[#fad19e] w-2/3 h-full mx-auto flex items-center justify-center">

                    </div>

                    <div className="flex flex-col">
                        <img src={number4} alt="1" className="h-9 w-9" />
                        <h2 className="font-poppins text-3xl font-normal pt-2">
                            Project Name
                        </h2>
                        <p className="text-base leading-relaxed pt-2">
                            Project description
                        </p>
                        <img src={icon} alt="link" className="pt-2 h-6 w-6" />
                    </div>

                </div>
            </div>

        </section>
    )
})

export default Projects