import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          title="Selected Projects"
          description="Products I have tested, automated and helped ship — from telecom ecosystems to SaaS platforms and AI-powered search."
        />
      </Reveal>

      <ul className="mt-10">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} index={index % 2} as="li">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-border transition-colors hover:bg-surface hover:ring-border-strong"
        >
          View all projects
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </Link>
      </Reveal>
    </Section>
  );
}
