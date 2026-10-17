import React, { useState } from 'react';
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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Skills &amp; Tools
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              The technical kit I reach for, <em className="italic text-[#4A4640] font-normal">day to day.</em>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-white rounded-full border border-[#1A1814]/10 shadow-2xs overflow-x-auto self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#68529B] text-white shadow-xs'
                  : 'text-[#4A4640] hover:text-[#1A1814] hover:bg-black/[0.03]'
              }`}
            >
              All Tools
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#68529B] text-white shadow-xs'
                    : 'text-[#4A4640] hover:text-[#1A1814] hover:bg-black/[0.03]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-[#1A1814]/10 pb-5">
                  <div>
                    <span className="font-serif italic text-lg text-[#68529B]">
                      {cat.category.split(' · ')[0]}
                    </span>
                    <h3 className="font-sans font-bold text-2xl text-[#1A1814] mt-0.5 group-hover:text-[#68529B] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF9FC] border border-[#1A1814]/10 text-[#8A847B]">
                    {cat.skills.length} Techs
                  </span>
                </div>

                <p className="font-sans text-sm text-[#4A4640] leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF9FC] border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:bg-white hover:shadow-2xs transition-all duration-200 group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#1A1814]/10 flex items-center justify-center text-[#68529B] shrink-0 group-hover/item:bg-[#68529B] group-hover/item:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-semibold text-xs sm:text-sm text-[#1A1814]">
                            {skill.name}
                          </div>
                          <div className="font-mono text-[10px] text-[#8A847B]">
                            {skill.level}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
