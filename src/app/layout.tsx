import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { site } from '@/data/site';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const plex = localFont({
  src: './fonts/IBMPlexSans.ttf',
  weight: '100 700',
  variable: '--font-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Software QA Engineer',
    'Test Automation',
    'API Testing',
    'Mobile Testing',
    'Performance Testing',
    'Quality Engineering',
    'Selenium',
    'Playwright',
    'Appium',
    'Md. Ishraf Islam',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.title}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#101D32' },
  ],
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.title,
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  worksFor: { '@type': 'Organization', name: 'Portonics Limited' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'National University, Bangladesh',
  },
  knowsAbout: [
    'Software Quality Assurance',
    'Test Automation',
    'API Testing',
    'Mobile Testing',
    'Performance Testing',
    'Quality Engineering',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plex.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" tabIndex={-1}>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON-LD — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
