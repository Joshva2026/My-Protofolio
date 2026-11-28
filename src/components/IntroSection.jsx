import React, { useRef, useState } from 'react';

const INTRO_VIDEO = '/assets/intro/intro-with-details.mp4';
const INTRO_POSTER = '/assets/intro/intro-poster.jpg';

// Dedicated intro screen at the very top of the page. It plays on load and
// the visitor scrolls down (or taps the button) to reach the portfolio.
export default function IntroSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // muted so browsers allow autoplay
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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

  const formatTime = (t) => `0:${String(Math.max(0, Math.floor(t))).padStart(2, '0')}`;

  return (
    <section
      id="intro"
      className="relative min-h-screen w-full flex flex-col bg-[#0E0B14] text-white overflow-hidden"
    >
      {/* Soft lavender glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#68529B]/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#B9A6E6]/10 blur-[100px]" />
      </div>

      {/* Soft hand-off into the light page below */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-[#FAF9FC]" aria-hidden="true" />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-end px-5 sm:px-10 pt-28 sm:pt-32">
        <button
          type="button"
          onClick={toggleSound}
          className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-[13px] font-sans font-medium transition-colors"
        >
          {isMuted ? 'Sound on' : 'Sound off'}
        </button>
      </header>

      {/* Stage */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-10 py-6">
        <div className="w-full max-w-5xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-[28px] bg-black shadow-[0_30px_120px_-20px_rgba(104,82,155,0.55)] ring-1 ring-white/10">
            <video
              ref={videoRef}
              src={INTRO_VIDEO}
              poster={INTRO_POSTER}
              autoPlay
              muted={isMuted}
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
              onTimeUpdate={(e) => {
                const v = e.currentTarget;
                setCurrentTime(v.currentTime);
                setProgress(v.duration ? v.currentTime / v.duration : 0);
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="mt-5 h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#68529B] via-[#B9A6E6] to-white transition-[width] duration-200 ease-linear"
              style={{ width: `${Math.min(100, progress * 100)}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase text-white/50">
            <span>Intro · {formatTime(currentTime)} / {formatTime(duration || 10)}</span>
            <span className="hidden sm:inline">Scroll to continue</span>
          </div>
        </div>
      </div>

      {/* Bottom call to action */}
      <div className="relative z-10 flex justify-center pb-8">
        <button
          type="button"
          onClick={goToPortfolio}
          className="group inline-flex flex-col items-center gap-2 text-xs sm:text-[13px] font-sans font-medium tracking-wide text-white/80 hover:text-white transition-colors"
        >
          <span>Enter portfolio</span>
          <span className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent group-hover:h-10 transition-all duration-300" />
        </button>
      </div>
    </section>
  );
}
