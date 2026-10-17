import React, { useState } from 'react';
import { faqData } from '../data/portfolioData';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                FAQ
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              Things people <em className="italic text-[#4A4640] font-normal">often</em> ask.
            </h2>
          </div>

          <div className="text-sm font-sans font-medium text-[#8A847B]">
            Frequently Asked Questions
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column Description */}
          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans text-base sm:text-lg text-[#4A4640] leading-relaxed">
              Clear, transparent answers to questions regarding my education timeline, core development stack, and availability for entry-level engineering roles.
            </p>

            <div className="p-6 rounded-2xl bg-white border border-[#1A1814]/10 shadow-2xs space-y-3">
              <h3 className="font-sans font-semibold text-base text-[#1A1814]">
                Have another question?
              </h3>
              <p className="font-sans text-xs text-[#8A847B] leading-relaxed">
                Feel free to send an email or connect on LinkedIn. I am always happy to chat about projects or software opportunities.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#68529B] hover:text-[#584485] pt-1"
              >
                <span>Send a message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#1A1814]/10 transition-all duration-300 overflow-hidden group"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-[#1A1814] group-hover:text-[#68529B] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#FAF9FC] border border-[#1A1814]/10 flex items-center justify-center text-[#68529B] shrink-0 group-hover:bg-[#68529B] group-hover:text-white transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 font-sans text-sm sm:text-base text-[#4A4640] leading-relaxed border-t border-[#1A1814]/5 pt-4 animate-in fade-in duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
