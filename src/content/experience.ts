import { Experience } from './types';

export const experiences: Experience[] = [
  {
    title: 'Backend Developer',
    company: 'FarmBot.io',
    period: '2023-2024',
    description: [
      'Developed APIs to control automated robotic farming arms',
      'Worked on scheduling logic for watering and planting tasks',
      'Optimized database queries for real-time farm analytics',
      'Wrote documentation for public developer API'
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker', 'XXX']
  },
  {
    title: 'IoT Engineer',
    company: 'AgriSense Solutions',
    period: '2023',
    description: [
      'Designed and deployed low-cost soil moisture sensors',
      'Integrated real-time monitoring system with cloud database',
      'Configured MQTT protocols for remote device communication',
      'Led testing of field-deployed sensor networks'
    ],
    technologies: ['Arduino', 'MQTT', 'Node-RED', 'AWS IoT Core']
  },
  {
    title: 'Research Assistant',
    company: 'XYZ University',
    period: '2022-2023',
    description: [
      'Conducted protein-protein docking studies using AutoDock',
      'Analyzed genomic datasets using Python and R',
      'Collaborated with a team of researchers on a project investigating protein-ligand interactions',
      'Contributed to a publication on computational methods in molecular biology'
    ],
    technologies: ['AutoDock', 'Python', 'R', 'Genomic Analysis']
  },
  {
    title: 'Junior Data Analyst',
    company: 'GreenGrow Analytics',
    period: '2022-2023',
    description: [
      'Analyzed crop yield data to optimize vertical farming systems',
      'Built interactive dashboards for monitoring plant growth metrics',
      'Collaborated with agronomists to interpret sensor data',
      'Cleaned and processed large-scale environmental datasets'
    ],
    technologies: ['Python', 'Pandas', 'Plotly', 'SQL']
  },
  {
    title: 'Research Assistant',
    company: 'Institute of Precision Agriculture',
    period: '2021-2022',
    description: [
      'Contributed to a research paper on AI-based pest detection',
      'Labeled datasets from smart farm cameras for model training',
      'Ran comparative analysis on classical vs deep learning models',
      'Presented results in academic symposium on AgriTech'
    ],
    technologies: ['Python', 'PyTorch', 'LabelImg', 'NumPy']
  },
  {
    title: 'Machine Learning Intern',
    company: 'NeuronTech AI',
    period: '2022',
    description: [
      'Trained classification models on biomedical image datasets',
      'Improved model accuracy by applying data augmentation techniques',
      'Built a Flask app to demo model predictions to stakeholders',
      'Maintained model versioning using MLflow'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'Flask', 'MLflow']
  },
  {
    title: 'Software Engineering Intern',
    company: 'BioSys Labs',
    period: '2021',
    description: [
      'Assisted in building simulation tools for protein folding analysis',
      'Developed RESTful APIs for accessing genomics data',
      'Wrote unit tests for bioinformatics software modules',
      'Participated in weekly research code reviews'
    ],
    technologies: ['Python', 'Flask', 'Biopython', 'PostgreSQL']
  },
  {
    title: 'Intern',
    company: 'ABC Tech',
    period: '2021',
    description: [
      'Developed automation scripts for IoT devices using Raspberry Pi',
      'Created data visualization dashboards for environmental sensors',
      'Implemented a machine learning model for predicting sensor failures',
      'Documented code and created user guides for the team'
    ],
    technologies: ['Raspberry Pi', 'Python', 'IoT', 'Data Visualization']
  },
  {
    title: 'Teaching Assistant',
    company: 'XYZ University',
    period: '2020-2021',
    description: [
      'Assisted in teaching Computational Biology and Data Structures courses',
      'Held weekly coding labs and problem-solving sessions',
      'Reviewed student assignments and provided detailed feedback',
      'Developed grading scripts for automated evaluation'
    ],
    technologies: ['Python', 'Jupyter Notebook', 'Git']
  }
];