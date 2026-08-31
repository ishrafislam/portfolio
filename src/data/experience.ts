import type { Experience } from '@/lib/types';

export const experiences: Experience[] = [
  {
    company: 'Portonics Limited',
    role: 'Software Quality Assurance Engineer',
    startDate: 'Dec 2021',
    description:
      'Leading QA activities across projects, working from requirement analysis and test planning through execution, automation, defect management, and process improvement.',
    responsibilities: [
      'Lead QA activities for projects',
      'Analyze requirements',
      'Prepare test strategies and test cases',
      'Execute sprint testing',
      'Identify and report defects',
      'Collaborate with development teams',
      'Develop and maintain automation frameworks',
      'Perform API, UI, and performance testing',
      'Improve QA processes and standards',
      'Collaborate with teams and clients',
    ],
    projects: ['spaceos', 'ai-search', 'dtac', 'atom-store', 'bdtickets'],
  },
  {
    company: 'Samsung R&D Institute Bangladesh',
    role: 'Software Quality Assurance Engineer',
    startDate: 'May 2018',
    endDate: 'Nov 2021',
    description:
      'Worked across mobile applications, wearables, and desktop applications, covering test planning, execution, defect reporting, UI automation, and rigorous test-data generation.',
    responsibilities: [
      'Test planning',
      'Requirement analysis',
      'Test case design',
      'Test execution',
      'Bug reporting',
      'UI automation',
      'Test-data generation',
      'Cross-platform application testing',
    ],
    projects: ['samsung-health', 'samsung-notes'],
  },
];
