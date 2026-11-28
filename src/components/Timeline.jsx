import React from 'react';

// Shared vertical timeline used by Experience and Education.
// Items come from portfolioData; nothing is invented here.
export default function Timeline({ items }) {
  return (
    <ol className="timeline relative space-y-12 md:space-y-16 pl-8 md:pl-0">
      <span className="timeline-rail absolute left-0 top-2 bottom-2 w-px bg-[#1A1814]/10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true">
        <span className="timeline-rail-fill block w-full h-full origin-top bg-gradient-to-b from-[#68529B] to-[#B9A6E6]" />
      </span>

      {items.map((item, i) => {
        const right = i % 2 === 1;
        return (
          <li key={item.id} className="relative md:grid md:grid-cols-2 md:gap-14">
            <span
              className="absolute -left-8 top-2 md:left-1/2 md:-translate-x-1/2 h-3 w-3 rounded-full bg-[#68529B] ring-4 ring-[#FAF9FC]"
              aria-hidden="true"
            />
            <div className={`${right ? 'md:col-start-2' : ''} space-y-3`}>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#68529B]">{item.period}</p>
              <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-[#1A1814]">{item.title}</h3>
              <p className="font-sans text-sm text-[#8A847B]">
                <span className="font-serif italic text-[#4A4640]">{item.subtitle}</span>
                {item.meta ? <> &bull; {item.meta}</> : null}
              </p>
              <p className="font-sans text-base leading-relaxed text-[#4A4640]">{item.description}</p>
              {item.highlights && (
                <ul className="space-y-2 pt-1">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-[#4A4640]">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-[#68529B]" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
              {item.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white border border-[#1A1814]/10 text-[11px] font-semibold text-[#4A4640]">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
