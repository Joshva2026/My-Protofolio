import React from 'react';
import { projectsData } from '../data/portfolioData';
import { Github } from './Icons';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Projects &amp; Systems
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Selected work, end-to-end from concept to <em className="italic text-[#4A4640] font-normal">ship.</em>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1A1814]/10 text-xs font-sans font-semibold text-[#68529B] shadow-2xs">
            <span>{projectsData.length} Featured Works</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-[24px] bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:shadow-xl transition-all duration-500 group"
            >
              {/* Card Top Row: Number, Title, Category */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif italic text-2xl sm:text-3xl text-[#68529B]">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1814] group-hover:text-[#68529B] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8A847B] font-medium mt-1">
                      {project.category} &bull; <span className="font-serif italic text-[#4A4640]">{project.client}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF9FC] border border-[#1A1814]/10 hover:bg-[#68529B] hover:text-white transition-all text-xs font-sans font-semibold text-[#1A1814] self-start sm:self-auto shrink-0 shadow-2xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Large Image Frame */}
              <div className="relative aspect-[16/9] w-full rounded-[20px] overflow-hidden bg-[#ECE7F4] mb-6 border border-[#1A1814]/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  loading="eager"
                />
              </div>

              {/* Bottom Details & Tech Stack */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
                <p className="font-sans text-sm sm:text-base text-[#4A4640] leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full bg-[#1A1814] text-white text-[11px] font-mono font-medium">
                    {project.year}
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#ECE7F4] text-[#68529B] text-[11px] font-sans font-semibold border border-[#68529B]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
