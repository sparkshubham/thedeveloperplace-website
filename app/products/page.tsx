import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/PageHero'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'ColdFlow cold-storage ERP and OMNIRETAIL fashion retail OS — flagship products from The Developer Place.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        variant="products"
        eyebrow="Flagship Products"
        title="Industry software,"
        highlight="not generic ERP"
        description="ColdFlow for cold storage operations. OMNIRETAIL for clothing, saree, and fashion retail. Plus a marketplace engine that connects ERP to Amazon, Flipkart, and shipping."
      >
        <MagneticButton href="/contact" size="lg">
          Request a demo
        </MagneticButton>
        <Button href="https://cold-storage-five.vercel.app/login" variant="secondary" size="lg">
          Open ColdFlow
        </Button>
      </PageHero>
      <ProductsSection />
    </>
  )
}
