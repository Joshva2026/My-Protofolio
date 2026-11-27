import React, { useEffect, useState } from 'react';

const INTRO_VIDEO = '/assets/intro/intro-with-details.mp4';
const INTRO_POSTER = '/assets/intro/intro-poster.jpg';

// Full-screen landing intro shown on page load. Plays the intro video,
// then fades out to reveal the portfolio. Skip button and Escape also work.
export default function IntroSplash({ onFinish }) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // muted so autoplay is allowed by browsers

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
    setTimeout(onFinish, 600);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') finish();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  });

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 ${
        isLeaving ? 'opacity-0' : 'opacity-100'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio intro"
    >
      <video
        src={INTRO_VIDEO}
        poster={INTRO_POSTER}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={finish}
        className="w-full h-full object-contain"
      />

      <div className="absolute top-5 right-5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsMuted((m) => !m)}
          className="px-4 py-2 rounded-full bg-white/15 text-white text-xs sm:text-[13px] font-sans font-medium backdrop-blur hover:bg-white/25 transition-colors"
        >
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <button
          type="button"
          onClick={finish}
          className="px-4 py-2 rounded-full bg-white text-[#1A1814] text-xs sm:text-[13px] font-sans font-medium hover:bg-white/90 transition-colors"
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}
