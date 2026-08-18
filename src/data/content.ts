export type Product = {
  id: string
  name: string
  category: 'Business' | 'Education' | 'Operations' | 'Finance' | 'HR'
  short: string
  description: string
  features: string[]
  steps: string[]
  color: string
}

export const products: Product[] = [
  {
    id: 'retail-erp',
    name: 'Retail / ERP',
    category: 'Business',
    short: 'Complete retail operations with inventory, billing, and reporting.',
    description:
      'Run your retail business with a unified ERP — products, stock, billing, vendors, and live dashboards tailored to your workflow.',
    features: [
      'Product & catalog management',
      'Billing and invoices',
      'Multi-store inventory sync',
      'Sales analytics dashboard',
    ],
    steps: [
      'Configure products, stores, and roles',
      'Track stock and sales in real time',
      'Generate reports and grow with insights',
    ],
    color: '#2563EB',
  },
  {
    id: 'stock-audit',
    name: 'Stock Audit',
    category: 'Operations',
    short: 'Live stock audit panel for accurate inventory verification.',
    description:
      'Audit inventory with a dedicated admin panel — verify stock counts, track discrepancies, and keep warehouses aligned with real numbers.',
    features: [
      'Live stock verification',
      'Audit trails & discrepancy logs',
      'Warehouse / SKU filters',
      'Admin dashboard controls',
    ],
    steps: [
      'Import or sync inventory items',
      'Run audits by location or category',
      'Review mismatches and close the audit',
    ],
    color: '#0EA5E9',
  },
  {
    id: 'hr-management',
    name: 'HR Management',
    category: 'HR',
    short: 'Staff management with face-based attendance and workforce tools.',
    description:
      'Manage staff, attendance, and HR operations with live face recognition attendance and role-based admin access.',
    features: [
      'Staff directory & roles',
      'Face-based live attendance',
      'Leave and schedule tracking',
      'HR reporting panel',
    ],
    steps: [
      'Onboard employees and set roles',
      'Capture attendance with face check-in',
      'Monitor reports and workforce insights',
    ],
    color: '#F59E0B',
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce Suite',
    category: 'Business',
    short: 'Admin + customer panels for full live ecommerce operations.',
    description:
      'Ship a complete ecommerce system with admin panel, customer panel, orders, products, and inventory connected end to end.',
    features: [
      'Admin & customer panels',
      'Orders & fulfillment',
      'Product & inventory sync',
      'Customer accounts & checkout',
    ],
    steps: [
      'Set up catalog and storefront',
      'Manage orders from the admin panel',
      'Serve customers through the live app',
    ],
    color: '#10B981',
  },
  {
    id: 'delivery',
    name: 'Delivery Management',
    category: 'Operations',
    short: 'Track deliveries, riders, and order status in one panel.',
    description:
      'Coordinate deliveries with live status updates, rider assignment, and customer-facing tracking.',
    features: [
      'Rider assignment',
      'Live delivery status',
      'Route-friendly order lists',
      'Customer notifications',
    ],
    steps: [
      'Receive orders into the delivery queue',
      'Assign riders and track progress',
      'Confirm delivery and close the loop',
    ],
    color: '#38BDF8',
  },
  {
    id: 'event',
    name: 'Event Management',
    category: 'Business',
    short: 'Plan events, tickets, attendees, and schedules smoothly.',
    description:
      'Organize events with registration, ticketing, schedules, and attendee management built into one platform.',
    features: [
      'Event creation & scheduling',
      'Ticketing / registration',
      'Attendee lists',
      'Organizer dashboard',
    ],
    steps: [
      'Create the event and ticket types',
      'Publish registration and collect attendees',
      'Run the event with live check-ins',
    ],
    color: '#8B5CF6',
  },
  {
    id: 'gym',
    name: 'Gym Management',
    category: 'Business',
    short: 'Memberships, trainers, schedules, and payments in one app.',
    description:
      'Manage gym memberships, trainers, class schedules, and payments with admin and member-friendly views.',
    features: [
      'Membership plans',
      'Trainer & class scheduling',
      'Payment tracking',
      'Member mobile-ready views',
    ],
    steps: [
      'Add members and membership plans',
      'Schedule classes and trainers',
      'Track renewals and payments',
    ],
    color: '#EF4444',
  },
  {
    id: 'library',
    name: 'Library Management',
    category: 'Education',
    short: 'Catalog books, issue/return, and manage members easily.',
    description:
      'Digitize library operations with cataloging, issue/return flows, fines, and member management.',
    features: [
      'Book catalog',
      'Issue & return workflow',
      'Member records',
      'Fine / overdue tracking',
    ],
    steps: [
      'Add books and categories',
      'Issue books to members',
      'Track returns and overdue items',
    ],
    color: '#14B8A6',
  },
  {
    id: 'school-lms',
    name: 'School / LMS',
    category: 'Education',
    short: 'Students, courses, attendance, and learning in one system.',
    description:
      'A school and LMS platform covering students, courses, attendance, and academic workflows.',
    features: [
      'Student & class management',
      'Course / LMS modules',
      'Attendance tracking',
      'Parent/teacher portals',
    ],
    steps: [
      'Set up classes and academic structure',
      'Enroll students and assign courses',
      'Track attendance and learning progress',
    ],
    color: '#6366F1',
  },
  {
    id: 'accounting',
    name: 'CA / Accounting',
    category: 'Finance',
    short: 'Invoices, ledgers, GST-ready reports, and client accounting.',
    description:
      'Accounting software for CAs and businesses — invoices, ledgers, GST-ready reports, and client management.',
    features: [
      'Invoicing & ledgers',
      'GST-ready reports',
      'Client accounts',
      'Exportable financial summaries',
    ],
    steps: [
      'Configure company and tax settings',
      'Record invoices and expenses',
      'Generate reports for filing and clients',
    ],
    color: '#22C55E',
  },
]

export type Demo = {
  id: string
  title: string
  category: string
  description: string
  url: string
  login?: string
  password?: string
  tags: string[]
}

export const demos: Demo[] = [
  {
    id: 'kisan-admin',
    title: 'Kisan Mall Admin Panel',
    category: 'Ecommerce · Admin',
    description:
      'Full admin control for products, orders, inventory, and operations.',
    url: 'https://kisan-mall-admin.vercel.app/',
    login: 'admin@kisanmall.com',
    password: 'admin123',
    tags: ['Admin Panel', 'Orders', 'Inventory'],
  },
  {
    id: 'kisan-customer',
    title: 'Kisan Mall Customer Panel',
    category: 'Ecommerce · Customer',
    description:
      'Customer-facing storefront and account experience for live ecommerce.',
    url: 'https://kisanmall-customer.vercel.app/',
    tags: ['Customer Panel', 'Storefront', 'Orders'],
  },
  {
    id: 'kisan-hr',
    title: 'Kisan Mall HR Panel',
    category: 'HR · Attendance',
    description:
      'Staff management with live face-based attendance for real operations.',
    url: 'https://kisanmall-hr.vercel.app/admin',
    login: '9999999999',
    password: 'admin123',
    tags: ['HR', 'Attendance', 'Face Recognition'],
  },
  {
    id: 'stock-audit',
    title: 'Kisan Mall Stock Audit',
    category: 'Inventory · Audit',
    description:
      'Live stock audit admin panel for accurate inventory verification and warehouse control.',
    url: 'https://kisanmall-stock.vercel.app/admin',
    login: '9999999999',
    password: 'admin123',
    tags: ['Stock Audit', 'Inventory', 'Admin'],
  },
  {
    id: 'refurbicon',
    title: 'Refurbicon Admin Panel',
    category: 'Business · Admin',
    description:
      'Live admin panel demo for refurbished product operations — manage catalog, orders, and business workflow.',
    url: 'https://refurbicon-bhilwara.vercel.app/login',
    login: 'admin@refurbicon.com',
    password: 'admin123',
    tags: ['Admin Panel', 'Refurbish', 'Ecommerce'],
  },
]

export type CaseStudy = {
  id: string
  title: string
  industry: string
  result: string
  summary: string
  productIds: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'kisan-mall',
    title: 'Kisan Mall',
    industry: 'Ecommerce & Retail',
    result: '150% Growth in Sales',
    summary:
      'Complete ecommerce suite with admin, customer, HR attendance, and stock audit panels — built for real daily operations.',
    productIds: ['ecommerce', 'hr-management', 'stock-audit'],
  },
  {
    id: 'green-valley',
    title: 'Green Valley School',
    industry: 'Education',
    result: 'Unified Campus Ops',
    summary:
      'School/LMS workflows covering students, attendance, and academic management in one customized platform.',
    productIds: ['school-lms'],
  },
  {
    id: 'refurbicon',
    title: 'Refurbicon',
    industry: 'Refurbished Ecommerce',
    result: 'Ops Digitized',
    summary:
      'Custom admin panel for refurbished product business — catalog, orders, and day-to-day operations in one live system.',
    productIds: ['ecommerce', 'retail-erp'],
  },
]
