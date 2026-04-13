'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useApp } from '@/lib/context';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';

export function Navbar() {
  const { t, locale, setLocale, isDark, toggleDark } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinkClass = clsx(
    'animated-underline text-sm font-medium transition-colors duration-200',
    'dark:text-slate-300 dark:hover:text-kuni-accent text-slate-600 hover:text-kuni-blue'
  );

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'dark:bg-kuni-black/95 bg-white/95 backdrop-blur-md shadow-lg dark:shadow-kuni-navy/50'
            : 'dark:bg-transparent bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group logo-rabbit">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  {/* Rabbit SVG */}
                  <circle cx="20" cy="20" r="19" fill="url(#logoGrad)" stroke="rgba(0,212,255,0.3)" strokeWidth="1"/>
                  {/* Ears */}
                  <ellipse cx="14" cy="11" rx="3" ry="7" fill="#1E6FE0" opacity="0.9"/>
                  <ellipse cx="26" cy="11" rx="3" ry="7" fill="#1E6FE0" opacity="0.9"/>
                  <ellipse cx="14" cy="11" rx="1.5" ry="5" fill="#3B9EFF" opacity="0.5"/>
                  <ellipse cx="26" cy="11" rx="1.5" ry="5" fill="#3B9EFF" opacity="0.5"/>
                  {/* Head */}
                  <ellipse cx="20" cy="22" rx="9" ry="8" fill="#1E6FE0"/>
                  {/* Eyes */}
                  <circle cx="17" cy="20" r="1.5" fill="#00D4FF"/>
                  <circle cx="23" cy="20" r="1.5" fill="#00D4FF"/>
                  <circle cx="17.5" cy="19.5" r="0.5" fill="white"/>
                  <circle cx="23.5" cy="19.5" r="0.5" fill="white"/>
                  {/* Nose */}
                  <ellipse cx="20" cy="23.5" rx="1" ry="0.7" fill="#00D4FF"/>
                  {/* Body */}
                  <ellipse cx="20" cy="32" rx="7" ry="5" fill="#0047AB"/>
                  <defs>
                    <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#00153D"/>
                      <stop offset="100%" stopColor="#000C26"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="block font-display font-bold text-lg leading-tight dark:text-white text-kuni-navy">
                  Kuni
                </span>
                <span className="block text-xs font-mono tracking-widest text-kuni-blue-glow uppercase">
                  Learning Center
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/#hero" className={navLinkClass}>{t.nav.home}</Link>
              <Link href="/#about" className={navLinkClass}>{t.nav.about}</Link>

              {/* Programs Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className={clsx(navLinkClass, 'flex items-center gap-1')}
                  onClick={() => setProgramsOpen(o => !o)}
                  aria-expanded={programsOpen}
                >
                  {t.nav.programs}
                  <ChevronDown className={clsx('w-4 h-4 transition-transform duration-200', programsOpen && 'rotate-180')} />
                </button>
                {programsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 dark:bg-kuni-navy bg-white rounded-xl shadow-2xl dark:shadow-kuni-navy/80 border dark:border-kuni-gray-line border-slate-200 overflow-hidden">
                    <div className="p-1">
                      <Link
                        href="/programs/sat-prep"
                        onClick={() => setProgramsOpen(false)}
                        className="block px-4 py-2.5 text-sm dark:text-slate-300 text-slate-600 dark:hover:bg-kuni-blue/20 hover:bg-kuni-blue/10 dark:hover:text-kuni-accent hover:text-kuni-blue rounded-lg transition-colors"
                      >
                        {t.nav.satPrep}
                      </Link>
                      <Link
                        href="/programs/science-fair"
                        onClick={() => setProgramsOpen(false)}
                        className="block px-4 py-2.5 text-sm dark:text-slate-300 text-slate-600 dark:hover:bg-kuni-blue/20 hover:bg-kuni-blue/10 dark:hover:text-kuni-accent hover:text-kuni-blue rounded-lg transition-colors"
                      >
                        {t.nav.scienceFair}
                      </Link>
                      <Link
                        href="/programs/college-counseling"
                        onClick={() => setProgramsOpen(false)}
                        className="block px-4 py-2.5 text-sm dark:text-slate-300 text-slate-600 dark:hover:bg-kuni-blue/20 hover:bg-kuni-blue/10 dark:hover:text-kuni-accent hover:text-kuni-blue rounded-lg transition-colors"
                      >
                        {t.nav.collegeCounseling}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/blog" className={navLinkClass}>{t.nav.blog}</Link>
              <Link href="/#contact" className={navLinkClass}>{t.nav.contact}</Link>
            </div>

            {/* Right Controls */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-kuni-gray-line/30 rounded-full p-1">
                <button
                  onClick={() => setLocale('en')}
                  className={clsx(
                    'px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200',
                    locale === 'en'
                      ? 'bg-kuni-blue text-white shadow-sm'
                      : 'dark:text-slate-400 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
                  )}
                >
                  EN
                </button>
                <button
                  onClick={() => setLocale('es')}
                  className={clsx(
                    'px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200',
                    locale === 'es'
                      ? 'bg-kuni-blue text-white shadow-sm'
                      : 'dark:text-slate-400 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200'
                  )}
                >
                  ES
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg dark:text-slate-400 text-slate-500 dark:hover:text-kuni-accent hover:text-kuni-blue transition-colors dark:hover:bg-kuni-gray-line/40 hover:bg-slate-200"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* CTA */}
              <Link
                href="/#contact"
                className="px-5 py-2.5 text-sm font-semibold bg-kuni-blue hover:bg-kuni-blue-light text-white rounded-lg transition-all duration-200 shadow-glow-sm hover:shadow-glow-blue"
              >
                {t.nav.registerCta}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleDark}
                className="p-2 dark:text-slate-400 text-slate-500"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="p-2 dark:text-slate-300 text-slate-600"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mobile-menu-open dark:bg-kuni-black/98 bg-white/98 backdrop-blur-md border-t dark:border-kuni-gray-line border-slate-200">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Language toggle mobile */}
              <div className="flex items-center gap-2 pb-4 border-b dark:border-kuni-gray-line border-slate-200">
                <span className="text-xs dark:text-slate-500 text-slate-400 uppercase tracking-wider font-mono">Language:</span>
                <button
                  onClick={() => setLocale('en')}
                  className={clsx('px-3 py-1 text-xs font-mono rounded-full', locale === 'en' ? 'bg-kuni-blue text-white' : 'dark:text-slate-400 text-slate-500')}
                >EN</button>
                <button
                  onClick={() => setLocale('es')}
                  className={clsx('px-3 py-1 text-xs font-mono rounded-full', locale === 'es' ? 'bg-kuni-blue text-white' : 'dark:text-slate-400 text-slate-500')}
                >ES</button>
              </div>

              {[
                { href: '/#hero', label: t.nav.home },
                { href: '/#about', label: t.nav.about },
                { href: '/#contact', label: t.nav.contact },
                { href: '/blog', label: t.nav.blog },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium dark:text-slate-200 text-slate-700 py-2"
                >
                  {item.label}
                </Link>
              ))}

              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-kuni-blue-glow mb-2">{t.nav.programs}</p>
                <div className="pl-3 flex flex-col gap-2">
                  {[
                    { href: '/programs/sat-prep', label: t.nav.satPrep },
                    { href: '/programs/science-fair', label: t.nav.scienceFair },
                    { href: '/programs/college-counseling', label: t.nav.collegeCounseling },
                  ].map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm dark:text-slate-400 text-slate-600 py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 font-semibold bg-kuni-blue text-white rounded-lg"
              >
                {t.nav.registerCta}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
