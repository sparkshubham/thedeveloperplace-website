import type { Metadata } from 'next'
import { siteConfig } from '@/data/settings'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `Terms and Conditions for ${siteConfig.name}`,
}

export default function TermsPage() {
  return (
    <Container className="section-pad max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-white">Terms and Conditions</h1>
      <p className="mt-4 text-slate-400">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-4 text-slate-300">
        <p>
          By using {siteConfig.name}’s website, you agree to these terms. Website content is provided for
          general information about our software products and services.
        </p>
        <h2 className="text-xl font-semibold text-white">Services</h2>
        <p>
          Project scope, timelines, and fees are defined in separate agreements or proposals. Demo environments
          are provided as-is for evaluation.
        </p>
        <h2 className="text-xl font-semibold text-white">Intellectual property</h2>
        <p>
          Branding, product names (including ColdFlow and OMNIRETAIL), and site materials remain the property of
          {siteConfig.name} unless otherwise stated in a client contract.
        </p>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p>
          Questions about these terms:{' '}
          <a className="text-cyan-soft" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </div>
    </Container>
  )
}
