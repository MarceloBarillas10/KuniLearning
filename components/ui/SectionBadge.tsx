import { clsx } from 'clsx';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest',
        'bg-kuni-blue/10 border border-kuni-blue/30 text-kuni-blue-glow',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-kuni-accent animate-pulse" />
      {children}
    </span>
  );
}
