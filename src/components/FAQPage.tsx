'use client'
import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, X, Zap } from 'lucide-react'; // Added Zap for a professional touch
import MainLayout from "@/container/MainLayout";

// --- (Keep all existing categorizedFaqs and staticFaqs objects here, unchanged) ---
// Structure the FAQs by Category for a better user experience
const categorizedFaqs = {
    // ... (Keep existing categorizedFaqs data)
    '🔧 General Plumbing FAQs': [
        {
            question: "What areas of Melbourne do you service?",
            answer: "We proudly service All Eastern and South-Eastern Suburbs of Melbourne, including key local areas like Beaconsfield, Berwick, Pakenham, Narre Warren, and Casey.",
        },
        {
            question: "Do you work in the eastern and south-eastern suburbs?",
            answer: "Yes, absolutely. We specialize in providing reliable plumbing services across the entire eastern and south-eastern regions of Melbourne.",
        },
        {
            question: "Are you a licensed plumber?",
            answer: "Yes, we are fully licensed for all kinds of plumbing works, installation, and repairs.",
        },
        {
            question: "How many years of experience do you have?",
            answer: "We have been professionally into plumbing work for 20 years.",
        },
        {
            question: "Do you provide free quotes?",
            answer: "Yes, we do provide free quotes. Please connect with us for the best solution and competitive rates.",
        },
        {
            question: "What are your business hours?",
            answer: "Our operation hours are morning 6 AM to 5 PM on weekdays. But we are open for inquiries 24x7.",
        },
        {
            question: "Do you offer emergency plumbing services?",
            answer: "Yes, we offer urgent call-out and repair services. But it's not an emergency assistance service. Please call 000 for your safety-related emergencies.",
        },
        {
            question: "How quickly can you attend to a job?",
            answer: "We will respond to your inquiries within 4 hours during working hours and within 12 hours beyond working hours.",
        },
        {
            question: "Do you charge call-out fees?",
            answer: "Yes, but it's very affordable and sometimes free under special schemes. Please contact us to know about current schemes.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept Cards, Online Transfers, and Cash.",
        },
    ],
    '🚰 Renovations & Installations': [
        {
            question: "Can you help with bathroom renovations?",
            answer: "Yes, we provide comprehensive plumbing services for all aspects of bathroom renovations.",
        },
        {
            question: "Do you handle kitchen plumbing installations?",
            answer: "Yes, we manage all types of kitchen plumbing installations and repairs.",
        },
        {
            question: "Do you install dishwashers and water connections?",
            answer: "No, we generally do not install dishwashers or washing machine water connections; we focus on core plumbing infrastructure.",
        },
        {
            question: "Can you upgrade old plumbing systems during renovations?",
            answer: "Yes, upgrading old plumbing systems to modern standards is one of our specialities during renovation projects.",
        },
        {
            question: "Do you work with builders for renovation projects?",
            answer: "Yes, we frequently work alongside builders to ensure seamless renovation projects.",
        },
    ],
    '💧 Hot Water & Heat Pumps': [
        {
            question: "Do you install hot water systems?",
            answer: "Yes, we install all major types of hot water systems (gas, electric, and heat pump).",
        },
        {
            question: "Can you repair hot water units?",
            answer: "Yes, we can diagnose and repair all major makes and models of hot water units.",
        },
        {
            question: "Do you service heat pumps?",
            answer: "Yes, we provide full servicing and installation for heat pumps.",
        },
        {
            question: "What’s the average life of a hot water system?",
            answer: "It depends on usage and water quality, but a hot water system usually works safely for at least 7-8 years. We recommend changing systems every 8 years.",
        },
        {
            question: "Do you replace old hot water tanks?",
            answer: "Yes, we remove and safely replace old hot water tanks with new, efficient units.",
        },
        {
            question: "Can you recommend energy-efficient hot water solutions?",
            answer: "Yes, we are experts in this. For the best recommendations tailored to your home and energy goals, please contact us for a free consultation.",
        },
        {
            question: "Do you work with all hot water brands?",
            answer: "We work with all major brands available in Melbourne.",
        },
    ],
    '🌬 Heating & Cooling': [
        {
            question: "Do you install split-system air conditioners?",
            answer: "Yes, we install both single and multi-head split-system air conditioners.",
        },
        {
            question: "Do you install ducted heating and cooling systems?",
            answer: "Yes, we install and service ducted heating and cooling systems.",
        },
        {
            question: "Can you repair existing heating and cooling units?",
            answer: "Yes, we can repair most existing heating and cooling units.",
        },
        {
            question: "Do you provide regular servicing for heating/cooling systems?",
            answer: "Yes, we offer regular preventative servicing to keep your systems running efficiently.",
        },
        {
            question: "Can you supply and install both heating and cooling equipment?",
            answer: "We only do installations at the moment, but we can suggest the best suppliers. Please contact us for consultation.",
        },
    ]
};

const staticFaqs = {
    // ... (Keep existing staticFaqs data)
    '🛠 Maintenance & Repairs': [
        { question: "What plumbing maintenance services do you offer?", answer: "Routine inspections, pressure checks, leak detection (including thermal imaging), drain cleaning, fixture descaling, and backflow device testing." },
        { question: "How often should I service my plumbing system?", answer: "We recommend a comprehensive check-up every 1-2 years to prevent small issues from becoming major emergencies." },
        { question: "Do you repair leaking taps?", answer: "Yes, we repair and replace all types of leaking taps and mixers." },
        { question: "Can you fix blocked toilets?", answer: "Yes, we clear all types of blocked toilets quickly and effectively." },
        { question: "Do you handle burst pipes?", answer: "Yes, we provide urgent repair services for burst pipes to minimize water damage." },
        { question: "Do you repair leaking showers?", answer: "Yes, we can fix leaks caused by faulty pipes, seals, or shower heads." },
        { question: "Do you fix noisy or running toilets?", answer: "Yes, we repair internal toilet components (e.g., inlet valves and outlet washers) to stop noise and water waste." },
        { question: "Do you provide routine check-ups for old houses?", answer: "Yes, we specialize in comprehensive safety and integrity check-ups for older plumbing systems." },
    ],
    '🌊 Drainage & Stormwater': [
        { question: "Do you unblock drains?", answer: "Yes, using various methods including drain snakes, hydro-jetting, and specialty tools." },
        { question: "Can you repair damaged stormwater pipes?", answer: "Yes, including trenching and pipe relining where appropriate." },
        { question: "Do you install new stormwater systems?", answer: "Yes, we design and install complete new stormwater drainage systems." },
        { question: "How do I know if my drains are blocked?", answer: "Signs include slow draining water, gurgling sounds, or unpleasant odours." },
        { question: "Do you provide CCTV drain inspections?", answer: "Yes, we use CCTV cameras to accurately diagnose blockages and pipe damage." },
    ],
    '🔥 Gas Fitting': [
        { question: "Are you licensed for gas fitting?", answer: "Yes, we hold all necessary licenses and certifications for Type A gas fitting works." },
        { question: "Do you install new gas lines?", answer: "Yes, we install new residential and commercial gas lines to code." },
        { question: "Can you repair or replace gas appliances?", answer: "Yes, we repair and replace gas ovens, cooktops, heaters, and hot water units." },
        { question: "Do you conduct gas safety checks?", answer: "Yes, we perform thorough gas safety checks for appliances and pipework." },
        { question: "Can you detect and fix gas leaks?", answer: "Yes, we provide emergency gas leak detection and repair services." },
    ],
    '💧 Water Filtration & Quality': [
        { question: "Do you install water filtration systems?", answer: "Yes, we install whole-house and point-of-use water filtration systems." },
        { question: "Can you service existing water filters?", answer: "Yes, including filter changes and system integrity checks." },
        { question: "Do you recommend filters for hard water areas?", answer: "Yes, we recommend and install systems specifically designed to treat hard water." },
        { question: "How often should filters be replaced?", answer: "Typically every 6 to 12 months, depending on the filter type and local water usage/quality." },
        { question: "Do you install under-sink water filter systems?", answer: "Yes, under-sink systems are a common installation we perform." },
    ],
};


// Combine all FAQs into a single array for easier search filtering
const allFaqsWithStatic = Object.entries({...categorizedFaqs, ...staticFaqs}).flatMap(([category, faqs]) => 
    faqs.map(faq => ({ ...faq, category }))
);

// Custom background style definition for the image's aesthetic
// Using a slightly more vibrant blue and an inner shadow effect for depth
const backgroundStyle = {
    backgroundColor: '#e0f7fa', // Light, vibrant cyan/blue
    backgroundImage: `radial-gradient(circle at 100% 100%, #ffffff80 5%, transparent 5%),
                       radial-gradient(circle at 0% 0%, #ffffff80 5%, transparent 5%)`,
    backgroundSize: '200% 200%',
    backgroundPosition: 'top left',
    // Add a slight inner shadow for a subtle 3D lift to the hero area
    boxShadow: 'inset 0 -10px 15px -10px rgba(0,0,0,0.1)',
};


const GeneralPlumbingFaqs = () => {
    // State for Search Term
    const [searchTerm, setSearchTerm] = useState('');
    // State for managing the currently open FAQ index, using a number for category/search, or null
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        // Only allow one FAQ to be open at a time for cleaner UX
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        // Close any open FAQs when the user starts a new search
        setOpenIndex(null);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setOpenIndex(null);
    }

    // Use useMemo to filter FAQs efficiently
    const filteredFaqs = useMemo(() => {
        const lowerCaseSearch = searchTerm.toLowerCase().trim();
        if (!lowerCaseSearch) {
            return [];
        }
        
        return allFaqsWithStatic.filter(faq => 
            faq.question.toLowerCase().includes(lowerCaseSearch) || 
            faq.answer.toLowerCase().includes(lowerCaseSearch)
        );
    }, [searchTerm]);

    // Determine if we are in search mode
    const isSearching = searchTerm.trim().length > 0;

    const renderFaqItem = (faq: { question: string, answer: string, category: string }, index: number, isSearchResult: boolean) => {
        const globalIndex = index;
        const isOpen = openIndex === globalIndex;
        
        return (
            <div
                key={isSearchResult ? `search-${globalIndex}` : globalIndex}
                // Enhanced shadow, rounded corners, and hover effect for attractiveness
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4 overflow-hidden border border-gray-100"
            >
                <button
                    className={`flex justify-between items-center w-full p-4 md:p-5 text-left transition-colors duration-300 
                    ${isOpen ? 'bg-blue-600 text-white shadow-md' : 'text-gray-900 hover:bg-blue-50'}`}
                    onClick={() => toggleFAQ(globalIndex)}
                >
                    <span className={`text-base md:text-lg font-semibold pr-4 ${isOpen ? 'font-bold' : ''}`}>
                        {faq.question}
                    </span>
                    {isOpen ? (
                        <ChevronUp className="w-5 h-5 flex-shrink-0 transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform duration-300" />
                    )}
                </button>
                
                {/* Category tag for search results */}
                {isSearchResult && (
                    <div className="bg-blue-50 text-blue-700 text-xs px-5 py-1 font-medium border-t border-blue-100">
                        Category: <span className="font-semibold">{faq.category}</span>
                    </div>
                )}
                
                {/* Content area with smooth transition */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? '500px' : '0' }}
                >
                    <div className="p-4 md:p-5 bg-gray-50 text-gray-700 border-t border-gray-200">
                        <p className="text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                </div>
            </div>
        );
    };

    const renderCategorizedBlock = (title: string, faqs: typeof categorizedFaqs['🔧 General Plumbing FAQs'], isCategorizedView: boolean) => {
         // Only render static content in non-search mode
        if (!isCategorizedView && title.includes('Maintenance & Repairs')) {
            return null; 
        }

        return (
            <div key={title} className="mt-10 pt-4 border-t border-gray-200">
                {/* Enhanced Category Header */}
                <h3 className="flex items-center font-poppins font-extrabold text-2xl md:text-3xl text-blue-800 mb-6">
                    <Zap className='w-6 h-6 mr-3 text-yellow-500' />
                    {title}
                </h3>
                
                {/* Render simple card view for static/non-toggle blocks */}
                {!isCategorizedView ? (
                     <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                                <p className="font-semibold text-gray-900 mb-1 flex items-center">
                                    <span className="text-blue-500 mr-2">•</span> {faq.question}
                                </p>
                                <p className="text-gray-600 text-sm md:text-base pl-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </div>
                        ))}
                    </div>
                ) : (
                    // Render toggleable FAQ items for main categories
                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const globalIndex = globalIndexOffset + index;
                            return renderFaqItem({...faq, category: title}, globalIndex, false);
                        })}
                    </div>
                )}
            </div>
        );
    }
    
    // Reset offset calculation for categorized view
    let globalIndexOffset = 0; 
    

    return (
        <MainLayout>
            {/* The first section with light background and search */}
            <div className="w-full" style={backgroundStyle}>
                <section className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20 md:py-28">
                    
                    {/* Header: More attractive and centered */}
                    <h2 className="font-poppins text-3xl md:text-4xl text-center text-gray-800 font-extrabold mb-4">
                        Need an Answer? Find It Here.
                    </h2>
                    <p className="text-center text-gray-600 mb-10 text-lg">
                        Browse our frequently asked questions or use search bar below.
                    </p>
                    
                    {/* Search Bar: Prominent and well-spaced */}
                    <div className="relative mb-8 max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="e.g., 'hot water repairs'"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            // Enhanced search bar design for a modern feel
                            className="w-full p-4 pl-14 pr-14 text-base md:text-lg border-2 border-transparent rounded-full shadow-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500" />
                        {searchTerm && (
                            <button 
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-red-600 rounded-full transition-colors duration-200"
                                aria-label="Clear search"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                </section>
            </div>


            {/* FAQs Content Section (White Background Below Hero) */}
            <section className='w-full max-w-4xl mx-auto px-4 py-12 sm:py-20'>
                {isSearching ? (
                    // --- Search Results View (More prominent and clean) ---
                    <div className="mt-4">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 pb-3 border-b-2 border-blue-200">
                            <h3 className="font-poppins font-extrabold text-2xl text-blue-800 mb-2 sm:mb-0">
                                {filteredFaqs.length > 0 
                                    ? `Search Results (${filteredFaqs.length})` 
                                    : 'No Results Found'}
                            </h3>
                            <button
                                onClick={clearSearch}
                                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm md:text-base"
                            >
                                <X className="w-4 h-4 mr-1" />
                                Clear Search & View All Categories
                            </button>
                        </div>

                        {filteredFaqs.length > 0 ? (
                            <div className="space-y-4">
                                {filteredFaqs.map((faq, index) => (
                                    // Use a temporary index for search results to avoid state collision with categories
                                    renderFaqItem(faq, index, true) 
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200 shadow-inner">
                                <p className="text-2xl text-red-600 font-semibold">
                                    Oops! No Matches.
                                </p>
                                <p className="text-gray-600 mt-4 max-w-md mx-auto">
                                    We couldn't find any questions or answers related to **"{searchTerm}"**. 
                                    Try a simpler keyword or browse the full categories below.
                                </p>
                            </div>
                        )}
                    </div>
                ) : (
                    // --- Default Categorized View (Structured and clean) ---
                    <>
                        {/* Render Main Toggleable Categories */}
                        <div className="space-y-4">
                            {Object.entries(categorizedFaqs).map(([categoryTitle, faqs]) => {
                                const categoryBlock = renderCategorizedBlock(categoryTitle, faqs, true);
                                globalIndexOffset += faqs.length; // Update offset for the next category
                                return categoryBlock;
                            })}
                        </div>
                        
                        {/* Render Static/Detailed Categories (Non-toggleable cards) */}
                        <h2 className="font-poppins font-extrabold text-3xl md:text-4xl text-blue-800 mt-16 pt-8 border-t-4 border-blue-500">
                            Detailed Service FAQs
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Answers to specific questions about our maintenance, drainage, gas fitting, and filtration services.
                        </p>

                        <div className='space-y-8'>
                            {Object.entries(staticFaqs).map(([title, faqs]) => renderCategorizedBlock(title, faqs, false))}
                        </div>
                    </>
                )}
            </section>
        </MainLayout>
    );
};

export default GeneralPlumbingFaqs;