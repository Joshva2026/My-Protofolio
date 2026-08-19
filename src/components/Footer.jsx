import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import { ArrowUp, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#FAF9F5] border-t border-[#EAE8E1]/85 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#4F46E5] text-white flex items-center justify-center font-mono text-xs font-black shadow-xs">
              J
            </div>
            <span className="text-sm font-black text-[#18181B] tracking-tight">
              {personalInfo.name} <span className="text-[#4F46E5] font-extrabold">Portfolio</span>
            </span>
            <span className="text-xs text-[#6B7280] hidden lg:inline font-semibold">| Master of Computer Applications</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#6B7280] text-center font-semibold">
            © {new Date().getFullYear()} {personalInfo.name}. Crafted with clean code & modern visual design.
          </div>

          {/* Back to Top Action */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#EAE8E1] text-xs font-bold text-[#4B5563] hover:text-[#4F46E5] hover:border-[#4F46E5]/30 transition-all shadow-subtle cursor-pointer active:scale-95 transition-spring"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#4F46E5] animate-pulse" />
          </button>

        </div>
      </div>
    </footer>
  );
}
