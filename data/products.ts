import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'coldflow',
    name: 'ColdFlow',
    tagline: 'Cold Storage ERP',
    description:
      'A complete cold-storage ERP for managing inventory, customers, billing, chambers, payments, and operational reports.',
    features: [
      'Chamber, rack, and location occupancy',
      'Lot-wise inward, outward, and stock ledger',
      'Storage rent, handling, and GST billing',
      'Party masters and role-based access',
      'Operational dashboards and audit logs',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    demoUrl: 'https://cold-storage-five.vercel.app/login',
    color: '#01BAEF',
    flagship: true,
  },
  {
    id: 'omniretail',
    name: 'OMNIRETAIL',
    tagline: 'Fashion & Saree Retail OS',
    description:
      'A retail management platform for clothing and saree brands, covering POS, inventory, orders, customers, purchasing, and analytics.',
    features: [
      'Catalog, variants, and warehouse stock',
      'Orders across store and digital channels',
      'Purchasing, customers, and reports',
      'WhatsApp and marketplace-ready architecture',
      'Isolated multi-company tenants',
    ],
    tech: ['React', 'NestJS', 'PostgreSQL', 'TypeScript'],
    demoUrl: 'https://omniretail-saree-frontend.vercel.app/login',
    color: '#BE185D',
    flagship: true,
  },
  {
    id: 'marketplace',
    name: 'Marketplace Integration Engine',
    tagline: 'ERP ↔ Marketplace Bridge',
    description:
      'A reusable system for connecting ERP software with Amazon, Flipkart, shipping providers, stock synchronization, orders, webhooks, retries, and tracking.',
    features: [
      'Product and stock sync to marketplaces',
      'Idempotent order ingestion into ERP',
      'Courier create + tracking webhooks',
      'Retry queues, logs, and job monitoring',
      'Pluggable provider adapters',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ'],
    demoUrl: '#contact',
    color: '#8B5CF6',
    flagship: false,
  },
]
