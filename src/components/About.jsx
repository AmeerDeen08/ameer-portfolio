import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import AboutCard from './AboutCard';
import About2 from './About2';
import Experience from './Experience';
import { motion } from 'framer-motion';
import Projects from './Projects';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { amount: 0.2 },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900/50 to-black relative">
        {/* About section background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Header - Consistent with other sections */}
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer who loves creating innovative solutions 
              and bringing ideas to life through code.
            </p>
          </motion.div>

          {/* Main About Content - Equal height grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-20">
            {/* About Card */}
            <motion.div className="h-full" {...fadeIn}>
              <AboutCard />
            </motion.div>

            {/* Skills & Education Section */}
            <motion.div className="h-full" {...fadeIn}>
              <About2 />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section - Separate section with proper ID */}
      <section id="experience" className="py-20 bg-gradient-to-b from-black via-gray-900/30 to-black relative">
        {/* Experience section background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-20 w-96 h-96 bg-green-500/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Experience Header - CONSISTENT STYLE with other sections */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My professional journey and the experiences that have shaped my career 
              in software development.
            </p>
          </motion.div>

          {/* Experience Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Experience />
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Fixed background effects */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-800/30 to-black relative">
        {/* Projects section background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-20 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Header - Consistent style */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and experience 
              in full-stack development.
            </p>
          </motion.div>

          {/* Projects Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>
        </div>
      </section>
    </div>
  );
}