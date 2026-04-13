'use client';

import { useState } from 'react';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

export function TestimonialsSection() {
  const { t } = useApp();
  const [active, setActive] = useState(0);
  const items = t.testimonials.items;

  return (
    <section id="testimonials" className="py-24 dark:bg-kuni-navy-deep bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r dark:from-kuni-blue/5 from-kuni-blue/3 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">{t.testimonials.badge}</SectionBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-kuni-navy">
            {t.testimonials.headline}
          </h2>
        </div>

        {/* Featured testimonial (desktop) */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="testimonial-card glass-card light-mode-card rounded-3xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-kuni-blue/40 mb-4" />
              <blockquote className="dark:text-slate-200 text-slate-700 text-base leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold dark:text-white text-kuni-navy text-sm">{item.name}</div>
                  <div className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">{item.role}</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-kuni-blue/15 border border-kuni-blue/30 text-kuni-blue-glow">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="glass-card light-mode-card rounded-3xl p-8 relative">
            <Quote className="w-8 h-8 text-kuni-blue/40 mb-4" />
            <blockquote className="dark:text-slate-200 text-slate-700 text-base leading-relaxed mb-6 italic">
              "{items[active].quote}"
            </blockquote>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-semibold dark:text-white text-kuni-navy text-sm">{items[active].name}</div>
                <div className="text-xs dark:text-slate-400 text-slate-500 mt-0.5">{items[active].role}</div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-kuni-blue/15 border border-kuni-blue/30 text-kuni-blue-glow">
                {items[active].score}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActive(a => (a - 1 + items.length) % items.length)}
                className="p-2 rounded-xl dark:bg-kuni-gray-line/50 bg-slate-100 dark:text-slate-300 text-slate-600 hover:text-kuni-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={clsx(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      i === active ? 'bg-kuni-accent w-6' : 'dark:bg-kuni-gray-line bg-slate-300'
                    )}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive(a => (a + 1) % items.length)}
                className="p-2 rounded-xl dark:bg-kuni-gray-line/50 bg-slate-100 dark:text-slate-300 text-slate-600 hover:text-kuni-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
