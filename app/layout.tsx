import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/context';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Kuni Learning Center | Elite STEM Education in Puerto Rico',
    template: '%s | Kuni Learning Center',
  },
  description:
    'Puerto Rico\'s premier STEM academy offering SAT preparation, science fair mentorship, and Ivy-caliber college counseling for middle and high school students.',
  keywords: [
    'SAT prep Puerto Rico',
    'science fair tutoring Puerto Rico',
    'STEM education Puerto Rico',
    'college counseling Puerto Rico',
    'engineering prep high school',
    'Kuni Learning Center',
    'tutoring San Juan Puerto Rico',
    'online STEM courses',
  ],
  authors: [{ name: 'Kuni Learning Center' }],
  creator: 'Kuni Learning Center',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_PR',
    url: 'https://kunilearning.com',
    siteName: 'Kuni Learning Center',
    title: 'Kuni Learning Center | Elite STEM Education in Puerto Rico',
    description:
      'Puerto Rico\'s premier STEM academy. SAT prep, science fair mentorship, and college counseling for students who refuse to be ordinary.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuni Learning Center | Elite STEM Education',
    description: 'Puerto Rico\'s premier STEM academy.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://kunilearning.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('kuni-theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-body antialiased dark:bg-kuni-black bg-slate-50 dark:text-slate-100 text-kuni-navy-deep">
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </AppProvider>
      </body>
    </html>
  );
}
