import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenAbout?: () => void;
  onOpenPartner?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAbout, onOpenPartner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Bowlora', href: '#why-us' },
    { name: 'Menu', href: '#menu' },
    { name: 'Goals & PCOS 🌸', href: '#goals' },
    { name: 'Plans', href: '#plans' },
    { name: 'Gym Partner', href: '#partnerships', action: onOpenPartner },
    { name: 'About Us', href: '#story', action: onOpenAbout },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141810]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)] border-b border-[#2E3324]'
          : 'bg-[#141810]/85 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Announcement Strip */}
      <div className="hidden lg:block bg-[#2E3A1A] text-[#F5F1E8] text-center py-1.5 font-accent text-[11px] tracking-widest font-semibold border-b border-[#3A4A22]/50">
        🥗 Fresh Chef-Crafted Bowls • Delivered Daily in Jaipur • PCOS/PCOD Nutrition Available 🌸 •&nbsp;
        <a href="tel:+919119222601" className="text-[#C9A876] underline hover:text-[#F5F1E8] transition-colors">
          Call: +91 9119222601
        </a>
      </div>

      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Left: Brand Lockup */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#B08D57]/60 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-[#141810]">
            <img
              src="/logo/WhatsApp Image 2026-09-04 at 7.59.18 PM.jpeg"
              alt="Bowlora Round Logo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-xl text-[#F5F1E8] tracking-tight flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[#7A9450] fill-[#7A9450]/20" />
              Bowlora
            </span>
            <span className="font-accent text-[9px] uppercase tracking-[2.5px] text-[#C9A876] font-semibold">
              Jagatpura, Jaipur
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            link.action ? (
              <button
                key={link.name}
                onClick={link.action}
                className="relative px-3.5 py-2 text-[13px] font-medium text-[#D8D2C0] hover:text-[#F5F1E8] transition-colors whitespace-nowrap rounded-lg hover:bg-white/5 group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#B08D57] scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left rounded-full" />
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-[13px] font-medium text-[#D8D2C0] hover:text-[#F5F1E8] transition-colors whitespace-nowrap rounded-lg hover:bg-white/5 group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[#B08D57] scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left rounded-full" />
              </a>
            )
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href="tel:+919119222601"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#1F2418] text-[#C9A876] text-[12px] font-semibold hover:bg-[#2E3A1A] hover:text-[#F5F1E8] border border-[#2E3324] transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>9119222601</span>
          </a>

          <a
            href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I'm%20interested%20in%20a%20healthy%20meal%20plan."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#1F2418] text-[#C9A876] hover:bg-[#4A5D2A] hover:text-white border border-[#2E3324] transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="#plans"
            className="inline-flex items-center gap-2 bg-[#4A5D2A] text-[#F5F1E8] px-5 py-2.5 rounded-full font-accent text-[12px] uppercase tracking-wider font-bold hover:bg-[#7A9450] hover:scale-[1.02] transition-all shadow-[0_4px_16px_rgba(74,93,42,0.3)] border border-[#7A9450]/30"
          >
            <Leaf className="w-3.5 h-3.5 text-[#C9A876]" />
            SUBSCRIBE NOW
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#C9A876] transition-colors rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(2.5rem+4rem)] bg-[#141810]/98 backdrop-blur-xl z-40 flex flex-col justify-between p-6 border-t border-[#2E3324] overflow-y-auto">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              link.action ? (
                <button
                  key={link.name}
                  onClick={() => { setMobileMenuOpen(false); link.action?.(); }}
                  className="text-left text-lg font-display font-medium text-[#F5F1E8] hover:text-[#C9A876] transition-colors py-3.5 px-4 border-b border-[#2E3324] rounded-xl hover:bg-white/5"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-display font-medium text-[#F5F1E8] hover:text-[#C9A876] transition-colors py-3.5 px-4 border-b border-[#2E3324] rounded-xl hover:bg-white/5"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 pb-8">
            <a
              href="#plans"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-[#4A5D2A] text-[#F5F1E8] text-center rounded-full font-accent text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
            >
              <Leaf className="w-5 h-5 text-[#C9A876]" />
              SUBSCRIBE NOW
            </a>
            <a
              href="tel:+919119222601"
              className="w-full py-3.5 bg-[#1F2418] text-[#C9A876] text-center rounded-full text-sm font-semibold flex items-center justify-center gap-2 border border-[#2E3324]"
            >
              <Phone className="w-4 h-4" />
              Call: +91 9119222601
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

