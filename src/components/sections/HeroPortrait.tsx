import Image from 'next/image';
import { site } from '@/data/site';

export function HeroPortrait() {
  return (
    <div className="relative w-full max-w-60 justify-self-center overflow-hidden rounded-[1.5rem] bg-surface md:max-w-72 md:self-start xl:max-w-80 xl:self-center xl:justify-self-end">
      <Image src="/me.png" alt={`${site.name}, ${site.title}`} width={500} height={500}
        loading="eager" fetchPriority="high" sizes="(min-width: 1280px) 320px, (min-width: 768px) 288px, 240px"
        className="aspect-[4/5] w-full object-cover object-top" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2 bg-accent" />
    </div>
  );
}
