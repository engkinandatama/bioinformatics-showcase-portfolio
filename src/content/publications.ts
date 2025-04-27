import { Publication, BlogPost } from './types';

export const publications: Publication[] = [
  {
    title: 'Exploring Protein-Ligand Interactions Using Computational Tools',
    type: 'Peer Review',
    publisher: 'Journal of Bioinformatics',
    date: 'June 2023',
    link: 'https://example.com/journal-article',
    description: 'A comprehensive study on the application of computational methods for analyzing protein-ligand interactions, with a focus on drug discovery applications.',
    authors: ['John Doe', 'Jane Smith', 'Bob Johnson'],
    doi: '10.1234/jb.2023.001'
  },
  {
    title: 'Novel Method for Protein Structure Prediction',
    type: 'patent',
    publisher: 'US Patent Office',
    date: 'March 2023',
    link: 'https://example.com/patent',
    description: 'A new computational approach for predicting protein structures using machine learning and molecular dynamics.',
    authors: ['John Doe', 'Alice Brown'],
    doi: 'US123456789'
  },
  {
    title: 'Advances in Genomic Data Analysis',
    type: 'conference',
    publisher: 'International Conference on Bioinformatics',
    date: 'November 2022',
    link: 'https://example.com/conference',
    description: 'Presentation of novel methods for analyzing large-scale genomic data using cloud computing.',
    authors: ['John Doe']
  },
  {
    title: 'IoT-based Automation in Precision Agriculture',
    type: 'Proceeding',
    publisher: 'Journal of Agricultural Technology and Innovation',
    date: 'March 2023',
    link: 'https://example.com/journal-precision-agri',
    description: 'Published a study on smart farming systems using real-time environmental monitoring and automated irrigation.',
    authors: ['John Doe', 'Jane Smith']
  },
  {
    title: 'Secure Sensor Networks for Environmental Monitoring',
    type: 'journal',
    publisher: 'International Journal of IoT and Security',
    date: 'January 2024',
    link: 'https://example.com/iot-security-paper',
    description: 'Explores encryption protocols and architecture for secure data transmission in agricultural IoT systems.',
    authors: ['John Doe', 'Carlos Nguyen']
  },
  {
    title: 'Integrative Analysis of Multi-Omics Data for Crop Improvement',
    type: 'journal',
    publisher: 'Journal of Computational Biology',
    date: 'October 2023',
    link: 'https://example.com/journal-multiomics',
    description: 'Demonstrates a framework for combining genomics, transcriptomics, and phenomics to accelerate plant breeding.',
    authors: ['John Doe', 'Maria Lin']
  },
  {
    title: 'AI-Driven Phenotyping for Smart Greenhouses',
    type: 'journal',
    publisher: 'Journal of AI in Agriculture',
    date: 'June 2023',
    link: 'https://example.com/ai-greenhouse',
    description: 'Presents computer vision and machine learning approaches to automated plant trait analysis in greenhouse settings.',
    authors: ['John Doe', 'Emma Takahashi']
  },
  {
    title: 'Real-Time Soil Health Monitoring Using Embedded Sensors',
    type: 'journal',
    publisher: 'Sensors and Actuators in Environmental Systems',
    date: 'February 2023',
    link: 'https://example.com/soil-health-monitoring',
    description: 'Details the development of embedded sensor networks for monitoring soil pH, moisture, and nutrients in real-time.',
    authors: ['John Doe']
  },
  {
    title: 'Cloud-Integrated Bioinformatics Pipelines for Genome Assembly',
    type: 'journal',
    publisher: 'Journal of Cloud Computing in Life Sciences',
    date: 'August 2022',
    link: 'https://example.com/cloud-genome-assembly',
    description: 'Describes the implementation of scalable cloud workflows for large-scale genome assembly projects.',
    authors: ['John Doe', 'Lea Tan']
  },
  {
    title: 'Energy-Efficient IoT Design for Vertical Farming',
    type: 'journal',
    publisher: 'Sustainable Computing: Informatics and Systems',
    date: 'December 2023',
    link: 'https://example.com/iot-vertical-farming',
    description: 'Explores low-power architectures and sensor strategies for sustainable IoT applications in controlled-environment agriculture.',
    authors: ['John Doe']
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with Bioinformatics Using Python',
    platform: 'Medium',
    date: 'March 2023',
    link: 'https://medium.com/example',
    description: 'A beginner-friendly guide introducing essential bioinformatics concepts and how to implement them using Python and Biopython library.',
    readingTime: '8 min read',
    tags: ['Python', 'Bioinformatics', 'Tutorial']
  },
  {
    title: 'The Future of Cloud Computing in Bioinformatics',
    platform: 'Dev.to',
    date: 'November 2022',
    link: 'https://dev.to/example',
    description: 'An exploration of how cloud technologies are transforming bioinformatics research, with case studies and future predictions.',
    readingTime: '12 min read',
    tags: ['Cloud Computing', 'Bioinformatics', 'Future Tech']
  },
  {
    title: 'Building an IoT Lab Monitoring System',
    platform: 'Hashnode',
    date: 'October 2022',
    link: 'https://hashnode.com/example',
    description: 'Step-by-step guide on creating a laboratory monitoring system using Raspberry Pi and various sensors.',
    readingTime: '15 min read',
    tags: ['IoT', 'Raspberry Pi', 'Tutorial']
  },
  {
    title: 'Introduction to DNA Sequencing Analysis',
    platform: 'Medium',
    date: 'September 2022',
    link: 'https://medium.com/example',
    description: 'Learn the basics of DNA sequencing analysis and how to process raw sequencing data using modern bioinformatics tools.',
    readingTime: '10 min read',
    tags: ['Bioinformatics', 'DNA Sequencing', 'Tutorial']
  },
  {
    title: 'Setting Up a Bioinformatics Development Environment',
    platform: 'Dev.to',
    date: 'August 2022',
    link: 'https://dev.to/example',
    description: 'A comprehensive guide to setting up your development environment for bioinformatics research.',
    readingTime: '7 min read',
    tags: ['Development', 'Tools', 'Setup']
  },
  {
    title: 'Setting Up a Bioinformatics Development Environment',
    platform: 'Dev.to',
    date: 'August 2022',
    link: 'https://dev.to/example',
    description: 'A comprehensive guide to setting up your development environment for bioinformatics research.',
    readingTime: '7 min read',
    tags: ['Development', 'Tools', 'Setup']
  },
  {
    title: 'Using Docker for Reproducible Research',
    platform: 'Seaport',
    date: 'October 2022',
    link: 'https://medium.com/example/docker-research',
    description: 'Learn how to use Docker to create reproducible environments for scientific research projects.',
    readingTime: '6 min read',
    tags: ['Docker', 'Reproducibility', 'Science']
  },
  {
    title: 'How I Built a Smart Plant Monitoring System with Raspberry Pi',
    platform: 'Hashnode',
    date: 'January 2023',
    link: 'https://hashnode.com/example/smart-plant',
    description: 'A step-by-step tutorial for building a smart plant monitor using IoT devices and sensors.',
    readingTime: '8 min read',
    tags: ['IoT', 'Raspberry Pi', 'DIY']
  },
  {
    title: 'Demystifying BLAST: A Bioinformatics Essential',
    platform: 'Dev.to',
    date: 'July 2022',
    link: 'https://dev.to/example/blast-explained',
    description: 'An easy-to-understand explanation of how BLAST works and when to use it.',
    readingTime: '5 min read',
    tags: ['Bioinformatics', 'BLAST', 'Tutorial']
  },
  {
    title: 'Automating Lab Reports with Python and Pandas',
    platform: 'Medium',
    date: 'May 2023',
    link: 'https://medium.com/example/lab-automation',
    description: 'Speed up your lab report generation process using Python and Pandas for data analysis and reporting.',
    readingTime: '7 min read',
    tags: ['Python', 'Automation', 'Pandas']
  },
  {
    title: 'Understanding FASTA and FASTQ File Formats',
    platform: 'Hashnode',
    date: 'April 2022',
    link: 'https://hashnode.com/example/fasta-fastq',
    description: 'A breakdown of FASTA and FASTQ formats used in genomic data storage and analysis.',
    readingTime: '6 min read',
    tags: ['Genomics', 'File Formats', 'Tutorial']
  },
  {
    title: 'Deploying a Bioinformatics App on the Cloud',
    platform: 'Dev.to',
    date: 'September 2023',
    link: 'https://dev.to/example/deploy-bio-cloud',
    description: 'A walkthrough of deploying a simple bioinformatics application to the cloud using AWS.',
    readingTime: '8 min read',
    tags: ['Cloud', 'AWS', 'Deployment']
  },
  {
    title: 'What is Nextflow and Why You Should Learn It',
    platform: 'Medium',
    date: 'November 2022',
    link: 'https://medium.com/example/nextflow',
    description: 'An introduction to Nextflow for managing complex bioinformatics workflows with ease.',
    readingTime: '7 min read',
    tags: ['Bioinformatics', 'Nextflow', 'Workflow']
  },
  {
    title: 'Visualizing Genomic Data with Python',
    platform: 'Hashnode',
    date: 'February 2023',
    link: 'https://hashnode.com/example/genomic-visualization',
    description: 'Tutorial on using Python libraries like Matplotlib and Seaborn to visualize genomic datasets.',
    readingTime: '6 min read',
    tags: ['Python', 'Visualization', 'Genomics']
  },
  {
    title: 'Creating an Environmental Dashboard with Node-RED',
    platform: 'Dev.to',
    date: 'June 2023',
    link: 'https://dev.to/example/node-red-dashboard',
    description: 'Learn how to use Node-RED to build a real-time dashboard for monitoring environmental sensor data.',
    readingTime: '9 min read',
    tags: ['Node-RED', 'IoT', 'Dashboard']
  }
];