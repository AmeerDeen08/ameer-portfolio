import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaEnvelope, 
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp,
  FaCode,
  FaHeart
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show scroll button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AmeerDeen08', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ameerdeenn/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    // { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ameerdxxn/', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaEnvelope, href: 'mailto:ameerdeen592@gmail.com', label: 'Email', color: 'hover:text-red-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Properly positioned scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Footer Content - Better aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            
            {/* Brand Section */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Ameerdeen
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Full-stack developer passionate about creating innovative digital solutions 
                that make a difference. Let's build something amazing together.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-blue-400 text-sm" />
                  </div>
                  <span className="text-sm">Chennai, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                    <FaPhone className="text-green-400 text-sm" />
                  </div>
                  <span className="text-sm">+91 6380598096</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer">
                  <div className="p-2 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors duration-300">
                    <FaEnvelope className="text-red-400 text-sm" />
                  </div>
                  <span className="text-sm">ameerdeen592@gmail.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links & Newsletter */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 mb-8">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm hover:translate-x-2 transform inline-block group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-1"
                    >
                      <span className="border-b border-transparent group-hover:border-blue-400 transition-all duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              {/* <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
                <p className="text-gray-400 mb-4 text-sm">
                  Get updates about my latest projects and blog posts.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm text-sm"
                      required
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubscribed}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    whileHover={!isSubscribed ? { scale: 1.05 } : {}}
                    whileTap={!isSubscribed ? { scale: 0.95 } : {}}
                  >
                    {isSubscribed ? (
                      <>
                        <FaHeart className="text-sm animate-pulse" />
                        <span>Thank you!</span>
                      </>
                    ) : (
                      <>
                        <FaEnvelope className="text-sm" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div> */}
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h4 className="text-lg font-semibold mb-6 text-white">Let's Connect</h4>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`group p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl mx-auto" />
                    <span className="text-xs text-center block mt-2  group-hover:opacity-100 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-400 text-sm mb-4">Ready to work together?</p>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                >
                  <FaEnvelope className="text-sm" />
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </div>

          {/* Copyright & Credits */}
          <motion.div 
            className="border-t border-gray-800 pt-8 text-center"
            {...fadeInUp}
          >
            <p className="text-gray-400 text-sm mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>© {new Date().getFullYear()} Ameerdeen. All rights reserved.</span>
              <span className="hidden sm:inline text-gray-600">•</span>
              <span className="flex items-center gap-1">
                Built with <FaHeart className="text-red-500 animate-pulse" /> and <FaCode className="text-blue-400" /> using React
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
              <button className="hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1">Privacy Policy</button>
              <span className="hidden sm:inline text-gray-700">•</span>
              <button className="hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1">Terms of Service</button>
              <span className="hidden sm:inline text-gray-700">•</span>
              <button className="hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1">Cookie Policy</button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}