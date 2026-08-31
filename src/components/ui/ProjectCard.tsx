import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { hasCaseStudy } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';

export function ProjectCard({ project }: { project: Project }) {
  const linked = hasCaseStudy(project);

  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-accent">{project.kind}</p>
        </div>
        {linked ? (
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 shrink-0 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <dl className="mt-6 grid gap-3 border-t border-border pt-5 text-xs sm:grid-cols-2">
        <div>
          <dt className="text-subtle">Role</dt>
          <dd className="mt-1 text-foreground">{project.role}</dd>
        </div>
        <div>
          <dt className="text-subtle">Domain</dt>
          <dd className="mt-1 text-foreground">{project.domain.join(', ')}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-subtle">Platforms</dt>
          <dd className="mt-1 text-foreground">
            {project.platforms.join(' · ')}
          </dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </>
  );

  const className =
    'group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface';

  if (!linked) {
    return <article className={className}>{body}</article>;
  }

  return (
    <article className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        className={`${className} focus-visible:border-accent`}
      >
        {body}
      </Link>
    </article>
  );
}
