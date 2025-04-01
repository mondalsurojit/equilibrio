import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import wormhole from '../assets/images/wormhole.png';
import Logo from "../assets/images/neweq.png";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Phone, Mail } from 'lucide-react';

const FooterBlock = ({ title, links, alignment = "text-center" }) => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the section based on the current URL hash
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className={alignment}>
            <h6 className="mb-3 text-xs leading-normal font-mechanism uppercase text-black dark:text-gray-400 underline">{title}</h6>
            <ul className="text-sm leading-6 font-robotics">
                {links.map((link, index) => (
                    <li className="mt-1.5" key={index}>
                        <Link to={link.href} className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-800 dark:hover:text-white">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    // Creating a custom gradient color for icons - purple to blue tint
    const iconColor = "text-purple-600";
    const iconHoverColor = "hover:text-indigo-400";

    const informationLinks = [
        { label: "About Us", href: "/#about" },
        { label: "Events", href: "/events#events" },
        { label: "Sponsors", href: "/#sponsors" },
        { label: "FAQs", href: "/#faqs" },
    ];

    const peekIntoLinks = [
        { label: "Desk of", href: "#desk" },
        { label: "Teams", href: "/teams#teams" },
        { label: "Events", href: "#events" },
        { label: "Gallery", href: "#gallery" },
    ];

    return (
        <footer className="relative mx-auto max-w-6xl w-full px-6 pt-20 md:pt-28 lg:pt-32 pb-4 h-auto">
            <img src={wormhole} alt="" className='absolute -top-20 md:-top-44 lg:-top-64 left-1/2 -translate-x-1/2 w-full sm:w-3/5 h-auto object-cover -z-0 m-auto pointer-events-none' />

            {/* Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">

                {/* 1st block - Contact (Left aligned) */}
                <div className="text-center md:text-left">
                    <h6 className="mb-3 text-xs leading-normal font-mechanism uppercase text-black dark:text-gray-400 underline">GET IN TOUCH WITH US</h6>
                    <div className="text-sm font-robotics text-gray-500">
                        <a href="tel:+918604063102" className="flex items-center justify-center md:justify-start mt-2 group">
                            <Phone className={`h-5 w-5 mr-2 ${iconColor} ${iconHoverColor}`} />
                            <p className="font-mono text-gray-500 group-hover:text-white">+91 86040 63102</p>
                        </a>
                        <a href="mailto:coordinator@gmail.com" className="flex items-center justify-center md:justify-start mt-2 group">
                            <Mail className={`h-5 w-5 mr-2 ${iconColor} ${iconHoverColor}`} />
                            <p className="tracking-wide text-gray-500 group-hover:text-white">coordinator@gmail.com</p>
                        </a>
                    </div>
                </div>

                <div className='flex justify-evenly md:justify-between'>
                    {/* Information (Center aligned) */}
                    <FooterBlock title="INFORMATION" links={informationLinks} />

                    {/* Peek Into (Center aligned) */}
                    <FooterBlock title="PEEK INTO" links={peekIntoLinks} />
                </div>
                {/* Social Follow (Right aligned) */}
                <div className="text-center md:text-right">
                    <h6 className="mb-3 text-xs leading-normal font-mechanism uppercase text-black dark:text-gray-400 underline">FOLLOW US ON:</h6>
                    <ul className="flex space-x-4 justify-center md:justify-end">
                        <li>
                            <a className="transition ease-in-out duration-150" href="https://www.facebook.com/equilibrio.fest/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook className={`h-5 w-5 ${iconColor} ${iconHoverColor} transition duration-300`} />
                            </a>
                        </li>
                        <li>
                            <a className="transition ease-in-out duration-150" href="https://www.instagram.com/equilibrio.ggv/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram className={`h-5 w-5 ${iconColor} ${iconHoverColor} transition duration-300`} />
                            </a>
                        </li>
                        <li>
                            <a className="transition ease-in-out duration-150" href="https://www.linkedin.com/company/equilibrio-ggv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className={`h-5 w-5 ${iconColor} ${iconHoverColor} transition duration-300`} />
                            </a>
                        </li>
                        <li>
                            <a className="transition ease-in-out duration-150" href="https://www.youtube.com/@EquilibrioTechfestGGVBilaspur/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <Youtube className={`h-5 w-5 ${iconColor} ${iconHoverColor} transition duration-300`} />
                            </a>
                        </li>
                        <li>
                            <a className="transition ease-in-out duration-150" href="https://x.com/equilibrioggv" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter className={`h-5 w-5 ${iconColor} ${iconHoverColor} transition duration-300`} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom area */}
            <div className="pb-8 flex flex-col gap-3 items-center justify-center">
                <div className="inline-flex items-center">
                    <a href="/privacy-policy" className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-800 dark:hover:text-white font-robotics text-xs cursor-pointer">Privacy Policy</a>
                    <span className="text-gray-500 px-2">▪</span>
                    <a href="/credits" className="text-gray-500 transition ease-in-out duration-150 hover:text-gray-800 dark:hover:text-white font-robotics text-xs cursor-pointer">Credits</a>
                </div>
                <div className="mb-2 flex items-center gap-3 -translate-y-2">
                    <p className="text-sm font-bold tracking-wider font-robotics text-gray-500">Copyright</p>
                    {/* Logo */}
                    <a className="flex items-center gap-3" href="index.html" aria-label="Equilibrio">
                        <img src={Logo} width="15" height="15" alt="Equilibrio - Tech Fest Logo" />
                        <h6 className="text-sm font-bold tracking-wider font-robotics text-gray-500">EQUILIBRIO'25</h6>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;