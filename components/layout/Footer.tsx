import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { siteConfig } from '@/data/settings'
import { services } from '@/data/services'
import { products } from '@/data/products'
import { navLinks } from '@/data/navigation'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border border-electric/40 object-cover"
            />
            <div>
              <p className="font-bold text-white">{siteConfig.name}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">{siteConfig.description}</p>
          <div className="flex gap-3">
            <Social href={siteConfig.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Social>
            <Social href={siteConfig.social.twitter} label="Twitter / X">
              <Twitter className="h-4 w-4" />
            </Social>
            <Social href={siteConfig.social.github} label="GitHub">
              <Github className="h-4 w-4" />
            </Social>
            <Social href={siteConfig.social.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </Social>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Services</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link href="/services" className="hover:text-cyan-soft">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Products</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {products.map((p) => (
              <li key={p.id}>
                <Link href={`/products#${p.id}`} className="hover:text-cyan-soft">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-slate-300">
            Useful links
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-cyan-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cyan-soft">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-cyan-soft">
                {siteConfig.phone}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-soft"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cyan-soft">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-soft">
              Terms and Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:border-electric/40 hover:text-cyan-soft"
    >
      {children}
    </a>
  )
}
