import React from 'react';
import { educationData } from '../data/portfolioData';
import Timeline from './Timeline';

export default function Education() {
  const items = educationData.map((e) => ({
    id: e.id,
    period: `${e.period} · ${e.status}`,
    title: e.degree,
    subtitle: e.institution,
    description: e.description,
    tags: e.tags,
  }));

  return (
    <section id="education" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Education
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Foundations, <em className="italic text-[#4A4640] font-normal">built on.</em>
            </h2>
          </div>
        </div>
        <Timeline items={items} />
      </div>
    </section>
  );
}
