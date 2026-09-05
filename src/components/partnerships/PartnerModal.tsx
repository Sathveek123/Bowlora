import React, { useState } from 'react';
import { X, Users, Dumbbell, ShieldCheck, CheckCircle2, Send, AlertTriangle } from 'lucide-react';
import { OrderCTA } from '../common/OrderCTA';
import { partnershipsData } from '../../data/partnerships';
import { analytics } from '../../lib/analytics';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    gymName: '',
    contactPerson: '',
    phone: '',
    memberCount: '<50',
    message: '',
    website_hp: '', // Honeypot field for bot spam protection
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Spam Protection: Honeypot check
    if (formData.website_hp.trim() !== '') {
      // Silent rejection for automated spambots
      setFormSubmitted(true);
      return;
    }

    // B2B Field Validations per Brief
    if (formData.gymName.trim().length < 2) {
      setErrorMsg('Please enter a valid Gym/Studio name (minimum 2 characters).');
      return;
    }
    if (formData.contactPerson.trim().length < 2) {
      setErrorMsg('Please enter the contact person name (minimum 2 characters).');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile phone number.');
      return;
    }
    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
      setErrorMsg('Message must be at least 10 characters if provided.');
      return;
    }

    // Track successful partnership form submission event
    analytics.trackFormSubmit({ form_type: 'partnership', success: true });
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[9990] bg-[#141810]/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-[#141810] border border-[#2E3324] rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_32px_80px_rgba(0,0,0,0.8)] text-[#F5F1E8] relative flex flex-col my-auto">

        {/* Page Header (Exact Brief Spec) */}
        <div className="sticky top-0 z-30 bg-[#141810]/95 backdrop-blur-md p-6 sm:p-8 border-b border-[#2E3324] flex items-start justify-between gap-4">
          <div>
            <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#C9A876]">
              {partnershipsData.eyebrow}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-[48px] text-[#F5F1E8] leading-tight mt-1">
              {partnershipsData.headline}
            </h2>
            <p className="font-body text-base text-[#D8D2C0] mt-3 max-w-[600px] leading-relaxed">
              {partnershipsData.subheadline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1F2418] border border-[#2E3324] text-[#F5F1E8] hover:bg-[#4A5D2A] transition-colors flex items-center justify-center shrink-0"
            aria-label="Close partnership page"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-12 flex-1">

          {/* Section 1 — Why Partner With Bowlora (3 Benefit Cards) */}
          <div className="space-y-4">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              WHY PARTNER WITH BOWLORA
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnershipsData.benefits.map((b) => (
                <div key={b.id} className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-6 space-y-3 hover:border-[#4A5D2A]/60 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#7A9450] flex items-center justify-center">
                    {b.iconName === 'Users' && <Users className="w-6 h-6 text-[#7A9450]" />}
                    {b.iconName === 'Dumbbell' && <Dumbbell className="w-6 h-6 text-[#C9A876]" />}
                    {b.iconName === 'ShieldCheck' && <ShieldCheck className="w-6 h-6 text-[#7A9450]" />}
                  </div>
                  <h4 className="font-body font-bold text-base text-[#F5F1E8]">
                    {b.title}
                  </h4>
                  <p className="font-body text-xs text-[#D8D2C0] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — How Partnership Works (3-step Process) */}
          <div className="bg-[#1F2418] border border-[#2E3324] rounded-[24px] p-8 space-y-6">
            <span className="font-accent text-xs font-bold uppercase tracking-[2px] text-[#C9A876]">
              HOW PARTNERSHIP WORKS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {partnershipsData.processSteps.map((step) => (
                <div key={step.stepNumber} className="space-y-2 p-4 bg-[#141810]/60 rounded-xl border border-[#2E3324]">
                  <span className="font-accent text-xs font-bold text-[#C9A876]">STEP {step.stepNumber}</span>
                  <h5 className="font-body font-bold text-base text-[#F5F1E8]">{step.title}</h5>
                  <p className="font-body text-xs text-[#D8D2C0] leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — Partnership Enquiry Form (B2B Adapted) */}
          <div className="bg-[#1F2418] border border-[#2E3324] rounded-[20px] p-[36px] space-y-6">
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-2xl text-[#F5F1E8]">
                Partnership Enquiry Form
              </h3>
              <p className="font-body text-sm text-[#D8D2C0]">
                Tell us about your fitness community and our Jagatpura partnership team will get in touch.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#141810] border border-[#7A9450] rounded-2xl text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-[#4A5D2A] text-[#F5F1E8] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-semibold text-2xl text-[#F5F1E8]">Thanks — we'll get back to you shortly.</h4>
                <p className="font-body text-sm text-[#D8D2C0]">
                  Thank you, {formData.contactPerson} from {formData.gymName}! Our partnership team will contact you at {formData.phone}.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-[#4A5D2A] text-[#F5F1E8] rounded-full text-xs font-accent font-bold uppercase tracking-wider hover:bg-[#7A9450]"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden Honeypot Field for Bot Spam Protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="partner_website_hp">Do not fill this field</label>
                  <input
                    type="text"
                    id="partner_website_hp"
                    name="partner_website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>
                {errorMsg && (
                  <div className="p-4 bg-[#B0563E]/20 border border-[#B0563E] rounded-xl text-xs font-body text-[#F5F1E8] space-y-2">
                    <div className="flex items-center gap-2 font-bold text-[#F5F1E8]">
                      <AlertTriangle className="w-4 h-4 text-[#B0563E]" />
                      <span>{errorMsg}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-[11px] text-[#D8D2C0]">Something went wrong — you can also reach us directly on WhatsApp:</span>
                      <OrderCTA
                        label="Reach Partnership Desk on WhatsApp"
                        destination="whatsapp"
                        context="Gym Partnership Direct Fallback"
                        size="default"
                        style="outline"
                        className="mt-2"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                      Gym / Studio Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.gymName}
                      onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                      placeholder="e.g. Gold's Gym Jagatpura"
                      className="w-full px-4 py-3 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450]"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="e.g. Rahul Sharma (Owner/Manager)"
                      className="w-full px-4 py-3 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9119222601"
                      className="w-full px-4 py-3 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450]"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                      Approx. Number of Members *
                    </label>
                    <select
                      value={formData.memberCount}
                      onChange={(e) => setFormData({ ...formData, memberCount: e.target.value })}
                      className="w-full px-4 py-3 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] cursor-pointer"
                    >
                      <option value="<50">&lt; 50 Active Members</option>
                      <option value="50-150">50 – 150 Active Members</option>
                      <option value="150+">150+ Active Members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your facility, preferred delivery hours, or meal plan preferences..."
                    className="w-full px-4 py-3 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#4A5D2A] text-[#F5F1E8] rounded-xl font-accent text-xs font-bold uppercase tracking-[1.5px] hover:bg-[#7A9450] transition-all flex items-center justify-center gap-2 border border-[#7A9450]/30 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Partnership Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
