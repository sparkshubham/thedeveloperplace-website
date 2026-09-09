'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/data/navigation'
import { siteConfig } from '@/data/settings'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition duration-300',
        scrolled || open ? 'border-b border-white/10 bg-navy-900/80 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={44}
            height={44}
            className="h-10 w-10 rounded-full border border-electric/40 object-cover sm:h-11 sm:w-11"
            priority
          />
          <span className="leading-tight">
            <span className="block text-sm font-bold text-white sm:text-base">{siteConfig.name}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:block">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition hover:text-cyan-soft',
                isActive(link.href) ? 'text-cyan-soft' : 'text-slate-300',
              )}
            >
              {link.label}
            </Link>
          ))}
          <MagneticButton href="/contact" size="sm">
            Start Your Project
          </MagneticButton>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-white/10 bg-navy-900/95 lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-site flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-xl px-3 py-3 text-base font-medium hover:bg-white/5',
                    isActive(link.href) ? 'text-cyan-soft' : 'text-slate-200',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2" onClick={() => setOpen(false)}>
                Start Your Project
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
