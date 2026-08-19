import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] glow-orb glow-orb-indigo translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" /> Educational Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Education Journey
          </h2>
          <p className="mt-2 text-base text-[#4B5563] font-medium">
            Academic qualifications in Information Technology and Computer Applications.
          </p>
        </div>

        {/* Clean Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 lg:p-10 shadow-subtle hover-spring transition-spring flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Degree Header & Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-mono font-bold border shadow-2xs ${
                      edu.status === 'Currently Pursuing'
                        ? 'bg-[#EEF2FF] text-[#4F46E5] border-[#4F46E5]/15'
                        : 'bg-[#F0FDF4] text-[#0D9488] border-[#0D9488]/15'
                    }`}>
                      {edu.status}
                    </span>
                    <h3 className="text-xl font-black text-[#18181B] leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-bold text-[#4B5563]">
                      {edu.institution}
                    </p>
                  </div>
                  
                  {/* Period Tag */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6B7280] shrink-0 bg-[#FAF9F5] px-3.5 py-1.5 rounded-xl border border-[#EAE8E1] shadow-2xs self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-medium">
                  {edu.description}
                </p>

              </div>

              {/* Bottom Status Bar */}
              <div className="pt-4 mt-6 border-t border-[#EAE8E1] flex items-center justify-between text-[10px] text-[#6B7280] font-bold">
                <span>Academic Status</span>
                <span className="font-mono text-[#18181B] font-black flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" /> {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
