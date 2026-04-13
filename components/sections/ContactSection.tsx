'use client';

import { useState } from 'react';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const { t } = useApp();
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm
    dark:bg-kuni-navy/60 bg-white
    dark:border-kuni-gray-line border-slate-200
    dark:text-slate-200 text-slate-700
    dark:placeholder-slate-500 placeholder-slate-400
    border transition-all duration-200
    focus:outline-none dark:focus:border-kuni-blue focus:border-kuni-blue
    dark:focus:shadow-[0_0_0_3px_rgba(0,71,171,0.2)] focus:shadow-[0_0_0_3px_rgba(0,71,171,0.1)]`;

  const infoItems = [
    { icon: MapPin, text: t.contact.info.location },
    { icon: Phone, text: t.contact.info.phone },
    { icon: Mail, text: t.contact.info.email },
    { icon: Clock, text: t.contact.info.hours },
  ];

  return (
    <section id="contact" className="py-24 dark:bg-kuni-navy-deep bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l dark:from-kuni-blue/8 from-kuni-blue/4 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">{t.contact.badge}</SectionBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-kuni-navy mb-4">
            {t.contact.headline}
          </h2>
          <p className="max-w-xl mx-auto dark:text-slate-400 text-slate-500 text-lg">
            {t.contact.subheadline}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Contact Info - Left */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card light-mode-card rounded-2xl p-6">
              <h3 className="font-semibold dark:text-white text-kuni-navy mb-5 text-sm uppercase tracking-wider font-mono">
                Contact Information
              </h3>
              <ul className="space-y-4">
                {infoItems.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-kuni-blue/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-kuni-blue-glow" />
                    </div>
                    <span className="text-sm dark:text-slate-300 text-slate-600 mt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA block */}
            <a
              href={`https://wa.me/17870000000?text=${encodeURIComponent('Hello! I\'m interested in Kuni Learning Center.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-[#25D366] text-sm">WhatsApp Us</p>
                <p className="text-xs dark:text-slate-400 text-slate-500">Quick response guaranteed</p>
              </div>
            </a>
          </div>

          {/* Form - Right */}
          <div className="lg:col-span-3">
            <div className="glass-card light-mode-card rounded-3xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold dark:text-white text-kuni-navy mb-2">
                    {t.contact.form.success}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium dark:text-slate-400 text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
                        {t.contact.form.name}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium dark:text-slate-400 text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
                        {t.contact.form.email}
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="jane@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium dark:text-slate-400 text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
                        {t.contact.form.phone}
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+1 (787) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium dark:text-slate-400 text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
                        {t.contact.form.program}
                      </label>
                      <select
                        name="program"
                        value={form.program}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a program...</option>
                        {t.contact.form.programOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium dark:text-slate-400 text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass}
                      placeholder="Tell us about your student's goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-kuni-blue hover:bg-kuni-blue-light disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-200 shadow-glow-blue hover:shadow-glow-accent"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
