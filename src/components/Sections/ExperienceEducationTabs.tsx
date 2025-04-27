import React, { useState } from 'react';
import Section from '../UI/Section';
import { Award, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { experiences } from '../../content/experience';
import { educationHistory } from '../../content/education';
import { certifications } from '../../content/certifications';
import { experienceEducationContent } from '../../content/experience-education-section';
import { Experience, Education, Certification } from '../../content/types';

type Tab = 'experience' | 'education' | 'certifications';

const ExperienceEducationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('experience');
  const { title, tabs, labels } = experienceEducationContent;

  return (
    <Section
      id="experience"
      title={title}
      className="bg-background"
    >
      <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-4 md:pb-0">
        <div className="inline-flex space-x-4 md:space-x-8 px-4 md:px-0">
          <button
            onClick={() => setActiveTab('experience')}
            className={`relative pb-2 text-base md:text-xl font-bold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'experience' ? 'text-text' : 'text-text-secondary hover:text-text/80'
            }`}
          >
            <Briefcase size={18} className="hidden md:block" />
            {tabs.experience.name}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'experience' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`relative pb-2 text-base md:text-xl font-bold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'education' ? 'text-text' : 'text-text-secondary hover:text-text/80'
            }`}
          >
            <GraduationCap size={18} className="hidden md:block" />
            {tabs.education.name}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'education' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`relative pb-2 text-base md:text-xl font-bold transition-colors duration-300 flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'certifications' ? 'text-text' : 'text-text-secondary hover:text-text/80'
            }`}
          >
            <Award size={18} className="hidden md:block" />
            {tabs.certifications.name}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'certifications' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="max-h-[600px] overflow-y-auto content-section px-4 md:px-0">
        {activeTab === 'experience' && (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-border"></div>
            
            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-10 h-10 rounded-full border-4 border-secondary bg-background flex items-center justify-center">
                    <Briefcase size={16} className="text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="bg-container p-4 md:p-6 rounded-lg border border-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-text">{exp.title}</h3>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        {exp.description.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2"></div>
                            <p className="text-text-secondary text-sm md:text-base">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-border"></div>

            {/* Education items */}
            <div className="space-y-8">
              {educationHistory.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-10 h-10 rounded-full border-4 border-secondary bg-background flex items-center justify-center">
                    <GraduationCap size={16} className="text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="bg-container p-4 md:p-6 rounded-lg border border-border">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-text">{edu.degree}</h3>
                        <p className="text-secondary font-medium">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    {edu.thesis && (
                      <div className="mb-6">
                        <p className="text-sm font-semibold mb-2">{labels.thesis}</p>
                        <p className="text-text-secondary bg-background/50 p-3 rounded-lg text-sm md:text-base">
                          {edu.thesis}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-semibold mb-3">{labels.coursework}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.coursework.map((course, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-background/50 p-2 rounded-lg"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                            <span className="text-text-secondary text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-container p-4 md:p-6 rounded-lg border border-border flex flex-col h-full"
              >
                <div className="mb-4">
                  <Award className="text-secondary" size={32} />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-text-secondary text-sm mb-3">{cert.issuer}</p>
                
                <div className="flex items-center text-text-secondary text-sm mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto text-secondary hover:underline text-sm inline-flex items-center gap-1"
                  >
                    {labels.viewCertificate}
                    <Award size={14} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ExperienceEducationTabs;