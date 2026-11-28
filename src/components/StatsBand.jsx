import React from 'react';
import { numbersData, reviewsData } from '../data/portfolioData';

// Real numbers and the first review, from the data file only.
export default function StatsBand() {
  const review = reviewsData[0];
  return (
    <section className="py-16 md:py-20 bg-[#F4F2FD]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-[32px] bg-gradient-to-r from-[#E6DEFB] to-[#D9E7FF] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <blockquote className="lg:col-span-5 space-y-6">
            <p className="font-serif text-2xl sm:text-3xl leading-snug text-[#141226]">“{review.quote}”</p>
            <footer className="flex items-center gap-3">
              <img src={review.avatar} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-sans text-sm font-semibold text-[#141226]">{review.author}</p>
                <p className="font-sans text-xs text-[#4B4766]">{review.role}, {review.company}</p>
              </div>
            </footer>
          </blockquote>
          <dl className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 lg:border-l lg:border-[#141226]/10 lg:pl-10">
            {numbersData.map((n) => (
              <div key={n.label} className="text-center md:text-left">
                <dt className="sr-only">{n.label}</dt>
                <dd className="font-serif text-4xl sm:text-5xl text-[#5B3FD0]">{n.value}{n.suffix}</dd>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#141226]">{n.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
