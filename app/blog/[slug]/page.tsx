import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Blog Post — ${params.slug.replace(/-/g, ' ')}`,
    description: 'Expert STEM education insights from Kuni Learning Center.',
  };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen">
      <div className="relative py-20 dark:bg-kuni-navy-deep bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm dark:text-slate-400 text-slate-500 hover:text-kuni-blue-glow transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="glass-card light-mode-card rounded-3xl p-10">
            <span className="text-xs font-mono text-kuni-blue-glow uppercase tracking-wider">Coming Soon</span>
            <h1 className="font-display text-4xl font-black dark:text-white text-kuni-navy mt-3 mb-4 capitalize">
              {params.slug.replace(/-/g, ' ')}
            </h1>
            <p className="dark:text-slate-400 text-slate-500 text-lg">
              This article is being prepared by our editorial team. Check back soon for the full post, or subscribe to our newsletter to get notified when it publishes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
