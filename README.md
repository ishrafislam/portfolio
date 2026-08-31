# Portfolio — Md. Ishraf Islam

Personal portfolio for a Software QA Engineer. Next.js App Router, TypeScript,
Tailwind CSS v4, static-rendered.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run lint     # eslint
npx tsc --noEmit # types
npm run build    # production build
```

## Editing content

All content lives in `src/data/` — components never hard-code copy.

| File | Holds |
| --- | --- |
| `site.ts` | Name, title, email, social links, resume URL, hero/about/philosophy copy |
| `projects.ts` | Projects and their case studies |
| `experience.ts` | Roles and responsibilities |
| `skills.ts` | Expertise cards, technology stack, mindset cards, impact statements |
| `personal.ts` | Personal projects |
| `timeline.ts` | Education and career timeline |

### Things to fill in

Anything not supplied is omitted rather than faked, so these are safe to leave
empty — the site just renders without them:

- `githubUrl` / `linkedinUrl` in `src/data/site.ts` — until set, those buttons
  do not render anywhere.
- `resumeUrl` in `src/data/site.ts` — drop the PDF at `public/resume.pdf` and
  set this to `'/resume.pdf'` to make the nav Resume button appear.
- The `// TODO` comments in `src/data/projects.ts` list the case-study details
  (automation approach, vector DB, platforms) that would strengthen SpaceOS,
  AI Search and ATOM Store once the information is available.

A project gets a `/projects/[slug]` page only when it has a `caseStudy`. Without
one, its card renders as plain text rather than a link — no dead routes.

## Adding a project

Append to `projects` in `src/data/projects.ts`. `generateStaticParams`, the
project filters and the sitemap all read from that array, so nothing else needs
touching.

## Deploy

Hosted on Vercel.

```bash
npx vercel
```

Or push to GitHub and import the repo at vercel.com.

### Custom domain

1. Vercel → Project → Settings → Domains → add the domain.
2. Point the registrar at Vercel (nameservers, or the A/CNAME record Vercel shows).
3. Set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` in Vercel's environment
   variables and redeploy — canonical URLs, Open Graph tags and the sitemap all
   read from it.

Without that variable the site falls back to the Vercel deployment URL, so it is
correct before the domain exists too.
