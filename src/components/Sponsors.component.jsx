import { Play } from "lucide-react";
// import SponsorsSection from "./temp.component";
import Codechef from "../assets/images/sponsors/codechef.png"
import Presear from "../assets/images/sponsors/presear.jpeg"
import Gfg from "../assets/images/sponsors/gfg.png"
import DainikBhaskar from "../assets/images/sponsors/dainikbhaskar.png"

export default function Sponsors() {
    // Sample sponsor data - past sponsors with image links
    const pastSponsors = [
        { name: "CodeChef", tier: "Gold", imageUrl: Codechef },
        { name: "Geeks for Geeks", tier: "Silver", imageUrl: Gfg },
        { name: "Presear Softwares", tier: "Bronze", imageUrl: Presear },
        { name: "Dainik Bhaskar", tier: "Bronze", imageUrl: DainikBhaskar },
    ];

    // Sample sponsor data - current sponsors with image links
    const currentSponsors = [
        { name: "CodeChef", tier: "Gold", imageUrl: Codechef },
        { name: "Geeks for Geeks", tier: "Silver", imageUrl: Gfg },
        { name: "Presear Softwares", tier: "Bronze", imageUrl: Presear },
    ];

    // Function to generate sponsor tier styling with improved UI
    const getTierStyle = (tier) => {
        switch (tier) {
            case "Gold":
                return "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-400 p-5 md:p-7 border-2 border-yellow-500";
            case "Silver":
                return "bg-gradient-to-r from-gray-400 via-gray-200 to-gray-300 p-4 md:p-6 border-2 border-gray-400";
            case "Bronze":
                return "bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600 p-3 md:p-5 border-2 border-amber-800";
            default:
                return "bg-gray-500 p-3 md:p-5";
        }
    };

    // Function to get creative sponsor titles
    const getSponsorTitle = (tier) => {
        switch (tier) {
            case "Gold":
                return "Title Sponsor";
            case "Silver":
                return "Associate Partner";
            case "Bronze":
                return "Technology Ally";
            default:
                return "Supporter";
        }
    };

    // Sort current sponsors by tier
    const goldSponsor = currentSponsors.find(sponsor => sponsor.tier === "Gold");
    const silverSponsor = currentSponsors.find(sponsor => sponsor.tier === "Silver");
    const bronzeSponsor = currentSponsors.find(sponsor => sponsor.tier === "Bronze");

    return (
        <div className="relative grow px-4 sm:px-6 py-12 md:py-20 max-w-6xl mx-auto" id="sponsors">
            <section className="mx-auto max-w-screen-md pb-16 text-center">
                <h1 className="text-2xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-robotics bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Sponsors & Partners</h1>
                <p className="text-lg leading-normal tracking-[-0.017em] text-gray-500 font-mechanism">
                    A big shoutout to our Sponsors and Partners for making Equilibrio possible through their continued support!
                </p>
            </section>
            {/* <SponsorsSection /> */}

            {/* Current Sponsors - Simple Olympic-inspired Layout */}
            <div className="mb-20">
                <h2 className="text-xl md:text-3xl font-bold mb-8 text-center font-robotics bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                    Current Sponsors
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2"></div>
                </h2>

                {/* Olympic-inspired Layout - Equal Card Sizes */}
                <div className="flex flex-col md:flex-row justify-center items-end md:items-end space-y-8 md:space-y-0 md:px-4">

                    {/* Silver Sponsor */}
                    {silverSponsor && (
                        <div className="md:order-1 w-full md:w-1/3 px-4 flex flex-col justify-center">
                            <div className={`rounded-xl shadow-xl ${getTierStyle(silverSponsor.tier)} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl w-full overflow-hidden h-64 relative metallic-silver`}>
                                <div className="flex justify-center items-center h-40 bg-gradient-to-br from-slate-300 to-slate-50 rounded-t-lg border">
                                    <img
                                        src={silverSponsor.imageUrl}
                                        alt={`${silverSponsor.name} logo`}
                                        className="max-h-24 max-w-full p-2"
                                    />
                                </div>
                                <div className="mt-3 text-center pb-3">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white font-mechanism tracking-wider">
                                        {getSponsorTitle(silverSponsor.tier)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-3 text-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-robotics tracking-wider">{silverSponsor.name}</h3>
                        </div>
                    )}

                    {/* Gold Sponsor (Subtle Elevation, Same Size) */}
                    {goldSponsor && (
                        <div className="md:order-2 w-full md:w-1/3 px-4 flex flex-col justify-center">
                            <div className={`rounded-xl shadow-xl ${getTierStyle(goldSponsor.tier)} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl w-full overflow-hidden h-64 transform md:-translate-y-3 relative metallic-gold`}>
                                <div className="flex justify-center items-center h-40  bg-gradient-to-br from-slate-300 to-slate-50 rounded-t-lg border">
                                    <img
                                        src={goldSponsor.imageUrl}
                                        alt={`${goldSponsor.name} logo`}
                                        className="max-h-24 max-w-full p-2"
                                    />
                                </div>
                                <div className="mt-3 text-center pb-3">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white font-mechanism tracking-wider">
                                        {getSponsorTitle(goldSponsor.tier)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-3 text-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-robotics tracking-wider">{goldSponsor.name}</h3>
                        </div>
                    )}

                    {/* Bronze Sponsor */}
                    {bronzeSponsor && (
                        <div className="md:order-3 w-full md:w-1/3 px-4 flex flex-col justify-center">
                            <div className={`rounded-xl shadow-xl ${getTierStyle(bronzeSponsor.tier)} transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl w-full overflow-hidden h-64 relative metallic-bronze`}>
                                <div className="flex justify-center items-center h-40 bg-gradient-to-br from-slate-300 to-slate-50 rounded-t-lg border">
                                    <img
                                        src={bronzeSponsor.imageUrl}
                                        alt={`${bronzeSponsor.name} logo`}
                                        className="max-h-24 max-w-full p-2"
                                    />
                                </div>
                                <div className="mt-3 text-center pb-3">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-black text-white font-mechanism tracking-wider">
                                        {getSponsorTitle(bronzeSponsor.tier)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="mt-3 text-center text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-robotics tracking-wider">{bronzeSponsor.name}</h3>
                        </div>
                    )}
                </div>
            </div>


            {/* Past Sponsors */}
            <div>
                <h2 className="text-xl md:text-3xl font-bold mb-8 text-center font-robotics bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    Past Sponsors
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {pastSponsors.map((sponsor, index) => (
                        <div key={index} className="group flex flex-col items-center group transition-all duration-300">
                            <div className="bg-gradient-to-br from-slate-500 to-slate-100 backdrop-blur-sm rounded-lg shadow-md p-4 w-full transition-all duration-300 ease-in-out hover:shadow-lg border border-slate-100 grayscale-50 group-hover:grayscale-0">
                                <div className="flex justify-center items-center h-24">
                                    <img
                                        src={sponsor.imageUrl}
                                        alt={`${sponsor.name} logo`}
                                        className="max-h-16 max-w-full group-hover:scale-105"
                                    />
                                </div>
                            </div>
                            <h3 className="mt-2 text-md md:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-robotics tracking-wider whitespace-nowrap">{sponsor.name}</h3>
                            <p className="text-xs text-gray-500 font-mechanism">{getSponsorTitle(sponsor.tier)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Become a Sponsor CTA - Original UI */}
            <div className="mt-20 text-center">
                <div className="relative inline-block">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-tl-4xl rounded-br-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 blur-sm animate-pulse"></div>

                    {/* Content container - dark mode */}
                    <div className="relative p-8 rounded-tl-4xl rounded-br-4xl bg-gray-900 border border-blue-500 border-opacity-30">
                        <h2 className="text-xl md:text-2xl font-bold mb-4 text-white font-robotics">Interested in becoming a sponsor?</h2>
                        <p className="text-gray-300 mb-6 font-mechanism">Join our growing list of partners and help make Equilibrio an even better experience</p>
                        <button className="flex items-center mx-auto bg-transparent border border-blue-500 text-blue-400 px-6 py-3 rounded-full font-medium transition-all hover:bg-blue-500 hover:bg-opacity-10 font-mechanism">
                            <Play size={16} className="mr-2" /> Contact Office Team
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}