'use client';

import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { Download, FileText } from 'lucide-react';

export function ResourcesSection() {
  const { t } = useApp();

  const tagColors: Record<string, string> = {
    'SAT Prep': 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    'Science Fair': 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    'College Counseling': 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    'Career Guidance': 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    'Feria de Ciencias': 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    'Orientación Universitaria': 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    'Orientación Vocacional': 'bg-purple-500/15 border-purple-500/30 text-purple-400',
  };

  return (
    <section id="resources" className="py-24 dark:bg-kuni-black bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">{t.resources.badge}</SectionBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-kuni-navy mb-4">
            {t.resources.headline}
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-500 text-lg">
            {t.resources.subheadline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.resources.items.map((item, i) => (
            <div
              key={i}
              className="glass-card light-mode-card rounded-2xl p-6 flex flex-col group hover:border-kuni-blue/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-kuni-blue/15 flex items-center justify-center group-hover:bg-kuni-blue/25 transition-colors">
                  <FileText className="w-5 h-5 text-kuni-blue-glow" />
                </div>
                <span className={`text-xs px-2 py-1 rounded-full border font-mono ${tagColors[item.tag] || 'bg-kuni-blue/15 border-kuni-blue/30 text-kuni-blue-glow'}`}>
                  {item.tag}
                </span>
              </div>

              <h3 className="font-semibold dark:text-white text-kuni-navy text-sm mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs dark:text-slate-400 text-slate-500 leading-relaxed mb-5 flex-1">
                {item.desc}
              </p>

              <button className="group/btn inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-kuni-blue/15 hover:bg-kuni-blue text-kuni-blue-glow hover:text-white border border-kuni-blue/30 hover:border-kuni-blue rounded-lg transition-all duration-200 w-full">
                <Download className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                {t.resources.downloadCta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
