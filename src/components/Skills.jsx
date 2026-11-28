import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Figma } from './Icons';
import {
  Code, Layers, FileCode, Atom, Server, Globe,
  Code2, Cpu, Brain, Eye, Camera, Database,
  Layout, Smartphone, Palette, Zap, GitBranch, Terminal
} from 'lucide-react';

const iconMap = {
  Code, Layers, FileCode, Atom, Server, Globe,
  Code2, Cpu, Brain, Eye, Camera, Figma, Database,
  Layout, Smartphone, Palette, Zap, GitBranch, Terminal
};

// Map the existing level labels onto a 3-segment meter. Levels come from data.
const LEVEL_SEGMENTS = { Advanced: 3, Intermediate: 2 };

function Meter({ level }) {
  const filled = LEVEL_SEGMENTS[level] ?? 1;
  return (
    <div className="flex gap-1.5 w-28 sm:w-32 shrink-0" role="img" aria-label={`${level}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="meter-seg h-1.5 flex-1 rounded-full bg-[#1A1814]/10 overflow-hidden"
        >
          <span
            className="meter-fill block h-full w-full rounded-full bg-gradient-to-r from-[#68529B] to-[#B9A6E6] origin-left"
            style={{ transitionDelay: `${0.15 + i * 0.12}s`, transform: i < filled ? undefined : 'scaleX(0)' }}
          />
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Skills &amp; Tools
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              The stack, <em className="italic text-[#4A4640] font-normal">and how deep it goes.</em>
            </h2>
          </div>
          <div className="flex items-center gap-5 text-xs font-sans text-[#8A847B]" aria-label="Meter legend">
            <span className="flex items-center gap-2"><span className="w-6 h-1.5 rounded-full bg-gradient-to-r from-[#68529B] to-[#B9A6E6]" /> Advanced</span>
            <span className="flex items-center gap-2"><span className="w-4 h-1.5 rounded-full bg-gradient-to-r from-[#68529B] to-[#B9A6E6]" /> Intermediate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            return (
              <div key={cat.id} className="skill-card rounded-[22px] bg-white border border-[#1A1814]/10 p-6 sm:p-8 hover:border-[#68529B]/30 hover:shadow-lg transition-[border-color,box-shadow] duration-500">
                <div className="mb-6">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#68529B] mb-2">{cat.category}</p>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1814]">{cat.title}</h3>
                  <p className="font-sans text-sm text-[#8A847B] mt-2 leading-relaxed">{cat.description}</p>
                </div>

                <ul className="space-y-4">
                  {cat.skills.map((skill) => {
                    const Icon = iconMap[skill.icon] || Code;
                    return (
                      <li key={skill.name} className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ECE7F4] text-[#68529B]">
                            {skill.icon === 'Figma' ? <Figma className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                          </span>
                          <span className="font-sans text-sm sm:text-[15px] font-medium text-[#1A1814] truncate">{skill.name}</span>
                        </span>
                        <Meter level={skill.level} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
