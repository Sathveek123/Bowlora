import React, { useState } from 'react';
import { Phone, Instagram, MapPin, MessageCircle, Send, CheckCircle2, QrCode, ExternalLink, Mail, AlertTriangle } from 'lucide-react';
import { OrderCTA } from '../common/OrderCTA';
import { analytics } from '../../lib/analytics';

interface ContactProps {
  showGoogleFormLink?: boolean;
}

export const Contact: React.FC<ContactProps> = ({ showGoogleFormLink = true }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plan: 'PCOS/PCOD Nutrition Plan',
    message: '',
    website_hp: '', // Honeypot field for bot spam protection
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Spam Protection: Honeypot check
    if (formData.website_hp.trim() !== '') {
      // Silent rejection for automated spambots
      setFormSubmitted(true);
      return;
    }

    // Validation (Exact per brief: Name min 2, Phone 10 digits, Email format, Message min 10)
    if (formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (formData.message.trim().length < 10) {
      setErrorMsg('Please enter a message of at least 10 characters.');
      return;
    }

    // Track successful form submission event
    analytics.trackFormSubmit({ form_type: 'contact', success: true });
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#141810] text-[#F5F1E8] border-t border-[#2E3324]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Channels & QR Code (Exact per Brief Table) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#C9A876]">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F5F1E8] leading-tight">
                "Let's talk food."
              </h2>
              <p className="font-body text-base sm:text-lg text-[#D8D2C0] leading-relaxed">
                Have a question about meal plans, PCOS nutrition, or delivery zones in Jagatpura & Jaipur? We're a WhatsApp DM away.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-4">
              
              {/* Phone Click-to-call */}
              <a
                href="tel:+919119222601"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2418] border border-[#2E3324] hover:border-[#C9A876]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#C9A876] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent uppercase text-[#C9A876] font-semibold">Phone (Click to Call)</div>
                  <div className="font-body font-bold text-base text-[#F5F1E8]">
                    +91 9119222601
                  </div>
                </div>
              </a>

              {/* WhatsApp DM */}
              <a
                href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I%20have%20a%20general%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2418] border border-[#2E3324] hover:border-[#7A9450]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#7A9450] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent uppercase text-[#C9A876] font-semibold">WhatsApp Direct</div>
                  <div className="font-body font-bold text-base text-[#F5F1E8]">
                    +91 9119222601
                  </div>
                </div>
              </a>

              {/* Email Placeholder per Brief */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2418] border border-[#2E3324]">
                <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#A8A292] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent uppercase text-[#C9A876] font-semibold">Email</div>
                  <div className="font-body font-semibold text-sm text-[#A8A292]">
                    Business email coming soon
                  </div>
                </div>
              </div>

              {/* Location with Google Maps pin link */}
              <a
                href="https://maps.google.com/?q=Jagatpura,Jaipur,Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2418] border border-[#2E3324] hover:border-[#C9A876]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#C9A876] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent uppercase text-[#C9A876] font-semibold">Location</div>
                  <div className="font-body font-bold text-base text-[#F5F1E8] flex items-center gap-1.5">
                    <span>Jagatpura, Jaipur, Rajasthan</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C9A876]" />
                  </div>
                </div>
              </a>

              {/* Instagram handle */}
              <a
                href="https://instagram.com/bowlora"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#1F2418] border border-[#2E3324] hover:border-[#C9A876]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141810] text-[#7A9450] flex items-center justify-center group-hover:bg-[#4A5D2A] group-hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-accent uppercase text-[#C9A876] font-semibold">Instagram Profile</div>
                  <div className="font-body font-bold text-base text-[#F5F1E8]">
                    @bowlora
                  </div>
                </div>
              </a>

            </div>

            {/* Instagram QR Code Placement Card (Dual Placement: Contact Page & Footer) */}
            <div className="bg-[#1F2418] border border-[#2E3324] rounded-2xl p-6 flex items-center gap-5">
              <div className="w-20 h-20 rounded-xl bg-white p-2 border border-[#DDD6C4] flex items-center justify-center shrink-0">
                <QrCode className="w-14 h-14 text-[#141810]" />
              </div>
              <div className="space-y-1">
                <span className="font-accent text-[11px] font-bold text-[#C9A876] uppercase tracking-wider">
                  INSTAGRAM QR CODE
                </span>
                <h4 className="font-display font-semibold text-base text-[#F5F1E8]">
                  Scan to Follow @bowlora
                </h4>
                <p className="font-body text-xs text-[#D8D2C0]">
                  Get daily kitchen prep stories, meal launches, and PCOS nutrition tips.
                </p>
              </div>
            </div>

            {/* Shared OrderCTA Button tagged context */}
            <div className="pt-2">
              <OrderCTA
                label="Chat with Us on WhatsApp"
                destination="whatsapp"
                context="General Enquiry"
                size="large"
                style="filled"
                className="w-full justify-center"
              />
            </div>

          </div>

          {/* Right Column: Inquiry Form with Validation & Google Form Fallback */}
          <div className="lg:col-span-6 bg-[#1F2418] p-8 sm:p-10 rounded-[28px] border border-[#2E3324] shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
            <h3 className="font-display font-semibold text-2xl text-[#F5F1E8] mb-2">
              Send an Enquiry
            </h3>
            <p className="font-body text-sm text-[#D8D2C0] mb-6">
              Fill in your details below and our Jagatpura kitchen team will contact you shortly.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-[#141810] border border-[#7A9450] rounded-2xl text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-[#4A5D2A] text-[#F5F1E8] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display font-semibold text-2xl text-[#F5F1E8]">Thanks — we'll get back to you shortly.</h4>
                <p className="font-body text-sm text-[#D8D2C0]">
                  Thank you, {formData.name}! Our Jaipur nutritionist team will contact you at {formData.phone}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-[#4A5D2A] text-[#F5F1E8] rounded-full text-xs font-accent font-bold uppercase tracking-wider hover:bg-[#7A9450]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Hidden Honeypot Field for Bot Spam Protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website_hp">Do not fill this field</label>
                  <input
                    type="text"
                    id="website_hp"
                    name="website_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website_hp}
                    onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  />
                </div>
                {errorMsg && (
                  <div className="p-4 bg-[#B0563E]/20 border border-[#B0563E] rounded-xl text-xs font-body text-[#F5F1E8] space-y-3">
                    <div className="flex items-center gap-2 font-bold text-[#F5F1E8]">
                      <AlertTriangle className="w-4 h-4 text-[#B0563E]" />
                      <span>{errorMsg}</span>
                    </div>
                    <div className="pt-1 border-t border-[#B0563E]/30">
                      <span className="text-[11px] text-[#D8D2C0] block mb-2">Something went wrong — you can also reach us directly on WhatsApp:</span>
                      <OrderCTA
                        label="Reach Us Directly on WhatsApp"
                        destination="whatsapp"
                        context="General Enquiry Fallback"
                        size="default"
                        style="filled"
                        className="w-full justify-center"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full px-4 py-3.5 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] transition-all"
                  />
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
                      className="w-full px-4 py-3.5 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                    Which plan interests you?
                  </label>
                  <select
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] transition-all cursor-pointer"
                  >
                    <option value="PCOS/PCOD Nutrition Plan">PCOS/PCOD Nutrition Plan 🌸</option>
                    <option value="3-Day Trial Box">3-Day Trial Box</option>
                    <option value="7-Day Routine Plan">7-Day Routine Plan</option>
                    <option value="15-Day Copper Plan">15-Day Copper Plan</option>
                    <option value="28-Day Lifestyle Plan">28-Day Lifestyle Plan</option>
                    <option value="Gym Partnership / B2B">Gym Partnership / B2B Collab</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs font-bold text-[#D8D2C0] mb-2 uppercase tracking-wider">
                    Message / Dietary Preferences *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your health goals, PCOS preferences, or specific allergies..."
                    className="w-full px-4 py-3.5 bg-[#141810] border border-[#2E3324] rounded-xl font-body text-sm text-[#F5F1E8] focus:outline-none focus:border-[#7A9450] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#4A5D2A] text-[#F5F1E8] rounded-xl font-accent text-xs font-bold uppercase tracking-[1.5px] hover:bg-[#7A9450] transition-all flex items-center justify-center gap-2 border border-[#7A9450]/30 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}

            {/* Google Form Secondary Fallback Link (CMS Enabled per Brief) */}
            {showGoogleFormLink && (
              <div className="pt-6 mt-6 border-t border-[#2E3324] text-center">
                <a
                  href="https://forms.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-xs text-[#C9A876] hover:text-[#F5F1E8] underline transition-colors"
                >
                  <span>Prefer Google Forms? Use our form instead →</span>
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
