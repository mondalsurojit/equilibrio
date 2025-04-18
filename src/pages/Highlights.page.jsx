import React, { useState, useEffect } from 'react';
import HeroBg from '../components/HeroBg.component';
import { ChevronLeft, ChevronRight, Calendar, Camera, Users, Award, X, Info, MapPin } from 'lucide-react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

import highlightsData from '../assets/data/highlightsData.json';

const Highlights = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeYear, setActiveYear] = useState(2025);
    const [animationDirection, setAnimationDirection] = useState('right');

    const [showImageModal, setShowImageModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showEventDetails, setShowEventDetails] = useState(false);

    const closeModal = () => setShowImageModal(false);
    const handleNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % currentYearData.gallery.length);
    const handlePrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + currentYearData.gallery.length) % currentYearData.gallery.length);

    // Get available years from your JSON data
    const years = Object.keys(highlightsData).map(Number).sort((a, b) => a - b);

    const handleYearChange = (direction) => {
        setAnimationDirection(direction);
        const currentIndex = years.indexOf(activeYear);

        if (direction === 'left') {
            const newIndex = currentIndex === 0 ? years.length - 1 : currentIndex - 1;
            setActiveYear(years[newIndex]);
        } else {
            const newIndex = currentIndex === years.length - 1 ? 0 : currentIndex + 1;
            setActiveYear(years[newIndex]);
        }
    };

    useEffect(() => {
        // Reset scroll position when year changes
        window.scrollTo(0, 0);
    }, [activeYear]);

    // Add a safety check to ensure the year exists in your data
    const currentYearData = highlightsData[activeYear] || null;

    // If data is not available for the selected year, show an error message
    if (!currentYearData) {
        return (
            <section className="relative w-full overflow-hidden min-h-screen">
                <section className="absolute inset-0 z-0 h-screen w-full"><HeroBg loadStatus={setIsLoaded} /></section>
                <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="container mx-auto px-4 py-20 flex items-center justify-center h-screen">
                        <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 text-center">
                            <h2 className="text-3xl font-bold text-red-400 mb-4 font-robotics">Data Not Available</h2>
                            <p className="text-gray-300 mb-6 font-robotics">The data for year {activeYear} couldn't be found.</p>
                            <button
                                onClick={() => setActiveYear(years[years.length - 1])}
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors font-mechanism">Go to Latest Year
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative w-full overflow-hidden min-h-screen">
            {/* Three.js background canvas */}
            <section className="absolute inset-0 z-0 h-screen w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container */}
            <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                    {/* Main content */}
                    <main className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-24">

                        {/* Highlights Section */}
                        <div className="absolute top-0 left-0 w-full h-24 sm:h-16 bg-slate-900 rounded-4xl blur-3xl -z-10"></div>
                        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4 font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-md">
                            EVENT HIGHLIGHTS
                        </h2>
                        <div className="w-32 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

                        {/* Year Navigation */}
                        <div className="relative flex justify-center items-center mb-12">
                            <button
                                onClick={() => handleYearChange('left')}
                                className="hidden md:block absolute left-0 lg:left-4 p-2 rounded-full cursor-pointer bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                                aria-label="Previous year">
                                <ChevronLeft size={24} className="text-purple-400" />
                            </button>

                            <div className="flex space-x-2 md:space-x-4 overflow-x-auto py-2 px-4 scrollbar-hide">
                                {years.map((year) => (
                                    <button
                                        key={year}
                                        onClick={() => {
                                            setAnimationDirection(year > activeYear ? 'right' : 'left');
                                            setActiveYear(year);
                                        }}
                                        className={`px-4 py-2 rounded-lg font-mechanism transition-all duration-300 cursor-pointer
                                                ${activeYear === year
                                                ? 'bg-purple-600 text-white scale-110'
                                                : 'bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 text-gray-300 hover:border-purple-500/60'}`}>
                                        {year}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handleYearChange('right')}
                                className="hidden md:block absolute right-0 lg:right-4 p-2 rounded-full cursor-pointer bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-colors"
                                aria-label="Next year">
                                <ChevronRight size={24} className="text-purple-400" />
                            </button>
                        </div>

                        {/* Year Content with Animation */}
                        <div key={activeYear} className={`
                                transition-all duration-500 transform 
                                ${animationDirection === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'}
                            `}>
                            {/* Year Title & Description */}
                            <div className="text-center mb-12">
                                <h3 className="text-4xl md:text-5xl mb-3 font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                                    EQUILIBRIO <u className="font-mechanism font-thin text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">{activeYear}</u>
                                </h3>
                                <p className="text-xl text-purple-400 font-mechanism mb-6">{currentYearData.theme}</p>
                                <p className="text-gray-300 max-w-2xl mx-auto font-robotics text-center">
                                    {currentYearData.description}
                                </p>
                            </div>

                            {/* Main Event Image */}
                            <div className="mb-12 relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:opacity-75 transition-opacity duration-300 rounded-xl"></div>
                                <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-xl p-2 hover:border-purple-500/60 transition-colors shadow-lg overflow-hidden">
                                    <div className="aspect-[16/9] h-36 sm:h-48 md:h-96 w-full overflow-hidden rounded-lg">
                                        <img
                                            src={currentYearData.mainImage}
                                            alt={`Equilibrio ${activeYear} main event`}
                                            className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg border border-purple-500/30">
                                    <p className="text-white font-robotics font-bold text-sm md:text-lg">
                                        {currentYearData.title}
                                    </p>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/60 transition-colors text-center hover:transform hover:scale-105 duration-300">
                                    <Users size={32} className="text-purple-400 mx-auto mb-2" />
                                    <p className="text-gray-300 font-mechanism mb-1">PARTICIPANTS</p>
                                    <p className="text-3xl font-thin text-white font-mechanism">{currentYearData.stats.participants}</p>
                                </div>
                                <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/60 transition-colors text-center hover:transform hover:scale-105 duration-300">
                                    <Calendar size={32} className="text-purple-400 mx-auto mb-2" />
                                    <p className="text-gray-300 font-mechanism mb-1">EVENTS</p>
                                    <p className="text-3xl font-thin text-white font-mechanism">{currentYearData.stats.events}</p>
                                </div>
                                <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-5 hover:border-purple-500/60 transition-colors text-center hover:transform hover:scale-105 duration-300">
                                    <Award size={32} className="text-purple-400 mx-auto mb-2" />
                                    <p className="text-gray-300 font-mechanism mb-1">INSTITUTIONS</p>
                                    <p className="text-3xl font-thin text-white font-mechanism">{currentYearData.stats.institutions}</p>
                                </div>
                            </div>

                            {/* Key Events */}
                            {/* <div className="mb-12">
                                    <h4 className="text-2xl md:text-3xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 font-robotics text-center">
                                        KEY EVENTS
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentYearData.keyEvents.map((event, index) => (
                                            <div key={index} className="flex items-center bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 hover:border-purple-500/60 transition-colors">
                                                <div className="w-3 h-3 rounded-full bg-purple-500 mr-4"></div>
                                                <p className="text-gray-200 font-robotics">{event}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}

                            {/* Gallery */}
                            <div className="mb-16">
                                <h4 className="text-2xl md:text-3xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300 font-robotics text-center">
                                    EVENT GALLERY
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {currentYearData.gallery.map((item, index) => {
                                        const isVideo = item.media.endsWith('.mp4');
                                        return (
                                            <div
                                                key={item.id}
                                                className="group relative cursor-pointer"
                                                onClick={() => {
                                                    setCurrentImageIndex(index);
                                                    setShowImageModal(true);
                                                }}>
                                                <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-2 hover:border-purple-500/60 transition-colors overflow-hidden h-full">
                                                    <div className="aspect-square overflow-hidden rounded-lg relative">
                                                        {isVideo ? (
                                                            <video
                                                                src={item.media}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                            />
                                                        ) : (
                                                            <img
                                                                src={item.media}
                                                                alt={item.caption}
                                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                        )}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                                            <div className="flex items-center">
                                                                {isVideo ? (
                                                                    <div className="flex items-center">
                                                                        <span className="bg-red-500 rounded-full h-2 w-2 mr-1 animate-pulse"></span>
                                                                        <Camera size={16} className="text-purple-400 mr-2" />
                                                                    </div>
                                                                ) : (
                                                                    <Camera size={16} className="text-purple-400 mr-2" />
                                                                )}
                                                                <p className="text-white text-sm font-robotics">{item.caption}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Call to Action - Only for the most recent year */}
                            {activeYear === years[years.length - 1] && (
                                <div className="text-center mb-12">
                                    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-colors">
                                        <h4 className="text-2xl font-bold text-white mb-3 font-robotics">See you again in Equilibrio 2026!</h4>
                                        <p className="text-gray-300 mb-6 font-robotics">
                                            Experience the next evolution of technology and innovation.
                                        </p>
                                        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-colors font-mechanism cursor-pointer" onClick={() => alert('Pre-registration coming soon!')}>
                                            PRE-REGISTER NOW
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tech-inspired decorative elements */}
                        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/25 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-700/20 rounded-full blur-3xl pointer-events-none"></div>

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
            {/* Image Modal */}
            {showImageModal && currentYearData.gallery.length > 0 && (
                <div className="max-w-screen-2xl h-screen mx-auto fixed inset-0 z-50 flex items-center justify-center bg-gray-800/70 backdrop-blur-sm" onClick={closeModal}>
                    <div className="relative w-full max-w-6xl h-[95vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="fixed top-4 right-4 z-50 p-2 bg-gray-700/60 rounded-full text-white hover:bg-gray-600/70 cursor-pointer"
                            onClick={closeModal}><X size={24} /></button>
                        <button
                            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage();
                            }}><ChevronLeft size={28} /></button>

                        <button
                            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage();
                            }}><ChevronRight size={28} /></button>

                        {/* Image container with dynamic sizing based on info state */}
                        <div className="flex flex-col items-center max-h-full w-full">
                            <div className="relative flex items-center justify-center h-full w-full px-16">
                                {currentYearData.gallery[currentImageIndex].media.endsWith('.mp4') ? (
                                    <video
                                        src={currentYearData.gallery[currentImageIndex].media}
                                        className={`object-contain rounded-lg transition-all duration-300 ease-in-out ${showEventDetails ? 'max-h-[60vh]' : 'max-h-[80vh]'}`}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                    />
                                ) : (
                                    <img
                                        src={currentYearData.gallery[currentImageIndex].media}
                                        alt={currentYearData.gallery[currentImageIndex].caption}
                                        className={`object-contain rounded-lg transition-all duration-300 ease-in-out ${showEventDetails ? 'max-h-[60vh]' : 'max-h-[80vh]'}`} />
                                )}
                            </div>

                            {/* Caption section */}
                            <div className="mt-4 p-4 bg-gray-700/60 rounded-lg text-center w-full max-w-3xl">
                                <div className="flex items-center justify-center">
                                    <p className="text-lg text-white font-robotics">{currentYearData.gallery[currentImageIndex].caption}</p>

                                    <button
                                        className="ml-4 p-2 bg-gray-600/70 rounded-full text-white hover:bg-gray-500/80 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowEventDetails(prevState => !prevState);
                                        }}><Info size={20} /></button>
                                </div>

                                {/* Collapsible details section with smooth transition */}
                                <div
                                    className={`bg-gray-600/70 rounded-lg text-left overflow-hidden transition-all duration-300 ease-in-out ${showEventDetails ? 'max-h-60 opacity-100 p-4 mt-4' : 'max-h-0 opacity-0 p-0 mt-0'}`}
                                >
                                    <div className="overflow-auto max-h-48">
                                        <div className="flex items-center text-gray-100 mb-2">
                                            <Calendar size={16} className="mr-2 flex-shrink-0" />
                                            <span>Captured on: {currentYearData.gallery[currentImageIndex].date || "N/A"}</span>
                                        </div>

                                        {currentYearData.gallery[currentImageIndex].location && (
                                            <div className="flex items-center text-gray-100">
                                                <MapPin size={16} className="mr-2 flex-shrink-0" />
                                                <span>Location: {currentYearData.gallery[currentImageIndex].location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Highlights;