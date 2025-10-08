'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRouter } from 'next/navigation';


const FAQSection = () => {
  // State to manage which FAQ item is currently open (by index)
  const  router   = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What areas of Melbourne do you service?",
      answer: "We proudly service all Eastern and South-Eastern Suburbs of Melbourne, including key local areas like Beaconsfield, Berwick, Pakenham, Narre Warren, and Casey.",
    },
    {
      question: "Do you work in the eastern and south-eastern suburbs?",
      answer: "Yes, absolutely. We specialize in providing reliable plumbing services across the entire eastern and south-eastern regions of Melbourne.",
    },
    {
      question: "Are you a licensed plumber?",
      answer: "Yes, we are fully licensed for all kinds of plumbing works, installations, and repairs. You can trust that all work is compliant with Australian standards.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 sm:py-20">
      <div className="text-center mb-10">
        <h2 className="font-poppins font-semibold text-3xl md:text-5xl text-gray-900 mb-2">
          General Plumbing FAQs 🔧
        </h2>
        <p className="text-gray-600 text-lg">Quick answers to your most common questions.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-blue-200 rounded-lg shadow-md transition-all duration-300 hover:border-blue-500"
            >
              {/* Question Button (Accordion Header) */}
              <button
                className={`flex justify-between items-center w-full p-5 text-left font-semibold transition-colors duration-300 
                            ${isOpen ? 'bg-blue-700 text-white rounded-t-lg' : 'bg-white text-gray-800 hover:bg-blue-50'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg ${isOpen ? 'font-bold' : ''}`}>{faq.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                )}
              </button>

              {/* Answer Content (Accordion Panel with Smooth Transition) */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                // The max-height handles the smooth animation for both expand and collapse
                style={{
                  maxHeight: isOpen ? '500px' : '0', // 500px is a sufficiently large value for expansion
                }}
              >
                <div className="p-5 bg-white text-gray-700">
                  <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
       {/* --- SHOW MORE BUTTON --- */}
      <div className="text-center mt-10">
        <button
          onClick={() => router.push('/faqs')}
          className="inline-flex items-center justify-center 
                     bg-blue-700 hover:bg-blue-800 text-white font-semibold 
                     py-3 px-6 rounded-lg shadow-lg text-lg 
                     transition-all duration-300 transform hover:scale-[1.02]"
        >
          View All FAQs
          <span className="ml-2 text-xl font-bold">→</span>
        </button>
      </div>
      {/* ------------------------- */}
    </section>
  );
};

export default FAQSection;