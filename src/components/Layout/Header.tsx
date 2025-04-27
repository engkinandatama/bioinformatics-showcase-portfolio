import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { navLinks } from '../../content/header';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section if we're on the homepage
      if (location.pathname === '/') {
        const sections = navLinks.map(link => link.href.replace('/#', ''));
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const targetSection = href.substring(2); // Remove '/#'
      
      if (location.pathname !== '/') {
        // If we're not on the homepage, navigate there first
        navigate('/', { state: { scrollTo: targetSection } });
      } else {
        // If we're already on the homepage, just scroll
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetSection = location.state.scrollTo;
      const element = document.getElementById(targetSection);
      if (element) {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetSection);
        }, 100);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const isActive = (href: string) => {
    if (href === '/#hero') {
      return location.pathname === '/' && !location.hash && activeSection === 'hero';
    }
    if (href.startsWith('/#')) {
      const section = href.substring(2);
      return location.pathname === '/' && activeSection === section;
    }
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'py-2 bg-primary/90 backdrop-blur-sm shadow-md' 
        : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-bold text-xl sm:text-2xl"
          onClick={() => handleNavClick('/#hero')}
        >
          <span className="text-secondary">A Code-Driven</span>
          <span className="text-accent"> Biologist</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.href.startsWith('/#') ? (
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-text-secondary hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all ${
                    isActive(link.href) 
                      ? 'text-secondary after:w-full' 
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`text-text-secondary hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all ${
                    isActive(link.href) 
                      ? 'text-secondary after:w-full' 
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={toggleTheme}
            className="p-1 rounded-full bg-container hover:bg-secondary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Theme Toggle */}
        <button
          className="md:hidden p-1 rounded-full bg-container hover:bg-secondary/10 transition-colors"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;