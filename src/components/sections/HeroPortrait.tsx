import Image from 'next/image';
import { site } from '@/data/site';

/**
 * Circular portrait with an accent ring orbiting it. The ring is a sibling of
 * the image rather than a border on it, so rotating it never resamples the
 * photo. me.png is a transparent cutout, so the image carries a themed
 * surface disc behind it rather than showing the page through the circle.
 * The reduced-motion block in globals.css freezes the ring.
 */
export function HeroPortrait() {
  return (
    <div className="relative size-40 sm:size-52 lg:size-64">
      <span
        aria-hidden="true"
        className="animate-ring absolute -inset-3 rounded-full border border-dashed border-accent/45"
      />
      <span
        aria-hidden="true"
        className="absolute -inset-1 rounded-full bg-accent/10 blur-2xl"
      />
      <Image
        src="/me.png"
        alt={`${site.name}, ${site.title}`}
        width={500}
        height={500}
        priority
        sizes="(min-width: 1024px) 16rem, (min-width: 640px) 13rem, 10rem"
        className="relative size-full rounded-full bg-surface object-cover ring-1 ring-border"
      />
    </div>
  );
}
