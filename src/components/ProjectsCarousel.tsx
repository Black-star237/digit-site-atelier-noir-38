
import React, { useEffect, useRef } from 'react';

const ProjectsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Luxe",
      category: "Boutique en ligne",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Site e-commerce haute couture avec animations 3D"
    },
    {
      id: 2,
      title: "Portfolio Architecte",
      category: "Site vitrine",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      description: "Portfolio moderne avec galerie immersive"
    },
    {
      id: 3,
      title: "Application SaaS",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      description: "Dashboard analytique avec interface intuitive"
    },
    {
      id: 4,
      title: "Restaurant Gastronomique",
      category: "Site vitrine",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: "Expérience culinaire digitale immersive"
    },
    {
      id: 5,
      title: "Startup Tech",
      category: "Landing page",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      description: "Landing page convertissante avec animations"
    },
    {
      id: 6,
      title: "Cabinet Médical",
      category: "Site professionnel",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "Interface patient moderne et accessible"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
          Nos Réalisations
        </h2>
        
        <div 
          ref={scrollRef}
          className="flex space-x-8 overflow-x-hidden scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="flex-none w-80 bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-purple-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                
                <button className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-200 font-medium">
                  Voir le projet →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
