import React, { useState } from 'react';
import Section from '../UI/Section';
import Card from '../UI/Card';
import SkillBadge from '../UI/SkillBadge';
import CurrentActivity from '../UI/CurrentActivity';
import {
  Code2,
  Database,
  FlaskRound as Flask,
  Cpu,
  Cloud,
  Terminal,
  Share2,
  Microscope,
  Brain,
  BookOpen,
  Quote,
} from 'lucide-react';
import { coreFocusAreas, skillCategories } from '../../content/about';
import { aboutSectionContent } from '../../content/about-section';
import { CoreFocus, SkillCategory } from '../../content/types';

type Tab = 'background' | 'skills';

// Icon mapping
const IconMap: { [key: string]: React.ReactNode } = {
  Code2: <Code2 className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Flask: <Flask className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
};

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('background');
  const [hoveredFocus, setHoveredFocus] = useState<number | null>(null);
  const { title, subtitle, tabs, journey, currentActivities, profile } =
    aboutSectionContent;

  return (
    <Section
      id="about"
      title={title}
      subtitle={subtitle}
      className="bg-primary"
    >
      <div className="flex justify-center mb-12">
        <div className="inline-flex space-x-8">
          <button
            onClick={() => setActiveTab('background')}
            className={`relative pb-2 text-xl font-bold transition-colors duration-300 ${
              activeTab === 'background'
                ? 'text-text'
                : 'text-text-secondary hover:text-text/80'
            }`}
          >
            {tabs.background}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'background' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`relative pb-2 text-xl font-bold transition-colors duration-300 ${
              activeTab === 'skills'
                ? 'text-text'
                : 'text-text-secondary hover:text-text/80'
            }`}
          >
            {tabs.skills}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                activeTab === 'skills' ? 'w-full' : 'w-0'
              }`}
            />
          </button>
        </div>
      </div>

      {activeTab === 'background' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-8 space-y-8">
            {/* My Journey Card */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-secondary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{journey.title}</h3>
              </div>
              <div className="space-y-4">
                {journey.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>

            {/* Core Focus Areas */}
            <Card>
              <h3 className="text-xl font-bold mb-4">Core Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {coreFocusAreas.map((focus, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-lg bg-container/50 hover:bg-container transition-all duration-300 border border-border/50"
                    onMouseEnter={() => setHoveredFocus(index)}
                    onMouseLeave={() => setHoveredFocus(null)}
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-secondary/10 rounded-full text-secondary group-hover:scale-110 transition-transform duration-300">
                        {IconMap[focus.icon]}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{focus.title}</h4>
                        <p className="text-text-secondary text-xs">
                          {focus.description}
                        </p>
                      </div>
                    </div>

                    {hoveredFocus === index && focus.achievements && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-container border border-border rounded-lg shadow-lg p-4 z-10">
                        <div className="text-sm">
                          <p className="font-medium mb-2">Key Focus:</p>
                          <ul className="space-y-2">
                            {focus.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-center text-text-secondary"
                              >
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Profile Section */}
          <div className="md:col-span-4 space-y-6">
            <Card className="sticky top-24 bg-container/30 backdrop-blur-sm">
              <div className="relative h-full flex items-center justify-center">
                {/* Profile Image */}
                <div className="relative z-10">
                  <div className="w-64 h-64 md:w-72 md:h-72 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent rounded-full animate-pulse"></div>
                    <img
                      src="/src/images/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-container/50 animate-spin-slow"></div>
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1/3 w-2 h-2 bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: '1s' }}
                  ></div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Quote size={20} className="text-secondary rotate-180 mr-2" />
                  <p className="text-lg font-medium italic">
                    {profile.quote.text}
                  </p>
                  <Quote size={20} className="text-secondary ml-2" />
                </div>
                <p className="text-text-secondary text-sm">
                  — {profile.quote.attribution}
                </p>
              </div>
            </Card>

            {/* Current Activities Card */}
            <Card>
              <h3 className="text-lg font-bold mb-4">
                {currentActivities.title}
              </h3>
              <div className="space-y-2">
                {currentActivities.activities.map((activity, index) => (
                  <CurrentActivity key={index} activity={activity} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} delay={index * 100}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-secondary">{IconMap[category.icon]}</div>
                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    {category.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {category.skills.map((skill, i) => (
                  <SkillBadge key={i} name={skill.name} level={skill.level} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
};

export default AboutSection;
