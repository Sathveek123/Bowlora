import React, { useState } from 'react';
import { Leaf, Phone, MessageCircle, MapPin, Mail, Instagram, QrCode } from 'lucide-react';
import { PromoSlot } from '../common/PromoSlot';
import { LegalModal } from '../legal/LegalModal';

interface FooterProps {
  onOpenAbout?: () => void;
  onOpenPartner?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenPartner }) => {
  const [activeLegalSlug, setActiveLegalSlug] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  return (
    <footer className="bg-[#141810] text-[#F5F1E8] border-t border-[#2E3324] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Modular Promotional Slot (Standalone Reusable Component with Scheduling Support) */}
        <div className="mb-16">
          <PromoSlot />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A876]/60 bg-[#141810]">
                <img
                  src="/logo/WhatsApp Image 2026-09-04 at 7.59.18 PM.jpeg"
                  alt="Bowlora Round Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-xl text-[#F5F1E8] tracking-tight flex items-center gap-1">
                  <Leaf className="w-4 h-4 text-[#7A9450] fill-[#7A9450]/20" />
                  Bowlora
                </span>
                <span className="font-accent text-[9px] uppercase tracking-[2px] text-[#C9A876] font-semibold">
                  Jagatpura, Jaipur
                </span>
              </div>
            </a>

            <p className="font-body text-xs sm:text-sm text-[#D8D2C0] leading-relaxed max-w-xs">
              Fresh, chef-crafted, macro-counted meals — delivered across Jaipur. Junk is everywhere. Health is rare. That's why Bowlora.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/bowlora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#D8D2C0] hover:bg-[#C9A876] hover:text-[#141810] flex items-center justify-center transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919119222601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#D8D2C0] hover:bg-[#4A5D2A] hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              EXPLORE
            </span>
            <ul className="space-y-2.5 font-body text-sm text-[#D8D2C0]">
              <li><a href="#" className="hover:text-[#F5F1E8] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#F5F1E8] transition-colors">Menu Categories</a></li>
              <li><a href="#goals" className="hover:text-[#F5F1E8] transition-colors">Goals & PCOS Nutrition</a></li>
              <li><a href="#plans" className="hover:text-[#F5F1E8] transition-colors">Subscription Plans</a></li>
              {onOpenPartner ? (
                <li><button onClick={onOpenPartner} className="hover:text-[#F5F1E8] transition-colors text-left">Bowlora x Fitness (Partnerships)</button></li>
              ) : (
                <li><a href="#partnerships" className="hover:text-[#F5F1E8] transition-colors">Bowlora x Fitness</a></li>
              )}
              {onOpenAbout && (
                <li><button onClick={onOpenAbout} className="hover:text-[#F5F1E8] transition-colors text-left">About Bowlora (Our Story)</button></li>
              )}
              <li><a href="#contact" className="hover:text-[#F5F1E8] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              GET IN TOUCH
            </span>
            <ul className="space-y-3 font-body text-sm text-[#D8D2C0]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A876] shrink-0" />
                <a href="tel:+919119222601" className="hover:text-[#F5F1E8]">Call: 9119222601</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#7A9450] shrink-0" />
                <a href="https://wa.me/919119222601" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5F1E8]">WhatsApp: 9119222601</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A876] shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Jagatpura,Jaipur,Rajasthan" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#F5F1E8]">Jagatpura, Jaipur, Rajasthan</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A8A292] shrink-0" />
                <span className="text-[#A8A292] text-xs">Business email coming soon</span>
              </li>
            </ul>
          </div>

          {/* Column 4 — Instagram QR Code Dual Placement + Legal */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              INSTAGRAM QR CODE
            </span>

            {/* QR Card Placement (Dual Placement per Brief) */}
            <div className="w-24 h-24 rounded-xl bg-white p-2.5 border border-[#DDD6C4] flex flex-col items-center justify-center text-center shadow-sm">
              <QrCode className="w-12 h-12 text-[#141810]" />
              <span className="font-accent text-[9px] uppercase font-bold text-[#4A5D2A] mt-1">@bowlora</span>
            </div>

            {/* Legal Links (Connecting to LegalModal) */}
            <div className="pt-2 space-y-1.5 font-body text-xs text-[#A8A292]">
              <div><button onClick={() => setActiveLegalSlug('privacy')} className="hover:underline hover:text-[#F5F1E8]">Privacy Policy</button></div>
              <div><button onClick={() => setActiveLegalSlug('terms')} className="hover:underline hover:text-[#F5F1E8]">Terms & Conditions</button></div>
              <div><button onClick={() => setActiveLegalSlug('refund')} className="hover:underline hover:text-[#F5F1E8]">Refund/Cancellation Policy</button></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2E3324] flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-[#A8A292]">
          <span>© 2026 Bowlora, Jaipur. All rights reserved.</span>
          <span className="font-accent text-[11px] uppercase tracking-wider text-[#C9A876]">Freshness Guaranteed.</span>
        </div>

      </div>

      {/* Shared Legal Modal Reader */}
      <LegalModal
        slug={activeLegalSlug}
        onClose={() => setActiveLegalSlug(null)}
      />
    </footer>
  );
};
