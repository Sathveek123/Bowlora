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
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-[#E8E8E8] relative overflow-hidden">
      {/* Background Subtle Watermark Emoji */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.04] text-[220px]">
        🥗
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="font-body text-[11px] font-bold uppercase tracking-[4px] text-[#2E7D32]">
          STAY FRESH
        </span>

        <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight">
          "Get weekly nutrition tips, <br className="hidden sm:inline" />
          new bowl launches & discounts."
        </h2>

        <p className="font-body text-base sm:text-lg text-[#666666] max-w-xl mx-auto">
          Join 800+ health-conscious Jaipur people already in our WhatsApp circle. Zero spam. Only fresh food news.
        </p>

        {subscribed ? (
          <div className="p-6 bg-[#F0F7EE] border border-[#2E7D32] rounded-2xl text-[#2E7D32] font-body font-bold text-lg flex items-center justify-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-6 h-6" />
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
                className="w-full sm:flex-1 h-14 px-6 rounded-full border border-[#E8E8E8] bg-white font-body text-base text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto h-14 px-8 bg-[#2E7D32] text-white rounded-full font-body text-base font-bold hover:bg-[#1B5E20] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2E7D32]/20 whitespace-nowrap"
              >
                <span>Join the Circle</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[12px] font-body text-[#999999] mt-3">
              We respect your privacy. No spam — only fresh updates and exclusive subscriber deals.
            </p>
          </form>
        )}

        {/* 3 Icon-Text Items */}
        <div className="pt-8 border-t border-[#F0F7EE] grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-body text-xs text-[#777777]">
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
            <span>WhatsApp-first updates</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A8D832]" />
            <span>Early access to new bowls</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Tag className="w-4 h-4 text-[#F5A623]" />
            <span>Subscriber-only discounts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
