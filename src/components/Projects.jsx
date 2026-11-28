import React, { useRef, useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Github } from './Icons';
import { ArrowUpRight, X } from 'lucide-react';

function ProjectDialog({ project, onClose, dialogRef }) {
  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.close(); }}
      className="project-dialog m-auto w-[min(92vw,760px)] max-h-[88vh] rounded-[24px] bg-white p-0 text-[#1A1814] shadow-2xl backdrop:bg-[#1A1814]/50 backdrop:backdrop-blur-sm"
      aria-labelledby="project-dialog-title"
    >
      {project && (
        <div className="relative">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE7F4]">
            <img src={project.image} alt="" className="w-full h-full object-cover object-top" />
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#1A1814] shadow-sm hover:bg-white"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#68529B]">
              <span>{project.number}</span>
              <span className="w-6 h-px bg-[#68529B]/40" aria-hidden="true"></span>
              <span>{project.year}</span>
            </div>

            <h3 id="project-dialog-title" className="font-serif text-3xl sm:text-4xl leading-tight">
              {project.title}
            </h3>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <dt className="text-[#8A847B] text-xs uppercase tracking-wider mb-1">Category</dt>
                <dd className="text-[#1A1814]">{project.category}</dd>
              </div>
              <div>
                <dt className="text-[#8A847B] text-xs uppercase tracking-wider mb-1">Client / Context</dt>
                <dd className="text-[#1A1814]">{project.client}</dd>
              </div>
            </dl>

            <p className="font-sans text-base leading-relaxed text-[#4A4640]">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-[#ECE7F4] text-[#68529B] text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1814] text-white text-sm font-semibold hover:bg-[#68529B] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View code on GitHub
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#ECE7F4] text-[#68529B] text-sm font-semibold">
                  Private repository
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

function ProjectRow({ project, index, onOpen }) {
  const reversed = index % 2 === 1;
  return (
    <article className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group lg:col-span-7 relative block w-full text-left rounded-[22px] overflow-hidden bg-[#ECE7F4] border border-[#1A1814]/8 aspect-[16/10] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68529B]"
        aria-label={`Open case details for ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="project-img w-full h-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 bg-gradient-to-br from-[#ECE7F4] via-white to-[#E4DCF2]">
            <span className="font-serif italic text-3xl text-[#68529B]">{project.title}</span>
          </div>
        )}
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-[#1A1814] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100">
          View case details <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </button>

      <div className="lg:col-span-5 space-y-5">
        <div className="flex items-baseline gap-4">
          <span className="font-serif italic text-3xl text-[#68529B]">{project.number}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A847B]">{project.badge}</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl leading-[1.1] text-[#1A1814]">{project.title}</h3>
        <p className="font-sans text-sm text-[#8A847B]">
          {project.category} &bull; <span className="font-serif italic text-[#4A4640]">{project.client}</span>
        </p>
        <p className="font-sans text-base leading-relaxed text-[#4A4640]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-white border border-[#68529B]/15 text-[#68529B] text-[11px] font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);

  const openProject = (project) => {
    setActive(project);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Projects &amp; Systems
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Selected work, from concept to <em className="italic text-[#4A4640] font-normal">ship.</em>
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1A1814]/10 text-xs font-sans font-semibold text-[#68529B] shadow-2xs self-start md:self-auto">
            <span>{projectsData.length} projects</span>
          </div>
        </div>

        <div className="space-y-20 md:space-y-28">
          {projectsData.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} onOpen={openProject} />
          ))}
        </div>
      </div>

      <ProjectDialog project={active} dialogRef={dialogRef} onClose={() => setActive(null)} />
    </section>
  );
}
