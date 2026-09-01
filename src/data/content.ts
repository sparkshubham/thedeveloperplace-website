export type Product = {
  id: string
  name: string
  category: 'Business' | 'Education' | 'Operations' | 'Finance' | 'HR'
  short: string
  description: string
  features: string[]
  steps: string[]
  color: string
  flagship?: boolean
  demoId?: string
}

export const products: Product[] = [
  {
    id: 'coldflow',
    name: 'ColdFlow',
    category: 'Operations',
    flagship: true,
    demoId: 'coldflow',
    short:
      'Complete cold storage ERP — chambers, inward/outward, rent billing, and GST.',
    description:
      'ColdFlow is a multi-tenant cold storage ERP for plant operations: chamber occupancy, lot-wise inward and outward, stock ledger, party masters, and storage rent billing with handling charges and GST. Built for warehouse, gate, and accounts teams with role-based access.',
    features: [
      'Chamber, rack, and location occupancy',
      'Lot-wise inward, outward, and stock ledger',
      'Storage rent, handling, and GST billing',
      'Customers, suppliers, and commodity masters',
      'Roles for warehouse, gate, and accounts',
      'Multi-tenant SaaS with plans and audit logs',
    ],
    steps: [
      'Set up chambers, racks, products, and party masters',
      'Record inward lots and track occupancy in real time',
      'Dispatch outwards and generate storage bills with GST',
    ],
    color: '#01BAEF',
  },
  {
    id: 'omniretail',
    name: 'OMNIRETAIL',
    category: 'Business',
    flagship: true,
    demoId: 'omniretail',
    short:
      'Retail OS for clothing, saree, and fashion brands — inventory, orders, WhatsApp, and storefront.',
    description:
      'OMNIRETAIL is multi-tenant retail software for clothing, saree, and fashion brands. Each company gets isolated products, inventory, purchases, warehouses, orders, WhatsApp, marketplace sync, shipping, and a customer storefront — on one omnichannel platform.',
    features: [
      'Saree / garment catalog and variants',
      'Warehouse inventory and purchases',
      'Orders across store, WhatsApp, and marketplaces',
      'Amazon / Flipkart and shipping integrations',
      'Branded customer storefront per company',
      'Staff, reports, and tenant-level isolation',
    ],
    steps: [
      'Create the company tenant and load catalog + warehouses',
      'Sell from storefront, WhatsApp, or marketplace channels',
      'Fulfill orders, sync stock, and track reports in one panel',
    ],
    color: '#BE185D',
  },
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
    demoId: 'stock-audit',
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
    demoId: 'kisan-hr',
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
    demoId: 'kisan-admin',
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
  slug?: string
  tags: string[]
  image?: string
  gallery?: string[]
  flagship?: boolean
}

export const demos: Demo[] = [
  {
    id: 'coldflow',
    title: 'ColdFlow — Cold Storage ERP',
    category: 'Flagship · Cold Storage',
    flagship: true,
    description:
      'Full cold storage ERP: chambers and racks, inward/outward lots, occupancy, stock ledger, and GST-ready storage bills.',
    url: 'https://cold-storage-five.vercel.app/login',
    login: 'admin@abccold.test',
    password: 'ChangeMe123!',
    tags: ['Cold Storage', 'Inward / Outward', 'Billing', 'SaaS'],
    image: '/demos/coldflow.svg',
  },
  {
    id: 'omniretail',
    title: 'OMNIRETAIL — Fashion Retail',
    category: 'Flagship · Clothing & Saree',
    flagship: true,
    description:
      'Omnichannel retail for clothing and saree brands — catalog, inventory, orders, WhatsApp, marketplaces, and a live customer store.',
    url: 'https://omniretail-saree-frontend.vercel.app/login',
    login: 'admin@ganpati.local',
    password: 'Ganpati@12345',
    slug: 'ganpati',
    tags: ['Saree / Fashion', 'Inventory', 'WhatsApp', 'Storefront'],
    image: '/demos/omniretail.svg',
  },
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
      'Staff management with live face-based attendance, shifts, payroll tools, and attendance settings.',
    url: 'https://kisanmall-hr.vercel.app/admin',
    login: '9999999999',
    password: 'admin123',
    tags: ['HR', 'Attendance', 'Shifts', 'Face Recognition'],
    image: '/demos/hr-dashboard.png',
    gallery: [
      '/demos/hr-dashboard.png',
      '/demos/hr-attendance.png',
      '/demos/hr-shifts.png',
      '/demos/hr-settings.png',
    ],
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
    image: '/demos/stock-audit.png',
  },
  {
    id: 'refurbicon',
    title: 'Refurbicon Admin + Shop',
    category: 'ERP · Ecommerce',
    description:
      'Full refurbished electronics platform — Enterprise ERP admin, inventory, and customer shop with live catalog.',
    url: 'https://refurbicon-bhilwara.vercel.app/login',
    login: 'admin@refurbicon.com',
    password: 'admin123',
    tags: ['Admin Panel', 'Inventory', 'Shop'],
    image: '/demos/refurbicon-dashboard.png',
    gallery: [
      '/demos/refurbicon-dashboard.png',
      '/demos/refurbicon-inventory.png',
      '/demos/refurbicon-shop.png',
      '/demos/refurbicon-laptops.png',
    ],
  },
]

export type CaseStudy = {
  id: string
  title: string
  industry: string
  result: string
  summary: string
  productIds: string[]
  demoId?: string
}

export const flagshipProducts = products.filter((p) => p.flagship)
export const catalogProducts = products.filter((p) => !p.flagship)
export const flagshipDemos = demos.filter((d) => d.flagship)

export function getDemo(id?: string) {
  if (!id) return undefined
  return demos.find((d) => d.id === id)
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'coldflow',
    title: 'ColdFlow',
    industry: 'Cold Storage',
    result: 'Live SaaS ERP',
    summary:
      'Complete cold storage management — chamber occupancy, lot-wise inward/outward, stock ledger, and rent billing with GST. Open the live demo today.',
    productIds: ['coldflow'],
    demoId: 'coldflow',
  },
  {
    id: 'omniretail',
    title: 'OMNIRETAIL',
    industry: 'Clothing · Saree · Fashion',
    result: 'Omnichannel retail OS',
    summary:
      'Retail software for saree and fashion brands: isolated company tenants, inventory, orders, WhatsApp, marketplaces, and a branded storefront.',
    productIds: ['omniretail'],
    demoId: 'omniretail',
  },
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
