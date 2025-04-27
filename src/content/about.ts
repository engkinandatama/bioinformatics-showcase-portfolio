import { SkillCategory, CoreFocus } from './types';

export const coreFocusAreas: CoreFocus[] = [
  {
    title: 'Bioinformatics',
    icon: 'Flask',
    description: 'Analyzing genomic data and molecular structures',
    achievements: [
      'Next-gen sequencing analysis',
      'Protein structure prediction',
      'Variant identification'
    ]
  },
  {
    title: 'Programming',
    icon: 'Code2',
    description: 'Building robust scientific software solutions',
    achievements: [
      'Pipeline automation',
      'Research tools',
      'Data processing'
    ]
  },
  {
    title: 'Data Analysis',
    icon: 'Database',
    description: 'Uncovering insights from complex datasets',
    achievements: [
      'Statistical modeling',
      'Machine learning',
      'Data visualization'
    ]
  },
  {
    title: 'Cloud Computing',
    icon: 'Cloud',
    description: 'Scaling analysis with cloud infrastructure',
    achievements: [
      'Distributed computing',
      'Cloud pipelines',
      'Resource optimization'
    ]
  },
  {
    title: 'Research',
    icon: 'Microscope',
    description: 'Advancing scientific understanding',
    achievements: [
      'Experimental design',
      'Literature review',
      'Publication writing'
    ]
  },
  {
    title: 'AI/ML',
    icon: 'Brain',
    description: 'Applying AI to biological challenges',
    achievements: [
      'Deep learning',
      'Predictive modeling',
      'Pattern recognition'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    description: 'Core languages for scientific computing and web development',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 4 },
      { name: 'R', level: 3 },
      { name: 'JavaScript/TypeScript', level: 3 },
      { name: 'SQL', level: 3 },
      { name: 'Bash/Shell', level: 3 }
    ]
  },
  {
    name: 'Bioinformatics Tools',
    description: 'Specialized software for biological data analysis',
    icon: 'Flask',
    skills: [
      { name: 'Biopython', level: 4 },
      { name: 'BLAST', level: 4 },
      { name: 'BWA', level: 3 },
      { name: 'GATK', level: 3 },
      { name: 'PyMOL', level: 3 }
    ]
  },
  {
    name: 'Data Science',
    description: 'Tools and libraries for data analysis and visualization',
    icon: 'Database',
    skills: [
      { name: 'Pandas', level: 4 },
      { name: 'NumPy', level: 4 },
      { name: 'Scikit-learn', level: 3 },
      { name: 'TensorFlow', level: 3 },
      { name: 'Matplotlib/Seaborn', level: 3 }
    ]
  },
  {
    name: 'Cloud & DevOps',
    description: 'Cloud platforms and development tools',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'Git', level: 4 },
      { name: 'CI/CD', level: 3 },
      { name: 'Linux', level: 3 }
    ]
  },
  {
    name: 'Research Skills',
    description: 'Scientific research and analysis capabilities',
    icon: 'Microscope',
    skills: [
      { name: 'Experimental Design', level: 3 },
      { name: 'Data Analysis', level: 4 },
      { name: 'Scientific Writing', level: 3 },
      { name: 'Literature Review', level: 4 }
    ]
  },
  {
    name: 'Soft Skills',
    description: 'Professional and interpersonal abilities',
    icon: 'Share2',
    skills: [
      { name: 'Project Management', level: 3 },
      { name: 'Team Collaboration', level: 4 },
      { name: 'Technical Writing', level: 3 },
      { name: 'Problem Solving', level: 4 }
    ]
  }
];