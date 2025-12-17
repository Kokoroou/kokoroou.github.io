export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location?: string;
}

export interface SkillItem {
  name: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
  context?: string; // e.g. "Focus on Serverless"
}

export interface Project {
  id: string;
  title: string;
  role: string;
  context: string;
  techStack: string[];
  responsibilities: string[];
  outcome: string;
  isOpenDefault?: boolean;
}

export interface CoreStrength {
  title: string;
  description: string;
}

export interface Philosophy {
  principle: string;
  detail: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface DigitalFootprint {
  label: string;
  url: string;
  desc: string;
}

export interface SnapshotData {
  level: string;
  focus: string;
  environment: string;
  status: string;
}

export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  summary: string;
}

// Master interface for all localized content
export interface CVContent {
  hero: HeroData;
  contact: ContactInfo;
  snapshot: SnapshotData;
  coreStrengths: CoreStrength[];
  skillGroups: SkillGroup[];
  certifications: Record<string, Certification[]>;
  projects: Project[];
  philosophy: Philosophy[];
  testimonials: Testimonial[];
  footprint: DigitalFootprint[];
  ui: {
    downloadCv: string;
    viewProjects: string;
    level: string;
    focus: string;
    environment: string;
    coreStrengths: string;
    techStack: string;
    certifications: string;
    verify: string;
    majorProjects: string;
    responsibilities: string;
    outcome: string;
    howIWork: string;
    testimonials: string;
    digitalFootprint: string;
    builtWith: string;
  }
}
