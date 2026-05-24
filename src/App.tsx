import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/home/HeroSection';
import { ServicesSection } from './components/sections/services/ServicesSection';
import { ApplianceTabsSection } from './components/sections/services/ApplianceTabsSection';
import { BrandsSection } from './components/sections/brands/BrandsSection';
import { DifferentialsSection } from './components/sections/differentials/DifferentialsSection';
import { StepsSection } from './components/sections/steps/StepsSection';
import { ContactFormSection } from './components/sections/contact/ContactFormSection';
import { TestimonialsSection } from './components/sections/testimonials/TestimonialsSection';
import { FAQSection } from './components/sections/faq/FAQSection';
import { CTASection } from './components/sections/cta/CTASection';
import { Footer } from './components/sections/footer/Footer';
import { FloatingWhatsApp } from './components/shared/FloatingWhatsApp';
import { FixedBackgroundGears } from './components/shared/FixedBackgroundGears';

export default function App() {
  return (
    <div className="min-h-screen text-dark font-sans selection:bg-primary/20">
      {/* Fixed decorative background — visible through transparent sections */}
      <FixedBackgroundGears />
      <main className="relative overflow-x-hidden z-10">
        <Navbar />
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Appliance Tabs Section */}
        <ApplianceTabsSection />

        {/* Brands Section */}
        <BrandsSection />

        {/* Differentials Section */}
        <DifferentialsSection />

        {/* Steps Section */}
        <StepsSection />

        {/* Contact Form Section */}
        <ContactFormSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection />

        {/* Footer */}
        <Footer />
        
        {/* Global Floating Action Button */}
        <FloatingWhatsApp />
      </main>
    </div>
  )
}
