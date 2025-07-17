import { DollarSign, FileText, Hammer, Rocket } from 'lucide-react';
import React from 'react'


const HomeSection = ({scrollToSection}: any) => {
    return (   <section id="home" className="relative h-screen flex items-center justify-center text-cecovernter bg-gradient-to-br from-gray-900 to-black">
        {/* Updated Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('./cover2.png')", // Make sure this path is correct
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(50%)',
          }}
        ></div>
        <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto rounded-xl shadow-2xl bg-gray-800 bg-opacity-90 border border-blue-700
          flex flex-col md:flex-row md:items-stretch md:text-left text-center
          flex-grow-0 md:flex-grow w-11/12 md:w-auto overflow-hidden">
          {/* Left Half: Text Content and BLUE "Get a Free Estimate" Button */}
          <div className="md:w-1/2 md:pr-8 flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-6xl font-extrabold text-white leading-tight mb-3 opacity-0 animate-fade-in-up">
                We Solve Your
                <span className="text-blue-400"> Plumbing Problems With Ease</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-0 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              So you can focus on your most valuable tasks, we ensure 100% customer satisfaction.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center max-w mx-auto">
                {/* Customer Review Section */}
                <div className="mb-2">
                  <p className="text-gray-200 text-lg italic">
                    "Excellent service! The plumbers were professional, efficient, and solved our issue quickly. Highly recommend!"
                  </p>
                  <p className="text-blue-400 font-semibold mt-2">- Happy Customer</p>
                </div>

                {/* Google Rating Section */}
                <div className="flex items-center justify-center border-t border-gray-700 pt-4 w-full">
                  {/* Google Icon */}
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h6.15c-.29 1.59-1.14 2.76-2.39 3.58v2.92h3.75c2.2-2.02 3.47-5 3.47-8.25z" fill="#4285F4"></path>
                    <path d="M12 23c3.25 0 5.97-1.07 7.96-2.92l-3.75-2.92c-1.05.71-2.42 1.17-4.21 1.17-3.57 0-6.58-2.42-7.67-5.68H.36v2.92C2.45 20.89 7.02 23 12 23z" fill="#34A853"></path>
                    <path d="M4.33 14.18c-.1-.71-.16-1.46-.16-2.18s.06-1.47.16-2.18V6.82H.36c-.66 1.39-.99 2.94-.99 4.55s.33 3.16.99 4.55L4.33 14.18z" fill="#FBBC05"></path>
                    <path d="M12 4.18c1.85 0 3.45.63 4.73 1.83l3.37-3.37C17.97 1.14 15.25 0 12 0 7.02 0 2.45 2.11.36 6.08l3.97 3.08C5.42 6.6 8.43 4.18 12 4.18z" fill="#EA4335"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                  <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>


                  <span className="text-gray-400 text-sm"> (500+ Reviews on Google)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Half: Image Background and BOTTOM Buttons */}
          <div
            className="md:w-1/2 p-4 mt-8 md:mt-0 flex flex-col justify-end items-center h-full w-full .rightContainer"
            style={{
              backgroundImage: "url('/pipe2.png')", // Make sure this path is correct
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(50%)',
              height: 556
            }}
          >
            <div className="flex-grow"></div>

            <div className="flex flex-row justify-around w-full px-4 pb-4">
              <button
                onClick={() => window.location.href = 'tel:+61423555555'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-base transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up flex items-center justify-center min-w-[150px]"
                style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Call Now (+61423555555)
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full text-base transition duration-300 ease-in-out transform hover:scale-105 shadow-lg opacity-0 animate-fade-in-up flex items-center justify-center min-w-[150px]"
                style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
              >
                Quick Quote
              </button>
            </div>
          </div>
        </div>

        {/* THIS IS THE MODIFIED DIV FOR THE 4 ITEMS */}
        <div className='absolute bottom-0 left-0 right-0 w-full flex flex-wrap justify-center items-center p-4 z-20'> {/* Added p-4 for padding from bottom */}
          {/* Item 1 */}
          <div className="bg-gray-800 leading-loose text-blue-400 items font-bold py-3 flex px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-700 transition duration-200 m-2">
            <FileText className="text-blue-400" size={30} />&nbsp; Licensed Plumber
          </div>

          {/* Item 2 */}
          <div className="bg-gray-800 leading-loose text-blue-400 items font-bold flex py-3 px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-700 transition duration-200 m-2">
            <Rocket className="text-blue-400" size={30} />&nbsp; Same Day Response
          </div>

          {/* Item 3 */}
          <div className="bg-gray-800 leading-loose text-blue-400 items font-bold flex py-3 px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-700 transition duration-200 m-2">
            <DollarSign className="text-blue-400" size={30} />&nbsp; Price That Fits
          </div>

          {/* Item 4 */}
          <div className="bg-gray-800 leading-loose text-blue-400 items font-bold flex py-3 px-6 rounded-lg shadow-md border border-blue-700 cursor-pointer hover:bg-gray-700 transition duration-200 m-2">
            <Hammer className="text-blue-400" size={30} />&nbsp; Happy Customer
          </div>
        </div>
      </section>)
}

export default HomeSection;