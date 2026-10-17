import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Experience &amp; Internships
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Hands-on training and <em className="italic text-[#4A4640] font-normal">internship</em> milestones.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1A1814]/10 text-xs font-sans font-semibold text-[#68529B] shadow-2xs">
            <span>{experienceData.length} Completed Roles</span>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Summary */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-relaxed">
              Applied engineering experience working on remote teams, shipping functional user interfaces, and refining code quality under structured review.
            </p>
            <div className="p-5 rounded-2xl bg-[#ECE7F4]/60 border border-[#68529B]/15">
              <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#68529B] uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" /> Industry Preparation
              </div>
              <p className="font-sans text-xs text-[#4A4640] mt-1.5 leading-normal">
                Committed to disciplined Git workflows, modular component architecture, and responsive design systems.
              </p>
            </div>
          </div>

          {/* Right Column: Experience Cards */}
          <div className="lg:col-span-8 space-y-6">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-2xl bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#1A1814] group-hover:text-[#68529B] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="font-serif italic text-lg text-[#68529B] mt-0.5">
                      at {exp.company} <span className="font-sans text-xs not-italic text-[#8A847B]">({exp.location})</span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF9FC] border border-[#1A1814]/10 text-[#8A847B] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#4A4640] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="font-sans text-xs sm:text-sm text-[#4A4640] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#68529B] mt-2 shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1A1814]/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#FAF9FC] border border-[#1A1814]/10 text-[11px] font-sans font-medium text-[#4A4640]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
