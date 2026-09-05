import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqs';
import { Plus, Minus, Search, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-white border-t border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-body text-[11px] font-bold uppercase tracking-[4px] text-[#2E7D32]">
            FAQ
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#1A1A1A] leading-tight">
            "No dumb questions. <br className="hidden sm:inline" />
            Only hungry ones."
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#777777]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., delivery, pause, vegan, calories)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8E8E8] rounded-full font-body text-sm text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 transition-all shadow-sm"
          />
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-[20px] p-6 transition-all duration-300 ${
                  isOpen
                    ? 'border-[#2E7D32] bg-[#F0F7EE]/60 shadow-md'
                    : 'border-[#E8E8E8] hover:border-[#C8D8C0]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-body font-bold text-base sm:text-lg text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#2E7D32] text-white rotate-45'
                        : 'bg-[#F0F7EE] text-[#2E7D32]'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 mt-4 border-t border-[#C8D8C0]/40 font-body text-sm sm:text-base text-[#555555] leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-[#777777] font-body text-base">
              No matching questions found. Drop us a message on WhatsApp for instant assistance!
            </div>
          )}
        </div>

        {/* WhatsApp CTA Button Below Accordion */}
        <div className="text-center pt-12">
          <a
            href="https://wa.me/919119222601?text=Hi%20Bowlora!%20I%20have%20a%20question%20about%20your%20meal%20plans."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border.2 border-[#2E7D32] text-[#2E7D32] bg-[#F0F7EE] hover:bg-[#2E7D32] hover:text-white px-8 py-3.5 rounded-full font-body text-base font-bold transition-all duration-300 shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Still have questions? Ask us on WhatsApp 💬</span>
          </a>
        </div>

      </div>
    </section>
  );
};
