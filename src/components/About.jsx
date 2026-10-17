import React from 'react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                About &amp; Background
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Bridging intuitive craft with <em className="italic text-[#4A4640] font-normal">intelligent</em> software.
            </h2>
          </div>

          <div className="text-sm font-sans font-medium text-[#8A847B]">
            Philosophy &amp; Disciplines
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="font-serif text-2xl sm:text-3xl text-[#1A1814] leading-[1.3] font-normal">
              {aboutData.intro}
            </p>

            <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-relaxed">
              I believe in learning by shipping. From convolutional neural network pipelines for crop diagnostics to full-stack React tools and autonomous C++ robotics, my journey is driven by practical problem-solving.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/10 shadow-xs flex items-center justify-between">
              <div>
                <div className="font-sans text-xs font-semibold text-[#8A847B] uppercase tracking-wider">
                  Current Status
                </div>
                <div className="font-sans text-sm sm:text-base font-semibold text-[#1A1814] mt-1">
                  {personalInfo.status}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ECE7F4] text-[#68529B] hover:bg-[#68529B] hover:text-white transition-all text-xs font-sans font-semibold"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="lg:col-span-6 space-y-4">
            {aboutData.corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="font-serif italic text-lg text-[#68529B]">
                      {pillar.number}
                    </span>
                    <h3 className="font-sans font-semibold text-xl text-[#1A1814] group-hover:text-[#68529B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-[#4A4640] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
