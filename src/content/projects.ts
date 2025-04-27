import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Protein Docking Simulation Tool',
    description: 'Developed a Python-based script to automate protein-ligand docking using AutoDock, streamlining the research workflow and increasing efficiency by 40%.',
    technologies: ['Python', 'AutoDock', 'Molecular Visualization', 'Data Analysis'],
    github: 'https://github.com/example/protein-docking', 
    newTab: true,
    image: 'https://images.pexels.com/photos/7947772/pexels-photo-7947772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'XXX',
    date: '2024-02'
  },
  {
    title: 'IoT-Based Environmental Monitoring System',
    description: 'Designed a Raspberry Pi-based system to monitor temperature and humidity using sensors, with real-time data visualization and alert capabilities.',
    technologies: ['Raspberry Pi', 'Python', 'IoT', 'Data Visualization'],
    github: 'https://github.com/example/iot-monitor',
    demo: 'https://example.com/iot-demo',
    newTab: true,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT',
    date: '2024-01'
  },
  {
    title: 'Genomic Data Analysis Pipeline',
    description: 'Created a pipeline for analyzing genomic data, including sequence alignment, variant calling, and statistical analysis of results.',
    technologies: ['R', 'Bioconductor', 'Statistical Analysis', 'Genomics'],
    github: 'https://github.com/example/genomic-pipeline',
    image: 'https://images.pexels.com/photos/7005920/pexels-photo-7005920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Biology',
    date: '2023-12'
  },
  {
    title: 'Laboratory Inventory Management System',
    description: 'Developed a web application to track laboratory reagents, equipment, and samples, improving laboratory organization and reducing waste.',
    technologies: ['JavaScript', 'HTML/CSS', 'Database Design', 'UI/UX'],
    github: 'https://github.com/example/lab-inventory',
    demo: 'https://example.com/inventory-demo',
    image: 'https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Programming',
    date: '2023-11'
  },
  {
    title: 'Laboratory Inventory Management System',
    description: 'Developed a web application to track laboratory reagents, equipment, and samples, improving laboratory organization and reducing waste.',
    technologies: ['JavaScript', 'HTML/CSS', 'Database Design', 'UI/UX'],
    github: 'https://github.com/example/lab-inventory',
    demo: 'https://example.com/inventory-demo',
    image: 'https://images.pexels.com/photos/8325710/pexels-photo-8325710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Programming',
    date: '2023-11'
  },
  {
    title: 'Smart Greenhouse Controller',
    description: 'Created an IoT-based controller to manage temperature, humidity, and light levels inside a greenhouse using real-time sensor data.',
    technologies: ['Arduino', 'Python', 'IoT', 'MQTT'],
    github: 'https://github.com/example/smart-greenhouse',
    demo: 'https://example.com/greenhouse-demo',
    image: 'https://images.pexels.com/photos/6044710/pexels-photo-6044710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT',
    date: '2024-02'
  },
  {
    title: 'Protein Structure Visualizer',
    description: 'Built a tool to visualize and analyze 3D protein structures from PDB files, helping researchers in molecular biology.',
    technologies: ['Python', 'PyMOL API', 'BioPython', 'OpenGL'],
    github: 'https://github.com/example/protein-visualizer',
    demo: 'https://example.com/protein-viewer',
    image: 'https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Science',
    date: '2023-08'
  },
  {
    title: 'Vertical Farm Monitoring Dashboard',
    description: 'Designed a web dashboard that displays live data from sensors deployed in a vertical farming setup for environmental monitoring.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/example/vertical-farm-dashboard',
    demo: 'https://example.com/farm-dashboard',
    image: 'https://images.pexels.com/photos/5857533/pexels-photo-5857533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AgriTech',
    date: '2024-01'
  },
  {
    title: 'Biomedical Image Classifier',
    description: 'Implemented a deep learning model to classify microscopic biomedical images for diagnostic support in laboratories.',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
    github: 'https://github.com/example/biomed-classifier',
    demo: 'https://example.com/biomed-classifier',
    image: 'https://images.pexels.com/photos/6811334/pexels-photo-6811334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI',
    date: '2023-07'
  },
  {
    title: 'DNA Sequence Analyzer',
    description: 'Developed a web app for uploading and analyzing DNA sequences, featuring GC content calculation and motif searching.',
    technologies: ['Flask', 'JavaScript', 'BioPython', 'Bootstrap'],
    github: 'https://github.com/example/dna-analyzer',
    demo: 'https://example.com/dna-analyzer',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Bioinformatics',
    date: '2023-10'
  },
  {
    title: 'Crop Disease Detection App',
    description: 'Built a mobile-first app that uses machine learning to identify crop diseases from leaf images taken by farmers.',
    technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'Vision API'],
    github: 'https://github.com/example/crop-disease-app',
    demo: 'https://example.com/crop-app',
    image: 'https://images.pexels.com/photos/7194988/pexels-photo-7194988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AgriTech',
    date: '2024-03'
  },
  {
    title: 'Weather Station Logger',
    description: 'Deployed a personal weather station and built a backend to log and visualize data like temperature, wind speed, and rainfall.',
    technologies: ['Raspberry Pi', 'InfluxDB', 'Grafana', 'Python'],
    github: 'https://github.com/example/weather-logger',
    demo: 'https://example.com/weather-logger',
    image: 'https://images.pexels.com/photos/7031504/pexels-photo-7031504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT',
    date: '2022-12'
  },
  {
    title: 'Scientific Research Poster Generator',
    description: 'Created an app that helps students auto-generate research posters from markdown files and templates.',
    technologies: ['Vue.js', 'Markdown', 'TailwindCSS', 'HTML2Canvas'],
    github: 'https://github.com/example/poster-generator',
    demo: 'https://example.com/poster-maker',
    image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Tooling',
    date: '2024-04'
  },
  {
    title: 'AI Chatbot for Lab Assistants',
    description: 'Built a chatbot that can answer common lab protocol questions and help with scheduling and reagent tracking.',
    technologies: ['Python', 'Rasa', 'SQLite', 'NLP'],
    github: 'https://github.com/example/lab-chatbot',
    demo: 'https://example.com/lab-bot',
    image: 'https://images.pexels.com/photos/3861465/pexels-photo-3861465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'AI',
    date: '2024-01'
  }
];