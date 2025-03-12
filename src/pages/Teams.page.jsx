import React, { useState, useEffect } from 'react';
import HeroBg from '../components/HeroBg.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Sc1 from "../assets/images/teams/aryan.jpg"
import Sc2 from "../assets/images/teams/astha.jpg"
import Sc3 from "../assets/images/teams/raushan.jpg"
import Sc4 from "../assets/images/teams/umang.jpg"

const Teams = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Coordinators data
    const coordinators = [
        {
            name: "Aryan Singh",
            position: "Coordinator (Male)",
            image: Sc1,
            quote: "In nutshell the journey of leading a team & hosting such an event was a dream once. &  now being in those shoes it feels overwhelming to carry with the responsibility. But I believe in action so let's go!!!"
        },
        {
            name: "Astha Agarwal",
            position: "Coordinator (Female)",
            image: Sc2,
            quote: "The experience of conducting an event on such a wide level is indeed tough but the driving force to actually lead it is tougher than that. I believe in action so let's make this happen together!"
        },
        {
            name: "Raushan Yadav",
            position: "Co-Coordinator (Male)",
            image: Sc3,
            quote: "A huge responsibility &  a great way to explore various fields. I realised that the world in me is so competitive on every tiny situation &  teaches me a lot. I know the future holds a lot for me."
        },
        {
            name: "Umang Verma",
            position: "Co-Coordinator (Female)",
            image: Sc4,
            quote: "Every challenge is an opportunity to grow, &  organizing a national level event like Equilibrio is the epitome of that. It has given me an ideal platform to enhance my leadership &  technical skills."
        }
    ];

    // Team leads data
    const teamLeads = [
        {
            name: "Surojit Mondal",
            position: "Web Development Team Lead",
            image: "/images/team-leads/gourav.jpg",
            description: "I am Gourav Bansal from ECE, 3rd Year. I am the lead of Marketing Team at Equilibrio'25. I will strive with my team to make great contribution in marketing, you will always definitely wanna see!",
            socials: {
                linkedin: "#",
                instagram: "#",
                twitter: "#"
            }
        },
        {
            name: "John Doe",
            position: "Design Team Lead",
            image: "/images/team-leads/priya.jpg",
            description: "Leading the design team for Equilibrio'25 has been an amazing creative journey. Our team works to create visually striking graphics &  UI elements that represent the tech-forward vision of our fest.",
            socials: {
                linkedin: "#",
                instagram: "#",
                twitter: "#"
            }
        },
        {
            name: "John Doe",
            position: "Technical Team Lead",
            image: "/images/team-leads/rahul.jpg",
            description: "As the Technical Team Lead, I'm responsible for all the tech infrastructure that powers Equilibrio'25. From our website to the event management systems, we ensure everything runs smoothly.",
            socials: {
                linkedin: "#",
                instagram: "#",
                twitter: "#"
            }
        },
        {
            name: "John Doe",
            position: "Events Team Lead",
            image: "/images/team-leads/neha.jpg",
            description: "Coordinating the diverse range of events at Equilibrio'25 is both challenging &  exciting. My team works tirelessly to create engaging &  innovative competition formats for all participants.",
            socials: {
                linkedin: "#",
                instagram: "#",
                twitter: "#"
            }
        }
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-full w-full">
                <HeroBg loadStatus={setIsLoaded} />
            </section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                    {/* Main content */}
                    <main className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24">

                        {/* Coordinators Section */}
                        <div className="mb-24">
                            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500" style={{ fontFamily: 'Robotics, sans-serif' }}>
                                INTRODUCING OUR COORDINATORS
                            </h2>
                            <div className="w-32 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {coordinators.map((coordinator, index) => (
                                    <div key={index} className="flex flex-col items-center z-10">
                                        <div className="rounded-full border-4 border-purple-500 p-1 mb-6 w-56 h-56 flex items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                                            <div className="bg-cover bg-center w-full h-full rounded-full" style={{ backgroundImage: `url(${coordinator.image})` }}></div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-center font-robotics">{coordinator.name}</h3>
                                        <p className="text-purple-400 mb-4 text-center font-mechanism">{coordinator.position}</p>
                                        <div className="w-3/4 h-0.5 bg-purple-700 mb-4"></div>
                                        <p className="text-sm text-gray-300 text-center hyphens-auto font-robotics">
                                            {coordinator.quote}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Team Leads Section */}
                        <div className="mb-16">
                            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400" style={{ fontFamily: 'Robotics, sans-serif' }}>
                                TEAM LEADS
                            </h2>
                            <div className="w-32 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
                            <h3 className="text-center text-xl mb-16 text-gray-300" style={{ fontFamily: 'Mechanism, sans-serif' }}>
                                Meet our team leads
                            </h3>

                            <div className="relative">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    }}
                                    pagination={{
                                        clickable: true,
                                        bulletClass: 'swiper-pagination-bullet swiper-pagination-bullet-custom',
                                        bulletActiveClass: 'swiper-pagination-bullet-active swiper-pagination-bullet-custom-active',
                                        renderBullet: function (index, className) {
                                            return `<span class="${className} bg-purple-500 inline-block h-3 w-3 rounded-full cursor-pointer mx-1"></span>`;
                                        }
                                    }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    className="team-leads-swiper"
                                >
                                    {teamLeads.map((lead, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col items-center mx-auto max-w-3xl border border-purple-500/30 rounded-lg p-8 bg-gray-800/70 backdrop-blur-sm">
                                                <div className="rounded-full border-4 border-purple-500 p-1 mb-6 w-48 h-48 flex items-center justify-center overflow-hidden">
                                                    <div className="bg-cover bg-center w-full h-full rounded-full" style={{ backgroundImage: `url(${lead.image})` }}></div>
                                                </div>

                                                <h3 className="text-2xl font-bold mb-2 text-center font-robotics">{lead.name}</h3>

                                                <div className="w-48 h-0.5 bg-purple-700 my-4"></div>

                                                <p className="text-center text-gray-300 mb-6 font-robotics hyphens-auto">{lead.description}</p>

                                                <div className="flex space-x-4">
                                                    <a href={lead.socials.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors">
                                                        <Linkedin size={24} />
                                                    </a>
                                                    <a href={lead.socials.instagram} className="text-pink-400 hover:text-pink-300 transition-colors">
                                                        <Instagram size={24} />
                                                    </a>
                                                    <a href={lead.socials.twitter} className="text-blue-400 hover:text-blue-300 transition-colors">
                                                        <Twitter size={24} />
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Custom navigation */}
                                <div className="swiper-button-prev !text-purple-500 !w-12 !h-12 flex items-center justify-center bg-gray-900/70 rounded-full -left-2 lg:-left-6">
                                    <span className="text-2xl">←</span>
                                </div>
                                <div className="swiper-button-next !text-purple-500 !w-12 !h-12 flex items-center justify-center bg-gray-900/70 rounded-full -right-2 lg:-right-6">
                                    <span className="text-2xl">→</span>
                                </div>
                            </div>
                        </div>

                        {/* Tech-inspired decorative elements */}
                        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/25 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-700/20 rounded-full blur-3xl"></div>

                        {/* Circuit-inspired decorative lines */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
                            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Teams