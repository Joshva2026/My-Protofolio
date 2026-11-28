import React from 'react';
import { aboutData, numbersData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">About</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Craft meets <em className="italic text-[#4A4640] font-normal">intelligent</em> software.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-[1.7]">{aboutData.intro}</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-px bg-[#1A1814]/10 rounded-[24px] overflow-hidden border border-[#1A1814]/10">
            {aboutData.corePillars.map((p) => (
              <div key={p.number} className="group bg-white p-7 sm:p-9 flex gap-6 hover:bg-[#ECE7F4]/50 transition-colors duration-500">
                <span className="font-serif italic text-3xl text-[#68529B] shrink-0">{p.number}</span>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1814]">{p.title}</h3>
                  <p className="font-sans text-sm sm:text-base text-[#4A4640] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 border-t border-[#1A1814]/10 pt-12">
          {numbersData.map((n) => (
            <div key={n.label} className="space-y-2">
              <dt className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#8A847B]">{n.label}</dt>
              <dd className="font-serif text-6xl sm:text-7xl text-[#1A1814] leading-none">
                {n.value}<span className="text-[#68529B]">{n.suffix}</span>
              </dd>
              <p className="font-sans text-sm text-[#4A4640] leading-relaxed">{n.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
