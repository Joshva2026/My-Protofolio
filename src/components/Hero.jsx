import React from 'react';
import { personalInfo, skillCategories } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Mail, FileText, ArrowDownRight } from 'lucide-react';

// Every technology name shown here comes from the skills data, not a separate list.
const marquee = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] pt-32 pb-16 md:pt-40 overflow-hidden bg-[#FAF9FC] flex flex-col">
      <div className="glow-orb-lavender w-[600px] h-[600px] -top-40 right-[-5%] opacity-50" aria-hidden="true"></div>
      <div className="glow-orb-lavender w-[420px] h-[420px] bottom-0 left-[-5%] opacity-30" aria-hidden="true"></div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-end flex-1">
          <div className="lg:col-span-8 space-y-8">
            <div className="hero-reveal-1 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#1A1814]/10 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33D770] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#33D770]"></span>
              </span>
              <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1A1814]">{personalInfo.availabilityTag}</span>
            </div>

            <h1 className="hero-reveal-2 font-serif text-[64px] sm:text-[96px] lg:text-[128px] leading-[0.9] tracking-[-0.03em] text-[#1A1814]">
              <span className="block">{personalInfo.firstName}</span>
              <em className="block italic text-[#68529B] font-normal">{personalInfo.lastName}.</em>
            </h1>

            <div className="hero-reveal-3 space-y-5 max-w-2xl">
              <p className="font-sans text-lg sm:text-xl font-semibold text-[#1A1814]">{personalInfo.role}</p>
              <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-[1.65]">{personalInfo.bio}</p>
            </div>

            <div className="hero-reveal-4 flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1814] text-white text-sm font-semibold hover:bg-[#68529B] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Start a conversation
              </a>
              <a
                href="/resume.pdf"
                download="Joshva_Priyan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#1A1814]/15 text-[#1A1814] text-sm font-semibold hover:border-[#68529B]/40 transition-colors"
              >
                <FileText className="w-4 h-4 text-[#68529B]" />
                Download résumé
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#1A1814]/15 hover:border-[#68529B]/40 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#1A1814]/15 hover:border-[#68529B]/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="hero-reveal-card lg:col-span-4 relative">
            <div className="framer-lavender-card p-2 max-w-[380px] mx-auto lg:ml-auto">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-[#ECE7F4]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="font-serif italic text-2xl">{personalInfo.name}</p>
                  <p className="text-xs tracking-wide text-white/80 mt-1">{personalInfo.location} · {personalInfo.responseTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-reveal-4 mt-16 border-t border-[#1A1814]/10 pt-6 flex items-center justify-between gap-6">
          <div className="marquee-track overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee-inner flex w-max gap-10 whitespace-nowrap font-serif italic text-xl sm:text-2xl text-[#4A4640]">
              {[...marquee, ...marquee].map((t, i) => (
                <span key={i} className="flex items-center gap-10">
                  {t}
                  <span className="text-[#68529B]" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          </div>
          <a href="#about" className="hidden md:inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#68529B]">
            Scroll <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
