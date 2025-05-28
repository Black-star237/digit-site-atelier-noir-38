
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

const ProjectsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { data: projects = [], isLoading } = useProjects();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || projects.length === 0) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [projects]);

  if (isLoading) {
    return (
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
            Nos Réalisations
          </h2>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500"></div>
          </div>
        </div>
      </section>
    );
  }

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
          Nos Réalisations
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-none w-80 bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl shadow-black/50 border border-gray-700/30 hover:shadow-red-500/20"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm rounded-full shadow-lg shadow-red-500/30">
                    {project.category.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h3>
                <p className="text-gray-300 text-sm drop-shadow-sm">{project.description}</p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/portfolio');
                  }}
                  className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
                >
                  Voir le projet →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Voir tous les projets button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/portfolio')}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/30"
          >
            Voir tous nos projets
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
