import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../../content/contact';
import { footerContent } from '../../content/footer';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { brand, navigation } = footerContent;

  return (
    <footer className="relative bg-container/50 backdrop-blur-sm border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand and Description */}
          <div className="flex-shrink-0">
            <h3 className="font-bold text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              {brand.name}
            </h3>
            <p className="text-text-secondary text-sm max-w-xs">
              {brand.description}
            </p>
          </div>

          {/* Navigation and Contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Quick Links */}
            <div className="flex gap-8">
              <div>
                <h4 className="font-medium text-sm uppercase tracking-wider text-text-secondary mb-3">
                  Explore
                </h4>
                <div className="flex flex-col gap-2">
                  {navigation.explore.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href} 
                      className="text-sm text-text-secondary hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-sm uppercase tracking-wider text-text-secondary mb-3">
                Contact
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <MapPin size={14} />
                  <span>{contactInfo.location}</span>
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-text-secondary hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <Mail size={14} />
                  {contactInfo.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 mt-4">
                <a 
                  href={contactInfo.socialLinks.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                </a>
                <a 
                  href={contactInfo.socialLinks.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="p-2 bg-container hover:bg-secondary/10 rounded-lg text-text-secondary hover:text-secondary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-text-secondary/80 text-xs text-center">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;