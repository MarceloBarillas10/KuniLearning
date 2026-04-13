import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-mono text-7xl font-black text-kuni-blue/30 mb-4">404</div>
        <h1 className="font-display text-4xl font-bold dark:text-white text-kuni-navy mb-4">Page Not Found</h1>
        <p className="dark:text-slate-400 text-slate-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
