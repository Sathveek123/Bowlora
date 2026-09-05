import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-sm font-body text-[#444444] leading-relaxed">
          <p><strong>Effective Date:</strong> January 2024 • Bowlora Jaipur</p>
          <p>Bowlora ("we", "our", "us") respects your privacy. We collect personal information such as your name, phone number, delivery address, and dietary preferences solely for fulfilling your meal orders and subscription communications.</p>
          <h4 className="font-bold text-[#1A1A1A]">1. Data Collection & Use</h4>
          <p>We collect details submitted via our contact forms, WhatsApp order messages, and newsletter signups. Your data is strictly used for order prep, delivery routing in Jaipur, and subscription support.</p>
          <h4 className="font-bold text-[#1A1A1A]">2. Information Sharing</h4>
          <p>We NEVER sell, trade, or share your personal contact details with third-party marketers. Data is shared only with our trusted local delivery executives to ensure punctual morning drop-offs.</p>
          <h4 className="font-bold text-[#1A1A1A]">3. Data Security</h4>
          <p>We use SSL encryption and secure processing protocols to keep your information safe. You can request data deletion anytime by contacting us at +91 9119222601.</p>
        </div>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      body: (
        <div className="space-y-4 text-sm font-body text-[#444444] leading-relaxed">
          <p><strong>Effective Date:</strong> January 2024 • Bowlora Jaipur</p>
          <p>By subscribing to or purchasing meals from Bowlora, you agree to the following terms of service:</p>
          <h4 className="font-bold text-[#1A1A1A]">1. Meal Preparation & Delivery</h4>
          <p>Meals are prepared fresh daily in our Jagatpura kitchen between 5:30 AM and 7:00 AM. Delivery slots run from 7:00 AM to 10:00 AM. Ensure correct address and delivery instructions are provided.</p>
          <h4 className="font-bold text-[#1A1A1A]">2. Dietary & Allergy Notice</h4>
          <p>While we accommodate gluten-free, dairy-free, nut-free, and PCOS preferences, customers with severe life-threatening allergies must inform us during signup. Our kitchen processes nuts and dairy in separate zones.</p>
          <h4 className="font-bold text-[#1A1A1A]">3. Subscription Pauses</h4>
          <p>Subscribers can pause their meal plans for up to 14 days by notifying us via WhatsApp before 7:00 PM the previous evening.</p>
        </div>
      )
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      icon: RefreshCw,
      body: (
        <div className="space-y-4 text-sm font-body text-[#444444] leading-relaxed">
          <p><strong>Effective Date:</strong> January 2024 • Bowlora Jaipur</p>
          <p>At Bowlora, customer satisfaction and food freshness are guaranteed.</p>
          <h4 className="font-bold text-[#1A1A1A]">1. Subscription Cancellations</h4>
          <p>You can cancel any unstarted plan or remaining subscription days with a 24-hour advance WhatsApp notification. Pro-rata refunds for unused days will be credited within 3-5 business days via UPI or bank transfer.</p>
          <h4 className="font-bold text-[#1A1A1A]">2. Quality & Damaged Box Replacement</h4>
          <p>If your meal box arrives compromised, delayed past 10:30 AM without prior notice, or damaged during transit, notify us immediately on WhatsApp (+91 9119222601) with a picture. We will issue an instant replacement or 100% refund for that meal.</p>
        </div>
      )
    }
  }[type];

  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-[28px] max-w-xl w-full p-8 shadow-2xl relative border border-[#E8E8E8] max-h-[85vh] flex flex-col">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F0F7EE] text-[#1A1A1A] flex items-center justify-center hover:bg-[#2E7D32] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E8E8]">
          <div className="w-10 h-10 rounded-xl bg-[#F0F7EE] text-[#2E7D32] flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">{content.title}</h3>
            <span className="font-accent text-xs text-[#777777]">Bowlora Legal & Compliance</span>
          </div>
        </div>

        <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
          {content.body}
        </div>

        <div className="pt-6 border-t border-[#E8E8E8] text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#2E7D32] text-white rounded-full text-xs font-bold hover:bg-[#1B5E20]"
          >
            Close Policy
          </button>
        </div>

      </div>
    </div>
  );
};
