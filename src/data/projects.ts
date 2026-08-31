import type { Project, ProjectTag } from '@/lib/types';

/**
 * Content rule: every statement here comes from information Ishraf supplied.
 * No metrics, coverage numbers, team sizes, tool names or business impact are
 * invented. Where a detail would strengthen a case study but is not known, the
 * field is simply omitted and a TODO comment records what to ask for — nothing
 * placeholder-shaped ever reaches the page.
 */
export const projects: Project[] = [
  {
    name: 'SpaceOS',
    slug: 'spaceos',
    company: 'Portonics Limited',
    kind: 'SaaS Platform for SMEs',
    description:
      'A full SaaS platform for small and medium-sized businesses, bringing multiple business operations into a unified system.',
    role: 'Software Quality Assurance Engineer',
    domain: ['SaaS', 'Business Operations'],
    platforms: ['Web', 'Backend'],
    tags: ['SaaS', 'Web', 'API', 'Business Platform'],
    testingAreas: [
      'End-to-End Testing',
      'Module Integration',
      'Business Workflow Validation',
      'API Testing',
      'UI Testing',
      'Regression Testing',
    ],
    tier: 1,
    featured: true,
    // TODO: ask Ishraf for the automation approach, test scope and stack used on
    // SpaceOS, then add "Automation" and "Technical Environment" sections.
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'SpaceOS brings operations that SMEs normally run across separate tools into a single platform. The product spans three modules that share data and users.',
          bullets: ['Resource Booking', 'E-commerce', 'Finance'],
        },
        {
          heading: 'The Challenge',
          body: 'A unified platform means the interesting defects rarely live inside a single module. They appear where modules meet: a booking that has to settle through finance, an order that has to reconcile against the same ledger. Testing each module in isolation was never going to be enough, so the work was framed around business workflows that cross module boundaries rather than around screens.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'End-to-end testing across the platform',
            'Module integration testing between Resource Booking, E-commerce and Finance',
            'Business workflow validation for multi-module flows',
            'API testing of backend services',
            'UI testing across the web application',
            'Regression testing across releases',
          ],
        },
        {
          heading: 'Testing Strategy',
          body: 'Coverage was built in layers: API checks to confirm each service behaved correctly on its own, integration testing where modules exchanged data, and end-to-end business workflows to prove a real operation completed correctly from start to finish. Regression testing kept earlier modules stable as new ones landed.',
        },
      ],
    },
  },
  {
    name: 'AI Search',
    slug: 'ai-search',
    company: 'Portonics Limited',
    kind: 'AI-powered Telco Search Application',
    description:
      'A telecommunications search application built on vector database technology and GenAI-based tokenization.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Telecommunications', 'AI'],
    platforms: ['Web', 'Backend'],
    tags: ['AI', 'Telecom', 'API', 'Search'],
    testingAreas: [
      'Search Accuracy',
      'API Testing',
      'AI/ML Behavior Validation',
      'Edge Cases',
      'Input Variations',
      'Regression Testing',
    ],
    technologies: [
      'Vector Database',
      'Generative AI',
      'Tokenization',
      'Semantic Search',
    ],
    tier: 1,
    featured: true,
    // TODO: ask Ishraf which vector database and GenAI model were used, plus the
    // automation approach, before adding a "Technical Environment" section.
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'A search application for a telecommunications product, built on a vector database with GenAI-based tokenization so that results are matched semantically rather than by keyword.',
        },
        {
          heading: 'The Challenge',
          body: 'Semantic search has no single correct answer to assert against. A keyword search either returns the matching row or it does not; a vector search returns a ranked set that shifts with phrasing, tokenization and the state of the index. Testing it meant moving from pass/fail assertions to judging whether results stayed relevant and stable as inputs varied — and being able to tell a genuine regression apart from acceptable variation.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'Search accuracy validation across query variations',
            'API testing of the search services',
            'AI/ML behavior validation',
            'Edge case and input variation testing',
            'Regression testing across model and index changes',
          ],
        },
        {
          heading: 'Interesting Problems',
          body: 'Input variation was where most of the value sat. The same intent expressed with different wording, spelling, casing or partial phrasing should converge on the same set of results, and probing that boundary is what surfaced the behaviour worth reporting.',
        },
      ],
    },
  },
  {
    name: 'dtac',
    slug: 'dtac',
    company: 'Portonics Limited',
    kind: 'Telecommunications Application',
    description:
      'A telecommunications ecosystem spanning Android, iOS, Web, and backend services.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Telecommunications'],
    platforms: ['Android', 'iOS', 'Web', 'Backend'],
    tags: ['Telecom', 'Mobile', 'Web', 'API', 'Automation', 'Performance'],
    testingAreas: [
      'Requirement Analysis',
      'Test Planning',
      'Test Case Design',
      'Functional Testing',
      'API Testing',
      'UI Automation',
      'Performance Testing',
      'Bug Reporting',
    ],
    tier: 1,
    featured: true,
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'dtac is a telecommunications ecosystem rather than a single application: Android and iOS clients, a web application, and the backend services all of them depend on. The QA work covered the full cycle, from reading requirements through to automation and performance testing.',
        },
        {
          heading: 'The Challenge',
          body: 'Four surfaces share one set of backend services, so the same feature has to be verified in four places with different constraints, and a backend change can affect all of them at once. That shape pushes work down the stack: validating behaviour at the API level first makes client testing about the client, not about re-testing business rules on every platform.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'Requirement analysis and test preparation',
            'Test case writing and test execution',
            'Bug reporting and defect follow-up',
            'API automation',
            'UI automation for Android and Web',
            'Performance testing',
          ],
        },
        {
          heading: 'Automation',
          body: 'Automation ran on two fronts: API automation covering the shared backend services, and UI automation for the Android and Web clients so that repeatable regression passes did not have to be executed by hand on every release.',
        },
        {
          heading: 'Testing Strategy',
          body: 'Requirement analysis first, so that risk was identified before test cases existed. Functional coverage was designed per platform, API testing verified shared behaviour once instead of four times, and performance testing validated how the system held up under load.',
        },
      ],
    },
  },
  {
    name: 'ATOM Store',
    slug: 'atom-store',
    company: 'Portonics Limited',
    kind: 'Mobile Application & Gaming Platform',
    description:
      'Mobile application testing covering gaming functionality and the backend APIs behind it.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Consumer Applications', 'Gaming'],
    platforms: ['Mobile', 'Backend APIs'],
    tags: ['Mobile', 'Gaming', 'API'],
    testingAreas: [
      'Mobile Testing',
      'Game Testing',
      'API Testing',
      'Functional Testing',
      'Regression Testing',
    ],
    tier: 2,
    featured: true,
    // TODO: ask Ishraf which platforms (Android / iOS), whether automation was
    // used and which framework, and whether performance testing was in scope.
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'A mobile application with a gaming platform inside it, backed by its own APIs. Testing covered both the application itself and the services behind it.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'Mobile application testing',
            'Game functionality testing',
            'Backend API testing',
            'Functional testing',
            'Regression testing',
          ],
        },
      ],
    },
  },
  {
    name: 'Samsung Health',
    slug: 'samsung-health',
    company: 'Samsung R&D Institute Bangladesh',
    kind: 'Health Application — iOS',
    description:
      'A health application that collects health data and turns it into insights for users.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Consumer Applications', 'Health'],
    platforms: ['iOS'],
    tags: ['Mobile', 'iOS', 'Automation', 'Health'],
    testingAreas: [
      'Requirement Analysis',
      'Test Preparation',
      'Test Case Design',
      'Test Execution',
      'Test Automation',
      'Test Data Generation',
      'Bug Reporting',
    ],
    tier: 2,
    featured: true,
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'Samsung Health collects health data and presents insights derived from it. What the application shows a user is a function of the data behind it, which makes the data the real test input.',
        },
        {
          heading: 'The Challenge',
          body: 'An insight feature cannot be verified with a fresh account and a few taps. Producing a meaningful result requires data with the right shape: enough history, the right cadence, values that sit in the ranges the feature reacts to, and the boundary and absent-data cases that a real user eventually hits. Getting to those states by using the app is impractical.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'Requirement analysis and test preparation',
            'Test case writing and execution',
            'Test automation',
            'Generating multiple levels of test data for rigorous testing',
            'Bug reporting',
          ],
        },
        {
          heading: 'Interesting Problems',
          body: 'Test-data generation was the core of the work. Building data at several levels — from ordinary to boundary to sparse — meant features could be exercised against states that would otherwise take weeks of real usage to reach, and it turned insight validation from a spot check into repeatable coverage.',
        },
      ],
    },
  },
  {
    name: 'Samsung Notes',
    slug: 'samsung-notes',
    company: 'Samsung R&D Institute Bangladesh',
    kind: 'Windows Desktop Application',
    description: 'A note-taking application for Windows users.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Consumer Applications', 'Productivity'],
    platforms: ['Windows'],
    tags: ['Desktop', 'Windows', 'Automation'],
    testingAreas: [
      'UI Testing',
      'UI Test Automation',
      'Functional Testing',
      'Regression Testing',
    ],
    tier: 3,
    featured: false,
    caseStudy: {
      sections: [
        {
          heading: 'Overview',
          body: 'A note-taking application for Windows. The QA work centred on the interface and on keeping regression coverage repeatable through UI automation.',
        },
        {
          heading: 'My Contribution',
          bullets: [
            'UI testing',
            'UI test automation',
            'Functional testing',
            'Regression testing',
          ],
        },
      ],
    },
  },
  {
    name: 'bdTickets',
    slug: 'bdtickets',
    company: 'Portonics Limited',
    kind: 'Transportation Ticketing System',
    description: 'A transportation ticketing platform.',
    role: 'Software Quality Assurance Engineer',
    domain: ['Transportation'],
    platforms: ['Web'],
    tags: ['Web', 'Transportation'],
    testingAreas: [
      'Requirement Analysis',
      'Test Preparation',
      'Test Execution',
      'Defect Reporting',
    ],
    tier: 3,
    featured: false,
  },
];

export const projectFilters: Array<'All' | ProjectTag> = [
  'All',
  'Mobile',
  'Web',
  'API',
  'SaaS',
  'Telecom',
  'Desktop',
  'AI',
  'Performance',
  'Automation',
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCompany(company: string): Project[] {
  return projects.filter((project) => project.company === company);
}

export function hasCaseStudy(project: Project): boolean {
  return Boolean(project.caseStudy?.sections.length);
}
