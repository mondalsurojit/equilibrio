import React, { useState, useEffect } from 'react';
import HeroBg from '../components/HeroBg.component';
import { Calendar, Clock, MapPin, Users, Award, Layers, Gamepad2, Music, BookOpen, Lightbulb, MonitorPlay, Sparkles, Search, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import eventsData from "../assets/data/eventsData.json";

const Events = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showImageModal, setShowImageModal] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showEventDetails, setShowEventDetails] = useState(false);

    // Categories and their icons
    const categories = [
        { id: 'all', name: 'All Events', icon: <Layers size={20} /> },
        { id: 'workshop', name: 'Workshop', icon: <BookOpen size={20} /> },
        { id: 'tech and innovation', name: 'Tech and Innovation', icon: <Lightbulb size={20} /> },
        { id: 'cultural', name: 'Cultural', icon: <Music size={20} /> },
        { id: 'fun and games', name: 'Fun and Games', icon: <Gamepad2 size={20} /> },
        { id: 'e-sports', name: 'E-Sports', icon: <MonitorPlay size={20} /> },
        { id: 'extras', name: 'Extras', icon: <Sparkles size={20} /> },
    ];

    // Filter events based on selected category and search query
    const filteredEvents = eventsData
        .filter(event => selectedCategory === 'all' || event.category === selectedCategory)
        .filter(event =>
            searchQuery === '' ||
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

    // Count events in each category
    const categoryCountMap = {};
    eventsData.forEach(event => {
        if (!categoryCountMap[event.category]) {
            categoryCountMap[event.category] = 0;
        }
        categoryCountMap[event.category]++;
    });
    categoryCountMap['all'] = eventsData.length;

    // Handle image modal navigation
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setShowImageModal(true);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? filteredEvents.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === filteredEvents.length - 1 ? 0 : prev + 1));
    };

    const closeModal = () => {
        setShowImageModal(false);
    };

    // Handle key presses for image navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!showImageModal) return;

            if (e.key === 'ArrowLeft') {
                handlePrevImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showImageModal, filteredEvents.length]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white" id="events">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-screen w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                    {/* Main content */}
                    <main className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-24">

                        {/* Header */}
                        <div className="relative text-center mb-16">
                            <div className="absolute w-1/2 h-16 top-1 left-1/2 -translate-x-1/2 bg-slate-900 rounded-4xl blur-3xl -z-10"></div>
                            <div className="absolute w-3/4 h-16 top-32 left-1/2 -translate-x-1/2 bg-slate-900 rounded-4xl blur-3xl -z-10"></div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6 drop-shadow-md">
                                TECH EVENTS
                            </h1>
                            <div className="w-32 h-1 bg-purple-500 mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl text-gray-300 font-mechanism max-w-3xl mx-auto drop-shadow-md">
                                Explore our cutting-edge technical events designed to challenge your skills and expand your horizons
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative mx-auto max-w-md mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search events..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <Search size={16} />
                                </div>
                                {searchQuery && (
                                    <button
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                        onClick={() => setSearchQuery('')}
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Tabs with Count Indicators */}
                        <div className="flex flex-wrap justify-center mb-16 gap-2 z-10">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center px-4 py-2 rounded-full transition-all cursor-pointer relative ${selectedCategory === category.id
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    <span className="font-mechanism">{category.name}</span>
                                    {/* Count indicator */}
                                    <span className="absolute -top-2 -right-2 flex items-center justify-center bg-purple-500 text-white text-xs font-bold rounded-full h-5 w-5 min-w-5">
                                        {categoryCountMap[category.id] || 0}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Events Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event, index) => (
                                <div
                                    key={event.id}
                                    className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/20 z-10"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center cursor-pointer"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${event.image || "/api/placeholder/400/250"})`
                                        }}
                                        onClick={() => handleImageClick(index)}
                                    >
                                        <div className="flex justify-end p-4">
                                            <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full uppercase tracking-wider">
                                                {categories.find(cat => cat.id === event.category)?.name || event.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-robotics font-bold mb-3 text-purple-300">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-300 mb-4 text-sm">
                                            {event.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex items-center text-gray-400">
                                                <Calendar size={16} className="mr-2" />
                                                <span>{event.date}</span>
                                            </div>

                                            <div className="flex items-center text-gray-400">
                                                <Clock size={16} className="mr-2" />
                                                <span>{event.time}</span>
                                            </div>

                                            <div className="flex items-center text-gray-400">
                                                <MapPin size={16} className="mr-2" />
                                                <span>{event.venue}</span>
                                            </div>

                                            {/* Only show teamSize if it exists */}
                                            {event.teamSize && (
                                                <div className="flex items-center text-gray-400">
                                                    <Users size={16} className="mr-2" />
                                                    <span>{event.teamSize}</span>
                                                </div>
                                            )}

                                            {/* Only show prize if it exists */}
                                            {event.prize && (
                                                <div className="flex items-center text-green-400">
                                                    <Award size={16} className="mr-2" />
                                                    <span>{event.prize}</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* <a
                                            href={event.registrationLink}
                                            className="block w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-md font-mechanism font-medium transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                                            Register Now</a> */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No Events Found Message */}
                        {filteredEvents.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-xl text-gray-400">No events found in this category or search query.</p>
                                <button
                                    onClick={() => {
                                        setSelectedCategory('all');
                                        setSearchQuery('');
                                    }}
                                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">View All Events</button>
                            </div>
                        )}

                        {/* Tech-inspired decorative elements */}
                        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/25 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-700/20 rounded-full blur-3xl pointer-events-none"></div>

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

            {/* Image Modal - With fixed position navigation buttons */}
            {showImageModal && filteredEvents.length > 0 && (
                <div className="max-w-screen-2xl h-screen mx-auto fixed inset-0 z-50 flex items-center justify-center bg-gray-800/70 backdrop-blur-sm" onClick={closeModal}>
                    <div className="relative w-full max-w-6xl h-[95vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {/* Fixed position close button - always in top right corner */}
                        <button
                            className="fixed top-4 right-4 z-50 p-2 bg-gray-700/60 rounded-full text-white hover:bg-gray-600/70 cursor-pointer"
                            onClick={closeModal}
                        >
                            <X size={24} />
                        </button>

                        {/* Fixed position navigation buttons */}
                        <button
                            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevImage();
                            }}
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/30 rounded-full text-white hover:bg-black/50 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNextImage();
                            }}
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Image container with dynamic sizing based on info state */}
                        <div className="flex flex-col items-center max-h-full w-full">
                            <div className="relative flex items-center justify-center h-full w-full px-16">
                                <img
                                    src={filteredEvents[currentImageIndex].image || "/api/placeholder/800/600"}
                                    alt={filteredEvents[currentImageIndex].title}
                                    className={`object-contain rounded-lg transition-all duration-300 ease-in-out ${showEventDetails ? 'max-h-[60vh]' : 'max-h-[80vh]'
                                        }`}
                                />
                            </div>

                            {/* Updated Caption with smooth toggle-able details */}
                            <div className="mt-4 p-4 bg-gray-700/60 rounded-lg text-center w-full max-w-3xl">
                                <div className="flex items-center justify-center">
                                    <h3 className="text-2xl text-white font-robotics font-bold">{filteredEvents[currentImageIndex].title}</h3>
                                    <span className="ml-4 px-3 py-1 bg-purple-600/80 text-white text-sm rounded-full uppercase tracking-wider">
                                        {categories.find(cat => cat.id === filteredEvents[currentImageIndex].category)?.name || filteredEvents[currentImageIndex].category}
                                    </span>
                                    <button
                                        className="ml-4 p-2 bg-gray-600/70 rounded-full text-white hover:bg-gray-500/80 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setShowEventDetails(prevState => !prevState);
                                        }}
                                    >
                                        <Info size={20} />
                                    </button>
                                </div>

                                {/* Collapsible event details section with smooth transition */}
                                <div
                                    className={`bg-gray-600/70 rounded-lg text-left overflow-hidden transition-all duration-300 ease-in-out ${showEventDetails ? 'max-h-60 opacity-100 p-4 mt-4' : 'max-h-0 opacity-0 p-0 mt-0'
                                        }`}
                                >
                                    <div className="overflow-auto max-h-20">
                                        <p className="text-gray-200 mb-4">{filteredEvents[currentImageIndex].description}</p>

                                        <div className="space-y-3">
                                            <div className="flex items-center text-gray-100">
                                                <Calendar size={16} className="mr-2 flex-shrink-0" />
                                                <span>Date: {filteredEvents[currentImageIndex].date}</span>
                                            </div>

                                            <div className="flex items-center text-gray-100">
                                                <Clock size={16} className="mr-2 flex-shrink-0" />
                                                <span>Time: {filteredEvents[currentImageIndex].time}</span>
                                            </div>

                                            <div className="flex items-center text-gray-100">
                                                <MapPin size={16} className="mr-2 flex-shrink-0" />
                                                <span>Venue: {filteredEvents[currentImageIndex].venue}</span>
                                            </div>

                                            {filteredEvents[currentImageIndex].teamSize && (
                                                <div className="flex items-center text-gray-100">
                                                    <Users size={16} className="mr-2 flex-shrink-0" />
                                                    <span>Team Size: {filteredEvents[currentImageIndex].teamSize}</span>
                                                </div>
                                            )}

                                            {filteredEvents[currentImageIndex].prize && (
                                                <div className="flex items-center text-green-300">
                                                    <Award size={16} className="mr-2 flex-shrink-0" />
                                                    <span>Prize: {filteredEvents[currentImageIndex].prize}</span>
                                                </div>
                                            )}

                                            {/* <div className="mt-4">
                                                <a
                                                    href={filteredEvents[currentImageIndex].registrationLink}
                                                    className="inline-block py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-md font-medium transition-transform hover:scale-[1.03]">
                                                    Register Now
                                                </a>
                                            </div> */}
                                        </div>
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

export default Events;