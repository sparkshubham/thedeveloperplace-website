'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, MessageCircle } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Field, Input, Select, Textarea } from '@/components/ui/Input'
import { Reveal } from '@/components/animations/Reveal'
import { siteConfig } from '@/data/settings'
import { services } from '@/data/services'

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  businessName: z.string().min(2, 'Please enter your business name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  service: z.string().min(1, 'Select a service'),
  budget: z.string().min(1, 'Select a budget range'),
  description: z.string().min(20, 'Tell us a bit more about the project (20+ characters)'),
  contactMethod: z.enum(['email', 'phone', 'whatsapp']),
})

type FormValues = z.infer<typeof schema>

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: 'coldflow',
      budget: '5-15',
      contactMethod: 'whatsapp',
    },
  })

  async function onSubmit(values: FormValues) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Start your"
      titleHighlight="next product build"
      description="Share a few details and we will respond with next steps, timeline guidance, and a demo if relevant."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass-strong grid gap-4 rounded-2xl p-6 sm:p-8"
            noValidate
          >
            {status === 'success' ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-200" role="status">
                Thanks — your enquiry was received. We will get back to you shortly.
              </div>
            ) : null}
            {status === 'error' ? (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200" role="alert">
                Something went wrong. Please try again or reach us on WhatsApp / email.
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message}>
                <Input id="fullName" autoComplete="name" {...register('fullName')} />
              </Field>
              <Field label="Business name" htmlFor="businessName" error={errors.businessName?.message}>
                <Input id="businessName" autoComplete="organization" {...register('businessName')} />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" htmlFor="email" error={errors.email?.message}>
                <Input id="email" type="email" autoComplete="email" {...register('email')} />
              </Field>
              <Field label="Phone number" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" autoComplete="tel" {...register('phone')} />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Service required" htmlFor="service" error={errors.service?.message}>
                <Select id="service" {...register('service')}>
                  <option value="coldflow">ColdFlow — Cold Storage ERP</option>
                  <option value="omniretail">OMNIRETAIL — Fashion Retail</option>
                  <option value="marketplace">Marketplace Integration Engine</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="custom">Custom multi-module system</option>
                </Select>
              </Field>
              <Field label="Estimated budget" htmlFor="budget" error={errors.budget?.message}>
                <Select id="budget" {...register('budget')}>
                  <option value="under-5">Under ₹5L</option>
                  <option value="5-15">₹5L – ₹15L</option>
                  <option value="15-40">₹15L – ₹40L</option>
                  <option value="40-plus">₹40L+</option>
                  <option value="discuss">Prefer to discuss</option>
                </Select>
              </Field>
            </div>
            <Field label="Project description" htmlFor="description" error={errors.description?.message}>
              <Textarea id="description" rows={5} {...register('description')} />
            </Field>
            <Field label="Preferred contact method" htmlFor="contactMethod" error={errors.contactMethod?.message}>
              <Select id="contactMethod" {...register('contactMethod')}>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </Select>
            </Field>
            <Button type="submit" size="lg" disabled={status === 'loading'} className="mt-2">
              {status === 'loading' ? 'Sending…' : 'Submit project enquiry'}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Talk to us directly</h3>
            <p className="mt-2 text-sm text-slate-400">
              Prefer a quick chat? Reach out on WhatsApp or email — we typically respond within one business day.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}`}
                variant="secondary"
                className="justify-start"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="outline" className="justify-start">
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </Button>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 text-sm text-slate-400">
            <p>
              <span className="font-semibold text-slate-200">Phone:</span> {siteConfig.phone}
            </p>
            <p className="mt-2">
              <span className="font-semibold text-slate-200">Hours:</span> Mon – Sat · 10:00 AM – 7:00 PM IST
            </p>
            <p className="mt-2">
              <span className="font-semibold text-slate-200">Location:</span> {siteConfig.address}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
