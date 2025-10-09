'use client'

import { DollarSign, FileText, Hammer, Rocket, X } from 'lucide-react'
import React, { useState } from 'react'

// --- 1. Data for the boxes and modal content (CONTENT CONDENSED) ---
const boxData = [
  {
    id: 'licensed',
    icon: FileText,
    label: "Licensed Plumber",
    title: "Fully Licensed & Insured",
    // 32 words
    content: "Our plumbers hold all necessary Victorian licenses (VBA) and are fully insured, offering you complete peace of mind. We rigorously comply with all Australian standards, guaranteeing safe, high-quality, and compliant work on every job, every time.",
  },
  {
    id: 'response',
    icon: Rocket,
    label: "Same Day Response",
    title: "Emergency Response Guaranteed",
    // 32 words
    content: "Urgent callouts are our priority. For critical issues like burst pipes, major leaks, or hot water failure, we guarantee same-day dispatch. A qualified plumber will be sent promptly to East Melbourne suburbs the same day you call.",
  },
  {
    id: 'price',
    icon: DollarSign,
    label: "Price That Fits",
    title: "Upfront, Transparent Pricing",
    // 31 words
    content: "Expect no hidden fees or unexpected hourly surprises. We provide a detailed, fixed-price quote upfront before any work begins. We are committed to transparency, ensuring you receive quality workmanship at a fair, local rate.",
  },
  {
    id: 'happy',
    icon: Hammer,
    label: "Guaranteed Satisfaction",
    title: "Guaranteed Satisfaction",
    // 24 words
    content: "Our reputation is founded on reliability and high-quality results. We proudly guarantee all our workmanship. The job isn't finished until you are completely satisfied with the result.",
  },
];

// Total words across all four contents: 32 + 32 + 31 + 24 = 119 words.

// --- 2. Simple Modal Component (No changes needed here, as it handles the data) ---
export const FeatureModal = ({ isOpen, onClose, data }: any) => {
    if (!isOpen || !data) return null;

    return (
        // Overlay for the modal
        <div 
            className="fixed inset-0 bg-black z-[100] flex justify-center items-center p-4 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.80)' }} 
            onClick={onClose} // Close modal when clicking outside
        >
            {/* Modal Content Box */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Header */}
                <div className="p-5 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl">
                    <h3 className="text-2xl font-bold text-blue-700">{data.title}</h3>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-5 text-gray-700">
                    <div className="flex items-center mb-4">
                        {/* Icon display */}
                        <data.icon size={30} className="text-blue-700 mr-3 p-1 bg-blue-100 rounded-full" />
                        {/* Increased font size from text-lg to text-xl */}
                        <p className="text-xl font-semibold">{data.label}</p>
                    </div>
                    
                    {/* Increased font size from text-base to text-lg */}
                    <p className="text-lg leading-relaxed">
                        {data.content}
                    </p>
                </div>
                
                {/* Footer (Optional Call to Action) */}
                <div className="p-5 border-t border-gray-200">
                    <a 
                        href="tel:+61433151042" 
                        className="w-full block text-center bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
                    >
                        Call Now: +61 433 151 042
                    </a>
                </div>
            </div>
        </div>
    );
};

// --- 3. Main Component with state management (No changes needed here) ---
const BoxSection = ({openModal, closeModal}: any) => {


  return (
    <section className='w-full mt-5'>

      {/* Box Grid */}
      <div className='w-full grid grid-cols-2 lg:flex justify-center items-center gap-4 p-4 z-20'>
        {boxData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              // Add onClick handler to open the modal with the specific item data
              onClick={() => openModal(item)}
              className="bg-gray-200 text-blue-700 font-bold py-3 
                  flex flex-col sm:flex-row sm:justify-start justify-center items-center 
                  px-6 rounded-lg shadow-md border-2 border-blue-700 cursor-pointer 
                  hover:bg-gray-300 transition duration-200 
                  w-full h-full min-h-[80px] text-center sm:text-left
                  hover:scale-[1.02] transform" // Added hover effect
              style={{ border: '1px solid blue' }}
            >
              <IconComponent className="text-blue-700 mb-2 sm:mb-0 sm:mr-2" size={30} />
              <span className="md:text-[15px] lg:text-[15px] text-[14px]">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Render the Modal */}
   
    </section>
  );
}

export default BoxSection;