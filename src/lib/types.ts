export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  description: string;
}