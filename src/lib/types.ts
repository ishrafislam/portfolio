export type ProjectTag =
  | 'Mobile'
  | 'Web'
  | 'API'
  | 'SaaS'
  | 'Telecom'
  | 'Desktop'
  | 'AI'
  | 'Performance'
  | 'Automation'
  | 'Gaming'
  | 'iOS'
  | 'Windows'
  | 'Search'
  | 'Transportation'
  | 'Business Platform'
  | 'Health';

/**
 * A single block of a case study. Only blocks with actual content are added to
 * a project's data; the renderer never fabricates or placeholders a missing one.
 */
export type CaseStudySection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudy = {
  duration?: string;
  sections: CaseStudySection[];
};

export type Project = {
  name: string;
  slug: string;
  /** Company the work was done at, when it was professional work. */
  company?: string;
  /** One-line positioning shown under the project name. */
  kind: string;
  description: string;
  role: string;
  domain: string[];
  platforms: string[];
  tags: ProjectTag[];
  /** Areas of testing owned on the project. */
  testingAreas: string[];
  responsibilities?: string[];
  technologies?: string[];
  /** 1 = flagship, 2 = depth, 3 = breadth. Drives ordering. */
  tier: 1 | 2 | 3;
  featured: boolean;
  caseStudy?: CaseStudy;
};

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  responsibilities: string[];
  /** Project slugs worked on during this role. */
  projects: string[];
};

export type PersonalProject = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail';
};

export type TimelineEntry = {
  year: string;
  title: string;
  detail?: string;
  meta?: string;
};

export type ExpertiseArea = {
  title: string;
  description: string;
  icon: string;
  technologies?: string[];
};

export type TechCategory = {
  name: string;
  items: string[];
};

export type ImpactItem = {
  title: string;
  description: string;
};

export type MindsetCard = {
  title: string;
  description: string;
  icon: string;
};
