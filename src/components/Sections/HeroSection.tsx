import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import { ChevronDown, Download, Github, Code, Binary, Database, Dna, FlaskRound as Flask, Brain, Microscope } from 'lucide-react';
import { heroSectionContent } from '../../content/hero-section';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const { roles, description, buttons } = heroSectionContent;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden"
    >
      {/* Abstract background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-secondary blur-3xl top-1/4 -left-48"></div>
        <div className="absolute w-96 h-96 rounded-full bg-accent blur-3xl bottom-1/4 -right-48"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-2xl md:ml-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Hi,<br />
            <span className="text-secondary whitespace-nowrap">I'm Your Name</span>
          </h1>
          
          <div className="h-12 mb-6">
            <p className="text-xl md:text-2xl font-medium text-text-secondary animate-slideUp">
              <span className="text-accent">
                {roles[currentText]}
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fadeIn animation-delay-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-500">
            <Button 
              variant="primary" 
              size="large" 
              href={buttons.explore.href}
              icon={<ChevronDown size={20} />}
            >
              {buttons.explore.text}
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              href={buttons.resume.href}
              icon={<Download size={20} />}
            >
              {buttons.resume.text}
            </Button>
            <Button 
              variant="ghost" 
              size="large" 
              href={buttons.github.href}
              icon={<Github size={20} />}
              newTab={buttons.github.newTab}
            >
              {buttons.github.text}
            </Button>
          </div>
        </div>

        {/* Science & Programming Themed Animation */}
        <div className="hidden md:block relative h-[500px]">
          {/* DNA Helix */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '20s' }}>
            <div className="relative w-64 h-64">
              <Dna size={64} className="absolute text-secondary/60" />
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute inset-0">
            <Code 
              size={32} 
              className="absolute top-[20%] left-[20%] text-accent/70 animate-pulse"
              style={{ animationDelay: '0s' }}
            />
            <Binary 
              size={32} 
              className="absolute top-[30%] right-[30%] text-secondary/70 animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <Database 
              size={32} 
              className="absolute bottom-[30%] left-[30%] text-accent/70 animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <Flask 
              size={32} 
              className="absolute top-[40%] right-[20%] text-secondary/70 animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <Brain 
              size={32} 
              className="absolute bottom-[20%] right-[40%] text-accent/70 animate-pulse"
              style={{ animationDelay: '2s' }}
            />
            <Microscope 
              size={32} 
              className="absolute top-[60%] left-[40%] text-secondary/70 animate-pulse"
              style={{ animationDelay: '2.5s' }}
            />
          </div>

          {/* Connecting Lines */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full border-2 border-secondary/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>
            <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-accent/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-accent">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;