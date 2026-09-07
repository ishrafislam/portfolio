import { techStack } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';

export function TechStack() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          title="Technology"
          description="Tools and languages I work with day to day."
        />
      </Reveal>

      <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((category, index) => (
          <Reveal key={category.name} index={index % 3}>
            <h3 className="text-xs text-subtle">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
