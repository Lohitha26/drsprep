import Navbar from "@/components/layout/Navbar";
import DiscountBanner from "@/components/sections/DiscountBanner";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyDrsPrep from "@/components/sections/WhyDrsPrep";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ResourcesSection from "@/components/sections/ResourcesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HowYouActuallyStudy from "@/components/sections/HowYouActuallyStudy";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
import DrsPrepMain from "@/components/sections/DrsPrepMain";
import FeatureBar from "@/components/sections/FeatureBar";
import LearningPoints from "@/components/sections/LearningPoints";
import SmartPreparationCTA from "@/components/sections/SmartPreparationCTA";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import GetStartedModal from "@/components/auth/GetStartedModal";
import ComingSoonModal from "@/components/modals/ComingSoonModal";

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden', width: '100%' }}>
      <Navbar />
      <div style={{ height: 'clamp(60px, 3.75vw, 72px)' }} />
      <DiscountBanner />
      <HeroSection />
      <FeatureBar />
      
      <ResourcesSection />
      <LearningPoints />
      <TestimonialsSection />

      <WhyDrsPrep />
      <HowYouActuallyStudy />
      <DrsPrepMain />
      <SmartPreparationCTA />
      <FeaturesShowcase />
      <FAQSection />
   
      <StatsSection />
    
      <CTASection />
      <Footer />
      <GetStartedModal />
      <ComingSoonModal />
    </div>
  );
}
