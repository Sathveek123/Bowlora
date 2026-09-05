import React, { useState, useEffect } from 'react';
import { Leaf, Sparkles, Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>('🌱 Sourcing Fresh Produce in Jaipur...');
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // 6.5 Second Timeline
    // Phase 1: Logo & Halo fade in (100ms)
    // Phase 2: Brand Lockup & Tagline (1200ms)
    // Phase 3: Status 2 "Chef-Crafting Macro-Balanced Meals..." (2500ms)
    // Phase 4: Status 3 "🌸 Zero Ultra-Processed Guarantee..." (4200ms)
    // Phase 5: Fade-out transition (5800ms -> 6500ms)

    const t1 = setTimeout(() => {
      setPhase(1);
    }, 100);

    const t2 = setTimeout(() => {
      setPhase(2);
      setStatusText('👨‍🍳 Chef-Crafting Macro-Balanced Meals...');
    }, 1500);

    const t3 = setTimeout(() => {
      setPhase(3);
      setStatusText('🌸 PCOS/PCOD & Fitness Nutrition Prepped...');
    }, 3200);

    const t4 = setTimeout(() => {
      setPhase(4);
      setStatusText('🥗 Welcome to Bowlora Jaipur!');
    }, 4800);

    const t5 = setTimeout(() => {
      setPhase(5); // Start exit fade
    }, 5900);

    const t6 = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 6500);

    // Smooth Progress Bar ticker over 6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.66; // 100% / ~60 ticks = ~6s
      });
    }, 100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearInterval(interval);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-between p-6 sm:p-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        phase === 5 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto'
      }`}
      style={{
        backgroundColor: '#141810',
        backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(58, 74, 34, 0.55) 0%, rgba(20, 24, 16, 1) 70%)',
      }}
    >
      {/* Top Accent Badge */}
      <div
        className={`pt-4 transition-all duration-700 ${
          phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2418] border border-[#C9A876]/30 font-accent text-xs uppercase tracking-[3px] text-[#C9A876] shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A876]" />
          <span>Freshness Delivered Daily · Jaipur</span>
        </div>
      </div>

      {/* Centered Vertical Lockup Container */}
      <div className="relative flex flex-col items-center justify-center px-6 w-full max-w-xl text-center my-auto">

        {/* Prominent Large Logo Badge */}
        <div
          className={`flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          {/* Circular Logo Emblem + Olive Glow Halo */}
          <div className="relative mb-6">
            <div
              className={`absolute inset-0 rounded-full bg-[#3A4A22] blur-3xl transition-opacity duration-1000 ${
                phase >= 1 ? 'opacity-80 scale-150' : 'opacity-0 scale-75'
              }`}
            />

            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 max-w-[300px] max-h-[300px] rounded-full p-2.5 border-2 border-[#C9A876] bg-[#141810] shadow-[0_0_60px_rgba(58,74,34,0.6)] flex items-center justify-center overflow-hidden">
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
            <span className="font-accent text-[11px] sm:text-[12px] uppercase tracking-[4px] text-[#C9A876] font-semibold">
              Jagatpura, Jaipur · Chef-Crafted Meal Plans
            </span>
          </div>
        </div>

        {/* Thin Gold Divider Line */}
        <div className="w-56 sm:w-72 h-[1px] my-5 relative overflow-hidden flex items-center justify-center">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#C9A876] to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              phase >= 1 ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Tagline Fade-Up (Phase 2+) */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-display italic text-base sm:text-lg text-[#F5F1E8]/90 tracking-wide leading-relaxed">
            "Junk is everywhere. Health is rare.<br />
            <span className="text-[#C9A876] not-italic font-medium">That's why Bowlora."</span>
          </p>
        </div>

      </div>

      {/* Bottom Progress Bar & Live Status Indicator */}
      <div className="w-full max-w-sm space-y-3 pb-4 flex flex-col items-center">
        <div className="font-accent text-xs text-[#D8D2C0] tracking-wider transition-all duration-300 min-h-[20px] flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#7A9450] animate-pulse" />
          <span>{statusText}</span>
        </div>

        {/* 6-Second Progress Track */}
        <div className="w-full h-1.5 bg-[#1F2418] border border-[#2E3324] rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-[#4A5D2A] via-[#7A9450] to-[#C9A876] rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <button
          onClick={() => {
            setIsVisible(false);
            onComplete?.();
          }}
          className="font-accent text-[10px] text-[#C9A876]/70 hover:text-[#F5F1E8] tracking-widest uppercase transition-colors pt-1"
        >
          Skip Intro →
        </button>
      </div>

    </div>
  );
};
