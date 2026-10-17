import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#FAF9FC] border-t border-[#1A1814]/10 py-12 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo in Instrument Serif */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-[#1A1814]">
              {personalInfo.firstName || 'Joshva'} <em className="italic text-[#4A4640]">{personalInfo.lastName || 'Priyan'}</em>
            </span>
            <span className="text-xs font-sans text-[#8A847B] hidden md:inline ml-2 pl-3 border-l border-[#1A1814]/15">
              MCA Student &bull; Web &amp; AI Developer
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs font-sans text-[#8A847B] text-center">
            &copy; {new Date().getFullYear()} {personalInfo.name} &bull; All rights reserved.
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white border border-[#1A1814]/10 text-[#4A4640] hover:text-[#68529B] transition-colors shadow-2xs"
              aria-label="GitHub Profile"
            >
              <Github className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white border border-[#1A1814]/10 text-[#4A4640] hover:text-[#68529B] transition-colors shadow-2xs"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full bg-white border border-[#1A1814]/10 text-[#4A4640] hover:text-[#68529B] transition-colors shadow-2xs"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#1A1814]/10 text-xs font-sans font-semibold text-[#1A1814] hover:bg-[#68529B] hover:text-white transition-all shadow-2xs cursor-pointer ml-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
