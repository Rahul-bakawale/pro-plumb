import React, { useState, useEffect, useRef } from 'react';

// Main App component that uses the ImageSlider

// ImageSlider component implementation
const ImageSlider = ({ images, interval = 3000 }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<any>(null);

  // Function to reset the timeout for auto-sliding
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Effect for auto-sliding
  useEffect(() => {
    resetTimeout(); // Clear any existing timeout
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Cleanup function to clear the timeout when the component unmounts
    return () => resetTimeout();
  }, [currentIndex, images.length, interval]); // Re-run when currentIndex or images change

  // Function to go to the previous image
  const goToPrevious = () => {
    resetTimeout(); // Reset timeout on manual navigation
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const goToNext = () => {
    resetTimeout(); // Reset timeout on manual navigation
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    // Added 'group' class to the parent container for hover effects
    <div className="relative w-full overflow-hidden shadow-2xl rounded-lg group">
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image: any, index: number) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-120 md:h-[400px] object-cover rounded-lg" // Adjusted for responsive height
              onError={(e: any) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = `https://placehold.co/1920x1080/CCCCCC/000000?text=Image+Not+Found`; // Fallback image
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        // Always visible on mobile (default), hidden on md+ screens until hovered
        className="absolute top-0 button-gallary left-0 h-full w-[50px] flex items-center justify-center bg-transparent text-white text-2xl
                   opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        // Always visible on mobile (default), hidden on md+ screens until hovered
        className="absolute top-0 right-0 h-full w-[50px] flex items-center justify-center bg-transparent text-white text-2xl
                   opacity-100 button-gallary md:opacity-10 md:group-hover:opacity-100 transition-opacity duration-300
                   hover:bg-black hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot indicators (optional, but good for navigation) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_: any, idx:number) => (
          <button
            key={idx}
            onClick={() => {
              resetTimeout(); // Reset timeout on manual navigation
              setCurrentIndex(idx);
            }}
            className={`h-3 w-3 rounded-full ${
              currentIndex === idx ? 'bg-white' : 'bg-gray-400'
            } transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;
