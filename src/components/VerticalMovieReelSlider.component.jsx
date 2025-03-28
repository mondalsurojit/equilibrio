import React, { useState, useEffect, useRef } from 'react';

const VerticalMovieReelSlider = ({ direction = 'topToBottom', slideInterval = 2000 }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  // Image height with borders
  const FRAME_HEIGHT = 142; // 160px image height + 2px for borders

  // Sample images - DEFINING THIS BEFORE USING IT
  const images = [
    { id: 1, url: "/images/past/1.jpg", alt: "Tech-fest'23 img-1" },
    { id: 2, url: "/images/past/2.jpg", alt: "Tech-fest'23 img-2" },
    { id: 3, url: "/images/past/3.jpg", alt: "Tech-fest'23 img-3" },
    { id: 4, url: "/images/past/4.jpg", alt: "Tech-fest'23 img-4" },
    { id: 5, url: "/images/past/5.jpg", alt: "Tech-fest'23 img-5" },
    { id: 6, url: "/images/past/6.jpg", alt: "Tech-fest'23 img-6" },
    { id: 7, url: "/images/past/7.jpg", alt: "Tech-fest'23 img-7" },
    { id: 8, url: "/images/past/8.jpg", alt: "Tech-fest'23 img-8" },
    { id: 9, url: "/images/past/9.jpg", alt: "Tech-fest'23 img-9" },
    { id: 10, url: "/images/past/10.jpg", alt: "Tech-fest'23 img-10" },
    { id: 11, url: "/images/past/11.jpg", alt: "Tech-fest'23 img-11" },
    { id: 12, url: "/images/past/12.jpg", alt: "Tech-fest'23 img-12" },
  ];

  // Initialize with the middle set for both directions - NOW AFTER IMAGES DEFINITION
  useEffect(() => {
    setActiveIndex(direction === 'topToBottom' ? images.length : images.length * 2);
  }, [direction, images.length]);

  // For a truly infinite scroll, we need to clone the entire set of images
  // and add them at the beginning and end - using three complete sets
  const extendedImages = [...images, ...images, ...images]; // Three sets for both directions

  // Move one frame at a time
  useEffect(() => {
    // Start from the middle set for smoother initial loading
    if (activeIndex === 0) {
      setActiveIndex(direction === 'topToBottom' ? images.length : images.length * 2);
      return;
    }

    const interval = setInterval(() => {
      if (!isResetting) {
        setActiveIndex(prevIndex => {
          // Move in the appropriate direction
          const nextIndex = direction === 'topToBottom'
            ? prevIndex + 1
            : prevIndex - 1;

          // Check if we need to reset position
          if (direction === 'topToBottom' && nextIndex >= images.length * 2) {
            // We've scrolled through the second set, need to reset
            return resetPosition(nextIndex, direction);
          } else if (direction === 'bottomToTop' && nextIndex <= images.length) {
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
      if (currentDirection === 'topToBottom') {
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
    <div className="flex flex-col items-center justify-center w-56">
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full bg-gray-900 overflow-hidden h-screen">
          {/* Sprocket holes left */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gray-800 flex flex-col z-10">
            {[...Array(30)].map((_, i) => (
              <div key={`left-sprocket-${i}`} className="w-2 h-8 bg-black border border-gray-700 rounded-full mx-auto my-3"></div>))}
          </div>

          {/* Sprocket holes right */}
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-800 flex flex-col z-10">
            {[...Array(30)].map((_, i) => (
              <div key={`right-sprocket-${i}`} className="w-2 h-8 bg-black border border-gray-700 rounded-full mx-auto my-3"></div>))}
          </div>

          {/* Film content - now with proper infinite scrolling in both directions */}
          <div className="absolute left-4 right-4 top-0 bottom-0 overflow-hidden">
            <div
              ref={containerRef}
              className="flex flex-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${activeIndex * FRAME_HEIGHT}px)`, }}>
              {/* Extended images for infinite scrolling */}
              {extendedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="relative w-full flex justify-center items-center border-t-6 border-b-6 border-gray-800 p-0"
                  style={{ height: `${FRAME_HEIGHT}px` }}
                >
                  {/* Image */}
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-800 opacity-25"></div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalMovieReelSlider;