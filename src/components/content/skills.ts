import { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming & Data Tools',
    description: 'Core programming languages and tools for data analysis and manipulation',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 2 },
      { name: 'R', level: 1 },
      { name: 'Git & GitHub', level: 2 },
      { name: 'SQL', level: 2 },
      { name: 'JavaScript', level: 2 },
      { name: 'Data Visualization', level: 2 }
    ]
  },
  {
    name: 'Bioinformatics',
    description: 'Specialized tools and platforms for biological data analysis',
    icon: 'Flask',
    skills: [
      { name: 'AutoDock', level: 2 },
      { name: 'RCSB PDB', level: 3 },
      { name: 'BLAST', level: 2 },
      { name: 'Biopython', level: 1 },
      { name: 'Sequence Analysis', level: 2 },
      { name: 'Molecular Modeling', level: 2 }
    ]
  },
  {
    name: 'Automation & IoT',
    description: 'Hardware and software solutions for laboratory automation',
    icon: 'Cpu',
    skills: [
      { name: 'Arduino', level: 2 },
      { name: 'Raspberry Pi', level: 2 },
      { name: 'Sensor Monitoring', level: 1 },
      { name: 'Lab Automation', level: 2 },
      { name: 'Data Logging', level: 2 }
    ]
  },
  {
    name: 'Cloud & DevOps',
    description: 'Cloud platforms and development operations tools',
    icon: 'Cloud',
    skills: [
      { name: 'Linux (Ubuntu)', level: 2 },
      { name: 'Docker', level: 2 },
      { name: 'CI/CD', level: 1 },
      { name: 'AWS', level: 1 },
      { name: 'Version Control', level: 2 }
    ]
  },
  {
    name: 'Data Management',
    description: 'Database systems and data organization tools',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 2 },
      { name: 'MongoDB', level: 1 },
      { name: 'Data Modeling', level: 2 },
      { name: 'ETL Pipelines', level: 2 }
    ]
  },
  {
    name: 'Development Tools',
    description: 'Essential tools and environments for software development',
    icon: 'Terminal',
    skills: [
      { name: 'VS Code', level: 3 },
      { name: 'Jupyter Notebook', level: 3 },
      { name: 'Git Flow', level: 2 },
      { name: 'Shell Scripting', level: 2 }
    ]
  }
];