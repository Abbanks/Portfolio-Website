import React, { forwardRef } from "react";
import frameblack from "../assets/frame-black.svg";
import framewhite from "../assets/frame-white.svg";
import sparkles from "../assets/sparkles.svg";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { TbMessage } from "react-icons/tb";

const ContactMe = forwardRef((theme, ref)  => {
    const image = theme === 'dark' ? framewhite : frameblack;
    
    return (
        <section  ref={ref} className="h-screen flex items-center justify-center" id="contactme">
            <div className="pt-16 md:pt-16 w-full px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                            <div className="font-poppins text-4xl text-center md:text-left">Let’s Connect!</div>
                            <img src={sparkles} alt="sparkles" className="h-9 w-9" />
                        </div>
                        <div className="font-poppins text-base font-normal space-y-4">
                            <p className="text-center md:text-left pb-2">
                                If you ever want to have a quick chat, feel free to connect with me on social media or send me a message.
                            </p>
                            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#fad19e] to-[#7e89f8] max-w-xs mx-auto md:mx-0 w-[224px]">
                                <button className="rounded-full bg-gradient-to-r from-[#7e89f8] to-[#fad19e] h-[43px] w-[220px] text-black px-4 flex items-center justify-center">
                                    <p className="font-medium text-sm md:text-base font-poppins whitespace-nowrap">Send me a message</p>
                                    <TbMessage className="pl-1 h-5 w-5"/>
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto md:max-w-none md:grid-cols-4 pt-3">
                                <div className="rounded bg-custom-darker-gray h-10 w-10 flex items-center justify-center">
                                    <a href="https://x.com/bibi_the_muse" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter className="text-white h-6 w-6" />
                                    </a>
                                </div>
                                <div className="rounded bg-custom-darker-gray h-10 w-10 flex items-center justify-center">
                                    <a href="https://www.instagram.com/__banke/" target="_blank" rel="noopener noreferrer">
                                        <GrInstagram className="text-white h-6 w-6" />
                                    </a>
                                </div>
                                <div className="rounded bg-custom-darker-gray h-10 w-10 flex items-center justify-center">
                                    <a href="https://github.com/Abbanks" target="_blank" rel="noopener noreferrer">
                                        <SiGithub className="text-white h-6 w-6" />
                                    </a>
                                </div>
                                <div className="rounded bg-custom-darker-gray h-10 w-10 flex items-center justify-center">
                                    <a href="https://www.linkedin.com/in/abigail-o-eboda/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="text-white h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex items-center justify-center md:justify-end pt-3">
                        <img src={`${image}`} alt="Frame" className="object-contain max-w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
});

export default ContactMe;
