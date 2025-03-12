import React, { useState, useEffect, useRef } from 'react';

import Pi1 from "@/assets/images/past/404error.png";
import Pi2 from "@/assets/images/past/404error.png";
import Pi3 from "@/assets/images/past/404error.png";
import Pi4 from "@/assets/images/past/404error.png";
import Pi5 from "@/assets/images/past/404error.png";
import Pi6 from "@/assets/images/past/404error.png";
import Pi7 from "@/assets/images/past/404error.png";
import Pi8 from "@/assets/images/past/404error.png";
import Pi9 from "@/assets/images/past/404error.png";
import Pi10 from "@/assets/images/past/404error.png";
import Pi11 from "@/assets/images/past/404error.png";
import Pi12 from "@/assets/images/past/404error.png";

const HorizontalMovieReelSlider = ({ direction = 'leftToRight', slideInterval = 2000 }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  // Image width with borders
  const FRAME_WIDTH = 200;

  // Sample images
  const images = [
    { id: 1, url: Pi1, alt: "Movie frame 1" },
    { id: 2, url: Pi2, alt: "Movie frame 2" },
    { id: 3, url: Pi3, alt: "Movie frame 3" },
    { id: 4, url: Pi4, alt: "Movie frame 4" },
    { id: 5, url: Pi5, alt: "Movie frame 5" },
    { id: 6, url: Pi6, alt: "Movie frame 6" },
    { id: 7, url: Pi7, alt: "Movie frame 7" },
    { id: 8, url: Pi8, alt: "Movie frame 8" },
    { id: 9, url: Pi9, alt: "Movie frame 9" },
    { id: 10, url: Pi10, alt: "Movie frame 10" },
    { id: 11, url: Pi11, alt: "Movie frame 11" },
    { id: 12, url: Pi12, alt: "Movie frame 12" },
  ];

  // Initialize with the middle set for both directions
  useEffect(() => {
    setActiveIndex(direction === 'leftToRight' ? images.length : images.length * 2);
  }, [direction, images.length]);

  // For a truly infinite scroll, we need to clone the entire set of images
  // and add them at the beginning and end - using three complete sets
  const extendedImages = [...images, ...images, ...images]; // Three sets for both directions

  // Move one frame at a time
  useEffect(() => {
    // Start from the middle set for smoother initial loading
    if (activeIndex === 0) {
      setActiveIndex(direction === 'leftToRight' ? images.length : images.length * 2);
      return;
    }

    const interval = setInterval(() => {
      if (!isResetting) {
        setActiveIndex(prevIndex => {
          // Move in the appropriate direction
          const nextIndex = direction === 'leftToRight'
            ? prevIndex + 1
            : prevIndex - 1;

          // Check if we need to reset position
          if (direction === 'leftToRight' && nextIndex >= images.length * 2) {
            // We've scrolled through the second set, need to reset
            return resetPosition(nextIndex, direction);
          } else if (direction === 'rightToLeft' && nextIndex <= images.length) {
            // We've scrolled up through the second set, need to reset
            return resetPosition(nextIndex, direction);
          }

          return nextIndex;
        });
      }
    }, slideInterval);

    return () => clearInterval(interval);
  }, [direction, images.length, slideInterval, isResetting, activeIndex]);

  // This function handles the seamless reset for both directions
  const resetPosition = (currentIndex, currentDirection) => {
    setIsResetting(true);

    setTimeout(() => {
      // Turn off transitions temporarily
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
      }

      let newIndex;
      if (currentDirection === 'leftToRight') {
        // Jump back to the equivalent position in the first set
        newIndex = currentIndex - images.length;
      } else {
        // Jump forward to the equivalent position in the third set
        newIndex = currentIndex + images.length;
      }

      setActiveIndex(newIndex);

      // Force a reflow to ensure the transition is disabled before we change position
      containerRef.current && containerRef.current.offsetHeight;

      // Re-enable transitions after a short delay
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = 'transform 500ms ease-in-out';
          setIsResetting(false);
        }
      }, 50);
    }, 500); // Match this to your transition duration

    return currentIndex;
  };

  return (
    <div className="flex items-center justify-center h-32 w-screen">
      <div className="relative h-full w-full flex items-center">
        <div className="relative h-full w-full bg-gray-900 overflow-hidden">
          {/* Sprocket holes top */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gray-800 flex flex-row z-10">
            {[...Array(30)].map((_, i) => (
              <div key={`top-sprocket-${i}`} className="h-2 w-8 bg-black border border-gray-700 rounded-full my-auto mx-3"></div>))}
          </div>

          {/* Sprocket holes bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800 flex flex-row z-10">
            {[...Array(30)].map((_, i) => (
              <div key={`bottom-sprocket-${i}`} className="h-2 w-8 bg-black border border-gray-700 rounded-full my-auto mx-3"></div>))}
          </div>

          {/* Film content - now with proper horizontal scrolling */}
          <div className="absolute left-0 right-0 top-4 bottom-4 overflow-hidden">
            <div
              ref={containerRef}
              className="flex flex-row transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${activeIndex * FRAME_WIDTH}px)` }}>
              {/* Extended images for infinite scrolling */}
              {extendedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="relative h-full flex-shrink-0 border-l-6 border-r-6 border-gray-800"
                  style={{ width: `${FRAME_WIDTH}px` }} // Accounting for the borders
                >
                  {/* Image - Improved styling */}
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover" 
                    style={{ display: 'block' }} // Ensure image is displayed as a block
                  />
                  
                  {/* Overlay with reduced opacity */}
                  <div className="absolute inset-0 bg-slate-800 opacity-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalMovieReelSlider;