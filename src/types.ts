export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl: string;
  rating: number;
  downloadsOrUsers: string;
  mockupScreens: {
    title: string;
    description: string;
    color: string;
    type: 'list' | 'chat' | 'dashboard' | 'form';
  }[];
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'Core' | 'Backend' | 'Tools' | 'Deployment';
  icon: string;
  experience: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface RoadmapItem {
  version: string;
  timeline: string;
  title: string;
  description: string;
  status: 'active' | 'upcoming' | 'planned';
  tasks: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timestamp: string;
}

export interface SEOConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  domain: string;
  secondaryDomain: string;
  hosting: string;
  location: string;
}

export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  category: 'Domain' | 'Content' | 'Testing' | 'Deployment';
}
