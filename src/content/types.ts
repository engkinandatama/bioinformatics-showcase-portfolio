// Core types used across content files
export interface SkillLevel {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  description: string;
  icon: string;
  skills: SkillLevel[];
}

export interface CoreFocus {
  title: string;
  icon: string;
  description: string;
  achievements?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  thesis?: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: string;
  date: string;
}

export interface HeroContent {
  name: string;
  roles: string[];
  description: string;
  resumeLink: string;
  githubLink: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

export interface OpenPosition {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  type: 'journal' | 'patent' | 'conference';
  publisher: string;
  date: string;
  link: string;
  description: string;
  authors?: string[];
  doi?: string;
}

export interface BlogPost {
  title: string;
  platform: string;
  date: string;
  link: string;
  description: string;
  readingTime: string;
  tags: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export interface ContactSectionContent {
  title: string;
  subtitle: string;
  form: {
    title: string;
    labels: {
      name: string;
      email: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
    button: {
      idle: string;
      submitting: string;
    };
    success: string;
    error: string;
  };
  contact: {
    title: string;
    email: {
      label: string;
      ariaLabel: string;
    };
    location: {
      label: string;
      ariaLabel: string;
    };
    connect: {
      title: string;
      social: {
        github: string;
        linkedin: string;
        email: string;
      };
    };
  };
}

export interface ExperienceEducationContent {
  title: string;
  tabs: {
    experience: {
      name: string;
      icon: string;
    };
    education: {
      name: string;
      icon: string;
    };
    certifications: {
      name: string;
      icon: string;
    };
  };
  labels: {
    thesis: string;
    coursework: string;
    viewCertificate: string;
  };
}

export interface ProjectsSectionContent {
  title: string;
  subtitle: string;
  buttons: {
    code: string;
    demo: string;
  };
  categories: {
    all: string;
  };
  ariaLabels: {
    scrollLeft: string;
    scrollRight: string;
  };
}

export interface PublicationsSectionContent {
  title: string;
  subtitle: string;
  tabs: {
    blog: string;
    publications: string;
  };
  buttons: {
    viewAllPosts: string;
    viewAllPublications: string;
  };
  labels: {
    readArticle: string;
    viewPaper: string;
    viewPatent: string;
    viewPublication: string;
  };
}

export interface SkillsSectionContent {
  title: string;
  subtitle: string;
}

export interface CurrentActivity {
  emoji: string;
  title: string;
  description: string;
}