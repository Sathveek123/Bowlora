import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqs';
import { Plus, Search, MessageCircle } from 'lucide-react';

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
    <section id="faq" className="py-24 bg-[#F5F1E8] text-[#1F2418] border-t border-[#EFEADD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-accent text-xs font-bold uppercase tracking-[3px] text-[#B08D57]">
            FAQ
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-[#1F2418] leading-tight">
            "No dumb questions. <br className="hidden sm:inline" />
            Only hungry ones."
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A4A3E]/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., delivery, pause, vegan, calories)..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#EFEADD] rounded-full font-body text-sm text-[#1F2418] placeholder-[#4A4A3E]/60 focus:outline-none focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20 transition-all shadow-sm"
          />
        </div>

        {/* Accordion Container (16px vertical gap) */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-[20px] p-6 transition-all duration-300 ${
                  isOpen
                    ? 'border-2 border-[#B08D57] border-l-4 border-l-[#B08D57] bg-[#EFEADD]/50 shadow-md'
                    : 'border border-[#EFEADD] hover:border-[#B08D57]/40 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-[#1F2418]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-[#B08D57] text-[#141810] rotate-45'
                        : 'bg-[#EFEADD] text-[#1F2418]'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 mt-4 border-t border-[#B08D57]/20 font-body text-sm sm:text-base text-[#4A4A3E] leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-[#4A4A3E] font-body text-base">
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
            className="inline-flex items-center gap-2 bg-[#1F2418] text-[#F5F1E8] border border-[#B08D57] hover:bg-[#4A5D2A] px-8 py-4 rounded-full font-accent text-xs font-bold uppercase tracking-[1.5px] transition-all duration-300 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#C9A876]" />
            <span>Still have questions? Ask us on WhatsApp 💬</span>
          </a>
        </div>

      </div>
    </section>
  );
};
