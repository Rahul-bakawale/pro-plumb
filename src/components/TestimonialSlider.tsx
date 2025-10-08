'use client'
import React, { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- Testimonials Data ---
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
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
};


const TestimonialSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Configuration for the vertical view within the horizontal slide
    const ITEM_HEIGHT = 250; 
    const ITEMS_PER_VIEW = 3; 
    const WINDOW_HEIGHT = ITEM_HEIGHT * ITEMS_PER_VIEW; 
    
    // Chunk the testimonials into groups of 3
    const testimonialChunks = chunkArray(testimonials, ITEMS_PER_VIEW);
    const totalSlides = testimonialChunks.length;

    const goToSlide = (index: number) => {
        if (index >= 0 && index < totalSlides) {
             setActiveIndex(index);
        }
    };

    // --- AUTOSLIDE IMPLEMENTATION ---
    useEffect(() => {
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

    return (
        <>
            

            {/* Carousel Container - Fixed Height for 3 items stacked vertically */}
            <div 
                className={`relative overflow-hidden mx-auto max-w-lg md:max-w-2xl px-4`}
                style={{ height: `${WINDOW_HEIGHT}px` }}
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
                                        style={{ height: `${ITEM_HEIGHT}px` }} // Fixed height per item
                                    >
                                        <div
                                            className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                                        >
                                          
                                            <p className="text-gray-800 font-poppins text-base mb-4 italic">
                                                "{testimonial.text}"
                                            </p>
                                            <div className="flex items-center pt-4 border-t border-gray-100">
                                                {/* Avatar with fallback */}
                                                <img
                                                    src={`https://placehold.co/48x48/0056B3/FFFFFF?text=${testimonial.initials}`}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-blue-500"
                                                    onError={(e) => {
                                                        e.currentTarget.onerror = null;
                                                        const initials = testimonial.name.split(' ').map((n:string) => n[0]).join('');
                                                        e.currentTarget.src = `https://placehold.co/48x48/0056B3/FFFFFF?text=${initials}`; 
                                                    }}
                                                />
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

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mt-8">
                {/* Previous Slide Button (Goes Left) */}
                {/* <button
                    onClick={() => goToSlide(activeIndex > 0 ? activeIndex - 1 : totalSlides - 1)}
                    className="p-3 bg-white rounded-full shadow-xl text-blue-700 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous slide"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                 */}
                {/* Navigation Dots */}
                <div className="flex items-center space-x-2">
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

                {/* Next Slide Button (Goes Right) */}
                {/* <button
                    onClick={() => goToSlide(activeIndex < totalSlides - 1 ? activeIndex + 1 : 0)}
                    className="p-3 bg-white rounded-full shadow-xl text-blue-700 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next slide"
                >
                    <ArrowRight className="w-6 h-6" />
                </button> */}
            </div>

        </>
    );
};

export default TestimonialSlider;
