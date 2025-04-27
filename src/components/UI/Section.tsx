import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '' 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Generate shimmer particles
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: 10 + Math.random() * 10,
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  // Generate random number of blur lights (2-3)
  const numBlurLights = Math.floor(Math.random() * 2) + 2;
  
  // Generate blur lights with randomized placement
  const blurLights = Array.from({ length: numBlurLights }, (_, i) => ({
    id: i,
    size: 100 + Math.random() * 50, // Size between 100-150px
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    x: 20 + Math.random() * 60, // Random x position (20-80% to keep more centered)
    y: 20 + Math.random() * 60, // Random y position (20-80% to keep more centered)
    color: Math.random() > 0.5 ? 'secondary' : 'accent',
    opacity: 0.15 + Math.random() * 0.1 // Opacity between 15-25%
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 relative overflow-hidden ${className}`}
    >
      {/* Large blur lights */}
      {blurLights.map((light) => (
        <div
          key={`blur-${light.id}`}
          className="absolute rounded-full blur-3xl pointer-events-none animate-blur-drift"
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            left: `${light.x}%`,
            top: `${light.y}%`,
            backgroundColor: `var(--${light.color})`,
            opacity: light.opacity,
            animation: `blurDrift ${light.duration}s infinite ease-in-out`,
            animationDelay: `${light.delay}s`,
          }}
        />
      ))}

      {/* Shimmer particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20 pointer-events-none animate-shimmer"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
            animation: `shimmer ${particle.duration}s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Content container */}
      <div className="container mx-auto px-4 relative">
        <div 
          className={`mb-12 transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>
          )}
          <div className="h-1 w-20 bg-secondary mt-4"></div>
        </div>
        
        <div 
          className={`transform transition-all duration-700 delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;