import React from 'react';
import { personalInfo, skillCategories } from '../data/portfolioData';
import { Code2, Brain, PenTool, Terminal } from 'lucide-react';

const icons = [Code2, Brain, PenTool, Terminal];
const tints = ['bg-[#7C5CD6]', 'bg-[#3C8CFF]', 'bg-[#33C07A]', 'bg-[#F0A23B]'];

export default function WhatIDo() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F4F2FD] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-[8%] rounded-[46%_54%_40%_60%/50%_44%_56%_50%] bg-gradient-to-br from-[#D9CCF8] to-[#C9DDFF]" aria-hidden="true" />
            <img src="/assets/profile/character-laptop.webp" alt={`Illustrated character of ${personalInfo.name} working on a laptop`} loading="lazy" className="relative z-10 w-full max-w-[420px] object-contain drop-shadow-[0_30px_40px_rgba(60,40,120,0.25)]" />
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#141226] tracking-tight mb-12">
              What I <em className="italic text-[#5B3FD0]">Do</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={cat.id} className="group rounded-[24px] bg-white p-7 sm:p-8 border border-[#141226]/6 shadow-[0_10px_30px_-22px_rgba(20,18,38,0.35)] hover:-translate-y-1 transition duration-500">
                <div className="flex items-start gap-5">
                  <span className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${tints[i % tints.length]} text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="space-y-2 min-w-0">
                    <h3 className="font-serif text-2xl text-[#141226]">{cat.title}</h3>
                    <p className="font-sans text-sm sm:text-[15px] text-[#4B4766] leading-relaxed">{cat.description}</p>
                    <p className="font-sans text-xs text-[#8A84A6] pt-1">{cat.skills.map((s) => s.name).slice(0, 4).join(' · ')}</p>
                  </div>
                </div>
              </div>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
