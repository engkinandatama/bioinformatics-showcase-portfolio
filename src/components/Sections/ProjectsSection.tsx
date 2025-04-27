import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../UI/Section';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '../../content/projects';
import { projectsSectionContent } from '../../content/projects-section';

const categories = [projectsSectionContent.categories.all, ...Array.from(new Set(projects.map(project => project.category)))];

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(projectsSectionContent.categories.all);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isFilterMouseOver, setIsFilterMouseOver] = useState(false);
  const filterContainerRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const filteredProjects = projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(project => selectedCategory === projectsSectionContent.categories.all || project.category === selectedCategory);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMouseOver && projectsContainerRef.current) {
        e.preventDefault();
        const scrollAmount = e.deltaY;
        projectsContainerRef.current.scrollLeft += scrollAmount;
      }
      
      if (isFilterMouseOver && filterContainerRef.current) {
        e.preventDefault();
        const scrollAmount = e.deltaY;
        filterContainerRef.current.scrollLeft += scrollAmount;
        checkScrollButtons();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMouseOver, isFilterMouseOver]);

  const checkScrollButtons = () => {
    if (filterContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = filterContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scrollFilters = (direction: 'left' | 'right') => {
    if (filterContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = filterContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      
      filterContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update arrows after scroll animation
      setTimeout(checkScrollButtons, 300);
    }
  };

  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <Section 
      id="projects" 
      title={projectsSectionContent.title}
      subtitle={projectsSectionContent.subtitle}
      className="bg-primary"
    >
      <div className="relative mb-8 flex items-center">
        <button
          onClick={() => scrollFilters('left')}
          className={`flex-shrink-0 p-2 rounded-full transition-opacity duration-300 ${
            showLeftArrow 
              ? 'bg-container hover:bg-secondary/10 text-text-secondary opacity-100' 
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label={projectsSectionContent.ariaLabels.scrollLeft}
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={filterContainerRef}
          onMouseEnter={() => setIsFilterMouseOver(true)}
          onMouseLeave={() => setIsFilterMouseOver(false)}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 mx-2"
          onScroll={checkScrollButtons}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-container hover:bg-secondary/10 text-text-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollFilters('right')}
          className={`flex-shrink-0 p-2 rounded-full transition-opacity duration-300 ${
            showRightArrow 
              ? 'bg-container hover:bg-secondary/10 text-text-secondary opacity-100' 
              : 'opacity-0 pointer-events-none'
          }`}
          aria-label={projectsSectionContent.ariaLabels.scrollRight}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div 
        ref={projectsContainerRef}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar"
      >
        {filteredProjects.map((project, index) => (
          <Card 
            key={index} 
            className="min-w-[300px] max-w-[300px] flex flex-col"
            delay={index * 150}
          >
            <Link to={`/project/${getProjectSlug(project.title)}`}>
              {project.image && (
                <div className="h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              )}
              
              <h3 className="text-lg font-bold mb-2 hover:text-secondary transition-colors">
                {project.title}
              </h3>
            </Link>
            
            <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow">
              {project.description}
            </p>
            
            <div>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-container/50 rounded-full border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-container/50 rounded-full border border-border/50">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                {project.github && (
                  <Button 
                    variant="outline" 
                    size="small" 
                    href={project.github}
                    icon={<Github size={16} />}
                    newTab={true}
                  >
                    {projectsSectionContent.buttons.code}
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    variant="primary" 
                    size="small" 
                    href={project.demo}
                    icon={<ExternalLink size={16} />}
                    newTab={true}
                  >
                    {projectsSectionContent.buttons.demo}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;