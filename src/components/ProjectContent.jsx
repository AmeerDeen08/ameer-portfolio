import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './ProjectsData';

export default function ProjectContent() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-6 text-red-500">❌ Project not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.thumbnail} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      
      <p className="text-gray-300 mb-6">{project.shortDescription}</p>

      <h2 className="text-xl font-semibold mb-2">Technologies Used:</h2>
      <ul className="flex gap-2 flex-wrap mb-6">
        {project.technologies.map((tech, i) => (
          <li key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md">{tech}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
