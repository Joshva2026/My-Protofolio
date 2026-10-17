import React, { useState } from 'react';
import { reviewsData } from '../data/portfolioData';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const current = reviewsData[currentIndex];

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#1A1814]/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                Kind Words
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              What mentors &amp; collaborators have <em className="italic text-[#4A4640] font-normal">said.</em>
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={prevReview}
              className="p-3 rounded-full bg-white border border-[#1A1814]/15 text-[#1A1814] hover:bg-[#68529B] hover:text-white transition-all shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              className="p-3 rounded-full bg-white border border-[#1A1814]/15 text-[#1A1814] hover:bg-[#68529B] hover:text-white transition-all shadow-2xs hover:shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Big Testimonial Card */}
        <div className="p-8 sm:p-14 lg:p-16 rounded-[28px] bg-white border border-[#1A1814]/10 shadow-lg relative overflow-hidden transition-all duration-500">
          <Quote className="w-16 h-16 text-[#68529B]/10 absolute top-8 right-8 pointer-events-none" />

          <div className="max-w-4xl space-y-8">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1A1814] leading-[1.3] font-normal">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-[#1A1814]/10">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-12 h-12 rounded-full object-cover border border-[#68529B]/20 shadow-2xs"
              />
              <div>
                <div className="font-sans font-bold text-base text-[#1A1814]">
                  {current.author}
                </div>
                <div className="font-sans text-xs sm:text-sm text-[#8A847B]">
                  {current.role} &bull; <span className="font-serif italic text-[#4A4640]">{current.company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 mt-8">
            {reviewsData.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-[#68529B]' : 'w-2 bg-[#1A1814]/15 hover:bg-[#1A1814]/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
