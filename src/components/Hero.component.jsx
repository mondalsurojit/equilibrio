import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import CountDown from './CountDown.component';
import VerticalMovieReelSlider from './VerticalMovieReelSlider.component';
import HeroBg from './HeroBg.component';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <section className="relative w-full overflow-hidden">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-full w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 h-fit w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen lg:h-fit flex flex-col justify-center">
                    {/* Main content */}
                    <main className="max-w-6xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">

                        <section className="flex flex-col items-center justify-center">
                            {/* Glowing title card - Responsive sizing */}
                            <div className="relative mb-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-tl-4xl rounded-br-4xl blur opacity-75 animate-pulse"></div>
                                <div className="relative bg-slate-900/90 backdrop-blur-sm px-6 sm:px-8 md:px-10 py-4 sm:py-6 md:py-8 rounded-tl-4xl rounded-br-4xl border border-slate-700 shadow-2xl">
                                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-center">
                                        EQUILIBRIO
                                    </h1>
                                    <h3 className="text-center text-md md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase tracking-wide mb-4 font-mechanism">AROHAN-2025 Starts In</h3>
                                    <CountDown targetDate="2025-03-25T09:00:00" />
                                    <p className="text-slate-400 text-base sm:text-md md:text-lg pt-2 sm:pt-4 rounded-lg text-center font-mechanism tracking-wide ">CREATE . CONSERVE . COMPETE</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA Buttons - Responsive layout */}
                        <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center min-w-full">
                            <button className="group relative w-full py-2 sm:py-2  md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md font-medium text-white overflow-hidden transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 text-sm sm:text-base cursor-pointer">
                                <span className="relative z-10 font-mechanism">Register Now</span>
                                <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                            </button>
                            <button className="w-full py-2 sm:py-2 md:py-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/50 rounded-md font-medium text-cyan-400 hover:bg-slate-700/70 hover:border-cyan-400 transition-all text-sm sm:text-base cursor-pointer font-mechanism">
                                Explore Events
                            </button>
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