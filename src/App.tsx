import React, { useState, useEffect } from 'react';
import { SplashScreen } from './components/layout/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyBowlora } from './components/sections/WhyBowlora';
import { NutritionPhilosophy } from './components/sections/NutritionPhilosophy';
import { BrandStory } from './components/sections/BrandStory';
import { MealsShowcase } from './components/sections/MealsShowcase';
import { FitnessGoals } from './components/sections/FitnessGoals';
import { HowItWorks } from './components/sections/HowItWorks';
import { FitnessPartnerships } from './components/sections/FitnessPartnerships';
import { PromoHub } from './components/sections/PromoHub';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Testimonials } from './components/sections/Testimonials';
import { Newsletter } from './components/sections/Newsletter';
import { InstagramFeed } from './components/sections/InstagramFeed';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { AdminDrawer } from './components/admin/AdminDrawer';
import { AboutModal } from './components/about/AboutModal';
import { PartnerModal } from './components/partnerships/PartnerModal';
import { injectLocalBusinessJSONLD, updateSEOMetadata, SEO_PAGES } from './lib/seo';

export const App: React.FC = () => {
  const [selectedGoalSlug, setSelectedGoalSlug] = useState<string | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  useEffect(() => {
    // Inject LocalBusiness JSON-LD Schema & set SEO Metadata
    injectLocalBusinessJSONLD();
    updateSEOMetadata(SEO_PAGES.home);
  }, []);

  return (
    <div className="min-h-screen bg-[#141810] text-[#F5F1E8] flex flex-col justify-between selection:bg-[#4A5D2A] selection:text-[#F5F1E8]">
      <SplashScreen />
      <Navbar
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
      />
      <main className="flex-grow">
        <Hero />
        <WhyBowlora />
        <NutritionPhilosophy />
        <BrandStory onOpenAboutModal={() => setIsAboutOpen(true)} />
        <MealsShowcase />
        <FitnessGoals onSelectGoalForPlans={(slug) => setSelectedGoalSlug(slug)} />
        <HowItWorks />
        <FitnessPartnerships onOpenPartnerModal={() => setIsPartnerOpen(true)} />
        <PromoHub />
        <Pricing
          selectedGoalSlug={selectedGoalSlug}
          onClearGoalContext={() => setSelectedGoalSlug(null)}
        />
        <FAQ />
        <Testimonials />
        <Newsletter />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenPartner={() => setIsPartnerOpen(true)}
      />
      <AdminDrawer />

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <PartnerModal isOpen={isPartnerOpen} onClose={() => setIsPartnerOpen(false)} />
    </div>
  );
};

export default App;

