import React, { useState } from 'react';
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaStackOverflow, 
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDownload
} from "react-icons/fa";
import { MdOutlineMailOutline, MdWork, MdPhone } from "react-icons/md";
import { motion } from 'framer-motion';
import pfp from '../assets/images/Profile_pic.jpg';

export default function AboutCard() {

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ameerdeenn/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaGithub, href: 'https://github.com/AmeerDeen08', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ameerdxxn/', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaStackOverflow, href: 'https://stackoverflow.com/users/31080701/ameerdeen-n', label: 'Stack Overflow', color: 'hover:text-orange-500' },
  ];

  const contactInfo = [
    { icon: MdOutlineMailOutline, text: 'ameerdeen592@gmail.com', type: 'email' },
    { icon: MdPhone, text: '+91 6380598096', type: 'phone' },
    { icon: FaMapMarkerAlt, text: 'Chennai, India', type: 'location' },
    { icon: FaCalendarAlt, text: 'Available for work', type: 'status' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const downloadResume = () => {
  const fileId = '1CtnVcRHYQLoVKHL2pUZcbDwFOEtNQMX9';
  const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const a = document.createElement('a');
  a.href = directUrl;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.download = 'Ameerdeen_Resume.pdf'; // Suggested filename (may be ignored cross-origin)

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
    console.log('Downloading resume...');
  };

  return (
    <motion.div 
      className="relative group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:transform hover:scale-[1.02]">
        {/* Profile Image */}
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75"></div>
            <motion.img
              src={pfp}
              alt="Profile"
              className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white/20 transition-all duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-gray-900 animate-pulse"></div>
          </div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ameerdeen
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-2 text-blue-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MdWork className="text-lg" />
            <span className="text-sm sm:text-base font-medium">Full Stack Developer</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center gap-2 text-green-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaGraduationCap className="text-lg" />
            <span className="text-sm sm:text-base">Computer Science Graduate</span>
          </motion.div>

          {/* Bio */}
          <motion.p 
            className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Passionate full-stack developer with expertise in modern web technologies. 
            I love creating beautiful, functional applications that solve real-world problems.
          </motion.p>
        </div>

        {/* Contact Information */}
        <motion.div 
          className="space-y-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-white/5">
              <info.icon className="text-lg text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">{info.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.label}
              className={`p-3 bg-white/10 rounded-full text-white ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:bg-white/20`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </motion.div>

        {/* Download Resume Button */}
        <motion.a
  href="https://drive.google.com/uc?export=download&id=1CtnVcRHYQLoVKHL2pUZcbDwFOEtNQMX9"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaDownload className="text-lg" />
  <span>Download Resume</span>
</motion.a>

        {/* Skills Quick Preview */}
        <motion.div 
          className="mt-6 pt-6 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-white font-semibold mb-3 text-center">Quick Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React', 'Node.js', 'Python', 'MongoDB'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30 hover:bg-blue-600/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}