import React from 'react';
import { cn } from "../lib/utils";
import '../assets/styles/hp.css';
import Navbar from './Navbar';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Footer from './Footer';
import { FiMail, FiPhone, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';

function Homepage() {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({ 
          top: Math.max(0, offsetTop), 
          behavior: 'smooth' 
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Home Section - Better mobile spacing */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            
            {/* Main Hero Content - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8"
            >
              <h2 className="text-lg sm:text-xl text-gray-300 mb-4 font-light tracking-wide">
                Hey I'm
              </h2>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Ameerdeen
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 h-12 flex items-center justify-center">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    2000,
                    'React Specialist',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-gray-300"
                />
              </div>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I create modern, responsive web applications with cutting-edge technologies. 
                Passionate about clean code and exceptional user experiences.
              </motion.p>
            </motion.div>

            {/* CTA Buttons - Mobile optimized */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-auto"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Contact Links - Mobile optimized */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="mailto:ameerdeen@example.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
              >
                <FiMail className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">ameerdeen592@gmail.com</span>
              </a>
              
              <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
              
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-2 py-1"
              >
                <FiPhone className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">+91 6380598096</span>
              </a>
            </motion.div>

            {/* Social Links - Mobile optimized */}
            <motion.div 
              className="flex gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://github.com/AmeerDeen08"
                className="p-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/ameerdeenn/"
                className="p-3 border border-gray-600 rounded-full text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <FaLinkedin className="text-lg" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator - FIXED mobile alignment */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg px-3 py-2"
          >
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-gray-400 to-transparent animate-pulse"></div>
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's Work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <a
                href="mailto:ameerdeen@example.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-auto"
              >
                Start a Project
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-full sm:w-auto"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;