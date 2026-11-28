import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

// Light mockup-style hero. The cartoon character is loaded from
// /assets/profile/character.png when that file is added; until then a
// styled placeholder shows. The real photo is used only in the About profile card.
export default function Hero() {
  const [hasCharacter, setHasCharacter] = useState(true);

  return (
    <section id="hero" className="relative overflow-hidden bg-[#F4F2FD] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E4DCF7] blur-3xl opacity-70" aria-hidden="true" />
      <div className="absolute top-40 right-[-80px] w-[380px] h-[380px] rounded-full bg-[#DCE8FF] blur-3xl opacity-70" aria-hidden="true" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-7">
          <p className="hero-reveal-1 font-serif text-3xl sm:text-4xl text-[#7C5CD6]">Hello, I’m</p>

          <h1 className="hero-reveal-2 font-serif text-[56px] sm:text-[84px] lg:text-[96px] leading-[0.95] tracking-[-0.02em] text-[#141226]">
            {personalInfo.firstName}{' '}
            <span className="bg-gradient-to-r from-[#7C5CD6] via-[#8E6BEA] to-[#3C8CFF] bg-clip-text text-transparent">
              {personalInfo.lastName}
            </span>
          </h1>

          <div className="hero-reveal-3 space-y-4">
            <p className="font-sans text-lg sm:text-xl font-semibold text-[#141226]">{personalInfo.role}</p>
            <span className="block w-16 h-1 rounded-full bg-[#7C5CD6]" aria-hidden="true" />
            <p className="font-sans text-base sm:text-lg text-[#4B4766] leading-[1.7] max-w-xl">{personalInfo.bio}</p>
          </div>

          <div className="hero-reveal-4 flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5B3FD0] to-[#7C5CD6] text-white text-sm font-semibold shadow-[0_12px_30px_-10px_rgba(91,63,208,0.6)] hover:brightness-110 transition">
              View My Work <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#7C5CD6]/40 bg-white text-[#5B3FD0] text-sm font-semibold hover:border-[#7C5CD6] transition">
              About Me <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="hero-reveal-4 flex items-center gap-3 pt-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7C5CD6]/25 bg-white text-[#5B3FD0] hover:bg-[#7C5CD6] hover:text-white transition"><Github className="w-4 h-4" /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7C5CD6]/25 bg-white text-[#5B3FD0] hover:bg-[#7C5CD6] hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#7C5CD6]/25 bg-white text-[#5B3FD0] hover:bg-[#7C5CD6] hover:text-white transition"><Mail className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-[520px] aspect-[4/5]">
            <div className="absolute inset-[6%] rounded-[46%_54%_40%_60%/50%_44%_56%_50%] bg-gradient-to-br from-[#D9CCF8] to-[#C9DDFF]" aria-hidden="true" />
            {hasCharacter ? (
              <img
                src="/assets/profile/character-suit.webp"
                alt={`Illustrated character of ${personalInfo.name}`}
                onError={() => setHasCharacter(false)}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_30px_40px_rgba(60,40,120,0.25)]"
              />
            ) : (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-10 rounded-[32px] border-2 border-dashed border-[#7C5CD6]/40 bg-white/60">
                <Sparkles className="w-10 h-10 text-[#7C5CD6]" />
                <p className="mt-4 font-serif text-2xl text-[#141226]">Character illustration</p>
                <p className="mt-2 text-sm text-[#4B4766]">Add /public/assets/profile/character-suit.webp</p>
              </div>
            )}

            <div className="absolute top-2 right-0 z-20 w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-center p-3" aria-label={personalInfo.availabilityTag}>
              <div>
                <span className="block w-2.5 h-2.5 mx-auto rounded-full bg-[#33D770]" aria-hidden="true" />
                <span className="block mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#141226] leading-tight">{personalInfo.availabilityTag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
