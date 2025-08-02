'use client'

import { DollarSign, FileText, Hammer, Rocket } from 'lucide-react'
import React from 'react'


const BoxSection = () => {

    return <section className='w-full mt-5'>
    
    <div className='w-full grid grid-cols-2 lg:flex justify-center items-center gap-4 p-4 z-20'> {/* Modified for a responsive grid */}
    {/* Item 1 */}
    <div className="bg-gray-200 text-blue-700  font-bold py-3 flex flex-col sm:flex-row items-center px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-300 transition duration-200 w-full">
      <FileText className="text-blue-700 mb-2 sm:mb-0" size={30} />&nbsp; Licensed Plumber
    </div>

    {/* Item 2 */}
    <div className="bg-gray-200 text-blue-700 font-bold py-3 flex flex-col sm:flex-row items-center px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-300 transition duration-200 w-full">
      <Rocket className="text-blue-700 mb-2 sm:mb-0" size={30} />&nbsp; Same Day Response
    </div>

    {/* Item 3 */}
    <div className="bg-gray-200 text-blue-700 font-bold py-3 flex flex-col sm:flex-row items-center px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-300 transition duration-200 w-full">
      <DollarSign className="text-blue-700 mb-2 sm:mb-0" size={30} />&nbsp; Price That Fits
    </div>

    {/* Item 4 */}
    <div className="bg-gray-200 text-blue-700 font-bold py-3 flex flex-col sm:flex-row items-center px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-300 transition duration-200 w-full">
      <Hammer className="text-blue-700 mb-2 sm:mb-0" size={30} />&nbsp; Happy Customer
    </div>
  </div>
  </section>
}

export default BoxSection
