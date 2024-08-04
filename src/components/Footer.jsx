import React from 'react'
import { Link } from 'react-router-dom';
import star from '../assets/star.svg';
import { IoChevronUp } from "react-icons/io5";

export const Footer = ({ scrollToHome }) => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-full md:px-[87px] pt-32 py-4 md:py-6 pb-8">
            <div className="flex items-center gap-3 mb-4 md:mb-0 cursor-pointer" onClick={scrollToHome}>
                <img src={star} alt="Star icon" className="h-8" />
                <Link className="font-poppins text-2xl font-normal" to="/">AOE</Link>
            </div>
            <p className="font-poppins text-sm md:text-base text-center md:text-left">
                2024 © AOE. Abigail Oluwabanke Eboda.
            </p>
            <IoChevronUp className="h-6 w-6 cursor-pointer mt-4 md:mt-0" onClick={scrollToHome} />
        </footer>

    )
}
