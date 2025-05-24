
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      className={`relative group bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer border border-gray-700/30 hover:shadow-2xl ${
        featured ? 'hover:shadow-red-500/20 transform hover:scale-105' : 'hover:shadow-purple-500/20 hover:scale-102'
      }`}
      onClick={handleCardClick}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-full p-2 shadow-lg">
            <Star className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-4">
            <a
              href={project.demoUrl}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
            <a
              href={project.githubUrl}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-200">
            {project.title}
          </h3>
          <span className="px-3 py-1 bg-gradient-to-r from-red-500/20 to-purple-600/20 text-red-400 text-sm rounded-full border border-red-500/30">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <button 
            onClick={handleDetailsClick}
            className="text-red-400 hover:text-red-300 transition-colors duration-200 font-medium text-sm"
          >
            Voir les détails →
          </button>
          <div className="flex space-x-2">
            <a
              href={project.demoUrl}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
