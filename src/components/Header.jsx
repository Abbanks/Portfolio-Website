import React, { useState, useEffect, forwardRef } from 'react';
import { Link, NavLink, useLocation  } from 'react-router-dom';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';
import star from '../assets/star.svg';
import home from '../assets/home.svg';
import download from '../assets/download.svg';
import menuIconDark from '../assets/three-bars.svg';
import menuIconWhite from '../assets/whitethree-bars.svg';
 
const Header = forwardRef(({ theme, toggleTheme, sectionRefs, scrollToHome}, ref ) => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuIcon = theme === 'dark' ? menuIconWhite : menuIconDark;
  /*   ${theme === 'dark' ? 'text-black' : 'text-white'} */
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const path = location.pathname.slice(1);
        if (path && sectionRefs[path] && sectionRefs[path].current) {
            sectionRefs[path].current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location, sectionRefs]);

    return (
        <header id='header' ref={ref}> 
            <nav className={`flex items-center justify-between transition-all duration-300 ${scrolled ?
                'pt-3 pb-3 backdrop-blur bg-opacity-20' : 'pt-5 pb-4'} drop-shadow w-full px-4 md:px-[87px] 
         fixed z-10`}>
                <div className="flex items-center gap-3" onClick={scrollToHome}>
                    <img src={star} alt="Star icon" className="h-8"/>
                    <Link className="font-poppins text-2xl font-normal" to="/">AOE</Link>
                </div>

                <div className="hidden md:flex flex-grow items-center justify-center">
                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#fad19e] to-[#7e89f8]">
                        <ul className="h-12 flex items-center gap-5 md:gap-10 bg-white dark:bg-custom-darker-gray rounded-full p-2 pr-8 py-1 pl-1">
                            <li>
                                <img
                                    src={home}
                                    onClick={scrollToHome}
                                    className="cursor-pointer"
                                    alt="Home icon"
                                />
                            </li>

                            <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/contactme">Contact me</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src={theme === 'dark' ? sunIcon : moonIcon}
                        alt="Toggle Theme"
                        className="cursor-pointer"
                        onClick={toggleTheme}
                    />

                    <div className="p-[2px] rounded-full bg-gradient-to-r from-[#fad19e] to-[#7e89f8]">
                        <a href='https://flowcv.com/resume/6414oanmfj' target='blank'>
                        <button className="rounded-full bg-gradient-to-r from-[#7e89f8] to-[#fad19e] text-black py-2 md:py-3 px-3 md:px-5 flex items-center gap-1">
                            <span className="font-medium font-normal text-sm md:text-base font-poppins">Resume</span>
                            <img src={download} alt="Download Resume" />
                        </button>
                        </a>
                    </div>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <img src={menuIcon} alt="Menu icon" />
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white dark:bg-black backdrop-blur bg-opacity-60 shadow-lg">
                        <ul className="flex flex-col items-center gap-3 p-2">
                        <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-600 dark:hover:text-gray-300 font-poppins font-normal text-base"
                                    to="/contactme">Contact me</NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
});

export default Header;
