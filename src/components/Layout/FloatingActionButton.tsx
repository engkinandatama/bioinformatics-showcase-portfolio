import React, { useState } from 'react';
import { ChevronUp, Home, User2, Briefcase, FolderGit2, FileText, Mail } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const targetSection = href.substring(2);
      
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetSection } });
      } else {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { icon: <Home size={20} />, href: '/#hero', label: 'Home' },
    { icon: <User2 size={20} />, href: '/#about', label: 'About' },
    { icon: <Briefcase size={20} />, href: '/#experience', label: 'Experience' },
    { icon: <FolderGit2 size={20} />, href: '/#projects', label: 'Projects' },
    { icon: <FileText size={20} />, href: '/#publications', label: 'Publications' },
    { icon: <Mail size={20} />, href: '/#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-2">
      {/* FAB Menu Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 transition-all">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="p-3 bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 text-black dark:text-white rounded-full backdrop-blur-sm transition-all duration-300"
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="p-3 bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 text-black dark:text-white rounded-full backdrop-blur-sm transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      )}

      {/* Main FAB Button */}
      <button
        onClick={toggleMenu}
        className={`p-4 bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20 text-black dark:text-white rounded-full backdrop-blur-sm transition-all duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label="Menu"
      >
        <ChevronUp 
          size={24} 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
};

export default FloatingActionButton;