import React from 'react';
import { aboutData } from '../data/portfolioData';
import { GraduationCap, Compass, CheckCircle2, Target, Lightbulb, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-[#EAE8E1]/80 relative overflow-hidden">
      {/* Subtle Background Glow Orb */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] glow-orb glow-orb-teal -translate-y-1/2 -translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" /> Background & Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] font-medium">
            B.Sc. Information Technology graduate pursuing MCA with a focus on Web Development, AI/ML, and UI/UX.
          </p>
        </div>

        {/* Editorial Multi-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5]/70 rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 lg:p-10 space-y-6 transition-spring hover:border-[#4F46E5]/15 backdrop-blur-xs">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#18181B] flex items-center gap-2 border-b border-[#EAE8E1] pb-3">
                <Lightbulb className="w-5 h-5 text-[#4F46E5]" />
                Personal Statement
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-medium">
                {aboutData.intro}
              </p>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                I enjoy learning by taking on practical coding challenges and building functional projects. My goal is to continually sharpen my technical foundation and contribute meaningfully to development teams as a fresher.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-6 border-t border-[#EAE8E1]">
              <h4 className="text-[10px] font-black text-[#6B7280] uppercase tracking-wider mb-4">
                Learning & Growth Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aboutData.corePillars.map((val) => (
                  <div 
                    key={val.title} 
                    className="bg-white rounded-2xl p-4 border border-[#EAE8E1] shadow-xs space-y-2 transition-spring hover-spring hover:border-[#4F46E5]/30 cursor-default"
                  >
                    <div className="text-[11px] font-bold text-[#18181B] flex items-center gap-1.5 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-[10px] text-[#6B7280] leading-snug font-medium">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Spotlight Sidebar (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* MCA Highlight Box */}
            <div className="bg-[#FAF9F5]/70 rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 relative overflow-hidden transition-spring hover-spring">
              {/* Highlight background accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4F46E5] to-[#0D9488]"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-white border border-[#EAE8E1] rounded-md text-[#4F46E5] shadow-2xs">
                    Pursuing
                  </span>
                </div>

                <div>
                  <div className="text-[10px] font-extrabold text-[#6B7280] uppercase tracking-wider">Education Spotlight</div>
                  <h3 className="text-base sm:text-lg font-black text-[#18181B] mt-1 leading-tight">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-[11px] font-bold text-[#0D9488] font-mono mt-0.5">
                    Currently Pursuing (2024 — Present)
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE8E1] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-[#18181B]">
                      B.Sc. Information Technology
                    </div>
                    <p className="text-[10px] text-[#6B7280] font-medium">
                      Faculty of Information Technology
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#FAF9F5] border border-[#EAE8E1] text-[#0D9488] rounded">
                    Graduated
                  </span>
                </div>
              </div>
            </div>

            {/* Practical Mindset Box */}
            <div className="bg-[#FAF9F5]/70 rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 space-y-3 transition-spring hover-spring">
              <div className="flex items-center gap-2 text-[10px] font-extrabold text-[#0D9488] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Fresher Focus
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#4B5563] leading-relaxed">
                Focused on continuous improvement, solid web foundations, machine learning experimentation, and practical software design.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
