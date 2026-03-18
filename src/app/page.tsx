import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyDrsPrep from "@/components/sections/WhyDrsPrep";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ResourcesSection from "@/components/sections/ResourcesSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
       <ResourcesSection />
      <WhyDrsPrep />
      <FeaturesGrid />
     
      <PricingSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
