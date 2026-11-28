import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  // Opens the visitor's own mail app with the message pre-filled. Nothing is faked as sent.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Opportunity from ${form.name || 'your website'}`;
    const body = `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    'w-full bg-transparent border-b border-white/20 focus:border-[#B9A6E6] outline-none py-3 text-white placeholder:text-white/35 font-sans text-base transition-colors';

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0E0B14] text-white py-24 md:py-36">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] rounded-full bg-[#68529B]/30 blur-[140px]" aria-hidden="true" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-6 h-0.5 bg-[#B9A6E6] rounded-full"></span>
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#B9A6E6] uppercase">Contact</span>
        </div>

        <h2 className="font-serif text-white text-[52px] sm:text-[80px] lg:text-[112px] leading-[0.95] tracking-[-0.02em]">
          Let’s build <em className="italic text-[#B9A6E6] font-normal">something</em> that matters.
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
          <div className="lg:col-span-5 space-y-10">
            <p className="font-sans text-lg text-white/70 leading-relaxed">
              Open to entry-level software development, full-stack and AI/ML roles, and internships. Replies {personalInfo.responseTime.toLowerCase()}.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="group flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/45 mb-2">Email</span>
                  <span className="font-serif text-2xl sm:text-3xl break-all">{personalInfo.email}</span>
                </span>
                <ArrowUpRight className="w-6 h-6 shrink-0 text-[#B9A6E6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            <label className="space-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">Name</span>
              <input required className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" autoComplete="name" />
            </label>
            <label className="space-y-1">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">Email</span>
              <input required type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" autoComplete="email" />
            </label>
            <label className="space-y-1 sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">Subject</span>
              <input className={inputClass} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Role, project or internship" />
            </label>
            <label className="space-y-1 sm:col-span-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/45">Message</span>
              <textarea required rows={4} className={`${inputClass} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about the opportunity." />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs text-white/45 max-w-sm">Opens your mail app with the message ready to send.</p>
              <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B9A6E6] text-[#0E0B14] text-sm font-semibold hover:bg-white transition-colors">
                Send message <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
