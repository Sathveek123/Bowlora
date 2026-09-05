import React from 'react';
import { MessageCircle, ArrowRight, Leaf } from 'lucide-react';

export interface OrderCTAProps {
  label: string;
  destination?: 'whatsapp' | 'form' | 'external_url' | 'internal_route' | 'checkout';
  destinationValue?: string;
  context?: string;
  style?: 'filled' | 'outline' | 'whatsapp_pill';
  size?: 'default' | 'large';
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export const OrderCTA: React.FC<OrderCTAProps> = ({
  label,
  destination = 'whatsapp',
  destinationValue = '919119222601',
  context = 'healthy meal plan',
  style = 'filled',
  size = 'default',
  className = '',
  showIcon = true,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // Single centralized Analytics Event Trigger
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'order_cta_click', {
        destination,
        context,
        label,
      });
    }

    if (onClick) onClick();

    if (destination === 'whatsapp') {
      e.preventDefault();
      const encodedMsg = encodeURIComponent(
        `Hi Bowlora! I'm interested in ${context}. Please guide me with the next steps.`
      );
      const url = `https://wa.me/${destinationValue.replace(/[^0-9]/g, '')}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (destination === 'form') {
      e.preventDefault();
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (destination === 'external_url' && destinationValue) {
      e.preventDefault();
      window.open(destinationValue, '_blank', 'noopener,noreferrer');
    } else if (destination === 'internal_route' && destinationValue) {
      e.preventDefault();
      const targetEl = document.querySelector(destinationValue);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (destination === 'checkout') {
      e.preventDefault();
      // Future Phase 2 Online Payments Drawer Trigger
      alert(`[Phase 2 Checkout Ready]: Ordering ${context}. Online payment gateway layer active.`);
    }
  };

  // Base styling classes
  const sizeClasses = size === 'large' ? 'px-8 py-4 text-xs sm:text-sm' : 'px-6 py-3 text-xs';

  let styleClasses = '';
  if (style === 'filled') {
    styleClasses = 'bg-[#4A5D2A] text-[#F5F1E8] hover:bg-[#7A9450] hover:scale-[1.02] shadow-md border border-[#7A9450]/30';
  } else if (style === 'outline') {
    styleClasses = 'border-1.5 border-[#B08D57] text-[#C9A876] hover:bg-[#B08D57]/15 hover:text-[#F5F1E8]';
  } else if (style === 'whatsapp_pill') {
    styleClasses = 'bg-[#1F2418] text-[#C9A876] hover:bg-[#4A5D2A] hover:text-[#F5F1E8] border border-[#2E3324]';
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-accent uppercase tracking-[1.5px] font-bold transition-all ${sizeClasses} ${styleClasses} ${className}`}
    >
      {showIcon && (
        destination === 'whatsapp' ? (
          <MessageCircle className="w-4 h-4 text-[#C9A876]" />
        ) : (
          <Leaf className="w-4 h-4 text-[#C9A876]" />
        )
      )}
      <span>{label}</span>
      {destination === 'internal_route' && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};
