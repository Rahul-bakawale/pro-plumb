'use client'

import { Clock, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react';
import React from 'react'


const Contact = ({isContactInView, contactSectionRef}: any) => {
    return (   <section id="contact" ref={contactSectionRef} className={`py-20 px-6 md:px-12 bg-gray-900 opacity-0 ${isContactInView ? 'animate-fade-in-up' : ''}`}>
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border-4 border-blue-700">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
            Get In <span className="text-blue-500">Touch With Us</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className={`space-y-6 ${isContactInView ? 'animate-slide-in-left' : ''}`}>
              <div className="flex items-center text-gray-300">
                <MapPin className="text-blue-500 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Our Office</h3>
                  <p className="text-lg">factory 2 3-11 bate  close Pakenham</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="text-blue-500 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone Support</h3>
                  <p className="text-lg">(043) 315-1042 </p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="text-blue-500 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-lg">contact@Beaconsfield plumbing .com</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="text-blue-500 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Availability</h3>
                  <p className="text-lg">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-lg">Emergency: 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className={`space-y-6 ${isContactInView ? 'animate-slide-in-right' : ''}`}>
              <div>
                <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="Your Full Name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 input-focus-glow"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-500" size={20} />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 pl-10 bg-gray-700 border border-blue-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y input-focus-glow"
                    placeholder="Describe your plumbing issue or query..."
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg
                           focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
)
}

export default Contact;