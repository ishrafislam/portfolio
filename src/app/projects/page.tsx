import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { ProjectGallery } from '@/components/ui/ProjectGallery';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects Md. Ishraf Islam has tested and automated across telecom, SaaS, AI search, mobile, desktop and transportation systems.',
  alternates: { canonical: '/projects' },
};

// Flagship projects first, breadth last.
const ordered = [...projects].sort((a, b) => a.tier - b.tier);

export default function ProjectsPage() {
  return (
    <div className="px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Work
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            All Projects
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Telecom ecosystems, SaaS platforms, AI-powered search, mobile and
            desktop applications, and transportation systems — filtered by the
            areas of testing each one involved.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-12">
          <ProjectGallery projects={ordered} />
        </Reveal>
      </div>
    </div>
  );
}
