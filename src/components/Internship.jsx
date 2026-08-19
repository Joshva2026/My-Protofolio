import React from 'react';
import { internshipData } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Award } from 'lucide-react';

export default function Internship() {
  return (
    <section id="internship" className="py-20 md:py-28 bg-[#FAF9F5] border-b border-[#EAE8E1]/80 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-0 w-[400px] h-[400px] glow-orb glow-orb-teal -translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Hands-On Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-2 text-base text-[#4B5563] font-medium">
            Practical software development tasks and virtual internship programs completed.
          </p>
        </div>

        {/* CodeAlpha Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipData.map((item) => (
            <div
              key={item.company}
              className="bg-white rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 lg:p-10 shadow-subtle hover-spring transition-spring flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold bg-[#EEF2FF] text-[#4F46E5] border border-[#4F46E5]/15">
                      {item.count}
                    </span>
                    <h3 className="text-xl font-black text-[#18181B] leading-tight">
                      {item.company}
                    </h3>
                    <p className="text-xs font-bold text-[#0D9488] font-mono tracking-wide uppercase">
                      {item.role}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-[#EAE8E1] text-[#4F46E5] flex items-center justify-center font-bold shadow-2xs">
                    <Award className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#EAE8E1] flex items-center gap-2.5 text-xs font-bold text-[#18181B]">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>Confirmed CodeAlpha Internship Completion</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
