import { cn } from '@/lib/utils'

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-electric/25 bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-soft',
        className,
      )}
    >
      {children}
    </span>
  )
}
