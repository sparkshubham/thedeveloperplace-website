import type { Metadata } from 'next'
import { siteConfig } from '@/data/settings'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}`,
}

export default function PrivacyPage() {
  return (
    <Container className="section-pad prose prose-invert max-w-3xl">
      <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-4 text-slate-400">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-4 text-slate-300">
        <p>
          {siteConfig.name} (“we”, “us”) respects your privacy. This policy explains how we collect and use
          information submitted through our website enquiry forms and related communications.
        </p>
        <h2 className="text-xl font-semibold text-white">Information we collect</h2>
        <p>
          When you submit a project enquiry, we may collect your name, business name, email, phone number,
          service interest, budget range, and project details you choose to share.
        </p>
        <h2 className="text-xl font-semibold text-white">How we use information</h2>
        <p>
          We use this information to respond to enquiries, prepare proposals, schedule demos, and improve our
          services. We do not sell your personal information.
        </p>
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p>
          For privacy requests, email{' '}
          <a className="text-cyan-soft" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </Container>
  )
}
