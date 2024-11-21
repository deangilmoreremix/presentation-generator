import { Navbar } from "@/components/navbar";
import { InputSection } from "@/components/input-section";
import { GettingStartedSection } from "@/components/getting-started";
import { PreviewSection } from "@/components/preview-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FeaturesSection } from "@/components/features-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { TemplatesSection } from "@/components/templates-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { MouseGradient } from "@/components/mouse-gradient";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <MouseGradient />
      <Navbar />
      <InputSection />
      <GettingStartedSection />
      <PreviewSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TemplatesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}