import React from 'react'
import { Link } from 'react-router-dom';
import star from '../assets/star.svg';

export const Footer = ({scrollToHome}) => {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-full px-[87px] py-4 md:py-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0" onClick={scrollToHome}>
            <img src={star} alt="Star icon" className="h-8"/>
            <Link className="font-poppins text-2xl font-normal" to="/">AOE</Link>
            </div>
            <p className="font-poppins text-sm md:text-base text-center  justify-center md:text-left">
                2024 © AOE. Crafted and Designed by Abigail Eboda.
            </p>
            <div className="flex ">
                <button onClick={scrollToHome} className="text-blue-500 hover:underline">
                    Back to Top
                </button>
            </div>
        </footer>
    )
}
