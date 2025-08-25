import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import projects from './ProjectsData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} className="relative group" variants={itemVariants}>
          <Link to={`/project/${project.id}`} className="block relative">
            {/* Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 group-hover:transform group-hover:scale-105 cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.status === 'in-progress' && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-600/30 backdrop-blur-sm">
                      <FaClock className="text-xs" />
                      In Progress
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.shortDescription}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded-md text-xs font-medium border border-gray-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-all duration-300 hover:scale-105">
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-500 text-sm rounded-lg cursor-not-allowed">
                      <FaGithub /> GitHub
                    </div>
                  )}

                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm rounded-lg transition-all duration-300 hover:scale-105">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-500 text-sm rounded-lg cursor-not-allowed">
                      <FaExternalLinkAlt /> Live Demo
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
