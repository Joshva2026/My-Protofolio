import React, { useRef, useState } from 'react';

const INTRO_VIDEO = '/assets/intro/intro-with-details.mp4';
const INTRO_POSTER = '/assets/intro/intro-poster.jpg';

// Full-screen intro. The video runs edge to edge with no frame; the visitor
// scrolls or taps "Enter portfolio" to reach the page.
export default function IntroSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // muted so browsers allow autoplay
  const [progress, setProgress] = useState(0);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
      if (!next) videoRef.current.play().catch(() => {});
    }
  };

  const goToPortfolio = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="intro" className="relative h-[100svh] w-full overflow-hidden bg-[#141A3D] text-white">
      <video
        ref={videoRef}
        src={INTRO_VIDEO}
        poster={INTRO_POSTER}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          setProgress(v.duration ? v.currentTime / v.duration : 0);
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Legibility for the controls */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141A3D]/40 via-transparent to-[#141A3D]/70" aria-hidden="true" />

      <header className="absolute top-0 inset-x-0 z-10 flex items-center justify-end px-5 sm:px-10 pt-28 sm:pt-32">
        <button
          type="button"
          onClick={toggleSound}
          className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-xs sm:text-[13px] font-sans font-medium transition-colors"
        >
          {isMuted ? 'Sound on' : 'Sound off'}
        </button>
      </header>

      <div className="absolute bottom-0 inset-x-0 z-10 px-6 sm:px-10 pb-10 flex flex-col items-center gap-6">
        <div className="h-[3px] w-full max-w-md rounded-full bg-white/25 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#3B82F6] transition-[width] duration-200 ease-linear"
            style={{ width: `${Math.min(100, progress * 100)}%` }}
          />
        </div>
        <button
          type="button"
          onClick={goToPortfolio}
          className="group inline-flex flex-col items-center gap-2 text-xs sm:text-[13px] font-sans font-medium tracking-wide text-white/90 hover:text-white transition-colors"
        >
          <span>Enter portfolio</span>
          <span className="w-px h-8 bg-gradient-to-b from-white/80 to-transparent group-hover:h-10 transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
