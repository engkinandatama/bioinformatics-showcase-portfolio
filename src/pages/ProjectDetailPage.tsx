import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import { projects } from '../content/projects';
import Button from '../components/UI/Button';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  
  // Find project by slug
  const project = projects.find(p => 
    p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link 
            to="/#projects" 
            className="text-secondary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/#projects" 
          className="text-text-secondary hover:text-text transition-colors inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {project.image && (
          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <div className="flex gap-2">
              {project.github && (
                <Button 
                  variant="outline" 
                  size="small" 
                  href={project.github}
                  icon={<Github size={18} />}
                >
                  View Code
                </Button>
              )}
              {project.demo && (
                <Button 
                  variant="primary" 
                  size="small" 
                  href={project.demo}
                  icon={<ExternalLink size={18} />}
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-text-secondary">
              <Calendar size={18} />
              <span>{new Date(project.date).toLocaleDateString('en-US', { 
                month: 'long',
                year: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary">
              <Tag size={18} />
              <span>{project.category}</span>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-text-secondary">{project.description}</p>
            
            {/* Additional project details could be added here */}
            <h2 className="text-xl font-bold mt-8 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-container rounded-full text-text-secondary text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;