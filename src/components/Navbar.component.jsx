import React, { useState, useContext } from 'react';
import Logo from "../assets/images/neweq.png";
// import { ModeContext } from '../../src/Mode.context.jsx';

const Navbar = () => {
    // const { darkMode, toggleMode } = useContext(ModeContext);
    const darkMode = true;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="fixed sm:fixed top-3 left-1/2 transform -translate-x-1/2 max-w-screen-md w-full z-40">
            <div className="mx-auto max-w-screen-md w-full md:w-[780px] p-1.5 bg-violet-400 bg-opacity-30 dark:bg-slate-900/90 rounded-sm border-x border-gray-200 dark:border-slate-800">
                <div className="h-12 flex justify-between items-center rounded-lg gap-x-2 bg-white bg-opacity-80 dark:bg-slate-700/60 backdrop-blur px-4 sm:px-3 shadow border border-indigo-300 dark:border-slate-600 border-opacity-60">
                    {/* Site logo */}
                    <div className="flex-1">
                        <a href="/">
                            <img src={Logo} width="40" height="40" alt="Equilibrio - Tech Fest Logo" />
                        </a>
                    </div>

                    {/* Navigation links - Desktop */}
                    <nav className="hidden md:flex justify-center">
                        <ul className="flex items-center font-medium gap-x-3 text-sm leading-[1.5715]">
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-slate-300 rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:bg-none dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/events">EVENTS</a>
                            </li>
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-slate-300 rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:bg-none dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/teams">TEAMS</a>
                            </li>
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-slate-300 rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:bg-none dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/#sponsors">SPONSORS</a>
                            </li>
                            <li>
                                <a className="whitespace-nowrap transition-colors ease-in-out duration text-black dark:text-slate-300 rounded-lg py-1.5 px-3 hover:bg-gradient-3 dark:bg-none dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/#faq">FAQs</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        )}
                    </button>
                    <div className="hidden md:flex flex-1 justify-end"></div>
                </div>

                {/* Mobile menu dropdown with smooth animation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white dark:bg-slate-800 shadow-lg mt-1 rounded-lg border border-indigo-300 dark:border-slate-600 border-opacity-60">
                        <ul className="py-2 px-4 space-y-2">
                            <li>
                                <a className="block py-2 px-3 text-black dark:text-slate-300 rounded-lg hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/events">EVENTS</a>
                            </li>
                            <li>
                                <a className="block py-2 px-3 text-black dark:text-slate-300 rounded-lg hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/teams">TEAMS</a>
                            </li>
                            <li>
                                <a className="block py-2 px-3 text-black dark:text-slate-300 rounded-lg hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/#sponsors">SPONSORS</a>
                            </li>
                            <li>
                                <a className="block py-2 px-3 text-black dark:text-slate-300 rounded-lg hover:bg-gradient-3 dark:hover:bg-slate-900 dark:hover:bg-opacity-20 font-mechanism" href="/#faq">FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;