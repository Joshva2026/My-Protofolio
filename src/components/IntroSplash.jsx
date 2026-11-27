import React, { useEffect, useRef, useState } from 'react';

const INTRO_VIDEO = '/assets/intro/intro-with-details.mp4';
const INTRO_POSTER = '/assets/intro/intro-poster.jpg';

// Cinematic landing intro: plays the intro video in a framed stage, shows a
// playback progress rail, then fades out to reveal the portfolio.
export default function IntroSplash({ onFinish }) {
  const videoRef = useRef(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // muted start so browsers allow autoplay
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const finish = () => {
    if (isLeaving) return;
    setIsLeaving(true);
    setTimeout(onFinish, 700);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') finish();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (videoRef.current) {
      videoRef.current.muted = next;
      if (!next) videoRef.current.play().catch(() => {});
    }
  };

  const formatTime = (t) => {
    const s = Math.max(0, Math.floor(t));
    return `0:${String(s).padStart(2, '0')}`;
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col bg-[#0E0B14] text-white transition-opacity duration-700 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio intro"
    >
      {/* Soft lavender glow behind the stage */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#68529B]/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-[#B9A6E6]/10 blur-[100px]" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-5 sm:px-10 py-5">
        <div className="font-serif text-lg sm:text-xl tracking-tight">
          Joshva <em className="italic text-white/70">Priyan</em>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs sm:text-[13px] font-sans font-medium transition-colors"
          >
            {isMuted ? 'Sound on' : 'Sound off'}
          </button>
          <button
            type="button"
            onClick={finish}
            className="px-4 py-2 rounded-full bg-white text-[#1A1814] hover:bg-white/90 text-xs sm:text-[13px] font-sans font-semibold transition-colors"
          >
            Skip intro
          </button>
        </div>
      </header>

      {/* Stage */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-10 pb-6">
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
              onEnded={finish}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Progress rail and meta */}
          <div className="mt-5 flex flex-col gap-3">
            <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#68529B] via-[#B9A6E6] to-white transition-[width] duration-200 ease-linear"
                style={{ width: `${Math.min(100, progress * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-xs font-sans tracking-[0.18em] uppercase text-white/50">
              <span>Intro · {formatTime(currentTime)} / {formatTime(duration || 10)}</span>
              <span className="hidden sm:inline">Press Esc to skip</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
