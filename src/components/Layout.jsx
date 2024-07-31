import Header from './Header';
import { useTheme } from '../contexts/ThemeContext';
import React, { useRef}  from 'react';
import Home from '../pages/Home';
import ContactMe from '../pages/Contactme';
import { Footer } from '../components/Footer';
import About from '../pages/AboutMe';
import Projects from '../pages/Projects';
import MySkills from '../pages/MySkills';

export default function Layout() {
    const { theme, toggleTheme } = useTheme();

    const headerRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactmeRef = useRef(null);
    const mySkillsRef = useRef(null);

    const sectionRefs = {
        header: headerRef,
        about: aboutRef,
        projects: projectsRef,
        contactme: contactmeRef,
        myskills: mySkillsRef,
    };

    const handleHomeClick = () => {
        if (headerRef.current) {
            headerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <Header theme={theme} toggleTheme={toggleTheme} sectionRefs={sectionRefs} 
            ref={headerRef} scrollToHome={handleHomeClick} />
            <main className="px-[87px]">
                <Home nextSectionRef={mySkillsRef} theme={theme}/>
                <MySkills ref={mySkillsRef} />
                <About ref={aboutRef} />
                <Projects ref={projectsRef} />
                <ContactMe ref={contactmeRef} theme={theme} />
            </main>
            <Footer scrollToHome={handleHomeClick}/>
        </div>
    );
}
