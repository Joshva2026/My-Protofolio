import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './Icons';
import {
  ArrowDown,
  FileText,
  Sparkles,
  Code,
  Brain,
  Palette,
  CheckCircle2,
  MapPin,
  Flame
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('web');
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  const handleDownloadResume = () => {
    setShowResumeNotice(true);
    setTimeout(() => setShowResumeNotice(false), 4000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Grid and Shapes */}
      <div className="grid-bg-overlay"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-in-up">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[#EAE8E1] shadow-xs text-xs font-bold text-[#4B5563] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D9488]"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#18181B] tracking-tight leading-[1.08] sm:leading-[1.05]">
                Hi, I'm <span className="text-[#4F46E5] bg-linear-to-r from-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">{personalInfo.name}</span>.
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[#4B5563] flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#0D9488] rounded-full inline-block"></span>
                {personalInfo.role}
              </p>
            </div>

            {/* Confident Personal Statement */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-medium">
              {personalInfo.bio}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-spring"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                type="button"
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-[#18181B] bg-white hover:bg-[#FAF9F5] border border-[#EAE8E1] rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer transition-spring"
              >
                <FileText className="w-4 h-4 text-[#4F46E5]" />
                <span>Download Resume</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white border border-[#EAE8E1] text-[#4B5563] hover:text-[#18181B] hover:border-[#4F46E5]/40 transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white border border-[#EAE8E1] text-[#4B5563] hover:text-[#4F46E5] hover:border-[#4F46E5]/40 transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:scale-95"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resume Download Notice */}
            {showResumeNotice && (
              <div className="p-3.5 bg-[#EEF2FF] border border-[#4F46E5]/20 rounded-xl text-xs text-[#4F46E5] font-bold flex items-center gap-2.5 max-w-md animate-in fade-in slide-in-from-bottom-2 duration-300">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#0D9488]" />
                <span>Resume preview! Replace `resume.pdf` in `public/` with your actual file.</span>
              </div>
            )}

            {/* Genuine Academic & Project Highlights */}
            <div className="pt-8 border-t border-[#EAE8E1]/80 grid grid-cols-3 gap-6 max-w-lg">
              <div className="space-y-1">
                <div className="text-2xl font-black text-[#18181B] tracking-tight">MCA</div>
                <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">Currently Pursuing</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-[#4F46E5] tracking-tight">B.Sc. IT</div>
                <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">Graduated</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-black text-[#0D9488] tracking-tight">3</div>
                <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wider">Practical Projects</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Card + Integrated Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none space-y-6">
              
              {/* Photo Frame (Premium Rounded Card with absolute background glows) */}
              <div className="relative group animate-float">
                {/* Visual Backdrop Frame */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#4F46E5] to-[#0D9488] opacity-20 blur-md group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Photo Card Container */}
                <div className="relative bg-white rounded-3xl border border-[#EAE8E1] p-3 shadow-md overflow-hidden">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-[#EAE8E1]/40">
                    <img 
                      src={personalInfo.profileImagePlaceholder} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                      loading="eager"
                    />
                    {/* Glass Tag overlay */}
                    <div className="absolute bottom-3 left-3 right-3 glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-[#18181B] shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
                        <span>{personalInfo.location}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#EEF2FF] text-[#4F46E5] rounded-md font-bold border border-[#4F46E5]/10">
                        {personalInfo.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating decoration icon badge */}
                <div className="absolute -top-3.5 -right-3 z-10 bg-[#4F46E5] text-white text-[10px] font-mono font-black px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1 group-hover:scale-105 transition-transform transition-spring">
                  <Sparkles className="w-3 h-3 text-amber-300" /> MCA STUDENT
                </div>
              </div>

              {/* Developer Details & Swapper Card */}
              <div className="bg-white rounded-2xl border border-[#EAE8E1] p-6 shadow-subtle space-y-6 relative z-10 transition-spring hover-spring">
                
                {/* Header Profile Summary */}
                <div className="flex items-center justify-between pb-4 border-b border-[#EAE8E1]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center font-black font-mono text-xs border border-[#4F46E5]/20 shadow-xs">
                      JP
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-[#18181B]">{personalInfo.name}</h3>
                      <p className="text-xs text-[#6B7280] font-medium">B.Sc. IT | MCA Candidate</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-[#FAF9F5] border border-[#EAE8E1] text-[#0D9488] rounded-lg">
                    Fresher
                  </span>
                </div>

                {/* Interactive Focus Switcher */}
                <div className="space-y-2">
                  <div className="text-[10px] font-extrabold text-[#6B7280] uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#4F46E5]" /> Primary Focus Areas
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('web')}
                      aria-label="Filter Web Development Focus"
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer transition-spring ${
                        activeTab === 'web'
                          ? 'bg-white text-[#4F46E5] shadow-xs border border-[#EAE8E1]/80'
                          : 'text-[#6B7280] hover:text-[#18181B]'
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Web Dev</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ai')}
                      aria-label="Filter AI & Machine Learning Focus"
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer transition-spring ${
                        activeTab === 'ai'
                          ? 'bg-white text-[#4F46E5] shadow-xs border border-[#EAE8E1]/80'
                          : 'text-[#6B7280] hover:text-[#18181B]'
                      }`}
                    >
                      <Brain className="w-3.5 h-3.5" />
                      <span>AI / ML</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ui')}
                      aria-label="Filter UI/UX Design Focus"
                      className={`py-2 px-1 rounded-lg text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer transition-spring ${
                        activeTab === 'ui'
                          ? 'bg-white text-[#4F46E5] shadow-xs border border-[#EAE8E1]/80'
                          : 'text-[#6B7280] hover:text-[#18181B]'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" />
                      <span>UI/UX</span>
                    </button>
                  </div>
                </div>

                {/* Tab Content Preview */}
                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] min-h-[120px] flex flex-col justify-center">
                  {activeTab === 'web' && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between text-xs font-bold text-[#18181B]">
                        <span>AI Resume Builder</span>
                        <span className="text-[#4F46E5] font-mono text-[10px] font-bold bg-[#EEF2FF] px-2 py-0.5 rounded">React / Node</span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] leading-normal font-medium">
                        Full-stack web application designed to format ATS-friendly resumes with clean component UI.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">HTML / CSS</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">JavaScript</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">React</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ai' && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between text-xs font-bold text-[#18181B]">
                        <span>AI Leaf Disease Detection</span>
                        <span className="text-[#0D9488] font-mono text-[10px] font-bold bg-[#F0FDF4] px-2 py-0.5 rounded">CNN Model</span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] leading-normal font-medium">
                        Plant leaf disease detection using Convolutional Neural Networks and OpenCV image processing.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">Python</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">TensorFlow</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">OpenCV</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'ui' && (
                    <div className="space-y-2 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between text-xs font-bold text-[#18181B]">
                        <span>Exploring UI/UX Design</span>
                        <span className="text-[#D97706] font-mono text-[10px] font-bold bg-[#FFFBEB] px-2 py-0.5 rounded">Learning</span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] leading-normal font-medium">
                        Practicing wireframing, layout hierarchy, and Figma prototyping to improve web experience quality.
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">Figma</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">Wireframing</span>
                        <span className="px-2 py-0.5 bg-white border border-[#EAE8E1] rounded-md text-[9px] font-mono text-[#4B5563] font-semibold">Prototyping</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Code Badge */}
                <div className="pt-2 flex items-center justify-between text-[10px] text-[#6B7280] font-bold">
                  <span className="flex items-center gap-1 font-mono">
                    <Code className="w-3.5 h-3.5 text-[#4F46E5]" /> CodeAlpha Intern
                  </span>
                  <span className="text-[#18181B]">Practical Project Focus</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
