import Link from 'next/link';
import type { Project } from '@/lib/types';
import { hasCaseStudy } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 border-t border-border py-8 md:grid-cols-[1.6fr_1fr] md:gap-12 md:py-10">
      <div className="min-w-0">
        <p className="text-sm text-accent">{project.kind}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-4 max-w-[65ch] text-base leading-7 text-muted">{project.description}</p>
        {hasCaseStudy(project) ? (
          <Link href={`/projects/${project.slug}`} aria-label={`Read ${project.name} case study`}
            className="mt-4 inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/35 underline-offset-4 hover:decoration-accent">Read case study</Link>
        ) : null}
      </div>
      <div className="min-w-0">
        <dl className="grid gap-4 text-sm">
          <div><dt className="text-muted">Role</dt><dd className="mt-1 font-medium">{project.role}</dd></div>
          <div><dt className="text-muted">Domain</dt><dd className="mt-1">{project.domain.join(', ')}</dd></div>
          <div><dt className="text-muted">Platforms</dt><dd className="mt-1">{project.platforms.join(', ')}</dd></div>
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <li key={tag}><Tag>{tag}</Tag></li>)}</ul>
      </div>
    </article>
  );
}
