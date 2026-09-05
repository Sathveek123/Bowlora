import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Check if user already saw the splash screen in this session
    const seen = sessionStorage.getItem('bowlora_splash_seen');
    if (seen === 'true') {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Sequence timeline (total ~2.6s)
    const t1 = setTimeout(() => setPhase(1), 50);
    const t2 = setTimeout(() => setPhase(2), 400);
    const t3 = setTimeout(() => setPhase(3), 1400);
    const t4 = setTimeout(() => setPhase(4), 2100);

    const t5 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('bowlora_splash_seen', 'true');
      onComplete?.();
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === 4 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        backgroundColor: '#141810',
        backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(58, 74, 34, 0.45) 0%, rgba(20, 24, 16, 1) 65%)',
      }}
    >
      {/* Centered Vertical Lockup Container */}
      <div className="relative flex flex-col items-center justify-center px-6 w-full max-w-xl text-center my-auto">

        {/* Prominent Large Logo Badge (Phase 2) */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 2 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          {/* Circular Logo Emblem + Olive Glow Halo */}
          <div className="relative mb-6">
            {/* Scaled Olive-Green Glow Halo (#3A4A22) */}
            <div
              className={`absolute inset-0 rounded-full bg-[#3A4A22] blur-3xl transition-opacity duration-1000 ${
                phase >= 2 ? 'opacity-70 scale-150' : 'opacity-0 scale-75'
              }`}
            />

            {/* Dominant Circular Logo Frame (55-60% mobile width, up to 340px desktop) */}
            <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 max-w-[340px] max-h-[340px] rounded-full p-2.5 border-2 border-[#B08D57] bg-[#141810] shadow-[0_0_60px_rgba(58,74,34,0.5)] flex items-center justify-center overflow-hidden">
              <img
                src="/logo/WhatsApp Image 2026-09-04 at 7.59.18 PM.jpeg"
                alt="Bowlora Round Logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Wordmark & Location Subtitle */}
          <div className="flex flex-col items-center gap-1.5 mb-2">
            <div className="flex items-center gap-2.5 font-display font-bold text-3xl sm:text-5xl text-[#F5F1E8] tracking-tight">
              <Leaf className="w-7 h-7 sm:w-9 sm:h-9 text-[#7A9450] fill-[#7A9450]/20" />
              <span>Bowlora</span>
            </div>
            <span className="font-accent text-[11px] sm:text-[12px] uppercase tracking-[4px] text-[#D8D2C0]/70 font-semibold">
              Jaipur · Healthy Bowls & Subscription Meals
            </span>
          </div>
        </div>

        {/* Thin Gold Divider Line (Phase 1) */}
        <div className="w-56 sm:w-72 h-[1px] my-5 relative overflow-hidden flex items-center justify-center">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#B08D57] to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase >= 1 ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Tagline Fade-Up (Phase 3) */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-display italic text-base sm:text-lg text-[#F5F1E8]/90 tracking-wide leading-relaxed">
            "Junk is everywhere. Health is rare.<br />
            <span className="text-[#B08D57] not-italic font-medium">That's why Bowlora."</span>
          </p>
        </div>

      </div>

      {/* Skip button for user accessibility */}
      <button
        onClick={() => {
          setIsVisible(false);
          sessionStorage.setItem('bowlora_splash_seen', 'true');
          onComplete?.();
        }}
        className="absolute bottom-8 right-8 font-accent text-[11px] text-[#B08D57]/70 hover:text-[#F5F1E8] tracking-widest uppercase transition-colors px-3.5 py-1.5 rounded-full border border-[#B08D57]/30 hover:border-[#B08D57] bg-[#141810]/60 backdrop-blur-sm"
      >
        Skip intro →
      </button>
    </div>
  );
};
