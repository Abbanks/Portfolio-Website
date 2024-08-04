import React, { forwardRef } from "react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { TbMessage } from "react-icons/tb";
import frameblack from "../assets/frame-black.svg";
import framewhite from "../assets/frame-white.svg";
import sparklesblack from "../assets/sparkles-black.svg";
import sparkleswhite from "../assets/sparkles-white.svg";

const ContactMe = forwardRef((props, ref) => {
    const { theme } = props;
    const image = theme === 'dark' ? framewhite : frameblack;
    const icon = theme === 'dark' ? sparkleswhite : sparklesblack;

    return (
        <section ref={ref} className="h-screen flex items-center justify-center animate-fade-in" id="contactme">
            <div className="w-full px-4 md:px-8 lg:px-16 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex flex-col items-center space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
                            <h1 className="font-poppins text-4xl text-center md:text-left">
                                Let’s Connect!
                            </h1>
                            <img src={icon} alt="sparkles" className="h-9 w-9" />
                        </div>

                        <p className="font-poppins text-base font-normal text-center md:text-left">
                            If you ever want to have a quick chat, feel free to connect with me on social media or send me a message.
                        </p>
                        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#fad19e] to-[#7e89f8] max-w-xs mx-auto md:mx-0 w-[224px]">
                            <a href="mailto:olubanke.eboda@gmail.com" className="block max-w-xs mx-auto md:mx-0">
                                <button className="rounded-full bg-gradient-to-r from-[#7e89f8] to-[#fad19e] h-[43px] w-[220px] text-black px-4 flex items-center justify-center">
                                    <p className="font-medium text-sm md:text-base font-poppins whitespace-nowrap">Send me a message</p>
                                    <TbMessage className="pl-1 h-5 w-5" />
                                </button>
                            </a>
                        </div>
                        <div className="flex gap-4 max-w-xs md:max-w-none md:grid-cols-4 pl-9 md:pl-1 lg:pl-1">
                            <a href="https://x.com/bibi_the_muse" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded bg-custom-darker-gray h-10 w-10">
                                <FaXTwitter className="text-white h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/__banke/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded bg-custom-darker-gray h-10 w-10">
                                <GrInstagram className="text-white h-6 w-6" />
                            </a>
                            <a href="https://github.com/Abbanks" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded bg-custom-darker-gray h-10 w-10">
                                <SiGithub className="text-white h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/abigail-o-eboda/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded bg-custom-darker-gray h-10 w-10">
                                <FaLinkedin className="text-white h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex items-center justify-center md:justify-end">
                        <img src={image} alt="Frame" className="object-contain max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ContactMe;