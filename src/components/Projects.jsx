import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Github } from './Icons';
import {
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Video
} from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase().includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-y border-[#EAE8E1]/80 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] glow-orb glow-orb-indigo translate-x-32"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
              Highlighted Projects
            </h2>
            <p className="mt-2 text-base text-[#4B5563] max-w-xl font-medium">
              Selected software applications, AI models, and robotics work built during my academic and learning journey.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#FAF9F5] rounded-2xl border border-[#EAE8E1] shadow-subtle max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-white'
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                activeFilter === 'ai'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-white'
              }`}
            >
              AI / ML
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                activeFilter === 'web'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-white'
              }`}
            >
              Web Dev
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('iot')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                activeFilter === 'iot'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-white'
              }`}
            >
              IoT / Robotics
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('data')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                activeFilter === 'data'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-white'
              }`}
            >
              Data Analytics
            </button>
          </div>
        </div>

        {/* Projects List with Varied Visual Compositions */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="bg-[#FAF9F5]/70 rounded-[32px] border border-[#EAE8E1] p-6 sm:p-8 lg:p-10 shadow-subtle hover:border-[#4F46E5]/15 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative group"
              >
                
                {/* Visual Composition Frame (Left or Right based on layout) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-last' : 'lg:order-first'}`}>
                  
                  {/* Visual Render for AI Leaf Disease Project */}
                  {project.visualStyle === 'vision-ai' && (
                    <div className="bg-white rounded-2xl border border-[#EAE8E1] p-5 shadow-xs space-y-4 transition-spring group-hover:scale-[1.01] duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0D9488]/5 rounded-full blur-xl pointer-events-none"></div>
                      
                      <div className="flex items-center justify-between border-b border-[#EAE8E1] pb-3">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-[#0D9488]" />
                          <span className="text-[10px] font-mono font-black text-[#18181B]">CNN Vision Diagnostic UI</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-[#EEF2FF] text-[#4F46E5] font-black rounded-lg">
                          v1.2 Trained
                        </span>
                      </div>
                      
                      {/* Leaf Scan Visual Box */}
                      <div className="relative aspect-video rounded-xl bg-[#FAF9F5] border border-[#EAE8E1] p-4 flex flex-col items-center justify-center text-center space-y-2 overflow-hidden shadow-inner">
                        <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] text-[#0D9488] flex items-center justify-center font-bold text-lg shadow-sm border border-[#EAE8E1]/60">
                          🌿
                        </div>
                        <div>
                          <div className="text-xs font-black text-[#18181B]">Leaf Anomaly Scanner</div>
                          <div className="text-[10px] font-mono font-bold text-[#0D9488]">Diagnostic Confidence: 96.4%</div>
                        </div>
                        <div className="w-full bg-white rounded-lg p-2.5 border border-[#EAE8E1] text-[9px] font-mono text-[#4B5563] text-left leading-normal shadow-2xs">
                          Result: Early Bacterial Spot Detected → Recommended Organic Copper Fungicide
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[#6B7280] font-bold">Dataset Size</div>
                          <div className="font-black text-[#18181B]">15,000+ Images</div>
                        </div>
                        <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[#6B7280] font-bold">Model Speed</div>
                          <div className="font-black text-[#18181B]">&lt; 250ms Inference</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Render for AI Resume Builder */}
                  {project.visualStyle === 'fullstack-app' && (
                    <div className="bg-white rounded-2xl border border-[#EAE8E1] p-5 shadow-xs space-y-4 transition-spring group-hover:scale-[1.01] duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/5 rounded-full blur-xl pointer-events-none"></div>

                      <div className="flex items-center justify-between border-b border-[#EAE8E1] pb-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                          <span className="text-[10px] font-mono font-black text-[#18181B]">ATS Optimization Engine</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-[#EEF2FF] text-[#4F46E5] font-black rounded-lg">
                          Live NLP Match
                        </span>
                      </div>

                      <div className="bg-[#FAF9F5] rounded-xl p-4 border border-[#EAE8E1] space-y-3 shadow-inner">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#18181B]">Target Role Match</span>
                          <span className="text-[10px] font-mono font-black text-[#4F46E5]">88% Match Rate</span>
                        </div>
                        <div className="w-full bg-[#EAE8E1] rounded-full h-2">
                          <div className="bg-[#4F46E5] h-2 rounded-full w-[88%]"></div>
                        </div>
                        <div className="space-y-1 text-[10px] text-[#4B5563]">
                          <div className="flex items-center gap-1.5 text-[#0D9488] font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Found Keywords: TensorFlow, React, DAX, REST API
                          </div>
                          <div className="flex items-center gap-1.5 text-[#D97706] font-bold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> Missing Suggestion: Docker Containerization
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#EEF2FF]/50 border border-[#4F46E5]/20 rounded-xl text-[10px] font-mono text-[#4F46E5] text-center font-black shadow-2xs">
                        PDF Export Engine Ready (ATS Clean Standard)
                      </div>
                    </div>
                  )}

                  {/* Visual Render for IoT Obstacle Car */}
                  {project.visualStyle === 'embedded-iot' && (
                    <div className="bg-white rounded-2xl border border-[#EAE8E1] p-5 shadow-xs space-y-4 transition-spring group-hover:scale-[1.01] duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-xl pointer-events-none"></div>

                      <div className="flex items-center justify-between border-b border-[#EAE8E1] pb-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#D97706]" />
                          <span className="text-[10px] font-mono font-black text-[#18181B]">Robotics Hardware Diagram</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-[#FAF9F5] text-[#D97706] border border-[#EAE8E1] font-black rounded-lg">
                          C++ / ESP32
                        </span>
                      </div>

                      <div className="bg-[#FAF9F5] rounded-xl p-4 border border-[#EAE8E1] space-y-3 font-mono text-[10px] shadow-inner">
                        <div className="flex items-center justify-between text-[#18181B] font-black border-b border-[#EAE8E1]/80 pb-2">
                          <span>[Ultrasonic Sensor]</span>
                          <span className="text-[#0D9488]">Distance &gt; 20cm</span>
                        </div>
                        <div className="text-[10px] text-[#4B5563] space-y-1">
                          <div>↓ 180° Servo Sweep Distance Calculation</div>
                          <div>↓ L298N Dual PWM Motor Speed Control</div>
                          <div className="text-[#4F46E5] font-black">→ Clear Path Confirmed: Drive Forward</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[#6B7280] font-bold">Response Latency</div>
                          <div className="font-black text-[#18181B]">&lt; 15ms Loop</div>
                        </div>
                        <div className="p-2.5 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[#6B7280] font-bold">Microcontroller</div>
                          <div className="font-black text-[#18181B]">Arduino / ESP32</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Render for Power BI Analytics */}
                  {project.visualStyle === 'bi-dashboard' && (
                    <div className="bg-white rounded-2xl border border-[#EAE8E1] p-5 shadow-xs space-y-4 transition-spring group-hover:scale-[1.01] duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F46E5]/5 rounded-full blur-xl pointer-events-none"></div>

                      <div className="flex items-center justify-between border-b border-[#EAE8E1] pb-3">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-[#4F46E5]" />
                          <span className="text-[10px] font-mono font-black text-[#18181B]">Power BI Executive Suite</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 bg-[#EEF2FF] text-[#4F46E5] font-black rounded-lg">
                          DAX Measures
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[9px] text-[#6B7280] font-bold">Total Revenue YoY</div>
                          <div className="text-sm font-black text-[#18181B]">$1.42M</div>
                          <div className="text-[9px] font-black text-[#0D9488]">+14.2% Growth</div>
                        </div>
                        <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] shadow-2xs">
                          <div className="text-[9px] text-[#6B7280] font-bold">Customer Churn DAX</div>
                          <div className="text-sm font-black text-[#18181B]">3.1%</div>
                          <div className="text-[9px] font-black text-[#4F46E5]">Target Met</div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#EAE8E1] text-[10px] font-mono text-[#4B5563] space-y-1.5 shadow-2xs">
                        <div className="font-black text-[#18181B]">Data Architecture:</div>
                        <div className="leading-relaxed font-medium">Star Schema Database → Power Query ETL → DAX Measures → Interactive Drill-Down</div>
                      </div>
                    </div>
                  )}

                </div>

                {/* Project Details Content (Right or Left 7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Badge & Title */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EEF2FF] text-[#4F46E5] border border-[#4F46E5]/15">
                        {project.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span className="text-xs text-[#6B7280] font-bold">{project.type}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#18181B] tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Problem & Solution Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
                    <div className="p-4 bg-white rounded-2xl border border-[#EAE8E1] transition-spring hover:border-[#4F46E5]/20 shadow-2xs">
                      <div className="font-black text-[#18181B] mb-1.5 text-xs">Problem Statement</div>
                      <p className="text-[#6B7280] leading-relaxed font-medium">{project.problem}</p>
                    </div>
                    <div className="p-4 bg-white rounded-2xl border border-[#EAE8E1] transition-spring hover:border-[#4F46E5]/20 shadow-2xs">
                      <div className="font-black text-[#18181B] mb-1.5 text-xs">Engineering Solution</div>
                      <p className="text-[#6B7280] leading-relaxed font-medium">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-[#18181B] uppercase tracking-wider">Key Features</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4B5563] font-medium">
                      {project.keyFeatures.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-[#6B7280] uppercase tracking-wider">Technologies Used</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white border border-[#EAE8E1] text-[#18181B] shadow-2xs hover:border-[#4F46E5]/25 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-[#18181B] bg-white hover:bg-[#FAF9F5] border border-[#EAE8E1] rounded-xl transition-all shadow-subtle hover:shadow-sm hover:-translate-y-0.5 active:scale-95 transition-spring cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-[#4B5563]" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-bold text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl transition-all shadow-subtle hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-spring cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {!project.liveDemo && project.visualStyle === 'embedded-iot' && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#D97706] bg-[#FFFBEB] border border-[#FDE68A] rounded-xl shadow-2xs">
                        <Video className="w-3.5 h-3.5" /> Hardware Video Prototype
                      </span>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
