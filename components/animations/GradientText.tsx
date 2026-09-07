import { cn } from '@/lib/utils'

export function GradientText({
  children,
  className,
  animated = true,
}: {
  children: React.ReactNode
  className?: string
  animated?: boolean
}) {
  return (
    <span
      className={cn(
        animated ? 'text-gradient-animated' : 'text-gradient',
        className,
      )}
    >
      {children}
    </span>
  )
}
