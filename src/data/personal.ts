import type { PersonalProject } from '@/lib/types';

export const personalProjects: PersonalProject[] = [
  {
    name: 'Arthomate',
    kind: 'Personal Finance Application',
    description:
      'A personal finance platform focused on account-based income and expense tracking, budgets, transaction history, dashboards, and financial reporting.',
    tags: ['Product Development', 'FinTech', 'Personal Finance', 'Mobile', 'Web'],
    // TODO: add `url` / `repo` once there is something public to link to.
  },
  {
    name: 'Requestr',
    kind: 'Modern API Development & Testing Platform',
    description:
      'A Postman alternative focused on API requests, collections, environments, examples, authentication, scripting, workspaces, and real-time collaboration.',
    tags: ['API', 'Developer Tools', 'Testing', 'SaaS'],
    // TODO: add `url` / `repo` once there is something public to link to.
  },
];
