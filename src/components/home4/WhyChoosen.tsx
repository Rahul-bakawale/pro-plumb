import { Clock, DollarSign, FileText, Hammer, Rocket, Star } from 'lucide-react';
import React from 'react';


const WhyChoosen = ({whyChooseUsSectionRef, isWhyChooseUsInView}: any) => {
    return ( <section id="why-choose-us" ref={whyChooseUsSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isWhyChooseUsInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
            Why Choose <span className="text-blue-500">Us?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1: 24/7 Plumbing */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
              {/* Changed icon to represent 24/7 or emergency */}
              <Clock className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using Clock, or Phone, or Emergency */}
              <h3 className="text-2xl font-semibold text-white mb-4">24/7 Emergency Plumbing</h3>
              <p className="text-gray-300 leading-relaxed">
                Ready to assist you any time, day or night, for all urgent plumbing needs.
              </p>
            </div>

            {/* Feature Card 2: Same Day Response */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
              {/* Changed icon for speed/response */}
              <Rocket className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using Rocket, or FastForward */}
              <h3 className="text-2xl font-semibold text-white mb-4">Same Day Response</h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize your urgent requests with prompt service and quick turnarounds.
              </p>
            </div>

            {/* Feature Card 3: Price that fits */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {/* Changed icon for pricing */}
              <DollarSign className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using DollarSign, or Tag */}
              <h3 className="text-2xl font-semibold text-white mb-4">Price That Fits</h3>
              <p className="text-gray-300 leading-relaxed">
                Transparent and competitive pricing tailored to your budget, no hidden fees.
              </p>
            </div>

            {/* Feature Card 4: Quality Workmanship */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}>
              {/* Changed icon for quality */}
              <Hammer className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using Hammer, or Award, or ShieldCheck */}
              <h3 className="text-2xl font-semibold text-white mb-4">Quality Workmanship</h3>
              <p className="text-gray-300 leading-relaxed">
                Dedicated to providing durable, reliable solutions with exceptional skill.
              </p>
            </div>

            {/* Feature Card 5: Licensed Plumbers */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              {/* Changed icon for licensed/certified */}
              <FileText className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using FileText, or IdCard, or Certificate */}
              <h3 className="text-2xl font-semibold text-white mb-4">Licensed Plumbers</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises fully licensed and highly skilled plumbing professionals.
              </p>
            </div>

            {/* Feature Card 6: Google Review 4.7 */}
            <div className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-blue-700 transform hover:scale-105 transition duration-300 ease-in-out ${isWhyChooseUsInView ? 'animate-fade-in-scale' : ''}`} style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}>
              {/* Changed icon for reviews/rating */}
              <Star className="text-blue-500 mx-auto mb-6" size={48} /> {/* Using Star, or Google, or ThumbsUp */}
              <h3 className="text-2xl font-semibold text-white mb-4">Google Review 4.7+</h3>
              <p className="text-gray-300 leading-relaxed">
                Proudly maintaining a high customer satisfaction rating based on your feedback.
              </p>
            </div>
          </div>
        </div>
      </section>)
}

export default WhyChoosen;