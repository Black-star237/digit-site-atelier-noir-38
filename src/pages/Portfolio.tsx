
import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import Footer from '../components/Footer';
import { useProjects } from '../hooks/useProjects';
import { useCategories } from '../hooks/useCategories';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { data: projects = [], isLoading: projectsLoading } = useProjects();
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();

  // Transform categories for the filter component
  const filterCategories = [
    { id: 'all', label: 'Tous les projets' },
    ...categories.map(cat => ({ id: cat.name, label: cat.label }))
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category.name === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  if (projectsLoading || categoriesLoading) {
    return (
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <AnimatedBackground />
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">Chargement des projets...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-600 to-red-500 bg-clip-text text-transparent animate-fade-in drop-shadow-2xl">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in drop-shadow-lg">
              Découvrez nos créations web exceptionnelles, chaque projet raconte une histoire unique d'innovation et de créativité.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Projets Vedettes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and All Projects */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Tous nos Projets
          </h2>
          
          <ProjectFilters 
            categories={filterCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Prêt à créer votre projet ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transformons vos idées en réalité digitale. Contactez-nous pour discuter de votre prochain projet web.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/30">
              Démarrer un Projet
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
