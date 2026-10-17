import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Download, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Numbers', href: '#by-the-numbers' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-5 px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-[1320px] mx-auto pointer-events-auto">
        <div className={`framer-glass-nav rounded-full px-5 md:px-7 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-2.5 bg-[#FAF9FC]/90' : ''
        }`}>
          
          {/* Logo in Instrument Serif */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-1.5 text-xl sm:text-2xl font-serif tracking-tight select-none group"
          >
            <span className="text-[#1A1814] font-normal group-hover:text-[#68529B] transition-colors">
              {personalInfo.firstName || 'Joshva'}
            </span>
            <span className="italic text-[#4A4640] group-hover:text-[#68529B] transition-colors">
              {personalInfo.lastName || 'Priyan'}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-sans font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#1A1814] font-semibold bg-[#FAF9FC] shadow-2xs'
                      : 'text-[#4A4640] hover:text-[#1A1814] hover:bg-black/[0.03]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Joshva_Priyan_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold text-white bg-[#68529B] hover:bg-[#584485] shadow-sm hover:shadow-md transition-all active:scale-98 select-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1A1814] hover:bg-black/[0.05] rounded-full transition-colors ml-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 framer-glass-nav rounded-3xl animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl border border-white/80">
            <nav className="flex flex-col gap-1.5 py-1">
              {navItems.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-sans font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-[#68529B] bg-[#ECE7F4] font-semibold'
                        : 'text-[#4A4640] hover:text-[#1A1814] hover:bg-black/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </a>
                );
              })}
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
