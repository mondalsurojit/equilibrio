import React, { useState, useEffect } from 'react';
import HeroBg from '../components/HeroBg.component';
import { Calendar, Clock, MapPin, Users, Award, Layers, Code, Cpu, Database, Zap, Monitor, Network } from 'lucide-react';

const Events = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Categories and their icons
    const categories = [
        { id: 'all', name: 'All Events', icon: <Layers size={20} /> },
        { id: 'coding', name: 'Coding', icon: <Code size={20} /> },
        { id: 'hardware', name: 'Hardware', icon: <Cpu size={20} /> },
        { id: 'data', name: 'Data Science', icon: <Database size={20} /> },
        { id: 'innovation', name: 'Innovation', icon: <Zap size={20} /> },
        { id: 'design', name: 'Design', icon: <Monitor size={20} /> },
        { id: 'networking', name: 'Networking', icon: <Network size={20} /> },
    ];

    // Events data
    const eventsData = [
        {
            id: 1,
            title: "Code Crusade",
            category: "coding",
            description: "A competitive coding challenge where participants solve algorithmic problems against the clock. Test your coding skills, optimize your solutions, and compete for the top spot on the leaderboard.",
            date: "April 15, 2025",
            time: "10:00 AM - 2:00 PM",
            venue: "CS Lab Complex",
            teamSize: "Individual",
            prize: "₹15,000",
            registrationLink: "#",
            image: "/images/events/coding-event.jpg"
        },
        {
            id: 2,
            title: "Hack-A-Thon 2025",
            category: "coding",
            description: "A 24-hour hackathon where teams build innovative solutions to real-world problems. Create, collaborate, and code your way to developing the next breakthrough application.",
            date: "April 16-17, 2025",
            time: "Starts at 9:00 AM",
            venue: "Central Auditorium",
            teamSize: "2-4 members",
            prize: "₹50,000",
            registrationLink: "#",
            image: "/images/events/hackathon.jpg"
        },
        {
            id: 3,
            title: "Circuit Symphony",
            category: "hardware",
            description: "Design and build electronic circuits to solve specific challenges. Showcase your understanding of hardware components and circuit design principles in this hands-on competition.",
            date: "April 18, 2025",
            time: "11:00 AM - 4:00 PM",
            venue: "Electronics Lab",
            teamSize: "1-2 members",
            prize: "₹20,000",
            registrationLink: "#",
            image: "/images/events/circuit.jpg"
        },
        {
            id: 4,
            title: "Data Detectives",
            category: "data",
            description: "Analyze complex datasets to uncover hidden patterns and insights. Apply statistical methods and data visualization techniques to solve real-world data science challenges.",
            date: "April 19, 2025",
            time: "10:00 AM - 3:00 PM",
            venue: "Advanced Computing Lab",
            teamSize: "2-3 members",
            prize: "₹25,000",
            registrationLink: "#",
            image: "/images/events/data-science.jpg"
        },
        {
            id: 5,
            title: "Drone Derby",
            category: "hardware",
            description: "Navigate custom-built drones through an obstacle course in the fastest time. Test your drone's maneuverability and your piloting skills in this exciting aerial competition.",
            date: "April 20, 2025",
            time: "2:00 PM - 5:00 PM",
            venue: "Open Ground",
            teamSize: "2-3 members",
            prize: "₹30,000",
            registrationLink: "#",
            image: "/images/events/drone.jpg"
        },
        {
            id: 6,
            title: "UI/UX Design Sprint",
            category: "design",
            description: "Design intuitive and appealing user interfaces for given problem statements. Apply principles of user experience design to create solutions that are both functional and aesthetically pleasing.",
            date: "April 21, 2025",
            time: "9:00 AM - 4:00 PM",
            venue: "Design Studio",
            teamSize: "Individual or pairs",
            prize: "₹18,000",
            registrationLink: "#",
            image: "/images/events/ui-ux.jpg"
        },
        {
            id: 7,
            title: "NetworkNinja",
            category: "networking",
            description: "Configure and troubleshoot network setups to solve connectivity challenges. Demonstrate your networking knowledge and problem-solving abilities in this practical competition.",
            date: "April 22, 2025",
            time: "10:00 AM - 2:00 PM",
            venue: "Networking Lab",
            teamSize: "1-2 members",
            prize: "₹22,000",
            registrationLink: "#",
            image: "/images/events/networking.jpg"
        },
        {
            id: 8,
            title: "Innovation Challenge",
            category: "innovation",
            description: "Present your innovative ideas and prototypes to solve contemporary challenges. Pitch your concepts to a panel of industry experts and receive valuable feedback and mentorship.",
            date: "April 23, 2025",
            time: "11:00 AM - 6:00 PM",
            venue: "Innovation Hub",
            teamSize: "2-4 members",
            prize: "₹40,000 + Incubation Support",
            registrationLink: "#",
            image: "/images/events/innovation.jpg"
        }
    ];

    // Filter events based on selected category
    const filteredEvents = selectedCategory === 'all'
        ? eventsData
        : eventsData.filter(event => event.category === selectedCategory);

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

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center mb-16 gap-2 z-10">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center px-4 py-2 rounded-full transition-all ${selectedCategory === category.id
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="mr-2">{category.icon}</span>
                                    <span className="font-mechanism">{category.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Events Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/20 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-600/20  z-10"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${event.image || "/api/placeholder/400/250"})`
                                        }}
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

                                            <div className="flex items-center text-gray-400">
                                                <Users size={16} className="mr-2" />
                                                <span>{event.teamSize}</span>
                                            </div>

                                            <div className="flex items-center text-green-400">
                                                <Award size={16} className="mr-2" />
                                                <span>{event.prize}</span>
                                            </div>
                                        </div>

                                        <a
                                            href={event.registrationLink}
                                            className="block w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-md font-mechanism font-medium transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                                            Register Now</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No Events Found Message */}
                        {filteredEvents.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-xl text-gray-400">No events found in this category.</p>
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">View All Events</button>
                            </div>
                        )}

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

export default Events;