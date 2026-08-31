import type { SocialLink } from '@/lib/types';

export const site = {
  name: 'Md. Ishraf Islam',
  title: 'Software QA Engineer',
  positioning:
    'Quality Engineering · Test Automation · API · Mobile · Performance',
  headline: 'I build quality into software.',
  summary:
    'Software QA Engineer specializing in automation, API testing, mobile testing, performance engineering, and quality-focused development practices.',
  description:
    'Portfolio of Md. Ishraf Islam, Software QA Engineer specializing in test automation, API testing, mobile testing, performance testing and quality engineering.',
  location: 'Dhaka, Bangladesh',
  email: 'ishrafislam2727@gmail.com',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'http://localhost:3000'),
} as const;

// TODO: set these once the URLs are supplied. Anything left undefined is not
// rendered anywhere on the site — no dead links, no placeholder profiles.
const githubUrl: string | undefined = undefined;
const linkedinUrl: string | undefined = undefined;

/** Path to the resume PDF in /public. Undefined hides the Resume button. */
// TODO: drop the latest resume at public/resume.pdf and set this to '/resume.pdf'.
export const resumeUrl: string | undefined = undefined;

const allSocials: Array<SocialLink | undefined> = [
  githubUrl ? { label: 'GitHub', href: githubUrl, icon: 'github' } : undefined,
  linkedinUrl
    ? { label: 'LinkedIn', href: linkedinUrl, icon: 'linkedin' }
    : undefined,
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
];

export const socials: SocialLink[] = allSocials.filter(
  (link): link is SocialLink => link !== undefined,
);

export const navLinks = [
  { label: 'Home', href: '/#home', id: 'home' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'Expertise', href: '/#expertise', id: 'expertise' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
] as const;

export const heroMeta = [
  '8+ Years Experience',
  'QA & Automation',
  'Web · Mobile · API · Desktop',
] as const;

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Software QA Engineer with experience across web, mobile, desktop, backend, telecommunications, transportation, consumer applications, and SaaS platforms.",
    'My work goes beyond functional testing. I design test strategies, build and maintain automation frameworks, validate APIs, perform performance testing, investigate complex problems, and collaborate with development and product teams to improve software quality.',
    'I enjoy working on complex systems where understanding the product, identifying risk, and building the right testing approach matter as much as executing test cases.',
  ],
} as const;

export const philosophy = {
  heading: 'My Approach to Quality',
  statement:
    'Quality isn’t a final step before release. It is a continuous engineering process.',
  steps: [
    'Understand',
    'Question',
    'Identify Risk',
    'Design Tests',
    'Automate',
    'Measure',
    'Improve',
  ],
  supporting:
    'I believe effective QA starts with understanding the product and its risks. Automation should remove repetitive work, while thoughtful testing should focus human effort where it provides the most value.',
} as const;

export const heroPipeline = [
  'Requirements',
  'Test Strategy',
  'Automation',
  'Validation',
  'Quality',
] as const;

export const contact = {
  heading: "Let's Talk Quality.",
  copy: 'Have a product to test, an automation challenge, or an interesting engineering problem? Let’s connect.',
} as const;
