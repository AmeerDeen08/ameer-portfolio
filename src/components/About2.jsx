import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiDocker,
} from 'react-icons/si';

export default function About2() {
  // Minimal tech stack - only essential technologies
  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
    { name: 'Git', icon: FaGithub, color: 'text-gray-400' },
    { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
  ];

  // Education details
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering (Cyber Security)",
      school: "Hindustan Institute of Technology and Science",
      duration: "2022 - 2026",
      grade: "CGPA: 8.0/10",
      icon: FaUniversity
    },
    {
      degree: "Higher Secondary",
      field: "Science (Physics, Chemistry, Mathematics)",
      school: "AKT CBSE School",
      duration: "2022",
      grade: "Percentage: 78%",
      icon: FaGraduationCap
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <div className="space-y-6">
      
      {/* Minimal Tech Stack */}
      <motion.div 
        className="relative group"
        {...fadeIn}
      >
        {/* Reduced light effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
        
        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">⚡</span>
            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
          </div>

          {/* Minimal grid layout */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group/tech flex flex-col items-center p-2 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <tech.icon className={`text-xl sm:text-2xl mb-1 transition-all duration-300 ${tech.color} group-hover/tech:scale-110`} />
                <span className="text-xs font-medium text-gray-300 group-hover/tech:text-white transition-colors duration-300 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div 
        className="relative group"
        {...fadeIn}
      >
        {/* Reduced light effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
        
        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-lg text-green-400" />
            <h3 className="text-lg font-semibold text-white">Education</h3>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 p-3 bg-gray-800/20 hover:bg-gray-800/40 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex-shrink-0 p-2 bg-green-600/20 rounded-lg">
                    <edu.icon className="text-lg text-green-400" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-400 text-xs sm:text-sm font-medium mb-1">
                      {edu.field}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1">
                      {edu.school}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-gray-400 text-xs">
                        {edu.duration}
                      </span>
                      <span className="text-green-400 text-xs font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Additional Skills */}
      <motion.div 
        className="relative group"
        {...fadeIn}
      >
        {/* Reduced light effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
        
        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg">🎯</span>
            <h3 className="text-lg font-semibold text-white">Key Strengths</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Problem Solving', 'Team Leadership', 'UI/UX Design', 'Database Design', 'API Development', 'Code Review'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium border border-purple-600/30 hover:bg-purple-600/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}