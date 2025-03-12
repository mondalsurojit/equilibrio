import React, { useState, useEffect } from "react";

const JumpToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress for the circular border
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Convert progress to a strokeDashoffset value for the circular progress indicator
  const circumference = 36 * Math.PI; // Approximate circumference of the circle
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-black shadow-md"
        >
          {/* Background circle */}
          <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 36 36">
            <circle
              className="text-blue-200"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              className="text-blue-500"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              transform="rotate(-90 18 18)" // Rotate circle to start from the top
            />
          </svg>

         {/* Up arrow icon */}
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#3b82f6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default JumpToTop;
