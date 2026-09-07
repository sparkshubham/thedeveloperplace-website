import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    id: 'retail',
    name: 'Retail and Supermarkets',
    description: 'POS, inventory, billing, and multi-store operations.',
    icon: 'Store',
  },
  {
    id: 'textile',
    name: 'Textile and Saree Businesses',
    description: 'Catalog-heavy retail with variants, wholesale, and omnichannel sales.',
    icon: 'Shirt',
  },
  {
    id: 'cold-storage',
    name: 'Cold Storage',
    description: 'Chamber occupancy, lot tracking, rent billing, and party ledgers.',
    icon: 'Snowflake',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Patient workflows, appointments, and secure operational panels.',
    icon: 'HeartPulse',
  },
  {
    id: 'hr',
    name: 'Human Resources',
    description: 'Attendance, staff records, and workforce admin systems.',
    icon: 'Users',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'School and LMS platforms for students, staff, and academics.',
    icon: 'GraduationCap',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Storefronts, admin ops, and fulfillment-ready commerce stacks.',
    icon: 'ShoppingBasket',
  },
  {
    id: 'professional',
    name: 'Professional Services',
    description: 'Client portals, scheduling, and service business automation.',
    icon: 'Briefcase',
  },
]
