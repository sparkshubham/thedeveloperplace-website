import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { WhySection } from '@/components/sections/WhySection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TechSection } from '@/components/sections/TechSection'
import { AiSection } from '@/components/sections/AiSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <WhySection />
      <ProcessSection />
      <TechSection />
      <AiSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
