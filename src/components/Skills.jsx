import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Figma } from './Icons';
import {
  Code2,
  Cpu,
  Brain,
  Eye,
  Camera,
  BarChart2,
  Database,
  FileSpreadsheet,
  PieChart,
  LineChart,
  Table,
  Binary,
  Layout,
  Smartphone,
  Palette,
  Component,
  Code,
  FileCode,
  Atom,
  Server,
  Globe,
  Layers,
  GitBranch,
  Terminal,
  Zap,
  Flame,
  BookOpen,
  Send,
  Sparkles,
  Layers3
} from 'lucide-react';

const iconMap = {
  Code2, Cpu, Brain, Eye, Camera, BarChart2, Database, FileSpreadsheet,
  PieChart, LineChart, Table, Binary, Figma, Layout, Smartphone, Palette,
  Component, Code, FileCode, Atom, Server, Globe, Layers, GitBranch,
  Terminal, Zap, Flame, BookOpen, Send
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] glow-orb glow-orb-indigo translate-y-24 translate-x-12"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] text-[#4F46E5] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers3 className="w-3.5 h-3.5" /> Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
              Skills & Expertise
            </h2>
            <p className="mt-2 text-base text-[#4B5563] max-w-xl font-medium">
              Organized into core practical domains without arbitrary percentage bars.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-white rounded-2xl border border-[#EAE8E1] shadow-subtle max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-[#4B5563] hover:text-[#18181B] hover:bg-[#FAF9F5]'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all transition-spring cursor-pointer shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#4F46E5] text-white shadow-sm'
                    : 'text-[#4B5563] hover:text-[#18181B] hover:bg-[#FAF9F5]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl border border-[#EAE8E1] p-6 sm:p-8 shadow-subtle hover-spring transition-spring flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Category Header */}
                <div className="border-b border-[#EAE8E1] pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-black text-[#18181B]">
                      {category.category}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-1 bg-[#EEF2FF] text-[#4F46E5] rounded-lg border border-[#4F46E5]/10 shrink-0">
                      {category.skills.length} Items
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed font-medium">
                    {category.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#EAE8E1] hover:border-[#4F46E5]/30 hover:bg-[#EEF2FF]/40 transition-all duration-300 text-xs font-semibold text-[#18181B] group shadow-2xs"
                      >
                        <IconComponent className="w-4 h-4 text-[#4F46E5] group-hover:scale-115 group-hover:rotate-6 transition-all duration-300" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Subtle Badge */}
              <div className="pt-4 mt-6 border-t border-[#EAE8E1] flex items-center justify-between text-[10px] text-[#6B7280] font-bold">
                <span>Domain Focus</span>
                <span className="font-mono text-[#4F46E5] font-black uppercase tracking-wider">Practical Application</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
