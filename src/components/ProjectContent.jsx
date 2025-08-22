import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaClock, 
  FaCheckCircle, 
  FaStar,
  FaCalendarAlt,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

const allProjects = [
  {
    id: 'project-1',
    title: 'Personal Portfolio Website',
    description: `This portfolio website represents a comprehensive showcase of my development skills and professional journey. Built with modern React and enhanced with Framer Motion animations, it demonstrates my ability to create engaging, responsive user experiences.

The project features a sophisticated design system with gradient effects, glassmorphism elements, and smooth scroll navigation. The implementation includes advanced React patterns, custom hooks, and optimized performance techniques.

Key highlights include automatic scroll spy navigation, mobile-responsive design, and an integrated contact system. The codebase follows modern development practices with component composition, separation of concerns, and accessible design principles.`,
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'React Router'],
    github: 'https://github.com/ameerdeen/portfolio',
    live: 'https://ameerdeen-portfolio.vercel.app',
    thumbnail: 'https://picsum.photos/seed/p1/800/400',
    status: 'completed',
    featured: true,
    completionDate: 'December 2024',
    challenges: [
      'Implementing smooth scroll spy navigation across different sections',
      'Creating responsive animations that work across all devices',
      'Optimizing performance while maintaining rich visual effects'
    ],
    learnings: [
      'Advanced Framer Motion animation techniques',
      'Modern CSS techniques including glassmorphism and backdrop filters',
      'React performance optimization strategies'
    ],
    features: [
      'Responsive design with mobile-first approach',
      'Smooth scroll navigation with active section detection',
      'Animated timeline for experience section',
      'Interactive project showcase with filtering',
      'Contact form with validation'
    ]
  },
  {
    id: 'project-2',
    title: 'E-commerce Platform',
    description: `A comprehensive full-stack e-commerce solution currently under development. This project aims to create a modern, scalable online shopping platform with advanced features for both customers and administrators.

The platform will include user authentication, product catalog management, shopping cart functionality, secure payment processing through Stripe, and a comprehensive admin dashboard for inventory and order management.

**Current Progress:** The project is 75% complete with core functionality implemented. Currently working on payment integration and admin dashboard features. The frontend components and user authentication system are fully functional.

**Upcoming Features:** Payment gateway integration, order tracking system, email notifications, and mobile app companion.`,
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS', 'Node.js', 'JWT'],
    github: '',
    live: '',
    thumbnail: 'https://picsum.photos/seed/p2/800/400',
    status: 'in-progress',
    featured: false,
    expectedCompletion: 'March 2025',
    progress: 75,
    challenges: [
      'Implementing secure payment processing with Stripe',
      'Designing scalable database schema for products and orders',
      'Creating real-time inventory management system'
    ],
    completedFeatures: [
      'User registration and authentication system',
      'Product catalog with search and filtering',
      'Shopping cart functionality',
      'Basic admin panel for product management',
      'Responsive design implementation'
    ],
    upcomingFeatures: [
      'Stripe payment integration',
      'Order tracking and management',
      'Email notification system',
      'Advanced admin analytics dashboard',
      'Mobile app development'
    ]
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    description: `A comprehensive task management application designed for teams and individuals to organize, track, and collaborate on projects effectively. Built with modern web technologies to provide real-time collaboration features.

The application features a clean, intuitive interface with drag-and-drop functionality, real-time updates using Socket.io, and comprehensive project management tools. Users can create projects, assign tasks, set deadlines, and track progress through various project views.

The backend is built with Node.js and PostgreSQL, providing a robust and scalable foundation. The application includes user authentication, role-based permissions, and real-time notifications for team collaboration.`,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Express', 'JWT'],
    github: 'https://github.com/ameerdeen/task-manager',
    live: 'https://task-manager-ad.netlify.app',
    thumbnail: 'https://picsum.photos/seed/p3/800/400',
    status: 'completed',
    featured: true,
    completionDate: 'November 2024',
    challenges: [
      'Implementing real-time collaboration features',
      'Designing efficient database queries for complex task relationships',
      'Creating intuitive drag-and-drop interfaces'
    ],
    learnings: [
      'WebSocket implementation for real-time features',
      'PostgreSQL optimization techniques',
      'Advanced React state management patterns'
    ],
    features: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task management',
      'Project timeline and Gantt chart views',
      'Team member role management',
      'File attachment support',
      'Email notifications and reminders'
    ]
  },
  {
    id: 'project-4',
    title: 'AI Chat Assistant',
    description: `An intelligent chat assistant powered by artificial intelligence, designed to provide helpful responses and maintain context across conversations. This project is in the planning phase with development scheduled to begin in April 2025.

The application will leverage OpenAI's GPT models to create a sophisticated conversational AI that can understand context, maintain conversation history, and provide intelligent responses across various domains.

**Planned Features:** The system will include custom knowledge base integration, conversation history, user preference learning, and multi-language support. The backend will be built with Python and FastAPI for high performance and scalability.

**Technical Approach:** The project will implement vector embeddings for knowledge retrieval, conversation memory management, and a responsive React frontend for seamless user interaction.`,
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL', 'Redis'],
    github: '',
    live: '',
    thumbnail: 'https://picsum.photos/seed/p4/800/400',
    status: 'planned',
    featured: false,
    expectedStart: 'April 2025',
    plannedFeatures: [
      'Advanced natural language understanding',
      'Custom knowledge base integration',
      'Conversation memory and context retention',
      'Multi-language support',
      'Voice input and output capabilities',
      'Integration with external APIs and services'
    ],
    technicalGoals: [
      'Implement efficient vector similarity search',
      'Create scalable conversation management system',
      'Develop real-time response streaming',
      'Build comprehensive admin dashboard',
      'Implement user analytics and feedback system'
    ]
  },
];

export default function ProjectContent() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.id === projectId);

  // SCROLL TO TOP WHEN COMPONENT MOUNTS - FIX FOR ISSUE #4
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
            <FaCheckCircle />
            Completed
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-600/30">
            <FaClock />
            In Progress ({project.progress}%)
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
            <FaLightbulb />
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Back Button */}
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

          {/* Project Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="relative w-full h-64 lg:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {project.featured && (
                      <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium mb-2">
                        <FaStar />
                        Featured Project
                      </div>
                    )}
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h1>
                  </div>
                </div>

                {/* Status and Date */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {getStatusBadge()}
                  
                  {project.completionDate && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt />
                      Completed: {project.completionDate}
                    </div>
                  )}
                  
                  {project.expectedCompletion && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt />
                      Expected: {project.expectedCompletion}
                    </div>
                  )}
                  
                  {project.expectedStart && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt />
                      Planned Start: {project.expectedStart}
                    </div>
                  )}
                </div>

                {/* Progress Bar for in-progress projects */}
                {project.status === 'in-progress' && project.progress && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
                      <span>Project Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <FaCode className="text-blue-400" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg cursor-not-allowed">
                      <FaGithub />
                      Code Not Available
                    </div>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg cursor-not-allowed">
                      <FaExternalLinkAlt />
                      Demo Not Available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">About This Project</h2>
            <div className="prose prose-invert max-w-none">
              {project.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Project Features/Sections Based on Status */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Completed Project Features */}
            {project.status === 'completed' && (
              <>
                {project.features && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaRocket className="text-green-400" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {project.challenges && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-yellow-400" />
                      Challenges & Solutions
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            )}

            {/* In-Progress Project Features */}
            {project.status === 'in-progress' && (
              <>
                {project.completedFeatures && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" />
                      Completed Features
                    </h3>
                    <ul className="space-y-2">
                      {project.completedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {project.upcomingFeatures && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaClock className="text-yellow-400" />
                      Upcoming Features
                    </h3>
                    <ul className="space-y-2">
                      {project.upcomingFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaClock className="text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            )}

            {/* Planned Project Features */}
            {project.status === 'planned' && (
              <>
                {project.plannedFeatures && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaLightbulb className="text-blue-400" />
                      Planned Features
                    </h3>
                    <ul className="space-y-2">
                      {project.plannedFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {project.technicalGoals && (
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaCode className="text-purple-400" />
                      Technical Goals
                    </h3>
                    <ul className="space-y-2">
                      {project.technicalGoals.map((goal, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </>
            )}
          </div>

          {/* Learnings Section (for completed projects) */}
          {project.status === 'completed' && project.learnings && (
            <motion.div
              className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaUsers className="text-blue-400" />
                Key Learnings
              </h3>
              <ul className="space-y-2">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}