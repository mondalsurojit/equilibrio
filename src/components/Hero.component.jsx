import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import CountDown from './CountDown.component';
import VerticalMovieReelSlider from './VerticalMovieReelSlider.component';
import HeroBg from './HeroBg.component';

const Hero = () => {
    const festStartDate = new Date("2025-03-10T09:00:00");
    const festDuration = 3;
    const [festStarted, setfestStarted] = useState(false);
    const [festEnded, setfestEnded] = useState(false);
    const [festApproaching, setfestApproaching] = useState(false);
    const [currentDay, setCurrentDay] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    // Check if the fest has started or ended
    useEffect(() => {
        const endDate = new Date(festStartDate);
        endDate.setDate(festStartDate.getDate() + festDuration);
        const now = new Date();

        if (now >= endDate) {
            setfestEnded(true);
            setfestStarted(false);
            setfestApproaching(false);
        } else if (now >= festStartDate) {
            setfestStarted(true);
            setfestEnded(false);
            setfestApproaching(false);

            const daysDifference = Math.floor((now - festStartDate) / (1000 * 60 * 60 * 24));
            setCurrentDay(daysDifference + 1 > festDuration ? festDuration : daysDifference + 1);
        } else {
            setfestStarted(false);
            setfestEnded(false);
            setfestApproaching(true);
        }
    }, []);

    // Render the fest day indicator
    const renderfestDay = () => {
        return (
            <div className="py-3 flex flex-col items-center justify-center">
                <div className='flex items-center justify-center gap-4'>
                    {/* Left decorative line */}
                    <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent"></div>

                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1 font-mechanism animate-pulse">
                        DAY - {currentDay}
                    </div>

                    {/* Right decorative line */}
                    <div className="h-px w-8 bg-gradient-to-l from-purple-500 to-transparent"></div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    {/* Ping effect with smaller dot in cyan color */}
                    <span className="relative flex items-center justify-center h-2.5 w-2.5">
                        <span className="animate-ping duration-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>

                    {/* NOW LIVE text */}
                    <div className="text-md md:text-lg text-purple-400 font-mechanism">
                        NOW LIVE
                    </div>
                </div>
            </div>
        );
    };

    // Render the post-fest message
    const renderfestEnded = () => {
        return (
            <div className="py-4 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-1 md:gap-4">
                    {/* Left decorative line */}
                    <div className="h-px w-6 md:w-8 bg-gradient-to-r from-cyan-500 to-transparent"></div>

                    {/* Main text with gradient and effects */}
                    <div className="text-sm md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 font-mechanism uppercase relative px-4">
                        <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-lg rounded-lg"></span>
                        <span className="relative">UNTIL NEXT YEAR</span>
                    </div>

                    {/* Right decorative line */}
                    <div className="h-px w-6 md:w-8 bg-gradient-to-l from-purple-500 to-transparent"></div>
                </div>

                <div className="mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mechanism bg-gradient-to-r from-cyan-900/30 to-purple-900/30 text-cyan-300 border border-cyan-500/30">
                        <span className="mr-1.5 relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Thanks for being part of the journey
                    </span>
                </div>
            </div>
        );
    };

    const setReminder = () => {
        const eventTitle = encodeURIComponent("Equilibrio - Techfest 2025");
        const eventDetails = encodeURIComponent("Don't miss out on the largest Tech-fest of Central India!");
        const eventLocation = encodeURIComponent("New-IT Building, Guru Ghasidas University, Bilaspur");

        // Format start and end date as all-day event
        const startDate = festStartDate.toISOString().split('T')[0].replace(/-/g, "");
        const endDate = new Date(festStartDate);
        endDate.setDate(festStartDate.getDate() + festDuration);
        const formattedEndDate = endDate.toISOString().split('T')[0].replace(/-/g, "");

        // Google Calendar Event URL
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${startDate}/${formattedEndDate}`;

        // Open Google Calendar in a new tab
        window.open(googleCalendarUrl, "_blank");
    };

    return (
        <section className="relative w-full overflow-hidden">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-full w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 h-fit w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen lg:h-fit flex flex-col justify-center">
                    {/* Main content */}
                    <main className="max-w-6xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">

                        <section className="flex flex-col items-center justify-center sm:xl md:w-2xl">
                            {/* Glowing title card - Responsive sizing */}
                            <div className="relative mb-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-tl-4xl rounded-br-4xl blur opacity-75 animate-pulse"></div>
                                <div className={`relative bg-slate-900/90 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-10 sm:py-6 ${festApproaching ? 'md:py-8' : 'md:py-12'} rounded-tl-4xl rounded-br-4xl border border-slate-700 shadow-2xl`}>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-center">
                                        EQUILIBRIO
                                    </h1>
                                    <h3 className="text-center text-md md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase tracking-wide mb-4 font-mechanism">
                                        {festEnded ? "AROHAN-2025 Has Ended" :
                                            festStarted ? "AROHAN-2025 Has Started" :
                                                "AROHAN-2025 Starts In"}
                                    </h3>

                                    {festEnded ? renderfestEnded() :
                                        festStarted ? renderfestDay() :
                                            <CountDown targetDate={festStartDate} />}

                                    <p className="text-slate-400 text-sm sm:text-md md:text-lg pt-4 rounded-lg text-center font-mechanism tracking-wide ">CREATE . CONSERVE . COMPETE</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Buttons - Responsive layout */}
                        <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center min-w-full">
                            <Link to={festApproaching ? "/highlights#past" : "/highlights"} className="flex justify-center items-center group relative w-full py-2 sm:py-2  md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md font-medium text-white overflow-hidden transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 text-sm sm:text-base cursor-pointer">
                                <span className="relative z-10 font-mechanism">
                                    {festApproaching ? "Past Highlights" : "View Highlights"}
                                </span>
                                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                            </Link>

                            {festEnded ? (
                                <a
                                    href="https://www.new.ggu.ac.in/notifications/2/0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center w-full py-2 sm:py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/50 rounded-md font-medium text-cyan-400 hover:bg-slate-700/70 hover:border-cyan-400 transition-all text-sm sm:text-base cursor-pointer font-mechanism"
                                >
                                    Other Events
                                </a>
                            ) : festApproaching ? (
                                <button
                                    onClick={setReminder}
                                    className="flex justify-center items-center w-full py-2 sm:py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/50 rounded-md font-medium text-cyan-400 hover:bg-slate-700/70 hover:border-cyan-400 transition-all text-sm sm:text-base cursor-pointer font-mechanism"
                                >
                                    Set Reminder
                                </button>
                            ) : (
                                <Link
                                    to={festStarted ? "/events" : "/events"}
                                    className="flex justify-center items-center w-full py-2 sm:py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/50 rounded-md font-medium text-cyan-400 hover:bg-slate-700/70 hover:border-cyan-400 transition-all text-sm sm:text-base cursor-pointer font-mechanism"
                                >
                                    {festStarted ? "Explore Events" : "Explore Events"}
                                </Link>
                            )}
                        </section>
                    </main>
                </div>
            </div>

            <section className="hidden lg:block absolute left-0 top-0 z-10">
                <VerticalMovieReelSlider direction="topToBottom" />
            </section>

            <section className="hidden lg:block absolute right-0 top-0 z-10">
                <VerticalMovieReelSlider direction="bottomToTop" />
            </section>

            {/* Scrolling indicator - Responsive size and improved visibility */}
            <section className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-30">
                <span className="text-slate-400 mb-1 sm:mb-2 text-xs sm:text-sm font-mono tracking-wider">SCROLL DOWN</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
            </section>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-8 sm:h-12 md:h-16 bg-gradient-to-b from-cyan-500/20 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-slate-900 to-transparent z-20 pointer-events-none"></div>
        </section>
    );
};

export default Hero;