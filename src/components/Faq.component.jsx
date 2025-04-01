import React, { useState } from "react";
import faqData from "./faqData.json";

const FaqCard = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white bg-opacity-50 dark:bg-slate-800 dark:bg-opacity-60 backdrop-blur-sm rounded-lg py-1">
            <h2>
                <button
                    className="justify-between items-center font-medium text-left w-full flex px-4 py-2 cursor-pointer"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}>
                    <span className="text-black dark:text-white font-mechanism tracking-wider">{question}</span>
                    <span
                        className={`justify-center items-center rounded-full shrink-0 ml-2 flex h-5 w-5 bg-white dark:bg-gray-600 transform transition-all duration-300 ${expanded ? "rotate-180" : ""
                            }`}
                    >
                        <svg className="fill-gray-400" width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                            <path
                                opacity=".72"
                                d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z"
                                className="origin-center"
                            ></path>
                        </svg>
                    </span>
                </button>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out text-sm font-robotics leading-[1.5715] grid ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="px-4 pb-2 text-gray-500">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const Faq = () => {
    return (
        <main className="relative grow px-4 sm:px-6 py-12 md:py-20 max-w-6xl mx-auto" id="faqs">
            <section className="mx-auto max-w-screen-md pb-16 text-center">
                <h1 className="text-2xl leading-[1.2] tracking-[-0.017em] font-bold md:text-6xl md:leading-none md:tracking-[-0.017em] mb-4 font-robotics bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">FAQ</h1>
                <p className="text-lg leading-normal tracking-[-0.017em] text-gray-500 font-mechanism">
                    Everything You Wanted to Ask (But Were Too Lazy to Google)
                </p>
            </section>

            {/* Accordion */}
            <div className="flex flex-col gap-1 max-w-screen-md mx-auto">
                {faqData.map((item, index) => (
                    <FaqCard key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </main>
    );
};

export default Faq;
