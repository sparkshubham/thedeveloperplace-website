import type { AiFeature, ChatMessage } from '@/types'

export const aiFeatures: AiFeature[] = [
  {
    id: 'recommendations',
    title: 'AI-powered product recommendations',
    description: 'Surface the right SKU based on history, stock, and buyer intent.',
    icon: 'Sparkles',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp AI sales assistant',
    description: 'Qualify leads, answer FAQs, and push orders through chat.',
    icon: 'MessageCircle',
  },
  {
    id: 'responses',
    title: 'Automated customer responses',
    description: 'Instant, on-brand replies for common questions — day and night.',
    icon: 'Reply',
  },
  {
    id: 'forecasting',
    title: 'Inventory forecasting',
    description: 'Predict demand and reduce stockouts with smarter planning signals.',
    icon: 'TrendingUp',
  },
  {
    id: 'reporting',
    title: 'Intelligent reporting',
    description: 'Ask for insights in plain language and get actionable summaries.',
    icon: 'BarChart3',
  },
  {
    id: 'documents',
    title: 'Document and data processing',
    description: 'Extract, classify, and file invoices, orders, and forms automatically.',
    icon: 'FileSearch',
  },
  {
    id: 'workflows',
    title: 'Workflow automation',
    description: 'Trigger multi-step business processes without manual handoffs.',
    icon: 'Workflow',
  },
]

export const chatDemo: ChatMessage[] = [
  {
    role: 'customer',
    text: 'Do you have Banarasi silk sarees in maroon under ₹8,000?',
    delay: 400,
  },
  {
    role: 'assistant',
    text: 'Checking live stock across warehouses…',
    delay: 1400,
  },
  {
    role: 'assistant',
    text: 'Yes — 14 pieces available. Top match: “Maroon Zari Weave” at ₹7,450 (Warehouse A).',
    delay: 2600,
  },
  {
    role: 'customer',
    text: 'Great. Please reserve one and create an order for Priya Sharma.',
    delay: 3800,
  },
  {
    role: 'assistant',
    text: 'Order #ORD-2841 created. Stock reserved, invoice draft ready, and WhatsApp confirmation sent.',
    delay: 5000,
  },
]
