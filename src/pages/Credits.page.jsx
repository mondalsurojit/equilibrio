import React, { useState } from 'react';
import HeroBg from '../components/HeroBg.component';
import { Github, Linkedin, Globe } from 'lucide-react';

import ReactLogo from '../assets/images/techstacks/react.png';
import ThreeLogo from '../assets/images/techstacks/three.png';
import TailwindLogo from '../assets/images/techstacks/tailwind.png';
import SwiperLogo from '../assets/images/techstacks/swiper.png';
import LucideLogo from '../assets/images/techstacks/lucide.png';
import NetlifyLogo from '../assets/images/techstacks/netlify.png';
// import ArjunVerma from '../assets/images/credits/aarav.jpg';
// import SurojitMondal from '../assets/images/credits/surojit.jpg';

const Credits = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Development team data
    const devTeam = [
        {
            name: "Surojit Mondal",
            role: "Lead Developer",
            contribution: "Website architecture, frontend development, and backend integration",
            image: "/images/credits/surojitmondal.jpg",
            socials: {
                github: "https://github.com/mondalsurojit",
                linkedin: "https://linkedin.com/in/surojitmondal/",
                website: "https://surojit.netlify.app"
            }
        },
        {
            name: "Arjun Verma",
            role: "Co-Lead",
            contribution: "User interface design, animations, and responsive layouts",
            image: "/images/credits/arjunverma.jpeg",
            socials: {
                github: "https://github.com/vermarjun",
                linkedin: "https://linkedin.com/in/arjun-verma-59962528a/",
                website: ""
            }
        },
    ];

    // Resource credits data
    const resources = [
        {
            name: "React.js",
            category: "Framework",
            description: "Frontend JavaScript library for building user interfaces",
            image: ReactLogo
        },
        {
            name: "Three.js",
            category: "3D Library",
            description: "JavaScript 3D library used for creating the interactive background",
            image: ThreeLogo
        },
        {
            name: "Tailwind CSS",
            category: "CSS Framework",
            description: "Utility-first CSS framework for rapid UI development",
            image: TailwindLogo
        },
        {
            name: "Swiper.js",
            category: "Component Library",
            description: "Modern mobile touch slider used for team carousel",
            image: SwiperLogo
        },
        {
            name: "Lucide Icons",
            category: "Icon Library",
            description: "Beautiful & consistent icon set used throughout the website",
            image: LucideLogo
        },
        {
            name: "Netlify",
            category: "Hosting Platform",
            description: "Deployment and hosting platform for the website",
            image: NetlifyLogo
        }
    ];

    // Special thanks data
    const specialThanks = [
        {
            name: "Dr. Agnivesh Pandey",
            role: "Faculty Advisor",
            contribution: "For guidance and support throughout the project"
        },
        {
            name: "Dr. G.P. Dewangan",
            role: "Faculty Advisor",
            contribution: "For providing resources and infrastructure"
        },
        {
            name: "Information Technology Department",
            role: "Organization",
            contribution: "For coordinating between teams and departments"
        },
        {
            name: "All Volunteers",
            role: "Support Team",
            contribution: "For their time and dedication to make Equilibrio successful"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-screen w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                    {/* Main content */}
                    <main className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-24">

                        {/* Credits Section */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-24 sm:h-16 bg-slate-900 rounded-4xl blur-3xl -z-10"></div>
                            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4 font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-md">
                                CREDITS
                            </h2>

                            <div className="w-32 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

                            {/* Development Team Section */}
                            <div className="mb-16">
                                <h3 className="text-center text-3xl md:text-4xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 font-robotics">
                                    DEVELOPMENT TEAM
                                </h3>

                                <div className="flex justify-center">
                                    <div className={`grid gap-8 ${devTeam.length === 1 ? 'grid-cols-1 max-w-xs' :
                                        devTeam.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-xl' :
                                            devTeam.length === 3 ? 'grid-cols-1 md:grid-cols-3 max-w-4xl' :
                                                'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
                                        }`}>
                                        {devTeam.map((member, index) => (
                                            <div key={index} className="flex flex-col bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 transition-colors">
                                                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-purple-500 p-1 overflow-hidden">
                                                    <div
                                                        className="bg-cover bg-center w-full h-full rounded-full"
                                                        style={{ backgroundImage: `url(${member.image})` }}
                                                    ></div>
                                                </div>

                                                <h4 className="text-xl font-bold text-center mb-1 font-robotics">{member.name}</h4>
                                                <p className="text-purple-400 text-center mb-3 text-sm font-mechanism">{member.role}</p>

                                                <div className="w-16 h-0.5 bg-purple-700 mx-auto mb-3"></div>

                                                <p className="text-gray-300 text-center text-sm mb-4 font-robotics">
                                                    {member.contribution}
                                                </p>

                                                <div className="mt-auto flex justify-center space-x-4">
                                                    {member.socials.github && (
                                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                                            <Github size={20} />
                                                        </a>
                                                    )}
                                                    {member.socials.linkedin && (
                                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                                            <Linkedin size={20} />
                                                        </a>
                                                    )}
                                                    {member.socials.website && (
                                                        <a href={member.socials.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                                                            <Globe size={20} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Resources Section */}
                            <div className="mb-16">
                                <h3 className="text-center text-3xl md:text-4xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 font-robotics">
                                    TECHNOLOGIES & RESOURCES
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {resources.map((resource, index) => (
                                        <div
                                            key={index}
                                            className="relative bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/60 transition-colors group flex items-center justify-between overflow-hidden">

                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold mb-2 font-robotics relative z-10">{resource.name}</h4>
                                                <p className="text-purple-400 text-sm mb-3 font-mechanism relative z-10">{resource.category}</p>
                                                <p className="text-gray-300 text-sm font-robotics relative z-10">{resource.description}</p>
                                            </div>

                                            {/* Tilting Icon Box */}
                                            <div className="absolute right-5 -top-2 transform flex items-center justify-center overflow-hidden rounded-lg border border-purple-500/50 select-none scale-[1] group-hover:scale-[1.035] rotate-[0.1rad] group-hover:rotate-[0.065rad] duration-300 ease-out group-hover:duration-400 group-hover:ease-[cubic-bezier(0,0.9,0.5,1.35)] transition-transform backface-hidden will-change-transform bg-gray-900/30 text-white p-2 w-28 h-20">
                                                {/* Resource Image */}
                                                <img src={resource.image} alt={resource.name} className="w-10 h-10 backdrop-grayscale-100" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Special Thanks Section */}
                            <div>
                                <h3 className="text-center text-3xl md:text-4xl mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 font-robotics">
                                    SPECIAL THANKS
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {specialThanks.map((person, index) => (
                                        <div key={index} className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/60 transition-colors">
                                            <h4 className="text-xl font-bold mb-1 font-robotics">{person.name}</h4>
                                            <p className="text-purple-400 text-sm mb-3 font-mechanism">{person.role}</p>
                                            <p className="text-gray-300 text-sm font-robotics">{person.contribution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Copyright Notice */}
                            <div className="mt-16 text-center">
                                <div className="w-48 h-0.5 bg-purple-700/50 mx-auto mb-6"></div>
                                <div className='max-h-6 flex items-center justify-center gap-2 overflow-hidden'>
                                    <span className="text-gray-400 text-xl font-robotics font-extrabold">©</span>
                                    <p className="text-gray-400 text-sm font-mechanism">
                                        Equilibrio 2025 | All Rights Reserved
                                    </p>
                                </div>
                                <p className="text-gray-500 text-xs mt-2 font-mechanism">
                                    Made with 💜 by the Equilibrio Web Development Team
                                </p>
                            </div>
                        </div>

                        {/* Tech-inspired decorative elements */}
                        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/25 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-700/20 rounded-full blur-3xl"></div>

                        {/* Circuit-inspired decorative lines */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
                            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
                            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Credits;