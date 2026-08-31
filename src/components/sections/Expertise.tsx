import {
  Bot,
  Gauge,
  ShieldCheck,
  Smartphone,
  Users,
  Webhook,
  type LucideIcon,
} from 'lucide-react';
import { expertise } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';

const icons: Record<string, LucideIcon> = {
  bot: Bot,
  webhook: Webhook,
  smartphone: Smartphone,
  gauge: Gauge,
  'shield-check': ShieldCheck,
  users: Users,
};

export function Expertise() {
  return (
    <Section id="expertise">
      <Reveal>
        <SectionHeading
          eyebrow="04 / Expertise"
          title="What I Do"
          description="Six areas where I spend most of my engineering time."
        />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((area, index) => {
          const Icon = icons[area.icon] ?? Bot;

          return (
            <Reveal key={area.title} index={index % 3} as="li">
              <article className="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface">
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
                {area.technologies ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <li key={tech}>
                        <Tag>{tech}</Tag>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
