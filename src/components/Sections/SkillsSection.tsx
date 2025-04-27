import React from 'react';
import Section from '../UI/Section';
import Card from '../UI/Card';
import SkillBadge from '../UI/SkillBadge';
import { skillCategories } from '../../content/skills';
import { skillsSectionContent } from '../../content/skills-section';

const SkillsSection: React.FC = () => {
  const { title, subtitle } = skillsSectionContent;

  return (
    <Section 
      id="skills" 
      title={title}
      subtitle={subtitle}
      className="bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} delay={index * 100}>
            <h3 className="text-xl font-bold mb-4 text-secondary">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <SkillBadge 
                  key={i} 
                  name={skill.name} 
                  level={skill.level}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;