import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { Mail, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden min-h-[92vh] flex items-center bg-[#FAF9FC]">
      {/* Background delicate radial orb */}
      <div className="glow-orb-lavender w-[550px] h-[550px] -top-24 right-[10%] opacity-40"></div>
      <div className="glow-orb-lavender w-[400px] h-[400px] bottom-10 left-[5%] opacity-25"></div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Eyebrow, Name, Role & Socials */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-3 hero-reveal-1">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Portfolio &amp; R&eacute;sum&eacute;
              </span>
            </div>

            {/* Massive Name Headline in Instrument Serif */}
            <h1 className="font-serif text-[64px] sm:text-[88px] lg:text-[112px] leading-[0.93] tracking-[-2px] text-[#1A1814] select-none hero-reveal-2">
              <span>{personalInfo.firstName || 'Joshva'}</span>
              <br />
              <em className="italic text-[#4A4640] font-normal">
                {personalInfo.lastName || 'Priyan'}
              </em>
            </h1>

            {/* Role Capsule Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#68529B] text-white shadow-sm flex-wrap hero-reveal-3">
              <div className="w-2.5 h-2.5 rounded-full bg-white relative shrink-0">
                <span className="animate-ping absolute inset-0 inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-tight">
                {personalInfo.role}
              </span>
              <span className="w-px h-3.5 bg-white/30 hidden sm:inline-block"></span>
              <span className="font-serif italic text-white/90 text-sm hidden sm:inline-block">
                {personalInfo.roleItalic}
              </span>
            </div>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-[#4A4640] font-sans font-normal leading-[1.6] max-w-xl hero-reveal-3">
              {personalInfo.bio}
            </p>

            {/* Social Pill Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 hero-reveal-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#68529B] text-white text-xs sm:text-[13px] font-sans font-medium hover:bg-[#584485] transition-all shadow-xs hover:shadow-sm active:scale-98"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#68529B] text-white text-xs sm:text-[13px] font-sans font-medium hover:bg-[#584485] transition-all shadow-xs hover:shadow-sm active:scale-98"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1A1814]/15 text-[#1A1814] text-xs sm:text-[13px] font-sans font-medium hover:bg-[#FAF9FC] transition-all shadow-2xs hover:shadow-xs active:scale-98"
              >
                <Mail className="w-3.5 h-3.5 text-[#68529B]" />
                <span>Email</span>
              </a>

              <a
                href="/resume.pdf"
                download="Joshva_Priyan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#1A1814]/15 text-[#1A1814] text-xs sm:text-[13px] font-sans font-medium hover:bg-[#FAF9FC] transition-all shadow-2xs hover:shadow-xs active:scale-98"
              >
                <FileText className="w-3.5 h-3.5 text-[#68529B]" />
                <span>R&eacute;sum&eacute;</span>
              </a>
            </div>

          </div>

          {/* Right Column: Framer Portrait Card Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative hero-reveal-card">
            
            {/* Decorative pattern behind card */}
            <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full border border-[#68529B]/10 pointer-events-none -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-56 h-56 rounded-full border border-[#68529B]/10 pointer-events-none -z-0"></div>

            {/* Framer Portrait Card Container */}
            <div className="w-full max-w-[360px] h-[450px] sm:h-[480px] framer-lavender-card p-2 relative overflow-hidden group z-10 border border-white/70">
              
              {/* Photo */}
              <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#ECE7F4] relative">
                <img
                  src={personalInfo.profileImage || "/assets/profile/avatar.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="eager"
                />

                {/* Subtle vignette gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>

                {/* Bottom Card Identity Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-sans font-medium">
                  <span className="tracking-wide drop-shadow-sm">{personalInfo.location}</span>
                  <span className="font-serif italic text-sm text-white/90 drop-shadow-sm">
                    {personalInfo.name}
                  </span>
                </div>
              </div>

              {/* Floating Frosted Glass Availability Badge */}
              <div className="absolute top-5 left-5 right-5 sm:right-auto z-20">
                <div className="framer-glass-badge rounded-full px-4 py-2 flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#33D770] opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#33D770]"></span>
                  </span>
                  <span className="text-xs font-sans font-semibold text-[#1A1814] tracking-tight">
                    {personalInfo.status}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
