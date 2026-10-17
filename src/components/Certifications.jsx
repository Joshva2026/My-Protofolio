import React from 'react';
import { certificationsPlaceholderData } from '../data/portfolioData';
import { Award, Image, Plus } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-white border-b border-[#EAE8E1]/80 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-0 w-[400px] h-[400px] glow-orb glow-orb-teal -translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Credentials & Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Certifications
          </h2>
          <p className="mt-2 text-base text-[#4B5563] font-medium">
            Certificate area prepared for attaching verified course completion credentials.
          </p>
        </div>

        {/* Certification Placeholder Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsPlaceholderData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5]/70 rounded-3xl border border-dashed border-slate-300 p-6 shadow-subtle hover:border-[#4F46E5]/40 hover:bg-[#FAF9F5] transition-all duration-300 flex flex-col justify-between hover-spring transition-spring group"
            >
              <div className="space-y-5">
                
                {/* Certificate Image Frame Placeholder */}
                <div className="aspect-video rounded-2xl bg-white border border-[#EAE8E1] flex flex-col items-center justify-center text-center p-4 space-y-2.5 shadow-2xs group-hover:border-[#4F46E5]/20 transition-all duration-300">
                  <Image className="w-8 h-8 text-[#9CA3AF] group-hover:scale-105 group-hover:text-[#4F46E5]/50 transition-all duration-300" />
                  <div className="text-[10px] font-mono text-[#6B7280]">
                    {cert.imagePlaceholder}
                  </div>
                  <span className="text-[9px] text-[#4B5563] bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#EAE8E1] font-bold">
                    Add certificate image in `public/assets/certificates/`
                  </span>
                </div>

                {/* Title & Provider */}
                <div className="space-y-1">
                  <h3 className="text-base font-black text-[#18181B] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] font-bold">
                    {cert.provider}
                  </p>
                </div>

              </div>

              {/* Action Note */}
              <div className="pt-4 mt-5 border-t border-[#EAE8E1] flex items-center justify-between text-xs text-[#4F46E5] font-bold">
                <span className="flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#4F46E5]/80 shrink-0" /> Ready for your certificate details
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
