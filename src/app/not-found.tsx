import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center px-6 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          That page doesn’t exist. The projects index is probably what you were
          looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Back home
          </Link>
          <Link
            href="/projects"
            className="rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-border transition-colors hover:bg-surface hover:ring-border-strong"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
