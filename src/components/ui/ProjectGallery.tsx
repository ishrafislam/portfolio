'use client';

import { useMemo, useState } from 'react';
import type { Project, ProjectTag } from '@/lib/types';
import { projectFilters } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { cn } from '@/lib/cn';

type Filter = 'All' | ProjectTag;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('All');

  // Hide filters that no project carries, so a chip never returns an empty grid.
  const available = useMemo(() => {
    const used = new Set(projects.flatMap((project) => project.tags));
    return projectFilters.filter(
      (value) => value === 'All' || used.has(value as ProjectTag),
    );
  }, [projects]);

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.tags.includes(filter)),
    [filter, projects],
  );

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by area"
        className="flex flex-wrap gap-2"
      >
        {available.map((value) => {
          const active = filter === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value as Filter)}
              aria-pressed={active}
              className={cn(
                'min-h-11 rounded-lg px-4 py-2 text-sm transition-colors',
                active
                  ? 'bg-foreground text-background'
                  : 'text-muted ring-1 ring-border hover:text-foreground hover:ring-border-strong',
              )}
            >
              {value}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-5 text-sm text-muted">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
        {filter === 'All' ? '' : ` for ${filter}`}
      </p>

      <ul className="mt-6">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
