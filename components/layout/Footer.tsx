'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="dark:bg-kuni-navy-deep bg-slate-900 border-t dark:border-kuni-gray-line border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
                <circle cx="20" cy="20" r="19" fill="url(#footerLogoGrad)" stroke="rgba(0,212,255,0.2)" strokeWidth="1"/>
                <ellipse cx="14" cy="11" rx="3" ry="7" fill="#1E6FE0" opacity="0.9"/>
                <ellipse cx="26" cy="11" rx="3" ry="7" fill="#1E6FE0" opacity="0.9"/>
                <ellipse cx="14" cy="11" rx="1.5" ry="5" fill="#3B9EFF" opacity="0.5"/>
                <ellipse cx="26" cy="11" rx="1.5" ry="5" fill="#3B9EFF" opacity="0.5"/>
                <ellipse cx="20" cy="22" rx="9" ry="8" fill="#1E6FE0"/>
                <circle cx="17" cy="20" r="1.5" fill="#00D4FF"/>
                <circle cx="23" cy="20" r="1.5" fill="#00D4FF"/>
                <circle cx="17.5" cy="19.5" r="0.5" fill="white"/>
                <circle cx="23.5" cy="19.5" r="0.5" fill="white"/>
                <ellipse cx="20" cy="23.5" rx="1" ry="0.7" fill="#00D4FF"/>
                <ellipse cx="20" cy="32" rx="7" ry="5" fill="#0047AB"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#00153D"/>
                    <stop offset="100%" stopColor="#000C26"/>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <span className="block font-display font-bold text-white">Kuni</span>
                <span className="block text-xs font-mono tracking-widest text-kuni-blue-glow uppercase">Learning Center</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg dark:bg-kuni-gray-line/50 bg-slate-700 flex items-center justify-center dark:text-slate-400 text-slate-300 dark:hover:text-kuni-accent hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              {t.nav.programs}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/programs/sat-prep', label: t.nav.satPrep },
                { href: '/programs/science-fair', label: t.nav.scienceFair },
                { href: '/programs/college-counseling', label: t.nav.collegeCounseling },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-kuni-accent transition-colors animated-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: t.nav.home },
                { href: '/#about', label: t.nav.about },
                { href: '/blog', label: t.nav.blog },
                { href: '/#contact', label: t.nav.contact },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-kuni-accent transition-colors animated-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-mono">
              Contact
            </h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: t.contact.info.location },
                { icon: Phone, text: t.contact.info.phone },
                { icon: Mail, text: t.contact.info.email },
                { icon: Clock, text: t.contact.info.hours },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-kuni-blue-glow mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t dark:border-kuni-gray-line border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">{t.footer.rights}</p>
          <div className="flex gap-5">
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{t.footer.privacy}</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
