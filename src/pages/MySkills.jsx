import React,  { forwardRef } from 'react'
import git from '../assets/git.svg'
import csharp from '../assets/csharp.svg'
import dotnet from '../assets/dotnet.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import sqlserver from '../assets/sqlserver.svg'
import postgresql from '../assets/postgresql.svg'
import mongodb from '../assets/mongodb.svg'
import tailwind from '../assets/tailwindcss.svg'
import docker from '../assets/docker.svg'

const MySkills = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="pt-16 px-4 md:px-8 lg:px-16" id="myskills">
        <h1 className="text-4xl text-center pt-16 pb-2 font-poppins">
            <span className="font-normal">My</span> <span className="font-bold">Skills</span>
        </h1>
    
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
       
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={csharp} alt="C# icon" />
                    <h5 className="font-poppins text-center">C#</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={dotnet} alt=".NET icon" />
                    <h5 className="font-poppins text-center">.NET</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={tailwind} alt="Tailwindcss icon" />
                    <h5 className="font-poppins text-center">Tailwind CSS</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={javascript} alt="Javascript icon" />
                    <h5 className="font-poppins text-center">Javascript</h5>
                </div>
            </div>
            
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={react} alt="React icon" />
                    <h5 className="font-poppins text-center">React</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={sqlserver} alt="SQL Server icon" />
                    <h5 className="font-poppins text-center">SQL Server</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={postgresql} alt="PostgreSQL icon" />
                    <h5 className="font-poppins text-center">PostgreSQL</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={mongodb} alt="Mongo icon" />
                    <h5 className="font-poppins text-center">MongoDB</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={git} alt="Git icon" />
                    <h5 className="font-poppins text-center">Git</h5>
                </div>
            </div>
    
            <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-14 h-14" src={docker} alt="Docker icon" />
                    <h5 className="font-poppins text-center">Docker</h5>
                </div>
            </div>

         
        </div>
    </div>
    
    )
})

export default MySkills