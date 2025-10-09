'use client'
import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- Testimonials Data (Keep this data as is) ---
const testimonials = [
  {
    text: "Nathan was incredible! Our hot water system failed late at night, and he arrived within the hour. Professional, friendly, and had it fixed before morning. Highly recommend Beaconsfield Plumbing for any emergency work.",
    name: "Sarah M.",
    title: "Berwick, VIC",
    avatar: "/user.jpg",
    initials: 'SM'
  },
  {
    text: "We used Beaconsfield Plumbing during our home renovation. Nathan planned everything perfectly and worked around our builder’s schedule. The new plumbing looks neat, works flawlessly, and came in exactly on budget.",
    name: "Daniel & Emma R.",
    title: "Beaconsfield, VIC",
    avatar: "/user.jpg",
    initials: 'DR'
  },
  {
    text: "Fast response, fair pricing, and clean workmanship. Nathan explained every step before starting, and there were no surprises in the bill. Great service from a true local business.",
    name: "James P.",
    title: "Pakenham, VIC",
    avatar: "/user.jpg",
    initials: 'JP'
  },
  {
    text: "We had recurring drainage issues for years. Other plumbers just did quick fixes, but Beaconsfield Plumbing found the root cause and installed a proper stormwater solution. Haven’t had a problem since!",
    name: "Olivia C.",
    title: "Narre Warren, VIC",
    avatar: "/user.jpg",
    initials: 'OC'
  },
  {
    text: "Highly professional and knowledgeable. Nathan serviced our ducted heating system and even gave maintenance tips to improve performance. It’s rare to find someone so genuine and thorough.",
    name: "Michael H.",
    title: "Clyde North, VIC",
    avatar: "/user.jpg",
    initials: 'MH'
  },
  {
    text: "From the first call to completion, everything was handled perfectly. Nathan arrived on time, respected our property, and did a great job fixing our leaking pipes. Exceptional service and communication.",
    name: "Jessica T.",
    title: "Casey, VIC",
    avatar: "/user.jpg",
    initials: 'JT'
  },
  {
    text: "We called for an urgent hot water repair on a public holiday, and Nathan showed up the same day! Honest advice, quality parts, and great value for money. Definitely our go-to plumber from now on.",
    name: "Peter L.",
    title: "Officer, VIC",
    avatar: "/user.jpg",
    initials: 'PL'
  },
  {
    text: "We’ve used Beaconsfield Plumbing several times for both home and business. Nathan is dependable, skilled, and always keeps the workspace tidy. Couldn’t ask for a better local plumber.",
    name: "Amanda G.",
    title: "Dandenong, VIC",
    avatar: "/user.jpg",
    initials: 'AG'
  },
  {
    text: "Very impressed by the professionalism and quality of work. Nathan upgraded our bathroom plumbing and installed new fixtures perfectly. The attention to detail is second to none.",
    name: "Raj S.",
    title: "Hallam, VIC",
    avatar: "/user.jpg",
    initials: 'RS'
  },
  {
    text: "Great experience from start to finish. Transparent pricing, prompt service, and fantastic results. Beaconsfield Plumbing truly cares about customer satisfaction — highly recommended!",
    name: "Lisa W.",
    title: "Cranbourne, VIC",
    avatar: "/user.jpg",
    initials: 'LW'
  },
];
// --- End Testimonials Data ---

// Utility function to chunk the array into smaller arrays
const chunkArray = (arr: any[], size: number) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        // Only include non-empty chunks
        if (arr.slice(i, i + size).length > 0) {
            chunked.push(arr.slice(i, i + size));
        }
    }
    return chunked;
};

// Function to determine the number of items to show per view based on screen size
const getItemsPerView = () => {
    // Show 1 testimonial per slide on smaller screens (mobile/tablet up to 'md' breakpoint)
    if (window.innerWidth < 768) { // Tailwind's 'md' is 768px
        return 1;
    }
    // Show 3 testimonials per slide on larger screens
    return 3;
}


const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // Dynamic state for items per view
    const [itemsPerView, setItemsPerView] = useState(3);
    
    // Testimonial Item Height (needed for the fixed height on desktop/3-item view)
    // We remove the fixed height for mobile and rely on content
    const DESKTOP_ITEM_HEIGHT = 250; 
    
    // Chunk the testimonials based on the dynamic itemsPerView
    const testimonialChunks = chunkArray(testimonials, itemsPerView);
    const totalSlides = testimonialChunks.length;

    const goToSlide = (index: number) => {
        // Ensure index is within bounds before setting state
        if (index >= 0 && index < totalSlides) {
             setActiveIndex(index);
        }
    };
    
    // --- Responsive Items Per View Logic ---
    useEffect(() => {
        // Set initial state on mount (client side)
        setItemsPerView(getItemsPerView());
        
        // Handler to update the state on window resize
        const handleResize = () => {
            const newItemsPerView = getItemsPerView();
            // Only update if the value has actually changed to prevent unnecessary re-renders
            if (newItemsPerView !== itemsPerView) {
                setItemsPerView(newItemsPerView);
                // Reset to first slide when the view changes (e.g., mobile to desktop)
                setActiveIndex(0); 
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [itemsPerView]); // Depend on itemsPerView to correctly compare in handleResize

    // --- AUTOSLIDE IMPLEMENTATION ---
    useEffect(() => {
        // If we have no slides, don't set up the interval
        if (totalSlides === 0) return;
        
        const interval = setInterval(() => {
            setActiveIndex(current => {
                // Loop back to the first slide (index 0) if the end is reached
                const nextIndex = current < totalSlides - 1 ? current + 1 : 0;
                return nextIndex;
            });
        }, 5000); // Auto-slide every 5 seconds (5000ms)

        return () => clearInterval(interval);
    }, [totalSlides]);
    // --- END AUTOSLIDE IMPLEMENTATION ---

    // Calculate the total width of the track (e.g., 400% for 4 slides)
    const totalTrackWidth = `${totalSlides * 100}%`; 
    
    // Calculate the horizontal translation percentage
    const translateAmount = activeIndex * (100 / totalSlides);
    
    // Calculate the container height dynamically:
    // On desktop (3 items), use the fixed height
    // On mobile (1 item), use 'auto' to fit the content
    const containerHeight = itemsPerView > 1 ? `${DESKTOP_ITEM_HEIGHT * itemsPerView}px` : 'auto';

    return (
        <>
            
            {/* Carousel Container - Height is fixed for 3 items, or auto for 1 item */}
            <div 
                className={`relative overflow-hidden mx-auto max-w-lg md:max-w-2xl px-4`}
                style={{ height: containerHeight }} // Use the dynamic height
            >
                
                {/* Carousel Track - Moves Horizontally */}
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                        width: totalTrackWidth, 
                        transform: `translateX(-${translateAmount}%)` // Horizontal movement
                    }}
                >
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div
                            key={chunkIndex}
                            className={`flex-shrink-0`}
                            // Each chunk takes up a fraction of the total track width
                            style={{ width: `${100 / totalSlides}%` }}
                        >
                            {/* Inner stack: Testimonials displayed vertically within the chunk */}
                            <div className="flex flex-col h-full w-full">
                                {chunk.map((testimonial, itemIndex) => (
                                    <div 
                                        key={itemIndex}
                                        className={`w-full p-4`} 
                                        // On desktop, use fixed height; on mobile, let it be auto
                                        style={itemsPerView > 1 ? { height: `${DESKTOP_ITEM_HEIGHT}px` } : {}}
                                    >
                                        <div
                                            className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                                        >
                                          
                                            <p className="text-gray-800 font-poppins text-base mb-4 italic">
                                                "{testimonial.text}"
                                            </p>
                                            <div className="flex items-center pt-4 border-t border-gray-100">
                                                {/* Avatar with fallback */}
                                                {/* Note: Updated placeholder text to use initials directly */}
                                                <div 
                                                    className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-blue-500 bg-blue-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                                                    aria-hidden="true"
                                                >
                                                    {testimonial.initials}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                                    <p className="text-sm text-blue-600 font-medium">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Dots */}
            {/* Navigation Dots for the horizontal slides (chunks) */}
            <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'bg-blue-700 w-6' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </>
    );
};

export default TestimonialSlider;