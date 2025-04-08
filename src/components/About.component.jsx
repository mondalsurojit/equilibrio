import { Code, Award, Users, Calendar } from "lucide-react";
import HorizontalMovieReelSlider from './HorizontalMovieReelSlider.component';

export default function About() {
    return (
        <div className="relative grow px-4 sm:px-6 py-12 md:py-20 max-w-6xl mx-auto" id="about">

            <section className="block lg:hidden">
                <HorizontalMovieReelSlider direction="leftToRight" />
            </section>

            <section className="block lg:hidden -translate-y-4">
                <HorizontalMovieReelSlider direction="rightToLeft" />
            </section>

            <section className="mx-auto max-w-screen-md pt-12 lg::pt-0 pb-16 text-center">
                <h1 className="text-2xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-robotics bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">What's Equilibrio</h1>
                <p className="text-lg leading-normal tracking-[-0.017em] text-gray-500 font-mechanism">
                    Equilibrio is the annual techno-management fest of Guru Ghasidas Vishwavidyalaya, Bilaspur.
                </p>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-center text-white">
                {/* Video Section */}
                <div className="w-full md:w-1/2 rounded-tl-4xl rounded-br-4xl flex justify-center relative">
                    <div className="absolute inset-0 rounded-tl-4xl rounded-br-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 blur-sm animate-pulse"></div>
                    <div className="overflow-hidden rounded-tl-4xl rounded-br-4xl z-10 border border-slate-500 w-[550px] h-[295px]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/OsGhQv3GoXA?si=KxoYEfaGXZ1dkLvC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-none" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 pt-8 md:pt-0 md:pl-8 space-y-2">
                    <p className="text-gray-300 leading-relaxed text-justify hyphens-auto font-robotics">
                        Initiated in <span className="font-mono">2013</span>, Equilibrio has served as a platform for technology enthusiasts to showcase their intelligence, innovation, & ingenuity.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-justify hyphens-auto font-robotics">
                        The fest brings together people from all walks of life, comprising students, professionals, & the general public. It features events in technology & management through competitions, guest talks, workshops, cultural programs, & exhibitions.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-justify hyphens-auto font-robotics">
                        The word 'Equilibrio' means balance, & each year, the fest promotes a cause to balance technology with nature & society. Over the years, it has grown to be one of the best in central India.
                    </p>
                </div>
            </section>

            {/* Tech stats */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center mt-16">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-3 md:p-4 rounded-lg border border-slate-700 shadow-lg transform transition-transform hover:-translate-y-1">
                    <Code className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 mx-auto mb-1" />
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mechanism">30+</div>
                    <div className="text-sm md:text-base text-slate-400 font-mechanism">Events</div>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-3 md:p-4 rounded-lg border border-slate-700 shadow-lg transform transition-transform hover:-translate-y-1">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 mx-auto mb-1" />
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mechanism">₹3L+</div>
                    <div className="text-sm md:text-base text-slate-400 font-mechanism">Prize Pool</div>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-3 md:p-4 rounded-lg border border-slate-700 shadow-lg transform transition-transform hover:-translate-y-1">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 mx-auto mb-1" />
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mechanism">10+</div>
                    <div className="text-sm md:text-base text-slate-400 font-mechanism">Colleges</div>
                </div>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-3 md:p-4 rounded-lg border border-slate-700 shadow-lg transform transition-transform hover:-translate-y-1">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-cyan-400 mx-auto mb-1" />
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mechanism">2</div>
                    <div className="text-sm md:text-base text-slate-400 font-mechanism">Epic Days</div>
                </div>
            </section>
        </div>
    );
}