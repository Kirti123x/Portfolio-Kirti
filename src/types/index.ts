export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  years: string;
  gpa?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
}

export interface SkillsGrouped {
  frontend: string[];
  backend: string[];
  devops: string[];
  additional: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillsGrouped;
  projects: Project[];
}
