import React, { useState } from 'react';
import HeroBg from '../components/HeroBg.component';

const PrivacyPolicy = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section className="relative w-full overflow-hidden">
            {/* Three.js background canvas (only if WebGL is supported) */}
            <section className="absolute inset-0 z-0 h-screen w-full"><HeroBg loadStatus={setIsLoaded} /></section>

            {/* Content container - Stay above Three.js canvas */}
            <div className={`relative z-30 w-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                    {/* Main content */}
                    <main className="max-w-7xl mx-auto pt-16 sm:pt-20 lg:pt-24">

                        {/* Privacy Policy Section */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-24 sm:h-16 bg-slate-900 rounded-4xl blur-3xl -z-10"></div>

                            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl mb-4 font-robotics font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-md">
                                PRIVACY POLICY
                            </h2>

                            <div className="w-32 h-1 bg-purple-500 mx-auto mb-16 rounded-full"></div>

                            {/* Policy Content */}
                            <div className="bg-gray-800/70 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 space-y-8 text-justify break-after-auto hyphens-auto">
                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Introduction</h3>
                                    <p className="text-gray-300 mb-4 font-robotics">
                                        Welcome to Equilibrio, the annual tech fest of [Your College Name]. This Privacy Policy outlines how we collect, use, process, and protect your personal information when you visit our website, register for events, or participate in our tech fest activities.
                                    </p>
                                    <p className="text-gray-300 font-robotics">
                                        By accessing our website or registering for Equilibrio, you consent to the practices described in this Privacy Policy.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Information We Collect</h3>
                                    <p className="text-gray-300 mb-4 font-robotics">We may collect the following information:</p>
                                    <ul className="list-disc pl-6 text-gray-300 space-y-2 font-robotics">
                                        <li>Personal information (name, email address, phone number, college/university name)</li>
                                        <li>Registration details for specific events</li>
                                        <li>Payment information when applicable</li>
                                        <li>Technical information such as IP address, browser type, and device information</li>
                                        <li>Photographs and videos taken during the event for promotional purposes</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">How We Use Your Information</h3>
                                    <p className="text-gray-300 mb-4 font-robotics">We use your information for the following purposes:</p>
                                    <ul className="list-disc pl-6 text-gray-300 space-y-2 font-robotics">
                                        <li>Process event registrations and manage your participation</li>
                                        <li>Communicate important updates regarding the fest and specific events</li>
                                        <li>Issue certificates of participation and achievement</li>
                                        <li>Improve our website and services</li>
                                        <li>Share promotional content about future editions of Equilibrio</li>
                                        <li>Comply with legal obligations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Data Security</h3>
                                    <p className="text-gray-300 font-robotics">
                                        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Third-Party Services</h3>
                                    <p className="text-gray-300 font-robotics">
                                        We may use third-party services such as payment gateways, analytics tools, and communication platforms. These services have their own privacy policies, and we recommend reviewing them. We only share necessary information with these services to facilitate your participation in Equilibrio.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Cookies and Similar Technologies</h3>
                                    <p className="text-gray-300 font-robotics">
                                        Our website uses cookies and similar technologies to enhance your browsing experience. You can adjust your browser settings to refuse cookies, but this may affect your ability to use certain features of our website.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Your Rights</h3>
                                    <p className="text-gray-300 mb-4 font-robotics">You have the right to:</p>
                                    <ul className="list-disc pl-6 text-gray-300 space-y-2 font-robotics">
                                        <li>Access the personal information we hold about you</li>
                                        <li>Request correction of inaccurate information</li>
                                        <li>Request deletion of your information (subject to legal requirements)</li>
                                        <li>Opt-out of marketing communications</li>
                                    </ul>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Changes to This Policy</h3>
                                    <p className="text-gray-300 font-robotics">
                                        We may update this Privacy Policy periodically. The latest version will be posted on our website with the effective date. We encourage you to review this policy whenever you visit our website.
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-2xl font-bold mb-4 text-purple-400 font-robotics">Contact Us</h3>
                                    <p className="text-gray-300 font-robotics">
                                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@equilibrio.edu" className="text-purple-400 hover:underline">privacy@equilibrio.edu</a>.
                                    </p>
                                </section>

                                <div className="border-t border-purple-500/30 pt-6">
                                    <p className="text-gray-400 text-sm font-mechanism text-center">
                                        Last Updated: March 2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Tech-inspired decorative elements */}
                        <div className="absolute top-20 left-10 w-48 h-48 bg-purple-700/25 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-800/15 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-700/20 rounded-full blur-3xl"></div>

                        {/* Circuit-inspired decorative lines */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
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

export default PrivacyPolicy;