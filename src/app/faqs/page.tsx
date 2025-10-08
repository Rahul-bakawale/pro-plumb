'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MainLayout from "@/container/MainLayout";

// Structure the FAQs by Category for a better user experience
const categorizedFaqs = {
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


// Combine all FAQs into a single array for easier mapping
const allFaqs = Object.values(categorizedFaqs).flat();
// Determine which FAQs to display (e.g., the first 10 for the compact view)
const displayFaqs = allFaqs.slice(0, 10);

const GeneralPlumbingFaqs = () => {
    // State to manage which FAQ item is currently open (by index in the ALL_FAQS array)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const renderStaticFaqBlock = (title: string, faqs: typeof staticFaqs['🛠 Maintenance & Repairs']) => (
        <div key={title} className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-6 border-l-4 border-blue-700 pl-4">
                {title}
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <p className="font-semibold text-gray-900 mb-1">{faq.question}</p>
                        <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                ))}
            </div>
        </div>
    );

    // 🔑 Key change: Calculate the starting index for each category for state tracking
    let globalIndexOffset = 0;

    return (
        <MainLayout >
            <section className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20">
                {/* ... (Header remains the same) ... */}

                <div className="space-y-4">
                    {/* Loop over each category (e.g., '🔧 General Plumbing FAQs') */}
                    {Object.entries(categorizedFaqs).map(([categoryTitle, faqs]) => {

                        // Store the starting index for this category
                        const categoryStartingIndex = globalIndexOffset;

                        const categoryBlock = (
                            <div key={categoryTitle}>
                                <h3 className="font-poppins font-semibold text-2xl md:text-3xl text-blue-700 mb-4 mt-6 border-l-4 border-blue-700 pl-4">
                                    {categoryTitle}
                                </h3>

                                {faqs.map((faq, index) => {
                                    // Calculate the true global index for state tracking
                                    const globalIndex = categoryStartingIndex + index;
                                    const isOpen = openIndex === globalIndex;

                                    return (
                                        <div
                                            key={globalIndex}
                                            className="border border-blue-200 rounded-lg shadow-md transition-all duration-300 hover:border-blue-500 mb-4"
                                        >
                                            <button
                                                className={`flex justify-between items-center w-full p-5 text-left font-semibold transition-colors duration-300 
                                                ${isOpen ? 'bg-blue-700 text-white rounded-t-lg' : 'bg-white text-gray-800 hover:bg-blue-50'}`}
                                                onClick={() => toggleFAQ(globalIndex)} // Use GLOBAL index here
                                            >
                                                <span className={`text-lg ${isOpen ? 'font-bold' : ''}`}>{faq.question}</span>
                                                {isOpen ? (<ChevronUp className="w-5 h-5 transition-transform duration-300" />) : (<ChevronDown className="w-5 h-5 transition-transform duration-300" />)}
                                            </button>
                                            <div
                                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                                style={{ maxHeight: isOpen ? '500px' : '0' }}
                                            >
                                                <div className="p-5 bg-white text-gray-700">
                                                    <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        );

                        // 🔑 Update the offset for the next category
                        globalIndexOffset += faqs.length;

                        return categoryBlock;
                    })}
                </div>

                <div className='space-y-4'>
                    {Object.entries(staticFaqs).map(([title, faqs]) => renderStaticFaqBlock(title, faqs))}

                </div>

                {/* ... (Show More Button remains the same) ... */}
            </section>
        </MainLayout>
    );
};

// ... (Export remains the same)

export default GeneralPlumbingFaqs