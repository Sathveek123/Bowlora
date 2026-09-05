import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Newsletter: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubscribed(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#B08D57', '#C9A876', '#4A5D2A', '#F5F1E8', '#7A9450']
      });
    }
  };

  return (
    <section className="py-24 bg-[#F5F1E8] text-[#1F2418] border-t border-[#EFEADD] relative overflow-hidden">
      {/* Background Subtle Watermark Emoji */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] text-[220px]">
        🥗
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
          STAY FRESH
        </span>

        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#1F2418] leading-tight">
          "Get weekly nutrition tips, <br className="hidden sm:inline" />
          new bowl launches & discounts."
        </h2>

        <p className="font-body text-base sm:text-lg text-[#4A4A3E] max-w-xl mx-auto">
          Join 800+ health-conscious Jaipur people already in our WhatsApp circle. Zero spam. Only fresh food news.
        </p>

        {subscribed ? (
          <div className="p-6 bg-[#EFEADD] border border-[#B08D57] rounded-2xl text-[#1F2418] font-accent font-bold text-base flex items-center justify-center gap-2 animate-fade-in shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#B08D57]" />
            <span>Welcome to the Bowlora Circle! We've added your WhatsApp.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto pt-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your WhatsApp number (+91)"
                required
                className="w-full sm:flex-1 h-14 px-6 rounded-full border border-[#EFEADD] bg-white font-body text-base text-[#1F2418] placeholder-[#4A4A3E]/60 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto h-14 px-8 bg-[#1F2418] text-[#F5F1E8] border border-[#B08D57] rounded-full font-accent text-xs font-bold uppercase tracking-[1.5px] hover:bg-[#4A5D2A] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
              >
                <span>Join the Circle</span>
                <ArrowRight className="w-4 h-4 text-[#C9A876]" />
              </button>
            </div>
            <p className="text-[12px] font-body text-[#4A4A3E]/80 mt-3">
              We respect your privacy. No spam — only fresh updates and exclusive subscriber deals.
            </p>
          </form>
        )}

        {/* 3 Icon-Text Items */}
        <div className="pt-8 border-t border-[#EFEADD] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-accent text-xs uppercase tracking-wider text-[#4A4A3E]">
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#B08D57]" />
            <span>WhatsApp-first updates</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A876]" />
            <span>Early access to new bowls</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Tag className="w-4 h-4 text-[#B08D57]" />
            <span>Subscriber-only discounts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
