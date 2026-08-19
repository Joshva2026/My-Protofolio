import React from 'react';
import { currentFocusData } from '../data/portfolioData';
import { Compass, Sparkles, ArrowRight, Lightbulb } from 'lucide-react';

export default function CurrentFocus() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] glow-orb glow-orb-indigo translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Box Surface */}
        <div className="bg-white rounded-[32px] border border-[#EAE8E1] p-8 sm:p-12 shadow-subtle space-y-10 transition-spring hover:border-[#4F46E5]/10">
          
          {/* Header */}
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" /> Continuous Growth
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
              {currentFocusData.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              {currentFocusData.subheadline}
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentFocusData.topics.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-[#FAF9F5] rounded-2xl border border-[#EAE8E1] space-y-4 hover-spring transition-spring cursor-default shadow-2xs group"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-lg text-[9px] font-mono font-bold bg-white border border-[#EAE8E1] text-[#4F46E5] shadow-2xs">
                    {item.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#0D9488] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                </div>
                <h3 className="text-base font-black text-[#18181B] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed font-semibold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
