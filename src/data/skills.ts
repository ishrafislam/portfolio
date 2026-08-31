import type { ExpertiseArea, ImpactItem, MindsetCard, TechCategory } from '@/lib/types';

export const expertise: ExpertiseArea[] = [
  {
    title: 'Test Automation',
    description:
      'Design and maintain automated test frameworks for UI, API, and end-to-end testing.',
    icon: 'bot',
    technologies: [
      'Selenium',
      'Playwright',
      'Appium',
      'Pytest',
      'Python',
      'JavaScript',
      'Java',
    ],
  },
  {
    title: 'API Testing',
    description:
      'Validate backend services through functional, integration, and automated API testing.',
    icon: 'webhook',
    technologies: [
      'Postman',
      'Python',
      'JavaScript',
      'REST APIs',
      'JSON',
      'XML',
    ],
  },
  {
    title: 'Mobile Testing',
    description:
      'Test and automate Android and iOS applications across real-world user scenarios and complex application flows.',
    icon: 'smartphone',
    technologies: ['Appium', 'Android', 'iOS'],
  },
  {
    title: 'Performance Testing',
    description:
      'Identify performance bottlenecks and validate system behavior under load.',
    icon: 'gauge',
    technologies: ['JMeter', 'Locust'],
  },
  {
    title: 'Quality Engineering',
    description:
      'Integrate quality practices into development workflows through planning, automation, early defect detection, and process improvement.',
    icon: 'shield-check',
  },
  {
    title: 'QA Leadership',
    description:
      'Lead QA activities, coordinate testing efforts, collaborate with cross-functional teams, and improve QA processes.',
    icon: 'users',
  },
];

export const techStack: TechCategory[] = [
  {
    name: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Node.js'],
  },
  {
    name: 'Automation',
    items: ['Selenium', 'Playwright', 'Appium', 'Pytest'],
  },
  {
    name: 'API & Testing',
    items: [
      'Postman',
      'API Automation',
      'UI Automation',
      'Performance Testing',
    ],
  },
  {
    name: 'Performance',
    items: ['JMeter', 'Locust'],
  },
  {
    name: 'DevOps & Collaboration',
    items: ['Git', 'CI/CD', 'Jira', 'TestRail'],
  },
  {
    name: 'Databases & Data',
    items: ['MySQL', 'MongoDB', 'JSON', 'XML'],
  },
];

export const mindset = {
  heading: 'Beyond Testing',
  statement:
    'I enjoy understanding how systems work — not just whether they work.',
  cards: [
    {
      title: 'Investigate',
      description:
        'Understand architecture, APIs, dependencies, data flow, and failure scenarios.',
      icon: 'search',
    },
    {
      title: 'Automate',
      description: 'Turn repeatable testing into maintainable automation.',
      icon: 'workflow',
    },
    {
      title: 'Improve',
      description:
        'Find opportunities to make testing, development, and delivery more effective.',
      icon: 'trending-up',
    },
  ] satisfies MindsetCard[],
} as const;

// Qualitative only. Numbers go here only once Ishraf supplies real ones.
export const impact: ImpactItem[] = [
  {
    title: 'QA Leadership',
    description: 'Led QA activities for projects.',
  },
  {
    title: 'Automation',
    description:
      'Built and maintained UI, API and performance automation frameworks.',
  },
  {
    title: 'Cross-platform Testing',
    description:
      'Worked across Android, iOS, Web, Windows and backend systems.',
  },
  {
    title: 'Complex Systems',
    description:
      'Tested telecom, SaaS, transportation, consumer and AI-powered applications.',
  },
];
