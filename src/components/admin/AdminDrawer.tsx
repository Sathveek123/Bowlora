import React, { useState } from 'react';
import { Settings, X, Edit3, Save, Check, Layers, Tag, DollarSign } from 'lucide-react';

export const AdminDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);
  
  const [cmsState, setCmsState] = useState(() => {
    const saved = localStorage.getItem('bowlora_cms_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return {
      heroTagline: 'Junk is everywhere. Health is rare. That\'s why Bowlora.',
      location: 'Jagatpura, Jaipur',
      phone: '9119222601',
      pcosBannerActive: true,
      trialPrice: '1,199',
      copperPrice: '4,444',
    };
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('bowlora_cms_settings', JSON.stringify(cmsState));
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <>
      {/* Subtle Floating Admin/CMS Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-[#1A1A1A] text-white px-4 py-2.5 rounded-full text-xs font-accent font-bold flex items-center gap-2 shadow-xl hover:bg-[#2E7D32] transition-all duration-300 border border-gray-700 cursor-pointer"
        title="Open Live CMS Editing Preview"
      >
        <Settings className="w-4 h-4 text-[#A8D832] animate-spin-slow" />
        <span className="hidden sm:inline">CMS Preview Panel</span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in">
          <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-[#E8E8E8] text-[#1A1A1A]">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F0F7EE] text-[#2E7D32] flex items-center justify-center font-bold">
                    <Edit3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#1A1A1A]">Self-Service CMS Panel</h3>
                    <span className="font-accent text-[10px] uppercase text-[#777777]">Live Content Edit Preview</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-[#777777]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {savedMessage && (
                <div className="mb-4 p-3 bg-[#F0F7EE] border border-[#2E7D32] rounded-xl text-xs font-body font-bold text-[#2E7D32] flex items-center gap-2 animate-fade-in">
                  <Check className="w-4 h-4" />
                  <span>Changes saved! Website content updated.</span>
                </div>
              )}

              <form onSubmit={handleSave} className="space-y-5 text-xs font-body">
                <div>
                  <label className="block font-bold text-[#444444] mb-1">Brand Tagline</label>
                  <input
                    type="text"
                    value={cmsState.heroTagline}
                    onChange={(e) => setCmsState({ ...cmsState, heroTagline: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg font-body focus:border-[#2E7D32]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-[#444444] mb-1">Business Location</label>
                    <input
                      type="text"
                      value={cmsState.location}
                      onChange={(e) => setCmsState({ ...cmsState, location: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg font-body focus:border-[#2E7D32]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#444444] mb-1">Contact Phone</label>
                    <input
                      type="text"
                      value={cmsState.phone}
                      onChange={(e) => setCmsState({ ...cmsState, phone: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg font-body focus:border-[#2E7D32]"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#F0F7EE] rounded-xl border border-[#C8D8C0] space-y-3">
                  <span className="font-accent text-[11px] font-bold text-[#2E7D32] uppercase block">
                    Women's Health & PCOS Spotlight Toggle
                  </span>
                  <label className="flex items-center gap-2 cursor-pointer font-bold text-xs text-[#1A1A1A]">
                    <input
                      type="checkbox"
                      checked={cmsState.pcosBannerActive}
                      onChange={(e) => setCmsState({ ...cmsState, pcosBannerActive: e.target.checked })}
                      className="w-4 h-4 text-[#2E7D32] rounded focus:ring-[#2E7D32]"
                    />
                    <span>Show PCOS/PCOD Priority Banner Across Homepage</span>
                  </label>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-accent text-[11px] font-bold text-[#1A1A1A] uppercase block">
                    Subscription Pricing Edits
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-[#777777]">3-Day Trial (₹)</label>
                      <input
                        type="text"
                        value={cmsState.trialPrice}
                        onChange={(e) => setCmsState({ ...cmsState, trialPrice: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-[#777777]">15-Day Copper (₹)</label>
                      <input
                        type="text"
                        value={cmsState.copperPrice}
                        onChange={(e) => setCmsState({ ...cmsState, copperPrice: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2E7D32] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1B5E20]"
                >
                  <Save className="w-4 h-4" />
                  <span>Save CMS Content Updates</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-[#E8E8E8] text-[11px] text-[#777777] space-y-1">
              <p className="font-bold text-[#1A1A1A]">CMS Self-Service Handover Note:</p>
              <p>The Bowlora team will have full admin ownership to edit meals, prices, banners, and photos without developer reliance.</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
