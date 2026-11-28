import React, { useRef, useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Github } from './Icons';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';

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

const ALL = 'All';

export default function Projects() {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState(ALL);

  const categories = [ALL, ...new Set(projectsData.map((p) => p.category))];
  const visible = filter === ALL ? projectsData : projectsData.filter((p) => p.category === filter);

  const openProject = (project) => {
    setActive(project);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl text-[#141226] tracking-tight flex items-center gap-3">
            Selected Works <Sparkles className="w-6 h-6 text-[#7C5CD6]" aria-hidden="true" />
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition ${
                  filter === c
                    ? 'bg-[#5B3FD0] border-[#5B3FD0] text-white'
                    : 'bg-white border-[#7C5CD6]/25 text-[#5B3FD0] hover:border-[#7C5CD6]'
                }`}
              >
                {c === ALL ? 'All' : c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openProject(project)}
              aria-label={`Open case details for ${project.title}`}
              className="group text-left rounded-[24px] bg-white border border-[#141226]/8 shadow-[0_10px_30px_-18px_rgba(20,18,38,0.35)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(91,63,208,0.35)] transition duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C5CD6]"
            >
              <div className="relative aspect-[16/11] bg-[#F4F2FD] overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt="" loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-6 font-serif italic text-2xl text-[#5B3FD0]">{project.title}</div>
                )}
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-sans text-xs font-semibold text-[#7C5CD6]">{project.category}</p>
                  <h3 className="font-serif text-xl text-[#141226] mt-1 leading-snug">{project.title}</h3>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4F2FD] text-[#5B3FD0] group-hover:bg-[#5B3FD0] group-hover:text-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectDialog project={active} dialogRef={dialogRef} onClose={() => setActive(null)} />
    </section>
  );
}
