import React, { useState, useEffect, useRef } from 'react';
import { projectsData, experienceData, educationData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';

export default function ByTheNumbers() {
  const sectionRef = useRef(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasEnteredView) return;

    // Check if already visible on load/mount
    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        setHasEnteredView(true);
        return true;
      }
      return false;
    };

    if (checkVisibility()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: '120px 0px 0px 0px'
      }
    );

    observer.observe(node);

    const handleScroll = () => {
      if (checkVisibility()) {
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasEnteredView]);

  // Dynamically calculate verifiable metric targets
  const uniqueProjectsCount = projectsData.length; // 7
  const internshipsCount = experienceData.length;   // 2
  const degreesCount = educationData.length;       // 2
  const coreTechCount = 15;                        // 15+

  const metrics = [
    {
      target: uniqueProjectsCount,
      suffix: "",
      label: "Featured Projects",
      description: "End-to-end built systems across Deep Learning, Web & Big Data",
      duration: 1600
    },
    {
      target: internshipsCount,
      suffix: "",
      label: "Internships Completed",
      description: "Hands-on Web & Software Engineering at CodeAlpha",
      duration: 1400
    },
    {
      target: coreTechCount,
      suffix: "+",
      label: "Technologies & Tools",
      description: "React, Node, Python, OpenCV, C++, R, PostgreSQL & Figma",
      duration: 1800
    },
    {
      target: degreesCount,
      suffix: "",
      label: "Academic Degrees",
      description: "B.Sc. IT (Completed) & MCA (Pursuing)",
      duration: 1400
    }
  ];

  return (
    <section
      id="by-the-numbers"
      ref={sectionRef}
      data-entered-view={hasEnteredView ? "true" : "false"}
      className="py-20 md:py-28 bg-[#FAF9FC] border-t border-[#1A1814]/10 relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-6 h-0.5 bg-[#68529B] rounded-full"></span>
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#68529B] uppercase">
                By The Numbers
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1A1814] leading-[1.05] tracking-tight">
              A proven passion for <em className="italic text-[#4A4640] font-normal">building</em> practical software.
            </h2>
          </div>

          <div className="text-sm font-sans font-medium text-[#8A847B]">
            Metrics &amp; Milestones
          </div>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-[#1A1814]/10 hover:border-[#68529B]/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="font-serif text-7xl sm:text-8xl text-[#1A1814] leading-none tracking-[-2px] flex items-baseline">
                  <AnimatedCounter
                    target={item.target}
                    duration={item.duration}
                    trigger={hasEnteredView}
                    padZero={false}
                  />
                  {item.suffix && (
                    <span className="font-serif italic text-4xl text-[#68529B] ml-1 select-none">
                      {item.suffix}
                    </span>
                  )}
                </div>
                
                <h3 className="font-sans font-semibold text-lg text-[#1A1814] mt-5">
                  {item.label}
                </h3>
              </div>

              <p className="font-sans text-xs text-[#8A847B] mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
