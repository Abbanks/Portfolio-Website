import React, { forwardRef } from 'react'
import img from '../assets/myimg.jpg'

const AboutMe = forwardRef((props, ref) => {
    return (
        <section className='pt-20' id="about" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center justify-center">
                        <img
                            src={img}
                            alt="About Me"
                            className="h-auto w-[360px] max-w-md object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="font-poppins pt-10">
                        <h1 className="text-3xl md:text-4xl font-semibold pb-4">
                            <span className="font-normal">About</span> <span className="font-bold">Me</span>
                        </h1>
                        <p className="text-base md:text-base leading-relaxed">
                            Hi, I’m Abigail Oluwabanke Eboda, but my friends calls me Big Banks. I’m a Software Engineer living in Nigeria.
                            <br /><br />
                            I have worked on several projects, primarily focusing on web applications.
                            <br /><br />
                            My tech interests lie in Web Development and building Mobile Applications, particularly for Android. I have experience with C#, React.js and Kotlin. Currently, C# is my favorite.
                            <br /><br />
                            I studied Computer Science at the University of Ilorin, Nigeria.
                            <br /><br />
                            When I’m not working, you might find me listening to music, reading, visiting a fun park, watching a movie, or simply relaxing and sleeping 😂.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AboutMe