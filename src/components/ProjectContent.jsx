import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaClock, FaCheckCircle, FaStar, FaCalendarAlt, FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import projects from './ProjectsData';

export default function ProjectContent() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const getStatusBadge = () => {
    switch (project.status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium border border-green-600/30">
            <FaCheckCircle /> Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30">
            <FaClock /> In Progress {project.progress ? `(${project.progress}%)` : ''}
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
            <FaLightbulb /> Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* Back */}
          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </motion.button>

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <img src={project.thumbnail} alt={project.title} className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
              </div>
              <div className="lg:w-1/2">
                {project.featured && (
                  <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-2">
                    <FaStar /> Featured Project
                  </div>
                )}
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {getStatusBadge()}
                  {project.completionDate && <div className="flex items-center gap-2 text-gray-400 text-sm"><FaCalendarAlt /> Completed: {project.completionDate}</div>}
                  {project.expectedCompletion && <div className="flex items-center gap-2 text-gray-400 text-sm"><FaCalendarAlt /> Expected: {project.expectedCompletion}</div>}
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><FaCode className="text-blue-400" /> Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-105">
                      <FaGithub /> View Code
                    </a>
                  ) : <div className="px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg cursor-not-allowed flex items-center gap-2"><FaGithub /> Code Not Available</div>}
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : <div className="px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg cursor-not-allowed flex items-center gap-2"><FaExternalLinkAlt /> Demo Not Available</div>}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-6">About This Project</h2>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
