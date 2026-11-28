import React, { useRef } from 'react';
import { personalInfo, skillCategories } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Mail, FileText, ArrowDownRight } from 'lucide-react';

// Every technology name shown here comes from the skills data, not a separate list.
const marquee = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

export default function Hero() {
  const ref = useRef(null);

  // Mouse parallax: moves the photo a few pixels against the pointer. Disabled by CSS under reduced motion.
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    el.style.setProperty('--px', `${x * -24}px`);
    el.style.setProperty('--py', `${y * -16}px`);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      className="cinematic-hero relative min-h-[100svh] overflow-hidden bg-[#0E0B14] text-white flex flex-col"
    >
      {/* Full-bleed portrait as the cinematic backdrop */}
      <div className="cinematic-photo absolute inset-0" aria-hidden="true">
        <img
          src={personalInfo.profileImage}
          alt=""
          className="h-full w-full object-cover object-[70%_18%] sm:object-[62%_12%]"
          loading="eager"
        />
      </div>
      {/* Readability and mood: left-side ink fade, bottom vignette, violet tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B14] via-[#0E0B14]/85 via-55% to-[#0E0B14]/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B14] via-transparent to-[#0E0B14]/60" aria-hidden="true" />
      <div className="absolute inset-0 mix-blend-multiply bg-[#2A1F45]/35" aria-hidden="true" />
      <div className="glow-orb-lavender w-[560px] h-[560px] -top-40 -right-20 opacity-40" aria-hidden="true" />

      <div className="relative z-10 flex flex-1 flex-col max-w-[1320px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-36 md:pt-44 pb-12">
        <div className="max-w-3xl space-y-8">
          <div className="hero-reveal-1 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33D770] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#33D770]"></span>
            </span>
            <span className="font-sans text-xs sm:text-[13px] font-semibold">{personalInfo.availabilityTag}</span>
          </div>

          <h1 className="hero-reveal-2 font-serif text-white text-[64px] sm:text-[104px] lg:text-[136px] leading-[0.88] tracking-[-0.03em]">
            <span className="block text-white">{personalInfo.firstName}</span>
            <em className="block italic text-[#B9A6E6] font-normal">{personalInfo.lastName}.</em>
          </h1>

          <div className="hero-reveal-3 space-y-5 max-w-xl">
            <p className="font-sans text-lg sm:text-xl font-semibold">{personalInfo.role}</p>
            <p className="font-sans text-base sm:text-lg text-white/75 leading-[1.7]">{personalInfo.bio}</p>
          </div>

          <div className="hero-reveal-4 flex flex-wrap items-center gap-3 pt-2">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E0B14] text-sm font-semibold hover:bg-[#B9A6E6] transition-colors">
              <Mail className="w-4 h-4" />
              Start a conversation
            </a>
            <a href="/resume.pdf" download="Joshva_Priyan_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors">
              <FileText className="w-4 h-4" />
              Download résumé
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-auto pt-16 border-t border-white/15 flex items-center justify-between gap-6">
          <div className="marquee-track overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
            <div className="marquee-inner flex w-max gap-10 whitespace-nowrap font-serif italic text-xl sm:text-2xl text-white/70">
              {[...marquee, ...marquee].map((t, i) => (
                <span key={i} className="flex items-center gap-10">
                  {t}
                  <span className="text-[#B9A6E6]" aria-hidden="true">✦</span>
                </span>
              ))}
            </div>
          </div>
          <a href="#about" className="hidden md:inline-flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B9A6E6]">
            Scroll <ArrowDownRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
