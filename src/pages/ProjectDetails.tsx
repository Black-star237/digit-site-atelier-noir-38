
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Star, Calendar, User, Code } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Données des projets (normalement viendraient d'une API ou d'un store)
  const projects = [
    {
      id: 1,
      title: "E-Commerce Luxe",
      category: "e-commerce",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Site e-commerce haute couture avec animations 3D et paiement sécurisé. Interface élégante avec gestion complète des produits.",
      longDescription: "Ce projet e-commerce révolutionnaire combine l'élégance de la haute couture avec les dernières technologies web. Développé avec React et Node.js, il propose une expérience utilisateur immersive grâce aux animations 3D réalisées avec Three.js. Le système de paiement sécurisé intégré via Stripe garantit des transactions fiables. L'interface administrateur permet une gestion complète des produits, des commandes et des clients.",
      technologies: ["React", "Node.js", "Stripe", "Three.js"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/project",
      featured: true,
      client: "Maison de Couture Parisienne",
      duration: "3 mois",
      year: "2024",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Portfolio Architecte",
      category: "vitrine",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      description: "Portfolio moderne pour architecte avec galerie immersive et présentation de projets en 3D.",
      longDescription: "Portfolio professionnel conçu spécialement pour un cabinet d'architecture. Le site met en valeur les réalisations à travers une galerie immersive et des présentations 3D interactives. L'interface élégante et moderne reflète l'esthétique architecturale du client tout en offrant une navigation intuitive.",
      technologies: ["React", "GSAP", "Three.js", "Tailwind"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/example/project",
      featured: true,
      client: "Cabinet d'Architecture Moderne",
      duration: "2 mois",
      year: "2024",
      images: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
      ]
    }
    // Ajoutez d'autres projets ici...
  ];

  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Button onClick={() => navigate('/portfolio')} variant="outline">
            Retour au portfolio
          </Button>
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
          <div className="mb-8">
            <Button 
              onClick={() => navigate('/portfolio')}
              variant="outline"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au portfolio
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                {project.featured && (
                  <div className="bg-gradient-to-r from-red-500 to-purple-600 rounded-full p-2">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                )}
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700"
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visiter le site web
                  </a>
                </Button>
                
                <Button variant="outline" asChild className="border-gray-700 hover:bg-gray-800">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Voir le code
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">Client</p>
                    <p className="text-white">{project.client}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <div>
                    <p className="text-sm text-gray-400">Durée</p>
                    <p className="text-white">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl shadow-red-500/20"
              />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-600/20 text-red-400 rounded-full border border-red-500/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              À propos du projet
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {project.longDescription}
            </p>
            
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-5 h-5 text-red-400" />
              <h3 className="text-xl font-semibold text-white">Technologies utilisées</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galerie d'images */}
      {project.images && project.images.length > 1 && (
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Galerie du projet
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-red-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              Intéressé par un projet similaire ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble quelque chose d'extraordinaire.
            </p>
            <Button 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-red-500/30"
            >
              Démarrer un Projet
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
