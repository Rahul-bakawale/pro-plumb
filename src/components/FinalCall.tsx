'use client'

import { useRouter } from 'next/navigation'
import React from 'react'


const FinalCall = () => {
    const router = useRouter()
    return (
    <section className="relative py-20 px-6 md:px-12 text-center overflow-hidden
                        bg-cover bg-center bg-no-repeat 
                        bg-[url('/cover.webp')]">

        {/* --- Dark Overlay (to ensure text readability) --- */}
        <div className="absolute inset-0 bg-blue-800 opacity-67"></div>
        {/* -------------------------------------------------- */}

        {/* The z-10 class brings the content *above* the overlay */}
        <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready for Reliable & Modern Plumbing?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10">
                Let Beaconsfield plumbing handle your needs with expertise and cutting-edge care.
            </p>
            <button
                onClick={() => router.push('/about')}
                className="bg-white hover:bg-gray-200 text-blue-800 font-bold py-4 px-10 rounded-full text-xl md:text-2xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 animate-pulse-effect"
            >
                Schedule Your Service
            </button>
        </div>
    </section>
);
}

export default FinalCall;