import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  fullName: z.string().min(2),
  businessName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string().min(1),
  budget: z.string().min(1),
  description: z.string().min(20),
  contactMethod: z.enum(['email', 'phone', 'whatsapp']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)
    // Production: forward to CRM / email provider. Logged for ops visibility in staging.
    console.info('[contact]', {
      name: data.fullName,
      business: data.businessName,
      email: data.email,
      service: data.service,
    })
    return NextResponse.json({ success: true, message: 'Enquiry received' })
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 })
  }
}
