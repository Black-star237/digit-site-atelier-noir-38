
import React, { useState } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Luxe",
      category: "e-commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Site e-commerce haute couture avec animations 3D et paiement sécurisé. Interface élégante avec gestion complète des produits.",
      technologies: ["React", "Node.js", "Stripe", "Three.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Architecte",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      description: "Portfolio moderne pour architecte avec galerie immersive et présentation de projets en 3D.",
      technologies: ["React", "GSAP", "Three.js", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      category: "application",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      description: "Application SaaS avec dashboard analytique, graphiques interactifs et gestion d'équipe.",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Restaurant Gastronomique",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: "Site vitrine pour restaurant avec réservation en ligne et menu interactif.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Landing Page Startup",
      category: "landing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      description: "Landing page convertissante pour startup tech avec animations fluides et optimisation SEO.",
      technologies: ["React", "Framer Motion", "Tailwind", "Vercel"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Plateforme E-learning",
      category: "application",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      description: "Plateforme de formation en ligne avec système de progression et certification.",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Application Mobile Banking",
      category: "application",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      description: "Interface web pour application bancaire mobile avec sécurité renforcée.",
      technologies: ["React", "TypeScript", "Redux", "Node.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 8,
      title: "Blog Tech Moderne",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      description: "Blog technologique avec système de commentaires et newsletter intégrée.",
      technologies: ["React", "Gatsby", "GraphQL", "Netlify"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'e-commerce', label: 'E-commerce' },
    { id: 'vitrine', label: 'Sites vitrine' },
    { id: 'application', label: 'Applications' },
    { id: 'landing', label: 'Landing pages' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

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

      {/* Filters and All Projects */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Tous nos Projets
          </h2>
          
          <ProjectFilters 
            categories={categories}
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
